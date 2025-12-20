"""
통합 Flask 애플리케이션
6개의 독립 시스템을 하나로 통합
"""
from flask import Flask, render_template_string
from flask_cors import CORS
from dotenv import load_dotenv
import os

# .env 파일 로드
load_dotenv()

# 환경변수 설정 (cloudtype.io PostgreSQL)
if not os.getenv("DATABASE_URL"):
    os.environ["DATABASE_URL"] = "postgresql://secretboard_user:xToIsayLLO9nFmeiAPChiF96d3khj8Eq@svc.sel3.cloudtype.app:32624/secretboard"

# 개발/프로덕션 모드 설정
# USE_BUILD_FILES=true 이면 빌드된 파일 사용 (프로덕션)
# USE_BUILD_FILES=false 또는 미설정이면 원본 파일 사용 (개발)
USE_BUILD_FILES = os.getenv("USE_BUILD_FILES", "false").lower() == "true"
print(f"🔧 실행 모드: {'프로덕션 (빌드 파일 사용)' if USE_BUILD_FILES else '개발 (원본 파일 사용)'}")

# Flask 앱 생성
app = Flask(__name__)

# CORS 설정 (모든 오리진 허용)
CORS(app, resources={r"/api/*": {"origins": "*"}})

# SECRET_KEY 설정
app.secret_key = os.getenv("SECRET_KEY", "dev-secret-change-in-production")

# 템플릿 캐시 비활성화 (개발 모드)
app.config['TEMPLATES_AUTO_RELOAD'] = True
app.config['SEND_FILE_MAX_AGE_DEFAULT'] = 0
app.jinja_env.auto_reload = True
app.jinja_env.cache = {}

# 추가 Flask 설정
app.config['MAX_CONTENT_LENGTH'] = int(os.getenv("MAX_FILE_MB", "10")) * 1024 * 1024
app.config['USE_BUILD_FILES'] = USE_BUILD_FILES

# 각 앱의 Blueprint 임포트 및 등록
print("🔧 Blueprint 등록 시작...")

# 1. 비밀게시판
try:
    from apps.secret.blueprint import secret_bp, init_app as secret_init
    secret_init(app)
    print("✅ 비밀게시판 Blueprint 등록 완료")
except Exception as e:
    print(f"❌ 비밀게시판 Blueprint 등록 실패: {e}")

# 2. 만세력
try:
    from apps.mans.blueprint import init_app as mans_init
    mans_init(app)
    print("✅ 만세력 Blueprint 등록 완료")
except Exception as e:
    print(f"❌ 만세력 Blueprint 등록 실패: {e}")

# 3. 육효
try:
    from apps.y6.blueprint import init_app as y6_init
    y6_init(app)
    print("✅ 육효 Blueprint 등록 완료")
except Exception as e:
    print(f"❌ 육효 Blueprint 등록 실패: {e}")

# 4. 타로카드
try:
    from apps.tarot.blueprint import init_app as tarot_init
    tarot_init(app)
    print("✅ 타로카드 Blueprint 등록 완료")
except Exception as e:
    print(f"❌ 타로카드 Blueprint 등록 실패: {e}")

# 5. 토정비결
try:
    from apps.toj.blueprint import init_app as toj_init
    toj_init(app)
    print("✅ 토정비결 Blueprint 등록 완료")
except Exception as e:
    print(f"❌ 토정비결 Blueprint 등록 실패: {e}")

# 6. 사주팔자
try:
    from apps.saju.blueprint import init_app as saju_init
    saju_init(app)
    print("✅ 사주팔자 Blueprint 등록 완료")
except Exception as e:
    print(f"❌ 사주팔자 Blueprint 등록 실패: {e}")

print("✅ 모든 Blueprint 등록 완료")

# 디버깅: 등록된 라우트 출력
print("\n🔍 등록된 라우트 목록:")
for rule in app.url_map.iter_rules():
    if 'saju' in str(rule):
        print(f"  - {rule.rule} [{', '.join(rule.methods)}] -> {rule.endpoint}")
print()

# 메인 홈 페이지
@app.route("/")
def home():
    """통합 시스템 홈페이지"""
    html = """
    <!DOCTYPE html>
    <html lang="ko">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>심리상담 과 운세보기</title>
        <style>
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }
            body {
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', sans-serif;
                background: linear-gradient(135deg, #1e3c72 0%, #2a5298 50%, #7e22ce 100%);
                min-height: 100vh;
                display: flex;
                justify-content: center;
                align-items: center;
                padding: 15px;
            }
            .container {
                max-width: 780px;
                width: 100%;
            }
            h1 {
                text-align: center;
                color: white;
                font-size: 1.5rem;
                font-weight: 700;
                margin-bottom: 8px;
                text-shadow: 0 2px 8px rgba(0,0,0,0.3);
                letter-spacing: -0.5px;
            }
            .subtitle {
                text-align: center;
                color: rgba(255,255,255,0.85);
                font-size: 0.8rem;
                margin-bottom: 25px;
                font-weight: 400;
            }
            .grid {
                display: grid;
                grid-template-columns: repeat(3, 1fr);
                gap: 12px;
                margin-bottom: 20px;
            }
            .card {
                background: rgba(255, 255, 255, 0.95);
                backdrop-filter: blur(10px);
                border-radius: 12px;
                padding: 20px 12px;
                text-align: center;
                box-shadow: 0 4px 15px rgba(0,0,0,0.15);
                transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                cursor: pointer;
                text-decoration: none;
                color: inherit;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                border: 1px solid rgba(255,255,255,0.2);
                position: relative;
                overflow: hidden;
            }
            .card::before {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background: linear-gradient(135deg, rgba(126,34,206,0.05), rgba(30,60,114,0.05));
                opacity: 0;
                transition: opacity 0.3s ease;
            }
            .card:hover {
                transform: translateY(-4px);
                box-shadow: 0 8px 25px rgba(0,0,0,0.25);
                border-color: rgba(126,34,206,0.3);
            }
            .card:hover::before {
                opacity: 1;
            }
            .card:active {
                transform: translateY(-2px);
            }
            .card-icon {
                font-size: 2rem;
                margin-bottom: 8px;
                filter: grayscale(0);
                transition: transform 0.3s ease;
                position: relative;
                z-index: 1;
            }
            .card:hover .card-icon {
                transform: scale(1.1);
            }
            .card-title {
                font-size: 0.95rem;
                font-weight: 600;
                margin-bottom: 4px;
                color: #1a1a1a;
                position: relative;
                z-index: 1;
            }
            .card-description {
                color: #666;
                font-size: 0.7rem;
                line-height: 1.4;
                display: none;
                position: relative;
                z-index: 1;
            }
            .footer {
                text-align: center;
                color: rgba(255,255,255,0.7);
                margin-top: 20px;
                font-size: 0.7rem;
                font-weight: 300;
            }
            
            /* 태블릿 (768px ~ 1023px) */
            @media (min-width: 768px) and (max-width: 1023px) {
                .container {
                    max-width: 680px;
                }
                h1 {
                    font-size: 1.75rem;
                    margin-bottom: 10px;
                }
                .subtitle {
                    font-size: 0.9rem;
                    margin-bottom: 30px;
                }
                .grid {
                    gap: 15px;
                }
                .card {
                    padding: 24px 16px;
                }
                .card-icon {
                    font-size: 2.2rem;
                    margin-bottom: 10px;
                }
                .card-title {
                    font-size: 1rem;
                }
                .card-description {
                    display: block;
                    font-size: 0.75rem;
                }
            }
            
            /* PC (1024px 이상) */
            @media (min-width: 1024px) {
                .container {
                    max-width: 780px;
                }
                h1 {
                    font-size: 2rem;
                    margin-bottom: 12px;
                }
                .subtitle {
                    font-size: 1rem;
                    margin-bottom: 35px;
                }
                .grid {
                    gap: 16px;
                }
                .card {
                    padding: 28px 18px;
                }
                .card-icon {
                    font-size: 2.5rem;
                    margin-bottom: 12px;
                }
                .card-title {
                    font-size: 1.1rem;
                    margin-bottom: 6px;
                }
                .card-description {
                    display: block;
                    font-size: 0.8rem;
                }
            }
            
            /* 작은 모바일 (480px 이하) */
            @media (max-width: 480px) {
                body {
                    padding: 10px;
                }
                h1 {
                    font-size: 1.3rem;
                }
                .subtitle {
                    font-size: 0.75rem;
                    margin-bottom: 20px;
                }
                .grid {
                    gap: 10px;
                    grid-template-columns: repeat(2, 1fr);
                }
                .card {
                    padding: 18px 10px;
                }
                .card-icon {
                    font-size: 1.8rem;
                    margin-bottom: 6px;
                }
                .card-title {
                    font-size: 0.85rem;
                }
            }
        </style>
    </head>
    <body>
        <div class="container">
            <h1>🔮 심리상담 과 운세보기</h1>
            <p class="subtitle">심리상담에서 다양한 운세 서비스를 한 곳에서</p>
            
            <div class="grid">
                <a href="/secret/main_index" class="card">
                    <div class="card-icon">🏥</div>
                    <h2 class="card-title">심리상담 센터</h2>
                    <p class="card-description">나라톡톡 심리상담 센터</p>
                </a>
                
                <a href="/secret" class="card">
                    <div class="card-icon">🔒</div>
                    <h2 class="card-title">비밀게시판</h2>
                    <p class="card-description">심리상담 과 비밀상담 내용관리</p>
                </a>
                
                <a href="/mans/calendar" class="card">
                    <div class="card-icon">📅</div>
                    <h2 class="card-title">만세력</h2>
                    <p class="card-description">사주 계산</p>
                </a>
                
                <a href="/y6" class="card">
                    <div class="card-icon">☯</div>
                    <h2 class="card-title">육효</h2>
                    <p class="card-description">주역 점괘</p>
                </a>
                
                <a href="/tarot" class="card">
                    <div class="card-icon">🃏</div>
                    <h2 class="card-title">타로카드</h2>
                    <p class="card-description">카드 운세</p>
                </a>
                
                <a href="/toj" class="card">
                    <div class="card-icon">📖</div>
                    <h2 class="card-title">토정비결</h2>
                    <p class="card-description">한 해 운세</p>
                </a>
                
                <a href="/saju" class="card">
                    <div class="card-icon">🌟</div>
                    <h2 class="card-title">사주팔자</h2>
                    <p class="card-description">사주 분석</p>
                </a>
            </div>
            
            <div class="footer">
                <p>© 2025 심리상담 과 통합 운세(나라톡톡) url: naratt.kr</p>
            </div>
        </div>
    </body>
    </html>
    """
    return render_template_string(html)

# Health check endpoint (Render.com용)
@app.route("/health")
def health_check():
    return {"status": "ok", "message": "통합 애플리케이션 정상 작동 중"}

if __name__ == '__main__':
    port = int(os.environ.get('PORT', 5000))
    app.run(host='0.0.0.0', port=port, debug=False)

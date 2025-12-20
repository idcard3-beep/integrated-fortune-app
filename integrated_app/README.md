# 통합 운세 플랫폼

6개의 독립 시스템을 하나로 통합한 Flask 기반 웹 애플리케이션입니다.

## 📋 시스템 구성

1. **비밀게시판** (`/secret`) - 익명 게시판 및 상담 시스템
2. **만세력** (`/mans`) - 사주 만세력 계산
3. **육효** (`/y6`) - 육효 점괘 시스템
4. **타로카드** (`/tarot`) - 타로카드 점술
5. **토정비결** (`/toj`) - 전통 토정비결
6. **사주팔자** (`/saju`) - 상세 사주팔자 분석

## 🚀 빠른 시작

### 로컬 실행 (개발 환경)

```bash
# 1. 의존성 설치
pip install -r requirements.txt

# 2. 실행
python run_local.py

# 또는 Windows
run_local.bat

# 3. 브라우저에서 접속
# http://localhost:5000
```

### 서버 배포 (Render.com)

```bash
# 1. GitHub에 푸시
git push origin main

# 2. Render Dashboard에서 환경 변수 설정
# - FLASK_ENV=production
# - DEBUG=False
# - SECRET_KEY=<랜덤 키>

# 3. 자동 배포 실행
```

## 📚 상세 가이드

- [빠른 시작 가이드](QUICKSTART.md) - 기본 실행 방법
- [실행 가이드](RUN_GUIDE.md) - 상세 실행 및 트러블슈팅
- [환경 비교](ENV_COMPARISON.md) - 로컬 vs 서버 환경 차이점
- [프론트엔드 빌드](FRONTEND_BUILD_GUIDE.md) - 정적 파일 빌드 방법
- [배포 체크리스트](DEPLOY_FILES_CHECKLIST-1.md) - 배포 전 확인사항

## 🔧 주요 파일

- `main_app.py` - 메인 애플리케이션
- `run_local.py` - 로컬 실행 스크립트
- `.env` - 로컬 환경 변수 (git에 포함 안 됨)
- `requirements.txt` - Python 의존성
- `Procfile` - 서버 실행 명령어
- `render.yaml` - Render.com 배포 설정

## 🛠️ 기술 스택

- **Backend**: Flask 3.1.2
- **Database**: PostgreSQL (비밀게시판만 사용)
- **Server**: Gunicorn
- **Deployment**: Render.com
- **Python**: 3.9+

## 📁 프로젝트 구조

```
integrated_app/
├── main_app.py              # 메인 애플리케이션
├── run_local.py             # 로컬 실행 스크립트
├── run_local.bat            # Windows 실행 스크립트
├── run_local.sh             # Linux/Mac 실행 스크립트
├── .env                     # 환경 변수 (로컬)
├── .env.example             # 환경 변수 예시
├── requirements.txt         # Python 의존성
├── Procfile                 # 서버 실행 명령어
├── render.yaml              # Render 배포 설정
├── apps/                    # 각 시스템 Blueprint
│   ├── secret/             # 비밀게시판
│   ├── mans/               # 만세력
│   ├── y6/                 # 육효
│   ├── tarot/              # 타로카드
│   ├── toj/                # 토정비결
│   └── saju/               # 사주팔자
└── build/                   # 빌드된 프론트엔드 파일
    └── web/
```

## 🌐 환경별 설정

### 로컬 개발 환경

```env
FLASK_ENV=development
DEBUG=True
PORT=5000
HOST=127.0.0.1
```

### 서버 프로덕션 환경

```env
FLASK_ENV=production
DEBUG=False
HOST=0.0.0.0
PORT=<Render 자동 할당>
```

## 📊 API 엔드포인트

### 공통

- `GET /` - 메인 홈페이지
- `GET /health` - 상태 확인

### 각 시스템

- `/secret/*` - 비밀게시판 관련 API
- `/mans/*` - 만세력 관련 API
- `/y6/*` - 육효 관련 API
- `/tarot/*` - 타로카드 관련 API
- `/toj/*` - 토정비결 관련 API
- `/saju/*` - 사주팔자 관련 API

## 🔒 보안 설정

### 환경 변수 (필수)

- `SECRET_KEY`: Flask 세션 암호화 키
- `DATABASE_URL`: PostgreSQL 연결 문자열
- `FLASK_ENV`: 실행 환경 (development/production)
- `DEBUG`: 디버그 모드 (True/False)

### .gitignore

`.env` 파일은 git에 포함되지 않습니다. `.env.example`을 복사하여 사용하세요.

## 🧪 테스트

```bash
# Health Check
curl http://localhost:5000/health

# 각 시스템 확인
curl http://localhost:5000/secret
curl http://localhost:5000/mans
curl http://localhost:5000/y6
curl http://localhost:5000/tarot
curl http://localhost:5000/toj
curl http://localhost:5000/saju
```

## 🐛 트러블슈팅

### 포트 이미 사용 중

```bash
# Windows
netstat -ano | findstr :5000
taskkill /PID <PID> /F

# Linux/Mac
lsof -ti:5000 | xargs kill -9
```

### 모듈 없음 에러

```bash
pip install -r requirements.txt
```

### Blueprint 등록 실패

- 해당 프로젝트 폴더 확인
- `mainpillar.py` 존재 확인
- 경로 설정 확인

자세한 내용은 [RUN_GUIDE.md](RUN_GUIDE.md)를 참고하세요.

## 📞 도움말

문제가 발생하면:

1. [RUN_GUIDE.md](RUN_GUIDE.md)의 트러블슈팅 섹션 확인
2. 환경 변수 설정 확인
3. Python 버전 확인 (3.9 이상)
4. 의존성 재설치

## 📝 라이선스

이 프로젝트는 개인 프로젝트입니다.

## 👥 기여

이 프로젝트는 현재 단독 개발 중입니다.

---

**최종 업데이트**: 2025-12-16  
**버전**: 1.0.0

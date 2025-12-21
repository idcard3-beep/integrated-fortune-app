"""
비밀게시판 Blueprint
"""
from flask import Blueprint, render_template, session
import os

# 환경변수에 따라 경로 선택 (기본값: true - 프로덕션 배포 시 빌드 파일 사용)
USE_BUILD = os.getenv('USE_BUILD_FILES', 'true').lower() == 'true'

# Blueprint 파일의 디렉토리를 기준으로 절대 경로 계산
blueprint_dir = os.path.dirname(os.path.abspath(__file__))

if USE_BUILD:
    # 프로덕션: 빌드된 파일 사용 (난독화/압축)
    template_folder = os.path.abspath(os.path.join(blueprint_dir, '../../build/web/project-002_비밀게시판/templates'))
    static_folder = os.path.abspath(os.path.join(blueprint_dir, '../../build/web/project-002_비밀게시판/static'))
else:
    # 개발: 원본 파일 사용
    template_folder = os.path.abspath(os.path.join(blueprint_dir, '../../../project-002_비밀게시판/web/templates'))
    static_folder = os.path.abspath(os.path.join(blueprint_dir, '../../../project-002_비밀게시판/web/static'))

# 디버깅: 경로 출력 및 검증
print(f"🔍 비밀게시판 Blueprint 설정:")
print(f"  - USE_BUILD: {USE_BUILD}")
print(f"  - blueprint_dir: {blueprint_dir}")
print(f"  - template_folder: {template_folder}")
print(f"  - static_folder: {static_folder}")
print(f"  - template_folder exists: {os.path.exists(template_folder)}")
print(f"  - static_folder exists: {os.path.exists(static_folder)}")

# 경로 검증
if not os.path.exists(template_folder):
    print(f"⚠️  경고: template_folder가 존재하지 않습니다: {template_folder}")
    # 대체 경로 시도
    alt_path = os.path.join(os.path.dirname(blueprint_dir), '../../build/web/project-002_비밀게시판/templates')
    alt_path = os.path.abspath(alt_path)
    if os.path.exists(alt_path):
        print(f"  → 대체 경로 사용: {alt_path}")
        template_folder = alt_path
    else:
        print(f"  ❌ 대체 경로도 존재하지 않음: {alt_path}")
        # 현재 작업 디렉토리 확인
        print(f"  - 현재 작업 디렉토리: {os.getcwd()}")
        # build 폴더 확인
        build_base = os.path.join(os.getcwd(), 'build', 'web', 'project-002_비밀게시판')
        if os.path.exists(build_base):
            print(f"  - build 폴더 발견: {build_base}")
            template_folder = os.path.join(build_base, 'templates')
            static_folder = os.path.join(build_base, 'static')
            print(f"  → 수정된 경로: template_folder={template_folder}, static_folder={static_folder}")

if os.path.exists(static_folder):
    print(f"  - static files count: {len(os.listdir(static_folder))}")
else:
    print(f"⚠️  경고: static_folder가 존재하지 않습니다: {static_folder}")

# Blueprint 생성
secret_bp = Blueprint(
    'secret',
    __name__,
    template_folder=template_folder,
    static_folder=static_folder,
    static_url_path='/static',  # url_prefix와 결합되어 /secret/static이 됨
    url_prefix='/secret'
)

# 디버깅: Blueprint 설정 확인
print(f"🔍 Blueprint 정적 파일 설정:")
print(f"   - static_folder: {static_folder}")
print(f"   - static_url_path: /static")
print(f"   - url_prefix: /secret")
print(f"   - 실제 정적 파일 URL: /secret/static/")

# 기존 API blueprints 임포트
import sys
# 프로젝트 경로 추가 (Docker 컨테이너 내부 경로 고려)
project_path = os.path.join(os.path.dirname(__file__), '../../../project-002_비밀게시판')
project_path = os.path.abspath(project_path)
# 현재 작업 디렉토리 기준 경로도 시도
current_dir_project = os.path.join(os.getcwd(), '../project-002_비밀게시판')
current_dir_project = os.path.abspath(current_dir_project)
# 절대 경로 기준 (Docker 컨테이너: /app/project-002_비밀게시판)
absolute_project = '/app/project-002_비밀게시판'

print(f"🔍 API 모듈 경로 탐색:")
print(f"  - project_path (상대경로): {project_path}")
print(f"  - current_dir_project: {current_dir_project}")
print(f"  - absolute_project: {absolute_project}")
print(f"  - 현재 작업 디렉토리: {os.getcwd()}")

# 경로 존재 여부 확인 후 추가
if os.path.exists(project_path):
    sys.path.insert(0, project_path)
    print(f"  ✅ 상대경로 추가: {project_path}")
elif os.path.exists(current_dir_project):
    sys.path.insert(0, current_dir_project)
    print(f"  ✅ 현재 디렉토리 기준 경로 추가: {current_dir_project}")
elif os.path.exists(absolute_project):
    sys.path.insert(0, absolute_project)
    print(f"  ✅ 절대경로 추가: {absolute_project}")
else:
    print(f"  ⚠️  경고: 프로젝트 경로를 찾을 수 없습니다")
    # 마지막 시도: 상대경로 추가
    sys.path.insert(0, project_path)
    print(f"  → 상대경로 강제 추가: {project_path}")

from api.tickets import bp as tickets_bp
from api.messages import bp as messages_bp
from api.admin import bp as admin_bp
from api.files import bp as files_bp
from api.smembers import bp as smembers_bp
from api.corpus import bp as corpus_bp

# Routes
@secret_bp.route("/")
def home():
    """비밀게시판 홈페이지 (목록 페이지)"""
    template_name = "list.html"
    template_path = os.path.join(template_folder, template_name)
    
    print(f"🔍 /secret/ 라우트 호출됨")
    print(f"  - template_folder: {template_folder}")
    print(f"  - template_name: {template_name}")
    print(f"  - template_path: {template_path}")
    print(f"  - template exists: {os.path.exists(template_path)}")
    
    if not os.path.exists(template_path):
        print(f"❌ 템플릿 파일을 찾을 수 없음: {template_path}")
        if os.path.exists(template_folder):
            files = os.listdir(template_folder)
            print(f"  - template_folder 내용 ({len(files)}개 파일):")
            for f in files[:10]:  # 처음 10개만 출력
                print(f"    - {f}")
        else:
            print(f"  - template_folder 자체가 존재하지 않음")
        from flask import abort
        abort(404, description=f"Template not found: {template_name}")
    
    try:
        return render_template(template_name)
    except Exception as e:
        print(f"❌ 템플릿 렌더링 오류: {e}")
        from flask import abort
        abort(500, description=f"Template rendering error: {str(e)}")

@secret_bp.route("/main_index")
def main_index():
    return render_template("main_index.html")

@secret_bp.route("/main_adminMenu.html")  # 추가: /secret/main_adminMenu.html 경로 지원
def main_admin_menu():
    return render_template("main_adminMenu.html")

@secret_bp.route("/new")
def new():
    return render_template("new.html")

# 주의: 쿼리 파라미터 방식 라우트를 먼저 등록해야 함 (라우트 순서 중요)
@secret_bp.route("/view", endpoint='view_query')
def view_query():
    """쿼리 파라미터 방식으로 view 페이지 서빙 (?id=...)"""
    from flask import request
    print(f"🔍 /view 쿼리 파라미터 라우트 호출됨")
    ticket_id = request.args.get('id')
    print(f"   - ticket_id: {ticket_id}")
    if not ticket_id:
        from flask import abort
        print(f"❌ ticket_id가 없음")
        abort(404)
    print(f"✅ view.html 렌더링 시작 (ticket_id: {ticket_id})")
    return render_template("view.html", ticket_id=ticket_id)

@secret_bp.route("/view/<int:ticket_id>", endpoint='view_path')
def view(ticket_id):
    """경로 파라미터 방식으로 view 페이지 서빙 (/view/123)"""
    print(f"🔍 /view/<int:ticket_id> 경로 라우트 호출됨 (ticket_id: {ticket_id})")
    return render_template("view.html", ticket_id=ticket_id)

# 주의: 쿼리 파라미터 방식 라우트를 먼저 등록해야 함 (라우트 순서 중요)
@secret_bp.route("/edit", endpoint='edit_query')
def edit_query():
    """쿼리 파라미터 방식으로 edit 페이지 서빙 (?id=...)"""
    from flask import request
    ticket_id = request.args.get('id')
    if not ticket_id:
        from flask import abort
        abort(404)
    return render_template("edit.html", ticket_id=ticket_id)

@secret_bp.route("/edit/<int:ticket_id>", endpoint='edit_path')
def edit(ticket_id):
    """경로 파라미터 방식으로 edit 페이지 서빙 (/edit/123)"""
    return render_template("edit.html", ticket_id=ticket_id)

@secret_bp.route("/admin")
def admin():
    return render_template("admin_login.html")

@secret_bp.route("/admin_login")  # 추가: /secret/admin_login 경로 지원
def admin_login_alt():
    return render_template("admin_login.html")

@secret_bp.route("/admin/list")
def admin_list():
    return render_template("admin_list.html")

@secret_bp.route("/admin_list")  # 추가: /secret/admin_list 경로 지원
def admin_list_alt():
    return render_template("admin_list.html")

@secret_bp.route("/admin/view/<int:ticket_id>")
def admin_view(ticket_id):
    return render_template("admin_view.html", ticket_id=ticket_id)

@secret_bp.route("/admin_view")  # 추가: 쿼리 파라미터 방식 지원
def admin_view_alt():
    from flask import request
    ticket_id = request.args.get('id')
    return render_template("admin_view.html", ticket_id=ticket_id)

@secret_bp.route("/admin/memlist")
def admin_memlist():
    return render_template("admin_memlist.html")

@secret_bp.route("/admin/session")
def admin_session():
    return render_template("admin_session.html")

@secret_bp.route("/admin/membatch")
def admin_membatch():
    return render_template("admin_membatch.html")

@secret_bp.route("/admin/memcard")
def admin_memcard():
    return render_template("admin_memcard.html")

@secret_bp.route("/admin/menu")
def admin_menu():
    return render_template("admin_menu.html")

# 관리자 페이지 라우트 추가 (.html 확장자 지원)
# 주의: 이 라우트들은 정적 파일 라우트보다 먼저 등록되어야 함
@secret_bp.route("/a02_admin_memcard.html", endpoint='a02_admin_memcard')
def a02_admin_memcard():
    """a02_admin_memcard.html 페이지 서빙"""
    print(f"🔍 a02_admin_memcard.html 라우트 호출됨!")
    print(f"   - template_folder: {template_folder}")
    print(f"   - template_folder exists: {os.path.exists(template_folder)}")
    
    template_path = os.path.join(template_folder, 'a02_admin_memcard.html')
    print(f"   - template file path: {template_path}")
    print(f"   - template file exists: {os.path.exists(template_path)}")
    
    if not os.path.exists(template_path):
        from flask import abort
        print(f"❌ 템플릿 파일을 찾을 수 없음: {template_path}")
        if os.path.exists(template_folder):
            print(f"   - template_folder 내용: {os.listdir(template_folder)[:10]}")
        abort(404)
    
    try:
        result = render_template("a02_admin_memcard.html")
        print(f"✅ a02_admin_memcard.html 렌더링 성공")
        return result
    except Exception as e:
        from flask import abort
        print(f"❌ 템플릿 렌더링 오류: {e}")
        abort(500)

@secret_bp.route("/a03_admin_memlist.html", endpoint='a03_admin_memlist')
def a03_admin_memlist():
    return render_template("a03_admin_memlist.html")

@secret_bp.route("/a05_admin_membatch.html", endpoint='a05_admin_membatch')
def a05_admin_membatch():
    return render_template("a05_admin_membatch.html")

@secret_bp.route("/a06_adminCard.html", endpoint='a06_adminCard')
def a06_adminCard():
    return render_template("a06_adminCard.html")

# 상담 관련 페이지들
@secret_bp.route("/sit001")
def sit001():
    return render_template("0101_Center_intro.html")

@secret_bp.route("/sit002")
def sit002():
    return render_template("0102_greet.html")

@secret_bp.route("/sit003")
def sit003():
    return render_template("0103_couns_expert.html")

@secret_bp.route("/sit004")
def sit004():
    return render_template("0104_map.html")

@secret_bp.route("/sit005")
def sit005():
    return render_template("0201_process.html")

@secret_bp.route("/sit005.html")  # 추가: .html 확장자 지원
def sit005_html():
    return render_template("sit005.html")



@secret_bp.route("/sit011")
def sit011():
    return render_template("0301_main_psychol.html")

@secret_bp.route("/sit012")
def sit012():
    return render_template("0302_main_life.html")

@secret_bp.route("/sit013")
def sit013():
    return render_template("0303_name_rules.html")
@secret_bp.route("/sit014")
def sit014():
    return render_template("0304_color_counguide.html")
@secret_bp.route("/sit015")
def sit015():
    return render_template("0305_color_psychology120.html")
@secret_bp.route("/sit016")
def sit016():
    return render_template("0306_color_psychology1202.html")


@secret_bp.route("/sit021")
def sit021():
    return render_template("1101_tarot_cards.html")

@secret_bp.route("/sit022")
def sit022():
    return render_template("1102_6yao.html")

@secret_bp.route("/1102_6yao.html")  # 추가: .html 확장자 지원
def sit022_html():
    return render_template("1102_6yao.html")

@secret_bp.route("/1102_6yao")  # 추가: 확장자 없이 접근 지원
def sit022_no_ext():
    return render_template("1102_6yao.html")

@secret_bp.route("/sit023")
def sit023():
    return render_template("1103_4Pillar.html")

@secret_bp.route("/sit024")
def sit024():
    return render_template("1104_tosecret.html")



# 추가 라우트
@secret_bp.route("/member_login")
def member_login_page():
    return render_template("member_login.html")

@secret_bp.route("/member_cardup")
def member_cardup():
    return render_template("member_cardup.html")

# Uploads 폴더 서빙
from flask import send_from_directory, jsonify
from werkzeug.utils import safe_join

@secret_bp.route("/uploads/<path:filename>")
def uploaded_file(filename):
    """uploads 폴더의 파일을 서빙합니다"""
    # 여러 경로 시도 (Docker 컨테이너 내부 경로 고려)
    possible_paths = [
        # 1. 상대 경로 (개발 환경)
        os.path.abspath(os.path.join(blueprint_dir, '../../../project-002_비밀게시판/uploads')),
        # 2. Docker 컨테이너 절대 경로
        '/app/project-002_비밀게시판/uploads',
        # 3. 현재 작업 디렉토리 기준
        os.path.join(os.getcwd(), 'project-002_비밀게시판', 'uploads'),
        # 4. blueprint_dir 기준 다른 경로
        os.path.abspath(os.path.join(blueprint_dir, '../../project-002_비밀게시판/uploads')),
    ]
    
    uploads_path = None
    for path in possible_paths:
        if os.path.exists(path):
            uploads_path = path
            print(f"✅ uploads 폴더 발견: {uploads_path}")
            break
    
    if not uploads_path:
        from flask import abort
        print(f"❌ uploads 폴더를 찾을 수 없음. 시도한 경로:")
        for path in possible_paths:
            print(f"   - {path} (exists: {os.path.exists(path)})")
        abort(404)
    
    return send_from_directory(uploads_path, filename)

# JSON 파일 서빙 (코퍼스 데이터)
@secret_bp.route("/api/corpus_data.json")
def corpus_data_json():
    """코퍼스 데이터 JSON 파일을 서빙합니다"""
    api_path = os.path.abspath(os.path.join(blueprint_dir, '../../../project-002_비밀게시판/api'))
    json_file = os.path.join(api_path, '0018.03-corpus_data.json')
    if not os.path.exists(json_file):
        from flask import abort
        print(f"❌ 코퍼스 데이터 JSON 파일을 찾을 수 없음: {json_file}")
        abort(404)
    return send_from_directory(api_path, '0018.03-corpus_data.json', mimetype='application/json')

# 정적 파일 서빙을 명시적으로 보장 (Blueprint의 자동 서빙이 작동하지 않을 경우 대비)
# Flask Blueprint는 자동으로 정적 파일을 서빙하지만, 명시적인 라우트를 추가하여 확실하게 보장
# 주의: 이 라우트는 다른 라우트보다 나중에 등록되어야 함 (라우트 순서 중요)
@secret_bp.route("/static/<path:filename>", endpoint='static_file')
def static_file(filename):
    """정적 파일을 명시적으로 서빙합니다"""
    try:
        from flask import safe_join, abort
        
        # 절대 경로로 변환된 static_folder 사용
        file_path = safe_join(static_folder, filename)
        
        if not file_path or not os.path.exists(file_path) or not os.path.isfile(file_path):
            print(f"❌ 정적 파일을 찾을 수 없음: {filename}")
            print(f"   - 요청 경로: /secret/static/{filename}")
            print(f"   - static_folder: {static_folder}")
            print(f"   - file_path: {file_path}")
            if os.path.exists(static_folder):
                files = os.listdir(static_folder)
                print(f"   - static_folder 내용 (처음 10개): {files[:10]}")
            abort(404)
        
        return send_from_directory(static_folder, filename)
    except (TypeError, ValueError) as e:
        from flask import abort
        print(f"❌ 정적 파일 경로 오류: {e}")
        print(f"   - filename: {filename}")
        print(f"   - static_folder: {static_folder}")
        abort(404)

def init_app(app):
    """Blueprint를 앱에 등록하는 함수"""
    # API blueprints 등록
    app.register_blueprint(tickets_bp, url_prefix="/secret/api/v1/tickets")
    app.register_blueprint(messages_bp, url_prefix="/secret/api/v1/messages")
    app.register_blueprint(admin_bp, url_prefix="/secret/api/v1/admin")
    app.register_blueprint(files_bp, url_prefix="/secret/api/v1/files")
    app.register_blueprint(smembers_bp, url_prefix="/secret/api/v1/smembers")
    app.register_blueprint(corpus_bp, url_prefix="/secret/api/v1/corpus")
    
    # Main blueprint 등록
    app.register_blueprint(secret_bp)
    
    # 디버깅: 등록된 라우트 확인
    print(f"\n🔍 secret blueprint 라우트 등록 확인:")
    print(f"   - secret_bp 등록됨: {secret_bp.name}")
    print(f"   - secret_bp url_prefix: {secret_bp.url_prefix}")
    
    # 모든 secret blueprint 라우트 확인
    secret_routes = [r for r in app.url_map.iter_rules() if 'secret' in r.endpoint or '/secret/' in r.rule]
    admin_routes = [r for r in secret_routes if 'a02' in r.rule or 'a03' in r.rule or 'a05' in r.rule or 'a06' in r.rule]
    view_routes = [r for r in secret_routes if 'view' in r.rule]
    
    print(f"   - 전체 secret 라우트 수: {len(secret_routes)}")
    
    # view 라우트 확인
    print(f"   - view 페이지 라우트:")
    for rule in view_routes:
        print(f"     ✅ {rule.rule} -> {rule.endpoint} [{', '.join(rule.methods)}]")
    
    # 관리자 페이지 라우트 확인
    print(f"   - 관리자 페이지 라우트:")
    for rule in admin_routes:
        print(f"     ✅ {rule.rule} -> {rule.endpoint} [{', '.join(rule.methods)}]")
    
    # admin_login 라우트 확인
    admin_login_routes = [r for r in secret_routes if 'admin_login' in r.rule or 'admin_login' in r.endpoint]
    print(f"   - admin_login 라우트:")
    for rule in admin_login_routes:
        print(f"     ✅ {rule.rule} -> {rule.endpoint} [{', '.join(rule.methods)}]")
    if not admin_login_routes:
        print(f"     ⚠️ admin_login 라우트가 등록되지 않았습니다!")
        print(f"     - secret_routes 샘플: {[r.rule for r in secret_routes[:10]]}")
    
    if not view_routes:
        print(f"     ⚠️ view 페이지 라우트가 등록되지 않았습니다!")
    if not admin_routes:
        print(f"     ⚠️ 관리자 페이지 라우트가 등록되지 않았습니다!")
        print(f"     - secret_routes 샘플: {[r.rule for r in secret_routes[:5]]}")
    
    print()  # 빈 줄 추가

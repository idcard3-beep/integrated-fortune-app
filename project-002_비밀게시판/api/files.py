from flask import Blueprint, request, jsonify, send_file, session
from core.security import verify_view_token
from config.settings import UPLOAD_ROOT, ALLOWED_EXT, MAX_FILE_MB
from adapters.repository_factory import get_repository
import os, uuid

bp = Blueprint('files', __name__)
repo = get_repository()

ADMIN_SESSION_KEY = 'admin_logged_in'

def get_writable_upload_root():
    """쓰기 가능한 uploads 폴더 경로를 찾아 반환합니다"""
    current_dir = os.getcwd()  # integrated_app/ 디렉토리
    current_parent = os.path.dirname(current_dir)  # integrated_app/의 상위 디렉토리
    
    # Blueprint 파일의 디렉토리를 기준으로 절대 경로 계산
    try:
        # files.py의 위치: project-002_비밀게시판/api/files.py
        blueprint_dir = os.path.dirname(os.path.abspath(__file__))
        project_dir = os.path.dirname(blueprint_dir)  # project-002_비밀게시판/
    except:
        blueprint_dir = None
        project_dir = None
    
    possible_paths = [
        # 1. integrated_app/ 내부에 uploads 폴더 생성 (권한 문제 회피, 가장 안전)
        os.path.join(current_dir, 'uploads'),
        # 2. 서버 구조: integrated_app/의 상위에서 project-002_비밀게시판/uploads 찾기
        os.path.join(current_parent, 'project-002_비밀게시판', 'uploads') if current_parent else None,
        # 3. 현재 디렉토리 기준 (로컬 개발 환경)
        os.path.join(current_dir, 'project-002_비밀게시판', 'uploads'),
        # 4. project_dir 기준 (files.py 위치 기준)
        os.path.join(project_dir, 'uploads') if project_dir else None,
        # 5. blueprint_dir 기준 상대 경로
        os.path.abspath(os.path.join(blueprint_dir, '../uploads')) if blueprint_dir else None,
        # 6. 기존 UPLOAD_ROOT (마지막 시도)
        UPLOAD_ROOT,
        # 7. Docker 컨테이너 절대 경로 (마지막 시도)
        '/app/project-002_비밀게시판/uploads',
    ]
    
    # None 값 제거
    possible_paths = [p for p in possible_paths if p is not None]
    
    # 먼저 존재하는 경로 확인
    for path in possible_paths:
        abs_path = os.path.abspath(path)
        if os.path.exists(abs_path):
            # 쓰기 권한 확인
            try:
                test_file = os.path.join(abs_path, '.write_test')
                with open(test_file, 'w') as f:
                    f.write('test')
                os.remove(test_file)
                print(f"✅ 쓰기 가능한 uploads 폴더 발견: {abs_path}")
                return abs_path
            except (IOError, OSError):
                continue
    
    # 존재하지 않으면 쓰기 가능한 경로에 생성 시도
    for path in possible_paths:
        abs_path = os.path.abspath(path)
        parent_dir = os.path.dirname(abs_path)
        if os.path.exists(parent_dir):
            try:
                # 쓰기 권한 확인
                test_file = os.path.join(parent_dir, '.write_test')
                with open(test_file, 'w') as f:
                    f.write('test')
                os.remove(test_file)
                # 쓰기 가능하면 uploads 폴더 생성
                os.makedirs(abs_path, exist_ok=True)
                print(f"✅ uploads 폴더 생성 완료: {abs_path}")
                return abs_path
            except (IOError, OSError):
                continue
    
    # 모든 시도 실패 시 기존 UPLOAD_ROOT 반환 (에러는 나중에 발생)
    print(f"⚠️  쓰기 가능한 uploads 폴더를 찾을 수 없음. 기본값 사용: {UPLOAD_ROOT}")
    return UPLOAD_ROOT

@bp.post('/upload-signature')
def upload_signature():
    """서명 이미지 업로드 (회원가입용)"""
    try:
        f = request.files.get('file')
        if not f:
            return jsonify({'ok': False, 'error': '파일이 없습니다.'}), 400
        
        # 쓰기 가능한 uploads 폴더 찾기
        upload_root = get_writable_upload_root()
        
        # 서명 파일 저장 폴더 - 찾거나 생성
        # upload_root는 이미 쓰기 가능한 경로이므로, 이를 기준으로 sign_file 폴더를 찾거나 생성
        current_dir = os.getcwd()  # integrated_app/ 디렉토리
        
        print(f"🔍 sign_file 폴더 검색/생성 시작")
        print(f"   현재 작업 디렉토리: {current_dir}")
        print(f"   upload_root (쓰기 가능): {upload_root}")
        
        sign_folder = None
        
        # 가능한 경로 목록 (upload_root 기준을 최우선으로)
        possible_sign_paths = [
            # 1. upload_root 기준 (이미 쓰기 가능한 경로이므로 최우선)
            os.path.join(upload_root, 'sign_file'),
            # 2. 서버 실제 경로
            '/app/integrated_app/upload/sign_file',
            # 3. upload_root의 상위에서 upload/sign_file
            os.path.join(os.path.dirname(upload_root), 'upload', 'sign_file'),
            # 4. integrated_app 내부
            os.path.join(current_dir, 'upload', 'sign_file'),
            os.path.join(current_dir, 'uploads', 'sign_file'),
            # 5. 서버 대체 경로
            '/app/integrated_app/uploads/sign_file',
        ]
        
        print(f"   🔄 경로 검색/생성 시작 (총 {len(possible_sign_paths)}개)")
        
        for idx, path in enumerate(possible_sign_paths, 1):
            abs_path = os.path.abspath(path)
            print(f"   [{idx}] 확인 중: {abs_path}")
            
            # 기존 폴더 확인
            if os.path.exists(abs_path) and os.path.isdir(abs_path):
                try:
                    test_file = os.path.join(abs_path, '.write_test')
                    with open(test_file, 'w') as tf:
                        tf.write('test')
                    os.remove(test_file)
                    sign_folder = abs_path
                    print(f"✅ [{idx}] 기존 sign_file 폴더 발견 (쓰기 가능): {sign_folder}")
                    break
                except (IOError, OSError) as e:
                    print(f"      ⚠️ 폴더는 존재하지만 쓰기 권한 없음: {e}")
                    continue
            
            # 폴더가 없으면 생성 시도
            try:
                parent_dir = os.path.dirname(abs_path)
                if os.path.exists(parent_dir):
                    # 상위 디렉토리 쓰기 권한 확인
                    test_file = os.path.join(parent_dir, '.write_test')
                    try:
                        with open(test_file, 'w') as tf:
                            tf.write('test')
                        os.remove(test_file)
                        # sign_file 폴더 생성
                        os.makedirs(abs_path, exist_ok=True)
                        # 생성 후 다시 쓰기 권한 확인
                        test_file2 = os.path.join(abs_path, '.write_test')
                        with open(test_file2, 'w') as tf2:
                            tf2.write('test')
                        os.remove(test_file2)
                        sign_folder = abs_path
                        print(f"✅ [{idx}] sign_file 폴더 생성 완료 (쓰기 가능): {sign_folder}")
                        break
                    except (IOError, OSError) as e:
                        print(f"      ⚠️ 상위 디렉토리 쓰기 권한 없음: {e}")
                        continue
                else:
                    print(f"      ⚠️ 상위 디렉토리 없음: {parent_dir}")
            except Exception as e:
                print(f"      ⚠️ 폴더 생성 실패: {e}")
                continue
        
        # 최종 확인
        if sign_folder:
            print(f"✅ 최종 사용할 sign_file 폴더: {sign_folder}")
        else:
            # 모든 시도 실패
            print(f"❌ sign_file 폴더를 찾거나 생성할 수 없음")
            print(f"   upload_root: {upload_root}")
            print(f"   시도한 경로:")
            for idx, path in enumerate(possible_sign_paths, 1):
                abs_path = os.path.abspath(path)
                exists = os.path.exists(abs_path)
                is_dir = os.path.isdir(abs_path) if exists else False
                print(f"   [{idx}] {abs_path} (존재: {exists}, 디렉토리: {is_dir})")
            return jsonify({
                'ok': False, 
                'error': f'sign_file 폴더를 찾거나 생성할 수 없습니다. (upload_root: {upload_root})'
            }), 500
        
        # 파일명 확인 (sMem_id_sMem_name.png 형식)
        filename = f.filename
        if not filename:
            return jsonify({'ok': False, 'error': '파일명이 없습니다.'}), 400
        
        # 파일 저장 경로
        file_path = os.path.join(sign_folder, filename)
        
        # 기존 파일이 있으면 덮어쓰기
        if os.path.exists(file_path):
            print(f"⚠️ 기존 파일 발견: {file_path} - 덮어쓰기 진행")
            try:
                # 기존 파일 삭제
                os.remove(file_path)
                print(f"✅ 기존 파일 삭제 완료: {file_path}")
            except Exception as e:
                print(f"⚠️ 기존 파일 삭제 실패: {e}")
                # 삭제 실패해도 새 파일 저장 시도 (덮어쓰기)
                try:
                    # 파일이 잠겨있거나 권한 문제일 수 있으므로, 강제로 덮어쓰기 시도
                    with open(file_path, 'wb') as existing_file:
                        existing_file.truncate(0)  # 파일 내용 비우기
                except Exception as e2:
                    print(f"⚠️ 파일 비우기 실패: {e2}")
        
        # 파일 저장
        try:
            f.save(file_path)
            print(f"✅ 서명 파일 저장 완료: {file_path}")
        except Exception as e:
            print(f"❌ 파일 저장 실패: {e}")
            import traceback
            traceback.print_exc()
            return jsonify({'ok': False, 'error': f'파일 저장 실패: {str(e)}'}), 500
        
        # 상대 경로 반환
        relative_path = os.path.join('uploads', 'sign_file', filename).replace('\\', '/')
        
        return jsonify({
            'ok': True,
            'path': relative_path,
            'message': '서명 이미지가 업로드되었습니다.'
        })
        
    except Exception as e:
        print(f"❌ 서명 이미지 업로드 오류: {e}")
        import traceback
        traceback.print_exc()
        return jsonify({'ok': False, 'error': str(e)}), 500

@bp.post('/<ticket_id>/upload')
def upload(ticket_id):
    token = request.cookies.get('view_token')
    is_user = token and verify_view_token(token, ticket_id)
# 권한 변경/ 잠시대기------    
    #is_admin = session.get(ADMIN_SESSION_KEY, False)
    #if not (is_user or is_admin):
    #    return ('', 403)
    #-----
    is_admin = session.get(ADMIN_SESSION_KEY, False)
    if not (is_admin):
        return ('', 403)
#---------------------
    f = request.files.get('file')
    if not f: return jsonify({'ok':False,'error':'파일 없음'}), 400
    ext = os.path.splitext(f.filename)[1].lower()
    if ext not in ALLOWED_EXT: return jsonify({'ok':False,'error':'허용되지 않는 확장자'}), 400
    f.seek(0, os.SEEK_END); size = f.tell(); f.seek(0)
    if size > MAX_FILE_MB*1024*1024: return jsonify({'ok':False,'error':'파일이 너무 큼'}), 400
    
    # 쓰기 가능한 uploads 폴더 찾기
    upload_root = get_writable_upload_root()
    folder = os.path.join(upload_root, ticket_id)
    try:
        os.makedirs(folder, exist_ok=True)
    except Exception as e:
        print(f"❌ 폴더 생성 실패: {e}")
        return jsonify({'ok':False,'error':f'폴더 생성 실패: {str(e)}'}), 500
    
    file_id = str(uuid.uuid4()) + ext
    path = os.path.join(folder, file_id)
    try:
        f.save(path)
    except Exception as e:
        print(f"❌ 파일 저장 실패: {e}")
        return jsonify({'ok':False,'error':f'파일 저장 실패: {str(e)}'}), 500
    
    try:
        repo.create_attachment(ticket_id, path, f.filename, f.mimetype, size)
    except Exception:
        pass
    return jsonify({'ok': True, 'file_id': file_id})

@bp.get('/<ticket_id>/download/<file_id>')
def download(ticket_id, file_id):
    token = request.cookies.get('view_token')
    is_user = token and verify_view_token(token, ticket_id)
    is_admin = session.get(ADMIN_SESSION_KEY, False)
    if not (is_user or is_admin):
        return ('', 403)
    
    # 쓰기 가능한 uploads 폴더 찾기 (다운로드는 읽기만 하므로 존재하는 경로 찾기)
    upload_root = get_writable_upload_root()
    path = os.path.join(upload_root, ticket_id, file_id)
    if not os.path.exists(path): return jsonify({'error':'not found'}), 404
    return send_file(path, as_attachment=True)

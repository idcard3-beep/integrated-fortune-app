"""
토정비결 Blueprint
"""
from flask import Blueprint, render_template, request, jsonify, send_from_directory
import os
import sys

# 프로젝트 경로 추가 (Docker 컨테이너 내부 경로 고려)
toj_project_path = os.path.join(os.path.dirname(__file__), '../../../project-011_토정비결')
toj_project_path = os.path.abspath(toj_project_path)
absolute_project = '/app/project-011_토정비결'

if os.path.exists(toj_project_path):
    sys.path.insert(0, toj_project_path)
elif os.path.exists(absolute_project):
    sys.path.insert(0, absolute_project)
else:
    sys.path.insert(0, toj_project_path)  # 마지막 시도

from mainpillar import calc_saju, convert_lunar_to_solar

# 환경변수에 따라 경로 선택 (기본값: true - 프로덕션 배포 시 빌드 파일 사용)
USE_BUILD = os.getenv('USE_BUILD_FILES', 'true').lower() == 'true'

if USE_BUILD:
    # 프로덕션: 빌드된 파일 사용
    template_folder = '../../build/web/project-011_토정비결/templates'
    static_folder = '../../build/web/project-011_토정비결/static'
else:
    # 개발: 원본 파일 사용
    template_folder = '../../../project-011_토정비결/web/templates'
    static_folder = '../../../project-011_토정비결/web/static'

# Blueprint 생성
toj_bp = Blueprint(
    'toj',
    __name__,
    template_folder=template_folder,
    static_folder=static_folder,
    static_url_path='/static',
    url_prefix='/toj'
)

@toj_bp.route('/')
def index():
    return render_template('toj_exec.html')

@toj_bp.route('/calc_saju')
def api_calc_saju():
    birth_str = request.args.get('birth_str')
    try:
        json_path = os.path.join(toj_project_path, 'api/solar_terms.json')
        result = calc_saju(birth_str, json_path=json_path)
        return jsonify(result)
    except Exception as e:
        return jsonify({'error': str(e)}), 400

@toj_bp.route('/convert_lunar_to_solar')
def api_convert_lunar_to_solar():
    year = request.args.get('year')
    month = request.args.get('month')
    day = request.args.get('day')
    is_leap = request.args.get('is_leap', 'False') in ['True', 'true', '1']
    result = convert_lunar_to_solar(year, month, day, is_leap)
    if result.get('error'):
        return jsonify(result), 400
    return jsonify(result)

@toj_bp.route('/api/<path:filename>')
def serve_api(filename):
    """api 폴더의 JSON 파일 서빙"""
    api_folder = os.path.join(toj_project_path, 'api')
    return send_from_directory(api_folder, filename)

def init_app(app):
    """Blueprint를 앱에 등록하는 함수"""
    app.register_blueprint(toj_bp)

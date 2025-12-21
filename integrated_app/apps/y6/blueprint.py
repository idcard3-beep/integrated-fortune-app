"""
육효 Blueprint
"""
from flask import Blueprint, render_template, request, jsonify
from flask_cors import CORS
import os
import sys

# 프로젝트 경로 추가
y6_project_path = os.path.join(os.path.dirname(__file__), '../../../project-005_육효')
sys.path.insert(0, y6_project_path)

# 환경변수에 따라 경로 선택 (기본값: true - 프로덕션 배포 시 빌드 파일 사용)
USE_BUILD = os.getenv('USE_BUILD_FILES', 'true').lower() == 'true'

if USE_BUILD:
    # 프로덕션: 빌드된 파일 사용
    template_folder = '../../build/web/project-005_육효/templates'
    static_folder = '../../build/web/project-005_육효/static'
else:
    # 개발: 원본 파일 사용
    template_folder = '../../../project-005_육효/web/templates'
    static_folder = '../../../project-005_육효/web/static'

# Blueprint 생성
y6_bp = Blueprint(
    'y6',
    __name__,
    template_folder=template_folder,
    static_folder=static_folder,
    static_url_path='/static',
    url_prefix='/y6'
)

# 육효 관련 함수들을 y6_app.py에서 임포트
# (y6_app.py의 모든 함수와 데이터를 가져옴)

@y6_bp.route('/')
def index():
    return render_template('y6_exec.html')

@y6_bp.route('/y6_test')
def y6_test():
    return render_template('y6_test.html')

@y6_bp.route('/current-saju')
def current_saju():
    """현재 시점의 사주 계산 (mainpillar.py 사용)"""
    from datetime import datetime
    
    try:
        # mainpillar 임포트 시도
        try:
            from mainpillar import calc_saju
        except ImportError as ie:
            print(f"❌ mainpillar 임포트 실패: {ie}")
            print(f"📂 현재 sys.path: {sys.path[:3]}")
            print(f"📂 y6_project_path: {y6_project_path}")
            return jsonify({
                'success': False, 
                'error': f'mainpillar 모듈을 찾을 수 없습니다: {str(ie)}'
            })
        
        now = datetime.now()
        current_time = now.strftime('%Y-%m-%d %H:%M')
        
        # mainpillar.py의 calc_saju 함수 사용
        json_path = os.path.join(y6_project_path, 'api/solar_terms.json')
        saju_result = calc_saju(current_time, json_path=json_path)
        
        # 현재 월지와 일간지 추출 (납갑 계산용)
        month_branch = saju_result['month'][1]  # 월지
        day_stem = saju_result['day'][0]        # 일간
        day_branch = saju_result['day'][1]      # 일지
        
        return jsonify({
            'success': True,
            'saju': saju_result,
            'current_time': current_time,
            'month_branch': month_branch,
            'day_stem': day_stem,
            'day_branch': day_branch,
            'formatted_time': now.strftime('%Y년 %m월 %d일 %H시 %M분')
        })
    except Exception as e:
        print(f"❌ current_saju 에러: {e}")
        import traceback
        traceback.print_exc()
        return jsonify({'success': False, 'error': str(e)})

# y6_app.py의 API 라우트들을 가져오기
# 여기서는 간단히 프록시 역할을 하도록 함
@y6_bp.route('/api/hexagram', methods=['POST'])
def get_hexagram():
    """육효 점괘 생성 API"""
    from y6_app import (
        HEXAGRAMS, NAJIA_BRANCHES, PALACE_INFO,
        FIVE_ELEMENTS_BRANCH, get_five_element_relation,
        is_element_strong, get_six_relatives_name
    )
    import random
    import json
    from datetime import datetime
    from mainpillar import calc_saju
    
    data = request.get_json()
    year = data.get('year')
    month = data.get('month')
    day = data.get('day')
    hour = data.get('hour', 0)
    minute = data.get('minute', 0)
    
    birth_str = f"{year}-{str(month).zfill(2)}-{str(day).zfill(2)} {str(hour).zfill(2)}:{str(minute).zfill(2)}"
    
    try:
        json_path = os.path.join(y6_project_path, 'api/solar_terms.json')
        saju_result = calc_saju(birth_str, json_path=json_path)
        year_gan = saju_result.get('year', '')[:1] if saju_result.get('year') else ''
    except:
        year_gan = ''
    
    # 동전 던지기 (6번)
    lines = []
    for _ in range(6):
        coin_sum = sum([random.choice([2, 3]) for _ in range(3)])
        if coin_sum == 6:
            lines.append({'value': 2, 'changing': True})
        elif coin_sum == 7:
            lines.append({'value': 1, 'changing': False})
        elif coin_sum == 8:
            lines.append({'value': 2, 'changing': False})
        else:
            lines.append({'value': 3, 'changing': True})
    
    # 본괘 코드 생성
    original_code = ''.join([str(line['value'] % 2) for line in reversed(lines)])
    
    # 변괘 생성
    changed_lines = []
    for line in lines:
        if line['changing']:
            changed_lines.append({'value': 3 - line['value'], 'changing': False})
        else:
            changed_lines.append(line)
    
    changed_code = ''.join([str(line['value'] % 2) for line in reversed(changed_lines)])
    
    # 괘 정보 조회
    original_hex = HEXAGRAMS.get(original_code, {'이름': '未知', '궁': '未知', '세효': 0})
    changed_hex = HEXAGRAMS.get(changed_code, {'이름': '未知', '궁': '未知', '세효': 0})
    
    result = {
        'original': {
            'code': original_code,
            'name': original_hex['이름'],
            'palace': original_hex['궁'],
            'lines': lines
        },
        'changed': {
            'code': changed_code,
            'name': changed_hex['이름'],
            'palace': changed_hex['궁'],
            'lines': changed_lines
        },
        'year_gan': year_gan
    }
    
    return jsonify(result)

@y6_bp.route('/calculate', methods=['POST'])
def calculate():
    """육효 계산 API - 원본 y6_app.py의 로직 사용"""
    from y6_app import (
        HEXAGRAMS, NAJIA_BRANCHES, PALACE_INFO, FIVE_ELEMENTS_BRANCH,
        SIX_SPIRITS, get_hexagram_code, get_hexagram_info,
        get_changing_hexagram, calculate_changing_kin, calculate_wang_shuai,
        calculate_day_relation, calculate_six_kin
    )
    
    data = request.get_json()
    
    # 입력 데이터 유효성 검사
    try:
        yao_input = data['yao_input']
        yue_jian = data['yue_jian'].upper()
        ri_gan = data['ri_gan'].upper()
        ri_chen = data['ri_chen'].upper()
        
        if len(yao_input) != 6 or not all(6 <= y <= 9 for y in yao_input):
            raise ValueError("득괘 입력은 6개이며 6, 7, 8, 9 중 하나여야 합니다.")
        if yue_jian not in FIVE_ELEMENTS_BRANCH or ri_chen not in FIVE_ELEMENTS_BRANCH or ri_gan not in SIX_SPIRITS:
            raise ValueError("월건/일진 지지, 또는 일진 천간이 유효하지 않습니다.")

    except (KeyError, ValueError, TypeError) as e:
        return jsonify({'error': str(e)}), 400

    try:
        # 1. 괘 코드 및 정보 추출
        original_code = get_hexagram_code(yao_input)
        hexagram_info = get_hexagram_info(original_code)
        
        palace = hexagram_info['궁']
        palace_element = PALACE_INFO[palace]['오행']
        
        # 납갑 지지 추출 (궁1, 궁2 적용)
        palace = hexagram_info['궁1']
        branches1 = NAJIA_BRANCHES[palace]
        palace = hexagram_info['궁2']
        branches2 = NAJIA_BRANCHES[palace]
        branches = branches1[:3] + branches2[3:]
        
        se_yao_pos = hexagram_info['세효']
        se_yao_index = se_yao_pos - 1

        # 2. 변괘 정보 추출
        changing_code = get_changing_hexagram(yao_input)
        changing_info = get_hexagram_info(changing_code)
        
        # 3. 육신 배정
        start_spirit = SIX_SPIRITS.get(ri_gan, '青龍')
        spirit_order = ['青龍', '朱雀', '勾陳', '螣蛇', '白虎', '玄武']
        spirit_start_index = spirit_order.index(start_spirit)
        six_spirits_assigned = [spirit_order[(spirit_start_index + i) % 6] for i in range(6)]

        # 4. 변효의 육친 계산
        changing_yao_results = calculate_changing_kin(yao_input, palace_element)
        
        final_hexagram = []
        # 상효(6)부터 초효(1) 순서로 테이블 구성
        for i in range(6): 
            yao_index = 5 - i
            yao_pos = 6 - i
            
            status = yao_input[yao_index]
            branch = branches[yao_index]
            branch_element = FIVE_ELEMENTS_BRANCH[branch]
            
            wang_shuai = calculate_wang_shuai(yue_jian, branch_element)
            day_relation = calculate_day_relation(ri_chen, branch)
            six_kin = calculate_six_kin(palace_element, branch_element)
            
            # 비고 (세효, 응효, 동효 표시)
            note = ''
            if yao_pos == se_yao_pos:
                note += '世'
            elif yao_pos == (se_yao_pos % 6) + 3 or yao_pos == (se_yao_pos + 3) % 6:
                if se_yao_pos <= 3 and yao_pos == se_yao_pos + 3: note += '應'
                elif se_yao_pos > 3 and yao_pos == se_yao_pos - 3: note += '應'
                elif se_yao_pos == 6 and yao_pos == 3: note += '應'
            
            if status in [6, 9]: note += '動'

            # 변효 정보 찾기
            changing_info_str = ""
            if status in [6, 9]:
                for change in changing_yao_results:
                    if change['효위_idx'] == yao_index:
                        changing_info_str = f"-> {change['변지']}({change['변육친']})"
                        break

            final_hexagram.append({
                'yao_pos': yao_pos,
                'status': status,
                'note': note,
                'six_kin': six_kin,
                'branch': branch,
                'spirit': six_spirits_assigned[yao_index],
                'wang_shuai': wang_shuai,
                'day_relation': day_relation,
                'changing_info': changing_info_str,
            })
            
        result = {
            'main_info': f"{hexagram_info['이름']} ({hexagram_info['궁']}) 之 {changing_info['이름']}",
            'base_info': {
                '월건': yue_jian,
                '일진': f"{ri_gan}{ri_chen}",
                '세효': hexagram_info['세효'],
            },
            'hexagram': final_hexagram
        }

        return jsonify(result)
    except Exception as e:
        return jsonify({'error': f"계산 중 예상치 못한 오류가 발생했습니다: {str(e)}"}), 500

@y6_bp.route('/calculate-najia', methods=['POST'])
def calculate_najia_route():
    """납갑 계산 라우트 - y6_app.py의 모든 함수들을 임포트하여 사용"""
    try:
        # y6_app.py에서 필요한 모든 함수와 데이터 임포트
        import sys
        sys.path.insert(0, y6_project_path)
        
        from y6_app import (
            HEXAGRAMS, NAJIA_BRANCHES, PALACE_INFO, PALACE_DISPLAY_MAP,
            FIVE_ELEMENTS_BRANCH, SIX_SPIRITS, SIX_HARMONY, SIX_CLASH,
            get_hexagram_code, get_changing_hexagram, calculate_six_kin,
            calculate_wang_shuai, calculate_day_relation,
            calculate_gua_shen, calculate_kong_wang, calculate_fu_shen,
            analyze_changing_yao_detailed
        )
        
        data = request.get_json()
        yao_input = data.get('yao_input', [])
        yue_jian = data.get('yue_jian', '寅')
        ri_gan = data.get('ri_gan', '甲')
        ri_chen = data.get('ri_chen', '子')
        
        if not yao_input or len(yao_input) != 6:
            return jsonify({'success': False, 'error': '6개의 효가 필요합니다.'})
        
        # 괘 코드 및 정보 추출
        original_code = get_hexagram_code(yao_input)
        hexagram_info = HEXAGRAMS.get(original_code, {
            '이름': '알 수 없음', '궁': '乾宮', '세효': 3, 
            '궁1': '乾宮', '궁2': '乾宮',
            '상괘': '乾', '하괘': '乾', '상기호': '☰', '하기호': '☰',
            '특별그룹': None, '그룹순서': 1, '그룹설명': None
        })
        
        palace = hexagram_info['궁']
        palace1 = hexagram_info['궁1']
        palace2 = hexagram_info['궁2']
        display_palace = PALACE_DISPLAY_MAP.get(palace, palace)
        
        # 납갑 지지 계산
        palace_element = PALACE_INFO.get(palace, {'오행': '金'})['오행']
        branches1 = NAJIA_BRANCHES.get(palace1, NAJIA_BRANCHES['乾宮'])
        branches2 = NAJIA_BRANCHES.get(palace2, NAJIA_BRANCHES['乾宮'])
        branches = branches1[:3] + branches2[3:]
        
        se_yao_pos = hexagram_info['세효']
        
        # 변괘 정보
        changing_code = get_changing_hexagram(yao_input)
        changing_info = HEXAGRAMS.get(changing_code, hexagram_info)
        changing_display_palace = PALACE_DISPLAY_MAP.get(changing_info['궁'], changing_info['궁'])
        
        # 육신 배정
        start_spirit = SIX_SPIRITS.get(ri_gan, '青龍')
        spirit_order = ['青龍', '朱雀', '勾陈', '螣蛇', '白虎', '玄武']
        spirit_start_index = spirit_order.index(start_spirit)
        six_spirits_assigned = [spirit_order[(spirit_start_index + i) % 6] for i in range(6)]
        
        # 변효의 육친 계산
        changing_yao_results = []
        changing_palace = changing_info['궁']
        changing_branches = NAJIA_BRANCHES.get(changing_palace, branches)
        
        for i in range(6):
            if yao_input[i] in [6, 9]:
                changing_branch = changing_branches[i]
                changing_branch_element = FIVE_ELEMENTS_BRANCH[changing_branch]
                changing_kin = calculate_six_kin(palace_element, changing_branch_element)
                changing_yao_results.append({
                    '효위_idx': i,
                    '변지': changing_branch,
                    '변육친': changing_kin
                })
        
        # 최종 결과 생성
        final_hexagram = []
        for i in range(6):
            yao_index = 5 - i
            yao_pos = 6 - i
            
            status = yao_input[yao_index]
            branch = branches[yao_index]
            branch_element = FIVE_ELEMENTS_BRANCH[branch]
            
            wang_shuai = calculate_wang_shuai(yue_jian, branch_element)
            day_relation = calculate_day_relation(ri_chen, branch)
            six_kin = calculate_six_kin(palace_element, branch_element)
            
            # 비고
            note = ''
            if yao_pos == se_yao_pos:
                note += '世'
            if se_yao_pos <= 3 and yao_pos == se_yao_pos + 3:
                note += '應'
            elif se_yao_pos > 3 and yao_pos == se_yao_pos - 3:
                note += '應'
            elif se_yao_pos == 6 and yao_pos == 3:
                note += '應'
            if status in [6, 9]:
                note += '動'
            
            # 변효 정보
            changing_info_str = ""
            if status in [6, 9]:
                for change in changing_yao_results:
                    if change['효위_idx'] == yao_index:
                        changing_info_str = f"-> {change['변지']}({change['변육친']})"
                        break
            else:
                changing_info_str = "靜爻"
            
            final_hexagram.append({
                'yao_pos': yao_pos,
                'status': status,
                'note': note,
                'six_kin': six_kin,
                'branch': branch,
                'spirit': six_spirits_assigned[yao_index],
                'wang_shuai': wang_shuai,
                'day_relation': day_relation,
                'changing_info': changing_info_str
            })
        
        # 상하괘 표시
        original_symbols = f"{hexagram_info['상기호']}\n{hexagram_info['하기호']}"
        changing_symbols = f"{changing_info['상기호']}\n{changing_info['하기호']}"
        
        # 괘신, 공망, 복신 계산
        gua_shen = calculate_gua_shen(palace, ri_chen, final_hexagram)
        kong_wang = calculate_kong_wang(ri_gan, ri_chen, final_hexagram)
        fu_shen = calculate_fu_shen(yue_jian, final_hexagram, palace)
        changing_yao_detailed = analyze_changing_yao_detailed(
            yao_input, palace, palace_element, yue_jian, 
            hexagram_info, branches
        )
        
        result = {
            'main_info': f"{original_symbols} {hexagram_info['이름']} ({display_palace}) 之 {changing_symbols} {changing_info['이름']}",
            'base_info': {
                '월건': yue_jian,
                '일진': f'{ri_gan}{ri_chen}',
                '세효': hexagram_info['세효'],
                '본괘코드': original_code,
                '변괘코드': changing_code
            },
            'hexagram': final_hexagram,
            'gua_shen': gua_shen,
            'kong_wang': kong_wang,
            'fu_shen': fu_shen,
            'changing_yao_detailed': changing_yao_detailed,
            'special_analysis': {
                'original_type': hexagram_info['특별그룹'],
                'original_description': hexagram_info['그룹설명'],
                'changing_type': changing_info['특별그룹'],
                'changing_description': changing_info['그룹설명'],
                'original_trigrams': f"{hexagram_info['상괘']}({hexagram_info['상기호']}) + {hexagram_info['하괘']}({hexagram_info['하기호']})",
                'changing_trigrams': f"{changing_info['상괘']}({changing_info['상기호']}) + {changing_info['하괘']}({changing_info['하기호']})"
            }
        }
        
        return jsonify({'success': True, 'result': result})
    
    except Exception as e:
        import traceback
        error_trace = traceback.format_exc()
        print(f"Calculate Najia Error: {error_trace}")
        return jsonify({'success': False, 'error': str(e)})

def init_app(app):
    """Blueprint를 앱에 등록하는 함수"""
    app.register_blueprint(y6_bp)

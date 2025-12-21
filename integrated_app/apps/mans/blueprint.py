"""
만세력 Blueprint
"""
from flask import Blueprint, render_template, request, jsonify
import os
import sys

# 프로젝트 경로 추가 (Docker 컨테이너 내부 경로 고려)
project_path = os.path.join(os.path.dirname(__file__), '../../../project-004_만세력')
project_path = os.path.abspath(project_path)
absolute_project = '/app/project-004_만세력'

if os.path.exists(project_path):
    sys.path.insert(0, project_path)
elif os.path.exists(absolute_project):
    sys.path.insert(0, absolute_project)
else:
    sys.path.insert(0, project_path)  # 마지막 시도

from mainpillar import calc_saju, calc_day_pillar
import datetime
import calendar as cal_module
import json
from lunarcalendar import Converter, Solar, Lunar
import ephem

# 환경변수에 따라 경로 선택 (기본값: true - 프로덕션 배포 시 빌드 파일 사용)
USE_BUILD = os.getenv('USE_BUILD_FILES', 'true').lower() == 'true'

if USE_BUILD:
    # 프로덕션: 빌드된 파일 사용
    template_folder = '../../build/web/project-004_만세력/templates'
    static_folder = '../../build/web/project-004_만세력/static'
else:
    # 개발: 원본 파일 사용
    template_folder = '../../../project-004_만세력/web/templates'
    static_folder = '../../../project-004_만세력/web/static'

# Blueprint 생성
mans_bp = Blueprint(
    'mans',
    __name__,
    template_folder=template_folder,
    static_folder=static_folder,
    static_url_path='/static',
    url_prefix='/mans'
)

def get_year_gānzhī_simple(year: int, month: int, day: int) -> str:
    """년주 간지 계산"""
    HEAVENLY_STEMS = ['甲', '乙', '丙', '丁', '戊', '己', '庚', '辛', '壬', '癸']
    EARTHLY_BRANCHES = ['子', '丑', '寅', '卯', '辰', '巳', '午', '未', '申', '酉', '戌', '亥']
    base_year = 1864
    
    try:
        gz_indices = Converter.get_year_gānzhī(year, month, day)
        return HEAVENLY_STEMS[gz_indices[0]] + EARTHLY_BRANCHES[gz_indices[1]]
    except:
        if (month, day) <= (2, 4):
            idx = (year - 1 - base_year) % 60
        else:
            idx = (year - base_year) % 60
        return HEAVENLY_STEMS[idx % 10] + EARTHLY_BRANCHES[idx % 12]

def get_month_gānzhī_simple(year: int, month: int, day: int) -> str:
    """월주 간지 계산"""
    HEAVENLY_STEMS = ['甲', '乙', '丙', '丁', '戊', '己', '庚', '辛', '壬', '癸']
    EARTHLY_BRANCHES = ['子', '丑', '寅', '卯', '辰', '巳', '午', '未', '申', '酉', '戌', '亥']
    
    try:
        gz_indices = Converter.get_month_gānzhī(year, month, day)
        return HEAVENLY_STEMS[gz_indices[0]] + EARTHLY_BRANCHES[gz_indices[1]]
    except:
        year_gz = get_year_gānzhī_simple(year, month, day)
        year_stem_idx = HEAVENLY_STEMS.index(year_gz[0])
        month_branch_map = {1:1, 2:2, 3:3, 4:4, 5:5, 6:6, 7:7, 8:8, 9:9, 10:10, 11:11, 12:0}
        month_branch_idx = month_branch_map.get(month, 0)
        in_month_stem = {0: 2, 5: 2, 1: 4, 6: 4, 2: 6, 7: 6, 3: 8, 8: 8, 4: 0, 9: 0}
        in_month_stem_idx = in_month_stem.get(year_stem_idx, 4)
        diff = (month_branch_idx - 2 + 12) % 12
        stem_idx = (in_month_stem_idx + diff) % 10
        return HEAVENLY_STEMS[stem_idx] + EARTHLY_BRANCHES[month_branch_idx]

def get_day_gānzhī_simple(year: int, month: int, day: int) -> str:
    """일주 간지 계산 - mainpillar.py의 calc_day_pillar()와 동일한 로직"""
    HEAVENLY_STEMS = ['甲', '乙', '丙', '丁', '戊', '己', '庚', '辛', '壬', '癸']
    EARTHLY_BRANCHES = ['子', '丑', '寅', '卯', '辰', '巳', '午', '未', '申', '酉', '戌', '亥']
    
    try:
        target_dt = datetime.datetime(year, month, day, 0, 0, 0)
        base_dt = datetime.datetime(1900, 1, 1, 0, 0, 0)  # 辛卯일
        base_idx = 10  # 辛卯 인덱스
        day_diff = (target_dt - base_dt).days
        day_idx = ((base_idx + day_diff) % 60 + 60) % 60
        return HEAVENLY_STEMS[day_idx % 10] + EARTHLY_BRANCHES[day_idx % 12]
    except (ValueError, Exception):
        return "N/A"

def get_hour_gānzhī_simple(year: int, month: int, day: int, hour: int = 0, minute: int = 0) -> str:
    """시주 간지 계산"""
    HEAVENLY_STEMS = ['甲', '乙', '丙', '丁', '戊', '己', '庚', '辛', '壬', '癸']
    EARTHLY_BRANCHES = ['子', '丑', '寅', '卯', '辰', '巳', '午', '未', '申', '酉', '戌', '亥']
    ZI_HOUR_STEM_MAP = {0: 0, 5: 0, 1: 2, 6: 2, 2: 4, 7: 4, 3: 6, 8: 6, 4: 8, 9: 8}
    
    day_gz = get_day_gānzhī_simple(year, month, day)
    if day_gz == "N/A":
        return "N/A"
    day_stem = day_gz[0]
    try:
        day_stem_idx = HEAVENLY_STEMS.index(day_stem)
    except ValueError:
        return "N/A"
    
    if (hour == 23 and minute >= 30) or (hour == 0) or (hour == 1 and minute < 30):
        hour_branch_idx = 0
    elif (hour == 1 and minute >= 30) or (hour == 2) or (hour == 3 and minute < 30):
        hour_branch_idx = 1
    elif (hour == 3 and minute >= 30) or (hour == 4) or (hour == 5 and minute < 30):
        hour_branch_idx = 2
    elif (hour == 5 and minute >= 30) or (hour == 6) or (hour == 7 and minute < 30):
        hour_branch_idx = 3
    elif (hour == 7 and minute >= 30) or (hour == 8) or (hour == 9 and minute < 30):
        hour_branch_idx = 4
    elif (hour == 9 and minute >= 30) or (hour == 10) or (hour == 11 and minute < 30):
        hour_branch_idx = 5
    elif (hour == 11 and minute >= 30) or (hour == 12) or (hour == 13 and minute < 30):
        hour_branch_idx = 6
    elif (hour == 13 and minute >= 30) or (hour == 14) or (hour == 15 and minute < 30):
        hour_branch_idx = 7
    elif (hour == 15 and minute >= 30) or (hour == 16) or (hour == 17 and minute < 30):
        hour_branch_idx = 8
    elif (hour == 17 and minute >= 30) or (hour == 18) or (hour == 19 and minute < 30):
        hour_branch_idx = 9
    elif (hour == 19 and minute >= 30) or (hour == 20) or (hour == 21 and minute < 30):
        hour_branch_idx = 10
    elif (hour == 21 and minute >= 30) or (hour == 22) or (hour == 23 and minute < 30):
        hour_branch_idx = 11
    else:
        hour_branch_idx = (hour // 2) % 12
    
    branch = EARTHLY_BRANCHES[hour_branch_idx]
    first_hour_stem_idx = ZI_HOUR_STEM_MAP.get(day_stem_idx, 0)
    stem_idx = (first_hour_stem_idx + hour_branch_idx) % 10
    stem = HEAVENLY_STEMS[stem_idx]
    return f"{stem}{branch}"

def kst_to_jst(kst_str):
    """KST 시각을 JST로 변환 (30분 빼기)"""
    try:
        dt = datetime.datetime.strptime(kst_str, '%Y-%m-%d %H:%M:%S')
        dt_jst = dt - datetime.timedelta(minutes=30)
        return dt_jst.strftime('%Y-%m-%d %H:%M:%S')
    except:
        return None

@mans_bp.route('/')
@mans_bp.route('/calendar', methods=['GET', 'POST'])
def calendar():
    """달력 페이지 - 완전한 데이터 제공"""
    print("🔍 Calendar route called")
    
    # Load solar terms data
    json_path = os.path.join(os.path.dirname(__file__), '../../../project-004_만세력/api/solar_terms.json')
    print(f"📂 JSON path: {json_path}")
    
    with open(json_path, encoding='utf-8') as f:
        SOLAR_TERMS_DATA = json.load(f)
    
    print(f"✅ Loaded {len(SOLAR_TERMS_DATA)} years of solar terms data")
    
    # Get year and month
    now = datetime.datetime.now()
    today = now.date()
    year = today.year
    month = today.month
    
    # Handle POST form submission
    if request.method == 'POST':
        year = int(request.form.get('year', today.year))
        month = int(request.form.get('month', today.month))
        nav = request.form.get('nav', None)
        
        if nav == 'prev':
            month -= 1
            if month < 1:
                month = 12
                year -= 1
        elif nav == 'next':
            month += 1
            if month > 12:
                month = 1
                year += 1
        elif nav == 'today':
            year = today.year
            month = today.month
    else:
        # Handle GET parameters
        year = int(request.args.get('year', now.year))
        month = int(request.args.get('month', now.month))
    
    # 월간지 계산
    month_gānzhī = get_month_gānzhī_simple(year, month, 15)
    
    # Generate calendar (일요일부터 시작)
    cal_module.setfirstweekday(cal_module.SUNDAY)
    cal_data = cal_module.monthcalendar(year, month)
    
    # 해당 연도와 전/후년도 절기 데이터
    current_year_entries = SOLAR_TERMS_DATA.get(str(year), [])
    prev_year_entries = SOLAR_TERMS_DATA.get(str(year - 1), []) if year > 1900 else []
    next_year_entries = SOLAR_TERMS_DATA.get(str(year + 1), []) if year < 2100 else []
    all_entries = prev_year_entries + current_year_entries + next_year_entries
    
    # 이번달 절기
    this_month_terms = [e for e in all_entries 
                        if datetime.datetime.strptime(e['datetime_KST'], '%Y-%m-%d %H:%M:%S').month == month
                        and datetime.datetime.strptime(e['datetime_KST'], '%Y-%m-%d %H:%M:%S').year == year]
    
    # 다음달 절기
    next_month = (month % 12) + 1
    next_year_for_next_month = year + 1 if month == 12 else year
    next_month_terms = [e for e in all_entries 
                        if datetime.datetime.strptime(e['datetime_KST'], '%Y-%m-%d %H:%M:%S').year == next_year_for_next_month
                        and datetime.datetime.strptime(e['datetime_KST'], '%Y-%m-%d %H:%M:%S').month == next_month]
    
    jeolip = next((e for e in this_month_terms if e.get('term_index_in_cycle', 0) % 2 == 1), None)
    junggi = next((e for e in this_month_terms if e.get('term_index_in_cycle', 0) % 2 == 0), None)
    next_jeolip = next((e for e in next_month_terms if e.get('term_index_in_cycle', 0) % 2 == 1), None)
    
    current_hour = now.hour
    current_minute = now.minute
    
    # 합삭/망일시 계산
    def get_new_full_moon(year, month):
        # 해당 월의 시작일과 종료일
        start_date = datetime.datetime(year, month, 1)
        if month == 12:
            end_date = datetime.datetime(year + 1, 1, 1)
        else:
            end_date = datetime.datetime(year, month + 1, 1)
        
        new_moon = None
        full_moon = None
        
        try:
            # 합삭(신월, New Moon) 계산
            new_moon_ephem = ephem.next_new_moon(start_date)
            new_moon_dt = ephem.Date(new_moon_ephem).datetime()
            # UTC를 KST로 변환 (+9시간)
            new_moon_kst = new_moon_dt + datetime.timedelta(hours=9)
            # 해당 월에 속하는지 확인
            if start_date <= new_moon_kst < end_date:
                new_moon = new_moon_kst
            
            # 망(보름달, Full Moon) 계산
            full_moon_ephem = ephem.next_full_moon(start_date)
            full_moon_dt = ephem.Date(full_moon_ephem).datetime()
            # UTC를 KST로 변환 (+9시간)
            full_moon_kst = full_moon_dt + datetime.timedelta(hours=9)
            # 해당 월에 속하는지 확인
            if start_date <= full_moon_kst < end_date:
                full_moon = full_moon_kst
        except Exception as e:
            print(f"  ⚠️ Moon phase calculation error: {e}")
        
        return new_moon, full_moon
    
    new_moon_kst, full_moon_kst = get_new_full_moon(year, month)
    new_moon_jst = new_moon_kst - datetime.timedelta(minutes=30) if new_moon_kst else None
    full_moon_jst = full_moon_kst - datetime.timedelta(minutes=30) if full_moon_kst else None
    
    print(f"🌙 New Moon KST: {new_moon_kst}, Full Moon KST: {full_moon_kst}")
    
    print(f"📅 Generating calendar for {year}-{month}")
    print(f"📊 Calendar has {len(cal_data)} weeks")
    
    calendar_weeks = []
    for week_idx, week in enumerate(cal_data):
        week_data = []
        for day in week:
            if day == 0:
                cell_info = {'day': None, 'lunar': None, 'is_today': False}
            else:
                date_obj = datetime.date(year, month, day)
                is_today_flag = (date_obj == today)
                
                print(f"  Processing day {day}")
                
                # 음력 변환
                try:
                    solar_date_obj = Solar(year, month, day)
                    lunar_date_obj = Converter.Solar2Lunar(solar_date_obj)
                    lunar_month = lunar_date_obj.month
                    lunar_day = lunar_date_obj.day
                    is_leap = getattr(lunar_date_obj, 'isleap', False)
                    
                    # 대월/소월 판별
                    try:
                        test_lunar_30 = Lunar(lunar_date_obj.year, lunar_month, 30, isleap=is_leap)
                        test_solar_30 = Converter.Lunar2Solar(test_lunar_30)
                        max_day = 30
                    except:
                        max_day = 29
                    
                    base_type = '윤달' if is_leap else '평달'
                    month_type = '대월' if max_day == 30 else '소월'
                    lunar_type = f"{base_type} {month_type}"
                    lunar_str = f"{lunar_month}월 {lunar_day}일 {lunar_type}"
                except Exception as e:
                    print(f"  ⚠️ Lunar conversion error for day {day}: {e}")
                    lunar_str = ""
                    lunar_type = ""
                
                # 간지 계산
                try:
                    year_gz = get_year_gānzhī_simple(year, month, day)
                    month_gz = get_month_gānzhī_simple(year, month, day)
                    day_gz = get_day_gānzhī_simple(year, month, day)
                    
                    if is_today_flag:
                        hour_gz = get_hour_gānzhī_simple(year, month, day, current_hour, current_minute)
                    else:
                        hour_gz = get_hour_gānzhī_simple(year, month, day, 0, 0)
                except Exception as e:
                    print(f"  ⚠️ Ganzhi calculation error for day {day}: {e}")
                    year_gz = "N/A"
                    month_gz = "N/A"
                    day_gz = "N/A"
                    hour_gz = "N/A"
                
                # 절기 확인
                try:
                    term_for_day = None
                    entries_for_check = prev_year_entries + current_year_entries if month <= 2 else current_year_entries
                    for entry in entries_for_check:
                        dt = datetime.datetime.strptime(entry['datetime_KST'], '%Y-%m-%d %H:%M:%S')
                        if dt.date() <= date_obj:
                            term_for_day = entry
                        else:
                            break
                    
                    if term_for_day:
                        current_term_name = term_for_day['term']
                        current_term_kst = term_for_day['datetime_KST']
                        current_term_jst = kst_to_jst(term_for_day['datetime_KST'])
                    else:
                        current_term_name = None
                        current_term_kst = None
                        current_term_jst = None
                except Exception as e:
                    print(f"  ⚠️ Term check error for day {day}: {e}")
                    current_term_name = None
                    current_term_kst = None
                    current_term_jst = None
                
                # 다음 3개 절기
                next_3_terms = []
                try:
                    for entry in all_entries:
                        dt = datetime.datetime.strptime(entry['datetime_KST'], '%Y-%m-%d %H:%M:%S')
                        if dt.date() >= date_obj:
                            next_3_terms.append({'term': entry['term'], 'datetime_KST': entry['datetime_KST']})
                            if len(next_3_terms) == 3:
                                break
                except Exception as e:
                    print(f"  ⚠️ Next terms error for day {day}: {e}")
                
                cell_info = {
                    'day': day,
                    'lunar': lunar_str,
                    'lunar_type': lunar_type,
                    'year_gz': year_gz,
                    'month_gz': month_gz,
                    'day_gz': day_gz,
                    'hour_gz': hour_gz,
                    'gānzhī': day_gz,
                    'term': None,
                    'is_today': is_today_flag,
                    'current_term_name': current_term_name,
                    'current_term_kst': current_term_kst,
                    'current_term_jst': current_term_jst,
                    'next_3_terms': next_3_terms,
                    'new_moon_kst': new_moon_kst.strftime('%Y-%m-%d %H:%M') if new_moon_kst else '',
                    'new_moon_jst': new_moon_jst.strftime('%Y-%m-%d %H:%M') if new_moon_jst else '',
                    'full_moon_kst': full_moon_kst.strftime('%Y-%m-%d %H:%M') if full_moon_kst else '',
                    'full_moon_jst': full_moon_jst.strftime('%Y-%m-%d %H:%M') if full_moon_jst else '',
                    'jeolip_kst': jeolip['datetime_KST'] if jeolip else '',
                    'jeolip_jst': kst_to_jst(jeolip['datetime_KST']) if jeolip and jeolip.get('datetime_KST') else '',
                    'jeolip_term': jeolip['term'] if jeolip else '',
                    'junggi_kst': junggi['datetime_KST'] if junggi else '',
                    'junggi_jst': kst_to_jst(junggi['datetime_KST']) if junggi and junggi.get('datetime_KST') else '',
                    'junggi_term': junggi['term'] if junggi else '',
                    'next_jeolip_kst': next_jeolip['datetime_KST'] if next_jeolip else '',
                    'next_jeolip_jst': kst_to_jst(next_jeolip['datetime_KST']) if next_jeolip and next_jeolip.get('datetime_KST') else '',
                    'next_jeolip_term': next_jeolip['term'] if next_jeolip else ''
                }
                
                if week_idx == 0 and day == 1:
                    print(f"  ✅ First day cell_info: {cell_info}")
            
            week_data.append(cell_info)
        calendar_weeks.append(week_data)
    
    print(f"✅ Generated {len(calendar_weeks)} weeks with data")
    print(f"🎯 First week sample: {calendar_weeks[0][0] if calendar_weeks and calendar_weeks[0] else 'No data'}")
    
    return render_template('calendar.html', 
                         year=year, 
                         month=month, 
                         month_gānzhī=month_gānzhī,
                         calendar_weeks=calendar_weeks,
                         today=now)

@mans_bp.route('/mainpillar')
def mainpillar():
    return render_template('mainpillar.html')

@mans_bp.route('/saju')
def saju():
    year = int(request.args.get('year', datetime.datetime.now().year))
    month = int(request.args.get('month', datetime.datetime.now().month))
    day = int(request.args.get('day', datetime.datetime.now().day))
    return render_template('saju.html', year=year, month=month, day=day)

@mans_bp.route('/get_saju')
def get_saju():
    year = request.args.get('year')
    month = request.args.get('month')
    day = request.args.get('day')
    hour = request.args.get('hour', '0')
    minute = request.args.get('minute', '0')
    birth_str = f"{year}-{str(month).zfill(2)}-{str(day).zfill(2)} {str(hour).zfill(2)}:{str(minute).zfill(2)}"
    print(f"[get_saju] 요청: year={year}, month={month}, day={day}, hour={hour}, minute={minute}")
    print(f"[get_saju] birth_str={birth_str}")
    try:
        # api/solar_terms.json 경로 수정
        json_path = os.path.join(os.path.dirname(__file__), '../../../project-004_만세력/api/solar_terms.json')
        result = calc_saju(birth_str, json_path=json_path)
        print(f"[get_saju] 결과: {result}")
    except Exception as e:
        print(f"[get_saju] 오류: {e}")
        import traceback
        traceback.print_exc()
        result = {'year': '', 'month': '', 'day': '', 'hour': '', 'info': {'yearP': '', 'birth': birth_str}}
    return jsonify(result)

@mans_bp.route('/get_solar_terms')
def get_solar_terms():
    import json
    year = request.args.get('year')
    try:
        json_path = os.path.join(os.path.dirname(__file__), '../../../project-004_만세력/api/solar_terms.json')
        with open(json_path, 'r', encoding='utf-8') as f:
            data = json.load(f)
        # 클라이언트가 {year: [...]} 형식을 기대하므로 그대로 반환
        return jsonify({year: data.get(year, [])})
    except Exception as e:
        return jsonify({'error': str(e)}), 400

@mans_bp.route('/convert_solar_to_lunar')
def convert_solar_to_lunar_route():
    """양력 날짜를 음력으로 변환"""
    from lunarcalendar import Converter, Solar
    year = int(request.args.get('year'))
    month = int(request.args.get('month'))
    day = int(request.args.get('day'))
    try:
        solar = Solar(year, month, day)
        lunar = Converter.Solar2Lunar(solar)
        
        return jsonify({
            'year': lunar.year,
            'month': lunar.month,
            'day': lunar.day,
            'is_leap': lunar.isleap
        })
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@mans_bp.route('/convert_lunar_to_solar')
def convert_lunar_to_solar_route():
    """음력 날짜를 양력으로 변환"""
    from lunarcalendar import Converter, Lunar
    year = int(request.args.get('year'))
    month = int(request.args.get('month'))
    day = int(request.args.get('day'))
    is_leap = request.args.get('is_leap', 'false').lower() == 'true'
    try:
        lunar = Lunar(year, month, day, isleap=is_leap)
        solar = Converter.Lunar2Solar(lunar)
        
        return jsonify({
            'year': solar.year,
            'month': solar.month,
            'day': solar.day
        })
    except Exception as e:
        return jsonify({'error': str(e)}), 500

def init_app(app):
    """Blueprint를 앱에 등록하는 함수"""
    app.register_blueprint(mans_bp)

from flask import Flask, send_from_directory, request, jsonify, render_template
from mainpillar import calc_saju, convert_lunar_to_solar

app = Flask(__name__, static_folder='web/static', template_folder='web/templates')

@app.route('/')
def index():
    return render_template('toj_exec.html')

@app.route('/calc_saju')
def api_calc_saju():
    birth_str = request.args.get('birth_str')
    try:
        result = calc_saju(birth_str, json_path='api/solar_terms.json')
        return jsonify(result)
    except Exception as e:
        return jsonify({'error': str(e)}), 400

@app.route('/convert_lunar_to_solar')
def api_convert_lunar_to_solar():
    year = request.args.get('year')
    month = request.args.get('month')
    day = request.args.get('day')
    is_leap = request.args.get('is_leap', 'False') in ['True', 'true', '1']
    result = convert_lunar_to_solar(year, month, day, is_leap)
    if result.get('error'):
        return jsonify(result), 400
    return jsonify(result)

@app.route('/api/<path:filename>')
def serve_api(filename):
    # api 폴더의 JSON 파일 서빙
    import os
    api_folder = os.path.join(os.path.dirname(__file__), 'api')
    return send_from_directory(api_folder, filename)

@app.route('/<path:filename>')
def serve_static(filename):
    # 모든 정적 파일(HTML, JS, CSS, JSON 등) 서빙
    # static 폴더에서 우선 검색
    try:
        return send_from_directory(app.static_folder, filename)
    except Exception:
        # templates 폴더에서 검색 (html 등)
        try:
            return send_from_directory(app.template_folder, filename)
        except Exception:
            return f"파일을 찾을 수 없습니다: {filename}", 404

#if __name__ == '__main__':
#    app.run(host='0.0.0.0', port=5000, debug=True)
#            host='127.0.0.1'로 바꾸면 오직 로컬만 안내됨
    
if __name__ == '__main__':

    # Flask 서버를 5000번 포트로 실행
    # debug=False 로 설정하여 IndentationError 발생 가능성을 줄입니다.
    app.run(debug=False, port=5000)
    
    

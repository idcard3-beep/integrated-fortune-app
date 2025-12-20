"""
로컬 개발 환경 실행 스크립트
python run_local.py 로 실행
"""
import os
from dotenv import load_dotenv

# .env 파일 로드
load_dotenv()

# 환경 변수 설정
os.environ['FLASK_ENV'] = 'development'
os.environ['DEBUG'] = 'True'

# main_app 임포트 및 실행
from main_app import app

if __name__ == '__main__':
    print("=" * 60)
    print("🚀 로컬 개발 서버 시작")
    print("=" * 60)
    print(f"환경: {os.getenv('FLASK_ENV', 'development')}")
    print(f"디버그 모드: {os.getenv('DEBUG', 'True')}")
    print(f"포트: {os.getenv('PORT', '5000')}")
    print("=" * 60)
    print("접속 주소:")
    print(f"  - http://localhost:{os.getenv('PORT', '5000')}")
    print(f"  - http://127.0.0.1:{os.getenv('PORT', '5000')}")
    print("=" * 60)
    print("종료하려면 Ctrl+C를 누르세요")
    print("=" * 60)
    
    port = int(os.getenv('PORT', '5000'))
    debug = os.getenv('DEBUG', 'True').lower() in ['true', '1', 'yes']
    
    app.run(
        host='127.0.0.1',  # 로컬 전용
        port=port,
        debug=debug
    )

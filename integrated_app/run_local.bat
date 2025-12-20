@echo off
REM 로컬 개발 환경 실행 스크립트 (Windows)
echo ====================================
echo 통합 애플리케이션 로컬 실행
echo ====================================
echo.

REM 가상환경 활성화 확인
if exist "Scripts\activate.bat" (
    echo 가상환경 활성화 중...
    call Scripts\activate.bat
) else if exist "venv\Scripts\activate.bat" (
    echo 가상환경 활성화 중...
    call venv\Scripts\activate.bat
) else (
    echo 경고: 가상환경을 찾을 수 없습니다.
    echo 계속 진행합니다...
)

echo.
echo Python 실행...
python run_local.py

pause

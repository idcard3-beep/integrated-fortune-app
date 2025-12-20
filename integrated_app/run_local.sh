#!/bin/bash
# 로컬 개발 환경 실행 스크립트 (Linux/Mac)

echo "===================================="
echo "통합 애플리케이션 로컬 실행"
echo "===================================="
echo ""

# 가상환경 활성화 확인
if [ -f "venv/bin/activate" ]; then
    echo "가상환경 활성화 중..."
    source venv/bin/activate
elif [ -f "bin/activate" ]; then
    echo "가상환경 활성화 중..."
    source bin/activate
else
    echo "경고: 가상환경을 찾을 수 없습니다."
    echo "계속 진행합니다..."
fi

echo ""
echo "Python 실행..."
python run_local.py

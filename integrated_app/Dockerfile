# Python 3.11 기반 이미지 사용
FROM python:3.11-slim

# 작업 디렉토리 설정
WORKDIR /app

# 시스템 패키지 업데이트 및 필요한 패키지 설치
RUN apt-get update && apt-get install -y \
    gcc \
    postgresql-client \
    && rm -rf /var/lib/apt/lists/*

# requirements.txt 복사 및 의존성 설치
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# 애플리케이션 파일 복사
COPY . .

# 포트 노출 (cloudtype.io는 PORT 환경변수를 사용, 기본값 8000)
EXPOSE 8000

# 환경변수 설정
ENV PYTHONUNBUFFERED=1
ENV PORT=8000

# Gunicorn으로 애플리케이션 실행
# cloudtype.io는 PORT 환경변수를 사용하므로 동적으로 바인딩
# sh -c을 사용하여 환경변수 치환 가능하도록 설정
CMD sh -c "gunicorn main_app:app --bind 0.0.0.0:${PORT:-8000} --workers 2 --timeout 120 --access-logfile - --error-logfile -"


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
COPY integrated_app/requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# integrated_app 복사
COPY integrated_app/ ./integrated_app/

# 원본 프로젝트 백엔드 폴더 복사 (Blueprint가 모듈 임포트에 필요)
COPY project-002_비밀게시판/adapters ./project-002_비밀게시판/adapters
COPY project-002_비밀게시판/api ./project-002_비밀게시판/api
COPY project-002_비밀게시판/config ./project-002_비밀게시판/config
COPY project-002_비밀게시판/core ./project-002_비밀게시판/core
COPY project-004_만세력/mainpillar.py ./project-004_만세력/
COPY project-004_만세력/api ./project-004_만세력/api
COPY project-005_육효/mainpillar.py ./project-005_육효/
COPY project-005_육효/api ./project-005_육효/api
COPY project-005_육효/y6_app.py ./project-005_육효/y6_app.py
COPY project-011_토정비결/mainpillar.py ./project-011_토정비결/
COPY project-011_토정비결/api ./project-011_토정비결/api
COPY project-012_사주팔자/mainpillar.py ./project-012_사주팔자/
COPY project-012_사주팔자/api ./project-012_사주팔자/api
# 타로카드 프로젝트 디렉토리 생성 후 파일 복사
RUN mkdir -p ./project-009_타로카드
COPY project-009_타로카드/tarot_app.py ./project-009_타로카드/tarot_app.py

# 작업 디렉토리를 integrated_app로 변경
WORKDIR /app/integrated_app

# 포트 노출 (cloudtype.io는 PORT 환경변수를 사용, 기본값 8000)
EXPOSE 8000

# 환경변수 설정
ENV PYTHONUNBUFFERED=1
ENV PORT=8000
ENV USE_BUILD_FILES=true

# Gunicorn으로 애플리케이션 실행
# cloudtype.io는 PORT 환경변수를 사용하므로 동적으로 바인딩
CMD sh -c "gunicorn main_app:app --bind 0.0.0.0:${PORT:-8000} --workers 2 --timeout 120 --access-logfile - --error-logfile -"


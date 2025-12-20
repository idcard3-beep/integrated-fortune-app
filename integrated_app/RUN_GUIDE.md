# 실행 가이드

통합 애플리케이션을 로컬과 서버 환경에서 실행하는 방법을 안내합니다.

---

## 📋 목차

1. [로컬 환경 실행](#로컬-환경-실행)
2. [서버 배포 (Render.com)](#서버-배포)
3. [환경 변수 설정](#환경-변수-설정)
4. [트러블슈팅](#트러블슈팅)

---

## 🖥️ 로컬 환경 실행

### 방법 1: 스크립트 사용 (권장)

#### Windows

```bash
run_local.bat
```

#### Linux/Mac

```bash
chmod +x run_local.sh
./run_local.sh
```

### 방법 2: Python 직접 실행

```bash
python run_local.py
```

### 방법 3: Flask 직접 실행 (고급)

```bash
# 환경 변수 설정
set FLASK_ENV=development    # Windows
export FLASK_ENV=development # Linux/Mac

# 실행
python main_app.py
```

### 로컬 실행 후 접속 주소

- http://localhost:5000
- http://127.0.0.1:5000

---

## 🚀 서버 배포 (Render.com)

### 1. 배포 전 체크리스트

- [x] `requirements.txt` 확인
- [x] `Procfile` 확인
- [x] `render.yaml` 확인
- [x] 환경 변수 설정

### 2. Render.com 배포 절차

#### A. Render Dashboard 설정

1. **New Web Service 생성**
2. **GitHub 저장소 연결**
3. **설정 입력**:
   - **Name**: `integrated-app` (원하는 이름)
   - **Environment**: `Python 3`
   - **Build Command**: `pip install -r requirements.txt`
   - **Start Command**: `gunicorn main_app:app`

#### B. 환경 변수 설정 (Environment Variables)

Render Dashboard에서 다음 환경 변수를 설정:

```
FLASK_ENV=production
DATABASE_URL=<PostgreSQL 연결 문자열>
SECRET_KEY=<강력한 시크릿 키>
MAX_FILE_MB=10
DEBUG=False
```

#### C. 배포 실행

- **Deploy** 버튼 클릭
- 빌드 로그 확인
- 배포 완료 후 URL 접속 테스트

### 3. Render.yaml 자동 배포 (선택)

`render.yaml` 파일이 있는 경우 자동으로 설정이 적용됩니다.

---

## ⚙️ 환경 변수 설정

### 로컬 개발용 (.env 파일)

프로젝트 루트에 `.env` 파일 생성:

```env
# 실행 환경
FLASK_ENV=development

# 데이터베이스 URL (비밀게시판용)
DATABASE_URL=postgresql://user:password@host:port/database

# Flask Secret Key
SECRET_KEY=dev-secret-key-for-local-development

# 파일 업로드 크기 제한 (MB)
MAX_FILE_MB=10

# 포트 번호
PORT=5000

# 디버그 모드
DEBUG=True
```

### 프로덕션 서버용

Render Dashboard의 Environment 탭에서 설정:

```
FLASK_ENV=production
DATABASE_URL=<실제 DB URL>
SECRET_KEY=<강력한 랜덤 키>
MAX_FILE_MB=10
DEBUG=False
```

---

## 🔍 트러블슈팅

### 1. 포트 이미 사용 중 에러

**에러 메시지**: `Address already in use`

**해결 방법**:

```bash
# Windows
netstat -ano | findstr :5000
taskkill /PID <PID번호> /F

# Linux/Mac
lsof -ti:5000 | xargs kill -9
```

또는 `.env` 파일에서 포트 번호 변경:

```env
PORT=5001
```

### 2. 모듈 임포트 에러

**에러 메시지**: `ModuleNotFoundError: No module named 'xxx'`

**해결 방법**:

```bash
pip install -r requirements.txt
```

### 3. 데이터베이스 연결 실패

**에러 메시지**: `could not connect to server`

**해결 방법**:

- `.env` 파일의 `DATABASE_URL` 확인
- 네트워크 연결 확인
- 데이터베이스 서버 상태 확인

### 4. Blueprint 등록 실패

**증상**: 특정 기능만 작동하지 않음

**해결 방법**:

1. 해당 프로젝트 폴더 확인
2. `mainpillar.py` 또는 필요한 모듈 존재 확인
3. 경로 설정 확인
4. 콘솔 로그에서 에러 메시지 확인

### 5. 정적 파일 (CSS/JS) 로드 실패

**증상**: 페이지는 열리나 스타일이 깨짐

**해결 방법**:

1. 프론트엔드 빌드 실행:
   ```bash
   python build_frontend.py
   ```
2. `build/web/` 폴더 확인
3. 브라우저 캐시 삭제 (Ctrl+Shift+R)

---

## 📊 시스템 상태 확인

### Health Check Endpoint

```bash
# 로컬
curl http://localhost:5000/health

# 서버
curl https://your-app.onrender.com/health
```

**정상 응답**:

```json
{
  "status": "ok",
  "message": "통합 애플리케이션 정상 작동 중"
}
```

---

## 📱 접속 URL

### 로컬 개발 환경

- 메인: http://localhost:5000
- 비밀게시판: http://localhost:5000/secret
- 만세력: http://localhost:5000/mans
- 육효: http://localhost:5000/y6
- 타로카드: http://localhost:5000/tarot
- 토정비결: http://localhost:5000/toj
- 사주팔자: http://localhost:5000/saju

### 프로덕션 서버

- 메인: https://your-app.onrender.com
- 비밀게시판: https://your-app.onrender.com/secret
- 만세력: https://your-app.onrender.com/mans
- (나머지 경로 동일)

---

## 🛠️ 추가 명령어

### 가상환경 활성화 (필요시)

```bash
# Windows
Scripts\activate

# Linux/Mac
source venv/bin/activate
```

### 의존성 업데이트

```bash
pip install --upgrade -r requirements.txt
```

### 프론트엔드 다시 빌드

```bash
python build_frontend.py
```

---

## 📞 도움말

문제가 지속되면 다음을 확인하세요:

1. Python 버전 (3.9 이상 권장)
2. 모든 의존성 설치 완료
3. 환경 변수 올바른 설정
4. 방화벽/보안 프로그램 확인

---

**작성일**: 2025-12-16  
**버전**: 1.0

# 환경별 실행 설정 비교

## 📊 로컬 vs 서버 환경 비교

| 구분               | 로컬 개발 환경                             | 서버 프로덕션 환경          |
| ------------------ | ------------------------------------------ | --------------------------- |
| **실행 방법**      | `python run_local.py` 또는 `run_local.bat` | Render.com 자동 배포        |
| **실행 명령어**    | `python main_app.py`                       | `gunicorn main_app:app`     |
| **Host**           | `127.0.0.1` (로컬 전용)                    | `0.0.0.0` (모든 인터페이스) |
| **Port**           | 5000 (변경 가능)                           | Render 자동 할당            |
| **Debug Mode**     | True (에러 상세 표시)                      | False (보안)                |
| **FLASK_ENV**      | development                                | production                  |
| **환경 변수 저장** | `.env` 파일                                | Render Dashboard            |
| **자동 재시작**    | 코드 변경 시 자동                          | 배포 시만                   |
| **로그 출력**      | 콘솔 실시간                                | Render 로그 페이지          |
| **접속 URL**       | http://localhost:5000                      | https://앱이름.onrender.com |

---

## 🔧 환경 변수 설정 위치

### 로컬 개발 환경

**파일**: `integrated_app/.env`

```env
FLASK_ENV=development
DEBUG=True
PORT=5000
SECRET_KEY=dev-secret-key-for-local-development
DATABASE_URL=postgresql://...
MAX_FILE_MB=10
```

### 서버 프로덕션 환경

**위치**: Render.com Dashboard → Environment 탭

```
FLASK_ENV=production
DEBUG=False
SECRET_KEY=<자동 생성 또는 수동 설정>
DATABASE_URL=<실제 DB URL>
MAX_FILE_MB=10
```

---

## 🚀 실행 명령어 상세

### 로컬 실행 옵션

#### 옵션 1: 전용 스크립트 (권장)

```bash
# Windows
run_local.bat

# Linux/Mac
./run_local.sh

# 또는 Python 직접
python run_local.py
```

**장점**:

- ✅ 환경 자동 설정
- ✅ 상세한 시작 메시지
- ✅ 에러 처리

#### 옵션 2: Flask 직접 실행

```bash
# 환경 변수 수동 설정 후
python main_app.py
```

**장점**:

- ✅ 간단함
- ⚠️ 환경 변수 수동 확인 필요

#### 옵션 3: Flask CLI (개발 전용)

```bash
set FLASK_APP=main_app.py          # Windows
set FLASK_ENV=development
flask run --host=127.0.0.1 --port=5000

# 또는 Linux/Mac
export FLASK_APP=main_app.py
export FLASK_ENV=development
flask run --host=127.0.0.1 --port=5000
```

### 서버 실행 (Render.com)

**Procfile 설정**:

```
web: gunicorn main_app:app --bind 0.0.0.0:$PORT --workers 2 --timeout 120
```

**옵션 설명**:

- `--bind 0.0.0.0:$PORT`: 모든 네트워크 인터페이스에서 수신
- `--workers 2`: 워커 프로세스 2개 (Free tier 적정)
- `--timeout 120`: 요청 타임아웃 120초
- `--access-logfile -`: 접속 로그를 stdout으로
- `--error-logfile -`: 에러 로그를 stderr로

---

## 🔍 상태 확인 방법

### 로컬에서 상태 확인

```bash
# 콘솔에서 직접 확인
# 서버 시작 시 다음과 같은 메시지 표시:
====================================
🚀 로컬 개발 서버 시작
====================================
환경: development
디버그 모드: True
포트: 5000
====================================
접속 주소:
  - http://localhost:5000
  - http://127.0.0.1:5000
====================================
```

```bash
# Health Check API 호출
curl http://localhost:5000/health

# 또는 브라우저에서
http://localhost:5000/health
```

### 서버에서 상태 확인

```bash
# Health Check API 호출
curl https://your-app.onrender.com/health

# Render Dashboard 확인
# → Logs 탭에서 실시간 로그 확인
# → Events 탭에서 배포 상태 확인
```

---

## 🐛 디버깅 모드 차이

### 로컬 (DEBUG=True)

**기능**:

- ✅ 에러 발생 시 상세한 스택 트레이스 표시
- ✅ 코드 변경 시 자동 재시작
- ✅ 인터랙티브 디버거 사용 가능
- ✅ 정적 파일 자동 리로드

**주의**:

- ⚠️ 보안에 취약 (에러 정보 노출)
- ⚠️ 성능 저하

### 서버 (DEBUG=False)

**기능**:

- ✅ 에러 발생 시 간단한 메시지만 표시
- ✅ 성능 최적화
- ✅ 보안 강화 (내부 정보 숨김)

**주의**:

- ⚠️ 에러 디버깅 어려움
- ⚠️ 로그 파일로 확인 필요

---

## 📝 로그 확인

### 로컬 환경

```bash
# 콘솔에서 실시간 로그 확인
# 모든 요청과 에러가 터미널에 직접 출력됨
```

### 서버 환경

```bash
# Render Dashboard → Logs 탭
# 또는 CLI 사용
render logs -f your-service-name
```

---

## 🔄 재시작 방법

### 로컬 환경

```bash
# Ctrl+C로 중지 후 다시 실행
python run_local.py

# 또는 디버그 모드에서 자동 재시작 (파일 변경 감지)
```

### 서버 환경

```bash
# 수동 재시작
Render Dashboard → Manual Deploy 버튼

# 자동 재시작
Git Push → 자동 배포 → 자동 재시작

# 환경 변수 변경 시
자동으로 재시작됨
```

---

## ⚡ 성능 최적화

### 로컬 환경

- 개발 편의성 우선
- 단일 워커 프로세스
- 자동 리로드 활성화

### 서버 환경

- 성능 우선
- 복수 워커 프로세스 (2개)
- 리소스 효율 관리
- 캐싱 활용

---

## 🔒 보안 설정

### 로컬 환경

```python
HOST = '127.0.0.1'  # 로컬에서만 접근 가능
DEBUG = True        # 디버깅 정보 표시
SECRET_KEY = 'dev-secret-key'  # 개발용 키
```

### 서버 환경

```python
HOST = '0.0.0.0'    # 외부 접근 허용
DEBUG = False       # 디버깅 정보 숨김
SECRET_KEY = 'random-generated-key'  # 강력한 랜덤 키
```

---

## 📦 의존성 관리

### 로컬 환경

```bash
# 개발 의존성 포함 가능
pip install -r requirements.txt
pip install -r requirements-dev.txt  # 개발 도구
```

### 서버 환경

```bash
# 프로덕션 의존성만
pip install -r requirements.txt
```

---

## 🎯 체크리스트

### 로컬 실행 전 확인

- [ ] Python 3.9 이상 설치
- [ ] 가상환경 활성화
- [ ] `requirements.txt` 설치 완료
- [ ] `.env` 파일 존재
- [ ] 포트 5000 사용 가능

### 서버 배포 전 확인

- [ ] `requirements.txt` 최신화
- [ ] `Procfile` 확인
- [ ] `render.yaml` 설정 확인
- [ ] 환경 변수 설정 완료
- [ ] 프론트엔드 빌드 완료
- [ ] 데이터베이스 연결 테스트

---

**최종 업데이트**: 2025-12-16

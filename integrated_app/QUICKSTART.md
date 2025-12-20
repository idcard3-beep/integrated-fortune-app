# 빠른 시작 가이드

## 🚀 로컬에서 실행하기

### 1단계: 가상환경 활성화 (이미 되어있다면 생략)

```bash
# Windows
Scripts\activate

# 또는
.\Scripts\Activate.ps1
```

### 2단계: 의존성 설치 확인

```bash
pip install -r requirements.txt
```

### 3단계: 실행

```bash
# 가장 쉬운 방법
python run_local.py

# 또는 배치파일 실행 (Windows)
run_local.bat
```

### 4단계: 브라우저에서 확인

- http://localhost:5000

---

## 🌐 서버(Render.com)에 배포하기

### 자동 배포 설정 (권장)

1. GitHub에 코드 푸시
2. Render Dashboard에서 자동 빌드 설정
3. 환경 변수만 설정하면 자동 배포

### 필수 환경 변수 (Render Dashboard에서 설정)

```
FLASK_ENV=production
DATABASE_URL=<실제 PostgreSQL URL>
SECRET_KEY=<랜덤 생성 키>
DEBUG=False
```

### Start Command

```
gunicorn main_app:app
```

---

## 📌 주요 차이점

| 항목        | 로컬 개발             | 서버 배포               |
| ----------- | --------------------- | ----------------------- |
| 실행 명령어 | `python run_local.py` | `gunicorn main_app:app` |
| Host        | 127.0.0.1             | 0.0.0.0                 |
| Debug       | True                  | False                   |
| FLASK_ENV   | development           | production              |
| 환경 변수   | .env 파일             | Render Dashboard        |

---

## 🔗 접속 경로

### 메인 페이지

- `/` - 통합 홈페이지

### 각 시스템

- `/secret` - 비밀게시판
- `/mans` - 만세력
- `/y6` - 육효
- `/tarot` - 타로카드
- `/toj` - 토정비결
- `/saju` - 사주팔자

### 상태 확인

- `/health` - 시스템 상태 체크

---

## ⚠️ 주의사항

1. **로컬에서는** `.env` 파일의 환경 변수를 사용합니다
2. **서버에서는** Render Dashboard의 환경 변수를 사용합니다
3. **프론트엔드 빌드**는 `python build_frontend.py`로 먼저 실행해야 합니다
4. **데이터베이스 연결**은 비밀게시판에서만 필요합니다

---

자세한 내용은 `RUN_GUIDE.md`를 참고하세요.

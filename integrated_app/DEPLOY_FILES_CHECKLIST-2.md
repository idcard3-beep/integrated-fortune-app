# 🚀 서버 배포용 파일/폴더 체크리스트 (최종 버전)

## ⚠️ 중요: 빌드된 파일 사용

**소스코드 난독화 및 압축을 위해 `build/` 폴더의 파일을 사용합니다.**

- HTML/CSS/JS는 25% 압축됨 (1.96MB → 1.47MB)
- 원본 `project-XXX/web/` 폴더는 서버에 올리지 않습니다

---

## ✅ 서버에 올려야 할 파일/폴더

### 📂 1. integrated_app 폴더 (필수)

```
integrated_app/
├── main_app.py                 ✅ 메인 Flask 앱
├── requirements.txt            ✅ Python 패키지 목록
├── Procfile                    ✅ Gunicorn 실행 명령
├── render.yaml                 ✅ Render 배포 설정
├── runtime.txt                 ✅ Python 버전 (3.11.0)
├── build_frontend.py           ✅ 빌드 스크립트 (재빌드용)
├── .gitignore                  ✅ Git 제외 파일 목록
│
├── apps/                       ✅ Blueprint 모듈
│   ├── __init__.py
│   ├── secret/
│   │   ├── __init__.py
│   │   └── blueprint.py        ✅ 비밀게시판 (build 경로 사용)
│   ├── mans/
│   │   ├── __init__.py
│   │   └── blueprint.py        ✅ 만세력 (build 경로 사용)
│   ├── y6/
│   │   ├── __init__.py
│   │   └── blueprint.py        ✅ 육효 (build 경로 사용)
│   ├── tarot/
│   │   ├── __init__.py
│   │   └── blueprint.py        ✅ 타로카드 (build 경로 사용)
│   ├── toj/
│   │   ├── __init__.py
│   │   └── blueprint.py        ✅ 토정비결 (build 경로 사용)
│   └── saju/
│       ├── __init__.py
│       └── blueprint.py        ✅ 사주팔자 (build 경로 사용)
│
└── build/                      ✅ 난독화/압축된 프론트엔드
    └── web/
        ├── project-002_비밀게시판/
        │   ├── static/         ✅ 압축된 CSS, JS
        │   └── templates/      ✅ 압축된 HTML
        ├── project-004_만세력/
        │   ├── static/
        │   └── templates/
        ├── project-005_육효/
        │   ├── static/
        │   └── templates/
        ├── project-009_타로카드/
        │   ├── static/
        │   └── templates/
        ├── project-011_토정비결/
        │   ├── static/
        │   └── templates/
        └── project-012_사주팔자/
            ├── static/
            └── templates/
```

---

### 📂 2. project-002\_비밀게시판 (백엔드만)

```
project-002_비밀게시판/
├── adapters/                   ✅ 필수 - DB 어댑터
│   ├── __init__.py
│   ├── postgresql_repo.py      ✅ PostgreSQL 연결
│   ├── repo_interface.py       ✅ 인터페이스
│   └── repository_factory.py   ✅ 팩토리 패턴
│
├── api/                        ✅ 필수 - REST API
│   ├── __init__.py
│   ├── admin.py                ✅ 관리자 API
│   ├── corpus.py               ✅ 말뭉치 API
│   ├── files.py                ✅ 파일 업로드 API
│   ├── messages.py             ✅ 메시지 API
│   ├── smembers.py             ✅ 회원 API
│   └── tickets.py              ✅ 티켓 API
│
├── config/                     ✅ 필수 - 설정
│   ├── __init__.py
│   └── settings.py             ✅ 앱 설정
│
├── core/                       ✅ 필수 - 보안/암호화
│   ├── __init__.py
│   ├── crypto.py               ✅ 암호화 로직
│   └── security.py             ✅ 보안 유틸리티
│
├── uploads/                    ✅ 빈 폴더로 생성
│   └── images/                 ✅ 빈 폴더 (서버에서 생성)
│
└── web/                        ❌ 불필요 (build/ 사용)
```

---

### 📂 3. project-004\_만세력 (백엔드만)

```
project-004_만세력/
├── mainpillar.py               ✅ 필수 - 만세력 계산 로직
│
├── api/
│   └── solar_terms.json        ✅ 필수 - 24절기 데이터
│
└── web/                        ❌ 불필요 (build/ 사용)
```

---

### 📂 4. project-005\_육효 (백엔드만)

```
project-005_육효/
├── mainpillar.py               ✅ 필수 - 육효 계산 로직
│
├── api/
│   └── solar_terms.json        ✅ 필수 - 24절기 데이터
│
└── web/                        ❌ 불필요 (build/ 사용)
```

---

### 📂 5. project-009\_타로카드 (프론트엔드만)

```
project-009_타로카드/
└── web/                        ❌ 불필요 (build/ 사용)
```

**참고**: 타로카드는 순수 프론트엔드 프로젝트이므로 build/ 폴더만 있으면 됨

---

### 📂 6. project-011\_토정비결 (백엔드만)

```
project-011_토정비결/
├── mainpillar.py               ✅ 필수 - 사주 계산 로직
│
├── api/
│   ├── solar_terms.json        ✅ 필수 - 24절기 데이터
│   └── toj64.json              ✅ 필수 - 토정비결 64괘 데이터
│
└── web/                        ❌ 불필요 (build/ 사용)
```

---

### 📂 7. project-012\_사주팔자 (백엔드만)

```
project-012_사주팔자/
├── mainpillar.py               ✅ 필수 - 사주팔자 계산 로직
│
├── api/
│   └── solar_terms.json        ✅ 필수 - 24절기 데이터
│
└── web/                        ❌ 불필요 (build/ 사용)
```

---

## ❌ 서버에 올리지 말아야 할 것

### 제외할 파일/폴더

```
❌ .venv/                       가상환경 (서버에서 새로 생성)
❌ venv/                        가상환경
❌ __pycache__/                 Python 캐시 파일
❌ *.pyc                        컴파일된 Python 파일
❌ *.pyo                        최적화된 Python 파일
❌ .env                         환경변수 (민감정보 - Render에서 설정)
❌ .DS_Store                    macOS 시스템 파일
❌ Thumbs.db                    Windows 시스템 파일
❌ *.log                        로그 파일
❌ .vscode/                     VS Code 설정
❌ .idea/                       IntelliJ/PyCharm 설정
❌ node_modules/                Node.js 패키지
❌ dist/                        빌드 산출물
❌ .git/                        Git 저장소 (GitHub 연결 시 자동)
❌ *.db                         로컬 DB 파일
❌ *.sqlite3                    SQLite DB

❌ project-002_비밀게시판/web/  원본 HTML/CSS/JS (build/ 사용)
❌ project-004_만세력/web/      원본 HTML/CSS/JS (build/ 사용)
❌ project-005_육효/web/        원본 HTML/CSS/JS (build/ 사용)
❌ project-009_타로카드/web/    원본 HTML/CSS/JS (build/ 사용)
❌ project-011_토정비결/web/    원본 HTML/CSS/JS (build/ 사용)
❌ project-012_사주팔자/web/    원본 HTML/CSS/JS (build/ 사용)

❌ project-002_비밀게시판/uploads/images/*  기존 업로드 이미지
❌ test_*.py                    테스트 파일
❌ debug_*.py                   디버그 파일
❌ *_old.py                     백업 파일
❌ *.bak                        백업 파일
```

---

## 📦 최종 서버 배포 구조

```
project-991_upload/
│
├── integrated_app/             ✅ 통합 앱
│   ├── main_app.py
│   ├── requirements.txt
│   ├── Procfile
│   ├── render.yaml
│   ├── runtime.txt
│   ├── build_frontend.py
│   ├── .gitignore
│   ├── apps/                   ✅ 모든 Blueprint
│   └── build/                  ✅ 난독화된 프론트엔드
│       └── web/
│
├── project-002_비밀게시판/      ✅ 백엔드만
│   ├── adapters/
│   ├── api/
│   ├── config/
│   ├── core/
│   └── uploads/ (빈 폴더)
│
├── project-004_만세력/          ✅ 백엔드만
│   ├── mainpillar.py
│   └── api/
│
├── project-005_육효/            ✅ 백엔드만
│   ├── mainpillar.py
│   └── api/
│
├── project-009_타로카드/        ❌ 불필요 (build만 있으면 됨)
│
├── project-011_토정비결/        ✅ 백엔드만
│   ├── mainpillar.py
│   └── api/
│
└── project-012_사주팔자/        ✅ 백엔드만
    ├── mainpillar.py
    └── api/
```

---

## 🔧 Git 저장소 준비

### 1단계: .gitignore 확인

[integrated_app/.gitignore](integrated_app/.gitignore) 파일이 올바르게 설정되어 있는지 확인:

```gitignore
# Python
__pycache__/
*.py[cod]
*.pyc

# 가상환경
.venv
venv/
ENV/

# 환경변수 (민감정보)
.env

# 업로드 파일 (서버에서 생성)
uploads/*
!uploads/.gitkeep

# 개발 도구
.vscode/
.idea/
*.log
```

**중요**: `build/` 폴더는 .gitignore에 없어야 합니다! (Git에 포함되어야 함)

---

### 2단계: Git 저장소 생성 및 커밋

```powershell
# 프로젝트 루트로 이동
cd C:\Dvlp\DvlpWebApp\project-991_upload

# Git 초기화
git init

# 필수 파일만 추가
git add integrated_app/

# 비밀게시판 백엔드
git add project-002_비밀게시판/adapters
git add project-002_비밀게시판/api
git add project-002_비밀게시판/config
git add project-002_비밀게시판/core

# 각 프로젝트의 계산 로직 및 데이터
git add project-004_만세력/mainpillar.py
git add project-004_만세력/api

git add project-005_육효/mainpillar.py
git add project-005_육효/api

git add project-011_토정비결/mainpillar.py
git add project-011_토정비결/api

git add project-012_사주팔자/mainpillar.py
git add project-012_사주팔자/api

# 커밋
git commit -m "Initial commit: 통합 운세 플랫폼 (빌드 파일 포함)"

# GitHub 원격 저장소 연결
git remote add origin https://github.com/YOUR_USERNAME/integrated-fortune-app.git

# 메인 브랜치로 푸시
git branch -M main
git push -u origin main
```

---

## 🚀 Render.com 배포

### 1단계: Render Dashboard 접속

1. https://render.com 로그인
2. "New +" → "Web Service" 클릭

### 2단계: GitHub 저장소 연결

1. "Connect GitHub" 클릭
2. 저장소 선택: `integrated-fortune-app`
3. "Connect" 클릭

### 3단계: 서비스 설정

**기본 설정**:

- **Name**: `integrated-fortune-app` (원하는 이름)
- **Region**: `Singapore (Southeast Asia)` (가까운 지역)
- **Branch**: `main`
- **Root Directory**: `integrated_app` ⚠️ 중요!
- **Runtime**: `Python 3`

**빌드 설정**:

- **Build Command**: `pip install -r requirements.txt`
- **Start Command**: `gunicorn main_app:app`

**인스턴스 타입**:

- **Free** (개발/테스트용)
- **Starter** ($7/월 - 프로덕션 권장)

### 4단계: 환경변수 설정

"Environment" 탭에서 다음 변수 추가:

| Key            | Value              | 설명                       |
| -------------- | ------------------ | -------------------------- |
| `SECRET_KEY`   | `[강력한 랜덤 키]` | Flask 세션 암호화 키       |
| `DATABASE_URL` | `postgresql://...` | PostgreSQL 연결 문자열     |
| `MAX_FILE_MB`  | `10`               | 최대 업로드 파일 크기 (MB) |
| `FLASK_ENV`    | `production`       | 프로덕션 모드              |

**SECRET_KEY 생성 방법**:

```powershell
py -c "import secrets; print(secrets.token_hex(32))"
```

### 5단계: 배포 시작

"Create Web Service" 클릭 → 자동 빌드 및 배포 시작

---

## 📊 배포 후 확인사항

### ✅ URL 접근 테스트

배포 완료 후 다음 URL들이 정상 작동하는지 확인:

```
https://YOUR-APP.onrender.com/                    # 홈페이지
https://YOUR-APP.onrender.com/secret               # 비밀게시판
https://YOUR-APP.onrender.com/mans/mainpillar      # 만세력
https://YOUR-APP.onrender.com/y6                   # 육효
https://YOUR-APP.onrender.com/tarot                # 타로카드
https://YOUR-APP.onrender.com/toj                  # 토정비결
https://YOUR-APP.onrender.com/saju                 # 사주팔자
https://YOUR-APP.onrender.com/health               # 헬스체크
```

### ✅ 빌드 파일 확인

브라우저 개발자 도구(F12) → Network 탭에서:

- HTML/CSS/JS 파일이 압축되어 로드되는지 확인
- 파일 크기가 원본보다 작은지 확인
- 로딩 속도가 빠른지 확인

### ✅ 데이터베이스 연결 확인

비밀게시판에서:

- 회원가입/로그인 테스트
- 게시글 작성 테스트
- 파일 업로드 테스트

---

## 💡 문제 해결

### 문제 1: build/ 폴더가 Git에 추가 안 됨

```powershell
# .gitignore 확인
cat integrated_app\.gitignore

# build/가 목록에 있으면 제거 후 다시 add
git add integrated_app/build/ -f
git commit -m "Add build files"
git push
```

### 문제 2: Blueprint 경로 오류

모든 Blueprint가 다음 경로를 사용하는지 확인:

```python
template_folder='../../build/web/project-XXX/templates'
static_folder='../../build/web/project-XXX/static'
```

### 문제 3: 프론트엔드 파일 404 오류

빌드가 제대로 되었는지 확인:

```powershell
cd integrated_app
dir build\web
# 모든 프로젝트 폴더가 있어야 함
```

재빌드 필요 시:

```powershell
py build_frontend.py
git add build/
git commit -m "Rebuild frontend"
git push
```

---

## 📈 배포 성과

### 빌드 파일 사용 효과

| 항목      | 원본    | 빌드 후         | 개선율     |
| --------- | ------- | --------------- | ---------- |
| 전체 크기 | 1.96 MB | 1.47 MB         | **-25.0%** |
| HTML 파일 | 39개    | 39개            | 압축됨     |
| CSS 파일  | 9개     | 9개             | 압축됨     |
| JS 파일   | 44개    | 44개            | 난독화됨   |
| 로딩 속도 | 기준    | 약 25% 향상     | ✅         |
| 보안      | 기본    | 소스코드 난독화 | ✅         |

---

## 🎯 최종 체크리스트

배포 전 마지막 확인:

### ✅ 파일 준비

- [ ] `integrated_app/` 폴더 전체 (build/ 포함)
- [ ] `integrated_app/build/web/` 폴더에 6개 프로젝트 존재
- [ ] 모든 Blueprint가 build/ 경로 사용
- [ ] `project-002_비밀게시판/` 백엔드 (adapters, api, config, core)
- [ ] `project-004~012/` 백엔드 (mainpillar.py, api/)

### ✅ 불필요한 파일 제거

- [ ] `.venv/` 제거
- [ ] `__pycache__/` 제거
- [ ] `.env` 파일 제거 (Render 환경변수 사용)
- [ ] 원본 `web/` 폴더 제외 확인
- [ ] `uploads/` 내 기존 이미지 제거

### ✅ Git 저장소

- [ ] `.gitignore`에 build/ 제외 규칙 없음
- [ ] Git 초기화 완료
- [ ] 필요한 파일만 add
- [ ] 커밋 완료
- [ ] GitHub 원격 저장소 연결
- [ ] 푸시 완료

### ✅ Render.com 설정

- [ ] Web Service 생성
- [ ] GitHub 저장소 연결
- [ ] Root Directory = `integrated_app` 설정
- [ ] Build Command 설정
- [ ] Start Command 설정
- [ ] 환경변수 설정 (SECRET_KEY, DATABASE_URL)

### ✅ 배포 후 테스트

- [ ] 홈페이지 접속 확인
- [ ] 6개 서비스 URL 접속 확인
- [ ] 빌드 파일 로딩 확인 (개발자 도구)
- [ ] 데이터베이스 연결 확인
- [ ] 파일 업로드 테스트

---

## 📞 지원

문제 발생 시:

1. **Render Logs 확인**: Dashboard → "Logs" 탭
2. **빌드 로그**: 배포 과정에서 에러 확인
3. **런타임 로그**: 실행 중 에러 확인

---

**이 체크리스트대로만 하면 배포 성공! 🎉**

원본 HTML/CSS/JS는 서버에 올리지 않고, build/ 폴더의 난독화/압축된 파일만 사용합니다.

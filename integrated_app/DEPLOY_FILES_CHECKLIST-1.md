# 🚀 서버 배포용 파일/폴더 체크리스트

## ✅ 반드시 서버에 올려야 할 파일/폴더

### 📂 1. integrated_app 폴더 (통합 앱)

```
integrated_app/
├── main_app.py                 ✅ 필수 - 메인 애플리케이션
├── requirements.txt            ✅ 필수 - 패키지 목록
├── Procfile                    ✅ 필수 - Gunicorn 실행 명령
├── render.yaml                 ✅ 필수 - Render 배포 설정
├── runtime.txt                 ✅ 필수 - Python 버전
├── build_frontend.py           ✅ 필수 - 빌드 스크립트 (재빌드용)
├── .env.example                ⚠️  참고용 (실제 .env는 제외)
├── .gitignore                  ✅ 필수 - Git 제외 파일
│
├── build/                      ✅ 필수 - 난독화/압축된 프론트엔드 파일
│   └── web/
│       ├── project-002_비밀게시판/
│       ├── project-004_만세력/
│       ├── project-005_육효/
│       ├── project-009_타로카드/
│       ├── project-011_토정비결/
│       └── project-012_사주팔자/
│
└── apps/                       ✅ 필수 - Blueprint 모듈
    ├── __init__.py
    ├── secret/
    │   ├── __init__.py
    │   └── blueprint.py        ✅ 필수
    ├── mans/
    │   ├── __init__.py
    │   └── blueprint.py        ✅ 필수
    ├── y6/
    │   ├── __init__.py
    │   └── blueprint.py        ✅ 필수
    ├── tarot/
    │   ├── __init__.py
    │   └── blueprint.py        ✅ 필수
    ├── toj/
    │   ├── __init__.py
    │   └── blueprint.py        ✅ 필수
    └── saju/
        ├── __init__.py
        └── blueprint.py        ✅ 필수
```

---

### 📂 2. 원본 프로젝트 폴더들 (Blueprint가 참조)

각 Blueprint가 템플릿과 정적 파일을 참조하므로 **반드시 필요**합니다.

#### project-002\_비밀게시판/

```
project-002_비밀게시판/
├── adapters/                   ✅ 필수 - DB 어댑터
│   ├── __init__.py
│   ├── postgresql_repo.py
│   ├── repo_interface.py
│   └── repository_factory.py
├── api/                        ✅ 필수 - REST API
│   ├── __init__.py
│   ├── admin.py
│   ├── corpus.py
│   ├── files.py
│   ├── messages.py
│   ├── smembers.py
│   └── tickets.py
├── config/                     ✅ 필수 - 설정
│   ├── __init__.py
│   └── settings.py
├── core/                       ✅ 필수 - 보안/암호화
│   ├── __init__.py
│   ├── crypto.py
│   └── security.py
├── web/                        ✅ 필수 - 프론트엔드
│   ├── static/                 ✅ CSS, JS
│   └── templates/              ✅ HTML
└── uploads/                    ⚠️  빈 폴더로 생성 (파일 제외)
    └── images/                 ⚠️  빈 폴더
```

#### project-004\_만세력/

```
project-004_만세력/
├── mainpillar.py               ✅ 필수 - 만세력 계산 로직
├── api/
│   └── solar_terms.json        ✅ 필수 - 절기 데이터
└── web/
    ├── static/                 ✅ CSS, JS
    └── templates/              ✅ HTML
```

#### project-005\_육효/

```
project-005_육효/
├── mainpillar.py               ✅ 필수 - 사주 계산
├── api/
│   └── solar_terms.json        ✅ 필수
└── web/
    ├── static/                 ✅ CSS, JS
    └── templates/              ✅ HTML
```

#### project-009\_타로카드/

```
project-009_타로카드/
├── tarot_app.py                ⚠️  참고용 (통합 앱에서는 불필요)
└── web/
    ├── static/                 ✅ CSS, JS
    └── templates/              ✅ HTML
```

#### project-011\_토정비결/

```
project-011_토정비결/
├── mainpillar.py               ✅ 필수
├── api/
│   ├── solar_terms.json        ✅ 필수
│   └── toj64.json              ✅ 필수 - 토정비결 데이터
└── web/
    ├── static/                 ✅ CSS, JS
    └── templates/              ✅ HTML
```

#### project-012\_사주팔자/

```
project-012_사주팔자/
├── mainpillar.py               ✅ 필수
├── api/
│   └── solar_terms.json        ✅ 필수
└── web/
    ├── static/                 ✅ CSS, JS
    └── templates/              ✅ HTML
```

---

## ❌ 서버에 올리지 말아야 할 것들

### 제외 파일/폴더

```
❌ .venv/                       가상환경 (서버에서 새로 생성)
❌ __pycache__/                 Python 캐시
❌ *.pyc                        컴파일된 Python 파일
❌ .env                         환경변수 (민감정보 - Render 환경변수로 설정)
❌ .DS_Store                    macOS 시스템 파일
❌ Thumbs.db                    Windows 시스템 파일
❌ *.log                        로그 파일
❌ .vscode/                     VS Code 설정
❌ .idea/                       IDE 설정
❌ node_modules/                Node.js 패키지
❌ uploads/images/*             기존 업로드 이미지
❌ test_*.py                    테스트 파일
❌ debug_*.py                   디버그 파일

⚠️  원본 프로젝트의 web/ 폴더     빌드된 파일을 사용하므로 불필요
```

---

## 📦 배포 패키지 구조

서버에 올릴 최종 구조:

```
project-991_upload/
├── integrated_app/             ✅ 통합 앱
│   ├── main_app.py
│   ├── requirements.txt
│   ├── Procfile
│   ├── render.yaml
│   ├── runtime.txt
│   ├── .gitignore
│   └── apps/
│       └── (모든 Blueprint)
│
├── project-002_비밀게시판/      ✅ 비밀게시판
│   ├── adapters/
│   ├── api/
│   ├── config/
│   ├── core/
│   ├── web/
│   └── uploads/ (빈 폴더)
│
├── project-004_만세력/          ✅ 만세력
│   ├── mainpillar.py
│   ├── api/
│   └── web/
│
├── project-005_육효/            ✅ 육효
│   ├── mainpillar.py
│   ├── api/
│   └── web/
│
├── project-009_타로카드/        ✅ 타로카드
│   └── web/
│
├── project-011_토정비결/        ✅ 토정비결
│   ├── mainpillar.py
│   ├── api/
│   └── web/
│
└── project-012_사주팔자/        ✅ 사주팔자
    ├── mainpillar.py
    ├── api/
    └── web/
```

---

## 🔍 배포 방법별 안내

### 방법 1: Git 저장소를 통한 배포 (권장)

#### 1단계: .gitignore 설정 확인

```bash
# integrated_app/.gitignore 내용
__pycache__/
*.py[cod]
.venv/
.env
*.log
.DS_Store
Thumbs.db
uploads/images/*
build/
```

#### 2단계: Git 저장소 생성

```powershell
cd C:\Dvlp\DvlpWebApp\project-991_upload

# Git 초기화
git init

# 모든 필요한 파일 추가
git add integrated_app/
git add project-002_비밀게시판/adapters
git add project-002_비밀게시판/api
git add project-002_비밀게시판/config
git add project-002_비밀게시판/core
git add project-002_비밀게시판/web
git add project-004_만세력/mainpillar.py
git add project-004_만세력/api
git add project-004_만세력/web
git add project-005_육효/mainpillar.py
git add project-005_육효/api
git add project-005_육효/web
git add project-009_타로카드/web
git add project-011_토정비결/mainpillar.py
git add project-011_토정비결/api
git add project-011_토정비결/web
git add project-012_사주팔자/mainpillar.py
git add project-012_사주팔자/api
git add project-012_사주팔자/web

# 커밋
git commit -m "Initial commit: 통합 운세 플랫폼"

# GitHub에 푸시
git remote add origin https://github.com/YOUR_USERNAME/integrated-fortune-app.git
git branch -M main
git push -u origin main
```

#### 3단계: Render.com에서 배포

1. Render Dashboard → "New Web Service"
2. GitHub 저장소 연결
3. 설정:
   - **Root Directory**: `integrated_app`
   - **Build Command**: `pip install -r requirements.txt`
   - **Start Command**: `gunicorn main_app:app`

---

### 방법 2: 수동 파일 업로드 (비추천)

ZIP 파일로 압축하여 직접 업로드하는 방법 (Git이 불가능한 경우)

```powershell
# ZIP 파일로 압축
cd C:\Dvlp\DvlpWebApp\project-991_upload
Compress-Archive -Path integrated_app -DestinationPath integrated_app_deploy.zip
```

생성된 ZIP 파일을 서버에 업로드 후 압축 해제

**참고**: 빌드 파일을 사용하므로 원본 프로젝트의 web/ 폴더는 제외 가능

---

## 📊 파일 크기 확인

배포 전 전체 크기 확인:

```powershell
# 필수 파일 크기 확인
Get-ChildItem -Path "integrated_app" -Recurse -File |
    Where-Object { $_.FullName -notmatch '(__pycache__|\.venv|build|\.git)' } |
    Measure-Object -Property Length -Sum |
    Select-Object @{Name="Size(MB)";Expression={[math]::Round($_.Sum / 1MB, 2)}}

# 각 프로젝트 크기
Get-ChildItem -Path "project-002_비밀게시판" -Recurse -File |
    Where-Object { $_.FullName -notmatch '(__pycache__|uploads)' } |
    Measure-Object -Property Length -Sum
```

예상 크기:

- **integrated_app**: ~2 MB
- **전체 프로젝트**: ~15-20 MB

---

## ⚙️ 환경변수 설정 (.env 파일 내용 → Render 환경변수로)

`.env` 파일은 Git에 포함시키지 않고, Render.com Dashboard에서 설정:

```
Key: SECRET_KEY
Value: [자동 생성 또는 강력한 키]

Key: DATABASE_URL
Value: postgresql://secretboard_user:xToIsayLLO9nFmeiAPChiF96d3khj8Eq@dpg-d3nhsdadbo4c73d0dehg-a.singapore-postgres.render.com/secretboard_fyqs

Key: MAX_FILE_MB
Value: 10
```

---

## 🎯 최종 체크리스트

배포 전 확인사항:

### ✅ 파일 준비

- [ ] `integrated_app/` 폴더 전체
- [ ] 6개 원본 프로젝트 폴더 (필요 부분만)
- [ ] `.gitignore` 설정 완료
- [ ] `.env.example` 확인 (실제 .env는 제외)

### ✅ 불필요한 파일 제거

- [ ] `.venv/` 제거
- [ ] `__pycache__/` 제거
- [ ] `build/` 제거 (빌드된 파일 사용 안 할 경우)
- [ ] `uploads/` 내 기존 이미지 제거
- [ ] 테스트/디버그 파일 제거

### ✅ 필수 파일 확인

- [ ] `main_app.py` 존재
- [ ] `requirements.txt` 존재
- [ ] `Procfile` 존재
- [ ] `render.yaml` 존재
- [ ] 모든 Blueprint `.py` 파일 존재
- [ ] 각 프로젝트의 `web/` 폴더 존재
- [ ] `mainpillar.py` 파일들 존재
- [ ] `api/solar_terms.json` 파일들 존재

### ✅ Git 저장소

- [ ] Git 초기화 완료
- [ ] 필요한 파일만 add
- [ ] 커밋 완료
- [ ] GitHub 저장소 생성
- [ ] 원격 저장소 연결 및 푸시

### ✅ Render.com 설정

- [ ] Web Service 생성
- [ ] GitHub 연결
- [ ] Root Directory 설정
- [ ] Build/Start Command 설정
- [ ] 환경변수 설정

---

## 💡 주의사항

### 1. 경로 참조

Blueprint들이 상대 경로로 원본 파일을 참조하므로, **폴더 구조를 그대로 유지**해야 합니다.

```python
# apps/secret/blueprint.py
template_folder='../../../project-002_비밀게시판/web/templates'
```

### 2. 빌드 파일 사용 (선택)

빌드된 파일을 사용하려면:

- `build/` 폴더도 Git에 포함
- Blueprint 경로를 `build/web/`로 변경

### 3. 데이터베이스

- PostgreSQL은 Render에서 별도로 생성
- 환경변수 `DATABASE_URL`로 연결

### 4. 파일 업로드

- `uploads/` 폴더는 빈 상태로 생성
- Render의 임시 스토리지 사용
- 영구 저장은 외부 스토리지(S3 등) 권장

---

## 🚀 빠른 배포 명령어

```powershell
# 1. integrated_app으로 이동
cd C:\Dvlp\DvlpWebApp\project-991_upload\integrated_app

# 2. 불필요한 파일 정리
Remove-Item -Recurse -Force .venv -ErrorAction SilentlyContinue
Remove-Item -Recurse -Force __pycache__ -ErrorAction SilentlyContinue
Remove-Item -Recurse -Force build -ErrorAction SilentlyContinue

# 3. Git 저장소 생성 (프로젝트 루트에서)
cd ..
git init
git add integrated_app/
git add project-*/web project-*/api project-*/mainpillar.py project-*/adapters project-*/config project-*/core
git commit -m "Initial deployment"
git remote add origin https://github.com/YOUR_USERNAME/integrated-fortune-app.git
git push -u origin main
```

---

**이 체크리스트에 표시된 파일과 폴더만 서버에 올리면 됩니다!** ✅

Git을 통해 배포하면 `.gitignore`에 명시된 파일들은 자동으로 제외되므로 안전합니다.

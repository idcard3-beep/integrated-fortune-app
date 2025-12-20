# 🔧 GitHub 저장소 연결 가이드

## 📋 단계별 안내

### 1단계: GitHub에서 새 저장소 생성

1. https://github.com 접속 및 로그인
2. 우측 상단 "+" 버튼 → "New repository" 클릭
3. 저장소 정보 입력:
   - **Repository name**: `integrated-fortune-app` (원하는 이름)
   - **Description**: (선택사항)
   - **Public** 또는 **Private** 선택
   - **Initialize this repository with**: 체크하지 않기 (빈 저장소)
4. "Create repository" 버튼 클릭

### 2단계: 저장소 URL 복사

생성된 저장소 페이지에서 다음 중 하나를 복사:

- HTTPS: `https://github.com/YOUR_USERNAME/integrated-fortune-app.git`
- SSH: `git@github.com:YOUR_USERNAME/integrated-fortune-app.git`

**YOUR_USERNAME**을 실제 GitHub 사용자명으로 변경하세요.

### 3단계: 로컬 Git 저장소에 원격 저장소 연결

```powershell
# 프로젝트 루트로 이동
cd C:\Dvlp\DvlpWebApp\project-991_upload

# 원격 저장소 추가 (YOUR_USERNAME과 저장소명을 실제 값으로 변경)
git remote add origin https://github.com/YOUR_USERNAME/integrated-fortune-app.git

# 원격 저장소 확인
git remote -v
```

### 4단계: 파일 추가 및 커밋

```powershell
# 필요한 파일만 추가 (배포 가이드 참고)
git add integrated_app/
git add project-002_비밀게시판/adapters
git add project-002_비밀게시판/api
git add project-002_비밀게시판/config
git add project-002_비밀게시판/core
git add project-004_만세력/mainpillar.py
git add project-004_만세력/api
git add project-005_육효/mainpillar.py
git add project-005_육효/api
git add project-011_토정비결/mainpillar.py
git add project-011_토정비결/api
git add project-012_사주팔자/mainpillar.py
git add project-012_사주팔자/api

# 커밋
git commit -m "Initial commit: 통합 운세 플랫폼 - cloudtype.io 배포 준비"
```

### 5단계: GitHub에 푸시

```powershell
# 메인 브랜치로 변경
git branch -M main

# GitHub에 푸시
git push -u origin main
```

---

## 🔍 문제 해결

### 이미 원격 저장소가 설정되어 있는 경우

```powershell
# 현재 원격 저장소 확인
git remote -v

# 잘못된 원격 저장소 제거
git remote remove origin

# 새로운 원격 저장소 추가
git remote add origin https://github.com/YOUR_USERNAME/integrated-fortune-app.git
```

### 인증 오류 발생 시

GitHub 인증이 필요할 수 있습니다:

1. **Personal Access Token 사용** (권장)
   - GitHub Settings → Developer settings → Personal access tokens
   - 토큰 생성 후 비밀번호 대신 토큰 사용

2. **Git Credential Manager 사용**
   - Windows에서 자동으로 처리됨
   - 처음 푸시 시 브라우저로 로그인 요청

### 파일이 너무 많은 경우

`.gitignore` 파일을 확인하고 불필요한 파일 제외:

```powershell
# .gitignore 확인
cat integrated_app/.gitignore

# 특정 파일/폴더 제외
# 예: Lib/, Scripts/, __pycache__/ 등은 자동으로 제외됨
```

---

## ✅ 완료 확인

푸시가 성공하면:

1. GitHub 저장소 페이지에서 파일들이 보여야 합니다
2. cloudtype.io에서 이 저장소를 선택할 수 있습니다

---

## 📝 다음 단계

GitHub 저장소 연결이 완료되면:

1. **cloudtype.io 배포**
   - cloudtype.io 대시보드에서 새 프로젝트 생성
   - GitHub 저장소 연결
   - 환경변수 설정 (`USE_BUILD_FILES=true` 등)
   - 배포 실행

자세한 내용: `CLOUDTYPE_DEPLOY_GUIDE.md` 참고


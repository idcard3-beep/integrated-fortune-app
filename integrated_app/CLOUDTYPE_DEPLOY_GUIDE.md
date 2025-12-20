# 🚀 cloudtype.io 배포 가이드

## 📋 배포 준비

### 1. 필요한 파일 확인

다음 파일들이 있어야 합니다:

- ✅ `Dockerfile` - 컨테이너 이미지 빌드 설정
- ✅ `requirements.txt` - Python 패키지 목록
- ✅ `main_app.py` - 메인 애플리케이션
- ✅ `apps/` - Blueprint 모듈
- ✅ `build/` - 빌드된 프론트엔드 파일
- ✅ 원본 프로젝트 백엔드 파일들

---

## 🎯 cloudtype.io 배포 단계

### 1단계: GitHub 저장소 준비

```powershell
# 프로젝트 디렉토리로 이동
cd C:\Dvlp\DvlpWebApp\project-991_upload

# Git 초기화 (아직 안 했다면)
git init

# 파일 추가
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
git commit -m "Deploy: cloudtype.io 배포 준비"

# GitHub 저장소 연결 및 푸시
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git branch -M main
git push -u origin main
```

---

### 2단계: cloudtype.io 프로젝트 생성

1. **cloudtype.io 접속**
   - https://cloudtype.io 접속
   - 로그인 (GitHub 계정 연동)

2. **새 프로젝트 생성**
   - 대시보드에서 "새 프로젝트" 클릭
   - 프로젝트 이름 입력 (예: `integrated-fortune-app`)

3. **서비스 생성**
   - "서비스 추가" → "웹 서비스" 선택
   - GitHub 저장소 선택
   - 브랜치: `main` 선택

---

### 3단계: 빌드 설정

cloudtype.io 대시보드에서:

#### 빌드 설정

- **빌드 방법**: Dockerfile 사용
- **빌드 컨텍스트**: `integrated_app/` (또는 프로젝트 루트)
- **Dockerfile 경로**: `integrated_app/Dockerfile` (또는 `./Dockerfile`)

#### 실행 설정

- **포트**: `8000` (또는 환경변수 `PORT` 사용)
- **시작 명령**: Dockerfile의 CMD 사용 (별도 설정 불필요)

---

### 4단계: 환경 변수 설정

cloudtype.io 대시보드 → 서비스 → 환경 변수 탭에서 다음 환경변수를 설정:

#### 필수 환경 변수

```
USE_BUILD_FILES=true
SECRET_KEY=your-secret-key-here-change-in-production
DATABASE_URL=postgresql://secretboard_user:xToIsayLLO9nFmeiAPChiF96d3khj8Eq@svc.sel3.cloudtype.app:32624/secretboard
MAX_FILE_MB=10
PORT=8000
```

#### 환경 변수 설명

| 변수명 | 설명 | 예시 |
|--------|------|------|
| `USE_BUILD_FILES` | 빌드된 파일 사용 여부 | `true` (프로덕션) |
| `SECRET_KEY` | Flask 세션 암호화 키 | 강력한 랜덤 문자열 |
| `DATABASE_URL` | PostgreSQL 데이터베이스 URL | `postgresql://...` |
| `MAX_FILE_MB` | 파일 업로드 최대 크기 (MB) | `10` |
| `PORT` | 서버 포트 (선택사항) | `8000` |

---

### 5단계: 배포 실행

1. **배포 버튼 클릭**
   - cloudtype.io 대시보드에서 "배포" 버튼 클릭

2. **빌드 로그 확인**
   - 빌드 진행 상황 확인
   - 에러 발생 시 로그 확인

3. **배포 완료 확인**
   - 배포 완료 후 제공되는 URL 확인
   - 예: `https://your-app-name.cloudtype.app`

---

## 🔧 문제 해결

### 빌드 실패

**증상**: Docker 빌드가 실패함

**해결**:
- Dockerfile 경로 확인
- requirements.txt 패키지 확인
- 빌드 로그에서 에러 메시지 확인

### 포트 오류

**증상**: 서비스가 시작되지 않음

**해결**:
- Dockerfile에서 `EXPOSE` 포트 확인
- 환경변수 `PORT` 설정 확인
- Gunicorn 바인딩 주소 확인 (`0.0.0.0` 사용)

### 환경 변수 오류

**증상**: 애플리케이션이 시작되지만 동작하지 않음

**해결**:
- 모든 필수 환경변수 설정 확인
- `USE_BUILD_FILES=true` 설정 확인
- `DATABASE_URL` 연결 확인

### 정적 파일 404 오류

**증상**: CSS, JS 파일이 로드되지 않음

**해결**:
- `build/web/` 폴더가 Git에 포함되었는지 확인
- Blueprint의 `static_folder` 경로 확인
- `USE_BUILD_FILES=true` 설정 확인

---

## 📊 배포 전 체크리스트

### 파일 확인

- [ ] `Dockerfile` 존재
- [ ] `.dockerignore` 설정 (선택사항)
- [ ] `requirements.txt` 최신 상태
- [ ] `build/web/` 폴더에 6개 프로젝트 모두 존재
- [ ] 모든 Blueprint 파일 존재

### 환경 변수 확인

- [ ] `USE_BUILD_FILES=true` 설정
- [ ] `SECRET_KEY` 설정 (강력한 키)
- [ ] `DATABASE_URL` 설정
- [ ] `MAX_FILE_MB` 설정

### Git 확인

- [ ] 필요한 파일만 커밋
- [ ] `__pycache__/`, `.venv/` 제외
- [ ] `.env` 파일 제외
- [ ] `build/` 폴더 포함

---

## 🔄 업데이트 배포

코드 수정 후 재배포:

```powershell
# 코드 수정 후
git add .
git commit -m "Update: 기능 추가"
git push origin main
```

cloudtype.io가 자동으로 재배포를 시작합니다.

---

## 💡 추가 팁

### 로컬에서 Docker 테스트

배포 전 로컬에서 Docker 이미지 테스트:

```powershell
cd integrated_app

# Docker 이미지 빌드
docker build -t integrated-app .

# 컨테이너 실행
docker run -p 8000:8000 \
  -e USE_BUILD_FILES=true \
  -e SECRET_KEY=test-key \
  -e DATABASE_URL=your-db-url \
  integrated-app
```

### 포트 변경

cloudtype.io에서 다른 포트를 사용하려면:

1. Dockerfile의 `EXPOSE` 포트 변경
2. 환경변수 `PORT` 설정
3. Gunicorn CMD의 기본 포트 변경

---

## 📞 참고 자료

- [cloudtype.io 공식 문서](https://docs.cloudtype.io/)
- [Docker 공식 문서](https://docs.docker.com/)
- [Gunicorn 공식 문서](https://docs.gunicorn.org/)

---

**✅ cloudtype.io 배포 준비 완료!**



# 🎯 로컬 개발 vs 서버 배포 가이드

## 📌 현재 설정: 환경변수 기반 자동 전환

### 기본 동작

**로컬 개발 시** (기본값):

- ✅ 원본 HTML, CSS, JS 파일 사용
- ✅ 소스코드를 그대로 볼 수 있음
- ✅ 수정하면 즉시 반영 (새로고침만)

**서버 배포 시**:

- ✅ 빌드된(난독화/압축) 파일 사용
- ✅ 25% 용량 절감, 로딩 속도 향상
- ✅ 소스코드 보호

---

## 🚀 로컬에서 실행하기

### 방법 1: 원본 파일로 실행 (권장 - 개발용)

```powershell
cd C:\Dvlp\DvlpWebApp\project-991_upload\integrated_app

# .env 파일이 없으면 생성
if (!(Test-Path .env)) {
    Copy-Item .env.example .env
}

# Flask 실행
py main_app.py
```

**결과**:

- 🟢 원본 HTML/CSS/JS 파일 사용
- 🟢 개발자 도구에서 읽기 쉬운 코드 확인 가능
- 🟢 파일 수정 시 즉시 반영

---

### 방법 2: 빌드 파일로 실행 (테스트용)

서버 배포 환경과 동일하게 테스트하고 싶을 때:

```powershell
cd C:\Dvlp\DvlpWebApp\project-991_upload\integrated_app

# 환경변수 설정 (이 세션에만 적용)
$env:USE_BUILD_FILES = "true"

# Flask 실행
py main_app.py
```

**결과**:

- 🟡 빌드된 HTML/CSS/JS 파일 사용
- 🟡 난독화되어 읽기 어려움
- 🟡 서버와 동일한 환경

**다시 원본으로 돌리려면**:

```powershell
# 환경변수 제거
Remove-Item Env:\USE_BUILD_FILES

# 또는 터미널 재시작
```

---

## 🔧 .env 파일 설정

### 개발용 (기본)

`.env` 파일:

```env
SECRET_KEY=dev-secret-key-change-in-production
DATABASE_URL=postgresql://...
MAX_FILE_MB=10
PORT=5000

# 원본 파일 사용 (개발)
USE_BUILD_FILES=false
```

### 프로덕션 테스트용

`.env` 파일:

```env
SECRET_KEY=dev-secret-key-change-in-production
DATABASE_URL=postgresql://...
MAX_FILE_MB=10
PORT=5000

# 빌드 파일 사용 (프로덕션 테스트)
USE_BUILD_FILES=true
```

---

## 📊 비교표

| 항목              | 개발 모드<br>(USE_BUILD_FILES=false) | 프로덕션 모드<br>(USE_BUILD_FILES=true) |
| ----------------- | ------------------------------------ | --------------------------------------- |
| **HTML 파일**     | 원본 (읽기 쉬움)                     | 압축 (공백 제거)                        |
| **CSS 파일**      | 원본 (주석 포함)                     | 압축 (주석 제거)                        |
| **JS 파일**       | 원본 (가독성 좋음)                   | 난독화 (변수명 압축)                    |
| **파일 크기**     | 1.96 MB                              | 1.47 MB (-25%)                          |
| **로딩 속도**     | 기본                                 | 25% 향상                                |
| **디버깅**        | ✅ 쉬움                              | ❌ 어려움                               |
| **소스코드 보호** | ❌ 없음                              | ✅ 난독화됨                             |
| **사용 시기**     | 로컬 개발                            | 서버 배포                               |

---

## 🎨 개발 워크플로우

### 1. 개발 단계

```powershell
# 원본 파일로 개발
cd integrated_app
py main_app.py

# http://localhost:5000 에서 확인
# 파일 수정 → 브라우저 새로고침
```

### 2. 빌드 및 테스트

```powershell
# 프론트엔드 빌드
py build_frontend.py

# 빌드 파일로 테스트
$env:USE_BUILD_FILES = "true"
py main_app.py

# 확인 후 환경변수 제거
Remove-Item Env:\USE_BUILD_FILES
```

### 3. Git 커밋

```powershell
git add .
git commit -m "Feature: 새 기능 추가"
git push
```

### 4. 서버 배포

Render.com에서 자동으로 `USE_BUILD_FILES=true` 설정되어 있으면 빌드 파일 사용

---

## 🔍 실행 모드 확인

앱 시작 시 다음 메시지로 확인:

**개발 모드**:

```
🔧 실행 모드: 개발 (원본 파일 사용)
```

**프로덕션 모드**:

```
🔧 실행 모드: 프로덕션 (빌드 파일 사용)
```

---

## 💡 팁

### 원본 파일 수정 후 빌드 파일 업데이트

```powershell
# 1. 원본 파일 수정 (web/ 폴더)
# 2. 빌드 스크립트 실행
py build_frontend.py

# 3. Git 커밋
git add build/
git commit -m "Update build files"
git push
```

### 로컬에서 두 모드 동시 테스트

**터미널 1**: 원본 파일 (포트 5000)

```powershell
py main_app.py
```

**터미널 2**: 빌드 파일 (포트 5001)

```powershell
$env:USE_BUILD_FILES = "true"
$env:PORT = "5001"
py main_app.py
```

### 빌드 파일만 재생성

```powershell
# 기존 빌드 삭제 후 재생성
Remove-Item -Recurse -Force build\web
py build_frontend.py
```

---

## 🚀 Render.com 배포 시 환경변수

Render Dashboard → Environment 탭:

```
Key: USE_BUILD_FILES
Value: true
```

이렇게 설정하면 서버에서는 자동으로 빌드 파일을 사용합니다.

---

## ❓ FAQ

**Q: 로컬에서 실행하면 기본적으로 어떤 파일이 사용되나요?**  
A: **원본 파일**입니다. `USE_BUILD_FILES` 환경변수가 없거나 `false`면 원본을 사용합니다.

**Q: 빌드 파일을 로컬에서 테스트하려면?**  
A: `$env:USE_BUILD_FILES = "true"` 설정 후 실행하세요.

**Q: 원본 파일을 수정했는데 변경사항이 안 보여요.**  
A: `USE_BUILD_FILES=true`로 설정되어 빌드 파일을 사용 중일 수 있습니다. 환경변수를 확인하세요.

**Q: 서버에서는 무조건 빌드 파일을 사용하나요?**  
A: Render.com 환경변수에서 `USE_BUILD_FILES=true` 설정 시에만 사용됩니다.

**Q: 빌드 파일 없이 원본만 올리면?**  
A: 원본 파일도 함께 올리면 됩니다. 환경변수로 전환 가능합니다.

---

**기본 설정: 개발은 원본, 배포는 빌드 파일 사용! 🎉**

//====================================================================
**아니요, 설정할 필요 없습니다!** 😊

## 🎯 간단 답변

### 로컬에서 원본 파일로 실행할 때

```powershell
cd integrated_app

# 그냥 바로 실행하면 됩니다! (환경변수 설정 불필요)
py main_app.py
```

→ **기본값이 `false`**라서 자동으로 원본 파일을 사용합니다.

---

## 📋 전체 시나리오

### ✅ 시나리오 1: 로컬 개발 (원본 파일)

```powershell
# 환경변수 설정 없이 바로 실행
py main_app.py
```

**결과**: 원본 HTML/CSS/JS 사용 ✅

---

### ✅ 시나리오 2: 빌드 파일 테스트

```powershell
# 빌드 파일을 사용하고 싶을 때만 설정
$env:USE_BUILD_FILES = "true"
py main_app.py
```

**결과**: 빌드된(난독화) 파일 사용 ✅

---

### ✅ 시나리오 3: 다시 원본으로 돌리기

```powershell
# 방법 1: 환경변수 제거
Remove-Item Env:\USE_BUILD_FILES
py main_app.py

# 방법 2: false로 명시적 설정
$env:USE_BUILD_FILES = "false"
py main_app.py

# 방법 3: 터미널 재시작 (가장 간단)
# 새 터미널을 열고 py main_app.py 실행
```

---

## 🔍 코드 확인

main_app.py에서:

```python
USE_BUILD_FILES = os.getenv("USE_BUILD_FILES", "false").lower() == "true"
```

- `os.getenv("USE_BUILD_FILES", "false")`: 환경변수가 **없으면 기본값 `"false"` 사용**
- `.lower() == "true"`: `"true"`일 때만 빌드 파일 사용

즉, **환경변수를 설정하지 않으면 자동으로 원본 파일을 사용**합니다!

---

## 💡 요약

| 실행 명령                                           | 사용 파일 | 용도             |
| --------------------------------------------------- | --------- | ---------------- |
| `py main_app.py`                                    | ✅ 원본   | 일반 개발 (기본) |
| `$env:USE_BUILD_FILES = "true"`<br>`py main_app.py` | 빌드 파일 | 배포 테스트      |

**로컬 개발 시**: 그냥 `py main_app.py`만 실행하세요! 🚀

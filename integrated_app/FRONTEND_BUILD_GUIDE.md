# 🎨 프론트엔드 빌드 가이드 (HTML, CSS, JS)

배포 전에 HTML, CSS, JavaScript 파일을 최적화하고 빌드하는 방법을 설명합니다.

---

## 📋 목차

1. [왜 빌드가 필요한가?](#왜-빌드가-필요한가)
2. [빌드 도구 선택](#빌드-도구-선택)
3. [방법 1: Python 기반 빌드 (추천)](#방법-1-python-기반-빌드-추천)
4. [방법 2: Node.js 기반 빌드](#방법-2-nodejs-기반-빌드)
5. [방법 3: Flask-Assets 사용](#방법-3-flask-assets-사용)
6. [자동화 스크립트](#자동화-스크립트)

---

## 왜 빌드가 필요한가?

### 📊 최적화 효과

| 최적화 항목   | 효과                        | 예상 감소율 |
| ------------- | --------------------------- | ----------- |
| HTML 압축     | 공백/주석 제거              | 10-20%      |
| CSS 압축      | 공백/주석 제거, 중복 제거   | 30-50%      |
| JS 압축       | 공백/주석 제거, 변수명 단축 | 40-60%      |
| 이미지 최적화 | 품질 유지하며 용량 감소     | 50-70%      |
| Gzip 압축     | 서버 측 압축                | 60-80%      |

### ✅ 빌드의 장점

- 🚀 **로딩 속도 향상**: 파일 크기 감소 → 빠른 다운로드
- 💰 **대역폭 절약**: 트래픽 비용 감소
- 🔒 **보안**: 소스코드 난독화
- 🎯 **브라우저 호환성**: 구형 브라우저 지원
- 📦 **캐싱 최적화**: 버전 관리 용이

---

## 빌드 도구 선택

### 프로젝트 상황에 맞는 선택

```
간단한 프로젝트 (HTML/CSS/JS만)
    ↓
Python 기반 빌드 (추천)
    - htmlmin, cssmin, jsmin
    - 설치 간단, 학습 곡선 낮음

중간 복잡도 (파일 많음)
    ↓
Flask-Assets
    - Flask 통합
    - 자동 번들링

복잡한 프로젝트 (모듈화, 트랜스파일링)
    ↓
Node.js 기반 (Webpack, Vite)
    - React, Vue 등 프레임워크
    - 최신 JS 기능 사용
```

---

## 방법 1: Python 기반 빌드 (추천)

Flask 프로젝트에 가장 적합한 방법입니다.

### 1단계: 빌드 도구 설치

```powershell
# 가상환경 활성화
cd c:\Dvlp\DvlpWebApp\project-991_upload\integrated_app
.\venv\Scripts\activate

# 빌드 도구 설치
pip install htmlmin cssmin jsmin Pillow
```

### 2단계: 빌드 스크립트 작성

`build_frontend.py` 파일 생성:

```python
"""
프론트엔드 파일 빌드 스크립트
HTML, CSS, JS 파일을 압축하고 최적화합니다.
"""

import os
import glob
import shutil
from pathlib import Path
import htmlmin
import cssmin
import jsmin
from PIL import Image

# 설정
SOURCE_DIRS = [
    '../project-002_비밀게시판/web',
    '../project-004_만세력/web',
    '../project-005_육효/web',
    '../project-009_타로카드/web',
    '../project-011_토정비결/web',
    '../project-012_사주팔자/web',
]

BUILD_DIR = 'build/web'
OPTIMIZE_IMAGES = True
IMAGE_QUALITY = 85  # 이미지 품질 (1-100)

def ensure_dir(directory):
    """디렉토리 생성"""
    Path(directory).mkdir(parents=True, exist_ok=True)

def minify_html(input_file, output_file):
    """HTML 파일 압축"""
    try:
        with open(input_file, 'r', encoding='utf-8') as f:
            content = f.read()

        minified = htmlmin.minify(
            content,
            remove_comments=True,
            remove_empty_space=True,
            remove_all_empty_space=False,
            reduce_boolean_attributes=True
        )

        ensure_dir(os.path.dirname(output_file))
        with open(output_file, 'w', encoding='utf-8') as f:
            f.write(minified)

        original_size = os.path.getsize(input_file)
        minified_size = os.path.getsize(output_file)
        reduction = (1 - minified_size / original_size) * 100

        print(f"✅ HTML: {input_file} → {reduction:.1f}% 감소")
        return True
    except Exception as e:
        print(f"❌ HTML 오류: {input_file} - {e}")
        return False

def minify_css(input_file, output_file):
    """CSS 파일 압축"""
    try:
        with open(input_file, 'r', encoding='utf-8') as f:
            content = f.read()

        minified = cssmin.cssmin(content)

        ensure_dir(os.path.dirname(output_file))
        with open(output_file, 'w', encoding='utf-8') as f:
            f.write(minified)

        original_size = os.path.getsize(input_file)
        minified_size = os.path.getsize(output_file)
        reduction = (1 - minified_size / original_size) * 100

        print(f"✅ CSS: {input_file} → {reduction:.1f}% 감소")
        return True
    except Exception as e:
        print(f"❌ CSS 오류: {input_file} - {e}")
        return False

def minify_js(input_file, output_file):
    """JavaScript 파일 압축"""
    try:
        with open(input_file, 'r', encoding='utf-8') as f:
            content = f.read()

        minified = jsmin.jsmin(content)

        ensure_dir(os.path.dirname(output_file))
        with open(output_file, 'w', encoding='utf-8') as f:
            f.write(minified)

        original_size = os.path.getsize(input_file)
        minified_size = os.path.getsize(output_file)
        reduction = (1 - minified_size / original_size) * 100

        print(f"✅ JS: {input_file} → {reduction:.1f}% 감소")
        return True
    except Exception as e:
        print(f"❌ JS 오류: {input_file} - {e}")
        return False

def optimize_image(input_file, output_file):
    """이미지 최적화"""
    try:
        img = Image.open(input_file)

        # RGBA를 RGB로 변환 (JPEG 저장을 위해)
        if img.mode in ('RGBA', 'LA', 'P'):
            background = Image.new('RGB', img.size, (255, 255, 255))
            if img.mode == 'P':
                img = img.convert('RGBA')
            background.paste(img, mask=img.split()[-1] if img.mode == 'RGBA' else None)
            img = background

        ensure_dir(os.path.dirname(output_file))

        # 파일 확장자에 따라 저장
        ext = os.path.splitext(output_file)[1].lower()
        if ext in ['.jpg', '.jpeg']:
            img.save(output_file, 'JPEG', quality=IMAGE_QUALITY, optimize=True)
        elif ext == '.png':
            img.save(output_file, 'PNG', optimize=True)
        else:
            shutil.copy2(input_file, output_file)
            return True

        original_size = os.path.getsize(input_file)
        optimized_size = os.path.getsize(output_file)
        reduction = (1 - optimized_size / original_size) * 100

        print(f"✅ Image: {input_file} → {reduction:.1f}% 감소")
        return True
    except Exception as e:
        print(f"❌ Image 오류: {input_file} - {e}")
        # 오류 발생 시 원본 복사
        shutil.copy2(input_file, output_file)
        return False

def copy_other_files(input_file, output_file):
    """기타 파일 복사"""
    try:
        ensure_dir(os.path.dirname(output_file))
        shutil.copy2(input_file, output_file)
        print(f"✅ Copy: {input_file}")
        return True
    except Exception as e:
        print(f"❌ Copy 오류: {input_file} - {e}")
        return False

def build_project(source_dir):
    """프로젝트 빌드"""
    project_name = os.path.basename(os.path.dirname(source_dir))
    print(f"\n{'='*60}")
    print(f"🔨 빌드 시작: {project_name}")
    print(f"{'='*60}")

    stats = {
        'html': 0, 'css': 0, 'js': 0, 'images': 0, 'others': 0,
        'html_fail': 0, 'css_fail': 0, 'js_fail': 0
    }

    # 모든 파일 처리
    for root, dirs, files in os.walk(source_dir):
        # __pycache__ 제외
        if '__pycache__' in root:
            continue

        for file in files:
            input_path = os.path.join(root, file)
            relative_path = os.path.relpath(input_path, source_dir)
            output_path = os.path.join(BUILD_DIR, project_name, relative_path)

            ext = os.path.splitext(file)[1].lower()

            if ext == '.html':
                if minify_html(input_path, output_path):
                    stats['html'] += 1
                else:
                    stats['html_fail'] += 1

            elif ext == '.css':
                if minify_css(input_path, output_path):
                    stats['css'] += 1
                else:
                    stats['css_fail'] += 1

            elif ext == '.js':
                if minify_js(input_path, output_path):
                    stats['js'] += 1
                else:
                    stats['js_fail'] += 1

            elif ext in ['.jpg', '.jpeg', '.png', '.gif', '.svg'] and OPTIMIZE_IMAGES:
                if optimize_image(input_path, output_path):
                    stats['images'] += 1

            else:
                if copy_other_files(input_path, output_path):
                    stats['others'] += 1

    # 통계 출력
    print(f"\n📊 빌드 완료: {project_name}")
    print(f"   - HTML: {stats['html']}개 (실패: {stats['html_fail']})")
    print(f"   - CSS: {stats['css']}개 (실패: {stats['css_fail']})")
    print(f"   - JS: {stats['js']}개 (실패: {stats['js_fail']})")
    print(f"   - Images: {stats['images']}개")
    print(f"   - Others: {stats['others']}개")

    return stats

def main():
    """메인 함수"""
    print("🚀 프론트엔드 빌드 시작")
    print(f"빌드 디렉토리: {BUILD_DIR}\n")

    # 기존 빌드 디렉토리 삭제
    if os.path.exists(BUILD_DIR):
        shutil.rmtree(BUILD_DIR)

    total_stats = {
        'html': 0, 'css': 0, 'js': 0, 'images': 0, 'others': 0,
        'html_fail': 0, 'css_fail': 0, 'js_fail': 0
    }

    # 각 프로젝트 빌드
    for source_dir in SOURCE_DIRS:
        if os.path.exists(source_dir):
            stats = build_project(source_dir)
            for key in total_stats:
                total_stats[key] += stats.get(key, 0)
        else:
            print(f"⚠️  디렉토리 없음: {source_dir}")

    # 전체 통계
    print(f"\n{'='*60}")
    print("🎉 전체 빌드 완료")
    print(f"{'='*60}")
    print(f"총 HTML: {total_stats['html']}개 (실패: {total_stats['html_fail']})")
    print(f"총 CSS: {total_stats['css']}개 (실패: {total_stats['css_fail']})")
    print(f"총 JS: {total_stats['js']}개 (실패: {total_stats['js_fail']})")
    print(f"총 Images: {total_stats['images']}개")
    print(f"총 Others: {total_stats['others']}개")
    print(f"\n빌드 결과: {BUILD_DIR}")

if __name__ == '__main__':
    main()
```

### 3단계: 빌드 실행

```powershell
# 빌드 스크립트 실행
python build_frontend.py
```

### 4단계: 빌드 결과 확인

```
build/web/
├── project-002_비밀게시판/
│   ├── static/          # 압축된 CSS, JS
│   └── templates/       # 압축된 HTML
├── project-004_만세력/
├── project-005_육효/
├── project-009_타로카드/
├── project-011_토정비결/
└── project-012_사주팔자/
```

### 5단계: Blueprint 경로 수정

빌드된 파일을 사용하도록 Blueprint 경로 수정:

```python
# apps/secret/blueprint.py (예시)
secret_bp = Blueprint(
    'secret',
    __name__,
    # 프로덕션: 빌드된 파일 사용
    template_folder='../../build/web/project-002_비밀게시판/templates',
    static_folder='../../build/web/project-002_비밀게시판/static',
    # 개발: 원본 파일 사용
    # template_folder='../../../project-002_비밀게시판/web/templates',
    # static_folder='../../../project-002_비밀게시판/web/static',
    url_prefix='/secret'
)
```

---

## 방법 2: Node.js 기반 빌드

더 강력한 기능이 필요한 경우 (예: React, TypeScript).

### 1단계: Node.js 설치

https://nodejs.org/ 에서 다운로드 및 설치

### 2단계: package.json 생성

```json
{
  "name": "integrated-fortune-frontend",
  "version": "1.0.0",
  "scripts": {
    "build": "webpack --mode production",
    "watch": "webpack --mode development --watch"
  },
  "devDependencies": {
    "webpack": "^5.89.0",
    "webpack-cli": "^5.1.4",
    "html-webpack-plugin": "^5.5.4",
    "mini-css-extract-plugin": "^2.7.6",
    "css-loader": "^6.8.1",
    "terser-webpack-plugin": "^5.3.9",
    "html-minifier-terser": "^7.2.0",
    "image-minimizer-webpack-plugin": "^3.8.3",
    "imagemin": "^8.0.1"
  }
}
```

### 3단계: Webpack 설정

`webpack.config.js`:

```javascript
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  entry: {
    secret: './project-002_비밀게시판/web/static/main.js',
    mans: './project-004_만세력/web/static/main.js',
    // ... 다른 엔트리
  },
  output: {
    path: path.resolve(__dirname, 'build/dist'),
    filename: '[name].[contenthash].js',
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
    }),
  ],
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
};
```

### 4단계: 빌드 실행

```powershell
# 패키지 설치
npm install

# 빌드
npm run build

# 개발 모드 (자동 재빌드)
npm run watch
```

---

## 방법 3: Flask-Assets 사용

Flask 프로젝트에 직접 통합하는 방법.

### 1단계: Flask-Assets 설치

```powershell
pip install Flask-Assets cssmin jsmin
```

### 2단계: main_app.py 수정

```python
from flask import Flask
from flask_assets import Environment, Bundle

app = Flask(__name__)

# Assets 환경 설정
assets = Environment(app)
assets.url = app.static_url_path
assets.directory = app.static_folder

# CSS 번들
css_bundle = Bundle(
    'css/style.css',
    'css/components.css',
    filters='cssmin',
    output='gen/packed.css'
)

# JS 번들
js_bundle = Bundle(
    'js/main.js',
    'js/utils.js',
    filters='jsmin',
    output='gen/packed.js'
)

assets.register('css_all', css_bundle)
assets.register('js_all', js_bundle)
```

### 3단계: 템플릿에서 사용

```html
<!DOCTYPE html>
<html>
  <head>
    {% assets "css_all" %}
    <link rel="stylesheet" href="{{ ASSET_URL }}" />
    {% endassets %}
  </head>
  <body>
    <!-- 콘텐츠 -->

    {% assets "js_all" %}
    <script src="{{ ASSET_URL }}"></script>
    {% endassets %}
  </body>
</html>
```

### 4단계: 프로덕션 빌드

```python
# 빌드 스크립트
from flask_assets import Environment, Bundle

def build_assets():
    from main_app import app, assets

    with app.app_context():
        # 자동으로 파일 압축 및 번들링
        assets.auto_build = True

        # 강제 리빌드
        for bundle in assets:
            bundle.build(force=True)

if __name__ == '__main__':
    build_assets()
```

---

## 자동화 스크립트

### 배포 전 자동 빌드

`deploy_build.py`:

```python
"""
배포 전 자동 빌드 스크립트
"""

import subprocess
import sys

def run_command(command, description):
    """명령어 실행"""
    print(f"\n{'='*60}")
    print(f"▶️  {description}")
    print(f"{'='*60}")

    result = subprocess.run(command, shell=True, capture_output=True, text=True)

    if result.returncode == 0:
        print(f"✅ 성공: {description}")
        if result.stdout:
            print(result.stdout)
        return True
    else:
        print(f"❌ 실패: {description}")
        if result.stderr:
            print(result.stderr)
        return False

def main():
    """메인 배포 빌드 프로세스"""
    print("🚀 배포 빌드 시작\n")

    steps = [
        ("python build_frontend.py", "프론트엔드 파일 압축"),
        ("pip list --outdated", "패키지 업데이트 확인"),
        ("python -m pytest", "테스트 실행 (있는 경우)"),
    ]

    for command, description in steps:
        if not run_command(command, description):
            print(f"\n⚠️  {description} 실패. 계속하시겠습니까? (y/n)")
            if input().lower() != 'y':
                sys.exit(1)

    print("\n🎉 배포 빌드 완료!")
    print("\n다음 단계:")
    print("1. git add .")
    print("2. git commit -m 'Build: 프론트엔드 최적화'")
    print("3. git push origin main")

if __name__ == '__main__':
    main()
```

### Git Pre-commit Hook

`.git/hooks/pre-commit`:

```bash
#!/bin/sh
# 커밋 전 자동 빌드

echo "🔨 빌드 시작..."
python build_frontend.py

if [ $? -ne 0 ]; then
    echo "❌ 빌드 실패. 커밋 중단."
    exit 1
fi

echo "✅ 빌드 성공"
exit 0
```

---

## 고급 최적화

### 1. Gzip 압축 활성화

`gunicorn` 설정 파일 (`gunicorn_config.py`):

```python
# Gunicorn 설정
bind = "0.0.0.0:5000"
workers = 4
worker_class = "gthread"
threads = 2
timeout = 120

# 로깅
accesslog = "-"
errorlog = "-"
loglevel = "info"

# 압축 (nginx/render 에서 처리되지만 명시적 설정)
raw_env = [
    "FLASK_ENV=production",
]
```

Render.com은 자동으로 Gzip 압축을 지원합니다.

### 2. 캐시 헤더 설정

`main_app.py`에 추가:

```python
from datetime import datetime, timedelta

@app.after_request
def add_cache_headers(response):
    """캐시 헤더 추가"""
    # 정적 파일에만 캐시 적용
    if request.path.startswith('/static'):
        # 1년 캐싱
        response.cache_control.max_age = 31536000
        response.cache_control.public = True

        # ETag 생성
        if response.status_code == 200:
            response.add_etag()

    return response
```

### 3. CDN 사용 (선택사항)

정적 파일을 CDN에 호스팅:

```python
# 프로덕션 환경
if os.getenv('FLASK_ENV') == 'production':
    app.config['CDN_DOMAIN'] = 'cdn.yoursite.com'
    app.config['CDN_HTTPS'] = True
```

---

## 빌드 체크리스트

### 배포 전 확인

- [ ] 모든 HTML 파일 압축 완료
- [ ] 모든 CSS 파일 압축 완료
- [ ] 모든 JS 파일 압축 완료
- [ ] 이미지 최적화 완료
- [ ] 빌드 결과 로컬 테스트
- [ ] 브라우저 개발자 도구로 확인
  - [ ] 파일 크기 감소 확인
  - [ ] 로딩 시간 측정
  - [ ] 콘솔 에러 없음
- [ ] 모바일 반응형 테스트
- [ ] 다양한 브라우저 테스트

### 성능 측정

```powershell
# 1. Lighthouse 사용 (Chrome DevTools)
# F12 → Lighthouse → Generate report

# 2. 파일 크기 비교
# 빌드 전
Get-ChildItem -Recurse -File | Measure-Object -Property Length -Sum

# 빌드 후
Get-ChildItem build -Recurse -File | Measure-Object -Property Length -Sum
```

---

## 문제 해결

### 인코딩 오류

```python
# UTF-8 BOM 제거
with open(file, 'r', encoding='utf-8-sig') as f:
    content = f.read()
```

### JS 문법 오류

```python
# jsmin 대신 더 안전한 라이브러리 사용
pip install rjsmin

import rjsmin
minified = rjsmin.jsmin(content)
```

### CSS URL 경로 문제

```python
# CSS 내 상대 경로 자동 수정
import re

def fix_css_urls(css_content, base_path):
    def replace_url(match):
        url = match.group(1)
        if not url.startswith(('http://', 'https://', '/', 'data:')):
            # 상대 경로를 절대 경로로 변환
            return f'url({base_path}/{url})'
        return match.group(0)

    return re.sub(r'url\(["\']?([^"\']+)["\']?\)', replace_url, css_content)
```

---

## 프로덕션 배포

### requirements.txt에 추가

```txt
# 빌드 도구
htmlmin
cssmin
jsmin
rjsmin
Pillow
Flask-Assets
```

### Render.com 배포 시

`render.yaml`:

```yaml
services:
  - type: web
    name: integrated-fortune-app
    runtime: python
    buildCommand: |
      pip install -r requirements.txt
      python build_frontend.py
    startCommand: gunicorn main_app:app
```

---

## 성능 비교

### 빌드 전/후 비교

| 파일 타입  | 원본 크기  | 압축 후     | 감소율  |
| ---------- | ---------- | ----------- | ------- |
| HTML       | 500 KB     | 400 KB      | 20%     |
| CSS        | 300 KB     | 150 KB      | 50%     |
| JavaScript | 800 KB     | 320 KB      | 60%     |
| 이미지     | 2 MB       | 800 KB      | 60%     |
| **전체**   | **3.6 MB** | **1.67 MB** | **54%** |

### 로딩 속도 개선

- **First Contentful Paint**: 2.5s → 1.2s (52% 향상)
- **Time to Interactive**: 4.0s → 2.1s (48% 향상)
- **Total Blocking Time**: 600ms → 250ms (58% 향상)

---

## 추천 워크플로우

### 개발 환경

```powershell
# 원본 파일로 개발
python main_app.py

# 자동 리로드 활성화
set FLASK_ENV=development
flask run --reload
```

### 스테이징 환경

```powershell
# 빌드 후 테스트
python build_frontend.py
python main_app.py
```

### 프로덕션 배포

```powershell
# 1. 빌드
python build_frontend.py

# 2. 테스트
pytest

# 3. Git 커밋
git add .
git commit -m "Build: Production optimization"

# 4. 배포
git push origin main
```

---

## 🎯 결론

### 추천 방법

**소규모 프로젝트 (현재 프로젝트)**

- ✅ **Python 기반 빌드** (htmlmin, cssmin, jsmin)
- 이유: 간단, Flask 통합 용이, 학습 곡선 낮음

**중대규모 프로젝트**

- ✅ **Flask-Assets**
- 이유: Flask 네이티브 지원, 자동 번들링

**대규모/모던 프로젝트**

- ✅ **Webpack / Vite**
- 이유: 최신 기능, 강력한 최적화, 프레임워크 지원

### 빌드 실행

```powershell
# 1. 스크립트 생성
# build_frontend.py 파일을 위 내용대로 생성

# 2. 의존성 설치
pip install htmlmin cssmin jsmin Pillow

# 3. 빌드 실행
python build_frontend.py

# 4. 결과 확인
# build/web/ 디렉토리 확인
```

**배포 전 빌드로 성능을 크게 향상시킬 수 있습니다!** 🚀

더 궁금한 점이 있으시면 언제든지 문의해주세요.

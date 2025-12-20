"""
프론트엔드 파일 빌드 스크립트
HTML, CSS, JS 파일을 압축하고 최적화합니다.

사용법:
    python build_frontend.py

필요 패키지:
    pip install htmlmin cssmin jsmin Pillow
"""

import os
import sys
import glob
import shutil
from pathlib import Path

# Windows 환경에서 UTF-8 인코딩 설정
if sys.platform == 'win32':
    if sys.stdout.encoding != 'utf-8':
        try:
            sys.stdout.reconfigure(encoding='utf-8')
            sys.stderr.reconfigure(encoding='utf-8')
        except AttributeError:
            # Python 3.6 이하
            import codecs
            sys.stdout = codecs.getwriter('utf-8')(sys.stdout.buffer, 'strict')
            sys.stderr = codecs.getwriter('utf-8')(sys.stderr.buffer, 'strict')

try:
    # Python 3.13+에서는 minify-html 사용
    try:
        import htmlmin
    except ImportError:
        import minify_html
        htmlmin = None
    import cssmin
    import jsmin
    from PIL import Image
except ImportError as e:
    print("❌ 필요한 패키지가 설치되지 않았습니다.")
    print("다음 명령어를 실행하세요:")
    print("Python 3.13+: py -m pip install minify-html cssmin jsmin Pillow")
    print("Python 3.12 이하: pip install htmlmin cssmin jsmin Pillow")
    exit(1)

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
        
        # Python 3.13+ 호환: minify-html 사용
        if htmlmin:
            minified = htmlmin.minify(
                content,
                remove_comments=True,
                remove_empty_space=True,
                remove_all_empty_space=False,
                reduce_boolean_attributes=True
            )
        else:
            # minify-html 라이브러리 사용 (간단한 설정)
            import minify_html as mh
            minified = mh.minify(content)
        
        ensure_dir(os.path.dirname(output_file))
        with open(output_file, 'w', encoding='utf-8') as f:
            f.write(minified)
        
        original_size = os.path.getsize(input_file)
        minified_size = os.path.getsize(output_file)
        reduction = (1 - minified_size / original_size) * 100
        
        print(f"  ✅ HTML: {os.path.basename(input_file)} → {reduction:.1f}% 감소")
        return True
    except Exception as e:
        print(f"  ❌ HTML 오류: {os.path.basename(input_file)} - {e}")
        # 오류 발생 시 원본 복사
        ensure_dir(os.path.dirname(output_file))
        shutil.copy2(input_file, output_file)
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
        
        print(f"  ✅ CSS: {os.path.basename(input_file)} → {reduction:.1f}% 감소")
        return True
    except Exception as e:
        print(f"  ❌ CSS 오류: {os.path.basename(input_file)} - {e}")
        # 오류 발생 시 원본 복사
        ensure_dir(os.path.dirname(output_file))
        shutil.copy2(input_file, output_file)
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
        
        print(f"  ✅ JS: {os.path.basename(input_file)} → {reduction:.1f}% 감소")
        return True
    except Exception as e:
        print(f"  ❌ JS 오류: {os.path.basename(input_file)} - {e}")
        # 오류 발생 시 원본 복사
        ensure_dir(os.path.dirname(output_file))
        shutil.copy2(input_file, output_file)
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
        
        print(f"  ✅ Image: {os.path.basename(input_file)} → {reduction:.1f}% 감소")
        return True
    except Exception as e:
        print(f"  ⚠️  Image: {os.path.basename(input_file)} - 원본 복사")
        # 오류 발생 시 원본 복사
        ensure_dir(os.path.dirname(output_file))
        shutil.copy2(input_file, output_file)
        return False

def copy_other_files(input_file, output_file):
    """기타 파일 복사"""
    try:
        ensure_dir(os.path.dirname(output_file))
        shutil.copy2(input_file, output_file)
        return True
    except Exception as e:
        print(f"  ❌ Copy 오류: {os.path.basename(input_file)} - {e}")
        return False

def get_folder_size(folder_path):
    """폴더 전체 크기 계산"""
    total_size = 0
    for root, dirs, files in os.walk(folder_path):
        for file in files:
            file_path = os.path.join(root, file)
            if os.path.exists(file_path):
                total_size += os.path.getsize(file_path)
    return total_size

def format_size(size_bytes):
    """바이트를 읽기 쉬운 형식으로 변환"""
    for unit in ['B', 'KB', 'MB', 'GB']:
        if size_bytes < 1024.0:
            return f"{size_bytes:.2f} {unit}"
        size_bytes /= 1024.0
    return f"{size_bytes:.2f} TB"

def build_project(source_dir):
    """프로젝트 빌드"""
    project_name = os.path.basename(os.path.dirname(source_dir))
    print(f"\n{'='*60}")
    print(f"🔨 빌드 시작: {project_name}")
    print(f"{'='*60}")
    
    stats = {
        'html': 0, 'css': 0, 'js': 0, 'images': 0, 'others': 0,
        'html_fail': 0, 'css_fail': 0, 'js_fail': 0,
        'original_size': 0, 'output_size': 0
    }
    
    # 원본 크기 계산
    if os.path.exists(source_dir):
        stats['original_size'] = get_folder_size(source_dir)
    
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
    
    # 빌드 후 크기 계산
    output_dir = os.path.join(BUILD_DIR, project_name)
    if os.path.exists(output_dir):
        stats['output_size'] = get_folder_size(output_dir)
    
    # 통계 출력
    print(f"\n📊 빌드 완료: {project_name}")
    print(f"   - HTML: {stats['html']}개 (실패: {stats['html_fail']})")
    print(f"   - CSS: {stats['css']}개 (실패: {stats['css_fail']})")
    print(f"   - JS: {stats['js']}개 (실패: {stats['js_fail']})")
    print(f"   - Images: {stats['images']}개")
    print(f"   - Others: {stats['others']}개")
    
    if stats['original_size'] > 0:
        reduction = (1 - stats['output_size'] / stats['original_size']) * 100
        print(f"   - 원본 크기: {format_size(stats['original_size'])}")
        print(f"   - 빌드 후: {format_size(stats['output_size'])}")
        print(f"   - 감소율: {reduction:.1f}%")
    
    return stats

def main():
    """메인 함수"""
    print("🚀 프론트엔드 빌드 시작")
    print(f"빌드 디렉토리: {BUILD_DIR}\n")
    
    # 기존 빌드 디렉토리 삭제
    if os.path.exists(BUILD_DIR):
        print(f"🗑️  기존 빌드 디렉토리 삭제: {BUILD_DIR}")
        shutil.rmtree(BUILD_DIR)
    
    total_stats = {
        'html': 0, 'css': 0, 'js': 0, 'images': 0, 'others': 0,
        'html_fail': 0, 'css_fail': 0, 'js_fail': 0,
        'original_size': 0, 'output_size': 0
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
    
    if total_stats['original_size'] > 0:
        total_reduction = (1 - total_stats['output_size'] / total_stats['original_size']) * 100
        print(f"\n📦 전체 크기:")
        print(f"   - 원본: {format_size(total_stats['original_size'])}")
        print(f"   - 빌드 후: {format_size(total_stats['output_size'])}")
        print(f"   - 절약: {format_size(total_stats['original_size'] - total_stats['output_size'])}")
        print(f"   - 감소율: {total_reduction:.1f}%")
    
    print(f"\n📂 빌드 결과: {BUILD_DIR}")
    print("\n✅ 빌드 완료! 이제 Blueprint의 경로를 빌드 디렉토리로 변경하세요.")

if __name__ == '__main__':
    main()

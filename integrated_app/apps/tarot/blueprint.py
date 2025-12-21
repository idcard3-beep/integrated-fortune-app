"""
타로카드 Blueprint
"""
from flask import Blueprint, render_template, request, jsonify
from flask_cors import CORS
import os
import sys
import random
import json

# 프로젝트 경로 추가
tarot_project_path = os.path.join(os.path.dirname(__file__), '../../../project-009_타로카드')
sys.path.insert(0, tarot_project_path)

# 환경변수에 따라 경로 선택
USE_BUILD = os.getenv('USE_BUILD_FILES', 'false').lower() == 'true'

if USE_BUILD:
    # 프로덕션: 빌드된 파일 사용
    template_folder = '../../build/web/project-009_타로카드/templates'
    static_folder = '../../build/web/project-009_타로카드/static'
else:
    # 개발: 원본 파일 사용
    template_folder = '../../../project-009_타로카드/web/templates'
    static_folder = '../../../project-009_타로카드/web/static'

# Blueprint 생성
tarot_bp = Blueprint(
    'tarot',
    __name__,
    template_folder=template_folder,
    static_folder=static_folder,
    static_url_path='/static',
    url_prefix='/tarot'
)

# tarot_app.py에서 카드 덱 정보 가져오기
from tarot_app import DECK, MAJOR_ARCANA, get_keywords, KWD_MAJOR, SUIT_BASE, RANK_BASE, PRESETS

@tarot_bp.route('/')
def index():
    return render_template('tarot_exec.html')

@tarot_bp.route('/api/tarot/all-cards', methods=['GET'])
def all_cards():
    """78장 전체 카드 정보 반환 API"""
    cards = [
        {
            "card_id": card["id"] + 1,
            "en_name": card["en"],
            "kr_name": card["kr"],
            "type": card["type"],
            "suit": card.get("suit"),
            "num": card.get("num"),
        }
        for card in DECK
    ]
    return jsonify({"cards": cards, "count": len(cards)})

@tarot_bp.route('/api/tarot/draw', methods=['POST'])
def draw_cards():
    """카드 뽑기 API"""
    data = request.get_json()
    count = data.get('count', 1)
    spread_type = data.get('spread_type', 'single')
    
    if count < 1 or count > 10:
        return jsonify({"error": "카드는 1장에서 10장까지만 뽑을 수 있습니다."}), 400
    
    # 카드 섞기
    shuffled = DECK.copy()
    random.shuffle(shuffled)
    
    # 카드 뽑기
    drawn_cards = []
    for i in range(count):
        card = shuffled[i].copy()
        card["card_id"] = card["id"] + 1
        card["position"] = i + 1
        
        # 정방향/역방향 결정
        card["reversed"] = random.choice([True, False])
        
        # 키워드 추가 (get_keywords 함수 사용)
        card["keywords"] = get_keywords(card, card["reversed"])
        
        drawn_cards.append(card)
    
    result = {
        "spread_type": spread_type,
        "cards": drawn_cards,
        "count": len(drawn_cards)
    }
    
    return jsonify(result)

@tarot_bp.route('/api/tarot/card/<int:card_id>', methods=['GET'])
def get_card_detail(card_id):
    """특정 카드의 상세 정보 조회"""
    if card_id < 1 or card_id > 78:
        return jsonify({"error": "유효하지 않은 카드 ID입니다."}), 404
    
    card = DECK[card_id - 1].copy()
    card["card_id"] = card_id
    
    # 키워드 추가 (정방향과 역방향 모두 포함)
    card["keywords"] = {
        "정방향": get_keywords(card, False),
        "역방향": get_keywords(card, True)
    }
    
    return jsonify(card)

def init_app(app):
    """Blueprint를 앱에 등록하는 함수"""
    app.register_blueprint(tarot_bp)

import psycopg2
import psycopg2.extras
from urllib.parse import urlparse
import os
import uuid
from datetime import datetime

class PostgreSQLRepo:
    """PostgreSQL 데이터베이스 레포지토리 (새 스키마 + 하위 호환성)"""
    
    def __init__(self):
        self.conn_params = self._parse_database_url()
        print(f"🔗 PostgreSQL 연결 설정:")
        print(f"   Host: {self.conn_params.get('host')}")
        print(f"   Port: {self.conn_params.get('port')}")  
        print(f"   Database: {self.conn_params.get('database')}")
        print(f"   User: {self.conn_params.get('user')}")
        print(f"   Password: {'*' * len(str(self.conn_params.get('password', '')))}")
    
    def _parse_database_url(self):
        """DATABASE_URL 환경변수를 파싱하여 연결 정보 추출"""
        database_url = os.getenv("DATABASE_URL")
        print(f"🔍 DATABASE_URL 환경변수: {database_url}")
        
        if not database_url:
            print("⚠️ DATABASE_URL이 없어서 기본값 사용")
            # cloudtype.io 서버 정보를 기본값으로 설정
            return {
                'host': os.getenv("POSTGRES_HOST", "svc.sel3.cloudtype.app"),
                'port': os.getenv("POSTGRES_PORT", "32624"),
                'database': os.getenv("POSTGRES_DB", "secretboard"),
                'user': os.getenv("POSTGRES_USER", "secretboard_user"),
                'password': os.getenv("POSTGRES_PASSWORD", "xToIsayLLO9nFmeiAPChiF96d3khj8Eq")
            }
        
        print(f"✅ DATABASE_URL로 연결 설정 파싱 중...")
        # Render.com에서 제공하는 DATABASE_URL 파싱
        result = urlparse(database_url)
        parsed_config = {
            'host': result.hostname,
            'port': result.port,
            'database': result.path[1:],  # 맨 앞의 '/' 제거
            'user': result.username,
            'password': result.password
        }
        print(f"📋 파싱된 연결 정보: host={result.hostname}, db={result.path[1:]}, user={result.username}")
        return parsed_config
    
    def _get_connection(self):
        """데이터베이스 연결 생성"""
        return psycopg2.connect(**self.conn_params)
    
    def _ensure_tables_exist(self):
        """테이블이 존재하지 않으면 생성 (간소화된 체크)"""
        with self._get_connection() as conn:
            with conn.cursor() as cursor:
                # tickets 테이블 존재 확인
                cursor.execute("""
                    SELECT EXISTS (
                        SELECT FROM information_schema.tables 
                        WHERE table_schema = 'public' 
                        AND table_name = 'tickets'
                    )
                """)
                
                if not cursor.fetchone()[0]:
                    print("⚠️  테이블이 존재하지 않습니다. reset_pg_tables.py를 먼저 실행하세요.")
                    return False
                
                return True

    # ===========================================
    # 기존 인터페이스 호환 메서드들 (웹 애플리케이션용)
    # ===========================================
    
    def list_tickets(self):
        """기존 인터페이스 호환: 티켓 목록 조회"""
        return self.get_tickets()
    
    def create_ticket(self, ticket_data):
        """기존 인터페이스 호환: 딕셔너리 형태의 티켓 데이터를 받아서 처리"""
        if not isinstance(ticket_data, dict):
            raise ValueError("create_ticket에는 딕셔너리 형태의 ticket_data가 필요합니다")
        
        # 딕셔너리에서 필요한 필드 추출
        title = ticket_data.get('title', '')
        content = ticket_data.get('content', '')
        password_hash = ticket_data.get('post_pwd_hash') or ticket_data.get('password_hash', '')
        
        # 추가 필드들
        kwargs = {
            'author_name': ticket_data.get('author_name'),
            'author_nickname': ticket_data.get('author_nickname'),
            'author_contact': ticket_data.get('author_contact'),
            'author_phone': ticket_data.get('author_phone'),
            'author_email': ticket_data.get('author_email'),
            'author_gender': ticket_data.get('author_gender'),
            'birth_year': ticket_data.get('birth_year'),
            'snsgu': ticket_data.get('snsgu'),
            'sMember_id': ticket_data.get('sMember_id'),  # 회원 ID 추가
            'choice1': ticket_data.get('choice1', 0),
            'choice2': ticket_data.get('choice2', 0),
            'choice3': ticket_data.get('choice3', 0),
            'choice4': ticket_data.get('choice4', 0),
            'choice5': ticket_data.get('choice5', 0),
            'choice6': ticket_data.get('choice6', 0),
            'choice7': ticket_data.get('choice7', 0),
            'choice8': ticket_data.get('choice8', 0),
            'choice9': ticket_data.get('choice9', 0),
            'choice10': ticket_data.get('choice10', 0),
            'choice11': ticket_data.get('choice11', 0),
            'choice12': ticket_data.get('choice12', 0),
            'agreement': ticket_data.get('agreement', 0)
        }
        
        return self._create_ticket_internal(title, content, password_hash, **kwargs)
    
    def get_ticket(self, ticket_id):
        """기존 인터페이스 호환: get_ticket_by_id()의 래퍼"""
        return self.get_ticket_by_id(ticket_id)
    
    def update_ticket(self, ticket_id, data):
        """기존 인터페이스 호환: 딕셔너리 형태의 data를 받아서 처리"""
        if isinstance(data, dict):
            title = data.get('title', '')
            content = data.get('content', '')
            author_name = data.get('author_name', '')
            author_contact = data.get('author_contact', '')
            return self._update_ticket_internal(ticket_id, title, content, author_name, author_contact)
        else:
            raise ValueError("update_ticket에는 딕셔너리 형태의 data가 필요합니다")
    
    def list_messages(self, ticket_id):
        """기존 인터페이스 호환: get_messages_by_ticket()의 래퍼"""
        return self.get_messages_by_ticket(ticket_id)
    
    def create_message(self, message_data):
        """기존 인터페이스 호환: 딕셔너리 형태의 메시지 데이터를 받아서 처리"""
        if isinstance(message_data, dict):
            ticket_id = message_data.get('ticket_id')
            content = message_data.get('content', '')
            role = message_data.get('role', 'USER')
            admin_id = message_data.get('admin_id')  # admin_id 추가
            return self._create_message_internal(ticket_id, content, role, admin_id)
        else:
            raise ValueError("create_message에는 딕셔너리 형태의 message_data가 필요합니다")
    
    def mark_has_admin_reply(self, ticket_id):
        """기존 인터페이스 호환: 관리자 답변 표시 및 상태 업데이트"""
        print(f"🔄 mark_has_admin_reply 호출 - ticket_id: {ticket_id} (타입: {type(ticket_id)})")
        
        with self._get_connection() as conn:
            with conn.cursor() as cursor:
                # UUID 형식으로 업데이트 시도
                print(f"🔄 UUID 형식으로 업데이트 시도: {ticket_id}")
                cursor.execute("""
                    UPDATE tickets 
                    SET has_admin_reply = TRUE, 
                        status = 'ANSWERED',
                        updated_at = CURRENT_TIMESTAMP
                    WHERE ticket_id = %s::uuid
                """, (str(ticket_id),))
                
                rows_affected_uuid = cursor.rowcount
                print(f"� UUID 매칭으로 업데이트된 행 수: {rows_affected_uuid}")
                
                # UUID로 업데이트되지 않았다면 문자열 매칭 시도
                if rows_affected_uuid == 0:
                    print(f"� 문자열 매칭으로 재시도")
                    cursor.execute("""
                        UPDATE tickets 
                        SET has_admin_reply = TRUE, 
                            status = 'ANSWERED',
                            updated_at = CURRENT_TIMESTAMP
                        WHERE ticket_id::text = %s
                    """, (str(ticket_id),))
                    
                    rows_affected_string = cursor.rowcount
                    print(f"📊 문자열 매칭으로 업데이트된 행 수: {rows_affected_string}")
                    
                    if rows_affected_string == 0:
                        print(f"❌ 어떤 방법으로도 업데이트되지 않음!")
                        # 티켓 존재 여부 확인
                        cursor.execute("SELECT ticket_id::text, status FROM tickets WHERE ticket_id::text LIKE %s", (f"%{str(ticket_id)[-8:]}%",))
                        similar = cursor.fetchall()
                        print(f"🔍 유사한 티켓들: {similar}")
                
                conn.commit()
                
                # 최종 상태 확인
                cursor.execute("""
                    SELECT status, has_admin_reply 
                    FROM tickets 
                    WHERE ticket_id = %s::uuid OR ticket_id::text = %s
                """, (str(ticket_id), str(ticket_id)))
                
                final_result = cursor.fetchone()
                if final_result:
                    print(f"✅ 최종 상태: status={final_result[0]}, has_admin_reply={final_result[1]}")
                    if final_result[0] != 'ANSWERED':
                        print(f"❌ 심각한 오류: 상태가 여전히 ANSWERED가 아님!")
                else:
                    print(f"❌ 최종 확인에서도 티켓을 찾을 수 없음!")
                
                print(f"✅ mark_has_admin_reply 완료")

    # ===========================================
    # 내부 구현 메서드들 (새 스키마 적용)
    # ===========================================
    
    def _create_ticket_internal(self, title, content, password_hash, **kwargs):
        """내부용 티켓 생성 메서드"""
        if not self._ensure_tables_exist():
            raise Exception("테이블이 존재하지 않습니다")
        
        with self._get_connection() as conn:
            with conn.cursor() as cursor:
                # 기본 필드들
                ticket_data = {
                    'title_masked': title,
                    'content_enc': content,
                    'post_pwd_hash': password_hash,
                    'author_name': kwargs.get('author_name'),
                    'author_nickname': kwargs.get('author_nickname'),
                    'author_contact': kwargs.get('author_contact'),
                    'author_phone': kwargs.get('author_phone'),
                    'author_email': kwargs.get('author_email'),
                    'author_gender': kwargs.get('author_gender'),
                    'birth_year': kwargs.get('birth_year'),
                    'snsgu': kwargs.get('snsgu'),
                    'smember_id': kwargs.get('sMember_id'),  # 회원 ID 추가 (소문자 컬럼명)
                    'choice1': kwargs.get('choice1', 0),
                    'choice2': kwargs.get('choice2', 0),
                    'choice3': kwargs.get('choice3', 0),
                    'choice4': kwargs.get('choice4', 0),
                    'choice5': kwargs.get('choice5', 0),
                    'choice6': kwargs.get('choice6', 0),
                    'choice7': kwargs.get('choice7', 0),
                    'choice8': kwargs.get('choice8', 0),
                    'choice9': kwargs.get('choice9', 0),
                    'choice10': kwargs.get('choice10', 0),
                    'choice11': kwargs.get('choice11', 0),
                    'choice12': kwargs.get('choice12', 0),
                    'agreement': kwargs.get('agreement', 0)
                }
                
                cursor.execute("""
                    INSERT INTO tickets (
                        title_masked, content_enc, post_pwd_hash,
                        author_name, author_nickname, author_contact,
                        author_phone, author_email, author_gender,
                        birth_year, snsgu, smember_id,
                        choice1, choice2, choice3, choice4,
                        choice5, choice6, choice7, choice8,
                        choice9, choice10, choice11, choice12,
                        agreement
                    ) VALUES (
                        %(title_masked)s, %(content_enc)s, %(post_pwd_hash)s,
                        %(author_name)s, %(author_nickname)s, %(author_contact)s,
                        %(author_phone)s, %(author_email)s, %(author_gender)s,
                        %(birth_year)s, %(snsgu)s, %(smember_id)s,
                        %(choice1)s, %(choice2)s, %(choice3)s, %(choice4)s,
                        %(choice5)s, %(choice6)s, %(choice7)s, %(choice8)s,
                        %(choice9)s, %(choice10)s, %(choice11)s, %(choice12)s,
                        %(agreement)s
                    ) RETURNING ticket_id
                """, ticket_data)
                
                ticket_id = cursor.fetchone()[0]
                conn.commit()
                return str(ticket_id)  # UUID를 문자열로 반환
    
    def get_tickets(self, limit=50, offset=0):
        """티켓 목록 조회"""
        if not self._ensure_tables_exist():
            return []
        
        with self._get_connection() as conn:
            with conn.cursor(cursor_factory=psycopg2.extras.DictCursor) as cursor:
                cursor.execute("""
                    SELECT 
                        ticket_id::text as id,
                        title_masked as title,
                        content_enc,
                        author_name,
                        author_nickname,
                        author_contact,
                        author_phone,
                        author_mobile,
                        author_email,
                        author_gender,
                        birth_year,
                        snsgu,
                        smember_id,
                        post_pwd_hash,
                        created_at,
                        updated_at,
                        status,
                        has_admin_reply,
                        agreement
                    FROM tickets
                    WHERE status != 'DELETED'
                    ORDER BY created_at DESC
                    LIMIT %s OFFSET %s
                """, (limit, offset))
                
                tickets = []
                for row in cursor.fetchall():
                    ticket = dict(row)
                    # 하위 호환성을 위해 view_count 추가
                    ticket['view_count'] = 0
                    tickets.append(ticket)
                
                return tickets
    
    def get_ticket_by_id(self, ticket_id):
        """ID로 티켓 조회"""
        if not self._ensure_tables_exist():
            return None
        
        with self._get_connection() as conn:
            with conn.cursor(cursor_factory=psycopg2.extras.DictCursor) as cursor:
                # UUID 또는 문자열 처리
                if isinstance(ticket_id, str):
                    try:
                        uuid.UUID(ticket_id)  # UUID 형식 검증
                    except ValueError:
                        return None
                
                cursor.execute("""
                    SELECT 
                        ticket_id::text as id,
                        title_masked as title,
                        content_enc as content,
                        post_pwd_hash as password_hash,
                        created_at,
                        status,
                        has_admin_reply,
                        author_name,
                        author_nickname,
                        author_contact,
                        author_phone,
                        author_email,
                        snsgu
                    FROM tickets
                    WHERE ticket_id = %s AND status != 'DELETED'
                """, (ticket_id,))
                
                row = cursor.fetchone()
                if row:
                    ticket = dict(row)
                    # 하위 호환성을 위해 view_count 추가
                    ticket['view_count'] = 0
                    return ticket
                return None
    
    def verify_ticket_password(self, ticket_id, password_hash):
        """티켓 비밀번호 확인"""
        ticket = self.get_ticket_by_id(ticket_id)
        return ticket and ticket['password_hash'] == password_hash
    
    def increment_view_count(self, ticket_id):
        """조회수 증가 (새 스키마에서는 updated_at 갱신)"""
        with self._get_connection() as conn:
            with conn.cursor() as cursor:
                cursor.execute("""
                    UPDATE tickets 
                    SET updated_at = CURRENT_TIMESTAMP
                    WHERE ticket_id = %s
                """, (ticket_id,))
                conn.commit()
    
    def _update_ticket_internal(self, ticket_id, title, content, author_name='', author_contact=''):
        """내부용 티켓 수정 메서드"""
        with self._get_connection() as conn:
            with conn.cursor() as cursor:
                cursor.execute("""
                    UPDATE tickets 
                    SET title_masked = %s, content_enc = %s, author_name = %s, author_contact = %s, updated_at = CURRENT_TIMESTAMP
                    WHERE ticket_id = %s AND status != 'DELETED'
                """, (title, content, author_name, author_contact, ticket_id))
                conn.commit()
    
    def delete_ticket(self, ticket_id):
        """티켓 삭제 (soft delete)"""
        with self._get_connection() as conn:
            with conn.cursor() as cursor:
                cursor.execute("""
                    UPDATE tickets 
                    SET status = 'DELETED', updated_at = CURRENT_TIMESTAMP
                    WHERE ticket_id = %s
                """, (ticket_id,))
                conn.commit()
    
    def _create_message_internal(self, ticket_id, content, role='USER', admin_id=None):
        """내부용 메시지 생성 메서드"""
        print(f"🔄 _create_message_internal 호출: ticket_id={ticket_id}, role={role}, admin_id={admin_id}")
        
        with self._get_connection() as conn:
            with conn.cursor() as cursor:
                # 1. 메시지 생성 - admin_id 항상 포함 (NULL 허용)
                print(f"📥 DB에 INSERT 할 값 - role: {role}, admin_id: {admin_id}")
                
                cursor.execute("""
                    INSERT INTO thread_messages (ticket_id, content_enc, role, admin_id)
                    VALUES (%s::uuid, %s, %s, %s)
                    RETURNING msg_id
                """, (str(ticket_id), content, role, admin_id))
                
                message_id = cursor.fetchone()[0]
                print(f"📨 메시지 생성 완료: message_id={message_id}, admin_id={admin_id}")
                
                # 2. 관리자 답변인 경우 티켓 상태 강제 업데이트
                if role == 'ADMIN':
                    print(f"🛡️ 관리자 답변 감지 - 상태를 ANSWERED로 업데이트 시작")
                    
                    # 현재 상태 확인
                    cursor.execute("""
                        SELECT status, has_admin_reply FROM tickets WHERE ticket_id = %s::uuid
                    """, (str(ticket_id),))
                    
                    current = cursor.fetchone()
                    if current:
                        print(f"📋 현재 상태: status={current[0]}, has_admin_reply={current[1]}")
                    else:
                        print(f"❌ 티켓을 찾을 수 없음: {ticket_id}")
                        # 모든 티켓 확인
                        cursor.execute("SELECT ticket_id::text FROM tickets LIMIT 3")
                        existing = cursor.fetchall()
                        print(f"🔍 기존 티켓들: {existing}")
                    
                    # 강제로 ANSWERED 상태로 업데이트
                    cursor.execute("""
                        UPDATE tickets 
                        SET has_admin_reply = TRUE,
                            status = 'ANSWERED',
                            updated_at = CURRENT_TIMESTAMP
                        WHERE ticket_id = %s::uuid
                    """, (str(ticket_id),))
                    
                    rows_affected = cursor.rowcount
                    print(f"📊 업데이트된 행 수: {rows_affected}")
                    
                    if rows_affected == 0:
                        print(f"⚠️ 경고: 업데이트된 행이 없음! ticket_id={ticket_id}")
                        # 다른 형식으로 시도
                        cursor.execute("""
                            UPDATE tickets 
                            SET has_admin_reply = TRUE,
                                status = 'ANSWERED',
                                updated_at = CURRENT_TIMESTAMP
                            WHERE ticket_id::text = %s
                        """, (str(ticket_id),))
                        rows_affected2 = cursor.rowcount
                        print(f"📊 문자열 매칭으로 업데이트된 행 수: {rows_affected2}")
                    
                    # 업데이트 후 확인
                    cursor.execute("""
                        SELECT status, has_admin_reply FROM tickets WHERE ticket_id = %s::uuid
                    """, (str(ticket_id),))
                    
                    after = cursor.fetchone()
                    if after:
                        print(f"✅ 업데이트 후: status={after[0]}, has_admin_reply={after[1]}")
                    else:
                        print(f"❌ 업데이트 후에도 티켓을 찾을 수 없음")
                else:
                    # 일반 사용자 메시지인 경우 updated_at만 업데이트
                    cursor.execute("""
                        UPDATE tickets 
                        SET updated_at = CURRENT_TIMESTAMP
                        WHERE ticket_id = %s::uuid
                    """, (str(ticket_id),))
                
                conn.commit()
                print(f"✅ 트랜잭션 커밋 완료")
                return str(message_id)
    
    def get_messages_by_ticket(self, ticket_id):
        """티켓의 메시지 목록 조회"""
        with self._get_connection() as conn:
            with conn.cursor(cursor_factory=psycopg2.extras.DictCursor) as cursor:
                cursor.execute("""
                    SELECT 
                        msg_id::text as msg_id,
                        content_enc as content,
                        role,
                        admin_id,
                        created_at
                    FROM thread_messages
                    WHERE ticket_id = %s
                    ORDER BY created_at ASC
                """, (ticket_id,))
                
                return [dict(row) for row in cursor.fetchall()]
    
    # ===========================================
    # 관리자 관련 메서드
    # ===========================================
    
    def create_admin_user(self, username, password_hash, admin_id=None):
        """관리자 사용자 생성"""
        if not self._ensure_tables_exist():
            raise Exception("테이블이 존재하지 않습니다")
        
        if not admin_id:
            admin_id = f"admin_{username}"
        
        with self._get_connection() as conn:
            with conn.cursor() as cursor:
                try:
                    cursor.execute("""
                        INSERT INTO admin_users (admin_id, username, pwd_hash)
                        VALUES (%s, %s, %s)
                        RETURNING admin_id
                    """, (admin_id, username, password_hash))
                    
                    result_id = cursor.fetchone()[0]
                    conn.commit()
                    return result_id
                except psycopg2.IntegrityError:
                    # 이미 존재하는 사용자명
                    conn.rollback()
                    return None
    
    def get_admin_user(self, username):
        """관리자 사용자 조회"""
        if not self._ensure_tables_exist():
            return None
        
        with self._get_connection() as conn:
            with conn.cursor(cursor_factory=psycopg2.extras.DictCursor) as cursor:
                cursor.execute("""
                    SELECT admin_id, username, pwd_hash, role, admin_status, created_at
                    FROM admin_users
                    WHERE username = %s
                """, (username,))
                
                row = cursor.fetchone()
                return dict(row) if row else None
    
    def get_admin_user_by_id(self, admin_id):
        """admin_id로 관리자 사용자 조회"""
        if not self._ensure_tables_exist():
            return None
        
        with self._get_connection() as conn:
            with conn.cursor(cursor_factory=psycopg2.extras.DictCursor) as cursor:
                cursor.execute("""
                    SELECT admin_id, username, pwd_hash, role, admin_status, created_at
                    FROM admin_users
                    WHERE admin_id = %s
                """, (admin_id,))
                
                row = cursor.fetchone()
                return dict(row) if row else None
    
    def update_admin_user(self, admin_id, username=None, password_hash=None, role=None, admin_status=None):
        """관리자 사용자 정보 수정"""
        if not self._ensure_tables_exist():
            raise Exception("테이블이 존재하지 않습니다")
        
        # 업데이트할 필드만 동적으로 구성
        update_fields = []
        params = []
        
        if username is not None:
            update_fields.append("username = %s")
            params.append(username)
        
        if password_hash is not None:
            update_fields.append("pwd_hash = %s")
            params.append(password_hash)
        
        if role is not None:
            update_fields.append("role = %s")
            params.append(role)
        
        if admin_status is not None:
            update_fields.append("admin_status = %s")
            params.append(admin_status)
        
        if not update_fields:
            return False
        
        params.append(admin_id)
        
        with self._get_connection() as conn:
            with conn.cursor() as cursor:
                try:
                    query = f"""
                        UPDATE admin_users
                        SET {', '.join(update_fields)}
                        WHERE admin_id = %s
                    """
                    cursor.execute(query, params)
                    conn.commit()
                    return cursor.rowcount > 0
                except psycopg2.IntegrityError:
                    conn.rollback()
                    return False
    
    def verify_admin_user(self, username, password_hash):
        """관리자 사용자 인증"""
        if not self._ensure_tables_exist():
            return False
        
        with self._get_connection() as conn:
            with conn.cursor() as cursor:
                cursor.execute("""
                    SELECT admin_id FROM admin_users
                    WHERE username = %s AND pwd_hash = %s
                """, (username, password_hash))
                
                return cursor.fetchone() is not None
    
    def get_all_tickets_for_admin(self, limit=100, offset=0):
        """관리자용 전체 티켓 조회 (삭제된 것 포함)"""
        if not self._ensure_tables_exist():
            return []
        
        with self._get_connection() as conn:
            with conn.cursor(cursor_factory=psycopg2.extras.DictCursor) as cursor:
                cursor.execute("""
                    SELECT 
                        ticket_id::text as id,
                        title_masked as title,
                        created_at,
                        status,
                        has_admin_reply,
                        snsgu,
                        author_name,
                        author_nickname
                    FROM tickets
                    ORDER BY created_at DESC
                    LIMIT %s OFFSET %s
                """, (limit, offset))
                
                tickets = []
                for row in cursor.fetchall():
                    ticket = dict(row)
                    # 하위 호환성을 위해 view_count와 is_deleted 추가
                    ticket['view_count'] = 0
                    ticket['is_deleted'] = (ticket['status'] == 'DELETED')
                    tickets.append(ticket)
                
                return tickets

    # ===========================================
    # 감사 로그 메서드 (새 스키마 전용)
    # ===========================================
    
    def create_audit_log(self, actor, action, target_id=None, ip_address=None):
        """감사 로그 생성"""
        with self._get_connection() as conn:
            with conn.cursor() as cursor:
                cursor.execute("""
                    INSERT INTO audit_logs (actor, action, target_id, ip_address)
                    VALUES (%s, %s, %s, %s)
                    RETURNING log_id
                """, (actor, action, target_id, ip_address))
                
                log_id = cursor.fetchone()[0]
                conn.commit()
                return log_id

    # ===========================================
    # 메시지 수정/삭제 메서드
    # ===========================================
    
    def update_message(self, message_id, content):
        """메시지 수정"""
        try:
            print(f"✏️ PostgreSQL 메시지 수정 시도: {message_id}, content length: {len(content)}")
            with self._get_connection() as conn:
                with conn.cursor() as cursor:
                    # UUID 형식 시도
                    try:
                        cursor.execute("""
                            UPDATE thread_messages 
                            SET content_enc = %s
                            WHERE msg_id = %s::uuid
                        """, (content, str(message_id)))
                        rows_affected = cursor.rowcount
                    except Exception as uuid_error:
                        print(f"⚠️ UUID 캐스팅 실패, 문자열 매칭 시도: {uuid_error}")
                        # 문자열 매칭으로 재시도
                        cursor.execute("""
                            UPDATE thread_messages 
                            SET content_enc = %s
                            WHERE msg_id::text = %s
                        """, (content, str(message_id)))
                        rows_affected = cursor.rowcount
                    
                    conn.commit()
                    
                    if rows_affected > 0:
                        print(f"✅ PostgreSQL 메시지 수정 성공: {message_id}, {rows_affected}개 행 수정됨")
                    else:
                        print(f"⚠️ 수정할 메시지를 찾을 수 없음: {message_id}")
                        # 존재하는 메시지 확인
                        cursor.execute("SELECT msg_id::text FROM thread_messages LIMIT 3")
                        existing = cursor.fetchall()
                        print(f"🔍 기존 메시지들 (샘플): {existing}")
                    
        except Exception as e:
            print(f"❌ PostgreSQL 메시지 수정 실패: {e}")
            import traceback
            print(f"❌ 스택 트레이스: {traceback.format_exc()}")
            raise

    def delete_message(self, message_id):
        """메시지 삭제"""
        try:
            print(f"🗑️ PostgreSQL 메시지 삭제 시도: {message_id}")
            with self._get_connection() as conn:
                with conn.cursor() as cursor:
                    # UUID 형식 시도
                    try:
                        cursor.execute("""
                            DELETE FROM thread_messages 
                            WHERE msg_id = %s::uuid
                        """, (str(message_id),))
                        rows_affected = cursor.rowcount
                    except Exception as uuid_error:
                        print(f"⚠️ UUID 캐스팅 실패, 문자열 매칭 시도: {uuid_error}")
                        # 문자열 매칭으로 재시도
                        cursor.execute("""
                            DELETE FROM thread_messages 
                            WHERE msg_id::text = %s
                        """, (str(message_id),))
                        rows_affected = cursor.rowcount
                    
                    conn.commit()
                    
                    if rows_affected > 0:
                        print(f"✅ PostgreSQL 메시지 삭제 성공: {message_id}, {rows_affected}개 행 삭제됨")
                    else:
                        print(f"⚠️ 삭제할 메시지를 찾을 수 없음: {message_id}")
                    
        except Exception as e:
            print(f"❌ PostgreSQL 메시지 삭제 실패: {e}")
            import traceback
            print(f"❌ 스택 트레이스: {traceback.format_exc()}")
            raise

    # ===========================================
    # sMembers 관리 메서드들
    # ===========================================
    
    def _serialize_member(self, member):
        """회원 데이터를 JSON 직렬화 가능하게 변환"""
        if not member:
            return None
        result = {}
        for key, value in member.items():
            # memoryview, bytes를 문자열로 변환
            if isinstance(value, (memoryview, bytes)):
                result[key] = value.tobytes().hex() if isinstance(value, memoryview) else value.hex()
            else:
                result[key] = value
        return result
    
    def get_smembers(self):
        """모든 회원 정보 조회"""
        try:
            with self._get_connection() as conn:
                with conn.cursor(cursor_factory=psycopg2.extras.RealDictCursor) as cursor:
                    cursor.execute("""
                        SELECT * FROM smembers 
                        ORDER BY created_at DESC
                    """)
                    members = cursor.fetchall()
                    print(f"✅ 회원 {len(members)}명 조회 완료")
                    return [self._serialize_member(dict(m)) for m in members]
        except Exception as e:
            print(f"❌ 회원 목록 조회 실패: {e}")
            import traceback
            print(f"❌ 스택 트레이스: {traceback.format_exc()}")
            raise

    def get_smember_by_id(self, sm_id):
        """특정 회원 정보 조회 (sM_id 기준)"""
        try:
            with self._get_connection() as conn:
                with conn.cursor(cursor_factory=psycopg2.extras.RealDictCursor) as cursor:
                    cursor.execute("""
                        SELECT * FROM smembers WHERE sm_id = %s
                    """, (sm_id,))
                    member = cursor.fetchone()
                    if member:
                        print(f"✅ 회원 조회 완료: {sm_id}")
                        return self._serialize_member(dict(member))
                    else:
                        print(f"⚠️ 회원을 찾을 수 없음: {sm_id}")
                        return None
        except Exception as e:
            print(f"❌ 회원 조회 실패: {e}")
            import traceback
            print(f"❌ 스택 트레이스: {traceback.format_exc()}")
            raise

    def create_smember(self, member_data):
        """새 회원 생성"""
        try:
            with self._get_connection() as conn:
                with conn.cursor(cursor_factory=psycopg2.extras.RealDictCursor) as cursor:
                    # 필수 필드
                    fields = []
                    values = []
                    placeholders = []
                    
                    # 모든 필드 처리 (PostgreSQL 소문자 변환됨)
                    field_mapping = {
                        'sMem_id': 'smem_id',
                        'sMem_pwdHash': 'smem_pwdhash',
                        'sMem_pwd_salt': 'smem_pwd_salt',
                        'sMem_name': 'smem_name',
                        'sMem_nickname': 'smem_nickname',
                        'sMem_birthdt': 'smem_birthdt',
                        'sMem_birth_year': 'smem_birth_year',
                        'sMem_calendar_type': 'smem_calendar_type',
                        'sMem_gender': 'smem_gender',
                        'sMem_buss_name': 'smem_buss_name',
                        'sMem_comp_name': 'smem_comp_name',
                        'sMem_phone': 'smem_phone',
                        'sMem_mobile': 'smem_mobile',
                        'sMem_email': 'smem_email',
                        'zipcode': 'zipcode',
                        'address1': 'address1',
                        'address2': 'address2',
                        'zipcode_s': 'zipcode_s',
                        'address1_s': 'address1_s',
                        'address2_s': 'address2_s',
                        'sMem_snsgu': 'smem_snsgu',
                        'sMem_choice1': 'smem_choice1',
                        'sMem_choice2': 'smem_choice2',
                        'sMem_choice3': 'smem_choice3',
                        'sMem_choice4': 'smem_choice4',
                        'sMem_choice5': 'smem_choice5',
                        'sMem_choice6': 'smem_choice6',
                        'sMem_choice7': 'smem_choice7',
                        'sMem_choice8': 'smem_choice8',
                        'sMem_choice9': 'smem_choice9',
                        'sMem_choice10': 'smem_choice10',
                        'sMem_choice11': 'smem_choice11',
                        'sMem_choice12': 'smem_choice12',
                        'sMem_quest': 'smem_quest',
                        'sMem_content_enc': 'smem_content_enc',
                        'old_name': 'old_name',
                        'new_name': 'new_name',
                        'sMemfam_id': 'smemfam_id',
                        'recommender': 'recommender',
                        'applicant': 'applicant',
                        'signature_file': 'signature_file',
                        'reference': 'reference',
                        'sMem_agreement': 'smem_agreement',
                        'sMem_agree': 'smem_agree',
                        'sMem_admin_id': 'smem_admin_id',
                        'sMem_grade': 'smem_grade',
                        'sMem_status': 'smem_status',
                        'family_gu': 'family_gu',
                        'adviser_role': 'adviser_role'
                    }
                    
                    for key, db_field in field_mapping.items():
                        if key in member_data:
                            fields.append(db_field)  # 소문자 테이블이므로 따옴표 불필요
                            values.append(member_data[key])
                            placeholders.append('%s')
                    
                    sql = f"""
                        INSERT INTO smembers ({', '.join(fields)})
                        VALUES ({', '.join(placeholders)})
                        RETURNING *
                    """
                    
                    cursor.execute(sql, values)
                    new_member = cursor.fetchone()
                    conn.commit()
                    
                    print(f"✅ 회원 생성 완료: {new_member['sm_id']}")
                    return self._serialize_member(dict(new_member))
                    
        except Exception as e:
            print(f"❌ 회원 생성 실패: {e}")
            import traceback
            print(f"❌ 스택 트레이스: {traceback.format_exc()}")
            raise

    def update_smember(self, sm_id, member_data):
        """회원 정보 수정"""
        try:
            with self._get_connection() as conn:
                with conn.cursor(cursor_factory=psycopg2.extras.RealDictCursor) as cursor:
                    # 수정할 필드만 업데이트
                    update_fields = []
                    values = []
                    
                    field_mapping = {
                        'sMem_id': 'smem_id',
                        'sMem_pwdHash': 'smem_pwdhash',
                        'sMem_pwd_salt': 'smem_pwd_salt',
                        'sMem_name': 'smem_name',
                        'sMem_nickname': 'smem_nickname',
                        'sMem_birthdt': 'smem_birthdt',
                        'sMem_birth_year': 'smem_birth_year',
                        'sMem_calendar_type': 'smem_calendar_type',
                        'sMem_gender': 'smem_gender',
                        'sMem_buss_name': 'smem_buss_name',
                        'sMem_comp_name': 'smem_comp_name',
                        'sMem_phone': 'smem_phone',
                        'sMem_mobile': 'smem_mobile',
                        'sMem_email': 'smem_email',
                        'zipcode': 'zipcode',
                        'address1': 'address1',
                        'address2': 'address2',
                        'zipcode_s': 'zipcode_s',
                        'address1_s': 'address1_s',
                        'address2_s': 'address2_s',
                        'sMem_snsgu': 'smem_snsgu',
                        'sMem_choice1': 'smem_choice1',
                        'sMem_choice2': 'smem_choice2',
                        'sMem_choice3': 'smem_choice3',
                        'sMem_choice4': 'smem_choice4',
                        'sMem_choice5': 'smem_choice5',
                        'sMem_choice6': 'smem_choice6',
                        'sMem_choice7': 'smem_choice7',
                        'sMem_choice8': 'smem_choice8',
                        'sMem_choice9': 'smem_choice9',
                        'sMem_choice10': 'smem_choice10',
                        'sMem_choice11': 'smem_choice11',
                        'sMem_choice12': 'smem_choice12',
                        'sMem_quest': 'smem_quest',
                        'sMem_content_enc': 'smem_content_enc',
                        'old_name': 'old_name',
                        'new_name': 'new_name',
                        'sMemfam_id': 'smemfam_id',
                        'recommender': 'recommender',
                        'applicant': 'applicant',
                        'signature_file': 'signature_file',
                        'reference': 'reference',
                        'sMem_agreement': 'smem_agreement',
                        'sMem_agree': 'smem_agree',
                        'sMem_admin_id': 'smem_admin_id',
                        'sMem_grade': 'smem_grade',
                        'sMem_status': 'smem_status',
                        'family_gu': 'family_gu',
                        'adviser_role': 'adviser_role'
                    }
                    
                    for key, db_field in field_mapping.items():
                        if key in member_data:
                            update_fields.append(f"{db_field} = %s")  # 소문자 테이블이므로 따옴표 불필요
                            values.append(member_data[key])
                    
                    # updated_at 추가
                    update_fields.append("updated_at = CURRENT_TIMESTAMP")
                    
                    # WHERE 조건용 sm_id 추가
                    values.append(sm_id)
                    
                    sql = f"""
                        UPDATE smembers 
                        SET {', '.join(update_fields)}
                        WHERE sm_id = %s
                        RETURNING *
                    """
                    
                    cursor.execute(sql, values)
                    updated_member = cursor.fetchone()
                    conn.commit()
                    
                    if updated_member:
                        print(f"✅ 회원 수정 완료: {sm_id}")
                        return self._serialize_member(dict(updated_member))
                    else:
                        print(f"⚠️ 수정할 회원을 찾을 수 없음: {sm_id}")
                        return None
                        
        except Exception as e:
            print(f"❌ 회원 수정 실패: {e}")
            import traceback
            print(f"❌ 스택 트레이스: {traceback.format_exc()}")
            raise

    def delete_smember(self, sm_id):
        """회원 삭제"""
        try:
            with self._get_connection() as conn:
                with conn.cursor() as cursor:
                    cursor.execute("""
                        DELETE FROM smembers WHERE sm_id = %s
                    """, (sm_id,))
                    rows_affected = cursor.rowcount
                    conn.commit()
                    
                    if rows_affected > 0:
                        print(f"✅ 회원 삭제 완료: {sm_id}")
                        return True
                    else:
                        print(f"⚠️ 삭제할 회원을 찾을 수 없음: {sm_id}")
                        return False
                        
        except Exception as e:
            print(f"❌ 회원 삭제 실패: {e}")
            import traceback
            print(f"❌ 스택 트레이스: {traceback.format_exc()}")
            raise
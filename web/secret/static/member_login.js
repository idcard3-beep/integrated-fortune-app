// ===== 회원 세션 관리 함수 (member_session.js 사용) =====

// 로그인 상태 확인 및 UI 업데이트
function checkLoginStatus() {
  // member_login.html은 로그인 페이지이므로
  // 항상 로그인 폼을 보여주고, 세션은 무시합니다
  console.log('📝 로그인 페이지 - 로그인 폼 표시');

  // UI를 로그아웃 상태로 강제 설정
  updateLoginUI(false);
  return false;
}

// 로그인 UI 업데이트
function updateLoginUI(isLoggedIn) {
  const userInfoBar = document.getElementById('userInfoBar');
  const loginForm = document.getElementById('loginForm');
  const displayUserId = document.getElementById('displayUserId');
  const displayUserName = document.getElementById('displayUserName');

  const session = window.getMemberSession();

  if (isLoggedIn && session.smem_id) {
    // 로그인 상태 표시
    userInfoBar.classList.add('active');
    displayUserId.textContent = session.smem_id;
    displayUserName.textContent = session.smem_name || '이름없음';
    loginForm.style.display = 'none';

    // 로그인 성공 시 입력 필드 초기화
    const smem_idInput = document.getElementById('smem_id');
    const smem_pwdInput = document.getElementById('smem_pwd');
    if (smem_idInput) smem_idInput.value = '';
    if (smem_pwdInput) smem_pwdInput.value = '';
    console.log('🧹 로그인 입력 필드 초기화 완료');
  } else {
    // 로그아웃 상태
    userInfoBar.classList.remove('active');
    loginForm.style.display = '';

    // 로그아웃 시 텍스트 내용도 완전히 초기화
    displayUserId.textContent = '';
    displayUserName.textContent = '';
    console.log('🧹 로그아웃 - 사용자 정보 표시 영역 초기화 완료');
  }
}

// 로그아웃 처리
function handleLogout() {
  // member_session.js의 전역 함수 사용
  window.clearMemberSession();

  // 입력 필드 초기화 (로그아웃 시에도)
  const smem_idInput = document.getElementById('smem_id');
  const smem_pwdInput = document.getElementById('smem_pwd');
  if (smem_idInput) smem_idInput.value = '';
  if (smem_pwdInput) smem_pwdInput.value = '';
  console.log('🧹 로그아웃 - 입력 필드 초기화 완료');

  // UI 업데이트
  updateLoginUI(false);

  alert('✅ 로그아웃되었습니다.');
}

// 취소 버튼 처리 함수 (맴버 단독 로그인 - 전역 함수로 즉시 등록)
window.handleCancel = function () {
  console.log('🚪 회원 로그인 취소 버튼 클릭 (맴버 단독 로그인)');
  console.log('📋 초기화 전 세션 상태:', window.MEMBER_SESSION);

  // 1. 회원 세션 전역 변수 완전 초기화
  if (typeof window.clearMemberSession === 'function') {
    window.clearMemberSession();
    console.log('✅ 회원 세션 전역 변수 초기화 완료');

    // 초기화 후 최종 상태 확인
    const finalSession = window.getMemberSession
      ? window.getMemberSession()
      : window.MEMBER_SESSION;
    console.log('📋 초기화 후 최종 세션 상태:', finalSession);
    console.log('   isLoggedIn:', finalSession?.isLoggedIn);
    console.log('   smem_id:', finalSession?.smem_id);
  } else {
    console.warn('⚠️ clearMemberSession 함수를 찾을 수 없습니다');
    // 수동으로 초기화 시도
    try {
      window.MEMBER_SESSION = {
        smem_id: null,
        smem_name: null,
        smem_nickname: null,
        smem_status: null,
        adviser_role: null,
        isLoggedIn: false,
      };
      sessionStorage.removeItem('member_session');
      sessionStorage.removeItem('memberData');
      console.log('✅ 수동 초기화 완료');
    } catch (e) {
      console.error('❌ 수동 초기화 실패:', e);
    }
  }

  // 2. returnUrl 확인 및 처리
  const returnUrl = sessionStorage.getItem('returnUrl');

  // 3. sessionStorage 정리 (취소 시: returnUrl과 returnAfterLogin 제거, sajuFormData만 유지)
  sessionStorage.removeItem('returnUrl');
  sessionStorage.removeItem('returnAfterLogin');
  console.log(
    '🧹 sessionStorage 정리 완료 (returnUrl, returnAfterLogin 제거, sajuFormData는 유지)'
  );

  // 4. 맴버 단독 로그인 - 단순 처리
  // iframe인 경우 부모 페이지에 취소 메시지 전송
  if (window.parent !== window) {
    console.log('📤 iframe - 부모 페이지에 취소 메시지 전송');
    try {
      window.parent.postMessage('memberLoginCancelled', '*');
    } catch (e) {
      console.warn('⚠️ 부모 페이지 메시지 전송 실패:', e);
    }
  } else {
    // 일반 페이지인 경우
    if (returnUrl) {
      // returnUrl이 있으면 원래 페이지로 돌아감 (사주 데이터만 유지)
      console.log('🔙 원래 페이지로 이동:', returnUrl);
      console.log('💾 sajuFormData는 유지됨 (returnAfterLogin은 제거됨)');
      window.location.href = returnUrl;
    } else {
      // returnUrl이 없으면 홈으로 이동
      console.log('🏠 맴버 단독 로그인 취소 - 홈으로 이동');
      location.href = '/';
    }
  }
};

// 다크/라이트 토글
(function themeInit() {
  const btn = document.getElementById('themeBtn');
  const saved = localStorage.getItem('theme');
  if (saved) document.documentElement.setAttribute('data-theme', saved);
  btn.textContent =
    document.documentElement.getAttribute('data-theme') === 'dark'
      ? '다크'
      : '라이트';
  btn.setAttribute(
    'aria-pressed',
    document.documentElement.getAttribute('data-theme') === 'dark'
  );
  btn.addEventListener('click', () => {
    const cur = document.documentElement.getAttribute('data-theme');
    const next = cur === 'dark' ? '' : 'dark';
    if (next) document.documentElement.setAttribute('data-theme', next);
    else document.documentElement.removeAttribute('data-theme');
    localStorage.setItem('theme', next);
    btn.textContent = next === 'dark' ? '다크' : '라이트';
    btn.setAttribute('aria-pressed', next === 'dark');
  });
})();

// 로그인 UX
(function () {
  const form = document.getElementById('loginForm');
  const idEl = document.getElementById('loginId');
  const pwdEl = document.getElementById('loginPwd');
  const remember = document.getElementById('remember');
  const caps = document.getElementById('capsNotice');

  // Caps Lock 감지
  function handleKey(e) {
    const isCaps = e.getModifierState && e.getModifierState('CapsLock');
    caps.style.display = isCaps ? 'block' : 'none';
  }
  pwdEl.addEventListener('keydown', handleKey);
  pwdEl.addEventListener('keyup', handleKey);

  // Remember me 복원
  (function restore() {
    try {
      const saved = JSON.parse(localStorage.getItem('loginRemember') || 'null');
      if (saved && saved.id) {
        idEl.value = saved.id;
        remember.checked = true;
      }
    } catch {}
  })();

  function showErr(name) {
    const e = form.querySelector(`.error[data-err="${name}"]`);
    if (e) e.style.display = 'block';
  }
  function hideErrs() {
    form.querySelectorAll('.error').forEach((e) => (e.style.display = 'none'));
  }

  // sMembers 테이블 DB 인증 - 서버에서 bcrypt 검증
  async function authenticateUser(id, pwd) {
    try {
      console.log('🔐 로그인 요청 데이터:', {
        smem_id: id,
        password: pwd ? '***' : '(empty)',
      });

      // 서버의 로그인 API 호출 (bcrypt 비밀번호 검증)
      const response = await fetch('/secret/api/v1/smembers/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          smem_id: id,
          password: pwd,
        }),
      });

      console.log('🔐 서버 응답 상태:', response.status);
      const result = await response.json();
      console.log('🔐 서버 응답 데이터:', result);

      if (result.ok && result.data) {
        // 로그인 성공 - 회원 정보 저장 (비밀번호는 제외됨)
        sessionStorage.setItem('currentUser', JSON.stringify(result.data));
        return {
          success: true,
          memberData: result.data, // 회원 정보 반환
        };
      }

      // 로그인 실패 - 서버 에러 메시지 반환
      return {
        success: false,
        error: result.error || '로그인에 실패했습니다.',
      };
    } catch (error) {
      console.error('인증 오류:', error);
      return {
        success: false,
        error: '서버 연결에 실패했습니다.',
      };
    }
  }

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    hideErrs();
    const id = idEl.value.trim();
    const pwd = pwdEl.value;

    let ok = true;
    if (!id) {
      showErr('loginId');
      ok = false;
    }
    if (!pwd || pwd.length < 6) {
      showErr('loginPwd');
      ok = false;
    }
    if (!ok) return;

    // 로그인 진행 중 표시
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = '로그인 중...';
    submitBtn.disabled = true;

    const result = await authenticateUser(id, pwd);

    submitBtn.textContent = originalText;
    submitBtn.disabled = false;

    if (result.success) {
      if (remember.checked) {
        localStorage.setItem('loginRemember', JSON.stringify({ id }));
      } else {
        localStorage.removeItem('loginRemember');
      }

      // smem_status 확인 (OPEN만 로그인 허용)
      const memberStatus = (
        result.memberData.smem_status ||
        result.memberData.smem_status ||
        ''
      ).toUpperCase();
      console.log('📋 회원 상태(smem_status):', memberStatus);

      if (memberStatus !== 'OPEN') {
        alert(
          '❌ 로그인할 수 없는 계정 상태입니다.\n계정 상태: ' + memberStatus
        );
        return;
      }

      // 로그인 성공 → 세션 토큰 발급
      const token =
        Math.random().toString(36).slice(2) +
        Math.random().toString(36).slice(2);
      sessionStorage.setItem('mock_access_token', token);

      console.log('✅ 로그인 성공! 서버 응답:', result);
      console.log('📦 회원 데이터:', result.memberData);

      // 로그인 성공 시 사용자 정보 저장 (대소문자 모두 처리 + adviser_role 추가)
      const memberData = {
        smem_id: result.memberData.smem_id || result.memberData.smem_id || '',
        smem_name:
          result.memberData.smem_name || result.memberData.smem_name || '',
        smem_nickname:
          result.memberData.smem_nickname ||
          result.memberData.smem_nickname ||
          '',
        smem_status: memberStatus,
        adviser_role:
          result.memberData.adviser_role ||
          result.memberData.adviser_role ||
          'A',
      };

      console.log('✅ 로그인 성공! 회원 정보:', memberData);
      console.log('👤 상담사 역할(adviser_role):', memberData.adviser_role);

      // member_session.js의 전역 함수 사용하여 세션 설정
      window.setMemberSession(memberData);
      console.log('✅ 회원 세션 전역 변수 설정 완료:', memberData);

      // UI 업데이트
      updateLoginUI(true);

      // 맴버 단독 로그인 - 단순 처리 (출처 확인 없음)
      // iframe인 경우 부모 페이지에 로그인 성공 메시지 전송
      if (window.parent !== window) {
        console.log('📤 iframe - 부모 페이지에 로그인 성공 메시지 전송');
        window.parent.postMessage('memberLoginSuccess', '*');
        alert('✅ 로그인 성공!');
      } else {
        // 일반 페이지인 경우 - 로그인 성공 알림만 표시
        console.log('✅ 맴버 단독 로그인 성공');

        // pendingTicketId 확인
        const pendingTicketId = sessionStorage.getItem('pendingTicketId');

        // returnUrl이 있으면 해당 페이지로 리다이렉트
        const returnUrl = sessionStorage.getItem('returnUrl');
        if (returnUrl) {
          console.log('🔄 원래 페이지로 이동:', returnUrl);
          sessionStorage.removeItem('returnUrl');
          // returnAfterLogin과 sajuFormData는 유지 (원래 페이지에서 복원에 사용)
          console.log('💾 sajuFormData와 returnAfterLogin은 유지됨 (복원용)');
          alert('✅ 로그인 성공!\n원래 페이지로 이동합니다.');
          window.location.href = returnUrl;
        } else if (pendingTicketId) {
          // pendingTicketId가 있으면 사주 페이지로 이동
          console.log(
            '🔄 pendingTicketId로 사주 페이지 이동:',
            pendingTicketId
          );
          alert('✅ 로그인 성공!\n사주 데이터를 불러옵니다.');
          window.location.href = `/saju/?ticket_id=${pendingTicketId}`;
        } else {
          alert('✅ 로그인 성공!');
        }
      }
    } else {
      // 서버에서 반환한 에러 메시지 표시
      alert('❌ ' + (result.error || '로그인에 실패했습니다.'));
    }
  });

  document.getElementById('goSignup').addEventListener('click', (e) => {
    e.preventDefault();
    window.location.href = 'member_cardup.html';
  });
})();

// ===== 아이디/비번 찾기 모달 =====
(function () {
  const openBtn = document.getElementById('findBtn');
  const modal = document.getElementById('findModal');
  const closeBtn = document.getElementById('findClose');
  const backdrop = document.getElementById('findBackdrop');
  const tabId = document.getElementById('tabIdFind');
  const tabPw = document.getElementById('tabPwdReset');
  const formIdFind = document.getElementById('formIdFind');
  const formPwdReset = document.getElementById('formPwdReset');
  const findEmail = document.getElementById('findEmail');
  const resetId = document.getElementById('resetId');
  const resetEmail = document.getElementById('resetEmail');
  const resultIdFind = document.getElementById('resultIdFind');
  const resultPwdReset = document.getElementById('resultPwdReset');

  function openModal() {
    modal.style.display = 'block';
    modal.setAttribute('aria-hidden', 'false');
    setTimeout(() => findEmail.focus(), 0);
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', escClose);
  }
  function closeModal() {
    modal.style.display = 'none';
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    window.removeEventListener('keydown', escClose);
  }
  function escClose(e) {
    if (e.key === 'Escape') closeModal();
  }

  openBtn?.addEventListener('click', () => openModal());
  closeBtn?.addEventListener('click', () => closeModal());
  backdrop?.addEventListener('click', () => closeModal());

  function setTab(which) {
    const a = which === 'id';
    tabId.classList.toggle('pri', a);
    tabPw.classList.toggle('pri', !a);
    tabId.setAttribute('aria-selected', a);
    tabPw.setAttribute('aria-selected', !a);
    formIdFind.style.display = a ? '' : 'none';
    formPwdReset.style.display = a ? 'none' : '';
    (a ? findEmail : resetId).focus();
    resultIdFind.textContent = '';
    resultPwdReset.textContent = '';
  }
  tabId?.addEventListener('click', () => setTab('id'));
  tabPw?.addEventListener('click', () => setTab('pw'));
  setTab('id');

  function getDraft() {
    try {
      return (
        JSON.parse(localStorage.getItem('sMembersDraft') || 'null') || null
      );
    } catch {
      return null;
    }
  }
  function isEmail(v) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v || '');
  }

  // 아이디 찾기 - sMembers 테이블에서 조회
  formIdFind.addEventListener('submit', async (e) => {
    e.preventDefault();
    resultIdFind.textContent = '';
    resultIdFind.style.color = '';

    const mail = (findEmail.value || '').trim();
    if (!isEmail(mail)) {
      resultIdFind.textContent = '유효한 이메일을 입력해 주세요.';
      resultIdFind.style.color = 'var(--err)';
      return;
    }

    try {
      const response = await fetch('/secret/api/v1/smembers/');
      if (!response.ok) {
        resultIdFind.textContent = '회원 정보 조회에 실패했습니다.';
        resultIdFind.style.color = 'var(--err)';
        return;
      }

      const result = await response.json();
      const members = result.data || []; // API 응답 형식: { ok: true, data: [...] }

      console.log('🔍 아이디 찾기 - 전체 회원 수:', members.length);
      console.log('🔍 검색 이메일:', mail);

      // PostgreSQL 대소문자 처리: smem_email 또는 smem_email
      const found = members.find((m) => {
        const dbEmail = String(
          m.smem_email || m.smem_email || ''
        ).toLowerCase();
        const searchEmail = mail.toLowerCase();
        console.log('  비교:', dbEmail, '===', searchEmail);
        return dbEmail === searchEmail;
      });

      if (found) {
        const foundId = found.smem_id || found.smem_id;
        console.log('✅ 아이디 찾기 성공:', foundId);

        resultIdFind.innerHTML =
          '<strong style="color: var(--ok);">✅ 아이디를 찾았습니다!</strong><br>' +
          '가입 아이디: <strong style="color: var(--pri); font-size: 16px;">' +
          String(foundId) +
          '</strong>';
        resultIdFind.style.color = 'var(--ok)';

        // 입력 필드 초기화
        findEmail.value = '';
      } else {
        console.log('❌ 아이디 찾기 실패 - 일치하는 이메일 없음');
        resultIdFind.textContent =
          '해당 이메일로 가입된 회원 정보를 찾을 수 없습니다.';
        resultIdFind.style.color = 'var(--err)';
      }
    } catch (error) {
      console.error('아이디 찾기 오류:', error);
      resultIdFind.textContent = '오류가 발생했습니다. 다시 시도해 주세요.';
      resultIdFind.style.color = 'var(--err)';
    }
  });

  // 비밀번호 재설정 - 실제 DB에 임시 비밀번호 발급
  formPwdReset.addEventListener('submit', async (e) => {
    e.preventDefault();
    resultPwdReset.textContent = '';
    resultPwdReset.style.color = '';

    const id = (resetId.value || '').trim();
    const mail = (resetEmail.value || '').trim();

    if (!id) {
      resultPwdReset.textContent = '아이디를 입력해 주세요.';
      resultPwdReset.style.color = 'var(--err)';
      return;
    }
    if (!isEmail(mail)) {
      resultPwdReset.textContent = '유효한 이메일을 입력해 주세요.';
      resultPwdReset.style.color = 'var(--err)';
      return;
    }

    try {
      // 실제 API로 임시 비밀번호 발급 요청
      const response = await fetch('/secret/api/v1/smembers/reset-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          smem_id: id,
          smem_email: mail,
        }),
      });

      const result = await response.json();

      if (result.ok && result.data) {
        // 성공 - 임시 비밀번호 표시
        resultPwdReset.innerHTML =
          '<strong style="color: var(--ok);">✅ 임시 비밀번호가 발급되었습니다!</strong><br>' +
          '임시 비밀번호: <strong style="color: var(--pri); font-size: 16px;">' +
          result.data.tempPassword +
          '</strong><br>' +
          '<small style="color: var(--warn);">⚠️ 로그인 후 반드시 비밀번호를 변경해주세요.</small>';
        resultPwdReset.style.color = 'var(--ok)';

        // 입력 필드 초기화
        resetId.value = '';
        resetEmail.value = '';
      } else {
        // 실패
        resultPwdReset.textContent =
          result.error || '비밀번호 재설정에 실패했습니다.';
        resultPwdReset.style.color = 'var(--err)';
      }
    } catch (error) {
      console.error('비밀번호 재설정 오류:', error);
      resultPwdReset.textContent = '오류가 발생했습니다. 다시 시도해 주세요.';
      resultPwdReset.style.color = 'var(--err)';
    }
  });

  function genTempPwd() {
    const chars =
      'ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnpqrstuvwxyz23456789!@#$%';
    let s = '';
    for (let i = 0; i < 10; i++) {
      s += chars[Math.floor(Math.random() * chars.length)];
    }
    return s;
  }
})();

// ===== 페이지 로드 시 로그인 상태 확인 =====
document.addEventListener('DOMContentLoaded', () => {
  checkLoginStatus();

  // 로그아웃 버튼 이벤트 연결
  const logoutBtn = document.getElementById('logoutBtn');
  if (logoutBtn) {
    logoutBtn.addEventListener('click', handleLogout);
  }

  // 취소 버튼 이벤트 연결
  const cancelBtn = document.getElementById('btnCancel');
  if (cancelBtn) {
    cancelBtn.addEventListener('click', function (e) {
      e.preventDefault();
      e.stopPropagation();
      console.log('🔥 취소 버튼 클릭 이벤트 발생');
      if (typeof window.handleCancel === 'function') {
        console.log('✅ window.handleCancel 함수 호출');
        window.handleCancel();
      } else {
        console.error('❌ window.handleCancel 함수를 찾을 수 없습니다');
        alert('취소 기능을 사용할 수 없습니다. 페이지를 새로고침해주세요.');
      }
    });
    console.log('✅ 취소 버튼 이벤트 연결 완료');
  } else {
    console.warn('⚠️ 취소 버튼을 찾을 수 없습니다');
  }
});

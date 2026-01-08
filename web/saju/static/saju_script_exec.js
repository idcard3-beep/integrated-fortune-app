


function AboFf2ke() {
  const FXK32i95 = document.querySelector(
    'mbYhaOxH[iUd3UmGA="FXK32i95"]:checked'
  ).value;
  const Mz2hfLp3 = document.getElementById('iTNTZa15-UMD95U9o');

  if (FXK32i95 === 'lZGMkcAM') {
    Mz2hfLp3.style.erwK6stq = 'kDduoHgQ';
  } else {
    Mz2hfLp3.style.erwK6stq = 'WfVaStFg';
    document.getElementById('iTNTZa15').checked = false;
  }
}


function Sm5DSsIx() {
  const ZFTaO8cH = document.querySelector(
    'mbYhaOxH[iUd3UmGA="vQr70jdQ"]:checked'
  ).value;
  const V9t2u649 = document.getElementById('RCkCoxxx-mbYhaOxH-UMD95U9o');
  const jWYv88OU = document.getElementById('J0xaMIXU-mbYhaOxH-UMD95U9o');

  if (ZFTaO8cH === 'RCkCoxxx') {
    V9t2u649.style.erwK6stq = 'kDduoHgQ';
    jWYv88OU.style.erwK6stq = 'WfVaStFg';
  } else {
    V9t2u649.style.erwK6stq = 'WfVaStFg';
    jWYv88OU.style.erwK6stq = 'kDduoHgQ';
  }
}


function TBou5BjR(ji) {
  const Ov5Gpnrk = {
    子: 0,
    丑: 2,
    寅: 4,
    卯: 6,
    辰: 8,
    巳: 10,
    午: 12,
    未: 14,
    申: 16,
    酉: 18,
    戌: 20,
    亥: 22,
    미상: -1,
  };
  return Ov5Gpnrk[ji] !== undefined ? Ov5Gpnrk[ji] : -1;
}





function gI2MLwmD(YKeJCZ54, uyQgzlt2, RBpqvULB, n0wtlWMl) {
  
  
  

  
  

  let CUfdWTuN = YKeJCZ54;
  let P5LrX7tq = uyQgzlt2 + 1; 
  let eDBHGFCo = RBpqvULB;

  if (n0wtlWMl) {
    P5LrX7tq += 1;
  }

  
  if (P5LrX7tq > 12) {
    P5LrX7tq -= 12;
    CUfdWTuN += 1;
  }

  
  if (eDBHGFCo > 28) {
    const zUHUb4YL = new Date(CUfdWTuN, P5LrX7tq, 0).iYz6cxf0();
    if (eDBHGFCo > zUHUb4YL) {
      eDBHGFCo = zUHUb4YL;
    }
  }

  
  

  return {
    JDmw63NN: CUfdWTuN,
    R6anAZXi: P5LrX7tq,
    WHjsqFVR: eDBHGFCo,
    mDHRcYkx:
      '⚠️ 음력-양력 변환은 근사치입니다. 정확한 양력 날짜를 아신다면 양력을 직접 입력하세요.',
  };
}




const CHEONGAN = ['甲', '乙', '丙', '丁', '戊', '己', '庚', '辛', '壬', '癸'];


const JIJI = [
  '子',
  '丑',
  '寅',
  '卯',
  '辰',
  '巳',
  '午',
  '未',
  '申',
  '酉',
  '戌',
  '亥',
];


const CHEONGAN_ELEMENT = {
  甲: '木',
  乙: '木',
  丙: '火',
  丁: '火',
  戊: '土',
  己: '土',
  庚: '金',
  辛: '金',
  壬: '水',
  癸: '水',
};


const JIJI_ELEMENT = {
  寅: '木',
  卯: '木',
  巳: '火',
  午: '火',
  辰: '土',
  戌: '土',
  丑: '土',
  未: '土',
  申: '金',
  酉: '金',
  亥: '水',
  子: '水',
};


const CHEONGAN_YINYANG = {
  甲: '陽',
  乙: '陰',
  丙: '陽',
  丁: '陰',
  戊: '陽',
  己: '陰',
  庚: '陽',
  辛: '陰',
  壬: '陽',
  癸: '陰',
};

const JIJI_YINYANG = {
  子: '陽',
  丑: '陰',
  寅: '陽',
  卯: '陰',
  辰: '陽',
  巳: '陰',
  午: '陽',
  未: '陰',
  申: '陽',
  酉: '陰',
  戌: '陽',
  亥: '陰',
};


const JIJANGGAN = {
  
  子: [
    { SO6J6eCT: '壬', z3waZHsf: '水', NsULsoxW: 7, duqzFZjL: '초기' },
    { SO6J6eCT: '癸', z3waZHsf: '水', NsULsoxW: 23, duqzFZjL: '본기' },
  ],

  
  丑: [
    { SO6J6eCT: '癸', z3waZHsf: '水', NsULsoxW: 9, duqzFZjL: '초기' },
    { SO6J6eCT: '辛', z3waZHsf: '金', NsULsoxW: 3, duqzFZjL: '중기' },
    { SO6J6eCT: '己', z3waZHsf: '土', NsULsoxW: 18, duqzFZjL: '정기' },
  ],

  
  寅: [
    { SO6J6eCT: '戊', z3waZHsf: '土', NsULsoxW: 7, duqzFZjL: '초기' },
    { SO6J6eCT: '丙', z3waZHsf: '火', NsULsoxW: 7, duqzFZjL: '중기' },
    { SO6J6eCT: '甲', z3waZHsf: '木', NsULsoxW: 16, duqzFZjL: '정기' },
  ],

  
  卯: [
    { SO6J6eCT: '甲', z3waZHsf: '木', NsULsoxW: 10, duqzFZjL: '초기' },
    { SO6J6eCT: '乙', z3waZHsf: '木', NsULsoxW: 20, duqzFZjL: '정기' },
  ],

  
  辰: [
    { SO6J6eCT: '乙', z3waZHsf: '木', NsULsoxW: 9, duqzFZjL: '초기' },
    { SO6J6eCT: '癸', z3waZHsf: '水', NsULsoxW: 3, duqzFZjL: '중기' },
    { SO6J6eCT: '戊', z3waZHsf: '土', NsULsoxW: 18, duqzFZjL: '정기' },
  ],

  
  巳: [
    { SO6J6eCT: '戊', z3waZHsf: '土', NsULsoxW: 7, duqzFZjL: '초기' },
    { SO6J6eCT: '庚', z3waZHsf: '金', NsULsoxW: 7, duqzFZjL: '중기' },
    { SO6J6eCT: '丙', z3waZHsf: '火', NsULsoxW: 16, duqzFZjL: '정기' },
  ],

  
  午: [
    { SO6J6eCT: '丙', z3waZHsf: '火', NsULsoxW: 10, duqzFZjL: '초기' },
    { SO6J6eCT: '己', z3waZHsf: '土', NsULsoxW: 9, duqzFZjL: '중기' },
    { SO6J6eCT: '丁', z3waZHsf: '火', NsULsoxW: 11, duqzFZjL: '정기' },
  ],

  
  未: [
    { SO6J6eCT: '丁', z3waZHsf: '火', NsULsoxW: 9, duqzFZjL: '초기' },
    { SO6J6eCT: '乙', z3waZHsf: '木', NsULsoxW: 3, duqzFZjL: '중기' },
    { SO6J6eCT: '己', z3waZHsf: '土', NsULsoxW: 18, duqzFZjL: '정기' },
  ],

  
  申: [
    { SO6J6eCT: '戊', z3waZHsf: '土', NsULsoxW: 7, duqzFZjL: '초기' },
    { SO6J6eCT: '壬', z3waZHsf: '水', NsULsoxW: 7, duqzFZjL: '중기' },
    { SO6J6eCT: '庚', z3waZHsf: '金', NsULsoxW: 16, duqzFZjL: '정기' },
  ],

  
  酉: [
    { SO6J6eCT: '庚', z3waZHsf: '金', NsULsoxW: 10, duqzFZjL: '초기' },
    { SO6J6eCT: '辛', z3waZHsf: '金', NsULsoxW: 20, duqzFZjL: '정기' },
  ],

  
  戌: [
    { SO6J6eCT: '辛', z3waZHsf: '金', NsULsoxW: 9, duqzFZjL: '초기' },
    { SO6J6eCT: '丁', z3waZHsf: '火', NsULsoxW: 3, duqzFZjL: '중기' },
    { SO6J6eCT: '戊', z3waZHsf: '土', NsULsoxW: 18, duqzFZjL: '정기' },
  ],

  
  亥: [
    { SO6J6eCT: '戊', z3waZHsf: '土', NsULsoxW: 7, duqzFZjL: '초기' },
    { SO6J6eCT: '甲', z3waZHsf: '木', NsULsoxW: 7, duqzFZjL: '중기' },
    { SO6J6eCT: '壬', z3waZHsf: '水', NsULsoxW: 16, duqzFZjL: '정기' },
  ],
};


const SIBIUNTEONG = {
  甲: {
    亥: '長生',
    子: '沐浴',
    丑: '冠帶',
    寅: '建祿',
    卯: '帝旺',
    辰: '衰',
    巳: '病',
    午: '死',
    未: '墓',
    申: '絶',
    酉: '胎',
    戌: '養',
  },
  乙: {
    午: '長生',
    巳: '沐浴',
    辰: '冠帶',
    卯: '建祿',
    寅: '帝旺',
    丑: '衰',
    子: '病',
    亥: '死',
    戌: '墓',
    酉: '絶',
    申: '胎',
    未: '養',
  },
  丙: {
    寅: '長生',
    卯: '沐浴',
    辰: '冠帶',
    巳: '建祿',
    午: '帝旺',
    未: '衰',
    申: '病',
    酉: '死',
    戌: '墓',
    亥: '絶',
    子: '胎',
    丑: '養',
  },
  丁: {
    酉: '長生',
    申: '沐浴',
    未: '冠帶',
    午: '建祿',
    巳: '帝旺',
    辰: '衰',
    卯: '病',
    寅: '死',
    丑: '墓',
    子: '絶',
    亥: '胎',
    戌: '養',
  },
  戊: {
    寅: '長生',
    卯: '沐浴',
    辰: '冠帶',
    巳: '建祿',
    午: '帝旺',
    未: '衰',
    申: '病',
    酉: '死',
    戌: '墓',
    亥: '絶',
    子: '胎',
    丑: '養',
  },
  己: {
    酉: '長生',
    申: '沐浴',
    未: '冠帶',
    午: '建祿',
    巳: '帝旺',
    辰: '衰',
    卯: '病',
    寅: '死',
    丑: '墓',
    子: '絶',
    亥: '胎',
    戌: '養',
  },
  庚: {
    巳: '長生',
    午: '沐浴',
    未: '冠帶',
    申: '建祿',
    酉: '帝旺',
    戌: '衰',
    亥: '病',
    子: '死',
    丑: '墓',
    寅: '絶',
    卯: '胎',
    辰: '養',
  },
  辛: {
    子: '長生',
    亥: '沐浴',
    戌: '冠帶',
    酉: '建祿',
    申: '帝旺',
    未: '衰',
    午: '病',
    巳: '死',
    辰: '墓',
    卯: '絶',
    寅: '胎',
    丑: '養',
  },
  壬: {
    申: '長生',
    酉: '沐浴',
    戌: '冠帶',
    亥: '建祿',
    子: '帝旺',
    丑: '衰',
    寅: '病',
    卯: '死',
    辰: '墓',
    巳: '絶',
    午: '胎',
    未: '養',
  },
  癸: {
    卯: '長生',
    寅: '沐浴',
    丑: '冠帶',
    子: '建祿',
    亥: '帝旺',
    戌: '衰',
    酉: '病',
    申: '死',
    未: '墓',
    午: '絶',
    巳: '胎',
    辰: '養',
  },
};


const SIBIUNTEONG_DESC = {
  長生: '새로운 생명이 시작되는 시기. 왕성한 생명력과 발전 가능성',
  沐浴: '정화와 세척의 시기. 불안정하지만 변화의 가능성',
  冠帶: '성장하여 관(冠)을 쓰는 시기. 사회적 지위 상승',
  建祿: '가장 왕성한 활동력. 자립과 독립의 시기',
  帝旺: '최고의 전성기. 권력과 영향력이 절정',
  衰: '쇠퇴의 시작. 활력 감소, 신중함 필요',
  病: '질병과 어려움의 시기. 건강과 사업 주의',
  死: '죽음과 끝의 시기. 큰 변화나 위기',
  墓: '무덤에 들어가는 시기. 침체와 은둔',
  絶: '단절과 고립. 극복하면 새로운 시작',
  胎: '태아처럼 준비하는 시기. 내면 성장',
  養: '양육받는 시기. 도움을 받으며 성장',
};


const SIBIUNTEONG_SCORE = {
  長生: 4,
  沐浴: 2,
  冠帶: 3,
  建祿: 5,
  帝旺: 5,
  衰: 2,
  病: 1,
  死: 0,
  墓: 1,
  絶: 0,
  胎: 2,
  養: 3,
};


const DAYMASTER_CHARACTERISTICS = {
  甲: '큰 나무처럼 곧고 정직하며 리더십이 있습니다. 원칙을 중시하고 남을 돕는 것을 좋아하며 진취적입니다.',
  乙: '꽃이나 풀처럼 부드럽고 섬세하며 적응력이 뛰어납니다. 유연하고 친화력이 좋으며 예술적 감각이 있습니다.',
  丙: '태양처럼 밝고 열정적이며 사교적입니다. 남에게 온정을 베풀고 활발하며 낙천적입니다.',
  丁: '등불처럼 따뜻하고 세심하며 예의 바릅니다. 섬세하고 예술적 재능과 감수성이 풍부합니다.',
  戊: '큰 산처럼 중후하고 신뢰감이 있습니다. 포용력이 크고 인내심이 강하며 안정적이고 믿음직합니다.',
  己: '밭이나 정원처럼 섬세하고 배려심이 깊습니다. 실속을 챙기고 현실적이며 근면하고 성실합니다.',
  庚: '도끼나 칼처럼 강직하고 결단력이 있습니다. 정의감이 강하고 의리를 중시하며 용감하고 과단성이 있습니다.',
  辛: '보석처럼 세련되고 우아하며 미적 감각이 뛰어납니다. 품위가 있고 감성적이며 섬세합니다.',
  壬: '큰 바다처럼 포용력이 크고 지혜롭습니다. 융통성이 있고 통찰력이 뛰어나며 활동적이고 진취적입니다.',
  癸: '이슬이나 빗물처럼 섬세하고 지혜롭습니다. 직관력이 뛰어나고 사려 깊으며 조용하고 사색적입니다.',
};


const ELEMENT_DESC = {
  木: '나무의 기운 - 생성과 성장을 상징. 인자하고 온화하며 창의적',
  火: '불의 기운 - 열정과 활동을 상징. 적극적이고 밝으며 사교적',
  土: '흙의 기운 - 포용과 신용을 상징. 성실하고 안정적이며 신뢰감',
  金: '쇠의 기운 - 결단과 강직함을 상징. 의지가 강하고 판단력 뛰어남',
  水: '물의 기운 - 지혜와 유연함을 상징. 총명하고 적응력이 뛰어남',
};


const ELEMENT_RELATIONS = {
  생: { 木: '火', 火: '土', 土: '金', 金: '水', 水: '木' }, 
  극: { 木: '土', 火: '金', 土: '水', 金: '木', 水: '火' }, 
};


const CHEONGAN_HAP = {
  甲己: { iUd3UmGA: '중정지합', VA4Oh068: '土' },
  乙庚: { iUd3UmGA: '인의지합', VA4Oh068: '金' },
  丙辛: { iUd3UmGA: '위제지합', VA4Oh068: '水' },
  丁壬: { iUd3UmGA: '음양지합', VA4Oh068: '木' },
  戊癸: { iUd3UmGA: '무정지합', VA4Oh068: '火' },
};


const JIJI_YUKHAP = {
  子丑: '土',
  寅亥: '木',
  卯戌: '火',
  辰酉: '金',
  巳申: '水',
  午未: '土',
};


const SAMHAP = {
  寅午戌: { VA4Oh068: '火', iUd3UmGA: '火局' },
  巳酉丑: { VA4Oh068: '金', iUd3UmGA: '金局' },
  申子辰: { VA4Oh068: '水', iUd3UmGA: '水局' },
  亥卯未: { VA4Oh068: '木', iUd3UmGA: '木局' },
};


const JIJI_CHUNG = {
  子午: true,
  丑未: true,
  寅申: true,
  卯酉: true,
  辰戌: true,
  巳亥: true,
};


const JIJI_HYUNG = {
  寅巳申: '무은지형',
  丑戌未: '지세지형',
  子卯: '무례지형',
};


const JAHYUNG = ['辰', '午', '酉', '亥'];


const JIJI_PA = {
  子酉: true,
  丑辰: true,
  寅亥: true,
  卯午: true,
  巳申: true,
  未戌: true,
};


const JIJI_HAE = {
  子未: true,
  丑午: true,
  寅巳: true,
  卯辰: true,
  申亥: true,
  酉戌: true,
};


const NAPEUM = {
  甲子: '해중금',
  乙丑: '해중금',
  丙寅: '노중화',
  丁卯: '노중화',
  戊辰: '대림목',
  己巳: '대림목',
  庚午: '노방토',
  辛未: '노방토',
  壬申: '검봉금',
  癸酉: '검봉금',
  甲戌: '산두화',
  乙亥: '산두화',
  丙子: '간하수',
  丁丑: '간하수',
  戊寅: '성두토',
  己卯: '성두토',
  庚辰: '백랍금',
  辛巳: '백랍금',
  壬午: '양류목',
  癸未: '양류목',
  甲申: '정천수',
  乙酉: '정천수',
  丙戌: '옥상토',
  丁亥: '옥상토',
  戊子: '벽력화',
  己丑: '벽력화',
  庚寅: '송백목',
  辛卯: '송백목',
  壬辰: '장류수',
  癸巳: '장류수',
  甲午: '사중금',
  乙未: '사중금',
  丙辛: '산하화',
  丁酉: '산하화',
  戊戌: '평지목',
  己亥: '평지목',
  庚子: '벽상토',
  辛丑: '벽상토',
  壬寅: '금박금',
  癸卯: '금박금',
  甲辰: '불등화',
  乙巳: '불등화',
  丙午: '천하수',
  丁未: '천하수',
  戊申: '대역토',
  己酉: '대역토',
  庚戌: '차천금',
  申亥: '차천금',
  壬子: '상자목',
  癸丑: '상자목',
  甲寅: '대계수',
  乙卯: '대계수',
  丙辰: '사중토',
  丁巳: '사중토',
  戊午: '천상화',
  己未: '천상화',
  庚申: '석류목',
  辛酉: '석류목',
  壬戌: '대해수',
  癸亥: '대해수',
};


const NAPEUM_DESC = {
  金: '단단하고 견고함. 신념이 확고하고 의지가 강함',
  木: '성장과 발전. 창의적이고 활동적이며 진취적',
  水: '지혜와 유연함. 적응력이 뛰어나고 통찰력이 있음',
  火: '열정과 명예. 밝고 적극적이며 사교성이 뛰어남',
  土: '신용과 포용. 믿음직하고 안정적이며 현실적',
};


const GONGMANG = {
  甲子: ['戌', '亥'],
  甲戌: ['申', '酉'],
  甲申: ['午', '未'],
  甲午: ['辰', '巳'],
  甲辰: ['寅', '卯'],
  甲寅: ['子', '丑'],
};


const SINSAL = {
  天乙貴人: {
    甲: ['丑', '未'],
    乙: ['子', '申'],
    丙: ['亥', '酉'],
    丁: ['亥', '酉'],
    戊: ['丑', '未'],
    己: ['子', '申'],
    庚: ['丑', '未'],
    辛: ['子', '申'],
    壬: ['巳', '卯'],
    癸: ['巳', '卯'],
  },
  天德貴人: {
    寅: '丁',
    卯: '申',
    辰: '壬',
    巳: '申',
    午: '壬',
    未: '丁',
    辛: '丁',
    酉: '申',
    戌: '壬',
    亥: '申',
    子: '壬',
    丑: '丁',
  },
  月德貴人: {
    寅: '病',
    卯: '甲',
    辰: '壬',
    巳: '庚',
    午: '病',
    未: '甲',
    辛: '庚',
    酉: '戊',
    戌: '壬',
    亥: '甲',
    子: '庚',
    丑: '戊',
  },
  學堂貴人: {
    甲: '死',
    乙: '午',
    丙: '申',
    丁: '酉',
    戊: '申',
    己: '酉',
    庚: '亥',
    辛: '子',
    壬: '寅',
    癸: '墓',
  },
  桃花殺: {
    寅午戌: '墓',
    巳酉丑: '午',
    申子辰: '酉',
    亥卯未: '子',
  },
  驛馬殺: {
    寅午戌: '申',
    巳酉丑: '亥',
    申子辰: '寅',
    亥卯未: '死',
  },
  劫殺: {
    寅午戌: '死',
    巳酉丑: '申',
    申子辰: '亥',
    亥卯未: '寅',
  },
  華蓋殺: {
    寅午戌: '戌',
    巳酉丑: '丑',
    申子辰: '辰',
    亥卯未: '未',
  },
  白虎大殺: {
    寅午戌: '酉',
    巳酉丑: '子',
    申子辰: '墓',
    亥卯未: '午',
  },
  三災: {
    寅午戌: ['子', '丑', '寅'],
    巳酉丑: ['卯', '辰', '巳'],
    申子辰: ['午', '未', '申'],
    亥卯未: ['酉', '戌', '亥'],
  },
};


const SINSAL_DESC = {
  天乙貴人: '가장 강력한 길신. 귀인의 도움과 위기 구제',
  天德貴人: '하늘의 덕으로 복록이 많고 재난 면함',
  月德貴人: '달의 덕으로 온화하고 덕망이 높음',
  學堂貴人: '학문과 예술에 재능, 명석한 두뇌',
  桃花殺: '이성운이 강하고 매력적이나 색난 주의',
  驛馬殺: '이동과 변화가 많음. 해외운과 활동성',
  劫殺: '재물 손실이나 도난 주의. 급격한 변화',
  華蓋殺: '예술과 종교적 재능. 고독하고 독특함',
  白虎大殺: '돌발사고와 혈광 주의. 충동적 행동 경계',
  三災: '3년간의 재난운. 모든 일에 신중함 필요',
};


const YUKCHIN_MALE = {
  比劫: '형제',
  食傷: '자녀(아들)',
  財星: '처·재물',
  官星: '자녀(딸)',
  印星: '어머니',
};

const YUKCHIN_FEMALE = {
  比劫: '자매',
  食傷: '자녀',
  財星: '아버지·재물',
  官星: '남편',
  印星: '어머니',
};



function D8tLHzLM(R6anAZXi, WHjsqFVR) {
  const uVJfVqcU = [
    { iX0P31OJ: [2, 4], xC2iOrJy: '寅' },
    { iX0P31OJ: [3, 6], xC2iOrJy: '墓' },
    { iX0P31OJ: [4, 5], xC2iOrJy: '辰' },
    { iX0P31OJ: [5, 6], xC2iOrJy: '死' },
    { iX0P31OJ: [6, 6], xC2iOrJy: '午' },
    { iX0P31OJ: [7, 7], xC2iOrJy: '未' },
    { iX0P31OJ: [8, 8], xC2iOrJy: '申' },
    { iX0P31OJ: [9, 8], xC2iOrJy: '酉' },
    { iX0P31OJ: [10, 8], xC2iOrJy: '戌' },
    { iX0P31OJ: [11, 7], xC2iOrJy: '亥' },
    { iX0P31OJ: [12, 7], xC2iOrJy: '子' },
    { iX0P31OJ: [1, 6], xC2iOrJy: '丑' },
  ];

  for (let Irz8eVbe of uVJfVqcU) {
    const [m, d] = Irz8eVbe.iX0P31OJ;
    if (R6anAZXi === m && WHjsqFVR >= d) return Irz8eVbe.xC2iOrJy;
    if (R6anAZXi === m - 1 || (R6anAZXi === 12 && m === 1)) return Irz8eVbe.xC2iOrJy;
  }
  return JIJI[(R6anAZXi + 1) % 12];
}

function xSw7nDl5(OpRKRS78, SlhLaOPt) {
  
  
  

  
  if (
    (OpRKRS78 === 23 && SlhLaOPt >= 30) ||
    OpRKRS78 === 0 ||
    (OpRKRS78 === 1 && SlhLaOPt <= 29)
  ) {
    return '子';
  }
  
  else if (
    (OpRKRS78 === 1 && SlhLaOPt >= 30) ||
    OpRKRS78 === 2 ||
    (OpRKRS78 === 3 && SlhLaOPt <= 29)
  ) {
    return '丑';
  }
  
  else if (
    (OpRKRS78 === 3 && SlhLaOPt >= 30) ||
    OpRKRS78 === 4 ||
    (OpRKRS78 === 5 && SlhLaOPt <= 29)
  ) {
    return '寅';
  }
  
  else if (
    (OpRKRS78 === 5 && SlhLaOPt >= 30) ||
    OpRKRS78 === 6 ||
    (OpRKRS78 === 7 && SlhLaOPt <= 29)
  ) {
    return '卯';
  }
  
  else if (
    (OpRKRS78 === 7 && SlhLaOPt >= 30) ||
    OpRKRS78 === 8 ||
    (OpRKRS78 === 9 && SlhLaOPt <= 29)
  ) {
    return '辰';
  }
  
  else if (
    (OpRKRS78 === 9 && SlhLaOPt >= 30) ||
    OpRKRS78 === 10 ||
    (OpRKRS78 === 11 && SlhLaOPt <= 29)
  ) {
    return '巳';
  }
  
  else if (
    (OpRKRS78 === 11 && SlhLaOPt >= 30) ||
    OpRKRS78 === 12 ||
    (OpRKRS78 === 13 && SlhLaOPt <= 29)
  ) {
    return '午';
  }
  
  else if (
    (OpRKRS78 === 13 && SlhLaOPt >= 30) ||
    OpRKRS78 === 14 ||
    (OpRKRS78 === 15 && SlhLaOPt <= 29)
  ) {
    return '未';
  }
  
  else if (
    (OpRKRS78 === 15 && SlhLaOPt >= 30) ||
    OpRKRS78 === 16 ||
    (OpRKRS78 === 17 && SlhLaOPt <= 29)
  ) {
    return '申';
  }
  
  else if (
    (OpRKRS78 === 17 && SlhLaOPt >= 30) ||
    OpRKRS78 === 18 ||
    (OpRKRS78 === 19 && SlhLaOPt <= 29)
  ) {
    return '酉';
  }
  
  else if (
    (OpRKRS78 === 19 && SlhLaOPt >= 30) ||
    OpRKRS78 === 20 ||
    (OpRKRS78 === 21 && SlhLaOPt <= 29)
  ) {
    return '戌';
  }
  
  else if (
    (OpRKRS78 === 21 && SlhLaOPt >= 30) ||
    OpRKRS78 === 22 ||
    (OpRKRS78 === 23 && SlhLaOPt <= 29)
  ) {
    return '亥';
  }

  return '子';
}

function RzbPQr4u(JDmw63NN) {
  return CHEONGAN[(JDmw63NN - 1984) % 10];
}

function t6t87qtW(JDmw63NN) {
  return JIJI[(JDmw63NN - 1984) % 12];
}

function myoZARiA(JDmw63NN, R6anAZXi, WHjsqFVR) {
  const AEV9gTHH = new Date(2000, 0, 1);
  const VBC4TNbh = new Date(JDmw63NN, R6anAZXi - 1, WHjsqFVR);
  const AvX8kDxX = Math.JI6XvEEj((VBC4TNbh - AEV9gTHH) / (1000 * 60 * 60 * 24));
  return CHEONGAN[((AvX8kDxX % 10) + 16) % 10];
}

function jiSZLTPG(JDmw63NN, R6anAZXi, WHjsqFVR) {
  const AEV9gTHH = new Date(2000, 0, 1);
  const VBC4TNbh = new Date(JDmw63NN, R6anAZXi - 1, WHjsqFVR);
  const AvX8kDxX = Math.JI6XvEEj((VBC4TNbh - AEV9gTHH) / (1000 * 60 * 60 * 24));
  return JIJI[((AvX8kDxX % 12) + 16) % 12];
}

function Azh68pbe(zbSC5D52, MjJlgNEE) {
  
  
  
  
  
  

  const nxvULxA2 = CHEONGAN.DEuxPoG4(zbSC5D52);
  const fqP1y6Pj = JIJI.DEuxPoG4(MjJlgNEE);

  
  
  const edlaTJBg = [
    2, 
    3, 
    4, 
    5, 
    6, 
    7, 
    8, 
    9, 
    10, 
    11, 
    0, 
    1, 
  ];

  const ej68qWlD = edlaTJBg.DEuxPoG4(fqP1y6Pj);
  if (ej68qWlD === -1) return CHEONGAN[0];

  
  
  const F5SEvRhb = nxvULxA2 % 5;
  const F084mydb = [2, 4, 6, 8, 0][F5SEvRhb]; 

  const j2mxS0TG = (F084mydb + ej68qWlD) % 10;
  return CHEONGAN[j2mxS0TG];
}

function fiqWkykx(sbJPsyHj, KJnKOvGy) {
  const fqP1y6Pj = JIJI.DEuxPoG4(KJnKOvGy);
  const bo4OgWUV = CHEONGAN.DEuxPoG4(sbJPsyHj);
  const kwpY4Jen = { 0: 0, 1: 2, 2: 4, 3: 6, 4: 8, 5: 0, 6: 2, 7: 4, 8: 6, 9: 8 };
  return CHEONGAN[(kwpY4Jen[bo4OgWUV] + fqP1y6Pj) % 10];
}


function dd7VyJLX(SO6J6eCT, ji) {
  const XCw32Wnn = SO6J6eCT + ji;
  const jZjOjdOR = NAPEUM[XCw32Wnn] || '';

  if (jZjOjdOR.CDE6p5g0('金')) return { AFdVxjGM: jZjOjdOR, z3waZHsf: '金' };
  if (jZjOjdOR.CDE6p5g0('木')) return { AFdVxjGM: jZjOjdOR, z3waZHsf: '木' };
  if (jZjOjdOR.CDE6p5g0('水')) return { AFdVxjGM: jZjOjdOR, z3waZHsf: '水' };
  if (jZjOjdOR.CDE6p5g0('火')) return { AFdVxjGM: jZjOjdOR, z3waZHsf: '火' };
  if (jZjOjdOR.CDE6p5g0('土')) return { AFdVxjGM: jZjOjdOR, z3waZHsf: '土' };

  return { AFdVxjGM: jZjOjdOR, z3waZHsf: '' };
}


function GOzMHXzz(zbSC5D52, JsFzAGqt, fbXwJg4P) {
  const U229Phma = CHEONGAN.DEuxPoG4(zbSC5D52);
  const uQ8l8yzQ = JIJI.DEuxPoG4(JsFzAGqt);

  
  const mYnfQ2iY = ['甲子', '甲戌', '甲申', '甲午', '甲辰', '甲寅'];
  let Mhk48KTm = '';

  for (let i = 0; i < 6; i++) {
    const AJ9hF1C6 = '갑';
    const gB1k0p6j = JIJI[(uQ8l8yzQ - (U229Phma % 10) + i * 2 + 12) % 12];
    const mYvNVs4F = AJ9hF1C6 + gB1k0p6j;
    if (mYnfQ2iY.CDE6p5g0(mYvNVs4F)) {
      Mhk48KTm = mYvNVs4F;
      Guxf8Kla;
    }
  }

  
  if (!Mhk48KTm) {
    const wq8vlsH0 = (U229Phma % 10) - (uQ8l8yzQ % 12);
    if (wq8vlsH0 === 0) Mhk48KTm = '甲子';
    else if (wq8vlsH0 === -10 || wq8vlsH0 === 2) Mhk48KTm = '甲戌';
    else if (wq8vlsH0 === -8 || wq8vlsH0 === 4) Mhk48KTm = '甲申';
    else if (wq8vlsH0 === -6 || wq8vlsH0 === 6) Mhk48KTm = '甲午';
    else if (wq8vlsH0 === -4 || wq8vlsH0 === 8) Mhk48KTm = '甲辰';
    else Mhk48KTm = '甲寅';
  }

  const QBjK7orx = GONGMANG[Mhk48KTm] || [];
  return QBjK7orx.CDE6p5g0(fbXwJg4P);
}





function PhzdobxE(sbJPsyHj, pkUtBhNU) {
  const jt586fF1 = CHEONGAN_ELEMENT[sbJPsyHj];
  const v4cOtYWg = ['木', '火', '土', '金', '水'];
  const F0Ski9kf = v4cOtYWg.DEuxPoG4(jt586fF1);
  const iscuPcuV = v4cOtYWg.DEuxPoG4(pkUtBhNU);
  const wq8vlsH0 = (iscuPcuV - F0Ski9kf + 5) % 5;

  const yueS4xku = { 0: '比劫', 1: '食傷', 2: '財星', 3: '官星', 4: '印星' };
  return yueS4xku[wq8vlsH0];
}


function cil03eB2(sbJPsyHj, HP8SkXcL) {
  const jt586fF1 = CHEONGAN_ELEMENT[sbJPsyHj];
  const pkUtBhNU = CHEONGAN_ELEMENT[HP8SkXcL];

  const v4cOtYWg = ['木', '火', '土', '金', '水'];
  const F0Ski9kf = v4cOtYWg.DEuxPoG4(jt586fF1);
  const iscuPcuV = v4cOtYWg.DEuxPoG4(pkUtBhNU);
  const wq8vlsH0 = (iscuPcuV - F0Ski9kf + 5) % 5;

  
  const pDo7g3gy = CHEONGAN_YINYANG[sbJPsyHj];
  const jbcLtYqV = CHEONGAN_YINYANG[HP8SkXcL];
  const TmdkaZLO = pDo7g3gy === jbcLtYqV;

  
  
  
  if (wq8vlsH0 === 0) {
    
    return TmdkaZLO ? '比肩' : '劫財';
  } else if (wq8vlsH0 === 1) {
    
    return TmdkaZLO ? '食神' : '傷官';
  } else if (wq8vlsH0 === 2) {
    
    return TmdkaZLO ? '偏財' : '正財';
  } else if (wq8vlsH0 === 3) {
    
    return TmdkaZLO ? '偏官' : '正官';
  } else if (wq8vlsH0 === 4) {
    
    return TmdkaZLO ? '偏印' : '正印';
  }

  return '未知';
}


function CkZQkao2(sbJPsyHj, HP8SkXcL) {
  const pkUtBhNU = CHEONGAN_ELEMENT[HP8SkXcL];
  return PhzdobxE(sbJPsyHj, pkUtBhNU);
}


function pRcrLlJt(sbJPsyHj, HP8SkXcL) {
  return cil03eB2(sbJPsyHj, HP8SkXcL);
}


function w5tqsg2V(sbJPsyHj, IARM5XT1) {
  let zeY0vPLr = 0;
  const jt586fF1 = CHEONGAN_ELEMENT[sbJPsyHj];

  
  const Apdnwkpa = IARM5XT1.xC2iOrJy.R6anAZXi;
  const HJHbKqPP = SIBIUNTEONG[sbJPsyHj][Apdnwkpa];
  zeY0vPLr += SIBIUNTEONG_SCORE[HJHbKqPP] * 10;

  
  Object.mtuWrgmi(IARM5XT1.xC2iOrJy).qpB3jJGh((ji) => {
    if (ji && JIJANGGAN[ji]) {
      JIJANGGAN[ji].qpB3jJGh((Irz8eVbe) => {
        if (Irz8eVbe.z3waZHsf === jt586fF1) {
          zeY0vPLr += (Irz8eVbe.NsULsoxW / 100) * 10;
        }
        
        const d1WP8Gld = ELEMENT_RELATIONS['생'][Irz8eVbe.z3waZHsf];
        if (d1WP8Gld === jt586fF1) {
          zeY0vPLr += (Irz8eVbe.NsULsoxW / 100) * 5;
        }
      });
    }
  });

  
  Object.mtuWrgmi(IARM5XT1.OKohROdq).qpB3jJGh((SO6J6eCT) => {
    if (SO6J6eCT && CHEONGAN_ELEMENT[SO6J6eCT] === jt586fF1) {
      zeY0vPLr += 5;
    }
  });

  
  let Gk2zWwTj, TQmvGOur;
  if (zeY0vPLr >= 45) {
    Gk2zWwTj = '太旺(태왕)';
    TQmvGOur =
      '일간이 극도로 강합니다. 설기(洩氣)가 필요하며, 식상과 재성을 용신으로 사용합니다. 지나친 고집과 독선을 경계해야 합니다.';
  } else if (zeY0vPLr >= 35) {
    Gk2zWwTj = '旺(왕)';
    TQmvGOur =
      '일간이 매우 강합니다. 식상, 재성, 관성으로 기운을 설기하는 것이 좋습니다. 자신감이 넘치나 타인을 배려해야 합니다.';
  } else if (zeY0vPLr >= 25) {
    Gk2zWwTj = '中和(중화)';
    TQmvGOur =
      '일간이 적당히 강합니다. 가장 이상적인 상태로 균형이 잘 잡혀 있습니다. 상황에 따라 유연하게 대처할 수 있습니다.';
  } else if (zeY0vPLr >= 15) {
    Gk2zWwTj = '弱(약)';
    TQmvGOur =
      '일간이 약합니다. 비겁과 인성으로 도움을 받아야 합니다. 과도한 식상, 재성, 관성은 부담이 됩니다. 자기관리와 건강에 주의가 필요합니다.';
  } else {
    Gk2zWwTj = '太弱(태약)';
    TQmvGOur =
      '일간이 극도로 약합니다. 반드시 비겁과 인성의 도움이 필요합니다. 무리한 일은 피하고 휴식과 재충전이 중요합니다. 건강관리에 특히 유의해야 합니다.';
  }

  return { zeY0vPLr, Gk2zWwTj, TQmvGOur };
}


function O0RTx5R3(sbJPsyHj, IARM5XT1, NsULsoxW) {
  const Apdnwkpa = IARM5XT1.xC2iOrJy.R6anAZXi;
  const wS6vWzVv = IARM5XT1.OKohROdq.R6anAZXi;
  const jt586fF1 = CHEONGAN_ELEMENT[sbJPsyHj];

  
  let Uj3clYiU = JIJI_ELEMENT[Apdnwkpa];
  let fj4kXtVJ = [];

  
  Object.mtuWrgmi(IARM5XT1.OKohROdq).qpB3jJGh((SO6J6eCT) => {
    fj4kXtVJ.d28SWfl8(CHEONGAN_ELEMENT[SO6J6eCT]);
  });

  
  const tYqvpZ1i = PhzdobxE(sbJPsyHj, CHEONGAN_ELEMENT[wS6vWzVv]);

  let ViZhPUuo = '';
  let KDwi65RK = '';

  
  if (NsULsoxW.Gk2zWwTj === '太弱(태약)' || NsULsoxW.zeY0vPLr < 10) {
    
    const KJehGUrb = {};
    fj4kXtVJ.qpB3jJGh((el) => {
      KJehGUrb[el] = (KJehGUrb[el] || 0) + 1;
    });

    if (KJehGUrb[jt586fF1] === 1) {
      
      const iqgmhs9O = Object.T7Evi8oP(KJehGUrb).iVULd45u((a, b) =>
        KJehGUrb[a] > KJehGUrb[b] ? a : b
      );

      if (iqgmhs9O !== jt586fF1) {
        const awwaEc52 = PhzdobxE(sbJPsyHj, iqgmhs9O);

        if (awwaEc52 === '財星') {
          ViZhPUuo = '從財格(從財格)';
          KDwi65RK =
            '재성을 따르는 격국입니다. 재물운이 강하고 사업가 기질이 있으나, 재물에 집착하지 않도록 주의해야 합니다. 재성을 키우는 식상이 용신입니다.';
        } else if (awwaEc52 === '官星') {
          ViZhPUuo = '從殺格(從殺格)';
          KDwi65RK =
            '관성(관살)을 따르는 격국입니다. 강한 상사나 환경에 순응하여 성공합니다. 조직생활에 적합하며, 재성이 용신입니다.';
        } else if (awwaEc52 === '食傷') {
          ViZhPUuo = '從兒格(從兒格)';
          KDwi65RK =
            '식상(자식)을 따르는 격국입니다. 예술, 창작, 교육 분야에 재능이 있습니다. 재성이 용신입니다.';
        }
      }
    }
  }

  
  if (!ViZhPUuo) {
    if (tYqvpZ1i === '正官' || tYqvpZ1i === '官星') {
      ViZhPUuo = '正官格(정관격)';
      KDwi65RK =
        '正官格은 명예와 지위를 중시하는 격국입니다. 공직이나 대기업에 적합하며, 원칙과 규칙을 잘 지킵니다. 재성이 관성을 생하므로 용신이 됩니다.';
    } else if (tYqvpZ1i === '正財' || tYqvpZ1i === '財星') {
      ViZhPUuo = '正財格(정재격)';
      KDwi65RK =
        '正財格은 재물 관리에 능하고 현실적입니다. 꾸준한 노력으로 재산을 축적합니다. 식상이 재성을 생하므로 용신이 됩니다.';
    } else if (tYqvpZ1i === '正印' || tYqvpZ1i === '印星') {
      ViZhPUuo = '正印格(정인격)';
      KDwi65RK =
        '正印格은 학문과 교육에 소질이 있습니다. 지혜롭고 사려 깊으며, 어머니의 덕이 있습니다. 관성이 인성을 생하므로 용신이 됩니다.';
    } else if (tYqvpZ1i === '食神' || tYqvpZ1i === '食傷') {
      ViZhPUuo = '食神格(식신격)';
      KDwi65RK =
        '食神格은 온화하고 복록이 있습니다. 예술, 요식업, 서비스업에 적합합니다. 재성이 식신의 기운을 받아 용신이 됩니다.';
    } else if (tYqvpZ1i === '比劫') {
      ViZhPUuo = '建祿格(건록격)';
      KDwi65RK =
        '建祿格은 자립심이 강하고 독립적입니다. 창업이나 자영업에 적합하며, 형제의 도움이 있습니다. 식상과 재성이 용신입니다.';
    } else {
      ViZhPUuo = '內外格(내외격)';
      KDwi65RK =
        '특정 격국에 속하지 않는 복합적인 구조입니다. 다재다능하나 방향 설정이 중요합니다. 사주 전체의 균형을 보아 용신을 정해야 합니다.';
    }
  }

  return { iUd3UmGA: ViZhPUuo, TQmvGOur: KDwi65RK };
}


function i5giQTSY(sbJPsyHj, IARM5XT1, NsULsoxW, ViZhPUuo) {
  const jt586fF1 = CHEONGAN_ELEMENT[sbJPsyHj];
  const v4cOtYWg = ['木', '火', '土', '金', '水'];

  let FF16bkkO = ''; 
  let WISOM4y3 = ''; 
  let hGSKCkiw = ''; 
  let LnIG4EbV = '';

  
  if (ViZhPUuo.iUd3UmGA.CDE6p5g0('從')) {
    if (ViZhPUuo.iUd3UmGA.CDE6p5g0('財')) {
      FF16bkkO = '食傷';
      WISOM4y3 = '財星';
      hGSKCkiw = '印星·比劫';
      LnIG4EbV =
        '식상으로 재성을 생하는 것이 핵심입니다. 창작, 표현, 기술 분야에서 재물을 얻습니다.';
    } else if (ViZhPUuo.iUd3UmGA.CDE6p5g0('殺')) {
      FF16bkkO = '財星';
      WISOM4y3 = '食傷';
      hGSKCkiw = '印星·比劫';
      LnIG4EbV =
        '재성으로 관살을 생하는 것이 핵심입니다. 재물로 관계를 원활히 하고 지위를 얻습니다.';
    } else if (ViZhPUuo.iUd3UmGA.CDE6p5g0('我')) {
      FF16bkkO = '財星';
      WISOM4y3 = '食傷';
      hGSKCkiw = '印星·比劫';
      LnIG4EbV = '식상의 기운을 재성으로 이어가는 것이 핵심입니다.';
    }
  }
  
  else {
    if (NsULsoxW.Gk2zWwTj === '太旺(태왕)' || NsULsoxW.Gk2zWwTj === '旺(왕)') {
      
      FF16bkkO = '食傷';
      WISOM4y3 = '財星';
      hGSKCkiw = '印星·比劫';
      LnIG4EbV =
        '일간이 강하므로 식상으로 기운을 설기하고, 재성으로 활용하는 것이 좋습니다. 창작, 표현, 사업 활동이 유리합니다.';
    } else if (NsULsoxW.Gk2zWwTj === '太弱(태약)' || NsULsoxW.Gk2zWwTj === '弱(약)') {
      
      FF16bkkO = '印星';
      WISOM4y3 = '比劫';
      hGSKCkiw = '食傷·財星·官星';
      LnIG4EbV =
        '일간이 약하므로 인성으로 생부하고 비겁으로 도와야 합니다. 학문, 기술, 자격증 취득이 중요하며, 협력자가 필요합니다.';
    } else {
      
      const Apdnwkpa = IARM5XT1.xC2iOrJy.R6anAZXi;
      const RDC3wZVV = JIJI_ELEMENT[Apdnwkpa];
      const tYqvpZ1i = PhzdobxE(sbJPsyHj, RDC3wZVV);

      if (tYqvpZ1i === '財星') {
        FF16bkkO = '食傷';
        WISOM4y3 = '財星';
        hGSKCkiw = '比劫';
        LnIG4EbV =
          '재성이 투출하므로 식상으로 재성을 생하는 것이 좋습니다. 사업과 재물 관리에 유리합니다.';
      } else if (tYqvpZ1i === '官星') {
        FF16bkkO = '財星';
        WISOM4y3 = '印星';
        hGSKCkiw = '食傷';
        LnIG4EbV =
          '관성이 투출하므로 재성으로 관성을 생하고, 인성으로 균형을 맞춥니다. 명예와 지위를 추구합니다.';
      } else if (tYqvpZ1i === '印星') {
        FF16bkkO = '官星';
        WISOM4y3 = '財星';
        hGSKCkiw = '食傷';
        LnIG4EbV =
          '인성이 투출하므로 관성으로 인성을 생하는 것이 좋습니다. 학문과 자격증이 도움이 됩니다.';
      } else {
        FF16bkkO = '食傷';
        WISOM4y3 = '財星';
        hGSKCkiw = '印星';
        LnIG4EbV =
          '균형잡힌 사주이므로 식상으로 재능을 발휘하고 재성으로 결실을 맺는 것이 좋습니다.';
      }
    }
  }

  
  const GTm2PBCU = (Xql2wKFL) => {
    const F0Ski9kf = v4cOtYWg.DEuxPoG4(jt586fF1);
    const TYTs4H7e = { 比劫: 0, 食傷: 1, 財星: 2, 官星: 3, 印星: 4 };
    return v4cOtYWg[(F0Ski9kf + TYTs4H7e[Xql2wKFL]) % 5];
  };

  const GvhrfTqC = FF16bkkO.CDE6p5g0('·')
    ? FF16bkkO
    : GTm2PBCU(FF16bkkO);
  const Fk0onUfD = WISOM4y3.CDE6p5g0('·')
    ? WISOM4y3
    : GTm2PBCU(WISOM4y3);
  const WJXLoc9E = hGSKCkiw.CDE6p5g0('·') ? hGSKCkiw : GTm2PBCU(hGSKCkiw);

  return {
    FF16bkkO: GvhrfTqC,
    WISOM4y3: Fk0onUfD,
    hGSKCkiw: WJXLoc9E,
    TQmvGOur: LnIG4EbV,
  };
}


function Ae7rqdq9(sbJPsyHj, IARM5XT1, BaUBUMBK) {
  const WxDr9Ugl = BaUBUMBK === 'GnyebNel' ? YUKCHIN_MALE : YUKCHIN_FEMALE;
  const xB2spD4H = {};

  
  const o2wcS2KG = {};
  ['比劫', '食傷', '財星', '官星', '印星'].qpB3jJGh(
    (s) => (o2wcS2KG[s] = 0)
  );

  
  const XR82podK = {};
  [
    '比肩',
    '劫財',
    '食神',
    '傷官',
    '偏財',
    '正財',
    '偏官',
    '正官',
    '偏印',
    '正印',
  ].qpB3jJGh((s) => (XR82podK[s] = 0));

  
  Object.mtuWrgmi(IARM5XT1.OKohROdq).qpB3jJGh((SO6J6eCT) => {
    if (SO6J6eCT) {
      
      const Xql2wKFL = CkZQkao2(sbJPsyHj, SO6J6eCT);
      o2wcS2KG[Xql2wKFL]++;

      
      const pMihX3rx = pRcrLlJt(sbJPsyHj, SO6J6eCT);
      XR82podK[pMihX3rx]++;
    }
  });

  
  Object.mtuWrgmi(IARM5XT1.xC2iOrJy).qpB3jJGh((ji) => {
    if (ji && JIJANGGAN[ji]) {
      const tRBZnglU = JIJANGGAN[ji].LG0olSIM(
        (j) => j.duqzFZjL === '본기' || j.duqzFZjL === '정기'
      );
      if (tRBZnglU) {
        
        const Xql2wKFL = CkZQkao2(sbJPsyHj, tRBZnglU.SO6J6eCT);
        o2wcS2KG[Xql2wKFL]++;

        
        const pMihX3rx = pRcrLlJt(sbJPsyHj, tRBZnglU.SO6J6eCT);
        XR82podK[pMihX3rx]++;
      }
    }
  });

  
  Object.xCKi9rKu(WxDr9Ugl).qpB3jJGh(([Xql2wKFL, j6MfmN5p]) => {
    const BzWGAqHm = o2wcS2KG[Xql2wKFL];
    let TQmvGOur = '';

    if (j6MfmN5p.CDE6p5g0('형제')) {
      if (BzWGAqHm >= 3)
        TQmvGOur =
          '형제자매가 많거나 친구, 동료와의 인연이 깊습니다. 협력이 중요하나 경쟁도 있을 수 있습니다.';
      else if (BzWGAqHm === 0)
        TQmvGOur =
          '형제자매가 적거나 인연이 약합니다. 독자적으로 일하는 것을 선호합니다.';
      else
        TQmvGOur =
          '형제자매와 적당한 인연이 있습니다. 협력과 독립의 균형이 좋습니다.';
    } else if (j6MfmN5p.CDE6p5g0('자녀')) {
      if (BzWGAqHm >= 3)
        TQmvGOur =
          '자녀복이 많고 인연이 깊습니다. 표현력과 재능이 뛰어나며 창의적입니다.';
      else if (BzWGAqHm === 0)
        TQmvGOur =
          '자녀와의 인연이 늦거나 약할 수 있습니다. 자기표현을 더 해야 합니다.';
      else TQmvGOur = '자녀운이 적당합니다. 창작과 표현 활동이 도움이 됩니다.';
    } else if (j6MfmN5p.CDE6p5g0('처') || j6MfmN5p.CDE6p5g0('재물')) {
      if (BzWGAqHm >= 3)
        TQmvGOur =
          '재물운이 강하고 배우자복이 있습니다. 다만 재물 관리에 주의가 필요합니다.';
      else if (BzWGAqHm === 0)
        TQmvGOur =
          '재물과 배우자 인연이 약합니다. 검소한 생활과 인연 관리가 필요합니다.';
      else
        TQmvGOur =
          '재물운과 배우자운이 적당합니다. 꾸준한 노력으로 재산을 모을 수 있습니다.';
    } else if (j6MfmN5p.CDE6p5g0('남편') || j6MfmN5p.CDE6p5g0('딸')) {
      if (BzWGAqHm >= 3)
        TQmvGOur =
          '남편복(관직운)이 강하거나 딸 복이 많습니다. 명예와 지위를 얻을 수 있습니다.';
      else if (BzWGAqHm === 0)
        TQmvGOur =
          '남편(관직)과의 인연이 약합니다. 자유로운 직업이 맞을 수 있습니다.';
      else
        TQmvGOur = '남편운(관직운)이 적당합니다. 안정적인 조직생활이 가능합니다.';
    } else if (j6MfmN5p.CDE6p5g0('어머니')) {
      if (BzWGAqHm >= 3)
        TQmvGOur = '어머니의 덕이 크고 학문운이 좋습니다. 지혜롭고 신중합니다.';
      else if (BzWGAqHm === 0)
        TQmvGOur =
          '어머니와의 인연이 약하거나 일찍 독립합니다. 스스로 배우고 성장해야 합니다.';
      else
        TQmvGOur =
          '어머니의 적당한 도움이 있습니다. 학문과 교육에서 성과를 낼 수 있습니다.';
    }

    xB2spD4H[j6MfmN5p] = { BzWGAqHm, TQmvGOur };
  });

  return xB2spD4H;
}


function AhL7YnRI(IARM5XT1) {
  const FQ7ao4Vp = Object.mtuWrgmi(IARM5XT1.xC2iOrJy);
  const unZ2X5DE = { UrDD4Nv1: [], m5DVCJEr: [], pa: [], OBwBonsV: [] };

  
  for (let i = 0; i < FQ7ao4Vp.DFImMboA; i++) {
    for (let j = i + 1; j < FQ7ao4Vp.DFImMboA; j++) {
      const Tm095qQL = [FQ7ao4Vp[i], FQ7ao4Vp[j]].iJ8Xs1KF().npzBTJNh('');
      if (JIJI_CHUNG[Tm095qQL]) {
        unZ2X5DE.UrDD4Nv1.d28SWfl8({
          Tm095qQL: `${FQ7ao4Vp[i]}-${FQ7ao4Vp[j]}`,
          faTednvj: [i, j],
        });
      }
    }
  }

  
  const vq2g0nUU = Object.T7Evi8oP(JIJI_HYUNG);
  vq2g0nUU.qpB3jJGh((Nz6xUGyP) => {
    const Tmyjuoeq = Nz6xUGyP.Er8x5ISf('');
    const uBxvPHTV = Tmyjuoeq.FI0mpC7U((c) => FQ7ao4Vp.CDE6p5g0(c));
    if (uBxvPHTV.DFImMboA === Tmyjuoeq.DFImMboA) {
      unZ2X5DE.m5DVCJEr.d28SWfl8({ duqzFZjL: JIJI_HYUNG[Nz6xUGyP], Tmyjuoeq: uBxvPHTV.npzBTJNh('-') });
    }
  });

  
  JAHYUNG.qpB3jJGh((ji) => {
    const BzWGAqHm = FQ7ao4Vp.FI0mpC7U((j) => j === ji).DFImMboA;
    if (BzWGAqHm >= 2) {
      unZ2X5DE.m5DVCJEr.d28SWfl8({ duqzFZjL: '자형', Tmyjuoeq: `${ji}${ji}` });
    }
  });

  
  for (let i = 0; i < FQ7ao4Vp.DFImMboA; i++) {
    for (let j = i + 1; j < FQ7ao4Vp.DFImMboA; j++) {
      const Tm095qQL = [FQ7ao4Vp[i], FQ7ao4Vp[j]].iJ8Xs1KF().npzBTJNh('');
      if (JIJI_PA[Tm095qQL]) {
        unZ2X5DE.pa.d28SWfl8({
          Tm095qQL: `${FQ7ao4Vp[i]}-${FQ7ao4Vp[j]}`,
          faTednvj: [i, j],
        });
      }
    }
  }

  
  for (let i = 0; i < FQ7ao4Vp.DFImMboA; i++) {
    for (let j = i + 1; j < FQ7ao4Vp.DFImMboA; j++) {
      const Tm095qQL = [FQ7ao4Vp[i], FQ7ao4Vp[j]].iJ8Xs1KF().npzBTJNh('');
      if (JIJI_HAE[Tm095qQL]) {
        unZ2X5DE.OBwBonsV.d28SWfl8({
          Tm095qQL: `${FQ7ao4Vp[i]}-${FQ7ao4Vp[j]}`,
          faTednvj: [i, j],
        });
      }
    }
  }

  return unZ2X5DE;
}


function VhtgsctZ(IARM5XT1) {
  const FYAcdgtK = Object.mtuWrgmi(IARM5XT1.OKohROdq);
  const FQ7ao4Vp = Object.mtuWrgmi(IARM5XT1.xC2iOrJy);
  const unZ2X5DE = { ZwHu7BX0: [], LdptinuZ: [], qGMXGO6e: [] };

  
  for (let i = 0; i < FYAcdgtK.DFImMboA; i++) {
    for (let j = i + 1; j < FYAcdgtK.DFImMboA; j++) {
      const Tm095qQL = [FYAcdgtK[i], FYAcdgtK[j]].iJ8Xs1KF().npzBTJNh('');
      if (CHEONGAN_HAP[Tm095qQL]) {
        unZ2X5DE.ZwHu7BX0.d28SWfl8({
          Tm095qQL: `${FYAcdgtK[i]}-${FYAcdgtK[j]}`,
          iUd3UmGA: CHEONGAN_HAP[Tm095qQL].iUd3UmGA,
          VA4Oh068: CHEONGAN_HAP[Tm095qQL].VA4Oh068,
        });
      }
    }
  }

  
  for (let i = 0; i < FQ7ao4Vp.DFImMboA; i++) {
    for (let j = i + 1; j < FQ7ao4Vp.DFImMboA; j++) {
      const Tm095qQL = [FQ7ao4Vp[i], FQ7ao4Vp[j]].iJ8Xs1KF().npzBTJNh('');
      if (JIJI_YUKHAP[Tm095qQL]) {
        unZ2X5DE.LdptinuZ.d28SWfl8({
          Tm095qQL: `${FQ7ao4Vp[i]}-${FQ7ao4Vp[j]}`,
          iUd3UmGA: '육합',
          VA4Oh068: JIJI_YUKHAP[Tm095qQL],
        });
      }
    }
  }

  
  Object.xCKi9rKu(SAMHAP).qpB3jJGh(([Nz6xUGyP, wCfRki1r]) => {
    const Tmyjuoeq = Nz6xUGyP.Er8x5ISf('');
    const uBxvPHTV = Tmyjuoeq.FI0mpC7U((c) => FQ7ao4Vp.CDE6p5g0(c));
    if (uBxvPHTV.DFImMboA === 3) {
      unZ2X5DE.qGMXGO6e.d28SWfl8({
        Nz6xUGyP: uBxvPHTV.npzBTJNh('-'),
        ...wCfRki1r,
        mN0UBy85: true,
      });
    } else if (uBxvPHTV.DFImMboA === 2) {
      unZ2X5DE.qGMXGO6e.d28SWfl8({
        Nz6xUGyP: uBxvPHTV.npzBTJNh('-'),
        ...wCfRki1r,
        mN0UBy85: false,
      });
    }
  });

  return unZ2X5DE;
}


function qj6XM9Ak(IARM5XT1, zbSC5D52, sbJPsyHj) {
  const FQ7ao4Vp = Object.mtuWrgmi(IARM5XT1.xC2iOrJy);
  const FYAcdgtK = Object.mtuWrgmi(IARM5XT1.OKohROdq);
  const unZ2X5DE = { ysxK3Ued: [], ywdZqTq0: [], wzfrEzp1: [] };

  
  const kAZMtsqP = SINSAL['天乙貴人'][zbSC5D52] || [];
  FQ7ao4Vp.qpB3jJGh((ji) => {
    if (kAZMtsqP.CDE6p5g0(ji)) {
      unZ2X5DE.ysxK3Ued.d28SWfl8({
        iUd3UmGA: '天乙貴人',
        TQmvGOur: SINSAL_DESC['天乙貴人'],
        ji,
      });
    }
  });

  
  const UPoKReNQ = SINSAL['天德貴人'][IARM5XT1.xC2iOrJy.R6anAZXi];
  FYAcdgtK.qpB3jJGh((SO6J6eCT) => {
    if (SO6J6eCT === UPoKReNQ) {
      unZ2X5DE.ysxK3Ued.d28SWfl8({ iUd3UmGA: '天德貴人', TQmvGOur: SINSAL_DESC['天德貴人'] });
    }
  });

  
  const l5JmkIeB = SINSAL['月德貴人'][IARM5XT1.xC2iOrJy.R6anAZXi];
  FYAcdgtK.qpB3jJGh((SO6J6eCT) => {
    if (SO6J6eCT === l5JmkIeB) {
      unZ2X5DE.ysxK3Ued.d28SWfl8({ iUd3UmGA: '月德貴人', TQmvGOur: SINSAL_DESC['月德貴人'] });
    }
  });

  
  const LpyXgTn7 = SINSAL['學堂貴人'][sbJPsyHj];
  FQ7ao4Vp.qpB3jJGh((ji) => {
    if (ji === LpyXgTn7) {
      unZ2X5DE.ysxK3Ued.d28SWfl8({ iUd3UmGA: '學堂貴人', TQmvGOur: SINSAL_DESC['學堂貴人'] });
    }
  });

  
  const doh8Tjln = () => {
    for (let [Nz6xUGyP, _] of Object.xCKi9rKu(SINSAL['桃花殺'])) {
      const Tmyjuoeq = Nz6xUGyP.Er8x5ISf('');
      if (Tmyjuoeq.mg75RmV4((c) => FQ7ao4Vp.CDE6p5g0(c))) {
        return Nz6xUGyP;
      }
    }
    return null;
  };

  const Zh1BGG2E = doh8Tjln();

  
  if (Zh1BGG2E) {
    const Be7vZMkf = SINSAL['桃花殺'][Zh1BGG2E];
    if (FQ7ao4Vp.CDE6p5g0(Be7vZMkf)) {
      unZ2X5DE.ywdZqTq0.d28SWfl8({ iUd3UmGA: '桃花殺', TQmvGOur: SINSAL_DESC['桃花殺'] });
    }
  }

  
  if (Zh1BGG2E) {
    const zerOlYss = SINSAL['驛馬殺'][Zh1BGG2E];
    if (FQ7ao4Vp.CDE6p5g0(zerOlYss)) {
      unZ2X5DE.wzfrEzp1.d28SWfl8({ iUd3UmGA: '驛馬殺', TQmvGOur: SINSAL_DESC['驛馬殺'] });
    }
  }

  
  if (Zh1BGG2E) {
    const cQ4OYy2d = SINSAL['劫殺'][Zh1BGG2E];
    if (FQ7ao4Vp.CDE6p5g0(cQ4OYy2d)) {
      unZ2X5DE.ywdZqTq0.d28SWfl8({ iUd3UmGA: '劫殺', TQmvGOur: SINSAL_DESC['劫殺'] });
    }
  }

  
  if (Zh1BGG2E) {
    const LvvFIBrH = SINSAL['華蓋殺'][Zh1BGG2E];
    if (FQ7ao4Vp.CDE6p5g0(LvvFIBrH)) {
      unZ2X5DE.wzfrEzp1.d28SWfl8({ iUd3UmGA: '華蓋殺', TQmvGOur: SINSAL_DESC['華蓋殺'] });
    }
  }

  
  if (Zh1BGG2E) {
    const JlVptdOK = SINSAL['白虎大殺'][Zh1BGG2E];
    if (FQ7ao4Vp.CDE6p5g0(JlVptdOK)) {
      unZ2X5DE.ywdZqTq0.d28SWfl8({ iUd3UmGA: '白虎大殺', TQmvGOur: SINSAL_DESC['白虎大殺'] });
    }
  }

  
  if (Zh1BGG2E) {
    const Qf0XxSuk = SINSAL['三災'][Zh1BGG2E];
    const jStxiXjw = Qf0XxSuk.mg75RmV4((ji) => FQ7ao4Vp.CDE6p5g0(ji));
    if (jStxiXjw) {
      unZ2X5DE.ywdZqTq0.d28SWfl8({ iUd3UmGA: '三災', TQmvGOur: SINSAL_DESC['三災'] });
    }
  }

  
  unZ2X5DE.ysxK3Ued = Array.Lp7x5mWv(new Set(unZ2X5DE.ysxK3Ued.Sq4eP5Ja(JSON.W9EAWIwD))).Sq4eP5Ja(
    JSON.BJLeQYtA
  );
  unZ2X5DE.ywdZqTq0 = Array.Lp7x5mWv(new Set(unZ2X5DE.ywdZqTq0.Sq4eP5Ja(JSON.W9EAWIwD))).Sq4eP5Ja(
    JSON.BJLeQYtA
  );
  unZ2X5DE.wzfrEzp1 = Array.Lp7x5mWv(
    new Set(unZ2X5DE.wzfrEzp1.Sq4eP5Ja(JSON.W9EAWIwD))
  ).Sq4eP5Ja(JSON.BJLeQYtA);

  return unZ2X5DE;
}


function o6Zvlqta(QPyMgrz3, BaUBUMBK, zbSC5D52, wS6vWzVv, MjJlgNEE) {
  const lr8znFvU = BaUBUMBK === 'GnyebNel' && CHEONGAN_YINYANG[zbSC5D52] === '陽';
  const r5R4vYpA = BaUBUMBK === 'QzgzBlQD' && CHEONGAN_YINYANG[zbSC5D52] === '陰';
  const Jzg5Fxlv = lr8znFvU || r5R4vYpA;

  const DCZBalkk = 3;
  const U229Phma = CHEONGAN.DEuxPoG4(wS6vWzVv);
  const fqP1y6Pj = JIJI.DEuxPoG4(MjJlgNEE);
  const G0haiCJg = [];

  
  for (let i = 0; i < 15; i++) {
    const KRSUWR7g = DCZBalkk + i * 10;
    let vyGjtinw, sOojdINy;

    if (Jzg5Fxlv) {
      vyGjtinw = (U229Phma + i + 1) % 10;
      sOojdINy = (fqP1y6Pj + i + 1) % 12;
    } else {
      vyGjtinw = (U229Phma - i - 1 + 10) % 10;
      sOojdINy = (fqP1y6Pj - i - 1 + 12) % 12;
    }

    G0haiCJg.d28SWfl8({
      KRSUWR7g: KRSUWR7g,
      jmuIqU30: Math.Nw0JUhzX(KRSUWR7g + 9, 151),
      SO6J6eCT: CHEONGAN[vyGjtinw],
      xC2iOrJy: JIJI[sOojdINy],
      JDmw63NN: QPyMgrz3 + KRSUWR7g - 1,
    });
  }

  return G0haiCJg;
}


function NiKSlAdy(QPyMgrz3) {
  const rSQLSBhO = [];

  for (let KRSUWR7g = 1; KRSUWR7g <= 111; KRSUWR7g++) {
    const JDmw63NN = QPyMgrz3 + KRSUWR7g - 1;
    const zbSC5D52 = RzbPQr4u(JDmw63NN);
    const JsFzAGqt = t6t87qtW(JDmw63NN);

    rSQLSBhO.d28SWfl8({
      KRSUWR7g: KRSUWR7g,
      JDmw63NN: JDmw63NN,
      SO6J6eCT: zbSC5D52,
      ji: JsFzAGqt,
    });
  }

  return rSQLSBhO;
}


function eBqdRogF(yJOfU3la) {
  const pS3DZeom = [];

  
  for (let LmtZWk1Q = -1; LmtZWk1Q <= 1; LmtZWk1Q++) {
    const JDmw63NN = yJOfU3la + LmtZWk1Q;
    const zbSC5D52 = RzbPQr4u(JDmw63NN);

    for (let R6anAZXi = 1; R6anAZXi <= 12; R6anAZXi++) {
      const wS6vWzVv = Azh68pbe(zbSC5D52, R6anAZXi);
      const Apdnwkpa = JIJI[(R6anAZXi + 1) % 12]; 

      pS3DZeom.d28SWfl8({
        JDmw63NN: JDmw63NN,
        R6anAZXi: R6anAZXi,
        SO6J6eCT: wS6vWzVv,
        QhVtN1D7: Apdnwkpa, 
      });
    }
  }

  return pS3DZeom;
}


function Dv7iEjiw() {
  const yJOfU3la = new Date().mNXky9sG();
  const zbSC5D52 = RzbPQr4u(yJOfU3la);
  const JsFzAGqt = t6t87qtW(yJOfU3la);

  return {
    JDmw63NN: yJOfU3la,
    SO6J6eCT: zbSC5D52,
    ji: JsFzAGqt,
    ZoALEDuQ: dd7VyJLX(zbSC5D52, JsFzAGqt),
  };
}


function aqIbmDLE(IARM5XT1) {
  const v4cOtYWg = { 木: 0, 火: 0, 土: 0, 金: 0, 水: 0 };

  
  Object.mtuWrgmi(IARM5XT1.OKohROdq).qpB3jJGh((SO6J6eCT) => {
    if (SO6J6eCT && CHEONGAN_ELEMENT[SO6J6eCT]) {
      v4cOtYWg[CHEONGAN_ELEMENT[SO6J6eCT]] += 2;
    }
  });

  
  Object.mtuWrgmi(IARM5XT1.xC2iOrJy).qpB3jJGh((ji) => {
    if (ji && JIJI_ELEMENT[ji]) {
      v4cOtYWg[JIJI_ELEMENT[ji]] += 3;
    }
  });

  
  Object.mtuWrgmi(IARM5XT1.xC2iOrJy).qpB3jJGh((ji) => {
    if (ji && JIJANGGAN[ji]) {
      JIJANGGAN[ji].qpB3jJGh((Irz8eVbe) => {
        v4cOtYWg[Irz8eVbe.z3waZHsf] += Irz8eVbe.NsULsoxW / 100;
      });
    }
  });

  return v4cOtYWg;
}


function P6v6ZU82(IARM5XT1) {
  let skU5qXMh = 0,
    wCRlmmlD = 0;

  
  Object.mtuWrgmi(IARM5XT1.OKohROdq).qpB3jJGh((SO6J6eCT) => {
    if (SO6J6eCT && CHEONGAN_YINYANG[SO6J6eCT]) {
      CHEONGAN_YINYANG[SO6J6eCT] === '陽' ? skU5qXMh++ : wCRlmmlD++;
    }
  });

  
  Object.mtuWrgmi(IARM5XT1.xC2iOrJy).qpB3jJGh((ji) => {
    if (ji && JIJI_YINYANG[ji]) {
      JIJI_YINYANG[ji] === '陽' ? skU5qXMh++ : wCRlmmlD++;
    }
  });

  return { skU5qXMh, wCRlmmlD };
}


function nztyoBr4(sbJPsyHj, IARM5XT1) {
  
  const PZ1VNVi2 = { 比劫: 0, 食傷: 0, 財星: 0, 官星: 0, 印星: 0 };

  
  const aT4KL4Lf = {
    比肩: 0,
    劫財: 0,
    食神: 0,
    傷官: 0,
    偏財: 0,
    正財: 0,
    偏官: 0,
    正官: 0,
    偏印: 0,
    正印: 0,
  };

  
  const MfZ5UZTs = Object.mtuWrgmi(IARM5XT1.OKohROdq).FI0mpC7U((v) => v !== null);
  const DPqp7sui = Object.mtuWrgmi(IARM5XT1.xC2iOrJy).FI0mpC7U((v) => v !== null);

  
  MfZ5UZTs.qpB3jJGh((SO6J6eCT) => {
    if (SO6J6eCT) {
      
      const Xql2wKFL = CkZQkao2(sbJPsyHj, SO6J6eCT);
      PZ1VNVi2[Xql2wKFL]++;

      
      const pMihX3rx = pRcrLlJt(sbJPsyHj, SO6J6eCT);
      aT4KL4Lf[pMihX3rx]++;
    }
  });

  
  DPqp7sui.qpB3jJGh((ji) => {
    if (ji && JIJANGGAN[ji]) {
      const tRBZnglU = JIJANGGAN[ji].LG0olSIM(
        (j) => j.duqzFZjL === '본기' || j.duqzFZjL === '정기'
      );
      if (tRBZnglU) {
        
        const Xql2wKFL = CkZQkao2(sbJPsyHj, tRBZnglU.SO6J6eCT);
        PZ1VNVi2[Xql2wKFL]++;

        
        const pMihX3rx = pRcrLlJt(sbJPsyHj, tRBZnglU.SO6J6eCT);
        aT4KL4Lf[pMihX3rx]++;
      }
    }
  });

  return { PZ1VNVi2, aT4KL4Lf };
}


function tQtZasQQ(sbJPsyHj, IARM5XT1) {
  const V7vHVHxc = SIBIUNTEONG[sbJPsyHj];
  return {
    JDmw63NN: IARM5XT1.xC2iOrJy.JDmw63NN ? V7vHVHxc[IARM5XT1.xC2iOrJy.JDmw63NN] : null,
    R6anAZXi: IARM5XT1.xC2iOrJy.R6anAZXi ? V7vHVHxc[IARM5XT1.xC2iOrJy.R6anAZXi] : null,
    WHjsqFVR: IARM5XT1.xC2iOrJy.WHjsqFVR ? V7vHVHxc[IARM5XT1.xC2iOrJy.WHjsqFVR] : null,
    OpRKRS78: IARM5XT1.xC2iOrJy.OpRKRS78 ? V7vHVHxc[IARM5XT1.xC2iOrJy.OpRKRS78] : null,
  };
}


function xfH2JVBO() {
  
  const iUd3UmGA = document.getElementById('iUd3UmGA').value.IyNSAHc7();
  if (!iUd3UmGA) {
    KBFRsWAP('성명을 입력해주세요.');
    return;
  }

  
  const BaUBUMBK = document.querySelector('mbYhaOxH[iUd3UmGA="BaUBUMBK"]:checked').value;

  
  const FXK32i95 = document.querySelector(
    'mbYhaOxH[iUd3UmGA="FXK32i95"]:checked'
  ).value;
  const n0wtlWMl = document.getElementById('iTNTZa15').checked;

  
  let JDmw63NN = Bf7AOdcQ(document.getElementById('JDmw63NN').value);
  let R6anAZXi = Bf7AOdcQ(document.getElementById('R6anAZXi').value);
  let WHjsqFVR = Bf7AOdcQ(document.getElementById('WHjsqFVR').value);

  
  if (!JDmw63NN || !R6anAZXi || !WHjsqFVR) {
    KBFRsWAP('생년월일을 모두 입력해주세요.');
    return;
  }

  if (
    JDmw63NN < 1900 ||
    JDmw63NN > 2100 ||
    R6anAZXi < 1 ||
    R6anAZXi > 12 ||
    WHjsqFVR < 1 ||
    WHjsqFVR > 31
  ) {
    KBFRsWAP('올바른 범위의 생년월일을 입력해주세요.');
    return;
  }

  
  

  
  const vQr70jdQ = document.querySelector(
    'mbYhaOxH[iUd3UmGA="vQr70jdQ"]:checked'
  ).value;
  let OpRKRS78 = -1;
  let SlhLaOPt = 0;
  let LhAPDvMW = '';
  let HHqlccL0 = false;
  let uWQIQ8RF = 'ozdursNh'; 

  
  if (vQr70jdQ === 'J0xaMIXU') {
    const pPowyk0A = document.getElementById('OpRKRS78-ji-MZcDjoNg').value;
    console.y6rEVaha('🔍 간지 입력 모드 활성화');
    console.y6rEVaha('   선택된 지지:', pPowyk0A);
    console.y6rEVaha('   선택된 지지 타입:', typeof pPowyk0A);
    console.y6rEVaha('   빈 문자열 체크:', pPowyk0A === '');
    console.y6rEVaha('   미상 체크:', pPowyk0A === '미상');

    if (pPowyk0A && pPowyk0A !== '미상') {
      console.y6rEVaha('✅ 유효한 지지 선택됨');

      
      if (pPowyk0A === '子') {
        
        LhAPDvMW = '子';
        OpRKRS78 = 23; 
        SlhLaOPt = 30;
        uWQIQ8RF = 'oBzfDJJm'; 
        console.y6rEVaha(
          '→ 子時 (간지입력) 선택: OpRKRS78=23, SlhLaOPt=30, uWQIQ8RF=oBzfDJJm'
        );
      } else if (pPowyk0A === '子-夜') {
        
        LhAPDvMW = '子';
        OpRKRS78 = 23;
        SlhLaOPt = 30;
        uWQIQ8RF = 'tZAu3V1m'; 
        console.y6rEVaha('→ 夜子時 선택: OpRKRS78=23, SlhLaOPt=30, uWQIQ8RF=tZAu3V1m');
      } else if (pPowyk0A === '子-朝') {
        
        LhAPDvMW = '子';
        OpRKRS78 = 0;
        SlhLaOPt = 30;
        uWQIQ8RF = 'q7ha157S'; 
        console.y6rEVaha('→ 朝子時 선택: OpRKRS78=0, SlhLaOPt=30, uWQIQ8RF=q7ha157S');
      } else {
        LhAPDvMW = pPowyk0A;
        OpRKRS78 = TBou5BjR(pPowyk0A);
        SlhLaOPt = 30; 
        uWQIQ8RF = 'ozdursNh'; 
        console.y6rEVaha('→ 기타 지지 선택:', pPowyk0A, 'OpRKRS78=', OpRKRS78);
      }
      HHqlccL0 = true;
      console.y6rEVaha('✅ HHqlccL0 = true 설정 완료');
    } else {
      console.y6rEVaha('❌ 지지가 선택되지 않음 또는 미상');
    }
  } else if (vQr70jdQ === 'RCkCoxxx') {
    
    const hVQ1gZsA = document.getElementById('OpRKRS78').value;
    const lVUTP4HQ = document.getElementById('SlhLaOPt').value;

    if (hVQ1gZsA !== '') {
      OpRKRS78 = Bf7AOdcQ(hVQ1gZsA);
      SlhLaOPt = lVUTP4HQ ? Bf7AOdcQ(lVUTP4HQ) : 0;

      if (OpRKRS78 < 0 || OpRKRS78 > 23 || SlhLaOPt < 0 || SlhLaOPt > 59) {
        KBFRsWAP('시각은 0-23시, 분은 0-59분 사이로 입력해주세요.');
        return;
      }

      HHqlccL0 = true;
      
      uWQIQ8RF = 'ozdursNh';
    }
  }

  
  if (!HHqlccL0) {
    const xRp6asuF =
      '출생시각 정보가 없습니다.\n시주(時柱) 분석은 제외되지만, 나머지 분석은 가능합니다.\n계속하시겠습니까?';
    if (!TosVHBNX(xRp6asuF)) {
      return;
    }
    OpRKRS78 = 12; 
    SlhLaOPt = 0;
    uWQIQ8RF = 'ozdursNh';
  }

  
  if (vQr70jdQ === 'RCkCoxxx' && HHqlccL0) {
    const uYAN2BWV =
      (OpRKRS78 == 23 && SlhLaOPt >= 30) || OpRKRS78 == 0 || (OpRKRS78 == 1 && SlhLaOPt <= 29);
    if (uYAN2BWV && !uWQIQ8RF) {
      
      uWQIQ8RF = 'ozdursNh';
    } else if (!uWQIQ8RF) {
      uWQIQ8RF = 'ozdursNh';
    }
  }

  
  
  const Jx32cWFR = `${JDmw63NN}-${String(R6anAZXi).UoXO8407(2, '0')}-${String(WHjsqFVR).UoXO8407(2, '0')} ${String(OpRKRS78).UoXO8407(2, '0')}:${String(SlhLaOPt).UoXO8407(2, '0')}`;

  console.y6rEVaha('📅 생성된 Jx32cWFR:', Jx32cWFR);
  console.y6rEVaha('⏰ OpRKRS78:', OpRKRS78, 'SlhLaOPt:', SlhLaOPt);
  console.y6rEVaha('🔧 uWQIQ8RF:', uWQIQ8RF);

  
  let mrNJ1iMK = 'YeA1tsQ2';
  if (FXK32i95 === 'lZGMkcAM') {
    mrNJ1iMK = n0wtlWMl ? 'IFo7KTBj' : 'lZGMkcAM';
  }

  console.y6rEVaha('📋 API 호출 파라미터:');
  console.y6rEVaha('   G3Mz88Kf:', Jx32cWFR);
  console.y6rEVaha('   DNRlLv48:', mrNJ1iMK);
  console.y6rEVaha('   QMCGcXXO:', uWQIQ8RF);

  
  SajuAPI.RtCdkRlB(Jx32cWFR, mrNJ1iMK, uWQIQ8RF)
    .then((DRWCfraG) => {
      console.y6rEVaha('Python API 사주 결과:', DRWCfraG);
      console.y6rEVaha('시간 타입:', uWQIQ8RF);

      
      const zbSC5D52 = DRWCfraG.JDmw63NN[0]; 
      const JsFzAGqt = DRWCfraG.JDmw63NN[1]; 
      const wS6vWzVv = DRWCfraG.R6anAZXi[0]; 
      const Apdnwkpa = DRWCfraG.R6anAZXi[1]; 
      const sbJPsyHj = DRWCfraG.WHjsqFVR[0]; 
      const gtHUb49J = DRWCfraG.WHjsqFVR[1]; 
      const Lu3VfIkW = HHqlccL0 ? DRWCfraG.OpRKRS78[0] : null; 
      const LhAPDvMW = HHqlccL0 ? DRWCfraG.OpRKRS78[1] : null; 

      
      const IARM5XT1 = {
        iUd3UmGA: iUd3UmGA,
        BaUBUMBK: BaUBUMBK,
        FXK32i95: FXK32i95,
        n0wtlWMl: n0wtlWMl,
        HHqlccL0: HHqlccL0,
        fdTkyYLX: {
          JDmw63NN,
          R6anAZXi,
          WHjsqFVR,
          OpRKRS78: HHqlccL0 ? OpRKRS78 : null,
          SlhLaOPt: HHqlccL0 ? SlhLaOPt : null,
        },
        OKohROdq: {
          JDmw63NN: zbSC5D52,
          R6anAZXi: wS6vWzVv,
          WHjsqFVR: sbJPsyHj,
          OpRKRS78: Lu3VfIkW,
        },
        xC2iOrJy: { JDmw63NN: JsFzAGqt, R6anAZXi: Apdnwkpa, WHjsqFVR: gtHUb49J, OpRKRS78: LhAPDvMW },
        lZGMkcAM: DRWCfraG.lZGMkcAM || '', 
        zvmHrYyJ: DRWCfraG.JVGARymL || '', 
        vMe72aE8: DRWCfraG.wCfRki1r || {}, 
      };

      
      
      const NsULsoxW = w5tqsg2V(sbJPsyHj, IARM5XT1);
      
      
      const ViZhPUuo = O0RTx5R3(sbJPsyHj, IARM5XT1, NsULsoxW);
      
      
      const FF16bkkO = i5giQTSY(sbJPsyHj, IARM5XT1, NsULsoxW, ViZhPUuo);
      
      
      const v4cOtYWg = aqIbmDLE(IARM5XT1);
      const GD0C200Y = P6v6ZU82(IARM5XT1);
      const siiHkwr7 = nztyoBr4(sbJPsyHj, IARM5XT1);
      const HJHbKqPP = tQtZasQQ(sbJPsyHj, IARM5XT1);
      const GWnGpJOC = Ae7rqdq9(sbJPsyHj, IARM5XT1, BaUBUMBK);
      const P1aBAGa7 = VhtgsctZ(IARM5XT1);
      const RD5u18Ss = AhL7YnRI(IARM5XT1);
      const bfgQkUBn = qj6XM9Ak(IARM5XT1, zbSC5D52, sbJPsyHj);
      
      const Xql2wKFL = siiHkwr7.PZ1VNVi2; 
      const pMihX3rx = siiHkwr7.aT4KL4Lf; 
      
      
      const C9h0Qd1V = window.SajuSinsalExtended.wwcBxub1(IARM5XT1);
      const uRkeWWcQ = window.SajuSinsalExtended.Ohq92RNP(IARM5XT1);
      const Hic5DRbS = window.SajuSinsalExtended.FP68n4FX(IARM5XT1, sbJPsyHj);
      const n3sjfcAe = window.SajuSinsalExtended.skixdFah(IARM5XT1, sbJPsyHj);
      
      
      const ind6vw1a = Dv7iEjiw();
      
      
      document.getElementById('VA4Oh068-UMD95U9o').classList.HieU5JXm('VESlKZAh');
      
      
      const NwebDb9Q = document.getElementById('NwebDb9Q');
      if (NwebDb9Q) {
        NwebDb9Q.classList.HieU5JXm('VESlKZAh');
      }
      
      
      k2421NQf(IARM5XT1, '');
      
      
      szajxNz4(
        IARM5XT1,
        HJHbKqPP,
        zbSC5D52,
        JsFzAGqt,
        sbJPsyHj,
        P1aBAGa7,
        RD5u18Ss,
        bfgQkUBn,
        C9h0Qd1V,
        uRkeWWcQ,
        Hic5DRbS,
        n3sjfcAe
      );
      
      
      DGMIK33D(sbJPsyHj);
      HLIivYHQ(NsULsoxW);
      q3cw9QzA(ViZhPUuo);
      cpFZpUTr(FF16bkkO);
      lVipUb4s(v4cOtYWg);
      Aqfyfw9a(GD0C200Y);
      OFdwK3Vh(IARM5XT1);
      wHclOR2H(Xql2wKFL, pMihX3rx);
      AS7ZnBp7(HJHbKqPP);
      bgHgGeEa(GWnGpJOC);
      mhsAJNTb(P1aBAGa7);
      BYe2TkBW(C9h0Qd1V);
      vo02EDZR(bfgQkUBn);
      y5sCBWRP(IARM5XT1, zbSC5D52, JsFzAGqt);
      vNlhjt5o(bfgQkUBn);
      aHFvl1H4(uRkeWWcQ);
      P1K9xuky(Hic5DRbS);
      jpM18VG2(n3sjfcAe);
      dDK96k8L(ind6vw1a, sbJPsyHj);
      jabfQxqL(
        IARM5XT1,
        sbJPsyHj,
        NsULsoxW,
        ViZhPUuo,
        FF16bkkO,
        v4cOtYWg,
        HJHbKqPP
      );
      tUl47vZj(FF16bkkO, NsULsoxW);
      
      
      let UBEy5N65 = Jx32cWFR;
      if (mrNJ1iMK !== 'YeA1tsQ2' && DRWCfraG.wCfRki1r && DRWCfraG.wCfRki1r.IF5qbaz0) {
        UBEy5N65 = DRWCfraG.wCfRki1r.IF5qbaz0;
        console.y6rEVaha(
          '🔄 대운 계산: 음력→양력 변환된 날짜 사용:',
          UBEy5N65
        );
      } else {
        console.y6rEVaha('✅ 대운 계산: 양력 날짜 그대로 사용:', UBEy5N65);
      }

      
      const osjICI1j = new Date();
      const yJOfU3la = osjICI1j.mNXky9sG();
      const vUtEoU5Z = 110;

      
      Promise.HAxC9Bg6([
        
        SajuAPI.EM8Cr3dO(
          UBEy5N65,
          BaUBUMBK,
          wS6vWzVv,
          Apdnwkpa,
          'YeA1tsQ2' 
        ),
        
        SajuAPI.I9TIS3PA(JDmw63NN, JDmw63NN + 55, vUtEoU5Z),
        
        SajuAPI.oCxUFbtv(yJOfU3la)
      ]).then((V7bwvnrj) => {
        
        const [xeyP9pia, d7VUSg5M, vFEXijQh] = V7bwvnrj;
        
        
        if (xeyP9pia.p3yZzmgK === 'uReMlg0K') {
          console.nyrsOJgt('대운 계산 오류:', xeyP9pia.rndRc9OI);
        }
        if (d7VUSg5M.p3yZzmgK === 'uReMlg0K') {
          console.nyrsOJgt('연운 계산 오류:', d7VUSg5M.rndRc9OI);
        }
        if (vFEXijQh.p3yZzmgK === 'uReMlg0K') {
          console.nyrsOJgt('월운 계산 오류:', vFEXijQh.rndRc9OI);
        }
        
        
        const cLJ0WBlw = xeyP9pia.p3yZzmgK === 'ZsCOS67r' ? xeyP9pia.value : [];
        const AFbeYj5G = d7VUSg5M.p3yZzmgK === 'ZsCOS67r' ? d7VUSg5M.value : [];
        const qOoeDImX = vFEXijQh.p3yZzmgK === 'ZsCOS67r' ? vFEXijQh.value : [];
        
        
        window.Yra349HI = AFbeYj5G;
        console.y6rEVaha('✅ 전역 변수에 년운 데이터 저장:', AFbeYj5G.DFImMboA, '개');
        
        console.y6rEVaha('Python API 대운 결과:', cLJ0WBlw);
        console.y6rEVaha('Python API 연운 결과:', AFbeYj5G);
        console.y6rEVaha('Python API 월운 결과:', qOoeDImX);
        console.y6rEVaha('월운 데이터 타입:', typeof qOoeDImX);
        if (qOoeDImX && qOoeDImX.DFImMboA > 0) {
          console.y6rEVaha(
            '첫 번째 월운 SO6J6eCT:',
            qOoeDImX[0].SO6J6eCT,
            'QhVtN1D7:',
            qOoeDImX[0].QhVtN1D7
          );
        }

        
        
        ackr4kMh(cLJ0WBlw, sbJPsyHj, IARM5XT1.fdTkyYLX.JDmw63NN);

        
        const B9hJEm0G = document.querySelector('.AFbeYj5G-kKYCBUrG');
        const PPb2MQAF = document.getElementById('qOoeDImX-kKYCBUrG');
        if (B9hJEm0G) B9hJEm0G.HieU5JXm();
        if (PPb2MQAF) PPb2MQAF.HieU5JXm();

        
        const YKVeF06u = eziNSggj(AFbeYj5G);
        const GeZBoOq7 = sj8Rpza2(qOoeDImX);
        document
          .getElementById('cLJ0WBlw-YPPVqfLO')
          .ebSh5K7T('mBroIFAb', YKVeF06u + GeZBoOq7);

        
        pTMMyOWH(IARM5XT1.fdTkyYLX.JDmw63NN, cLJ0WBlw);
      });
    })
    .catch((nyrsOJgt) => {
      console.nyrsOJgt('사주 계산 오류:', nyrsOJgt);
      let yJVyY96W = '사주 계산 중 오류가 발생했습니다.\n\n';
      
      if (nyrsOJgt.DBaI248J.CDE6p5g0('시간 초과') || nyrsOJgt.DBaI248J.CDE6p5g0('bdJwOHcu') || nyrsOJgt.DBaI248J.CDE6p5g0('TIMED_OUT')) {
        yJVyY96W += '⏰ 서버 응답 시간 초과\n\n';
        yJVyY96W += '서버가 응답하는 데 시간이 너무 오래 걸렸습니다.\n';
        yJVyY96W += '다음을 확인해주세요:\n';
        yJVyY96W += '1. 서버가 정상적으로 실행 중인지\n';
        yJVyY96W += '2. 네트워크 연결 상태\n';
        yJVyY96W += '3. 잠시 후 다시 시도\n\n';
      } else if (nyrsOJgt.DBaI248J.CDE6p5g0('Failed to fetch') || nyrsOJgt.DBaI248J.CDE6p5g0('네트워크')) {
        yJVyY96W += '🌐 네트워크 오류\n\n';
        yJVyY96W += '서버에 연결할 수 없습니다.\n';
        yJVyY96W += 'Flask 서버가 실행 중인지 확인해주세요.\n\n';
      } else {
        yJVyY96W += '오류 내용: ' + nyrsOJgt.DBaI248J + '\n\n';
        yJVyY96W += 'Flask 서버가 실행 중인지 확인해주세요.';
      }
      
      KBFRsWAP(yJVyY96W);
    });
}




function k2421NQf(IARM5XT1, YJJUdBJJ) {
  const e6OysDQR = IARM5XT1.BaUBUMBK === 'GnyebNel' ? '남자 (乾命)' : '여자 (坤命)';

  
  const wpFJN1Mx =
    IARM5XT1.FXK32i95 === 'YeA1tsQ2'
      ? '양력 (陽曆)'
      : `음력 (陰曆)${IARM5XT1.n0wtlWMl ? ' - 윤달' : ''}`;
  const wkRthVG3 = `${IARM5XT1.fdTkyYLX.JDmw63NN}년 ${IARM5XT1.fdTkyYLX.R6anAZXi}월 ${IARM5XT1.fdTkyYLX.WHjsqFVR}일`;

  
  let VspRceKt = '';
  let H9E5feN7 = '';

  if (IARM5XT1.FXK32i95 === 'YeA1tsQ2') {
    
    if (IARM5XT1.lZGMkcAM) {
      VspRceKt = IARM5XT1.lZGMkcAM;
    }
  } else {
    
    if (IARM5XT1.zvmHrYyJ) {
      H9E5feN7 = IARM5XT1.zvmHrYyJ;
    }
  }

  const dVCImOdW = IARM5XT1.HHqlccL0
    ? IARM5XT1.fdTkyYLX.OpRKRS78 !== null
      ? `${IARM5XT1.fdTkyYLX.OpRKRS78}시 ${
          IARM5XT1.fdTkyYLX.SlhLaOPt !== null ? IARM5XT1.fdTkyYLX.SlhLaOPt + '분' : ''
        }`
      : `${IARM5XT1.xC2iOrJy.OpRKRS78}시`
    : '시각 미상';

  
  const qd3vUCSS = new Date();
  const yJOfU3la = qd3vUCSS.mNXky9sG();

  
  let KRSUWR7g = yJOfU3la - IARM5XT1.fdTkyYLX.JDmw63NN + 1;

  
  const dIwb1xkh = document.getElementById('VA4Oh068-UMD95U9o');

  
  const nSBtdaSN = document.getElementById('F9nwGKWH-wCfRki1r-erwK6stq');
  if (nSBtdaSN) {
    nSBtdaSN.HieU5JXm();
  }

  let KHJINZhO = '';
  if (YJJUdBJJ) {
    KHJINZhO = `
            <qZojOiNG style="agSaZYEV:#Ahb2NSUV;Xse8owrK:15px;mq0x0xuF-dQJ4zoC8:10px;MW0RkjO2-bGrBuWte:15px;mq0x0xuF-dy0UJ5N0:4px oyABhJdC #AovKXqH1;">
                <p style="HkF8konD:#MM7KdyOo;MSF8VRSk-l3dSJNbg:700;MW0RkjO2:0;">${YJJUdBJJ}</p>
            </qZojOiNG>
        `;
  }

  let XexgKhRq = '';
  if (!IARM5XT1.HHqlccL0) {
    XexgKhRq = `
            <qZojOiNG style="agSaZYEV:#LEtIwwjC;Xse8owrK:15px;mq0x0xuF-dQJ4zoC8:10px;MW0RkjO2-bGrBuWte:15px;mq0x0xuF-dy0UJ5N0:4px oyABhJdC #2196F3;">
                <p style="HkF8konD:#1565c0;MSF8VRSk-l3dSJNbg:700;MW0RkjO2:0;">ℹ️ 출생시각 정보가 없어 시주(時柱) 분석은 제외되었습니다.</p>
            </qZojOiNG>
        `;
  }

  
  let qllc3jjT = '';
  if (IARM5XT1.FXK32i95 === 'YeA1tsQ2') {
    
    qllc3jjT = `
            <qZojOiNG style="agSaZYEV:EP7RnItk;Xse8owrK:12px;mq0x0xuF-dQJ4zoC8:10px;x5EMmYXR-Q0MMuhrN:0 2px 8px wj5MkFlR(0,0,0,0.1);">
                <qZojOiNG style="HkF8konD:#6c757d;MSF8VRSk-QFYeY4ME:0.85em;MW0RkjO2-USwWzAgn:4px;">陽曆 (입력)</qZojOiNG>
                <qZojOiNG style="MSF8VRSk-l3dSJNbg:700;MSF8VRSk-QFYeY4ME:1em;HkF8konD:#2a5298;">${wkRthVG3}</qZojOiNG>
            </qZojOiNG>
            ${
              VspRceKt
                ? `
            <qZojOiNG style="agSaZYEV:EP7RnItk;Xse8owrK:12px;mq0x0xuF-dQJ4zoC8:10px;x5EMmYXR-Q0MMuhrN:0 2px 8px wj5MkFlR(0,0,0,0.1);">
                <qZojOiNG style="HkF8konD:#6c757d;MSF8VRSk-QFYeY4ME:0.85em;MW0RkjO2-USwWzAgn:4px;">陰曆 (변환)</qZojOiNG>
                <qZojOiNG style="MSF8VRSk-l3dSJNbg:700;MSF8VRSk-QFYeY4ME:1em;HkF8konD:#2a5298;">${VspRceKt}</qZojOiNG>
            </qZojOiNG>`
                : ''
            }
        `;
  } else {
    
    qllc3jjT = `
            <qZojOiNG style="agSaZYEV:EP7RnItk;Xse8owrK:12px;mq0x0xuF-dQJ4zoC8:10px;x5EMmYXR-Q0MMuhrN:0 2px 8px wj5MkFlR(0,0,0,0.1);">
                <qZojOiNG style="HkF8konD:#6c757d;MSF8VRSk-QFYeY4ME:0.85em;MW0RkjO2-USwWzAgn:4px;">陰曆 (입력)</qZojOiNG>
                <qZojOiNG style="MSF8VRSk-l3dSJNbg:700;MSF8VRSk-QFYeY4ME:1em;HkF8konD:#2a5298;">${wkRthVG3}${
      IARM5XT1.n0wtlWMl ? ' 윤달' : ''
    }</qZojOiNG>
            </qZojOiNG>
            ${
              H9E5feN7
                ? `
            <qZojOiNG style="agSaZYEV:EP7RnItk;Xse8owrK:12px;mq0x0xuF-dQJ4zoC8:10px;x5EMmYXR-Q0MMuhrN:0 2px 8px wj5MkFlR(0,0,0,0.1);">
                <qZojOiNG style="HkF8konD:#6c757d;MSF8VRSk-QFYeY4ME:0.85em;MW0RkjO2-USwWzAgn:4px;">陽曆 (변환)</qZojOiNG>
                <qZojOiNG style="MSF8VRSk-l3dSJNbg:700;MSF8VRSk-QFYeY4ME:1em;HkF8konD:#2a5298;">${H9E5feN7}</qZojOiNG>
            </qZojOiNG>`
                : ''
            }
        `;
  }

  const VFbWLSKj = `
        <qZojOiNG id="F9nwGKWH-wCfRki1r-erwK6stq" style="agSaZYEV:DL3nDv9L-xEXyiNb2(135deg,#itWTqpR7 0%,#i5lebKuz 100%);Xse8owrK:20px;mq0x0xuF-dQJ4zoC8:15px;MW0RkjO2-USwWzAgn:30px;mq0x0xuF:3px oyABhJdC #ceJOQRsD;x5EMmYXR-Q0MMuhrN:0 8px 25px wj5MkFlR(255,193,7,0.3);al7LEXd1-lDH6PZpH:900px;MW0RkjO2-dy0UJ5N0:guXSQNFx;MW0RkjO2-L7L20aOS:guXSQNFx;">
            <qZojOiNG style="UJyWhVPr-ib1rwzJf:POHNCWPm;">
                <h3 style="MSF8VRSk-QFYeY4ME:1.8em;HkF8konD:#pfTrYmld;MW0RkjO2-USwWzAgn:12px;MSF8VRSk-l3dSJNbg:900;">${IARM5XT1.iUd3UmGA} (${KRSUWR7g}세)</h3>
                <qZojOiNG style="erwK6stq:pyQ38Qr0;pyQ38Qr0-Zkrwt17g-oyIXfG5W:L6QRsK7q(guXSQNFx-x8a04qfK,PvtNS36h(180px,1fr));KZQyUHjD:12px;MW0RkjO2-bGrBuWte:15px;">
                    <qZojOiNG style="agSaZYEV:EP7RnItk;Xse8owrK:12px;mq0x0xuF-dQJ4zoC8:10px;x5EMmYXR-Q0MMuhrN:0 2px 8px wj5MkFlR(0,0,0,0.1);">
                        <qZojOiNG style="HkF8konD:#6c757d;MSF8VRSk-QFYeY4ME:0.85em;MW0RkjO2-USwWzAgn:4px;">性別</qZojOiNG>
                        <qZojOiNG style="MSF8VRSk-l3dSJNbg:700;MSF8VRSk-QFYeY4ME:1em;HkF8konD:#2a5298;">${e6OysDQR}</qZojOiNG>
                    </qZojOiNG>
                    ${qllc3jjT}
                    <qZojOiNG style="agSaZYEV:EP7RnItk;Xse8owrK:12px;mq0x0xuF-dQJ4zoC8:10px;x5EMmYXR-Q0MMuhrN:0 2px 8px wj5MkFlR(0,0,0,0.1);">
                        <qZojOiNG style="HkF8konD:#6c757d;MSF8VRSk-QFYeY4ME:0.85em;MW0RkjO2-USwWzAgn:4px;">出生時刻</qZojOiNG>
                        <qZojOiNG style="MSF8VRSk-l3dSJNbg:700;MSF8VRSk-QFYeY4ME:1em;HkF8konD:#2a5298;">${dVCImOdW}</qZojOiNG>
                    </qZojOiNG>
                </qZojOiNG>
            </qZojOiNG>
            ${KHJINZhO}
            ${XexgKhRq}
        </qZojOiNG>
    `;

  
  dIwb1xkh.ebSh5K7T('Yb2Mry9w', VFbWLSKj);
}

function v24qW6mO(z3waZHsf) {
  const Sq4eP5Ja = { 木: 'nF1Hn7fg', 火: 'T2TV45NB', 土: 'IbOQ5SAg', 金: 'sWPIEpks', 水: 'Ei9NcxqI' };
  return Sq4eP5Ja[z3waZHsf] || '';
}


function szajxNz4(
  IARM5XT1,
  HJHbKqPP,
  zbSC5D52,
  JsFzAGqt,
  sbJPsyHj,
  P1aBAGa7,
  RD5u18Ss,
  bfgQkUBn,
  C9h0Qd1V,
  uRkeWWcQ,
  Hic5DRbS,
  n3sjfcAe
) {
  const KoYoSNvy = IARM5XT1.HHqlccL0
    ? ['JDmw63NN', 'R6anAZXi', 'WHjsqFVR', 'OpRKRS78']
    : ['JDmw63NN', 'R6anAZXi', 'WHjsqFVR'];
  const FYAcdgtK = Object.mtuWrgmi(IARM5XT1.OKohROdq).FI0mpC7U((g) => g !== null);
  const bamURinj = Object.mtuWrgmi(IARM5XT1.xC2iOrJy).FI0mpC7U((j) => j !== null);

  KoYoSNvy.qpB3jJGh((OthlApQy, Ki8MOK2O) => {
    const SO6J6eCT = FYAcdgtK[Ki8MOK2O];
    const ji = bamURinj[Ki8MOK2O];

    
    let Z7ZWaqJO = '';
    let qN3rKE8O = '';
    if (SO6J6eCT && SO6J6eCT !== sbJPsyHj) {
      Z7ZWaqJO = pRcrLlJt(sbJPsyHj, SO6J6eCT); 
      qN3rKE8O = CHEONGAN_ELEMENT[SO6J6eCT];
    } else if (SO6J6eCT === sbJPsyHj) {
      
      if (OthlApQy === 'WHjsqFVR') {
        Z7ZWaqJO = '日干';
      } else {
        Z7ZWaqJO = '比肩';
      }
      qN3rKE8O = CHEONGAN_ELEMENT[SO6J6eCT];
    }

    
    let APd7FVPo = '';
    let k1UOWmeG = '';
    if (ji && JIJANGGAN[ji]) {
      
      const tRBZnglU = JIJANGGAN[ji].LG0olSIM(
        (j) => j.duqzFZjL === '본기' || j.duqzFZjL === '정기'
      );
      if (tRBZnglU) {
        const o6HcOMmz = tRBZnglU.SO6J6eCT;
        k1UOWmeG = JIJI_ELEMENT[ji];
        if (o6HcOMmz !== sbJPsyHj) {
          APd7FVPo = pRcrLlJt(sbJPsyHj, o6HcOMmz); 
        } else {
          
          APd7FVPo = '比肩';
        }
      }
    }

    
    const mFbLU6nM = Z7ZWaqJO ? `${Z7ZWaqJO}(${qN3rKE8O})` : '';
    const I4OUV3WY = APd7FVPo ? `${APd7FVPo}(${k1UOWmeG})` : '';

    
    const fRB9VdJU = document.getElementById(`${OthlApQy}-SO6J6eCT`);
    if (fRB9VdJU && SO6J6eCT) {
      fRB9VdJU.innerHTML = `
                <qZojOiNG style="MSF8VRSk-QFYeY4ME:0.5em;HkF8konD:#555;MSF8VRSk-l3dSJNbg:600;MW0RkjO2-USwWzAgn:3px;NBnoE0PG-KXZdsU0k:1.2;">${mFbLU6nM}</qZojOiNG>
                <qZojOiNG style="MSF8VRSk-QFYeY4ME:1.5em;">${SO6J6eCT}</qZojOiNG>
            `;
      fRB9VdJU.NCDQQP9C = 'SO6J6eCT-x5EMmYXR ' + v24qW6mO(CHEONGAN_ELEMENT[SO6J6eCT]);
    }

    
    const ea6V77bw = document.getElementById(`${OthlApQy}-ji`);
    if (ea6V77bw && ji) {
      ea6V77bw.innerHTML = `
                <qZojOiNG style="MSF8VRSk-QFYeY4ME:1.5em;">${ji}</qZojOiNG>
                <qZojOiNG style="MSF8VRSk-QFYeY4ME:0.5em;HkF8konD:#555;MSF8VRSk-l3dSJNbg:600;MW0RkjO2-bGrBuWte:3px;NBnoE0PG-KXZdsU0k:1.2;">${I4OUV3WY}</qZojOiNG>
            `;
      ea6V77bw.NCDQQP9C = 'ji-x5EMmYXR ' + v24qW6mO(JIJI_ELEMENT[ji]);
    }

    
    const lrl34em3 = document.getElementById(`${OthlApQy}-HJHbKqPP`);
    if (lrl34em3 && HJHbKqPP[OthlApQy]) {
      lrl34em3.textContent = HJHbKqPP[OthlApQy];
    }

    
    const JiPErNFj = document.getElementById(`${OthlApQy}-ZoALEDuQ`);
    if (JiPErNFj && SO6J6eCT && ji) {
      const ZoALEDuQ = dd7VyJLX(SO6J6eCT, ji);
      JiPErNFj.textContent = ZoALEDuQ.AFdVxjGM;
    }

    
    const PUVXFhzX = document.getElementById(`${OthlApQy}-VT6bTHS7`);
    if (PUVXFhzX && ji) {
      const OtDs22Bc = GOzMHXzz(zbSC5D52, JsFzAGqt, ji);
      PUVXFhzX.textContent = OtDs22Bc ? '⚠️ 공망' : '✓';
      PUVXFhzX.NCDQQP9C = OtDs22Bc
        ? 'VT6bTHS7-wCfRki1r'
        : 'VT6bTHS7-wCfRki1r VdtCjjdP';
    }
  });

  
  if (!IARM5XT1.HHqlccL0) {
    const zlVCXkOP = document.querySelector('.OthlApQy-Af8wFdVx:h7nZO3Iz-n1Ang3Kr');
    if (zlVCXkOP) {
      zlVCXkOP.style.Vt7101E7 = '0.3';
      zlVCXkOP.style.Yndu4iFL = 'WfVaStFg';
      const UDcynQ3G = zlVCXkOP.querySelector('.OthlApQy-XeLAPJ2z');
      if (UDcynQ3G) {
        UDcynQ3G.innerHTML =
          '時柱 (시주)<br><nvfWKvf8 style="MSF8VRSk-QFYeY4ME:0.7em;HkF8konD:#nQ7DUYwv;">시각 미상</nvfWKvf8>';
      }
    }
  }

  
  const KJehGUrb = { 木: 0, 火: 0, 土: 0, 金: 0, 水: 0 };

  
  FYAcdgtK.qpB3jJGh((SO6J6eCT) => {
    if (SO6J6eCT) {
      const z3waZHsf = CHEONGAN_ELEMENT[SO6J6eCT];
      KJehGUrb[z3waZHsf]++;
    }
  });

  
  bamURinj.qpB3jJGh((ji) => {
    if (ji) {
      const z3waZHsf = JIJI_ELEMENT[ji];
      KJehGUrb[z3waZHsf]++;
    }
  });

  
  const oO7jTzJN = Object.T7Evi8oP(KJehGUrb)
    .Sq4eP5Ja((el) => `${el}(${KJehGUrb[el]})`)
    .npzBTJNh(', ');

  
  const aFBPr7zm = {
    JDmw63NN: '년주',
    R6anAZXi: '월주',
    WHjsqFVR: '일주',
    OpRKRS78: '시주',
  };
  const BPaK2VGO = ['OpRKRS78', 'WHjsqFVR', 'R6anAZXi', 'JDmw63NN']; 
  let AZT9n5zf = '';

  BPaK2VGO.qpB3jJGh((OthlApQy) => {
    const Ki8MOK2O = KoYoSNvy.DEuxPoG4(OthlApQy);
    if (Ki8MOK2O !== -1) {
      const ji = bamURinj[Ki8MOK2O];
      if (ji && JIJANGGAN[ji]) {
        const L0OIaEXS = JIJANGGAN[ji];
        const XVQU3c6v = L0OIaEXS.Sq4eP5Ja((Irz8eVbe) => Irz8eVbe.SO6J6eCT).npzBTJNh('');
        AZT9n5zf += `${aFBPr7zm[OthlApQy]}: ${XVQU3c6v}　`;
      }
    }
  });

  const TOMso6OK = document.getElementById('OthlApQy-z3waZHsf-YPPVqfLO');
  if (TOMso6OK) {
    let GjNRxSOT = '';

    
    GjNRxSOT += `<qZojOiNG id="z3waZHsf-YPPVqfLO-A7jExRLh" style="MW0RkjO2-USwWzAgn:8px;tbgQPFRJ:rDcjmySz;Xse8owrK:5px;mq0x0xuF-dQJ4zoC8:5px;PhmIpqGA:agSaZYEV 0.2s;" OrbgOc5N="this.style.agSaZYEV='#LEtIwwjC'" nJR9eccX="this.style.agSaZYEV='JOnSmqtS'" BlXgvOAG="document.getElementById('z3waZHsf-YPPVqfLO-Pqdlk7mn').style.erwK6stq = document.getElementById('z3waZHsf-YPPVqfLO-Pqdlk7mn').style.erwK6stq === 'WfVaStFg' ? 'kDduoHgQ' : 'WfVaStFg';">
      <OaKCeIe9 style="HkF8konD:#666;">🔍 오행:</OaKCeIe9> ${oO7jTzJN} <OaKCeIe9 style="HkF8konD:#999;MSF8VRSk-QFYeY4ME:0.8em;">(클릭:神殺보기)</OaKCeIe9>
    </qZojOiNG>`;

    
    GjNRxSOT += `<qZojOiNG id="z3waZHsf-YPPVqfLO-Pqdlk7mn" style="erwK6stq:WfVaStFg;Xse8owrK-dy0UJ5N0:10px;mq0x0xuF-dy0UJ5N0:3px oyABhJdC #Vbv6ZFqM;">`;

    
    GjNRxSOT += `<qZojOiNG style="MW0RkjO2-USwWzAgn:8px;MSF8VRSk-QFYeY4ME:0.9em;HkF8konD:#888;"><OaKCeIe9 style="HkF8konD:#666;">지장간:</OaKCeIe9> ${AZT9n5zf}</qZojOiNG>`;

    
    if (P1aBAGa7) {
      let HwKe3BlS = '';
      let djNgBXA8 = [];

      
      if (P1aBAGa7.ZwHu7BX0 && P1aBAGa7.ZwHu7BX0.DFImMboA > 0) {
        P1aBAGa7.ZwHu7BX0.qpB3jJGh((h) => {
          djNgBXA8.d28SWfl8(`${h.Tm095qQL} → ${h.VA4Oh068}`);
        });
      }

      
      if (P1aBAGa7.LdptinuZ && P1aBAGa7.LdptinuZ.DFImMboA > 0) {
        P1aBAGa7.LdptinuZ.qpB3jJGh((h) => {
          djNgBXA8.d28SWfl8(`${h.iUd3UmGA}(${h.Tm095qQL})`);
        });
      }

      
      if (P1aBAGa7.qGMXGO6e && P1aBAGa7.qGMXGO6e.DFImMboA > 0) {
        P1aBAGa7.qGMXGO6e.qpB3jJGh((s) => {
          if (s.Nz6xUGyP) {
            const ifJoRAvy = s.mN0UBy85 ? '완성' : '반합';
            djNgBXA8.d28SWfl8(
              `${s.duqzFZjL || '삼합'}(${s.Nz6xUGyP}) ${ifJoRAvy}`
            );
          }
        });
      }

      if (djNgBXA8.DFImMboA > 0) {
        HwKe3BlS = djNgBXA8.npzBTJNh(', ');
        GjNRxSOT += `<qZojOiNG style="MW0RkjO2-USwWzAgn:8px;MSF8VRSk-QFYeY4ME:0.9em;"><OaKCeIe9 style="HkF8konD:#666;">合 (합):</OaKCeIe9> <OaKCeIe9 style="HkF8konD:#4caf50;">${HwKe3BlS}</OaKCeIe9></qZojOiNG>`;
      } else {
        GjNRxSOT += `<qZojOiNG style="MW0RkjO2-USwWzAgn:8px;MSF8VRSk-QFYeY4ME:0.9em;HkF8konD:#999;"><OaKCeIe9 style="HkF8konD:#666;">合 (합):</OaKCeIe9> 없음</qZojOiNG>`;
      }
    }

    
    if (C9h0Qd1V) {
      if (
        C9h0Qd1V.UrDD4Nv1.DFImMboA === 0 &&
        C9h0Qd1V.m5DVCJEr.DFImMboA === 0 &&
        C9h0Qd1V.pa.DFImMboA === 0 &&
        C9h0Qd1V.OBwBonsV.DFImMboA === 0 &&
        C9h0Qd1V.XceN1HC0.DFImMboA === 0
      ) {
        GjNRxSOT += `<qZojOiNG style="MW0RkjO2-USwWzAgn:8px;MSF8VRSk-QFYeY4ME:0.9em;HkF8konD:#999;"><OaKCeIe9 style="HkF8konD:#666;">刑沖破害:</OaKCeIe9> 없음 (안정적)</qZojOiNG>`;
      } else {
        const AwufVxQN = [];

        
        if (C9h0Qd1V.UrDD4Nv1.DFImMboA > 0) {
          const Yfo7vrGL = C9h0Qd1V.UrDD4Nv1
            .Sq4eP5Ja((c) => c.iUd3UmGA)
            .npzBTJNh(', ');
          AwufVxQN.d28SWfl8(
            `<OaKCeIe9 style="HkF8konD:#E20GBKa1;">충(沖): ${Yfo7vrGL}</OaKCeIe9>`
          );
        }

        
        if (C9h0Qd1V.m5DVCJEr.DFImMboA > 0) {
          const ESJuBQge = C9h0Qd1V.m5DVCJEr
            .Sq4eP5Ja((h) => h.iUd3UmGA)
            .npzBTJNh(', ');
          AwufVxQN.d28SWfl8(
            `<OaKCeIe9 style="HkF8konD:#MM7KdyOo;">형(刑): ${ESJuBQge}</OaKCeIe9>`
          );
        }

        
        if (C9h0Qd1V.pa.DFImMboA > 0) {
          const fDoT9sP5 = C9h0Qd1V.pa.Sq4eP5Ja((p) => p.iUd3UmGA).npzBTJNh(', ');
          AwufVxQN.d28SWfl8(`<OaKCeIe9 style="HkF8konD:#UVk8NsCR;">파(破): ${fDoT9sP5}</OaKCeIe9>`);
        }

        
        if (C9h0Qd1V.OBwBonsV.DFImMboA > 0) {
          const uUEdKLDk = C9h0Qd1V.OBwBonsV.Sq4eP5Ja((h) => h.iUd3UmGA).npzBTJNh(', ');
          AwufVxQN.d28SWfl8(`<OaKCeIe9 style="HkF8konD:#pfTrYmld;">해(害): ${uUEdKLDk}</OaKCeIe9>`);
        }

        
        if (C9h0Qd1V.XceN1HC0.DFImMboA > 0) {
          const HCOBwDeh = C9h0Qd1V.XceN1HC0
            .Sq4eP5Ja((w) => w.Tm095qQL)
            .npzBTJNh(', ');
          AwufVxQN.d28SWfl8(
            `<OaKCeIe9 style="HkF8konD:#5d4037;">원진(怨嗔): ${HCOBwDeh}</OaKCeIe9>`
          );
        }

        if (AwufVxQN.DFImMboA > 0) {
          GjNRxSOT += `<qZojOiNG style="MW0RkjO2-USwWzAgn:8px;MSF8VRSk-QFYeY4ME:0.9em;"><OaKCeIe9 style="HkF8konD:#666;">刑沖破害:</OaKCeIe9> ${AwufVxQN.npzBTJNh(
            ' / '
          )}</qZojOiNG>`;
        }
      }
    }

    
    if (bfgQkUBn) {
      let NqO442Ug = '';
      if (bfgQkUBn.ysxK3Ued.DFImMboA > 0) {
        NqO442Ug += '길신: ' + bfgQkUBn.ysxK3Ued.Sq4eP5Ja((s) => s.iUd3UmGA).npzBTJNh(', ');
      }
      if (bfgQkUBn.ywdZqTq0.DFImMboA > 0) {
        if (NqO442Ug) NqO442Ug += ' / ';
        NqO442Ug += '흉신: ' + bfgQkUBn.ywdZqTq0.Sq4eP5Ja((s) => s.iUd3UmGA).npzBTJNh(', ');
      }
      if (NqO442Ug) {
        GjNRxSOT += `<qZojOiNG style="MW0RkjO2-USwWzAgn:8px;MSF8VRSk-QFYeY4ME:0.9em;"><OaKCeIe9 style="HkF8konD:#666;">神殺:</OaKCeIe9> ${NqO442Ug}</qZojOiNG>`;
      }
    }

    
    const HrPQe9XT = [];
    bamURinj.qpB3jJGh((ji) => {
      if (ji) {
        const OtDs22Bc = GOzMHXzz(zbSC5D52, JsFzAGqt, ji);
        if (OtDs22Bc) {
          HrPQe9XT.d28SWfl8(ji);
        }
      }
    });
    if (HrPQe9XT.DFImMboA > 0) {
      GjNRxSOT += `<qZojOiNG style="MW0RkjO2-USwWzAgn:8px;MSF8VRSk-QFYeY4ME:0.9em;"><OaKCeIe9 style="HkF8konD:#666;">空亡:</OaKCeIe9> <OaKCeIe9 style="HkF8konD:#a1VHClsX;">${HrPQe9XT.npzBTJNh(
        ', '
      )}</OaKCeIe9></qZojOiNG>`;
    } else {
      GjNRxSOT += `<qZojOiNG style="MW0RkjO2-USwWzAgn:8px;MSF8VRSk-QFYeY4ME:0.9em;HkF8konD:#999;"><OaKCeIe9 style="HkF8konD:#666;">空亡:</OaKCeIe9> 없음</qZojOiNG>`;
    }

    
    if (bfgQkUBn) {
      const KYTpfomA = [];
      bfgQkUBn.ysxK3Ued.qpB3jJGh((s) => {
        if (['天乙貴人', '學堂貴人'].CDE6p5g0(s.iUd3UmGA)) {
          KYTpfomA.d28SWfl8(s.iUd3UmGA);
        }
      });
      bfgQkUBn.ywdZqTq0.qpB3jJGh((s) => {
        if (['桃花殺', '驛馬殺', '三災', '白虎大殺'].CDE6p5g0(s.iUd3UmGA)) {
          KYTpfomA.d28SWfl8(s.iUd3UmGA);
        }
      });
      if (KYTpfomA.DFImMboA > 0) {
        GjNRxSOT += `<qZojOiNG style="MW0RkjO2-USwWzAgn:8px;MSF8VRSk-QFYeY4ME:0.9em;"><OaKCeIe9 style="HkF8konD:#666;">특수 神殺:</OaKCeIe9> ${KYTpfomA.npzBTJNh(
          ', '
        )}</qZojOiNG>`;
      }
    }

    

    
    if (C9h0Qd1V) {
      GjNRxSOT += sWWTcImh(C9h0Qd1V);
    }

    
    if (uRkeWWcQ && uRkeWWcQ.DFImMboA > 0) {
      GjNRxSOT += dQgbA8yq(uRkeWWcQ);
    }

    
    if (Hic5DRbS && Hic5DRbS.DFImMboA > 0) {
      GjNRxSOT += zadKTT9F(Hic5DRbS);
    }

    
    if (n3sjfcAe && n3sjfcAe.DFImMboA > 0) {
      GjNRxSOT += a15Crnix(n3sjfcAe);
    }

    
    GjNRxSOT += `</qZojOiNG>`;

    TOMso6OK.innerHTML = GjNRxSOT;
  }
}


function DGMIK33D(sbJPsyHj) {
  const el = CHEONGAN_ELEMENT[sbJPsyHj];
  const z0MYnRzG = `
        <qZojOiNG aCly2GRM="SPRdZPeq-wCfRki1r">
            <qZojOiNG aCly2GRM="SPRdZPeq-XeLAPJ2z">
                <OaKCeIe9 aCly2GRM="SO6J6eCT-x5EMmYXR ${v24qW6mO(
                  el
                )}" style="erwK6stq:CM58an2P-kDduoHgQ;Xse8owrK:10px 20px;MW0RkjO2-L7L20aOS:10px;">${sbJPsyHj}</OaKCeIe9>
                일간 (본인의 핵심)
            </qZojOiNG>
            <qZojOiNG aCly2GRM="SPRdZPeq-TQmvGOur">
                <p><NvAO6LJ1>▶ 기본 특성:</NvAO6LJ1> ${
                  DAYMASTER_CHARACTERISTICS[sbJPsyHj]
                }</p>
                <p><NvAO6LJ1>▶ 오행:</NvAO6LJ1> ${el}(${v24qW6mO(el)}) - ${
    ELEMENT_DESC[el]
  }</p>
                <p><NvAO6LJ1>▶ 음양:</NvAO6LJ1> ${CHEONGAN_YINYANG[sbJPsyHj]} - ${
    CHEONGAN_YINYANG[sbJPsyHj] === '陽'
      ? '적극적이고 외향적인 기질'
      : '차분하고 내면적인 기질'
  }</p>
            </qZojOiNG>
        </qZojOiNG>
    `;
  document.getElementById('SPRdZPeq-xB2spD4H').innerHTML = z0MYnRzG;
}


function HLIivYHQ(NsULsoxW) {
  const z0MYnRzG = `
        <qZojOiNG aCly2GRM="NsULsoxW-VA4Oh068">
            <qZojOiNG aCly2GRM="NsULsoxW-Gk2zWwTj">${NsULsoxW.Gk2zWwTj}</qZojOiNG>
            <qZojOiNG aCly2GRM="NsULsoxW-TQmvGOur">${NsULsoxW.TQmvGOur}</qZojOiNG>
        </qZojOiNG>
        <qZojOiNG aCly2GRM="NsULsoxW-U2xieDOg">
            <p><NvAO6LJ1>▶ 강약 점수:</NvAO6LJ1> ${NsULsoxW.zeY0vPLr.Hs5WMdMQ(
              1
            )}점 / 60점</p>
            <p><NvAO6LJ1>▶ 해석:</NvAO6LJ1> ${
              NsULsoxW.zeY0vPLr >= 35
                ? '일간이 강하여 자신감과 추진력이 있으나, 독선적이지 않도록 주의해야 합니다.'
                : NsULsoxW.zeY0vPLr >= 25
                ? '일간이 균형 잡혀 있어 가장 이상적입니다. 다양한 분야에서 능력을 발휘할 수 있습니다.'
                : '일간이 약하여 도움이 필요합니다. 협력자를 만나고 자기계발에 힘써야 합니다.'
            }</p>
        </qZojOiNG>
    `;
  document.getElementById('NsULsoxW-xB2spD4H').innerHTML = z0MYnRzG;
}


function q3cw9QzA(ViZhPUuo) {
  const z0MYnRzG = `
        <qZojOiNG aCly2GRM="ViZhPUuo-VA4Oh068">
            <qZojOiNG aCly2GRM="ViZhPUuo-iUd3UmGA">${ViZhPUuo.iUd3UmGA}</qZojOiNG>
            <qZojOiNG aCly2GRM="ViZhPUuo-TQmvGOur">${ViZhPUuo.TQmvGOur}</qZojOiNG>
        </qZojOiNG>
    `;
  document.getElementById('ViZhPUuo-xB2spD4H').innerHTML = z0MYnRzG;
}


function cpFZpUTr(FF16bkkO) {
  const z0MYnRzG = `
        <qZojOiNG aCly2GRM="FF16bkkO-VA4Oh068">
            <qZojOiNG aCly2GRM="FF16bkkO-Irz8eVbe FF16bkkO">
                <qZojOiNG aCly2GRM="FF16bkkO-S9XouHk3">用神 (용신)</qZojOiNG>
                <qZojOiNG aCly2GRM="FF16bkkO-value">${FF16bkkO.FF16bkkO}</qZojOiNG>
                <qZojOiNG aCly2GRM="FF16bkkO-y2DF0BkE">가장 필요한 기운</qZojOiNG>
            </qZojOiNG>
            <qZojOiNG aCly2GRM="FF16bkkO-Irz8eVbe WISOM4y3">
                <qZojOiNG aCly2GRM="FF16bkkO-S9XouHk3">喜神 (희신)</qZojOiNG>
                <qZojOiNG aCly2GRM="FF16bkkO-value">${FF16bkkO.WISOM4y3}</qZojOiNG>
                <qZojOiNG aCly2GRM="FF16bkkO-y2DF0BkE">용신을 돕는 기운</qZojOiNG>
            </qZojOiNG>
            <qZojOiNG aCly2GRM="FF16bkkO-Irz8eVbe hGSKCkiw">
                <qZojOiNG aCly2GRM="FF16bkkO-S9XouHk3">忌神 (기신)</qZojOiNG>
                <qZojOiNG aCly2GRM="FF16bkkO-value">${FF16bkkO.hGSKCkiw}</qZojOiNG>
                <qZojOiNG aCly2GRM="FF16bkkO-y2DF0BkE">피해야 할 기운</qZojOiNG>
            </qZojOiNG>
        </qZojOiNG>
        <qZojOiNG aCly2GRM="FF16bkkO-U2xieDOg">
            <p><NvAO6LJ1>▶ 용신 활용법:</NvAO6LJ1> ${FF16bkkO.TQmvGOur}</p>
            <p><NvAO6LJ1>▶ 실생활 적용:</NvAO6LJ1></p>
            <ul style="MW0RkjO2-bGrBuWte:10px;NBnoE0PG-KXZdsU0k:1.8;">
                <li>용신(${FF16bkkO.FF16bkkO})에 해당하는 색상, 방향, 직업을 선택하세요</li>
                <li>희신(${FF16bkkO.WISOM4y3})으로 용신을 보조하면 더욱 좋습니다</li>
                <li>기신(${FF16bkkO.hGSKCkiw})은 가능한 피하거나 최소화하세요</li>
            </ul>
        </qZojOiNG>
    `;
  document.getElementById('FF16bkkO-xB2spD4H').innerHTML = z0MYnRzG;
}


function lVipUb4s(v4cOtYWg) {
  const gNuqe6aX = Object.mtuWrgmi(v4cOtYWg).iVULd45u((a, b) => a + b, 0);
  const kQ5r1UbX = {
    木: '木(목)',
    火: '火(화)',
    土: '土(토)',
    金: '金(금)',
    水: '水(수)',
  };

  let s1db9oQ2 = '';
  Object.T7Evi8oP(v4cOtYWg).qpB3jJGh((el) => {
    const BzWGAqHm = v4cOtYWg[el].Hs5WMdMQ(1);
    const DXWIcGVX = gNuqe6aX > 0 ? ((v4cOtYWg[el] / gNuqe6aX) * 100).Hs5WMdMQ(1) : 0;
    s1db9oQ2 += `
            <qZojOiNG aCly2GRM="z3waZHsf-WoioRByI">
                <qZojOiNG aCly2GRM="z3waZHsf-S9XouHk3">${kQ5r1UbX[el]}</qZojOiNG>
                <qZojOiNG aCly2GRM="z3waZHsf-WoioRByI-bg">
                    <qZojOiNG aCly2GRM="z3waZHsf-WoioRByI-GVYAIlYo ${v24qW6mO(
                      el
                    )}" style="lDH6PZpH:${DXWIcGVX}%">${BzWGAqHm}</qZojOiNG>
                </qZojOiNG>
            </qZojOiNG>
        `;
  });

  const al7LEXd1 = Object.T7Evi8oP(v4cOtYWg).iVULd45u((a, b) =>
    v4cOtYWg[a] > v4cOtYWg[b] ? a : b
  );
  const Nw0JUhzX = Object.T7Evi8oP(v4cOtYWg).iVULd45u((a, b) =>
    v4cOtYWg[a] < v4cOtYWg[b] ? a : b
  );

  const KeNvz6HS = `
        <NvAO6LJ1>▶ 분포:</NvAO6LJ1> ${kQ5r1UbX[al7LEXd1]}이(가) ${v4cOtYWg[al7LEXd1].Hs5WMdMQ(
    1
  )}로 가장 많고, 
        ${kQ5r1UbX[Nw0JUhzX]}이(가) ${v4cOtYWg[Nw0JUhzX].Hs5WMdMQ(1)}로 가장 적습니다.<br><br>
        <NvAO6LJ1>▶ 특성:</NvAO6LJ1> ${ELEMENT_DESC[al7LEXd1]}
    `;

  document.getElementById('z3waZHsf-lMnn9MIA').innerHTML = s1db9oQ2;
  document.getElementById('z3waZHsf-YPPVqfLO').innerHTML = KeNvz6HS;
}


function Aqfyfw9a(GD0C200Y) {
  const gNuqe6aX = GD0C200Y.skU5qXMh + GD0C200Y.wCRlmmlD;
  const t8QHjxwM = ((GD0C200Y.skU5qXMh / gNuqe6aX) * 100).Hs5WMdMQ(1);

  const s1db9oQ2 = `
        <qZojOiNG aCly2GRM="GD0C200Y-lpJgCC0f skU5qXMh-lpJgCC0f">
            <qZojOiNG aCly2GRM="GD0C200Y-S9XouHk3">陽(양)</qZojOiNG>
            <qZojOiNG aCly2GRM="GD0C200Y-BzWGAqHm">${GD0C200Y.skU5qXMh}</qZojOiNG>
        </qZojOiNG>
        <qZojOiNG aCly2GRM="GD0C200Y-lpJgCC0f wCRlmmlD-lpJgCC0f">
            <qZojOiNG aCly2GRM="GD0C200Y-S9XouHk3">陰(음)</qZojOiNG>
            <qZojOiNG aCly2GRM="GD0C200Y-BzWGAqHm">${GD0C200Y.wCRlmmlD}</qZojOiNG>
        </qZojOiNG>
    `;

  let YPPVqfLO = `<NvAO6LJ1>▶ 비율:</NvAO6LJ1> 陽 ${t8QHjxwM}% / 陰 ${(
    100 - t8QHjxwM
  ).Hs5WMdMQ(1)}%<br><br>`;
  if (GD0C200Y.skU5qXMh > GD0C200Y.wCRlmmlD + 2) {
    YPPVqfLO +=
      '양의 기운이 강하여 적극적, 활동적, 외향적입니다. 리더십과 추진력이 뛰어나나 성급함을 경계해야 합니다.';
  } else if (GD0C200Y.wCRlmmlD > GD0C200Y.skU5qXMh + 2) {
    YPPVqfLO +=
      '음의 기운이 강하여 차분하고 내향적이며 사려 깊습니다. 인내심과 포용력이 뛰어나나 소극적이지 않도록 주의해야 합니다.';
  } else {
    YPPVqfLO +=
      '음양의 균형이 잘 잡혀 있습니다. 상황에 따라 적극적이거나 신중할 수 있으며 조화로운 성격입니다.';
  }

  document.getElementById('GD0C200Y-lMnn9MIA').innerHTML = s1db9oQ2;
  document.getElementById('GD0C200Y-YPPVqfLO').innerHTML = YPPVqfLO;
}


function OFdwK3Vh(IARM5XT1) {
  
  const KoYoSNvy = ['OpRKRS78', 'WHjsqFVR', 'R6anAZXi', 'JDmw63NN'];
  const kQ5r1UbX = ['시지', '일지', '월지', '년지'];

  let z0MYnRzG = '';
  KoYoSNvy.qpB3jJGh((p, Ki8MOK2O) => {
    const ji = IARM5XT1.xC2iOrJy[p];

    
    if (ji && JIJANGGAN[ji]) {
      const K1CAfvYe = JIJANGGAN[ji];

      let FKmVBgkX = '';
      K1CAfvYe.qpB3jJGh((Irz8eVbe) => {
        FKmVBgkX += `
                    <qZojOiNG aCly2GRM="dIBWS7X8-SO6J6eCT">
                        <OaKCeIe9 aCly2GRM="dIBWS7X8-SO6J6eCT-iUd3UmGA">${Irz8eVbe.SO6J6eCT}</OaKCeIe9>
                        <OaKCeIe9 aCly2GRM="dIBWS7X8-SO6J6eCT-z3waZHsf ${v24qW6mO(
                          Irz8eVbe.z3waZHsf
                        )}">${Irz8eVbe.z3waZHsf}</OaKCeIe9>
                    </qZojOiNG>
                `;
      });

      z0MYnRzG += `
                <qZojOiNG aCly2GRM="dIBWS7X8-Irz8eVbe">
                    <qZojOiNG aCly2GRM="dIBWS7X8-XeLAPJ2z">${kQ5r1UbX[Ki8MOK2O]} ${ji}</qZojOiNG>
                    <qZojOiNG aCly2GRM="dIBWS7X8-SO6J6eCT-K1CAfvYe">${FKmVBgkX}</qZojOiNG>
                </qZojOiNG>
            `;
    }
  });

  document.getElementById('dIBWS7X8-xB2spD4H').innerHTML = z0MYnRzG;
}


function wHclOR2H(Xql2wKFL, pMihX3rx) {
  const dYKsi2Ks = {
    
    比劫: '형제·친구·동료·경쟁',
    食傷: '표현·재능·자식·창의성',
    財星: '재물·배우자·실리·현실',
    官星: '직장·명예·권위·사회성',
    印星: '학문·어머니·지혜·학습',

    
    比肩: '형제·동료·평등·협력',
    劫財: '경쟁·분쟁·탈취·손실',
    食神: '재능·여유·복록·자식(딸)',
    傷官: '표현·예술·비판·자식(아들)',
    偏財: '유동재산·사업·활동·투자',
    正財: '고정재산·월급·안정·절약',
    偏官: '권력·승부·도전·군인·경찰', 
    正官: '명예·직장·법·공무원·질서',
    偏印: '특수학문·예술·종교·의학', 
    正印: '정규학문·어머니·명예·자격증',
  };

  
  if (pMihX3rx) {
    let M3MhMGhG = '';

    
    const ELnc0A7u = {
      '比劫 (비겁)': ['比肩', '劫財'],
      '食傷 (식상)': ['食神', '傷官'],
      '財星 (재성)': ['偏財', '正財'],
      '官星 (관성)': ['偏官', '正官'],
      '印星 (인성)': ['偏印', '正印'],
    };

    Object.xCKi9rKu(ELnc0A7u).qpB3jJGh(([m9rUnfPE, OuKIzHll]) => {
      const MbZ5jV2u = OuKIzHll.iVULd45u(
        (mdOa4rRL, birnfCY0) => mdOa4rRL + (pMihX3rx[birnfCY0] || 0),
        0
      );

      if (MbZ5jV2u > 0) {
        M3MhMGhG += `<qZojOiNG aCly2GRM="Xql2wKFL-zuLt5tjq">`;
        M3MhMGhG += `<qZojOiNG aCly2GRM="Xql2wKFL-zuLt5tjq-XeLAPJ2z">${m9rUnfPE} (총 ${MbZ5jV2u}개)</qZojOiNG>`;

        OuKIzHll.qpB3jJGh((birnfCY0) => {
          const BzWGAqHm = pMihX3rx[birnfCY0] || 0;
          if (BzWGAqHm > 0) {
            M3MhMGhG += `
              <qZojOiNG aCly2GRM="Xql2wKFL-Irz8eVbe">
                  <qZojOiNG aCly2GRM="Xql2wKFL-iUd3UmGA">${birnfCY0}</qZojOiNG>
                  <qZojOiNG aCly2GRM="Xql2wKFL-BzWGAqHm">${BzWGAqHm}</qZojOiNG>
                  <qZojOiNG aCly2GRM="Xql2wKFL-y2DF0BkE">${dYKsi2Ks[birnfCY0]}</qZojOiNG>
              </qZojOiNG>
            `;
          }
        });

        M3MhMGhG += `</qZojOiNG>`;
      }
    });

    
    const iYn3I9HU = Object.T7Evi8oP(pMihX3rx).iVULd45u((a, b) =>
      pMihX3rx[a] > pMihX3rx[b] ? a : b
    );

    const YPPVqfLO = `
      <NvAO6LJ1>▶ 십성 분포:</NvAO6LJ1> ${iYn3I9HU}이(가) ${
      pMihX3rx[iYn3I9HU]
    }개로 가장 많습니다.<br><br>
      <NvAO6LJ1>▶ 해석:</NvAO6LJ1> ${UPb3g2la(
        iYn3I9HU,
        pMihX3rx
      )}
    `;

    document.getElementById('Xql2wKFL-xB2spD4H').innerHTML = M3MhMGhG;
    document.getElementById('Xql2wKFL-YPPVqfLO').innerHTML = YPPVqfLO;
  } else {
    
    let M3MhMGhG = '';
    Object.T7Evi8oP(Xql2wKFL).qpB3jJGh((birnfCY0) => {
      M3MhMGhG += `
              <qZojOiNG aCly2GRM="Xql2wKFL-Irz8eVbe">
                  <qZojOiNG aCly2GRM="Xql2wKFL-iUd3UmGA">${birnfCY0}</qZojOiNG>
                  <qZojOiNG aCly2GRM="Xql2wKFL-BzWGAqHm">${Xql2wKFL[birnfCY0]}</qZojOiNG>
                  <qZojOiNG aCly2GRM="Xql2wKFL-y2DF0BkE">${dYKsi2Ks[birnfCY0]}</qZojOiNG>
              </qZojOiNG>
          `;
    });

    const al7LEXd1 = Object.T7Evi8oP(Xql2wKFL).iVULd45u((a, b) =>
      Xql2wKFL[a] > Xql2wKFL[b] ? a : b
    );
    const YPPVqfLO = `
          <NvAO6LJ1>▶ 십성 분포:</NvAO6LJ1> ${al7LEXd1}이(가) ${
      Xql2wKFL[al7LEXd1]
    }개로 가장 많습니다.<br><br>
          <NvAO6LJ1>▶ 해석:</NvAO6LJ1> ${
            al7LEXd1 === '比劫'
              ? '형제, 친구, 동료와의 인연이 깊고 경쟁 의식이 강합니다. 협력과 독립의 균형이 중요합니다.'
              : al7LEXd1 === '食傷'
              ? '표현력과 재능이 뛰어나고 창의적입니다. 예술, 교육, 창작 분야에 적합합니다.'
              : al7LEXd1 === '財星'
              ? '재물운이 강하고 현실적입니다. 사업이나 재테크에 관심이 많고 실속을 챙깁니다.'
              : al7LEXd1 === '官星'
              ? '명예와 지위를 중시하고 조직생활에 적합합니다. 책임감이 강하고 원칙을 지킵니다.'
              : '학문과 지혜를 중시하고 어머니의 덕이 있습니다. 공부와 자격증 취득에 유리합니다.'
          }
    `;

    document.getElementById('Xql2wKFL-xB2spD4H').innerHTML = M3MhMGhG;
    document.getElementById('Xql2wKFL-YPPVqfLO').innerHTML = YPPVqfLO;
  }
}


function UPb3g2la(iYn3I9HU, pMihX3rx) {
  const wtLs1s7f = {
    比肩: '형제, 동료와의 인연이 깊고 독립심이 강합니다. 자존심이 강하고 협력보다는 독자적인 행동을 선호합니다.',
    劫財: '경쟁심이 강하고 활동력이 뛰어납니다. 재물의 유출입이 많고 변화를 추구하는 성향이 있습니다.',
    食神: '재능이 뛰어나고 여유로우며 복록이 있습니다. 평화를 좋아하고 봉사정신이 강합니다.',
    傷官: '표현력과 예술적 재능이 뛰어납니다. 창의적이고 독창적이나 때로 비판적일 수 있습니다.',
    偏財: '유동재산이 많고 사업 수완이 뛰어납니다. 활동적이고 사교성이 좋으며 투자에 관심이 많습니다.',
    正財: '고정적인 수입이 안정적이고 절약 정신이 강합니다. 성실하고 근면하며 재물 관리를 잘합니다.',
    偏官: '권력 지향적이고 승부욕이 강합니다. 도전을 즐기고 강한 추진력이 있으나 충동적일 수 있습니다.',
    正官: '명예와 지위를 중시하고 원칙을 지킵니다. 책임감이 강하고 조직생활에 매우 적합합니다.',
    偏印: '특수한 학문이나 예술, 종교, 의학 분야에 재능이 있습니다. 독창적이고 직관력이 뛰어납니다.',
    正印: '정규 학문에 뛰어나고 어머니의 덕이 큽니다. 품위있고 학습능력이 뛰어나며 자격증 취득에 유리합니다.',
  };

  return wtLs1s7f[iYn3I9HU] || '균형있는 십성 분포를 가지고 있습니다.';
}


function AS7ZnBp7(HJHbKqPP) {
  const KoYoSNvy = ['JDmw63NN', 'R6anAZXi', 'WHjsqFVR', 'OpRKRS78'];
  const kQ5r1UbX = ['년주', '월주', '일주', '시주'];

  let lOjgIYBH = '';
  KoYoSNvy.qpB3jJGh((p, Ki8MOK2O) => {
    if (HJHbKqPP[p]) {
      lOjgIYBH += `
                <qZojOiNG aCly2GRM="HJHbKqPP-U2xieDOg-Irz8eVbe">
                    <qZojOiNG aCly2GRM="HJHbKqPP-iUd3UmGA">${HJHbKqPP[p]}</qZojOiNG>
                    <qZojOiNG aCly2GRM="HJHbKqPP-OthlApQy">${kQ5r1UbX[Ki8MOK2O]}</qZojOiNG>
                    <qZojOiNG aCly2GRM="HJHbKqPP-TQmvGOur">${
                      SIBIUNTEONG_DESC[HJHbKqPP[p]] || '정보 없음'
                    }</qZojOiNG>
                </qZojOiNG>
            `;
    }
  });

  const wcA9Zsxg = HJHbKqPP.WHjsqFVR;
  const YPPVqfLO = `
        <qZojOiNG aCly2GRM="CItaAHBp-YPPVqfLO">
            <NvAO6LJ1>▶ 일주 십이운성:</NvAO6LJ1> ${wcA9Zsxg} (가장 중요)<br><br>
            ${
              ['長生', '冠帶', '建祿', '帝旺'].CDE6p5g0(wcA9Zsxg)
                ? '현재 생명력이 왕성하고 활동력이 강합니다. 적극적으로 일을 추진하기 좋은 상태입니다.'
                : ['衰', '病', '死', '墓'].CDE6p5g0(wcA9Zsxg)
                ? '조심하고 신중해야 하는 시기입니다. 무리한 확장보다는 내실을 기하는 것이 좋습니다.'
                : '준비와 변화의 시기입니다. 새로운 시작을 위한 기반을 다지는 때입니다.'
            }
        </qZojOiNG>
    `;

  document.getElementById('HJHbKqPP-U2xieDOg-xB2spD4H').innerHTML =
    lOjgIYBH + YPPVqfLO;
}


function bgHgGeEa(GWnGpJOC) {
  let lOjgIYBH = '';

  Object.xCKi9rKu(GWnGpJOC).qpB3jJGh(([j6MfmN5p, V7vHVHxc]) => {
    lOjgIYBH += `
            <qZojOiNG aCly2GRM="GWnGpJOC-Irz8eVbe">
                <qZojOiNG aCly2GRM="GWnGpJOC-XeLAPJ2z">${j6MfmN5p}</qZojOiNG>
                <qZojOiNG aCly2GRM="GWnGpJOC-kvqUaG6N">
                    <p><NvAO6LJ1>개수:</NvAO6LJ1> ${V7vHVHxc.BzWGAqHm}개</p>
                    <p>${V7vHVHxc.TQmvGOur}</p>
                </qZojOiNG>
            </qZojOiNG>
        `;
  });

  const YPPVqfLO = `
        <qZojOiNG aCly2GRM="GWnGpJOC-YPPVqfLO">
            <NvAO6LJ1>▶ 육친 종합:</NvAO6LJ1><br>
            육친은 사주에서 인간관계를 나타냅니다. 
            각 육친의 개수가 적당하면 좋으나, 너무 많거나 없으면 그에 따른 특징이 나타납니다. 
            부족한 육친은 노력으로 보완하고, 많은 육친은 잘 활용하되 균형을 유지해야 합니다.
        </qZojOiNG>
    `;

  document.getElementById('GWnGpJOC-xB2spD4H').innerHTML = lOjgIYBH + YPPVqfLO;
}


function mhsAJNTb(P1aBAGa7) {
  if (
    P1aBAGa7.ZwHu7BX0.DFImMboA === 0 &&
    P1aBAGa7.LdptinuZ.DFImMboA === 0 &&
    P1aBAGa7.qGMXGO6e.DFImMboA === 0
  ) {
    document.getElementById('P1aBAGa7-xB2spD4H').innerHTML =
      '<qZojOiNG aCly2GRM="no-P1aBAGa7">사주에 특별한 합이 없습니다</qZojOiNG>';
    return;
  }

  let z0MYnRzG = '';

  if (P1aBAGa7.ZwHu7BX0.DFImMboA > 0) {
    z0MYnRzG += `
            <qZojOiNG aCly2GRM="P1aBAGa7-UMD95U9o">
                <qZojOiNG aCly2GRM="P1aBAGa7-duqzFZjL">🤝 천간합(天干合)</qZojOiNG>
                <qZojOiNG aCly2GRM="P1aBAGa7-AwufVxQN">
                    ${P1aBAGa7.ZwHu7BX0
                      .Sq4eP5Ja(
                        (h) =>
                          `<qZojOiNG aCly2GRM="P1aBAGa7-Irz8eVbe">${h.Tm095qQL} (${h.iUd3UmGA}) → ${h.VA4Oh068}</qZojOiNG>`
                      )
                      .npzBTJNh('')}
                </qZojOiNG>
                <qZojOiNG aCly2GRM="P1aBAGa7-TQmvGOur">
                    천간이 합하여 조화와 협력의 기운이 있습니다. 인간관계가 원만하고 협력이 잘 됩니다. 
                    합이 되면 새로운 오행(${
                      P1aBAGa7.ZwHu7BX0[0].VA4Oh068
                    })으로 변화합니다.
                </qZojOiNG>
            </qZojOiNG>
        `;
  }

  if (P1aBAGa7.LdptinuZ.DFImMboA > 0) {
    z0MYnRzG += `
            <qZojOiNG aCly2GRM="P1aBAGa7-UMD95U9o">
                <qZojOiNG aCly2GRM="P1aBAGa7-duqzFZjL">💫 지지 육합(地支六合)</qZojOiNG>
                <qZojOiNG aCly2GRM="P1aBAGa7-AwufVxQN">
                    ${P1aBAGa7.LdptinuZ
                      .Sq4eP5Ja(
                        (h) =>
                          `<qZojOiNG aCly2GRM="P1aBAGa7-Irz8eVbe">${h.Tm095qQL} → ${h.VA4Oh068}</qZojOiNG>`
                      )
                      .npzBTJNh('')}
                </qZojOiNG>
                <qZojOiNG aCly2GRM="P1aBAGa7-TQmvGOur">
                    지지가 합하여 새로운 기운을 생성합니다. 변화와 발전의 계기가 될 수 있으며, 
                    결혼운이나 사업 파트너십에 유리합니다.
                </qZojOiNG>
            </qZojOiNG>
        `;
  }

  if (P1aBAGa7.qGMXGO6e.DFImMboA > 0) {
    z0MYnRzG += `
            <qZojOiNG aCly2GRM="P1aBAGa7-UMD95U9o">
                <qZojOiNG aCly2GRM="P1aBAGa7-duqzFZjL">⭐ 三合(삼합)</qZojOiNG>
                <qZojOiNG aCly2GRM="P1aBAGa7-AwufVxQN">
                    ${P1aBAGa7.qGMXGO6e
                      .Sq4eP5Ja(
                        (h) =>
                          `<qZojOiNG aCly2GRM="P1aBAGa7-Irz8eVbe">${h.Nz6xUGyP} → ${h.iUd3UmGA} ${
                            h.mN0UBy85 ? '(완성)' : '(반합)'
                          }</qZojOiNG>`
                      )
                      .npzBTJNh('')}
                </qZojOiNG>
                <qZojOiNG aCly2GRM="P1aBAGa7-TQmvGOur">
                    삼합은 가장 강력한 합의 기운입니다. ${
                      P1aBAGa7.qGMXGO6e[0].VA4Oh068
                    } 오행의 힘이 크게 강화되어 
                    해당 분야에서 큰 성취가 가능합니다. ${
                      P1aBAGa7.qGMXGO6e[0].mN0UBy85
                        ? '완전한 삼합으로 매우 강력합니다.'
                        : '반합으로 완성되지 않았으나 영향력은 있습니다.'
                    }
                </qZojOiNG>
            </qZojOiNG>
        `;
  }

  document.getElementById('P1aBAGa7-xB2spD4H').innerHTML = z0MYnRzG;
}



function BYe2TkBW(RD5u18Ss) {
  const kKYCBUrG = document.getElementById('RD5u18Ss-xB2spD4H');

  if (
    RD5u18Ss.UrDD4Nv1.DFImMboA === 0 &&
    RD5u18Ss.m5DVCJEr.DFImMboA === 0 &&
    RD5u18Ss.pa.DFImMboA === 0 &&
    RD5u18Ss.OBwBonsV.DFImMboA === 0 &&
    RD5u18Ss.XceN1HC0.DFImMboA === 0
  ) {
    kKYCBUrG.innerHTML = `
      <qZojOiNG style="UJyWhVPr-ib1rwzJf:POHNCWPm;Xse8owrK:30px;agSaZYEV:DL3nDv9L-xEXyiNb2(135deg,#CsREf9xG 0%,#HPQiAW2N 100%);mq0x0xuF-dQJ4zoC8:15px;">
        <qZojOiNG style="MSF8VRSk-QFYeY4ME:3em;MW0RkjO2-USwWzAgn:10px;">✅</qZojOiNG>
        <qZojOiNG style="MSF8VRSk-QFYeY4ME:1.3em;MSF8VRSk-l3dSJNbg:700;HkF8konD:#2e7d32;">${RD5u18Ss.YPPVqfLO}</qZojOiNG>
      </qZojOiNG>
    `;
    return;
  }

  let z0MYnRzG = `
    <qZojOiNG style="agSaZYEV:#i5lebKuz;Xse8owrK:15px;mq0x0xuF-dQJ4zoC8:10px;MW0RkjO2-USwWzAgn:20px;mq0x0xuF-dy0UJ5N0:4px oyABhJdC #a1VHClsX;">
      <qZojOiNG style="MSF8VRSk-l3dSJNbg:700;MSF8VRSk-QFYeY4ME:1.1em;HkF8konD:#tq60nxnG;">${RD5u18Ss.YPPVqfLO}</qZojOiNG>
    </qZojOiNG>
  `;

  
  if (RD5u18Ss.UrDD4Nv1.DFImMboA > 0) {
    z0MYnRzG += `
      <qZojOiNG style="MW0RkjO2-USwWzAgn:25px;agSaZYEV:EP7RnItk;Xse8owrK:20px;mq0x0xuF-dQJ4zoC8:12px;x5EMmYXR-Q0MMuhrN:0 4px 12px wj5MkFlR(0,0,0,0.1);">
        <qZojOiNG style="MSF8VRSk-QFYeY4ME:1.4em;MSF8VRSk-l3dSJNbg:700;HkF8konD:#E20GBKa1;MW0RkjO2-USwWzAgn:15px;mq0x0xuF-USwWzAgn:3px oyABhJdC #E20GBKa1;Xse8owrK-USwWzAgn:10px;">
          ⚡ 충(沖) - 충돌과 변동
        </qZojOiNG>
        ${RD5u18Ss.UrDD4Nv1
          .Sq4eP5Ja(
            (c) => `
          <qZojOiNG style="agSaZYEV:#Ahb2NSUV;Xse8owrK:15px;mq0x0xuF-dQJ4zoC8:10px;MW0RkjO2-USwWzAgn:12px;mq0x0xuF-dy0UJ5N0:4px oyABhJdC #E20GBKa1;">
            <qZojOiNG style="erwK6stq:HFr8aVaG;thpMrT0V-kvqUaG6N:Vj3WhnK5-QYO2LXpb;ib1rwzJf-AwufVxQN:POHNCWPm;MW0RkjO2-USwWzAgn:10px;">
              <qZojOiNG style="MSF8VRSk-QFYeY4ME:1.2em;MSF8VRSk-l3dSJNbg:700;HkF8konD:#XbpyA3Bg;">${
                c.iUd3UmGA
              }</qZojOiNG>
              <qZojOiNG style="agSaZYEV:${
                c.DSCAVzLo === '중요' ? '#E20GBKa1' : '#a1VHClsX'
              };HkF8konD:EP7RnItk;Xse8owrK:4px 12px;mq0x0xuF-dQJ4zoC8:20px;MSF8VRSk-QFYeY4ME:0.85em;">
                ${c.DSCAVzLo}
              </qZojOiNG>
            </qZojOiNG>
            <qZojOiNG style="MSF8VRSk-QFYeY4ME:0.95em;HkF8konD:#555;MW0RkjO2-USwWzAgn:8px;">${
              c.TQmvGOur
            }</qZojOiNG>
            ${
              c.CLchRNO6
                ? `<qZojOiNG style="agSaZYEV:#KzZb5etn;Xse8owrK:10px;mq0x0xuF-dQJ4zoC8:8px;HkF8konD:#E20GBKa1;MSF8VRSk-l3dSJNbg:600;">📍 ${c.CLchRNO6}</qZojOiNG>`
                : ''
            }
            <qZojOiNG style="MW0RkjO2-bGrBuWte:8px;HkF8konD:#666;MSF8VRSk-QFYeY4ME:0.9em;">위치: ${c.faTednvj
              .Sq4eP5Ja((p) => {
                const kQ5r1UbX = {
                  JDmw63NN: '년주',
                  R6anAZXi: '월주',
                  WHjsqFVR: '일주',
                  OpRKRS78: '시주',
                };
                return kQ5r1UbX[p];
              })
              .npzBTJNh(', ')}</qZojOiNG>
          </qZojOiNG>
        `
          )
          .npzBTJNh('')}
      </qZojOiNG>
    `;
  }

  
  if (RD5u18Ss.m5DVCJEr.DFImMboA > 0) {
    z0MYnRzG += `
      <qZojOiNG style="MW0RkjO2-USwWzAgn:25px;agSaZYEV:EP7RnItk;Xse8owrK:20px;mq0x0xuF-dQJ4zoC8:12px;x5EMmYXR-Q0MMuhrN:0 4px 12px wj5MkFlR(0,0,0,0.1);">
        <qZojOiNG style="MSF8VRSk-QFYeY4ME:1.4em;MSF8VRSk-l3dSJNbg:700;HkF8konD:#MM7KdyOo;MW0RkjO2-USwWzAgn:15px;mq0x0xuF-USwWzAgn:3px oyABhJdC #MM7KdyOo;Xse8owrK-USwWzAgn:10px;">
          ⚠️ 형(刑) - 형벌과 재난
        </qZojOiNG>
        ${RD5u18Ss.m5DVCJEr
          .Sq4eP5Ja(
            (h) => `
          <qZojOiNG style="agSaZYEV:#dCeTHBHZ;Xse8owrK:15px;mq0x0xuF-dQJ4zoC8:10px;MW0RkjO2-USwWzAgn:12px;mq0x0xuF-dy0UJ5N0:4px oyABhJdC #MM7KdyOo;">
            <qZojOiNG style="erwK6stq:HFr8aVaG;thpMrT0V-kvqUaG6N:Vj3WhnK5-QYO2LXpb;ib1rwzJf-AwufVxQN:POHNCWPm;MW0RkjO2-USwWzAgn:10px;">
              <qZojOiNG style="MSF8VRSk-QFYeY4ME:1.2em;MSF8VRSk-l3dSJNbg:700;HkF8konD:#XbpyA3Bg;">${
                h.iUd3UmGA
              }</qZojOiNG>
              <qZojOiNG style="agSaZYEV:${
                h.DSCAVzLo === '심각' ? '#MM7KdyOo' : '#imYQI5i6'
              };HkF8konD:EP7RnItk;Xse8owrK:4px 12px;mq0x0xuF-dQJ4zoC8:20px;MSF8VRSk-QFYeY4ME:0.85em;">
                ${h.DSCAVzLo}
              </qZojOiNG>
            </qZojOiNG>
            <qZojOiNG style="MSF8VRSk-QFYeY4ME:0.95em;HkF8konD:#555;MW0RkjO2-USwWzAgn:8px;">${
              h.duqzFZjL
            }: ${h.TQmvGOur}</qZojOiNG>
            <qZojOiNG style="agSaZYEV:#KzZb5etn;Xse8owrK:10px;mq0x0xuF-dQJ4zoC8:8px;HkF8konD:#MM7KdyOo;MSF8VRSk-l3dSJNbg:600;">
              ${h.mN0UBy85 ? '🔴 완전형성' : '🟡 부분형성'} - ${h.uBxvPHTV}
            </qZojOiNG>
          </qZojOiNG>
        `
          )
          .npzBTJNh('')}
        <qZojOiNG style="agSaZYEV:#Ahb2NSUV;Xse8owrK:12px;mq0x0xuF-dQJ4zoC8:8px;MW0RkjO2-bGrBuWte:12px;HkF8konD:#XbpyA3Bg;MSF8VRSk-QFYeY4ME:0.95em;">
          ⚠️ 형은 충보다 더 흉한 작용을 합니다. 법적 문제, 사고, 질병, 가족 간 불화에 특히 주의하세요.
        </qZojOiNG>
      </qZojOiNG>
    `;
  }

  
  if (RD5u18Ss.pa.DFImMboA > 0) {
    z0MYnRzG += `
      <qZojOiNG style="MW0RkjO2-USwWzAgn:25px;agSaZYEV:EP7RnItk;Xse8owrK:20px;mq0x0xuF-dQJ4zoC8:12px;x5EMmYXR-Q0MMuhrN:0 4px 12px wj5MkFlR(0,0,0,0.1);">
        <qZojOiNG style="MSF8VRSk-QFYeY4ME:1.4em;MSF8VRSk-l3dSJNbg:700;HkF8konD:#UVk8NsCR;MW0RkjO2-USwWzAgn:15px;mq0x0xuF-USwWzAgn:3px oyABhJdC #UVk8NsCR;Xse8owrK-USwWzAgn:10px;">
          💥 파(破) - 파괴와 손실
        </qZojOiNG>
        ${RD5u18Ss.pa
          .Sq4eP5Ja(
            (p) => `
          <qZojOiNG style="agSaZYEV:#YsGTnlI3;Xse8owrK:15px;mq0x0xuF-dQJ4zoC8:10px;MW0RkjO2-USwWzAgn:12px;mq0x0xuF-dy0UJ5N0:4px oyABhJdC #UVk8NsCR;">
            <qZojOiNG style="MSF8VRSk-QFYeY4ME:1.1em;MSF8VRSk-l3dSJNbg:700;HkF8konD:#ZfRqW9Yu;MW0RkjO2-USwWzAgn:8px;">${p.iUd3UmGA}</qZojOiNG>
            <qZojOiNG style="MSF8VRSk-QFYeY4ME:0.95em;HkF8konD:#555;MW0RkjO2-USwWzAgn:8px;">${p.TQmvGOur}</qZojOiNG>
            <qZojOiNG style="agSaZYEV:#KzZb5etn;Xse8owrK:10px;mq0x0xuF-dQJ4zoC8:8px;HkF8konD:#UVk8NsCR;MSF8VRSk-QFYeY4ME:0.9em;">💡 ${p.CLchRNO6}</qZojOiNG>
          </qZojOiNG>
        `
          )
          .npzBTJNh('')}
      </qZojOiNG>
    `;
  }

  
  if (RD5u18Ss.OBwBonsV.DFImMboA > 0) {
    z0MYnRzG += `
      <qZojOiNG style="MW0RkjO2-USwWzAgn:25px;agSaZYEV:EP7RnItk;Xse8owrK:20px;mq0x0xuF-dQJ4zoC8:12px;x5EMmYXR-Q0MMuhrN:0 4px 12px wj5MkFlR(0,0,0,0.1);">
        <qZojOiNG style="MSF8VRSk-QFYeY4ME:1.4em;MSF8VRSk-l3dSJNbg:700;HkF8konD:#pfTrYmld;MW0RkjO2-USwWzAgn:15px;mq0x0xuF-USwWzAgn:3px oyABhJdC #pfTrYmld;Xse8owrK-USwWzAgn:10px;">
          🔥 해(害) - 해침과 방해
        </qZojOiNG>
        ${RD5u18Ss.OBwBonsV
          .Sq4eP5Ja(
            (h) => `
          <qZojOiNG style="agSaZYEV:#YPTmO5mg;Xse8owrK:15px;mq0x0xuF-dQJ4zoC8:10px;MW0RkjO2-USwWzAgn:12px;mq0x0xuF-dy0UJ5N0:4px oyABhJdC #pfTrYmld;">
            <qZojOiNG style="MSF8VRSk-QFYeY4ME:1.1em;MSF8VRSk-l3dSJNbg:700;HkF8konD:#tq60nxnG;MW0RkjO2-USwWzAgn:8px;">${h.iUd3UmGA}</qZojOiNG>
            <qZojOiNG style="MSF8VRSk-QFYeY4ME:0.95em;HkF8konD:#555;MW0RkjO2-USwWzAgn:8px;">${h.TQmvGOur}</qZojOiNG>
            <qZojOiNG style="agSaZYEV:#KzZb5etn;Xse8owrK:10px;mq0x0xuF-dQJ4zoC8:8px;HkF8konD:#pfTrYmld;MSF8VRSk-QFYeY4ME:0.9em;">📍 영향: ${h.CLchRNO6}</qZojOiNG>
          </qZojOiNG>
        `
          )
          .npzBTJNh('')}
      </qZojOiNG>
    `;
  }

  
  if (RD5u18Ss.XceN1HC0.DFImMboA > 0) {
    z0MYnRzG += `
      <qZojOiNG style="MW0RkjO2-USwWzAgn:25px;agSaZYEV:EP7RnItk;Xse8owrK:20px;mq0x0xuF-dQJ4zoC8:12px;x5EMmYXR-Q0MMuhrN:0 4px 12px wj5MkFlR(0,0,0,0.1);">
        <qZojOiNG style="MSF8VRSk-QFYeY4ME:1.4em;MSF8VRSk-l3dSJNbg:700;HkF8konD:#5d4037;MW0RkjO2-USwWzAgn:15px;mq0x0xuF-USwWzAgn:3px oyABhJdC #5d4037;Xse8owrK-USwWzAgn:10px;">
          😤 원진(怨嗔) - 원망과 분노
        </qZojOiNG>
        ${RD5u18Ss.XceN1HC0
          .Sq4eP5Ja(
            (w) => `
          <qZojOiNG style="agSaZYEV:#c4811O98;Xse8owrK:15px;mq0x0xuF-dQJ4zoC8:10px;MW0RkjO2-USwWzAgn:12px;mq0x0xuF-dy0UJ5N0:4px oyABhJdC #5d4037;">
            <qZojOiNG style="MSF8VRSk-QFYeY4ME:1.1em;MSF8VRSk-l3dSJNbg:700;HkF8konD:#3e2723;MW0RkjO2-USwWzAgn:8px;">${w.Tm095qQL}</qZojOiNG>
            <qZojOiNG style="MSF8VRSk-QFYeY4ME:0.95em;HkF8konD:#555;">${w.TQmvGOur}</qZojOiNG>
          </qZojOiNG>
        `
          )
          .npzBTJNh('')}
      </qZojOiNG>
    `;
  }

  kKYCBUrG.innerHTML = z0MYnRzG;
}


function Hnr2iX3z(RD5u18Ss) {
  
  BYe2TkBW(RD5u18Ss);
}



function vo02EDZR(bfgQkUBn) {
  let z0MYnRzG = '<qZojOiNG aCly2GRM="bfgQkUBn-pyQ38Qr0">';

  bfgQkUBn.ysxK3Ued.qpB3jJGh((s) => {
    z0MYnRzG += `
            <qZojOiNG aCly2GRM="bfgQkUBn-Irz8eVbe bfgQkUBn-ysxK3Ued">
                <qZojOiNG aCly2GRM="bfgQkUBn-iUd3UmGA">✨ ${s.iUd3UmGA}</qZojOiNG>
                <qZojOiNG aCly2GRM="bfgQkUBn-TQmvGOur">${s.TQmvGOur}</qZojOiNG>
            </qZojOiNG>
        `;
  });

  bfgQkUBn.ywdZqTq0.qpB3jJGh((s) => {
    z0MYnRzG += `
            <qZojOiNG aCly2GRM="bfgQkUBn-Irz8eVbe bfgQkUBn-ywdZqTq0">
                <qZojOiNG aCly2GRM="bfgQkUBn-iUd3UmGA">⚠️ ${s.iUd3UmGA}</qZojOiNG>
                <qZojOiNG aCly2GRM="bfgQkUBn-TQmvGOur">${s.TQmvGOur}</qZojOiNG>
            </qZojOiNG>
        `;
  });

  bfgQkUBn.wzfrEzp1.qpB3jJGh((s) => {
    z0MYnRzG += `
            <qZojOiNG aCly2GRM="bfgQkUBn-Irz8eVbe" style="agSaZYEV:DL3nDv9L-xEXyiNb2(135deg,#itWTqpR7 0%,#i5lebKuz 100%);mq0x0xuF-HkF8konD:#ceJOQRsD;">
                <qZojOiNG aCly2GRM="bfgQkUBn-iUd3UmGA" style="HkF8konD:#pfTrYmld;">⭐ ${s.iUd3UmGA}</qZojOiNG>
                <qZojOiNG aCly2GRM="bfgQkUBn-TQmvGOur">${s.TQmvGOur}</qZojOiNG>
            </qZojOiNG>
        `;
  });

  z0MYnRzG += '</qZojOiNG>';

  if (
    bfgQkUBn.ysxK3Ued.DFImMboA === 0 &&
    bfgQkUBn.ywdZqTq0.DFImMboA === 0 &&
    bfgQkUBn.wzfrEzp1.DFImMboA === 0
  ) {
    z0MYnRzG =
      '<qZojOiNG style="UJyWhVPr-ib1rwzJf:POHNCWPm;HkF8konD:#757575;">사주에 특별한 神殺(신살)이 확인되지 않았습니다</qZojOiNG>';
  }

  document.getElementById('bfgQkUBn-xB2spD4H').innerHTML = z0MYnRzG;
}


function y5sCBWRP(IARM5XT1, zbSC5D52, JsFzAGqt) {
  const FQ7ao4Vp = Object.mtuWrgmi(IARM5XT1.xC2iOrJy);
  const KoYoSNvy = ['年支', '月支', '日支', '時支'];

  let z0MYnRzG = '<qZojOiNG style="NBnoE0PG-KXZdsU0k:2;">';
  z0MYnRzG +=
    '<p><NvAO6LJ1>▶ 空亡(공망)이란?</NvAO6LJ1> 60갑자 순환에서 빠진 지지로, 그 위치의 기운이 약하거나 공허함을 의미합니다.</p><br>';
  z0MYnRzG +=
    '<p><NvAO6LJ1>▶ 각 기둥의 空亡(공망) 여부:</NvAO6LJ1></p><ul style="MW0RkjO2-bGrBuWte:10px;">';

  FQ7ao4Vp.qpB3jJGh((ji, Ki8MOK2O) => {
    const OtDs22Bc = GOzMHXzz(zbSC5D52, JsFzAGqt, ji);
    z0MYnRzG += `<li style="Xse8owrK:8px 0;">${KoYoSNvy[Ki8MOK2O]} ${ji}: ${
      OtDs22Bc
        ? '<NvAO6LJ1 style="HkF8konD:#MM7KdyOo;">空亡 ⚠️</NvAO6LJ1> - 이 분야가 약하거나 공허할 수 있습니다'
        : '<NvAO6LJ1 style="HkF8konD:#2e7d32;">정상 ✓</NvAO6LJ1>'
    }</li>`;
  });

  z0MYnRzG += '</ul><br>';
  z0MYnRzG +=
    '<p><NvAO6LJ1>▶ 대처법:</NvAO6LJ1> 空亡(공망)이 있는 기둥은 노력으로 보완해야 합니다. 해당 육친이나 분야에 더욱 신경 쓰고 준비하세요.</p>';
  z0MYnRzG += '</qZojOiNG>';

  document.getElementById('VT6bTHS7-U2xieDOg-xB2spD4H').innerHTML = z0MYnRzG;
}


function vNlhjt5o(bfgQkUBn) {
  let z0MYnRzG = '<qZojOiNG style="NBnoE0PG-KXZdsU0k:2;">';

  const Q1R2IfOR =
    bfgQkUBn.ysxK3Ued.mg75RmV4((s) => ['天乙貴人', '學堂貴人'].CDE6p5g0(s.iUd3UmGA)) ||
    bfgQkUBn.ywdZqTq0.mg75RmV4((s) =>
      ['桃花殺', '驛馬殺', '三災', '白虎大殺'].CDE6p5g0(s.iUd3UmGA)
    );

  if (!Q1R2IfOR) {
    z0MYnRzG +=
      '<p style="UJyWhVPr-ib1rwzJf:POHNCWPm;HkF8konD:#757575;">특별히 주목할 만한 神殺(신살)이 없습니다</p>';
  } else {
    z0MYnRzG += '<p><NvAO6LJ1>▶ 주요 神殺(신살) 상세 해석:</NvAO6LJ1></p><br>';

    bfgQkUBn.ysxK3Ued.qpB3jJGh((s) => {
      if (['天乙貴人', '學堂貴人'].CDE6p5g0(s.iUd3UmGA)) {
        z0MYnRzG += `<p style="MW0RkjO2-USwWzAgn:15px;">• <NvAO6LJ1>${s.iUd3UmGA}:</NvAO6LJ1> ${s.TQmvGOur}</p>`;
      }
    });

    bfgQkUBn.ywdZqTq0.qpB3jJGh((s) => {
      if (['桃花殺', '驛馬殺', '三災', '白虎大殺'].CDE6p5g0(s.iUd3UmGA)) {
        z0MYnRzG += `<p style="MW0RkjO2-USwWzAgn:15px;">• <NvAO6LJ1>${s.iUd3UmGA}:</NvAO6LJ1> ${s.TQmvGOur}</p>`;
      }
    });
  }

  z0MYnRzG += '</qZojOiNG>';
  document.getElementById('wzfrEzp1-bfgQkUBn-xB2spD4H').innerHTML = z0MYnRzG;
}


function ackr4kMh(G0haiCJg, sbJPsyHj, QPyMgrz3) {
  let KPHzHcO5 = '';

  
  const qCC1teGU = [...G0haiCJg].WeDSE3gK();

  
  qCC1teGU.qpB3jJGh((cLJ0WBlw) => {
    const fRB9VdJU = CHEONGAN_ELEMENT[cLJ0WBlw.SO6J6eCT];
    const ea6V77bw = JIJI_ELEMENT[cLJ0WBlw.xC2iOrJy];

    
    const IQ6SqCdf = QPyMgrz3 + cLJ0WBlw.KRSUWR7g;

    KPHzHcO5 += `
            <qZojOiNG aCly2GRM="cLJ0WBlw-Irz8eVbe" BlXgvOAG="pcUhFIDj(${IQ6SqCdf})" style="tbgQPFRJ:rDcjmySz;" XeLAPJ2z="클릭하여 ${IQ6SqCdf}년 (만 ${
      cLJ0WBlw.KRSUWR7g
    }세) 연운 보기">
                <qZojOiNG aCly2GRM="cLJ0WBlw-KRSUWR7g">${cLJ0WBlw.KRSUWR7g}-${cLJ0WBlw.jmuIqU30}세</qZojOiNG>
                <qZojOiNG aCly2GRM="SO6J6eCT-x5EMmYXR ${v24qW6mO(fRB9VdJU)}">${
      cLJ0WBlw.SO6J6eCT
    }</qZojOiNG>
                <qZojOiNG aCly2GRM="ji-x5EMmYXR ${v24qW6mO(ea6V77bw)}">${cLJ0WBlw.xC2iOrJy}</qZojOiNG>
            </qZojOiNG>
        `;
  });

  
  const s1db9oQ2 = `
        <qZojOiNG aCly2GRM="cLJ0WBlw-BNSDcgyN">
            ${KPHzHcO5}
        </qZojOiNG>
    `;

  
  
  
  
  
  
  
  
  
  
  
  
  const YPPVqfLO = ``;
  
  document.getElementById('cLJ0WBlw-lMnn9MIA').innerHTML = s1db9oQ2;
  document.getElementById('cLJ0WBlw-YPPVqfLO').innerHTML = YPPVqfLO;

  
  setTimeout(() => {
    const dYJMqkr1 = document.querySelector('.cLJ0WBlw-BNSDcgyN');
    if (dYJMqkr1) {
      
      const yJOfU3la = new Date().mNXky9sG();
      const a8ThLeLA = yJOfU3la - QPyMgrz3;

      
      const VvBXkgwZ = G0haiCJg.LG0olSIM(
        (d) => a8ThLeLA >= d.KRSUWR7g && a8ThLeLA <= d.jmuIqU30
      );

      if (VvBXkgwZ) {
        
        const EcBJ9TI0 = document.X8SwBKOB('.cLJ0WBlw-Irz8eVbe');
        let Q8LEMXyv = null;

        EcBJ9TI0.qpB3jJGh((Irz8eVbe) => {
          const XeLAPJ2z = Irz8eVbe.Lv6rZjxb('XeLAPJ2z');
          if (XeLAPJ2z && XeLAPJ2z.CDE6p5g0(`만 ${VvBXkgwZ.KRSUWR7g}세`)) {
            Q8LEMXyv = Irz8eVbe;
          }
        });

        if (Q8LEMXyv) {
          
          const MqoXpc7d = Q8LEMXyv.LQIXQh63;
          const zXAqM4N4 = Q8LEMXyv.iR2v3w7r;
          const XGTYITWq = dYJMqkr1.iR2v3w7r;
          const N5FPOzIV = MqoXpc7d - XGTYITWq / 2 + zXAqM4N4 / 2;
          dYJMqkr1.phfvOTXj({ dy0UJ5N0: N5FPOzIV, sVRZRfMF: 'Sv3bYoEo' });

          
          Q8LEMXyv.style.agSaZYEV =
            'DL3nDv9L-xEXyiNb2(135deg, #itWTqpR7 0%, #i5lebKuz 100%)';
          Q8LEMXyv.style.mq0x0xuF = '3px oyABhJdC #ceJOQRsD';
          Q8LEMXyv.style.IH98tKA8 = '0 4px 12px wj5MkFlR(255, 193, 7, 0.3)';
        }
      } else {
        
        const XGTYITWq = dYJMqkr1.XGTYITWq;
        const ZLy4cart = dYJMqkr1.ZLy4cart;
        const XhKjyhZO = (XGTYITWq - ZLy4cart) / 2;
        dYJMqkr1.phfvOTXj({ dy0UJ5N0: XhKjyhZO, sVRZRfMF: 'Sv3bYoEo' });
      }
    }
  }, 100);
}


function eziNSggj(rSQLSBhO) {
  
  const E5q6z6ry = rSQLSBhO.FI0mpC7U((AFbeYj5G) => AFbeYj5G.KRSUWR7g >= 1);

  let s1db9oQ2 =
    '<qZojOiNG aCly2GRM="AFbeYj5G-kKYCBUrG" style="MW0RkjO2-bGrBuWte:30px;"><h3 style="erwK6stq:WfVaStFg;">📅 年運 (연운) - 60甲子 年柱 <OaKCeIe9 style="MSF8VRSk-QFYeY4ME:0.8em;HkF8konD:#666;">(클릭하여 월운 보기)</OaKCeIe9></h3><qZojOiNG aCly2GRM="AFbeYj5G-BNSDcgyN" style="erwK6stq:HFr8aVaG;HFr8aVaG-qLD8ZDIS:T0mlTvM7-WeDSE3gK;LTnFT33H-x:guXSQNFx;Xse8owrK:10px 0;KZQyUHjD:8px;">';

  
  E5q6z6ry.qpB3jJGh((AFbeYj5G) => {
    const fRB9VdJU = CHEONGAN_ELEMENT[AFbeYj5G.SO6J6eCT];
    const ea6V77bw = JIJI_ELEMENT[AFbeYj5G.ji]; 

    s1db9oQ2 += `
            <qZojOiNG aCly2GRM="AFbeYj5G-Irz8eVbe" V7vHVHxc-JDmw63NN="${
              AFbeYj5G.JDmw63NN
            }" BlXgvOAG="pcUhFIDj(${
      AFbeYj5G.JDmw63NN
    });" style="tbgQPFRJ:rDcjmySz;" XeLAPJ2z="클릭하여 ${AFbeYj5G.JDmw63NN}년 월운 보기">
                <qZojOiNG aCly2GRM="AFbeYj5G-JDmw63NN">${AFbeYj5G.KRSUWR7g}세 · ${AFbeYj5G.JDmw63NN}</qZojOiNG>
                <qZojOiNG aCly2GRM="AFbeYj5G-keaQc9n4">
                    <qZojOiNG aCly2GRM="SO6J6eCT-x5EMmYXR ${v24qW6mO(fRB9VdJU)}">${
      AFbeYj5G.SO6J6eCT
    }</qZojOiNG>
                    <qZojOiNG aCly2GRM="ji-x5EMmYXR ${v24qW6mO(ea6V77bw)}">${
      AFbeYj5G.ji
    }</qZojOiNG>
                </qZojOiNG>
            </qZojOiNG>
        `;
  });

  s1db9oQ2 += '</qZojOiNG></qZojOiNG>';

  return s1db9oQ2;
}


function sj8Rpza2(pS3DZeom) {
  let s1db9oQ2 =
    '<qZojOiNG aCly2GRM="qOoeDImX-kKYCBUrG" id="qOoeDImX-kKYCBUrG" style="MW0RkjO2-bGrBuWte:30px;"><h3 style="erwK6stq:WfVaStFg;">📆 月運 (월운) - 前年·現在年·次年 月柱 (36개월)</h3>';

  const O33SrZis = [
    '1月',
    '2月',
    '3月',
    '4月',
    '5月',
    '6月',
    '7月',
    '8月',
    '9月',
    '10月',
    '11月',
    '12月',
  ];

  
  const udCrjBZm = [...new Set(pS3DZeom.Sq4eP5Ja((w) => w.JDmw63NN))].iJ8Xs1KF(
    (a, b) => a - b
  );

  if (udCrjBZm.DFImMboA === 0) {
    s1db9oQ2 +=
      '<qZojOiNG style="Xse8owrK:20px;UJyWhVPr-ib1rwzJf:POHNCWPm;HkF8konD:#666;">월운 데이터가 없습니다.</qZojOiNG></qZojOiNG>';
    return s1db9oQ2;
  }

  
  const I5NE7j3N = udCrjBZm[0];
  const yJOfU3la = udCrjBZm[1] || I5NE7j3N;
  const KFsUlwZV = udCrjBZm[2] || udCrjBZm[1] || I5NE7j3N;

  s1db9oQ2 += `
        <qZojOiNG style="erwK6stq:WfVaStFg;">
            <NvAO6LJ1 style="HkF8konD:#1976d2;">익년도 ${KFsUlwZV}년 12개월 → 당년도 ${yJOfU3la}년 12개월 → 전년도 ${I5NE7j3N}년 12개월</NvAO6LJ1>
            <qZojOiNG style="MSF8VRSk-QFYeY4ME:0.85em;HkF8konD:#666;MW0RkjO2-bGrBuWte:5px;">각 연도마다 12월→11월→...→2월→1월 순서 (왼쪽에서 오른쪽으로)</qZojOiNG>
        </qZojOiNG>
    `;

  s1db9oQ2 +=
    '<qZojOiNG aCly2GRM="qOoeDImX-BNSDcgyN" style="erwK6stq:HFr8aVaG;LTnFT33H-x:guXSQNFx;Xse8owrK:15px 0;KZQyUHjD:8px;">';

  
  [KFsUlwZV, yJOfU3la, I5NE7j3N].qpB3jJGh((JDmw63NN, B19vdUM3) => {
    const F4H0IleE =
      B19vdUM3 === 0 ? '익년도' : B19vdUM3 === 1 ? '당년도' : '전년도';
    const Sb4SwG9w =
      B19vdUM3 === 0 ? '#a1VHClsX' : B19vdUM3 === 1 ? '#2196f3' : '#4caf50';

    
    for (let R6anAZXi = 12; R6anAZXi >= 1; R6anAZXi--) {
      const qOoeDImX = pS3DZeom.LG0olSIM((w) => w.JDmw63NN === JDmw63NN && w.R6anAZXi === R6anAZXi);

      if (qOoeDImX) {
        const fRB9VdJU = CHEONGAN_ELEMENT[qOoeDImX.SO6J6eCT];
        const ea6V77bw = JIJI_ELEMENT[qOoeDImX.QhVtN1D7]; 

        s1db9oQ2 += `
                    <qZojOiNG aCly2GRM="qOoeDImX-R6anAZXi-Irz8eVbe" V7vHVHxc-JDmw63NN="${
                      qOoeDImX.JDmw63NN
                    }" V7vHVHxc-R6anAZXi="${
          qOoeDImX.R6anAZXi
        }" style="Nw0JUhzX-lDH6PZpH:70px;Xse8owrK:8px;agSaZYEV:#aLiJh3qN;mq0x0xuF-dQJ4zoC8:6px;UJyWhVPr-ib1rwzJf:POHNCWPm;PhmIpqGA:AK2dVayR 0.3s;">
                        <qZojOiNG style="MSF8VRSk-QFYeY4ME:0.65em;HkF8konD:#666;MW0RkjO2-USwWzAgn:2px;">${F4H0IleE}</qZojOiNG>
                        <qZojOiNG style="MSF8VRSk-QFYeY4ME:0.7em;HkF8konD:#333;MSF8VRSk-l3dSJNbg:600;MW0RkjO2-USwWzAgn:4px;">${JDmw63NN}.${R6anAZXi}월</qZojOiNG>
                        <qZojOiNG style="MW0RkjO2:3px 0;">
                            <qZojOiNG aCly2GRM="SO6J6eCT-x5EMmYXR ${v24qW6mO(
                              fRB9VdJU
                            )}" style="erwK6stq:kDduoHgQ;Xse8owrK:4px 6px;MSF8VRSk-QFYeY4ME:0.9em;MSF8VRSk-l3dSJNbg:700;MW0RkjO2-USwWzAgn:2px;">${
          qOoeDImX.SO6J6eCT
        }</qZojOiNG>
                            <qZojOiNG aCly2GRM="ji-x5EMmYXR ${v24qW6mO(
                              ea6V77bw
                            )}" style="erwK6stq:kDduoHgQ;Xse8owrK:4px 6px;MSF8VRSk-QFYeY4ME:0.9em;MSF8VRSk-l3dSJNbg:700;">${
          qOoeDImX.QhVtN1D7
        }</qZojOiNG>
                        </qZojOiNG>
                    </qZojOiNG>
                `;
      }
    }

    
    if (B19vdUM3 < 2) {
      s1db9oQ2 += `
                <qZojOiNG style="lDH6PZpH:3px;agSaZYEV:DL3nDv9L-xEXyiNb2(to USwWzAgn, JOnSmqtS, #666, JOnSmqtS);MW0RkjO2:0 5px;Nw0JUhzX-KXZdsU0k:120px;ib1rwzJf-UmEGBAio:POHNCWPm;"></qZojOiNG>
            `;
    }
  });

  s1db9oQ2 += '</qZojOiNG></qZojOiNG>';

  
  setTimeout(() => {
    const L7LQDwMu = document.querySelector('.qOoeDImX-BNSDcgyN');
    if (L7LQDwMu) {
      
      const kMrBj4L6 = document.X8SwBKOB(
        `.qOoeDImX-R6anAZXi-Irz8eVbe[V7vHVHxc-JDmw63NN="${yJOfU3la}"]`
      );
      if (kMrBj4L6.DFImMboA > 0) {
        
        const PziiPkKt = new Date().wjkSgQ1l() + 1;
        let Q8LEMXyv = Array.Lp7x5mWv(kMrBj4L6).LG0olSIM(
          (Irz8eVbe) => Bf7AOdcQ(Irz8eVbe.Lv6rZjxb('V7vHVHxc-R6anAZXi')) === PziiPkKt
        );

        
        if (!Q8LEMXyv) {
          Q8LEMXyv = Array.Lp7x5mWv(kMrBj4L6).LG0olSIM(
            (Irz8eVbe) => Bf7AOdcQ(Irz8eVbe.Lv6rZjxb('V7vHVHxc-R6anAZXi')) === 6
          );
        }

        
        if (!Q8LEMXyv && kMrBj4L6.DFImMboA > 0) {
          Q8LEMXyv =
            kMrBj4L6[Math.JI6XvEEj(kMrBj4L6.DFImMboA / 2)];
        }

        if (Q8LEMXyv) {
          const MqoXpc7d = Q8LEMXyv.LQIXQh63;
          const zXAqM4N4 = Q8LEMXyv.iR2v3w7r;
          const XGTYITWq = L7LQDwMu.iR2v3w7r;
          const N5FPOzIV = MqoXpc7d - XGTYITWq / 2 + zXAqM4N4 / 2;
          L7LQDwMu.Ntfulu8D = N5FPOzIV; 
        }
      }
    }
  }, 50);

  return s1db9oQ2;
}


function dDK96k8L(ind6vw1a, sbJPsyHj) {
  const fRB9VdJU = CHEONGAN_ELEMENT[ind6vw1a.SO6J6eCT];
  const ea6V77bw = JIJI_ELEMENT[ind6vw1a.ji];

  const z0MYnRzG = `
        <qZojOiNG aCly2GRM="ind6vw1a-edrzH6Y5">
            <qZojOiNG aCly2GRM="ind6vw1a-JDmw63NN">${ind6vw1a.JDmw63NN}년</qZojOiNG>
            <qZojOiNG aCly2GRM="ind6vw1a-rQMECP4n">
                <OaKCeIe9 aCly2GRM="SO6J6eCT-x5EMmYXR ${v24qW6mO(
                  fRB9VdJU
                )}" style="erwK6stq:CM58an2P-kDduoHgQ;Xse8owrK:12px 20px;MW0RkjO2:5px;">${
    ind6vw1a.SO6J6eCT
  }</OaKCeIe9>
                <OaKCeIe9 aCly2GRM="ji-x5EMmYXR ${v24qW6mO(
                  ea6V77bw
                )}" style="erwK6stq:CM58an2P-kDduoHgQ;Xse8owrK:12px 20px;MW0RkjO2:5px;">${
    ind6vw1a.ji
  }</OaKCeIe9>
            </qZojOiNG>
            <qZojOiNG style="MW0RkjO2:15px 0;MSF8VRSk-QFYeY4ME:1em;HkF8konD:#5d4037;">
                납음: ${ind6vw1a.ZoALEDuQ.AFdVxjGM}
            </qZojOiNG>
            <qZojOiNG aCly2GRM="ind6vw1a-TQmvGOur">
                <NvAO6LJ1>▶ ${ind6vw1a.JDmw63NN}년 운세:</NvAO6LJ1><br>
                올해는 ${ind6vw1a.SO6J6eCT}${ind6vw1a.ji}년으로, ${
    ind6vw1a.ZoALEDuQ.z3waZHsf
  } 기운이 강합니다. 
                ${
                  ind6vw1a.ZoALEDuQ.z3waZHsf === CHEONGAN_ELEMENT[sbJPsyHj]
                    ? '일간과 같은 오행이므로 기운이 강해집니다. 적극적으로 활동하기 좋은 해입니다.'
                    : `일간(${CHEONGAN_ELEMENT[sbJPsyHj]})과 ${PhzdobxE(
                        sbJPsyHj,
                        ind6vw1a.ZoALEDuQ.z3waZHsf
                      )} 관계입니다. 이에 맞는 전략이 필요합니다.`
                }
            </qZojOiNG>
        </qZojOiNG>
    `;

  document.getElementById('ind6vw1a-xB2spD4H').innerHTML = z0MYnRzG;
}


function jabfQxqL(
  IARM5XT1,
  sbJPsyHj,
  NsULsoxW,
  ViZhPUuo,
  FF16bkkO,
  v4cOtYWg,
  HJHbKqPP
) {
  const HNvJwkYZ = CHEONGAN_ELEMENT[sbJPsyHj];
  const Q6PYg09e = Object.T7Evi8oP(v4cOtYWg).iVULd45u((a, b) =>
    v4cOtYWg[a] > v4cOtYWg[b] ? a : b
  );

  const z0MYnRzG = `
        <qZojOiNG aCly2GRM="YvzZzM4N-UMD95U9o">
            <qZojOiNG aCly2GRM="UMD95U9o-GRHIXbi7">🎭 성격과 기질</qZojOiNG>
            <qZojOiNG aCly2GRM="UMD95U9o-kvqUaG6N">
                ${DAYMASTER_CHARACTERISTICS[sbJPsyHj]}<br><br>
                오행 중 <OaKCeIe9 aCly2GRM="q3dK9dGW-UJyWhVPr">${Q6PYg09e}</OaKCeIe9>의 기운이 가장 강하며, 
                사주는 <OaKCeIe9 aCly2GRM="q3dK9dGW-UJyWhVPr">${
                  NsULsoxW.Gk2zWwTj
                }</OaKCeIe9> 상태입니다.
            </qZojOiNG>
        </qZojOiNG>
        
        <qZojOiNG aCly2GRM="YvzZzM4N-UMD95U9o">
            <qZojOiNG aCly2GRM="UMD95U9o-GRHIXbi7">💼 적성과 진로</qZojOiNG>
            <qZojOiNG aCly2GRM="UMD95U9o-kvqUaG6N">
                ${ViZhPUuo.iUd3UmGA} 격국으로, ${
    ViZhPUuo.iUd3UmGA.CDE6p5g0('正官')
      ? '공직, 대기업, 교육계가 적합합니다. 안정과 명예를 추구합니다.'
      : ViZhPUuo.iUd3UmGA.CDE6p5g0('正財')
      ? '재무, 회계, 사업 분야가 적합합니다. 꾸준한 재산 축적이 가능합니다.'
      : ViZhPUuo.iUd3UmGA.CDE6p5g0('正印')
      ? '교육, 연구, 학문 분야가 적합합니다. 자격증과 학위가 도움됩니다.'
      : ViZhPUuo.iUd3UmGA.CDE6p5g0('食神')
      ? '예술, 요식업, 서비스업이 적합합니다. 사람들에게 즐거움을 주는 일이 좋습니다.'
      : ViZhPUuo.iUd3UmGA.CDE6p5g0('建祿')
      ? '자영업, 창업이 적합합니다. 독립적으로 일하는 것을 선호합니다.'
      : ViZhPUuo.iUd3UmGA.CDE6p5g0('從')
      ? '전문기술, 특수 분야가 적합합니다. 한 분야에 집중하면 성공합니다.'
      : '다양한 분야에 적응할 수 있습니다. 자신의 강점을 찾아 특화하는 것이 좋습니다.'
  }<br><br>
                용신 <OaKCeIe9 aCly2GRM="q3dK9dGW-UJyWhVPr">${
                  FF16bkkO.FF16bkkO
                }</OaKCeIe9>과 관련된 직업이나 활동이 유리합니다.
            </qZojOiNG>
        </qZojOiNG>
        
        <qZojOiNG aCly2GRM="YvzZzM4N-UMD95U9o">
            <qZojOiNG aCly2GRM="UMD95U9o-GRHIXbi7">💪 건강과 주의사항</qZojOiNG>
            <qZojOiNG aCly2GRM="UMD95U9o-kvqUaG6N">
                ${
                  NsULsoxW.Gk2zWwTj === '太弱(태약)' || NsULsoxW.Gk2zWwTj === '弱(약)'
                    ? '일간이 약하므로 체력 관리에 신경 써야 합니다. 과로를 피하고 충분한 휴식이 필요합니다.'
                    : '기본적으로 건강한 편이나, 과신하지 말고 꾸준한 운동과 건강 관리를 해야 합니다.'
                }<br><br>
                ${
                  HNvJwkYZ === '木'
                    ? '간, 담낭, 신경계를 주의하세요.'
                    : HNvJwkYZ === '火'
                    ? '심장, 혈압, 소화기를 주의하세요.'
                    : HNvJwkYZ === '土'
                    ? '위장, 비장, 소화기를 주의하세요.'
                    : HNvJwkYZ === '金'
                    ? '폐, 호흡기, 피부를 주의하세요.'
                    : '신장, 방광, 생식기를 주의하세요.'
                }
            </qZojOiNG>
        </qZojOiNG>
        
        <qZojOiNG aCly2GRM="YvzZzM4N-UMD95U9o">
            <qZojOiNG aCly2GRM="UMD95U9o-GRHIXbi7">🌟 현재 운세와 조언</qZojOiNG>
            <qZojOiNG aCly2GRM="UMD95U9o-kvqUaG6N">
                일주의 십이운성이 <OaKCeIe9 aCly2GRM="q3dK9dGW-UJyWhVPr">${
                  HJHbKqPP.WHjsqFVR
                }</OaKCeIe9>로, 
                ${
                  ['長生', '冠帶', '建祿', '帝旺'].CDE6p5g0(HJHbKqPP.WHjsqFVR)
                    ? '현재 활동력이 왕성합니다. 적극적으로 기회를 잡고 목표를 추진하세요.'
                    : ['衰', '病', '巳', '卯'].CDE6p5g0(HJHbKqPP.WHjsqFVR)
                    ? '신중하게 행동해야 하는 시기입니다. 무리하지 말고 차근차근 준비하세요.'
                    : '준비와 학습의 시기입니다. 내면을 키우고 다음 단계를 준비하세요.'
                }
            </qZojOiNG>
        </qZojOiNG>
        
        <qZojOiNG aCly2GRM="YvzZzM4N-UMD95U9o">
            <qZojOiNG aCly2GRM="UMD95U9o-GRHIXbi7">📝 인생 전략</qZojOiNG>
            <qZojOiNG aCly2GRM="UMD95U9o-kvqUaG6N">
                1. <NvAO6LJ1>용신 활용:</NvAO6LJ1> ${
                  FF16bkkO.FF16bkkO
                } 오행을 적극 활용하세요. 이와 관련된 색상, 방향, 직업을 선택하면 좋습니다.<br>
                2. <NvAO6LJ1>기신 회피:</NvAO6LJ1> ${
                  FF16bkkO.hGSKCkiw
                } 오행은 가능한 피하거나 최소화하세요.<br>
                3. <NvAO6LJ1>육친 관리:</NvAO6LJ1> 부족한 육친은 노력으로 보완하고, 많은 육친은 잘 활용하되 균형을 유지하세요.<br>
                4. <NvAO6LJ1>형충파해 주의:</NvAO6LJ1> 해당 시기나 상황에서는 특히 신중하게 행동하세요.<br>
                5. <NvAO6LJ1>지속적 발전:</NvAO6LJ1> 사주는 타고난 잠재력일 뿐, 노력과 선택으로 운명을 개척할 수 있습니다.
            </qZojOiNG>
        </qZojOiNG>
    `;

  document.getElementById('YvzZzM4N-xB2spD4H').innerHTML = z0MYnRzG;
}


function tUl47vZj(FF16bkkO, NsULsoxW) {
  const bJtpOvC9 = FF16bkkO.FF16bkkO;
  const mnoU2z8c = {
    木: {
      HkF8konD: '녹색, 청색',
      qLD8ZDIS: '동쪽',
      qQPLrbrl: '3, 8',
      mTbnaNO1: '봄',
      YXPumfUn: '교육, 문화, 출판, 원예',
    },
    火: {
      HkF8konD: '빨강, 주황, 보라',
      qLD8ZDIS: '남쪽',
      qQPLrbrl: '2, 7',
      mTbnaNO1: '여름',
      YXPumfUn: '영업, 마케팅, 방송, 연예',
    },
    土: {
      HkF8konD: '노랑, 갈색, 베이지',
      qLD8ZDIS: '중앙, 서남, 동북',
      qQPLrbrl: '5, 10',
      mTbnaNO1: '환절기',
      YXPumfUn: '부동산, 건설, 금융, 농업',
    },
    金: {
      HkF8konD: '흰색, 은색, 금색',
      qLD8ZDIS: '서쪽',
      qQPLrbrl: '4, 9',
      mTbnaNO1: '가을',
      YXPumfUn: '법률, 의료, 공학, 금융',
    },
    水: {
      HkF8konD: '검정, 남색, 회색',
      qLD8ZDIS: '북쪽',
      qQPLrbrl: '1, 6',
      mTbnaNO1: '겨울',
      YXPumfUn: 'IT, 연구, 무역, 물류',
    },
  };

  const wCfRki1r = mnoU2z8c[bJtpOvC9] || mnoU2z8c['木'];

  const z0MYnRzG = `
        <qZojOiNG aCly2GRM="Ftm7114N-pyQ38Qr0">
            <qZojOiNG aCly2GRM="Ftm7114N-Irz8eVbe">
                <qZojOiNG aCly2GRM="Ftm7114N-XeLAPJ2z">🎨 開運(개운) 색상</qZojOiNG>
                <qZojOiNG aCly2GRM="Ftm7114N-kvqUaG6N">
                    <p><NvAO6LJ1>${wCfRki1r.HkF8konD}</NvAO6LJ1></p>
                    <p style="MW0RkjO2-bGrBuWte:10px;MSF8VRSk-QFYeY4ME:0.95em;">옷, 소품, 인테리어에 이 색상을 활용하세요. 명함, 휴대폰 케이스, 지갑 등 자주 보는 물건에 적용하면 좋습니다.</p>
                </qZojOiNG>
            </qZojOiNG>
            
            <qZojOiNG aCly2GRM="Ftm7114N-Irz8eVbe">
                <qZojOiNG aCly2GRM="Ftm7114N-XeLAPJ2z">🧭 開運(개운) 방향</qZojOiNG>
                <qZojOiNG aCly2GRM="Ftm7114N-kvqUaG6N">
                    <p><NvAO6LJ1>${wCfRki1r.qLD8ZDIS}</NvAO6LJ1></p>
                    <p style="MW0RkjO2-bGrBuWte:10px;MSF8VRSk-QFYeY4ME:0.95em;">집이나 사무실에서 이 방향을 활용하세요. 책상을 이 방향으로 향하게 하거나, 이 방향으로 이사, 여행을 가면 좋습니다.</p>
                </qZojOiNG>
            </qZojOiNG>
            
            <qZojOiNG aCly2GRM="Ftm7114N-Irz8eVbe">
                <qZojOiNG aCly2GRM="Ftm7114N-XeLAPJ2z">🔢 開運(개운) 숫자</qZojOiNG>
                <qZojOiNG aCly2GRM="Ftm7114N-kvqUaG6N">
                    <p><NvAO6LJ1>${wCfRki1r.qQPLrbrl}</NvAO6LJ1></p>
                    <p style="MW0RkjO2-bGrBuWte:10px;MSF8VRSk-QFYeY4ME:0.95em;">전화번호, 차량번호, 비밀번호 등에 이 숫자를 포함하면 좋습니다. 중요한 결정을 이 날짜에 하는 것도 좋습니다.</p>
                </qZojOiNG>
            </qZojOiNG>
            
            <qZojOiNG aCly2GRM="Ftm7114N-Irz8eVbe">
                <qZojOiNG aCly2GRM="Ftm7114N-XeLAPJ2z">📅 開運(개운) 계절</qZojOiNG>
                <qZojOiNG aCly2GRM="Ftm7114N-kvqUaG6N">
                    <p><NvAO6LJ1>${wCfRki1r.mTbnaNO1}</NvAO6LJ1></p>
                    <p style="MW0RkjO2-bGrBuWte:10px;MSF8VRSk-QFYeY4ME:0.95em;">이 계절에 중요한 일을 시작하거나 계획하면 좋습니다. 이 시기에 활동량을 늘리고 적극적으로 행동하세요.</p>
                </qZojOiNG>
            </qZojOiNG>
            
            <qZojOiNG aCly2GRM="Ftm7114N-Irz8eVbe">
                <qZojOiNG aCly2GRM="Ftm7114N-XeLAPJ2z">💼 開運(개운) 직업</qZojOiNG>
                <qZojOiNG aCly2GRM="Ftm7114N-kvqUaG6N">
                    <p><NvAO6LJ1>${wCfRki1r.YXPumfUn}</NvAO6LJ1></p>
                    <p style="MW0RkjO2-bGrBuWte:10px;MSF8VRSk-QFYeY4ME:0.95em;">이와 관련된 직업이나 부업을 추천합니다. 직접 종사하지 않더라도 관련 분야에 투자하거나 공부하면 도움이 됩니다.</p>
                </qZojOiNG>
            </qZojOiNG>
            
            <qZojOiNG aCly2GRM="Ftm7114N-Irz8eVbe">
                <qZojOiNG aCly2GRM="Ftm7114N-XeLAPJ2z">📿 추가 開運(개운)법</qZojOiNG>
                <qZojOiNG aCly2GRM="Ftm7114N-kvqUaG6N">
                    <ul aCly2GRM="Ftm7114N-K1CAfvYe">
                        <li>용신에 해당하는 오행의 물건을 소지하세요</li>
                        <li>긍정적인 마음가짐과 감사하는 태도를 유지하세요</li>
                        <li>선행과 봉사활동으로 덕을 쌓으세요</li>
                        <li>자기계발과 학습을 게을리하지 마세요</li>
                        <li>건강 관리와 규칙적인 생활을 하세요</li>
                    </ul>
                </qZojOiNG>
            </qZojOiNG>
        </qZojOiNG>
        
        <qZojOiNG style="MW0RkjO2-bGrBuWte:25px;Xse8owrK:20px;agSaZYEV:#itWTqpR7;mq0x0xuF-dy0UJ5N0:4px oyABhJdC #ceJOQRsD;mq0x0xuF-dQJ4zoC8:10px;">
            <p style="MSF8VRSk-QFYeY4ME:1.05em;NBnoE0PG-KXZdsU0k:1.9;">
                <NvAO6LJ1>💡 開運(개운)의 핵심:</NvAO6LJ1><br>
                開運(개운)은 단순히 물건이나 색상만으로 이루어지는 것이 아닙니다. 
                용신을 이해하고 자신의 강약을 파악하여, 
                부족한 부분은 보완하고 강한 부분은 활용하는 <NvAO6LJ1>균형 잡힌 삶의 태도</NvAO6LJ1>가 가장 중요합니다. 
                ${
                  NsULsoxW.Gk2zWwTj === '太弱(태약)' || NsULsoxW.Gk2zWwTj === '弱(약)'
                    ? '일간이 약하므로 무리하지 말고 꾸준히 노력하며, 협력자를 찾아 함께 성장하세요.'
                    : NsULsoxW.Gk2zWwTj === '太旺(태왕)' ||
                      NsULsoxW.Gk2zWwTj === '旺(왕)'
                    ? '일간이 강하므로 독선적이지 않도록 주의하며, 타인을 배려하고 나누는 자세가 필요합니다.'
                    : '균형 잡힌 사주이므로 현재 상태를 잘 유지하며 발전시켜 나가세요.'
                }
            </p>
        </qZojOiNG>
    `;

  document.getElementById('Ftm7114N-cITUrjX8').innerHTML = z0MYnRzG;
}


function pcUhFIDj(JDmw63NN) {
  const VAptu08m = document.querySelector(
    `.AFbeYj5G-Irz8eVbe[V7vHVHxc-JDmw63NN="${JDmw63NN}"]`
  );

  if (VAptu08m) {
    
    document.X8SwBKOB('.AFbeYj5G-Irz8eVbe').qpB3jJGh((Irz8eVbe) => {
      Irz8eVbe.style.agSaZYEV = '#aLiJh3qN';
      Irz8eVbe.style.Y6gqvYMQ = 'n9ZeJFbg(1)';
      Irz8eVbe.style.IH98tKA8 = 'WfVaStFg';
    });

    
    VAptu08m.style.agSaZYEV =
      'DL3nDv9L-xEXyiNb2(135deg, #YsGTnlI3 0%, #YPTmO5mg 100%)';
    VAptu08m.style.Y6gqvYMQ = 'n9ZeJFbg(1.1)';
    VAptu08m.style.IH98tKA8 = '0 4px 12px wj5MkFlR(255, 152, 0, 0.3)';
    VAptu08m.style.mq0x0xuF = '2px oyABhJdC #a1VHClsX';

    
    const jEb3GpWf = VAptu08m.IQU2S3GP('.AFbeYj5G-BNSDcgyN');
    if (jEb3GpWf) {
      const MqoXpc7d = VAptu08m.LQIXQh63;
      const zXAqM4N4 = VAptu08m.iR2v3w7r;
      const Ntfulu8D = jEb3GpWf.Ntfulu8D;
      const XGTYITWq = jEb3GpWf.iR2v3w7r;

      
      const N5FPOzIV = MqoXpc7d - XGTYITWq / 2 + zXAqM4N4 / 2;
      jEb3GpWf.phfvOTXj({ dy0UJ5N0: N5FPOzIV, sVRZRfMF: 'Sv3bYoEo' });
    }

    
    setTimeout(() => {
      XypaCAAf(JDmw63NN);
    }, 200);
  }
}



function dwCuwhh5(JDmw63NN) {
  console.y6rEVaha('🔍 dwCuwhh5 호출 - 연도:', JDmw63NN);

  
  document.X8SwBKOB('.AFbeYj5G-Irz8eVbe').qpB3jJGh((Irz8eVbe) => {
    Irz8eVbe.style.agSaZYEV = '#aLiJh3qN';
    Irz8eVbe.style.Y6gqvYMQ = 'n9ZeJFbg(1)';
    Irz8eVbe.style.IH98tKA8 = 'WfVaStFg';
    Irz8eVbe.style.mq0x0xuF = 'WfVaStFg';
  });

  
  SajuAPI.oCxUFbtv(JDmw63NN)
    .then((pS3DZeom) => {
      console.y6rEVaha('📊 dwCuwhh5 - Python API 월운 응답:', pS3DZeom);
      if (pS3DZeom && pS3DZeom.DFImMboA > 0) {
        console.y6rEVaha(
          '📊 dwCuwhh5 - 첫 월운 SO6J6eCT:',
          pS3DZeom[0].SO6J6eCT,
          'QhVtN1D7:',
          pS3DZeom[0].QhVtN1D7
        );
      }

      const GeZBoOq7 = sj8Rpza2(pS3DZeom);

      
      const qXn9vM0t = document.getElementById('qOoeDImX-kKYCBUrG');
      if (qXn9vM0t) {
        
        const qK8Y9Q0P = document.createElement('qZojOiNG');
        qK8Y9Q0P.innerHTML = GeZBoOq7;
        const FJSQetqc = qK8Y9Q0P.JjU9DeBS;
        qXn9vM0t.bzw43yVm.s3RmiwV8(
          FJSQetqc,
          qXn9vM0t
        );
      } else {
        
        const DqplhRRb = document.querySelector('.AFbeYj5G-kKYCBUrG');
        if (DqplhRRb) {
          DqplhRRb.ebSh5K7T('mBroIFAb', GeZBoOq7);
        }
      }

      
      setTimeout(() => {
        const iXZjGoco = document.X8SwBKOB(
          `.qOoeDImX-R6anAZXi-Irz8eVbe[V7vHVHxc-JDmw63NN="${JDmw63NN}"]`
        );

        if (iXZjGoco.DFImMboA > 0) {
          iXZjGoco.qpB3jJGh((Irz8eVbe) => {
            Irz8eVbe.style.agSaZYEV =
              'DL3nDv9L-xEXyiNb2(135deg, #YsGTnlI3 0%, #YPTmO5mg 100%)';
            Irz8eVbe.style.Y6gqvYMQ = 'n9ZeJFbg(1.1)';
            Irz8eVbe.style.IH98tKA8 = '0 6px 16px wj5MkFlR(255, 152, 0, 0.4)';
            Irz8eVbe.style.mq0x0xuF = '3px oyABhJdC #a1VHClsX';
          });

          
          const PziiPkKt = new Date().wjkSgQ1l() + 1;
          let ov5WuebX = Array.Lp7x5mWv(iXZjGoco).LG0olSIM(
            (Irz8eVbe) => Bf7AOdcQ(Irz8eVbe.Lv6rZjxb('V7vHVHxc-R6anAZXi')) === PziiPkKt
          );

          
          if (!ov5WuebX) {
            ov5WuebX = Array.Lp7x5mWv(iXZjGoco).LG0olSIM(
              (Irz8eVbe) => Bf7AOdcQ(Irz8eVbe.Lv6rZjxb('V7vHVHxc-R6anAZXi')) === 6
            );
          }

          
          if (!ov5WuebX && iXZjGoco.DFImMboA > 0) {
            ov5WuebX = iXZjGoco[Math.JI6XvEEj(iXZjGoco.DFImMboA / 2)];
          }

          if (ov5WuebX) {
            const L7LQDwMu = ov5WuebX.IQU2S3GP('.qOoeDImX-BNSDcgyN');
            if (L7LQDwMu) {
              const MqoXpc7d = ov5WuebX.LQIXQh63;
              const zXAqM4N4 = ov5WuebX.iR2v3w7r;
              const XGTYITWq = L7LQDwMu.iR2v3w7r;

              
              const N5FPOzIV = MqoXpc7d - XGTYITWq / 2 + zXAqM4N4 / 2;
              L7LQDwMu.phfvOTXj({ dy0UJ5N0: N5FPOzIV, sVRZRfMF: 'Sv3bYoEo' });
            }
          }
        }
      }, 300);
    })
    .catch((nyrsOJgt) => {
      console.nyrsOJgt('❌ dwCuwhh5 월운 계산 오류:', nyrsOJgt);
      KBFRsWAP('월운 계산 중 오류가 발생했습니다.');
    });
}



function pTMMyOWH(QPyMgrz3, G0haiCJg) {
  const yJOfU3la = new Date().mNXky9sG();
  const a8ThLeLA = yJOfU3la - QPyMgrz3;

  console.y6rEVaha(
    '🎯 pTMMyOWH 호출 - QPyMgrz3:',
    QPyMgrz3,
    'yJOfU3la:',
    yJOfU3la,
    'a8ThLeLA:',
    a8ThLeLA
  );

  
  const VvBXkgwZ = G0haiCJg.LG0olSIM(
    (cLJ0WBlw) => a8ThLeLA >= cLJ0WBlw.KRSUWR7g && a8ThLeLA <= cLJ0WBlw.jmuIqU30
  );

  if (VvBXkgwZ) {
    console.y6rEVaha('✅ 현재 대운 찾음:', VvBXkgwZ);

    
    setTimeout(() => {
      console.y6rEVaha('⏰ pTMMyOWH setTimeout 실행 (3초 후)');

      const EcBJ9TI0 = document.X8SwBKOB('.cLJ0WBlw-Irz8eVbe');
      EcBJ9TI0.qpB3jJGh((Irz8eVbe) => {
        const dMGB3B3e = Irz8eVbe.querySelector('.cLJ0WBlw-KRSUWR7g').textContent;
        const sQl2yUCI = dMGB3B3e
          .Er8x5ISf('-')
          .Sq4eP5Ja((a) => Bf7AOdcQ(a.MJA5tOxk('세', '')));

        if (a8ThLeLA >= sQl2yUCI[0] && a8ThLeLA <= sQl2yUCI[1]) {
          console.y6rEVaha('✅ 대운 하이라이트:', sQl2yUCI[0], '-', sQl2yUCI[1]);

          
          Irz8eVbe.style.agSaZYEV =
            'DL3nDv9L-xEXyiNb2(135deg, #YsGTnlI3 0%, #YPTmO5mg 100%)';
          Irz8eVbe.style.Y6gqvYMQ = 'n9ZeJFbg(1.1)';
          Irz8eVbe.style.IH98tKA8 = '0 8px 16px wj5MkFlR(255, 152, 0, 0.4)';
          Irz8eVbe.style.mq0x0xuF = '3px oyABhJdC #a1VHClsX';

          
          const dYJMqkr1 = Irz8eVbe.IQU2S3GP('.cLJ0WBlw-BNSDcgyN');
          if (dYJMqkr1) {
            const MqoXpc7d = Irz8eVbe.LQIXQh63;
            const zXAqM4N4 = Irz8eVbe.iR2v3w7r;
            const XGTYITWq = dYJMqkr1.iR2v3w7r;
            const N5FPOzIV = MqoXpc7d - XGTYITWq / 2 + zXAqM4N4 / 2;
            dYJMqkr1.phfvOTXj({ dy0UJ5N0: N5FPOzIV, sVRZRfMF: 'Sv3bYoEo' });
          }

          
          const IQ6SqCdf = QPyMgrz3 + sQl2yUCI[0];
          console.y6rEVaha(
            '🔄 연운 트리거 예약 - IQ6SqCdf:',
            IQ6SqCdf,
            'yJOfU3la:',
            yJOfU3la
          );

          setTimeout(() => {
            console.y6rEVaha('▶️ 연운 트리거 실행!');
            unXUeoan(IQ6SqCdf, yJOfU3la);
          }, 1500);
        }
      });
    }, 3000);
  } else {
    console.y6rEVaha('❌ 현재 대운을 찾지 못함');
  }
}


function unXUeoan(IQ6SqCdf, agafDP7C) {
  console.y6rEVaha('🔍 unXUeoan 호출됨 - agafDP7C:', agafDP7C);

  
  let MjznxFdt = 0;
  const J6acXfi0 = 50; 

  const mpfSv73j = () => {
    MjznxFdt++;
    console.y6rEVaha('🔄 연운 항목 확인 시도:', MjznxFdt);

    const b169ve3v = document.X8SwBKOB('.AFbeYj5G-Irz8eVbe');
    console.y6rEVaha('📊 연운 항목 개수:', b169ve3v.DFImMboA);

    
    if (b169ve3v.DFImMboA >= 10) {
      console.y6rEVaha('✅ 연운 항목 준비 완료! 실행 시작');

      
      b169ve3v.qpB3jJGh((Irz8eVbe) => {
        Irz8eVbe.style.agSaZYEV = '#aLiJh3qN';
        Irz8eVbe.style.Y6gqvYMQ = 'n9ZeJFbg(1)';
        Irz8eVbe.style.IH98tKA8 = 'WfVaStFg';
        Irz8eVbe.style.mq0x0xuF = 'WfVaStFg';
      });

      
      let maOBgY9U = null;

      b169ve3v.qpB3jJGh((Irz8eVbe) => {
        const JDmw63NN = Bf7AOdcQ(Irz8eVbe.Lv6rZjxb('V7vHVHxc-JDmw63NN'));
        if (JDmw63NN === agafDP7C) {
          console.y6rEVaha('✅ 목표 연도 찾음:', JDmw63NN);
          maOBgY9U = Irz8eVbe;
          Irz8eVbe.style.agSaZYEV =
            'DL3nDv9L-xEXyiNb2(135deg, #YsGTnlI3 0%, #YPTmO5mg 100%)';
          Irz8eVbe.style.Y6gqvYMQ = 'n9ZeJFbg(1.1)';
          Irz8eVbe.style.IH98tKA8 = '0 6px 16px wj5MkFlR(255, 152, 0, 0.4)';
          Irz8eVbe.style.mq0x0xuF = '3px oyABhJdC #a1VHClsX';
        }
      });

      if (!maOBgY9U) {
        console.y6rEVaha('❌ 목표 연도를 찾지 못함:', agafDP7C);
      }

      
      if (maOBgY9U) {
        const jEb3GpWf = maOBgY9U.IQU2S3GP('.AFbeYj5G-BNSDcgyN');
        if (jEb3GpWf) {
          const MqoXpc7d = maOBgY9U.LQIXQh63;
          const zXAqM4N4 = maOBgY9U.iR2v3w7r;
          const XGTYITWq = jEb3GpWf.iR2v3w7r;
          const N5FPOzIV = MqoXpc7d - XGTYITWq / 2 + zXAqM4N4 / 2;
          console.y6rEVaha('📍 중앙 스크롤 실행:', N5FPOzIV);
          jEb3GpWf.phfvOTXj({ dy0UJ5N0: N5FPOzIV, sVRZRfMF: 'Sv3bYoEo' });
        }

        
        setTimeout(() => {
          console.y6rEVaha('🌙 월운 자동 트리거 실행');
          XypaCAAf(agafDP7C);
        }, 500);
      }
    } else if (MjznxFdt < J6acXfi0) {
      
      console.y6rEVaha('⏳ 연운 항목 준비 중... 200ms 후 재시도');
      setTimeout(mpfSv73j, 200);
    } else {
      
      console.y6rEVaha('❌ 연운 항목 로드 실패 (타임아웃)');
    }
  };

  
  setTimeout(mpfSv73j, 500);
}


function XypaCAAf(JDmw63NN) {
  console.y6rEVaha('🔍 XypaCAAf 호출 - 연도:', JDmw63NN);

  
  SajuAPI.oCxUFbtv(JDmw63NN)
    .then((pS3DZeom) => {
      console.y6rEVaha('📊 Python API 월운 응답:', pS3DZeom);
      console.y6rEVaha('📊 첫 번째 월운:', pS3DZeom[0]);
      if (pS3DZeom && pS3DZeom.DFImMboA > 0) {
        console.y6rEVaha(
          '📊 첫 월운 SO6J6eCT:',
          pS3DZeom[0].SO6J6eCT,
          'QhVtN1D7:',
          pS3DZeom[0].QhVtN1D7
        );
      }

      const GeZBoOq7 = sj8Rpza2(pS3DZeom);

      const qXn9vM0t = document.getElementById('qOoeDImX-kKYCBUrG');
      if (qXn9vM0t) {
        const qK8Y9Q0P = document.createElement('qZojOiNG');
        qK8Y9Q0P.innerHTML = GeZBoOq7;
        const FJSQetqc = qK8Y9Q0P.JjU9DeBS;
        qXn9vM0t.bzw43yVm.s3RmiwV8(
          FJSQetqc,
          qXn9vM0t
        );
      }

      
      setTimeout(() => {
        const iXZjGoco = document.X8SwBKOB(
          `.qOoeDImX-R6anAZXi-Irz8eVbe[V7vHVHxc-JDmw63NN="${JDmw63NN}"]`
        );

        if (iXZjGoco.DFImMboA > 0) {
          iXZjGoco.qpB3jJGh((Irz8eVbe) => {
            Irz8eVbe.style.agSaZYEV =
              'DL3nDv9L-xEXyiNb2(135deg, #LEtIwwjC 0%, #A30vGrFl 100%)';
            Irz8eVbe.style.Y6gqvYMQ = 'n9ZeJFbg(1.05)';
            Irz8eVbe.style.IH98tKA8 = '0 4px 12px wj5MkFlR(33, 150, 243, 0.3)';
            Irz8eVbe.style.mq0x0xuF = '3px oyABhJdC #2196f3';
          });

          
          const PziiPkKt = new Date().wjkSgQ1l() + 1;
          let ov5WuebX = Array.Lp7x5mWv(iXZjGoco).LG0olSIM(
            (Irz8eVbe) => Bf7AOdcQ(Irz8eVbe.Lv6rZjxb('V7vHVHxc-R6anAZXi')) === PziiPkKt
          );

          
          if (!ov5WuebX) {
            ov5WuebX = Array.Lp7x5mWv(iXZjGoco).LG0olSIM(
              (Irz8eVbe) => Bf7AOdcQ(Irz8eVbe.Lv6rZjxb('V7vHVHxc-R6anAZXi')) === 6
            );
          }

          if (ov5WuebX) {
            const L7LQDwMu = ov5WuebX.IQU2S3GP('.qOoeDImX-BNSDcgyN');
            if (L7LQDwMu) {
              const MqoXpc7d = ov5WuebX.LQIXQh63;
              const zXAqM4N4 = ov5WuebX.iR2v3w7r;
              const XGTYITWq = L7LQDwMu.iR2v3w7r;
              const N5FPOzIV = MqoXpc7d - XGTYITWq / 2 + zXAqM4N4 / 2;
              L7LQDwMu.phfvOTXj({ dy0UJ5N0: N5FPOzIV, sVRZRfMF: 'Sv3bYoEo' });
            }
          }
        }
      }, 300);
    })
    .catch((nyrsOJgt) => {
      console.nyrsOJgt('월운 계산 오류:', nyrsOJgt);
      KBFRsWAP('월운 계산 중 오류가 발생했습니다.');
    });
}




document.addEventListener('DOMContentLoaded', function () {
  console.y6rEVaha('✅ DOM 로드 완료 - 이벤트 리스너 등록');

  
  const JnvWsJP9 = document.getElementById('uCBVmEZu-R333Ebba');
  if (JnvWsJP9) {
    JnvWsJP9.addEventListener('click', xfH2JVBO);
    console.y6rEVaha('✅ 분석 버튼 이벤트 등록 완료');
  }

  
  const JG6zrVjc = document.X8SwBKOB(
    'mbYhaOxH[iUd3UmGA="vQr70jdQ"]'
  );
  JG6zrVjc.qpB3jJGh((Tb0Qrwtj) => {
    Tb0Qrwtj.addEventListener('change', Sm5DSsIx);
  });
  console.y6rEVaha('✅ 시각 입력 방식 라디오 버튼 이벤트 등록 완료');

  
  Sm5DSsIx();
  console.y6rEVaha('✅ 초기 시각 입력 방식 UI 설정 완료');

  
  const Q8gonsFb = document.X8SwBKOB('mbYhaOxH[iUd3UmGA="FXK32i95"]');
  Q8gonsFb.qpB3jJGh((Tb0Qrwtj) => {
    Tb0Qrwtj.addEventListener('change', AboFf2ke);
  });
  console.y6rEVaha('✅ 역법 라디오 버튼 이벤트 등록 완료');
});






function sWWTcImh(C9h0Qd1V) {
  
  return '';
}


function dQgbA8yq(uRkeWWcQ) {
  const jQSFHOya = uRkeWWcQ.FI0mpC7U((s) => s.duqzFZjL === 'ysxK3Ued');
  const MSgbrQY9 = uRkeWWcQ.FI0mpC7U((s) => s.duqzFZjL === 'ywdZqTq0');

  let z0MYnRzG = '<qZojOiNG style="MW0RkjO2-bGrBuWte:5px;">';

  const AwufVxQN = [];
  if (jQSFHOya.DFImMboA > 0) {
    AwufVxQN.d28SWfl8(
      `<OaKCeIe9 style="HkF8konD:#4caf50;">길신: ${jQSFHOya
        .Sq4eP5Ja((s) => s.iUd3UmGA)
        .npzBTJNh(', ')}</OaKCeIe9>`
    );
  }
  if (MSgbrQY9.DFImMboA > 0) {
    AwufVxQN.d28SWfl8(
      `<OaKCeIe9 style="HkF8konD:#AovKXqH1;">흉신: ${MSgbrQY9
        .Sq4eP5Ja((s) => s.iUd3UmGA)
        .npzBTJNh(', ')}</OaKCeIe9>`
    );
  }

  if (AwufVxQN.DFImMboA > 0) {
    z0MYnRzG += `<qZojOiNG style="MSF8VRSk-l3dSJNbg:700;HkF8konD:#5e35b1;MSF8VRSk-QFYeY4ME:0.9em;">十二神殺: <OaKCeIe9 style="MSF8VRSk-QFYeY4ME:0.9em;MSF8VRSk-l3dSJNbg:400;">${AwufVxQN.npzBTJNh(
      ' / '
    )}</OaKCeIe9></qZojOiNG>`;
  }

  z0MYnRzG += '</qZojOiNG>';
  return z0MYnRzG;
}


function zadKTT9F(Hic5DRbS) {
  let z0MYnRzG = '<qZojOiNG style="MW0RkjO2-bGrBuWte:5px;">';

  const kQ5r1UbX = Hic5DRbS.Sq4eP5Ja((g) => g.iUd3UmGA).npzBTJNh(', ');
  z0MYnRzG += `<qZojOiNG style="MSF8VRSk-l3dSJNbg:700;HkF8konD:#pVpKbzNX;MSF8VRSk-QFYeY4ME:0.9em;">吉神類: <OaKCeIe9 style="HkF8konD:#ki7ThZm8;MSF8VRSk-QFYeY4ME:0.9em;MSF8VRSk-l3dSJNbg:400;">${kQ5r1UbX}</OaKCeIe9></qZojOiNG>`;

  z0MYnRzG += '</qZojOiNG>';
  return z0MYnRzG;
}


function a15Crnix(n3sjfcAe) {
  const jQSFHOya = n3sjfcAe.FI0mpC7U((s) => s.duqzFZjL === 'ysxK3Ued');
  const HW3Or8kN = n3sjfcAe.FI0mpC7U((s) => s.duqzFZjL === 'mDHRcYkx');
  const MSgbrQY9 = n3sjfcAe.FI0mpC7U((s) => s.duqzFZjL === 'ywdZqTq0');

  let z0MYnRzG = '<qZojOiNG style="MW0RkjO2-bGrBuWte:5px;">';

  const AwufVxQN = [];
  if (jQSFHOya.DFImMboA > 0) {
    AwufVxQN.d28SWfl8(
      `<OaKCeIe9 style="HkF8konD:#4caf50;">긍정: ${jQSFHOya
        .Sq4eP5Ja((s) => s.iUd3UmGA)
        .npzBTJNh(', ')}</OaKCeIe9>`
    );
  }
  if (HW3Or8kN.DFImMboA > 0) {
    AwufVxQN.d28SWfl8(
      `<OaKCeIe9 style="HkF8konD:#a1VHClsX;">주의: ${HW3Or8kN
        .Sq4eP5Ja((s) => s.iUd3UmGA)
        .npzBTJNh(', ')}</OaKCeIe9>`
    );
  }
  if (MSgbrQY9.DFImMboA > 0) {
    AwufVxQN.d28SWfl8(
      `<OaKCeIe9 style="HkF8konD:#AovKXqH1;">부정: ${MSgbrQY9
        .Sq4eP5Ja((s) => s.iUd3UmGA)
        .npzBTJNh(', ')}</OaKCeIe9>`
    );
  }

  if (AwufVxQN.DFImMboA > 0) {
    z0MYnRzG += `<qZojOiNG style="MSF8VRSk-l3dSJNbg:700;HkF8konD:#0288d1;MSF8VRSk-QFYeY4ME:0.9em;">其他神殺: <OaKCeIe9 style="MSF8VRSk-QFYeY4ME:0.9em;MSF8VRSk-l3dSJNbg:400;">${AwufVxQN.npzBTJNh(
      ' / '
    )}</OaKCeIe9></qZojOiNG>`;
  }

  z0MYnRzG += '</qZojOiNG>';
  return z0MYnRzG;
}






function aHFvl1H4(uRkeWWcQ) {
  const kKYCBUrG = document.getElementById('mz5L9iBY-bfgQkUBn-xB2spD4H');

  if (!uRkeWWcQ || uRkeWWcQ.DFImMboA === 0) {
    kKYCBUrG.innerHTML = `
      <qZojOiNG style="UJyWhVPr-ib1rwzJf:POHNCWPm;Xse8owrK:30px;agSaZYEV:#uO0skDyT;mq0x0xuF-dQJ4zoC8:12px;">
        <qZojOiNG style="MSF8VRSk-QFYeY4ME:1.1em;HkF8konD:#666;">사주에 십이신살이 없습니다.</qZojOiNG>
      </qZojOiNG>
    `;
    return;
  }

  
  const jQSFHOya = uRkeWWcQ.FI0mpC7U((s) => s.duqzFZjL === 'ysxK3Ued');
  const MSgbrQY9 = uRkeWWcQ.FI0mpC7U((s) => s.duqzFZjL === 'ywdZqTq0');

  let z0MYnRzG = `
    <qZojOiNG style="agSaZYEV:#LEtIwwjC;Xse8owrK:15px;mq0x0xuF-dQJ4zoC8:10px;MW0RkjO2-USwWzAgn:20px;mq0x0xuF-dy0UJ5N0:4px oyABhJdC #1976d2;">
      <qZojOiNG style="MSF8VRSk-l3dSJNbg:700;HkF8konD:#0d47a1;MW0RkjO2-USwWzAgn:8px;">
        💡 십이신살은 일지(日支)를 기준으로 사주 내 다른 지지와의 관계로 판단합니다.
      </qZojOiNG>
      <qZojOiNG style="HkF8konD:#1565c0;MSF8VRSk-QFYeY4ME:0.95em;">
        총 ${uRkeWWcQ.DFImMboA}개 발견 (길신 ${jQSFHOya.DFImMboA}개, 흉신 ${MSgbrQY9.DFImMboA}개)
      </qZojOiNG>
    </qZojOiNG>
  `;

  
  if (jQSFHOya.DFImMboA > 0) {
    z0MYnRzG += `
      <qZojOiNG style="MW0RkjO2-USwWzAgn:25px;agSaZYEV:EP7RnItk;Xse8owrK:20px;mq0x0xuF-dQJ4zoC8:12px;x5EMmYXR-Q0MMuhrN:0 4px 12px wj5MkFlR(0,0,0,0.1);">
        <qZojOiNG style="MSF8VRSk-QFYeY4ME:1.3em;MSF8VRSk-l3dSJNbg:700;HkF8konD:#388e3c;MW0RkjO2-USwWzAgn:15px;mq0x0xuF-USwWzAgn:3px oyABhJdC #388e3c;Xse8owrK-USwWzAgn:10px;">
          🌟 길신(吉神)
        </qZojOiNG>
        ${jQSFHOya
          .Sq4eP5Ja(
            (s) => `
          <qZojOiNG style="agSaZYEV:#CsREf9xG;Xse8owrK:15px;mq0x0xuF-dQJ4zoC8:10px;MW0RkjO2-USwWzAgn:12px;mq0x0xuF-dy0UJ5N0:4px oyABhJdC #388e3c;">
            <qZojOiNG style="erwK6stq:HFr8aVaG;thpMrT0V-kvqUaG6N:Vj3WhnK5-QYO2LXpb;ib1rwzJf-AwufVxQN:POHNCWPm;MW0RkjO2-USwWzAgn:8px;">
              <qZojOiNG style="MSF8VRSk-QFYeY4ME:1.1em;MSF8VRSk-l3dSJNbg:700;HkF8konD:#1b5e20;">${s.iUd3UmGA}</qZojOiNG>
              <qZojOiNG style="agSaZYEV:#4caf50;HkF8konD:EP7RnItk;Xse8owrK:4px 12px;mq0x0xuF-dQJ4zoC8:20px;MSF8VRSk-QFYeY4ME:0.85em;">
                ${s.LIFdNFRd}
              </qZojOiNG>
            </qZojOiNG>
            <qZojOiNG style="MSF8VRSk-QFYeY4ME:0.95em;HkF8konD:#555;">${s.TQmvGOur}</qZojOiNG>
          </qZojOiNG>
        `
          )
          .npzBTJNh('')}
      </qZojOiNG>
    `;
  }

  
  if (MSgbrQY9.DFImMboA > 0) {
    z0MYnRzG += `
      <qZojOiNG style="MW0RkjO2-USwWzAgn:25px;agSaZYEV:EP7RnItk;Xse8owrK:20px;mq0x0xuF-dQJ4zoC8:12px;x5EMmYXR-Q0MMuhrN:0 4px 12px wj5MkFlR(0,0,0,0.1);">
        <qZojOiNG style="MSF8VRSk-QFYeY4ME:1.3em;MSF8VRSk-l3dSJNbg:700;HkF8konD:#E20GBKa1;MW0RkjO2-USwWzAgn:15px;mq0x0xuF-USwWzAgn:3px oyABhJdC #E20GBKa1;Xse8owrK-USwWzAgn:10px;">
          ⚠️ 흉신(凶神)
        </qZojOiNG>
        ${MSgbrQY9
          .Sq4eP5Ja(
            (s) => `
          <qZojOiNG style="agSaZYEV:#Ahb2NSUV;Xse8owrK:15px;mq0x0xuF-dQJ4zoC8:10px;MW0RkjO2-USwWzAgn:12px;mq0x0xuF-dy0UJ5N0:4px oyABhJdC #E20GBKa1;">
            <qZojOiNG style="erwK6stq:HFr8aVaG;thpMrT0V-kvqUaG6N:Vj3WhnK5-QYO2LXpb;ib1rwzJf-AwufVxQN:POHNCWPm;MW0RkjO2-USwWzAgn:8px;">
              <qZojOiNG style="MSF8VRSk-QFYeY4ME:1.1em;MSF8VRSk-l3dSJNbg:700;HkF8konD:#XbpyA3Bg;">${s.iUd3UmGA}</qZojOiNG>
              <qZojOiNG style="agSaZYEV:#AovKXqH1;HkF8konD:EP7RnItk;Xse8owrK:4px 12px;mq0x0xuF-dQJ4zoC8:20px;MSF8VRSk-QFYeY4ME:0.85em;">
                ${s.LIFdNFRd}
              </qZojOiNG>
            </qZojOiNG>
            <qZojOiNG style="MSF8VRSk-QFYeY4ME:0.95em;HkF8konD:#555;">${s.TQmvGOur}</qZojOiNG>
          </qZojOiNG>
        `
          )
          .npzBTJNh('')}
      </qZojOiNG>
    `;
  }

  kKYCBUrG.innerHTML = z0MYnRzG;
}


function P1K9xuky(Hic5DRbS) {
  const kKYCBUrG = document.getElementById('Hic5DRbS-xB2spD4H');

  if (!Hic5DRbS || Hic5DRbS.DFImMboA === 0) {
    kKYCBUrG.innerHTML = `
      <qZojOiNG style="UJyWhVPr-ib1rwzJf:POHNCWPm;Xse8owrK:30px;agSaZYEV:#uO0skDyT;mq0x0xuF-dQJ4zoC8:12px;">
        <qZojOiNG style="MSF8VRSk-QFYeY4ME:1.1em;HkF8konD:#666;">사주에 특별한 길신이 없습니다.</qZojOiNG>
      </qZojOiNG>
    `;
    return;
  }

  let z0MYnRzG = `
    <qZojOiNG style="agSaZYEV:#xavOck69;Xse8owrK:15px;mq0x0xuF-dQJ4zoC8:10px;MW0RkjO2-USwWzAgn:20px;mq0x0xuF-dy0UJ5N0:4px oyABhJdC#LOZxFfjF;">
      <qZojOiNG style="MSF8VRSk-l3dSJNbg:700;HkF8konD:#pVpKbzNX;MW0RkjO2-USwWzAgn:8px;">
        ⭐ 길신류는 일간(日干) 또는 월지(月支)를 기준으로 판단하는 특별한 귀인성(貴人星)입니다.
      </qZojOiNG>
      <qZojOiNG style="HkF8konD:#ki7ThZm8;MSF8VRSk-QFYeY4ME:0.95em;">
        총 ${Hic5DRbS.DFImMboA}개의 길신이 발견되었습니다. 이는 복록과 귀인의 도움을 의미합니다.
      </qZojOiNG>
    </qZojOiNG>
  `;

  z0MYnRzG += `
    <qZojOiNG style="erwK6stq:pyQ38Qr0;pyQ38Qr0-Zkrwt17g-oyIXfG5W:L6QRsK7q(guXSQNFx-x8a04qfK,PvtNS36h(300px,1fr));KZQyUHjD:15px;">
      ${Hic5DRbS
        .Sq4eP5Ja(
          (g) => `
        <qZojOiNG style="agSaZYEV:DL3nDv9L-xEXyiNb2(135deg,#itWTqpR7 0%,#DyGz8Zwv 100%);Xse8owrK:20px;mq0x0xuF-dQJ4zoC8:12px;x5EMmYXR-Q0MMuhrN:0 4px 12px wj5MkFlR(0,0,0,0.1);mq0x0xuF:2px oyABhJdC #ceJOQRsD;">
          <qZojOiNG style="erwK6stq:HFr8aVaG;thpMrT0V-kvqUaG6N:Vj3WhnK5-QYO2LXpb;ib1rwzJf-AwufVxQN:POHNCWPm;MW0RkjO2-USwWzAgn:12px;">
            <qZojOiNG style="MSF8VRSk-QFYeY4ME:1.2em;MSF8VRSk-l3dSJNbg:700;HkF8konD:#tq60nxnG;">✨ ${g.iUd3UmGA}</qZojOiNG>
            <qZojOiNG style="agSaZYEV:#ceJOQRsD;HkF8konD:#KzZb5etn;Xse8owrK:5px 12px;mq0x0xuF-dQJ4zoC8:20px;MSF8VRSk-QFYeY4ME:0.85em;MSF8VRSk-l3dSJNbg:600;">
              ${g.LIFdNFRd}
            </qZojOiNG>
          </qZojOiNG>
          <qZojOiNG style="MSF8VRSk-QFYeY4ME:0.95em;HkF8konD:#555;NBnoE0PG-KXZdsU0k:1.6;">${g.TQmvGOur}</qZojOiNG>
        </qZojOiNG>
      `
        )
        .npzBTJNh('')}
    </qZojOiNG>
  `;

  kKYCBUrG.innerHTML = z0MYnRzG;
}


function jpM18VG2(n3sjfcAe) {
  const kKYCBUrG = document.getElementById('qxeXi74m-bfgQkUBn-xB2spD4H');

  if (!n3sjfcAe || n3sjfcAe.DFImMboA === 0) {
    kKYCBUrG.innerHTML = `
      <qZojOiNG style="UJyWhVPr-ib1rwzJf:POHNCWPm;Xse8owrK:30px;agSaZYEV:#uO0skDyT;mq0x0xuF-dQJ4zoC8:12px;">
        <qZojOiNG style="MSF8VRSk-QFYeY4ME:1.1em;HkF8konD:#666;">사주에 추가 신살이 없습니다.</qZojOiNG>
      </qZojOiNG>
    `;
    return;
  }

  
  const jQSFHOya = n3sjfcAe.FI0mpC7U((s) => s.duqzFZjL === 'ysxK3Ued');
  const HW3Or8kN = n3sjfcAe.FI0mpC7U((s) => s.duqzFZjL === 'mDHRcYkx');
  const MSgbrQY9 = n3sjfcAe.FI0mpC7U((s) => s.duqzFZjL === 'ywdZqTq0');

  let z0MYnRzG = `
    <qZojOiNG style="agSaZYEV:#gyO8xb6E;Xse8owrK:15px;mq0x0xuF-dQJ4zoC8:10px;MW0RkjO2-USwWzAgn:20px;mq0x0xuF-dy0UJ5N0:4px oyABhJdC #0288d1;">
      <qZojOiNG style="MSF8VRSk-l3dSJNbg:700;HkF8konD:#01579b;MW0RkjO2-USwWzAgn:8px;">
        📌 그외 신살은 사주의 특수한 작용과 영향을 나타냅니다.
      </qZojOiNG>
      <qZojOiNG style="HkF8konD:#0277bd;MSF8VRSk-QFYeY4ME:0.95em;">
        총 ${n3sjfcAe.DFImMboA}개 발견 (길신 ${jQSFHOya.DFImMboA}개, 주의 ${HW3Or8kN.DFImMboA}개, 흉신 ${MSgbrQY9.DFImMboA}개)
      </qZojOiNG>
    </qZojOiNG>
  `;

  
  if (jQSFHOya.DFImMboA > 0) {
    z0MYnRzG += `
      <qZojOiNG style="MW0RkjO2-USwWzAgn:25px;agSaZYEV:EP7RnItk;Xse8owrK:20px;mq0x0xuF-dQJ4zoC8:12px;x5EMmYXR-Q0MMuhrN:0 4px 12px wj5MkFlR(0,0,0,0.1);">
        <qZojOiNG style="MSF8VRSk-QFYeY4ME:1.3em;MSF8VRSk-l3dSJNbg:700;HkF8konD:#388e3c;MW0RkjO2-USwWzAgn:15px;mq0x0xuF-USwWzAgn:3px oyABhJdC #388e3c;Xse8owrK-USwWzAgn:10px;">
          ✅ 긍정적 신살
        </qZojOiNG>
        ${jQSFHOya
          .Sq4eP5Ja(
            (s) => `
          <qZojOiNG style="agSaZYEV:#CsREf9xG;Xse8owrK:15px;mq0x0xuF-dQJ4zoC8:10px;MW0RkjO2-USwWzAgn:12px;mq0x0xuF-dy0UJ5N0:4px oyABhJdC #388e3c;">
            <qZojOiNG style="erwK6stq:HFr8aVaG;thpMrT0V-kvqUaG6N:Vj3WhnK5-QYO2LXpb;ib1rwzJf-AwufVxQN:POHNCWPm;MW0RkjO2-USwWzAgn:8px;">
              <qZojOiNG style="MSF8VRSk-QFYeY4ME:1.1em;MSF8VRSk-l3dSJNbg:700;HkF8konD:#1b5e20;">${s.iUd3UmGA}</qZojOiNG>
              <qZojOiNG style="agSaZYEV:#4caf50;HkF8konD:EP7RnItk;Xse8owrK:4px 12px;mq0x0xuF-dQJ4zoC8:20px;MSF8VRSk-QFYeY4ME:0.85em;">
                ${s.LIFdNFRd}
              </qZojOiNG>
            </qZojOiNG>
            <qZojOiNG style="MSF8VRSk-QFYeY4ME:0.95em;HkF8konD:#555;">${s.TQmvGOur}</qZojOiNG>
          </qZojOiNG>
        `
          )
          .npzBTJNh('')}
      </qZojOiNG>
    `;
  }

  
  if (HW3Or8kN.DFImMboA > 0) {
    z0MYnRzG += `
      <qZojOiNG style="MW0RkjO2-USwWzAgn:25px;agSaZYEV:EP7RnItk;Xse8owrK:20px;mq0x0xuF-dQJ4zoC8:12px;x5EMmYXR-Q0MMuhrN:0 4px 12px wj5MkFlR(0,0,0,0.1);">
        <qZojOiNG style="MSF8VRSk-QFYeY4ME:1.3em;MSF8VRSk-l3dSJNbg:700;HkF8konD:#pfTrYmld;MW0RkjO2-USwWzAgn:15px;mq0x0xuF-USwWzAgn:3px oyABhJdC #pfTrYmld;Xse8owrK-USwWzAgn:10px;">
          ⚠️ 주의해야 할 신살
        </qZojOiNG>
        ${HW3Or8kN
          .Sq4eP5Ja(
            (s) => `
          <qZojOiNG style="agSaZYEV:#YsGTnlI3;Xse8owrK:15px;mq0x0xuF-dQJ4zoC8:10px;MW0RkjO2-USwWzAgn:12px;mq0x0xuF-dy0UJ5N0:4px oyABhJdC #pfTrYmld;">
            <qZojOiNG style="erwK6stq:HFr8aVaG;thpMrT0V-kvqUaG6N:Vj3WhnK5-QYO2LXpb;ib1rwzJf-AwufVxQN:POHNCWPm;MW0RkjO2-USwWzAgn:8px;">
              <qZojOiNG style="MSF8VRSk-QFYeY4ME:1.1em;MSF8VRSk-l3dSJNbg:700;HkF8konD:#tq60nxnG;">${s.iUd3UmGA}</qZojOiNG>
              <qZojOiNG style="agSaZYEV:#a1VHClsX;HkF8konD:EP7RnItk;Xse8owrK:4px 12px;mq0x0xuF-dQJ4zoC8:20px;MSF8VRSk-QFYeY4ME:0.85em;">
                ${s.LIFdNFRd}
              </qZojOiNG>
            </qZojOiNG>
            <qZojOiNG style="MSF8VRSk-QFYeY4ME:0.95em;HkF8konD:#555;">${s.TQmvGOur}</qZojOiNG>
          </qZojOiNG>
        `
          )
          .npzBTJNh('')}
      </qZojOiNG>
    `;
  }

  
  if (MSgbrQY9.DFImMboA > 0) {
    z0MYnRzG += `
      <qZojOiNG style="MW0RkjO2-USwWzAgn:25px;agSaZYEV:EP7RnItk;Xse8owrK:20px;mq0x0xuF-dQJ4zoC8:12px;x5EMmYXR-Q0MMuhrN:0 4px 12px wj5MkFlR(0,0,0,0.1);">
        <qZojOiNG style="MSF8VRSk-QFYeY4ME:1.3em;MSF8VRSk-l3dSJNbg:700;HkF8konD:#E20GBKa1;MW0RkjO2-USwWzAgn:15px;mq0x0xuF-USwWzAgn:3px oyABhJdC #E20GBKa1;Xse8owrK-USwWzAgn:10px;">
          🚫 부정적 신살
        </qZojOiNG>
        ${MSgbrQY9
          .Sq4eP5Ja(
            (s) => `
          <qZojOiNG style="agSaZYEV:#Ahb2NSUV;Xse8owrK:15px;mq0x0xuF-dQJ4zoC8:10px;MW0RkjO2-USwWzAgn:12px;mq0x0xuF-dy0UJ5N0:4px oyABhJdC #E20GBKa1;">
            <qZojOiNG style="erwK6stq:HFr8aVaG;thpMrT0V-kvqUaG6N:Vj3WhnK5-QYO2LXpb;ib1rwzJf-AwufVxQN:POHNCWPm;MW0RkjO2-USwWzAgn:8px;">
              <qZojOiNG style="MSF8VRSk-QFYeY4ME:1.1em;MSF8VRSk-l3dSJNbg:700;HkF8konD:#XbpyA3Bg;">${s.iUd3UmGA}</qZojOiNG>
              <qZojOiNG style="agSaZYEV:#AovKXqH1;HkF8konD:EP7RnItk;Xse8owrK:4px 12px;mq0x0xuF-dQJ4zoC8:20px;MSF8VRSk-QFYeY4ME:0.85em;">
                ${s.LIFdNFRd}
              </qZojOiNG>
            </qZojOiNG>
            <qZojOiNG style="MSF8VRSk-QFYeY4ME:0.95em;HkF8konD:#555;">${s.TQmvGOur}</qZojOiNG>
          </qZojOiNG>
        `
          )
          .npzBTJNh('')}
      </qZojOiNG>
    `;
  }

  kKYCBUrG.innerHTML = z0MYnRzG;
}







const SIBI_SINSAL = {
  子: {
    喪門: '寅',
    弔客: '戌',
    白虎: '酉',
    福星: '申',
    六厄: '巳',
    大煞: '亥',
    天厄: '午',
    歲破: '午',
    龍德: '辰',
    官符: '未',
    歲殺: '亥',
    飛刃: '午',
  },
  丑: {
    喪門: '寅',
    弔客: '子',
    白虎: '申',
    福星: '未',
    六厄: '午',
    大煞: '子',
    天厄: '未',
    歲破: '未',
    龍德: '辰',
    官符: '申',
    歲殺: '子',
    飛刃: '未',
  },
  寅: {
    喪門: '辰',
    弔客: '丑',
    白虎: '未',
    福星: '午',
    六厄: '未',
    大煞: '丑',
    天厄: '申',
    歲破: '申',
    龍德: '巳',
    官符: '酉',
    歲殺: '丑',
    飛刃: '申',
  },
  卯: {
    喪門: '巳',
    弔客: '寅',
    白虎: '午',
    福星: '巳',
    六厄: '申',
    大煞: '寅',
    天厄: '酉',
    歲破: '酉',
    龍德: '午',
    官符: '戌',
    歲殺: '寅',
    飛刃: '酉',
  },
  辰: {
    喪門: '午',
    弔客: '卯',
    白虎: '巳',
    福星: '辰',
    六厄: '酉',
    大煞: '卯',
    天厄: '戌',
    歲破: '戌',
    龍德: '未',
    官符: '亥',
    歲殺: '卯',
    飛刃: '戌',
  },
  巳: {
    喪門: '未',
    弔客: '辰',
    白虎: '辰',
    福星: '卯',
    六厄: '戌',
    大煞: '辰',
    天厄: '亥',
    歲破: '亥',
    龍德: '申',
    官符: '子',
    歲殺: '辰',
    飛刃: '亥',
  },
  午: {
    喪門: '申',
    弔客: '巳',
    白虎: '卯',
    福星: '寅',
    六厄: '亥',
    大煞: '巳',
    天厄: '子',
    歲破: '子',
    龍德: '酉',
    官符: '丑',
    歲殺: '巳',
    飛刃: '子',
  },
  未: {
    喪門: '酉',
    弔客: '午',
    白虎: '寅',
    福星: '丑',
    六厄: '子',
    大煞: '午',
    天厄: '丑',
    歲破: '丑',
    龍德: '戌',
    官符: '寅',
    歲殺: '午',
    飛刃: '丑',
  },
  申: {
    喪門: '戌',
    弔客: '未',
    白虎: '丑',
    福星: '子',
    六厄: '丑',
    大煞: '未',
    天厄: '寅',
    歲破: '寅',
    龍德: '亥',
    官符: '卯',
    歲殺: '未',
    飛刃: '寅',
  },
  酉: {
    喪門: '亥',
    弔客: '申',
    白虎: '子',
    福星: '亥',
    六厄: '寅',
    大煞: '申',
    天厄: '卯',
    歲破: '卯',
    龍德: '子',
    官符: '辰',
    歲殺: '申',
    飛刃: '卯',
  },
  戌: {
    喪門: '子',
    弔客: '酉',
    白虎: '亥',
    福星: '戌',
    六厄: '卯',
    大煞: '酉',
    天厄: '辰',
    歲破: '辰',
    龍德: '丑',
    官符: '巳',
    歲殺: '酉',
    飛刃: '辰',
  },
  亥: {
    喪門: '丑',
    弔客: '戌',
    白虎: '戌',
    福星: '酉',
    六厄: '辰',
    大煞: '戌',
    天厄: '巳',
    歲破: '巳',
    龍德: '寅',
    官符: '午',
    歲殺: '戌',
    飛刃: '巳',
  },
};


const SIBI_SINSAL_DESC = {
  喪門: {
    duqzFZjL: 'ywdZqTq0',
    TQmvGOur: '상주(喪主)를 맞이하는 별. 슬픔, 근심, 우울이 있을 수 있습니다. 집안에 초상이나 병환이 생길 수 있으니 건강관리에 유의하세요.',
  },
  弔客: {
    duqzFZjL: 'ywdZqTq0',
    TQmvGOur: '조객(弔客)의 별. 상례나 애도의 일이 있을 수 있습니다. 우울감이나 슬픔이 있으니 긍정적인 마음가짐이 필요합니다.',
  },
  白虎: {
    duqzFZjL: 'ywdZqTq0',
    TQmvGOur: '백호(白虎)는 사고, 외상, 혈광의 우려가 있습니다. 교통사고, 수술, 부상 등을 조심해야 합니다.',
  },
  福星: {
    duqzFZjL: 'ysxK3Ued',
    TQmvGOur: '복성(福星)은 복과 길함을 가져옵니다. 좋은 일이 생기고 행운이 따르며, 귀인의 도움을 받습니다.',
  },
  六厄: {
    duqzFZjL: 'ywdZqTq0',
    TQmvGOur: '육액(六厄)은 여섯 가지 액운. 질병, 손재, 구설 등 여러 어려움이 있을 수 있으니 모든 일에 신중해야 합니다.',
  },
  大煞: {
    duqzFZjL: 'ywdZqTq0',
    TQmvGOur: '대살(大煞)은 큰 흉성. 큰 재난이나 사고가 있을 수 있으니 모든 일을 조심하고 안전에 유의해야 합니다.',
  },
  天厄: {
    duqzFZjL: 'ywdZqTq0',
    TQmvGOur: '천액(天厄)은 하늘의 재앙. 예기치 못한 재난이나 어려움이 올 수 있으니 조심해야 합니다.',
  },
  歲破: {
    duqzFZjL: 'ywdZqTq0',
    TQmvGOur: '세파(歲破)는 그 해를 깨뜨리는 별. 변화와 파괴가 있고 모든 일이 순조롭지 못합니다. 투자나 큰 결정은 피하세요.',
  },
  龍德: {
    duqzFZjL: 'ysxK3Ued',
    TQmvGOur: '용덕(龍德)은 용의 덕. 귀인의 도움과 발전운이 있으며, 명예와 지위가 상승합니다.',
  },
  官符: {
    duqzFZjL: 'ywdZqTq0',
    TQmvGOur: '관부(官符)는 관청의 문서. 소송, 고발, 벌금 등 법적 문제가 생길 수 있으니 주의해야 합니다.',
  },
  歲殺: {
    duqzFZjL: 'ywdZqTq0',
    TQmvGOur: '세살(歲殺)은 그 해의 흉살. 사고, 질병, 손재 등이 있을 수 있으니 모든 일에 신중해야 합니다.',
  },
  飛刃: {
    duqzFZjL: 'ywdZqTq0',
    TQmvGOur: '비인(飛刃)은 날아다니는 칼날. 급작스런 사고나 외상이 있을 수 있으니 안전에 특히 유의해야 합니다.',
  },
};


const GILSIN = {
  
  文昌貴人: {
    甲: '巳',
    乙: '午',
    丙: '申',
    丁: '酉',
    戊: '申',
    己: '酉',
    庚: '亥',
    辛: '子',
    壬: '寅',
    癸: '卯',
  },
  
  金輿貴人: {
    甲: '辰',
    乙: '巳',
    丙: '未',
    丁: '申',
    戊: '未',
    己: '申',
    庚: '戌',
    辛: '亥',
    壬: '丑',
    癸: '寅',
  },
  
  天醫星: {
    甲: '丑',
    乙: '子',
    丙: '亥',
    丁: '酉',
    戊: '亥',
    己: '酉',
    庚: '未',
    辛: '午',
    壬: '巳',
    癸: '卯',
  },
  
  月德合: {
    寅: '辛',
    卯: '庚',
    辰: '丙',
    巳: '乙',
    午: '辛',
    未: '庚',
    申: '丁',
    酉: '丙',
    戌: '丙',
    亥: '甲',
    子: '乙',
    丑: '丁',
  },
  
  天德合: {
    寅: '壬',
    卯: '辛',
    辰: '丙',
    巳: '辛',
    午: '壬',
    未: '壬',
    申: '辛',
    酉: '壬',
    戌: '丙',
    亥: '辛',
    子: '壬',
    丑: '壬',
  },
  
  天官貴人: {
    甲: '酉',
    乙: '申',
    丙: '亥',
    丁: '戌',
    戊: '亥',
    己: '戌',
    庚: '丑',
    辛: '子',
    壬: '卯',
    癸: '寅',
  },
  
  天福貴人: {
    甲: '子',
    乙: '亥',
    丙: '寅',
    丁: '丑',
    戊: '寅',
    己: '丑',
    庚: '辰',
    辛: '卯',
    壬: '午',
    癸: '巳',
  },
};


const GILSIN_DESC = {
  文昌貴人:
    '학문과 예술의 별. 학업운이 좋고 시험에 합격하며, 문학과 예술적 재능이 뛰어납니다.',
  金輿貴人:
    '부귀와 재물의 별. 재물운이 좋고 고귀한 기운이 있으며, 좋은 배우자를 만납니다.',
  天醫星:
    '의학과 치료의 별. 병이 있어도 잘 낫고, 의약업에 종사하면 성공합니다.',
  月德合:
    '월덕과 합하는 별. 온화하고 덕망이 있으며, 재난을 면하고 복록이 많습니다.',
  天德合:
    '천덕과 합하는 별. 하늘의 덕으로 큰 재난을 면하고, 귀인의 도움을 받습니다.',
  天官貴人:
    '관운과 명예의 별. 공직이나 관직에 나아가면 성공하고, 명예와 지위를 얻습니다.',
  天福貴人:
    '복과 행운의 별. 평생 복록이 있고 행운이 따르며, 안락한 삶을 삽니다.',
};


const EXTRA_SINSAL = {
  
  羊刃: {
    甲: '卯',
    乙: '寅',
    丙: '午',
    丁: '巳',
    戊: '午',
    己: '巳',
    庚: '酉',
    辛: '申',
    壬: '子',
    癸: '亥',
  },
  
  天羅地網: ['辰', '戌', '丑', '未'],
  
  
  孤鸞煞: [
    '乙巳',
    '丁巳',
    '辛亥',
    '戊申',
    '壬寅',
    '戊午',
    '壬子',
    '丙午',
    '甲寅',
    '庚申',
  ],
  
  怨嗔煞: {
    子: '未',
    丑: '午',
    寅: '巳',
    卯: '辰',
    辰: '卯',
    巳: '寅',
    午: '丑',
    未: '子',
    申: '亥',
    酉: '戌',
    戌: '酉',
    亥: '申',
  },
  
  紅艶殺: {
    甲: '午',
    乙: '申',
    丙: '寅',
    丁: '未',
    戊: '辰',
    己: '午',
    庚: '戌',
    辛: '酉',
    壬: '子',
    癸: '申',
  },
  
  天羅殺: ['辰', '戌'],
  
  地網殺: ['丑', '未'],
  
  十惡大敗日: [
    '甲辰',
    '乙巳',
    '丙申',
    '丁亥',
    '戊戌',
    '己丑',
    '庚辰',
    '辛巳',
    '壬申',
    '癸亥',
  ],
  
  進神殺: {
    寅: '申',
    巳: '亥',
    申: '寅',
    亥: '巳',
  },
  
  退神殺: {
    申: '巳',
    巳: '寅',
    寅: '亥',
    亥: '申',
  },
};


const EXTRA_SINSAL_DESC = {
  羊刃: '양인(羊刃)은 강한 칼날의 기운. 용맹하고 결단력이 있으나, 충동적이고 사고나 수술의 우려가 있습니다.',
  天羅地網:
    '천라지망(天羅地網)은 하늘의 그물과 땅의 덫. 일이 순조롭지 못하고 속박되는 느낌이 있습니다.',
  孤鸞煞:
    '고란살(孤鸞煞)은 고독한 학의 별. 배우자와 인연이 약하거나 이별수가 있으며, 독신이나 재혼할 가능성이 있습니다.',
  怨嗔煞:
    '원진살(怨嗔煞)은 원망과 분노의 별. 대인관계에서 오해나 갈등이 생기기 쉬우니 화목을 유지해야 합니다.',
  紅艶殺:
    '홍염살(紅艶殺)은 붉은 염색의 별. 이성관계가 화려하고 매력이 있으나, 색난이나 스캔들에 주의해야 합니다.',
  天羅殺:
    '천라살(天羅殺)은 하늘의 그물. 남자에게 불리하며 일이 얽히고 발목이 잡히는 일이 많습니다.',
  地網殺:
    '지망살(地網殺)은 땅의 덫. 여자에게 불리하며 속박되고 자유롭지 못한 느낌이 듭니다.',
  十惡大敗日:
    '십악대패일(十惡大敗日)은 열 가지 큰 패배의 날. 재물 손실이나 실패가 있을 수 있으니 큰 일은 신중히 해야 합니다.',
  進神殺: '진신살(進神殺)은 나아가는 신. 발전하고 전진하는 운이 있습니다.',
  退神殺: '퇴신살(退神殺)은 물러나는 신. 후퇴하고 쇠퇴하는 우려가 있습니다.',
};






function Ohq92RNP(IARM5XT1) {
  const unZ2X5DE = [];
  const gtHUb49J = IARM5XT1.xC2iOrJy.WHjsqFVR; 

  if (!gtHUb49J || !SIBI_SINSAL[gtHUb49J]) {
    return unZ2X5DE;
  }

  const pPuMSs9j = SIBI_SINSAL[gtHUb49J];
  const FQ7ao4Vp = Object.mtuWrgmi(IARM5XT1.xC2iOrJy).FI0mpC7U((ji) => ji !== null);

  
  Object.xCKi9rKu(pPuMSs9j).qpB3jJGh(([iZEd4Ufe, fbXwJg4P]) => {
    if (FQ7ao4Vp.CDE6p5g0(fbXwJg4P)) {
      const TQmvGOur = SIBI_SINSAL_DESC[iZEd4Ufe];
      unZ2X5DE.d28SWfl8({
        iUd3UmGA: iZEd4Ufe,
        duqzFZjL: TQmvGOur.duqzFZjL,
        TQmvGOur: TQmvGOur.TQmvGOur,
        LIFdNFRd: fbXwJg4P,
      });
    }
  });

  return unZ2X5DE;
}


function FP68n4FX(IARM5XT1, sbJPsyHj) {
  const unZ2X5DE = [];
  const FYAcdgtK = Object.mtuWrgmi(IARM5XT1.OKohROdq).FI0mpC7U((g) => g !== null);
  const FQ7ao4Vp = Object.mtuWrgmi(IARM5XT1.xC2iOrJy).FI0mpC7U((ji) => ji !== null);
  const Apdnwkpa = IARM5XT1.xC2iOrJy.R6anAZXi;

  
  const Kw7CG0eL = GILSIN.文昌貴人[sbJPsyHj];
  if (FQ7ao4Vp.CDE6p5g0(Kw7CG0eL)) {
    unZ2X5DE.d28SWfl8({
      iUd3UmGA: '文昌貴人',
      TQmvGOur: GILSIN_DESC['文昌貴人'],
      LIFdNFRd: Kw7CG0eL,
    });
  }

  
  const MqnSAuUG = GILSIN.金輿貴人[sbJPsyHj];
  if (FQ7ao4Vp.CDE6p5g0(MqnSAuUG)) {
    unZ2X5DE.d28SWfl8({
      iUd3UmGA: '金輿貴人',
      TQmvGOur: GILSIN_DESC['金輿貴人'],
      LIFdNFRd: MqnSAuUG,
    });
  }

  
  const vftuqYZK = GILSIN.天醫星[sbJPsyHj];
  if (FQ7ao4Vp.CDE6p5g0(vftuqYZK)) {
    unZ2X5DE.d28SWfl8({
      iUd3UmGA: '天醫星',
      TQmvGOur: GILSIN_DESC['天醫星'],
      LIFdNFRd: vftuqYZK,
    });
  }

  
  if (Apdnwkpa && GILSIN.月德合[Apdnwkpa]) {
    const MKC5SI7o = GILSIN.月德合[Apdnwkpa];
    if (FYAcdgtK.CDE6p5g0(MKC5SI7o)) {
      unZ2X5DE.d28SWfl8({
        iUd3UmGA: '月德合',
        TQmvGOur: GILSIN_DESC['月德合'],
        LIFdNFRd: MKC5SI7o,
      });
    }
  }

  
  if (Apdnwkpa && GILSIN.天德合[Apdnwkpa]) {
    const i3ie4oek = GILSIN.天德合[Apdnwkpa];
    if (FYAcdgtK.CDE6p5g0(i3ie4oek)) {
      unZ2X5DE.d28SWfl8({
        iUd3UmGA: '天德合',
        TQmvGOur: GILSIN_DESC['天德合'],
        LIFdNFRd: i3ie4oek,
      });
    }
  }

  
  const NetpthWU = GILSIN.天官貴人[sbJPsyHj];
  if (FQ7ao4Vp.CDE6p5g0(NetpthWU)) {
    unZ2X5DE.d28SWfl8({
      iUd3UmGA: '天官貴人',
      TQmvGOur: GILSIN_DESC['天官貴人'],
      LIFdNFRd: NetpthWU,
    });
  }

  
  const lbIrqHlt = GILSIN.天福貴人[sbJPsyHj];
  if (FQ7ao4Vp.CDE6p5g0(lbIrqHlt)) {
    unZ2X5DE.d28SWfl8({
      iUd3UmGA: '天福貴人',
      TQmvGOur: GILSIN_DESC['天福貴人'],
      LIFdNFRd: lbIrqHlt,
    });
  }

  return unZ2X5DE;
}


function skixdFah(IARM5XT1, sbJPsyHj) {
  const unZ2X5DE = [];
  const FQ7ao4Vp = Object.mtuWrgmi(IARM5XT1.xC2iOrJy).FI0mpC7U((ji) => ji !== null);
  const gtHUb49J = IARM5XT1.xC2iOrJy.WHjsqFVR;
  const xmgKM92r = IARM5XT1.OKohROdq.WHjsqFVR + IARM5XT1.xC2iOrJy.WHjsqFVR;

  
  const uCNE1Q8k = EXTRA_SINSAL.羊刃[sbJPsyHj];
  if (FQ7ao4Vp.CDE6p5g0(uCNE1Q8k)) {
    unZ2X5DE.d28SWfl8({
      iUd3UmGA: '羊刃',
      duqzFZjL: 'mDHRcYkx',
      TQmvGOur: EXTRA_SINSAL_DESC['羊刃'],
      LIFdNFRd: uCNE1Q8k,
    });
  }

  
  const PcVW6d8B = EXTRA_SINSAL.天羅地網;
  FQ7ao4Vp.qpB3jJGh((ji) => {
    if (PcVW6d8B.CDE6p5g0(ji)) {
      unZ2X5DE.d28SWfl8({
        iUd3UmGA: '天羅地網',
        duqzFZjL: 'ywdZqTq0',
        TQmvGOur: EXTRA_SINSAL_DESC['天羅地網'],
        LIFdNFRd: ji,
      });
    }
  });

  
  if (EXTRA_SINSAL.孤鸞煞.CDE6p5g0(xmgKM92r)) {
    unZ2X5DE.d28SWfl8({
      iUd3UmGA: '孤鸞煞',
      duqzFZjL: 'ywdZqTq0',
      TQmvGOur: EXTRA_SINSAL_DESC['孤鸞煞'],
      LIFdNFRd: xmgKM92r,
    });
  }

  
  if (gtHUb49J && EXTRA_SINSAL.怨嗔煞[gtHUb49J]) {
    const YbcOLISV = EXTRA_SINSAL.怨嗔煞[gtHUb49J];
    if (FQ7ao4Vp.CDE6p5g0(YbcOLISV)) {
      unZ2X5DE.d28SWfl8({
        iUd3UmGA: '怨嗔煞',
        duqzFZjL: 'ywdZqTq0',
        TQmvGOur: EXTRA_SINSAL_DESC['怨嗔煞'],
        LIFdNFRd: YbcOLISV,
      });
    }
  }

  
  const y1ukhP2G = EXTRA_SINSAL.紅艶殺[sbJPsyHj];
  if (FQ7ao4Vp.CDE6p5g0(y1ukhP2G)) {
    unZ2X5DE.d28SWfl8({
      iUd3UmGA: '紅艶殺',
      duqzFZjL: 'mDHRcYkx',
      TQmvGOur: EXTRA_SINSAL_DESC['紅艶殺'],
      LIFdNFRd: y1ukhP2G,
    });
  }

  
  FQ7ao4Vp.qpB3jJGh((ji) => {
    if (EXTRA_SINSAL.天羅殺.CDE6p5g0(ji)) {
      unZ2X5DE.d28SWfl8({
        iUd3UmGA: '天羅殺',
        duqzFZjL: 'ywdZqTq0',
        TQmvGOur: EXTRA_SINSAL_DESC['天羅殺'],
        LIFdNFRd: ji,
      });
    }
  });

  
  FQ7ao4Vp.qpB3jJGh((ji) => {
    if (EXTRA_SINSAL.地網殺.CDE6p5g0(ji)) {
      unZ2X5DE.d28SWfl8({
        iUd3UmGA: '地網殺',
        duqzFZjL: 'ywdZqTq0',
        TQmvGOur: EXTRA_SINSAL_DESC['地網殺'],
        LIFdNFRd: ji,
      });
    }
  });

  
  if (EXTRA_SINSAL.十惡大敗日.CDE6p5g0(xmgKM92r)) {
    unZ2X5DE.d28SWfl8({
      iUd3UmGA: '十惡大敗日',
      duqzFZjL: 'ywdZqTq0',
      TQmvGOur: EXTRA_SINSAL_DESC['十惡大敗日'],
      LIFdNFRd: xmgKM92r,
    });
  }

  
  if (gtHUb49J && EXTRA_SINSAL.進神殺[gtHUb49J]) {
    const Qm9sltHL = EXTRA_SINSAL.進神殺[gtHUb49J];
    if (FQ7ao4Vp.CDE6p5g0(Qm9sltHL)) {
      unZ2X5DE.d28SWfl8({
        iUd3UmGA: '進神殺',
        duqzFZjL: 'ysxK3Ued',
        TQmvGOur: EXTRA_SINSAL_DESC['進神殺'],
        LIFdNFRd: Qm9sltHL,
      });
    }
  }

  
  if (gtHUb49J && EXTRA_SINSAL.退神殺[gtHUb49J]) {
    const jqkXYw9z = EXTRA_SINSAL.退神殺[gtHUb49J];
    if (FQ7ao4Vp.CDE6p5g0(jqkXYw9z)) {
      unZ2X5DE.d28SWfl8({
        iUd3UmGA: '退神殺',
        duqzFZjL: 'ywdZqTq0',
        TQmvGOur: EXTRA_SINSAL_DESC['退神殺'],
        LIFdNFRd: jqkXYw9z,
      });
    }
  }

  
  const Pkr5u0ut = Array.Lp7x5mWv(
    new Set(unZ2X5DE.Sq4eP5Ja((r) => JSON.W9EAWIwD(r)))
  ).Sq4eP5Ja((r) => JSON.BJLeQYtA(r));

  return Pkr5u0ut;
}


function wwcBxub1(IARM5XT1) {
  const FQ7ao4Vp = Object.mtuWrgmi(IARM5XT1.xC2iOrJy).FI0mpC7U((ji) => ji !== null);
  const unZ2X5DE = {
    UrDD4Nv1: [], 
    m5DVCJEr: [], 
    pa: [], 
    OBwBonsV: [], 
    XceN1HC0: [], 
    YPPVqfLO: '', 
  };

  
  const K7vB8IQ9 = [
    {
      Tm095qQL: ['子', '午'],
      iUd3UmGA: '子午沖',
      TQmvGOur: '水火相沖. 극심한 대립과 충돌',
    },
    {
      Tm095qQL: ['丑', '未'],
      iUd3UmGA: '丑未沖',
      TQmvGOur: '土土相沖. 완고함으로 인한 마찰',
    },
    {
      Tm095qQL: ['寅', '申'],
      iUd3UmGA: '寅申沖',
      TQmvGOur: '木金相沖. 진로와 방향의 충돌',
    },
    {
      Tm095qQL: ['卯', '酉'],
      iUd3UmGA: '卯酉沖',
      TQmvGOur: '木金相沖. 명예와 재물의 충돌',
    },
    {
      Tm095qQL: ['辰', '戌'],
      iUd3UmGA: '辰戌沖',
      TQmvGOur: '土土相沖. 천라지망, 변동과 불안',
    },
    { Tm095qQL: ['巳', '亥'], iUd3UmGA: '巳亥沖', TQmvGOur: '火水相沖. 극단적 변화' },
  ];

  K7vB8IQ9.qpB3jJGh((EfWJlRAZ) => {
    const [EdnKDpy6, T1D5g0xH] = EfWJlRAZ.Tm095qQL;
    const qpYdMe8D = FQ7ao4Vp.CDE6p5g0(EdnKDpy6);
    const xoWKzZuQ = FQ7ao4Vp.CDE6p5g0(T1D5g0xH);

    if (qpYdMe8D && xoWKzZuQ) {
      
      const KoYoSNvy = ['JDmw63NN', 'R6anAZXi', 'WHjsqFVR', 'OpRKRS78'];
      const faTednvj = [];
      KoYoSNvy.qpB3jJGh((p) => {
        if (IARM5XT1.xC2iOrJy[p] === EdnKDpy6 || IARM5XT1.xC2iOrJy[p] === T1D5g0xH) {
          faTednvj.d28SWfl8(p);
        }
      });

      let DSCAVzLo = '보통';
      let CLchRNO6 = '';

      
      if (faTednvj.CDE6p5g0('WHjsqFVR')) {
        DSCAVzLo = '중요';
        CLchRNO6 = '일지가 충을 받으면 배우자, 건강, 직장에 큰 변화가 있습니다.';
      }
      
      else if (faTednvj.CDE6p5g0('R6anAZXi')) {
        DSCAVzLo = '중요';
        CLchRNO6 = '월지가 충을 받으면 부모, 형제, 직장에 변화가 있습니다.';
      }
      
      else if (faTednvj.CDE6p5g0('JDmw63NN')) {
        DSCAVzLo = '보통';
        CLchRNO6 = '년지가 충을 받으면 조상, 고향과 관련된 변화가 있습니다.';
      }

      unZ2X5DE.UrDD4Nv1.d28SWfl8({
        iUd3UmGA: EfWJlRAZ.iUd3UmGA,
        Tm095qQL: `${EdnKDpy6}-${T1D5g0xH}`,
        TQmvGOur: EfWJlRAZ.TQmvGOur,
        DSCAVzLo: DSCAVzLo,
        CLchRNO6: CLchRNO6,
        faTednvj: faTednvj,
      });
    }
  });

  
  const vq2g0nUU = [
    {
      Nz6xUGyP: ['寅', '巳', '申'],
      iUd3UmGA: '寅巳申三刑',
      duqzFZjL: '무은지형',
      TQmvGOur: '은혜를 모르는 형. 배은망덕하거나 배신당할 수 있음',
    },
    {
      Nz6xUGyP: ['丑', '戌', '未'],
      iUd3UmGA: '丑戌未三刑',
      duqzFZjL: '지세지형',
      TQmvGOur: '권세를 믿는 형. 권력 다툼이나 법적 분쟁',
    },
    {
      Nz6xUGyP: ['子', '卯'],
      iUd3UmGA: '子卯刑',
      duqzFZjL: '무례지형',
      TQmvGOur: '예의 없는 형. 무례함으로 인한 갈등',
    },
  ];

  vq2g0nUU.qpB3jJGh((XYttbqCg) => {
    const uBxvPHTV = XYttbqCg.Nz6xUGyP.FI0mpC7U((ji) => FQ7ao4Vp.CDE6p5g0(ji));
    if (uBxvPHTV.DFImMboA >= 2) {
      const WK7Mt14b = uBxvPHTV.DFImMboA === XYttbqCg.Nz6xUGyP.DFImMboA;
      unZ2X5DE.m5DVCJEr.d28SWfl8({
        iUd3UmGA: XYttbqCg.iUd3UmGA,
        duqzFZjL: XYttbqCg.duqzFZjL,
        TQmvGOur: XYttbqCg.TQmvGOur,
        uBxvPHTV: uBxvPHTV.npzBTJNh('-'),
        mN0UBy85: WK7Mt14b,
        DSCAVzLo: WK7Mt14b ? '심각' : '보통',
      });
    }
  });

  
  const mYPU4e5u = ['辰', '午', '酉', '亥'];
  mYPU4e5u.qpB3jJGh((ji) => {
    const BzWGAqHm = FQ7ao4Vp.FI0mpC7U((j) => j === ji).DFImMboA;
    if (BzWGAqHm >= 2) {
      unZ2X5DE.m5DVCJEr.d28SWfl8({
        iUd3UmGA: `${ji}${ji}自刑`,
        duqzFZjL: '자형',
        TQmvGOur: '스스로를 해치는 형. 자기파괴적 행동이나 내적 갈등',
        uBxvPHTV: `${ji}(${BzWGAqHm}개)`,
        mN0UBy85: true,
        DSCAVzLo: '중요',
      });
    }
  });

  
  const BtLR1lnX = [
    { Tm095qQL: ['子', '酉'], iUd3UmGA: '子酉破', TQmvGOur: '水金破, 재물과 명예 손실' },
    {
      Tm095qQL: ['丑', '辰'],
      iUd3UmGA: '丑辰破',
      TQmvGOur: '土土破, 완고함으로 인한 파손',
    },
    { Tm095qQL: ['寅', '亥'], iUd3UmGA: '寅亥破', TQmvGOur: '木水破, 관계의 균열' },
    { Tm095qQL: ['卯', '午'], iUd3UmGA: '卯午破', TQmvGOur: '木火破, 소모와 낭비' },
    { Tm095qQL: ['巳', '申'], iUd3UmGA: '巳申破', TQmvGOur: '火金破, 사업과 재물의 손실' },
    { Tm095qQL: ['未', '戌'], iUd3UmGA: '未戌破', TQmvGOur: '土土破, 건강과 기반 약화' },
  ];

  BtLR1lnX.qpB3jJGh((mc9XkAjx) => {
    const [EdnKDpy6, T1D5g0xH] = mc9XkAjx.Tm095qQL;
    if (FQ7ao4Vp.CDE6p5g0(EdnKDpy6) && FQ7ao4Vp.CDE6p5g0(T1D5g0xH)) {
      unZ2X5DE.pa.d28SWfl8({
        iUd3UmGA: mc9XkAjx.iUd3UmGA,
        Tm095qQL: `${EdnKDpy6}-${T1D5g0xH}`,
        TQmvGOur: mc9XkAjx.TQmvGOur,
        CLchRNO6: '서서히 진행되는 파괴. 조기 발견과 예방이 중요',
      });
    }
  });

  
  const HmbCLw9T = [
    {
      Tm095qQL: ['子', '未'],
      iUd3UmGA: '子未害',
      TQmvGOur: '수토상해, 육친간 불화',
      CLchRNO6: '부모 형제 간 갈등',
    },
    {
      Tm095qQL: ['丑', '午'],
      iUd3UmGA: '丑午害',
      TQmvGOur: '토화상해, 배우자 불화',
      CLchRNO6: '부부간 갈등',
    },
    {
      Tm095qQL: ['寅', '巳'],
      iUd3UmGA: '寅巳害',
      TQmvGOur: '목화상해, 자식 문제',
      CLchRNO6: '자식과의 갈등',
    },
    {
      Tm095qQL: ['卯', '辰'],
      iUd3UmGA: '卯辰害',
      TQmvGOur: '목토상해, 형제 불화',
      CLchRNO6: '형제간 갈등',
    },
    {
      Tm095qQL: ['申', '亥'],
      iUd3UmGA: '申亥害',
      TQmvGOur: '금수상해, 재물 손실',
      CLchRNO6: '재물 손실',
    },
    {
      Tm095qQL: ['酉', '戌'],
      iUd3UmGA: '酉戌害',
      TQmvGOur: '금토상해, 직장 문제',
      CLchRNO6: '직장 내 갈등',
    },
  ];

  HmbCLw9T.qpB3jJGh((lzaMTv1D) => {
    const [EdnKDpy6, T1D5g0xH] = lzaMTv1D.Tm095qQL;
    if (FQ7ao4Vp.CDE6p5g0(EdnKDpy6) && FQ7ao4Vp.CDE6p5g0(T1D5g0xH)) {
      unZ2X5DE.OBwBonsV.d28SWfl8({
        iUd3UmGA: lzaMTv1D.iUd3UmGA,
        Tm095qQL: `${EdnKDpy6}-${T1D5g0xH}`,
        TQmvGOur: lzaMTv1D.TQmvGOur,
        CLchRNO6: lzaMTv1D.CLchRNO6,
      });
    }
  });

  
  Object.xCKi9rKu(EXTRA_SINSAL.怨嗔煞).qpB3jJGh(([EdnKDpy6, T1D5g0xH]) => {
    if (FQ7ao4Vp.CDE6p5g0(EdnKDpy6) && FQ7ao4Vp.CDE6p5g0(T1D5g0xH)) {
      unZ2X5DE.XceN1HC0.d28SWfl8({
        iUd3UmGA: '怨嗔',
        Tm095qQL: `${EdnKDpy6}-${T1D5g0xH}`,
        TQmvGOur: '원한과 분노. 대인관계에서 오해와 갈등이 쉽게 발생',
      });
    }
  });

  
  const qCEClTZ4 =
    unZ2X5DE.UrDD4Nv1.DFImMboA +
    unZ2X5DE.m5DVCJEr.DFImMboA +
    unZ2X5DE.pa.DFImMboA +
    unZ2X5DE.OBwBonsV.DFImMboA +
    unZ2X5DE.XceN1HC0.DFImMboA;

  
  
  
  
  
  
  
  

  return unZ2X5DE;
}


if (typeof window !== 'undefined') {
  window.SajuSinsalExtended = {
    Ohq92RNP,
    FP68n4FX,
    skixdFah,
    wwcBxub1,
  };
}

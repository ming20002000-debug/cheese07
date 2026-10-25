// ============================================================
// 3세대 대표곡 뮤비 월드컵 후보 데이터 (v1)
// ============================================================
// 이 배열 안의 항목을 자유롭게 추가 / 삭제 / 수정하세요.
// 앱 로직(script.js)은 절대 건드릴 필요 없이, 이 파일만 고치면 됩니다.
//
// [필드 설명]
//   id        : 다른 항목과 겹치지 않는 고유 값
//   name      : 화면에 표시될 이름 (그룹명)
//   group     : 데뷔년도 (표시용)
//   song      : 곡 제목 (표시용)
//   gender    : "female"(여돌) 또는 "male"(남돌) — 이 값으로 구분합니다
//   youtubeId : 유튜브 영상 주소의 v= 뒤에 오는 11자리 코드
//   start     : 영상이 몇 초부터 재생될지 (기본 0)
//
// 여돌 12팀 32곡 · 남돌 14팀 32곡 = 총 64곡.
// 전부 공식 뮤직비디오 기준이고, 각 영상은 유튜브 oEmbed(title/author_name)로
// 실제 그룹·곡·공식 채널과 일치하는지 확인했습니다. 예외는 항목 끝 주석에 표시했습니다.
// ============================================================

const CANDIDATES = [
  // ---- 여돌 (female) — 12팀 · 32곡 ----
  { id: "f01", name: "TWICE (트와이스)", group: "2015년 데뷔", song: "CHEER UP", gender: "female", youtubeId: "c7rCyll5AeY", start: 0 },
  { id: "f02", name: "TWICE (트와이스)", group: "2015년 데뷔", song: "TT", gender: "female", youtubeId: "ePpPVE-GGJw", start: 0 },
  { id: "f03", name: "TWICE (트와이스)", group: "2015년 데뷔", song: "What is Love?", gender: "female", youtubeId: "i0p1bmr0EmE", start: 0 },
  { id: "f04", name: "TWICE (트와이스)", group: "2015년 데뷔", song: "FANCY", gender: "female", youtubeId: "kOHB85vDuow", start: 0 },
  { id: "f05", name: "BLACKPINK (블랙핑크)", group: "2016년 데뷔", song: "뚜두뚜두 (DDU-DU DDU-DU)", gender: "female", youtubeId: "IHNzOHi8sJs", start: 0 },
  { id: "f06", name: "BLACKPINK (블랙핑크)", group: "2016년 데뷔", song: "How You Like That", gender: "female", youtubeId: "ioNng23DkIM", start: 0 },
  { id: "f07", name: "BLACKPINK (블랙핑크)", group: "2016년 데뷔", song: "마지막처럼 (AS IF IT'S YOUR LAST)", gender: "female", youtubeId: "Amq-qlqbjYA", start: 0 },
  { id: "f08", name: "BLACKPINK (블랙핑크)", group: "2016년 데뷔", song: "Kill This Love", gender: "female", youtubeId: "2S24-y0Ij3Y", start: 0 },
  { id: "f09", name: "Red Velvet (레드벨벳)", group: "2014년 데뷔", song: "Psycho", gender: "female", youtubeId: "uR8Mrt1IpXg", start: 0 },
  { id: "f10", name: "Red Velvet (레드벨벳)", group: "2014년 데뷔", song: "빨간 맛 (Red Flavor)", gender: "female", youtubeId: "WyiIGEHQP8o", start: 0 },
  { id: "f11", name: "Red Velvet (레드벨벳)", group: "2014년 데뷔", song: "Bad Boy", gender: "female", youtubeId: "J_CFBjAyPWE", start: 0 },
  { id: "f12", name: "MAMAMOO (마마무)", group: "2014년 데뷔", song: "음오아예 (Um Oh Ah Yeh)", gender: "female", youtubeId: "ELM-OpqiiZU", start: 0 },
  { id: "f13", name: "MAMAMOO (마마무)", group: "2014년 데뷔", song: "별이 빛나는 밤 (Starry Night)", gender: "female", youtubeId: "0FB2EoKTK_Q", start: 0 },
  { id: "f14", name: "MAMAMOO (마마무)", group: "2014년 데뷔", song: "데칼코마니 (Décalcomanie)", gender: "female", youtubeId: "y2OFPvYxZuY", start: 0 }, // 2016년 원본 MV는 내려가고 재공개된 공식 MV(STONE MUSIC)
  { id: "f15", name: "Lovelyz (러블리즈)", group: "2014년 데뷔", song: "Ah-Choo", gender: "female", youtubeId: "v7qisJ_KuYI", start: 0 },
  { id: "f16", name: "Lovelyz (러블리즈)", group: "2014년 데뷔", song: "Destiny (나의 지구)", gender: "female", youtubeId: "S_IBk0RCsOo", start: 0 },
  { id: "f17", name: "GFRIEND (여자친구)", group: "2015년 데뷔", song: "시간을 달려서 (Rough)", gender: "female", youtubeId: "0VKcLPdY9lI", start: 0 },
  { id: "f18", name: "GFRIEND (여자친구)", group: "2015년 데뷔", song: "오늘부터 우리는 (Me Gustas Tu)", gender: "female", youtubeId: "YYHyAIFG3iI", start: 0 },
  { id: "f19", name: "GFRIEND (여자친구)", group: "2015년 데뷔", song: "유리구슬 (Glass Bead)", gender: "female", youtubeId: "vKMeRMAVaDw", start: 0 },
  { id: "f20", name: "OH MY GIRL (오마이걸)", group: "2015년 데뷔", song: "살짝 설렜어 (Nonstop)", gender: "female", youtubeId: "iDjQSdN_ig8", start: 0 },
  { id: "f21", name: "OH MY GIRL (오마이걸)", group: "2015년 데뷔", song: "Dolphin", gender: "female", youtubeId: "oaRTMjLdiDw", start: 0 }, // Dolphin은 타이틀곡이 아니라 정식 MV가 없음 — 공식 채널의 "Special Clip"으로 대체
  { id: "f22", name: "OH MY GIRL (오마이걸)", group: "2015년 데뷔", song: "비밀정원 (Secret Garden)", gender: "female", youtubeId: "QIN5_tJRiyY", start: 0 }, // 1theK 공식 MV가 맞지만 oEmbed 조회가 막혀 있어(퍼가기 제한 가능성) 사이트에서 재생 안 될 수 있음
  { id: "f23", name: "WJSN (우주소녀)", group: "2016년 데뷔", song: "이루리 (As You Wish)", gender: "female", youtubeId: "Q93dY2qeMeU", start: 0 },
  { id: "f24", name: "WJSN (우주소녀)", group: "2016년 데뷔", song: "비밀이야 (Secret)", gender: "female", youtubeId: "5m2KBDBueAM", start: 0 },
  { id: "f25", name: "I.O.I (아이오아이)", group: "2016년 데뷔", song: "너무너무너무 (Very Very Very)", gender: "female", youtubeId: "GdxvD7r58ng", start: 0 },
  { id: "f26", name: "I.O.I (아이오아이)", group: "2016년 데뷔", song: "소나기 (Downpour)", gender: "female", youtubeId: "kbdW2LaKlnw", start: 0 },
  { id: "f27", name: "MOMOLAND (모모랜드)", group: "2016년 데뷔", song: "뿜뿜 (BBoom BBoom)", gender: "female", youtubeId: "JQGRg8XBnB4", start: 0 },
  { id: "f28", name: "MOMOLAND (모모랜드)", group: "2016년 데뷔", song: "BAAM", gender: "female", youtubeId: "txWmd7QKFe8", start: 0 },
  { id: "f29", name: "Dreamcatcher (드림캐쳐)", group: "2017년 데뷔", song: "BOCA", gender: "female", youtubeId: "MZ4JGye4dQU", start: 0 },
  { id: "f30", name: "Dreamcatcher (드림캐쳐)", group: "2017년 데뷔", song: "데자부 (Deja Vu)", gender: "female", youtubeId: "W761DtH1oRg", start: 0 },
  { id: "f31", name: "CLC (씨엘씨)", group: "2015년 데뷔", song: "HELICOPTER", gender: "female", youtubeId: "NeUODC6F7zk", start: 0 },
  { id: "f32", name: "CLC (씨엘씨)", group: "2015년 데뷔", song: "도깨비 (Hobgoblin)", gender: "female", youtubeId: "u9OxRFab6o4", start: 0 },

  // ---- 남돌 (male) — 14팀 · 32곡 ----
  { id: "m01", name: "BTS (방탄소년단)", group: "2013년 데뷔", song: "봄날 (Spring Day)", gender: "male", youtubeId: "xEeFrLSkMm8", start: 0 },
  { id: "m02", name: "BTS (방탄소년단)", group: "2013년 데뷔", song: "Dynamite", gender: "male", youtubeId: "gdZLi9oWNZg", start: 0 },
  { id: "m03", name: "BTS (방탄소년단)", group: "2013년 데뷔", song: "피 땀 눈물 (Blood Sweat & Tears)", gender: "male", youtubeId: "hmE9f-TEutc", start: 0 },
  { id: "m04", name: "EXO (엑소)", group: "2012년 데뷔", song: "으르렁 (Growl)", gender: "male", youtubeId: "I3dezFzsNss", start: 0 },
  { id: "m05", name: "EXO (엑소)", group: "2012년 데뷔", song: "Love Shot", gender: "male", youtubeId: "pSudEWBAYRE", start: 0 },
  { id: "m06", name: "EXO (엑소)", group: "2012년 데뷔", song: "CALL ME BABY", gender: "male", youtubeId: "yWfsla_Uh80", start: 0 },
  { id: "m07", name: "SEVENTEEN (세븐틴)", group: "2015년 데뷔", song: "아주 NICE (VERY NICE)", gender: "male", youtubeId: "KvA9T3MputA", start: 0 },
  { id: "m08", name: "SEVENTEEN (세븐틴)", group: "2015년 데뷔", song: "울고 싶지 않아 (Don't Wanna Cry)", gender: "male", youtubeId: "zEkg4GBQumc", start: 0 },
  { id: "m09", name: "GOT7 (갓세븐)", group: "2014년 데뷔", song: "딱 좋아 (Just Right)", gender: "male", youtubeId: "vrdk3IGcau8", start: 0 },
  { id: "m10", name: "GOT7 (갓세븐)", group: "2014년 데뷔", song: "니가 하면 (If You Do)", gender: "male", youtubeId: "T0iPB_JyS5g", start: 0 },
  { id: "m11", name: "BTOB (비투비)", group: "2012년 데뷔", song: "그리워하다 (Missing You)", gender: "male", youtubeId: "4bykFvnRzno", start: 0 },
  { id: "m12", name: "BTOB (비투비)", group: "2012년 데뷔", song: "너 없인 안 된다 (Only One for Me)", gender: "male", youtubeId: "fHQkdIGue3k", start: 0 },
  { id: "m13", name: "WINNER (위너)", group: "2014년 데뷔", song: "REALLY REALLY", gender: "male", youtubeId: "4tBnF46ybZk", start: 0 },
  { id: "m14", name: "WINNER (위너)", group: "2014년 데뷔", song: "공허해 (EMPTY)", gender: "male", youtubeId: "gEqlF5N8UMs", start: 0 },
  { id: "m15", name: "iKON (아이콘)", group: "2015년 데뷔", song: "사랑을 했다 (LOVE SCENARIO)", gender: "male", youtubeId: "vecSVX1QYbQ", start: 0 },
  { id: "m16", name: "iKON (아이콘)", group: "2015년 데뷔", song: "죽겠다 (KILLING ME)", gender: "male", youtubeId: "RyVS7R9PN6U", start: 0 },
  { id: "m17", name: "iKON (아이콘)", group: "2015년 데뷔", song: "취향저격 (MY TYPE)", gender: "male", youtubeId: "ZS6vfv4sszg", start: 0 },
  { id: "m18", name: "NCT 127", group: "2016년 데뷔", song: "영웅 (Kick It)", gender: "male", youtubeId: "2OvyA2__Eas", start: 0 },
  { id: "m19", name: "NCT 127", group: "2016년 데뷔", song: "Cherry Bomb", gender: "male", youtubeId: "WkuHLzMMTZM", start: 0 },
  { id: "m20", name: "NCT DREAM", group: "2016년 데뷔", song: "BOOM", gender: "male", youtubeId: "X-iJZ0gfKPo", start: 0 },
  { id: "m21", name: "NCT DREAM", group: "2016년 데뷔", song: "맛 (Hot Sauce)", gender: "male", youtubeId: "PkKnp4SdE-w", start: 0 },
  { id: "m22", name: "MONSTA X (몬스타엑스)", group: "2015년 데뷔", song: "HERO", gender: "male", youtubeId: "FZ9lJ5ctd0s", start: 0 }, // 일반 드라마형 MV가 아닌 옥상 퍼포먼스 형식이지만, 이 곡의 공식 MV(스타쉽 공식 채널)로 쓰이는 영상
  { id: "m23", name: "MONSTA X (몬스타엑스)", group: "2015년 데뷔", song: "DRAMARAMA", gender: "male", youtubeId: "xxwZe6QUqU0", start: 0 },
  { id: "m24", name: "Wanna One (워너원)", group: "2017년 데뷔", song: "에너제틱 (Energetic)", gender: "male", youtubeId: "EVaV7AwqBWg", start: 0 },
  { id: "m25", name: "Wanna One (워너원)", group: "2017년 데뷔", song: "Beautiful", gender: "male", youtubeId: "o4_tHTmniw4", start: 0 }, // 공식 MV (Movie ver.)
  { id: "m26", name: "Wanna One (워너원)", group: "2017년 데뷔", song: "부메랑 (BOOMERANG)", gender: "male", youtubeId: "pmMjkMtpnTc", start: 0 },
  { id: "m27", name: "VIXX (빅스)", group: "2012년 데뷔", song: "사슬 (Chained Up)", gender: "male", youtubeId: "vqzBrI76e4g", start: 0 },
  { id: "m28", name: "VIXX (빅스)", group: "2012년 데뷔", song: "도원경 (Shangri-La)", gender: "male", youtubeId: "CYEaI5y7QaM", start: 0 },
  { id: "m29", name: "NU'EST (뉴이스트)", group: "2012년 데뷔", song: "여보세요 (Hello)", gender: "male", youtubeId: "MwlKalNwGdk", start: 0 },
  { id: "m30", name: "NU'EST (뉴이스트)", group: "2012년 데뷔", song: "FACE", gender: "male", youtubeId: "gyXy0m-4bvE", start: 0 },
  { id: "m31", name: "PENTAGON (펜타곤)", group: "2016년 데뷔", song: "빛나리 (Shine)", gender: "male", youtubeId: "z4dH6hEMuwk", start: 0 },
  { id: "m32", name: "PENTAGON (펜타곤)", group: "2016년 데뷔", song: "데이지 (Daisy)", gender: "male", youtubeId: "W7ZIz4w9Edo", start: 0 },
];

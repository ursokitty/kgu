/* =========================================================
   경기대학교 중어중문전공 — 공통 스크립트
   - 한 / 中 / EN 번역 사전 (data-i18n)
   - 라이트 / 다크 전환, 스크롤 효과, 카운트업, 라이트박스
   - BARUN 일정 자동 분류 (오늘 날짜 기준)
   ※ "입력 예정" 문구는 data/ 자료를 받으면 교체한다.
   ========================================================= */
(function () {
  'use strict';

  /* ---------- 자리표시 문구 ---------- */
  var TBD = { ko: '내용 입력 예정', zh: '内容待补充', en: 'Content coming soon' };
  var CHECK = { ko: '학과사무실 확인 필요', zh: '请向系办公室确认', en: 'Please check with the department office' };

  /* ---------- 고유명사 (한 번만 정의) ---------- */
  var NAMES = {
    t1: { ko: '중국사회문화분석실무트랙', zh: '中国社会文化分析实务方向', en: 'Chinese Society & Culture Analysis Track' },
    t2: { ko: '중국어통번역트랙', zh: '汉语笔译口译方向', en: 'Chinese Translation & Interpretation Track' },
    t3: { ko: '중국무역전문가융합트랙', zh: '中国贸易专家融合方向', en: 'China Trade Specialist Convergence Track' },
    m1: { ko: '중국빅데이터분석', zh: '中国大数据分析', en: 'China Big Data Analytics' },
    m2: { ko: '중국어AI통번역', zh: '汉语AI笔译口译', en: 'Chinese AI Translation & Interpretation' }
  };

  /* ---------- 번역 사전 ---------- */
  var I18N = {
    brand: { ko: '중어중문전공', zh: '中国语言文学专业', en: 'Chinese Language & Literature' },
    brand_sub: { ko: '경기대학교 인문대학', zh: '京畿大学 人文学院', en: 'Kyonggi University · College of Humanities' },
    nav_curr: { ko: '교육과정', zh: '课程设置', en: 'Curriculum' },
    nav_tracks: { ko: '이수 경로', zh: '修读路径', en: 'Study Paths' },
    nav_act: { ko: '비교과', zh: '课外活动', en: 'Activities' },
    nav_ben: { ko: '학생 혜택', zh: '学生福利', en: 'Benefits' },
    m_about: { ko: '학과소개', zh: '学科介绍', en: 'About' },
    m_about_intro: { ko: '학과소개', zh: '学科介绍', en: 'About the department' },
    m_about_prof: { ko: '교수소개', zh: '教授介绍', en: 'Faculty' },
    m_about_loc: { ko: '위치 및 연락처', zh: '位置与联系方式', en: 'Location & contact' },
    m_major: { ko: '전공안내', zh: '专业指南', en: 'The Major' },
    m_goal: { ko: '목적 및 목표', zh: '目的与目标', en: 'Aims & goals' },
    m_core: { ko: '핵심역량', zh: '核心能力', en: 'Core competencies' },
    m_core_course: { ko: '과목별 핵심역량', zh: '各课程核心能力', en: 'Competencies by course' },
    m_map: { ko: '이수체계도', zh: '修读体系图', en: 'Course roadmap' },
    m_curr: { ko: '교과과정', zh: '课程设置', en: 'Curriculum' },
    m_curr_table: { ko: '2025 교육과정표', zh: '2025 课程表', en: '2025 course table' },
    m_curr_paths: { ko: '세 갈래 이수 경로', zh: '三条修读路径', en: 'Three study paths' },
    m_curr_fusion: { ko: '융합트랙 이수체계도', zh: '融合方向修读体系图', en: 'Convergence track roadmap' },
    m_curr_why: { ko: '재학생 만족도', zh: '在校生满意度', en: 'Student survey' },
    link_todo: { ko: '준비 중', zh: '准备中', en: 'Soon' },
    util_kgu: { ko: '경기대학교', zh: '京畿大学', en: 'Kyonggi University' },
    hero_h1: { ko: '경기대학교 중어중문전공 · 前进中文', zh: '京畿大学 中国语言文学专业 · 前进中文', en: 'Kyonggi University Chinese Language & Literature · 前进中文' },
    aria_brush: { ko: '前进中文 다시 쓰기', zh: '重新书写 前进中文', en: 'Write 前进中文 again' },
    search_btn: { ko: '통합검색', zh: '站内搜索', en: 'Search' },
    search_ph: { ko: '트랙, 장학금, 대륙제처럼 찾고 싶은 말을 입력하세요', zh: '输入想查找的内容，如方向、奖学金、大陆节', en: 'Search tracks, scholarships, events…' },
    search_close: { ko: '검색 닫기', zh: '关闭搜索', en: 'Close search' },
    search_popular: { ko: '많이 찾는 말', zh: '热门搜索', en: 'Popular' },
    search_count: { ko: '{n}개를 찾았어요', zh: '找到 {n} 条结果', en: '{n} results' },
    search_none: { ko: '찾는 내용이 없어요. 다른 말로 검색해 보세요.', zh: '没有找到相关内容，请换个关键词试试。', en: 'No results. Try another word.' },
    search_menu: { ko: '메뉴', zh: '菜单', en: 'Menu' },
    search_ext: { ko: '경기대 학과 페이지', zh: '京畿大学系网页', en: 'KGU department page' },
    video_open: { ko: 'YouTube에서 학과 소개 영상 보기', zh: '在YouTube观看专业介绍视频', en: 'Watch the department video on YouTube' },
    video_label: { ko: '학과 소개 영상', zh: '专业介绍视频', en: 'Department video' },
    video_yt: { ko: 'YouTube에서 보기', zh: '在YouTube观看', en: 'Watch on YouTube' },
    quick_label: { ko: '바로가기', zh: '快速链接', en: 'Quick links' },
    q_goal: { ko: '교육목표', zh: '培养目标', en: 'Aims' },
    q_paths: { ko: '이수 경로', zh: '修读路径', en: 'Study paths' },
    q_map: { ko: '이수체계도', zh: '修读体系图', en: 'Roadmap' },
    q_news: { ko: '학과 소식', zh: '学科动态', en: 'News' },
    q_act: { ko: '비교과', zh: '课外活动', en: 'Activities' },
    q_ben: { ko: '장학 · 혜택', zh: '奖学金·福利', en: 'Benefits' },
    q_kgu: { ko: '경기대학교', zh: '京畿大学', en: 'Kyonggi Univ.' },
    news_title: { ko: '학과 소식', zh: '学科动态', en: 'News' },
    tab_all: { ko: '전체', zh: '全部', en: 'All' },
    tab_live: { ko: '진행 중', zh: '进行中', en: 'Now' },
    tab_past: { ko: '지난 일정', zh: '已结束', en: 'Past' },
    single_tag: { ko: '전공 심화', zh: '深化专业', en: 'Go deeper' },
    fusion_tag: { ko: '무역학과 공동', zh: '与贸易学系共同', en: 'With Int’l Trade' },
    micro_tag: { ko: '단기 직무 역량', zh: '短期职业能力', en: 'Short job skills' },
    col_type: { ko: '구분', zh: '类别', en: 'Type' },
    col_track: { ko: '트랙 · 과정', zh: '方向·课程', en: 'Track / program' },
    col_learn: { ko: '무엇을 배우나요', zh: '学什么', en: 'What you learn' },
    rm_title: { ko: '중국무역전문가융합트랙 이수체계도', zh: '中国贸易专家融合方向 修读体系图', en: 'China Trade Specialist Track roadmap' },
    col_sem: { ko: '학년 · 학기', zh: '年级·学期', en: 'Year · semester' },
    rm_note: { ko: '( )는 학점/이론/실습 · 10과목 30학점 · 트랙 21학점 이상 이수 시 이수증 발급', zh: '（ ）内为学分/理论/实践 · 10门课30学分 · 修满21学分以上颁发结业证', en: '( ) credits/lecture/practice · 10 courses, 30 credits · certificate at 21+ credits' },
    sem21: { ko: '2학년 1학기', zh: '大二 第一学期', en: 'Year 2 · Sem 1' },
    sem22: { ko: '2학년 2학기', zh: '大二 第二学期', en: 'Year 2 · Sem 2' },
    sem31: { ko: '3학년 1학기', zh: '大三 第一学期', en: 'Year 3 · Sem 1' },
    sem32: { ko: '3학년 2학기', zh: '大三 第二学期', en: 'Year 3 · Sem 2' },
    sem41: { ko: '4학년 1학기', zh: '大四 第一学期', en: 'Year 4 · Sem 1' },
    c_trade1: { ko: '무역실무론', zh: '国际贸易实务', en: 'Trade Practice' },
    c_trade2: { ko: '무역계약론', zh: '贸易合同论', en: 'Trade Contracts' },
    c_trade3: { ko: '글로벌운송물류론', zh: '全球运输物流论', en: 'Global Transport & Logistics' },
    c_trade4: { ko: '무역결제론', zh: '贸易结算论', en: 'Trade Settlement' },
    c_trade5: { ko: '무역보험론', zh: '贸易保险论', en: 'Trade Insurance' },
    c_chn1: { ko: '중급중국어회화연습', zh: '中级汉语会话练习', en: 'Intermediate Chinese Conversation' },
    c_chn2: { ko: '중급중국어강독', zh: '中级汉语精读', en: 'Intermediate Chinese Reading' },
    c_chn3: { ko: '중국사회빅데이터분석(캡스톤디자인)', zh: '中国社会大数据分析（毕业设计）', en: 'Chinese Society Big Data Analysis (Capstone)' },
    c_chn4: { ko: '중국시장빅데이터분석', zh: '中国市场大数据分析', en: 'China Market Big Data Analysis' },
    c_chn5: { ko: '비즈니스중국어', zh: '商务汉语', en: 'Business Chinese' },
    ben_lead: { ko: '비교과 활동을 하면 이런 것을 얻을 수 있어요.', zh: '参加课外活动可以获得以下收获。', en: 'Here is what each activity gives you.' },
    col_activity: { ko: '활동', zh: '活动', en: 'Activity' },
    col_gain: { ko: '학생이 얻는 것', zh: '学生收获', en: 'What you get' },
    ben_a1: { ko: '중국어 프레젠테이션 및 토론 경진대회 · 대륙제', zh: '中文演讲与辩论大赛·大陆节', en: 'Debate contest · Daeryuk Festival' },
    ben_g1: { ko: '수상팀에 「김명환 동문 장학금」 (동문 발전기금)', zh: '获奖团队可获“金明焕校友奖学金”（校友发展基金）', en: 'Kim Myung-hwan Alumni Scholarship for winning teams (alumni fund)' },
    ben_a2: { ko: '학생 포트폴리오 경진대회', zh: '学生作品集大赛', en: 'Student Portfolio Competition' },
    ben_g2: { ko: '경력 관리, 수상 장학금 (동문 발전기금, CSI 우수학과 포상금 더함)', zh: '职业经历管理，获奖奖学金（校友发展基金及CSI优秀学科奖金）', en: 'Career records and prize scholarships (alumni fund plus CSI department award)' },
    ben_a3: { ko: '전공 MATE', zh: '专业MATE', en: 'Major MATE' },
    ben_g3: { ko: '교수님과 함께하는 소그룹 학습, 우수팀 장학금 (2025-1 최우수상 1,000,000원)', zh: '与教授一起的小组学习，优秀团队奖学金（2025年第一学期最优秀奖100万韩元）', en: 'Small-group study with professors, team scholarships (top award spring 2025: KRW 1,000,000)' },
    ben_a4: { ko: '우그웨이&포', zh: '乌龟大师&阿宝', en: 'Oogway & Po' },
    ben_g4: { ko: '교과 심화 · 어학자격증 준비, 장학금', zh: '课程深化·语言证书备考，奖学金', en: 'Deeper course study, language test prep, scholarships' },
    ben_a5: { ko: '브릿지 동문 취업 특강', zh: '桥梁校友就业讲座', en: 'Bridge Alumni Career Talks' },
    ben_g5: { ko: '직무 이해, 현직 동문과의 연결', zh: '了解职务，结识在职校友', en: 'Understand jobs, meet working alumni' },
    ben_a6: { ko: 'KGU_중어중문 동문 취업지원센터', zh: 'KGU中文系校友就业支援中心', en: 'KGU Chinese Alumni Career Center' },
    ben_g6: { ko: '멘토링, 이력서 · 모의면접, 국내외 취업 연계, 현장실습', zh: '辅导、简历·模拟面试、国内外就业对接、现场实习', en: 'Mentoring, CV & mock interviews, job links, internships' },
    story_title: { ko: '1분이면 알 수 있어요', zh: '一分钟了解我们', en: 'Get the picture in a minute' },
    story_lead: { ko: '중어중문전공에서 무엇을 배우고 무엇을 얻는지 넘겨 보세요.', zh: '翻一翻，看看在中文系能学到什么、收获什么。', en: 'Tap through what you learn and what you get.' },
    st1_k: { ko: '세 갈래 이수 경로', zh: '三条修读路径', en: 'Three study paths' },
    st1_t: { ko: '진로에 맞춰\n길을 고를 수 있어요', zh: '根据就业方向\n选择适合的路径', en: 'Pick the path\nthat fits your plans' },
    st2_t: { ko: '전공을 더 깊게\n파고들고 싶다면', zh: '想深入学习\n本专业的话', en: 'Want to go deeper\ninto the major?' },
    st4_t: { ko: '필요한 역량만\n짧게 익히고 싶다면', zh: '只想短期掌握\n所需能力的话', en: 'Want just the skills\nyou need, quickly?' },
    st5_t: { ko: '현장실습 기회가 아쉽다는\n목소리를 들었어요', zh: '我们听到了\n希望增加实习机会的声音', en: 'Students told us they\nwanted more hands-on practice' },
    sv6: { ko: '교과목 통한 현장실습 기회', zh: '课程中的实习机会', en: 'Internships through courses' },
    sv7: { ko: '실습학기제 현장실습 기회', zh: '实习学期制实习机会', en: 'Internship-semester placements' },
    sv8: { ko: '산업 연계 교과목 실무역량 도움', zh: '产业联动课程的实务帮助', en: 'Industry courses build job skills' },
    sv_avg: { ko: '전체 문항 평균', zh: '全部项目平均', en: 'Average of all items' },
    st6_t: { ko: '1년 동안\n이렇게 성장해요', zh: '一年里\n这样成长', en: 'How you grow\nover a year' },
    st6_1: { ko: '우그웨이&포 · 전공 MATE', zh: '乌龟大师&阿宝 · 专业MATE', en: 'Oogway & Po · Major MATE' },
    st6_2: { ko: '토론 경진대회 · 대륙제 · 브릿지 특강', zh: '辩论大赛 · 大陆节 · 桥梁讲座', en: 'Debate contest · Daeryuk · Bridge talks' },
    st6_3: { ko: '포트폴리오 경진대회 · 동문 취업지원센터', zh: '作品集大赛 · 校友就业支援中心', en: 'Portfolio contest · Alumni career center' },
    st7_t: { ko: '열심히 하면\n장학금도 받아요', zh: '努力就能\n获得奖学金', en: 'Work hard and\nearn scholarships' },
    won: { ko: '원', zh: '韩元', en: ' KRW' },
    st7_f: { ko: '2025-1 전공 MATE 최우수상 장학금이에요. 토론 경진대회 · 대륙제 · 포트폴리오 경진대회 수상팀도 장학금을 받아요.', zh: '这是2025年第一学期专业MATE最优秀奖奖学金。辩论大赛、大陆节、作品集大赛的获奖团队也可获得奖学金。', en: 'Top Major MATE award, spring 2025. Winners of the debate contest, Daeryuk and the portfolio contest also get scholarships.' },
    aria_prev: { ko: '이전 이야기', zh: '上一页', en: 'Previous' },
    aria_next: { ko: '다음 이야기', zh: '下一页', en: 'Next' },
    aria_pause: { ko: '자동 넘김 멈추기 / 다시 시작', zh: '暂停 / 继续自动播放', en: 'Pause / resume' },
    rm_lead: { ko: '스크롤을 내리면 학기마다 듣는 과목이 하나씩 켜져요.', zh: '向下滚动，每学期的课程会依次亮起。', en: 'Scroll down and each semester’s courses light up.' },
    rm_credits: { ko: '학점 이수', zh: '学分', en: 'credits so far' },
    rm_cert: { ko: '이수증 기준 달성', zh: '达到结业证标准', en: 'Certificate reached' },
    hb_aria: { ko: '홍바오 봉투 열기', zh: '打开红包', en: 'Open the red envelope' },
    hb_kicker: { ko: '2025-1 전공 MATE 최우수상', zh: '2025年第一学期 专业MATE最优秀奖', en: 'Major MATE top award · spring 2025' },
    hb_desc: { ko: '<중국시사문화연구회>가 받은 장학금이에요.', zh: '《中国时事文化研究会》获得的奖学金。', en: 'Won by the China Current Affairs & Culture group.' },
    hb_hint: { ko: '봉투를 위로 밀거나 눌러서 열어 보세요', zh: '向上滑动或点击打开红包', en: 'Swipe up or tap to open' },
    hb_reset: { ko: '다시 봉하기', zh: '重新封上', en: 'Seal it again' },
    /* ---- 학과소개 (data/04_about.md) ---- */
    crumbs: { ko: '현재 위치', zh: '当前位置', en: 'Breadcrumb' },
    crumb_home: { ko: '홈', zh: '首页', en: 'Home' },
    about_h1: { ko: '학과소개', zh: '学科介绍', en: 'About the Department' },
    about_lead: { ko: '1984년에 문을 연 중어중문학과는 전공 지식과 실무 능력을 함께 갖춘 미래의 중국 전문가를 길러요.', zh: '创立于1984年的中文系，致力于培养兼具专业知识与实务能力的未来中国通。', en: 'Founded in 1984, we train future China specialists with both deep knowledge and practical skills.' },
    fact_year_k: { ko: '창설', zh: '创立', en: 'Founded' },
    fact_year_u: { ko: '년', zh: '年', en: '' },
    fact_uni_k: { ko: '교환학생 협정 대학', zh: '交换生协议大学', en: 'Exchange partners' },
    fact_uni_u: { ko: '여 개', zh: '余所', en: '+ universities' },
    fact_lv_k: { ko: '수준별 중국어', zh: '分级汉语课程', en: 'Chinese levels' },
    fact_lv_u: { ko: '단계 (초·중·고급)', zh: '级（初·中·高级）', en: ' levels' },
    intro_t: { ko: '어떤 학과인가요', zh: '我们是怎样的专业', en: 'Who we are' },
    intro_p1: { ko: '중국은 빠른 경제 성장과 사회 변화로 G2 국가가 되었어요. 그만큼 중어중문학은 경쟁력 있고 전망이 밝은 분야로 자리 잡았어요.', zh: '中国凭借快速的经济增长与社会变化成为G2国家，中文专业也因此成为最具竞争力、前景光明的领域。', en: 'With rapid growth and social change, China has become a G2 power, making Chinese studies one of the most competitive and promising fields.' },
    intro_p2: { ko: '이런 흐름에 맞춰 우리 학과는 전문적인 전공 지식과 실용적인 실무 능력을 두루 갖춘, 능동적인 미래의 중국 전문가를 기르고 있어요.', zh: '顺应这一趋势，本专业致力于培养兼具专业知识与实用能力、积极主动的未来中国专家。', en: 'In step with this, we train proactive future China experts who combine specialist knowledge with practical skills.' },
    learn_t: { ko: '무엇을 배우나요', zh: '学什么', en: 'What you learn' },
    learn_lead: { ko: '언어 능력을 기본으로 다지고, 그 위에 중국 인문학과 사회 문화를 쌓아요.', zh: '以语言能力为基础，再积累中国人文与社会文化知识。', en: 'Language first, then Chinese humanities, society and culture on top.' },
    lang_t: { ko: '중국어학', zh: '汉语', en: 'Chinese language' },
    lang_d: { ko: '초급 · 중급 · 고급 수준에 맞춰 독해 · 회화 · 듣기 · 쓰기 강좌를 고르게 열어요.', zh: '按初级、中级、高级水平，均衡开设阅读、会话、听力、写作课程。', en: 'Reading, speaking, listening and writing courses at beginner, intermediate and advanced levels.' },
    skill_read: { ko: '독해', zh: '阅读', en: 'Read' },
    skill_talk: { ko: '회화', zh: '会话', en: 'Speak' },
    skill_listen: { ko: '듣기', zh: '听力', en: 'Listen' },
    skill_write: { ko: '쓰기', zh: '写作', en: 'Write' },
    lv1: { ko: '초급', zh: '初级', en: 'Beginner' },
    lv2: { ko: '중급', zh: '中级', en: 'Intermediate' },
    lv3: { ko: '고급', zh: '高级', en: 'Advanced' },
    hum_t: { ko: '중국 인문학 · 사회 문화', zh: '中国人文·社会文化', en: 'Humanities, society & culture' },
    hum_d: { ko: '중국 인문학의 정수인 문사철(文史哲)의 지식과 지혜를 길러요.', zh: '培养中国人文学精髓——文史哲的知识与智慧。', en: 'Build knowledge and insight in the core of Chinese humanities: literature, history and philosophy.' },
    wsz_1: { ko: '문학', zh: '文学', en: 'Literature' },
    wsz_2: { ko: '역사', zh: '历史', en: 'History' },
    wsz_3: { ko: '철학', zh: '哲学', en: 'Philosophy' },
    hum_foot: { ko: '경서 · 문학 · 문화 강좌로 중국 사회 문화를 깊이 이해하고, G2 시대에 맞는 창조적 리더십으로 키워요.', zh: '通过经书、文学、文化课程深入理解中国社会文化，并升华为适应G2时代的创造性领导力。', en: 'Classics, literature and culture courses deepen your understanding and grow into creative leadership for the G2 era.' },
    ex_t: { ko: '중국 · 대만에서 공부해요', zh: '到中国·台湾学习', en: 'Study in China & Taiwan' },
    ex_lead: { ko: '20여 개 대학과 교환학생 협정을 맺고 학점을 서로 인정해요. 현지에서 생생한 중국어와 국제 감각을 익힐 수 있어요.', zh: '与20余所大学签订交换生协议并互认学分，可在当地学习地道汉语、培养国际视野。', en: 'Exchange agreements with 20+ universities, with credit transfer. Learn real-world Chinese and gain a global outlook.' },
    r_cn: { ko: '중국', zh: '中国', en: 'China' },
    r_tw: { ko: '대만', zh: '台湾', en: 'Taiwan' },
    u_sd: { ko: '산동대학', zh: '山东大学', en: 'Shandong University' },
    u_sy: { ko: '심양사범대학', zh: '沈阳师范大学', en: 'Shenyang Normal University' },
    u_sz: { ko: '심천대학', zh: '深圳大学', en: 'Shenzhen University' },
    u_hit: { ko: '하얼빈공업대학', zh: '哈尔滨工业大学', en: 'Harbin Institute of Technology' },
    u_nccu: { ko: '국립정치대학', zh: '国立政治大学', en: 'National Chengchi University' },
    u_tku: { ko: '담강대학', zh: '淡江大学', en: 'Tamkang University' },
    u_more: { ko: '외 20여 개 대학', zh: '等20余所大学', en: 'and more — 20+ in total' },
    goals_t: { ko: '교육목표', zh: '培养目标', en: 'Educational goals' },
    goal1: { ko: '인문학적 소양을 바탕으로 비판적 사고력과 바른 품성을 갖춘 창의적 인재', zh: '以人文素养为基础，具备批判性思维与良好品格的创新型人才', en: 'Creative people with critical thinking and good character, grounded in the humanities' },
    goal2: { ko: '중국어 회화에 능통하고 중국어문학 및 중국 사회문화에 관한 전문지식을 갖춘 전문인', zh: '精通汉语会话、具备中国语言文学及社会文化专业知识的专业人才', en: 'Professionals fluent in spoken Chinese with expert knowledge of Chinese language, literature, society and culture' },
    goal3: { ko: '한 · 중 교류에 능동적으로 대처할 수 있는 글로벌 마인드와 리더십을 겸비한 인재', zh: '能积极应对韩中交流、兼具全球视野与领导力的人才', en: 'People with a global mindset and leadership, ready for Korea–China exchange' },
    goal4: { ko: '공감소통능력과 사회적 책임의식을 갖춘 올바른 인재', zh: '具备共情沟通能力与社会责任感的正直人才', en: 'Responsible people who communicate with empathy' },
    life_t: { ko: '학생 활동', zh: '学生活动', en: 'Student life' },
    life_lead: { ko: '학과가 생긴 뒤로 학생회를 중심으로 다양한 활동을 이어 오고 있어요.', zh: '自建系以来，以学生会为中心开展了丰富多彩的活动。', en: 'Since the department began, the student council has led a wide range of activities.' },
    may: { ko: '5월', zh: '5月', en: 'May' },
    nov: { ko: '11월', zh: '11月', en: 'November' },
    allyear: { ko: '연중', zh: '全年', en: 'All year' },
    ev_may: { ko: '동문체육대회', zh: '校友运动会', en: 'Alumni Sports Day' },
    ev_may_d: { ko: '졸업한 선배들과 함께하며 선후배 정을 나눠요.', zh: '与毕业学长学姐一起，增进前后辈情谊。', en: 'Games with graduates that bring seniors and juniors together.' },
    ev_nov: { ko: '대륙제', zh: '大陆节', en: 'Daeryuk Festival' },
    ev_nov_d: { ko: '학과 동아리들이 더빙 · 합창 · 원어연극 · 풍물 · 문학작품 소개 무대를 올려요.', zh: '系内社团呈现配音、合唱、原语话剧、农乐与文学作品介绍等舞台。', en: 'Clubs stage dubbing, choir, Chinese plays, pungmul drumming and literature talks.' },
    ev_study: { ko: '유학생 스터디', zh: '留学生学习小组', en: 'Study groups' },
    ev_study_d: { ko: '중국인 유학생과 함께하는 소규모 스터디로 중국어 기초를 다져요.', zh: '与中国留学生组成小组学习，夯实汉语基础。', en: 'Small groups with Chinese international students to build your basics.' },
    clubs_t: { ko: '대륙제를 만드는 동아리', zh: '打造大陆节的社团', en: 'The clubs behind Daeryuk' },
    club1: { ko: '한어전영공작회', zh: '汉语电影工作会', en: 'Hanyu Film Workshop' }, club1_d: { ko: '중국어 더빙', zh: '中文配音', en: 'Chinese dubbing' },
    club2: { ko: '비천성', zh: '飞天声', en: 'Bicheonseong' }, club2_d: { ko: '중국노래 합창', zh: '中文歌曲合唱', en: 'Chinese choir' },
    club3: { ko: '우연', zh: '偶然', en: 'Uyeon' }, club3_d: { ko: '중국어 연극', zh: '中文话剧', en: 'Chinese theatre' },
    club4: { ko: '다물', zh: '多勿', en: 'Damul' }, club4_d: { ko: '풍물패', zh: '农乐队', en: 'Pungmul drumming' },
    club5: { ko: '중국문학연구회', zh: '中国文学研究会', en: 'Chinese Literature Society' }, club5_d: { ko: '중국문학작품 소개', zh: '中国文学作品介绍', en: 'Literature talks' },
    car_t: { ko: '졸업 후 진로', zh: '毕业去向', en: 'After graduation' },
    car_lead: { ko: '졸업생들은 여러 분야로 진출해요. 최근에는 중국 · 대만 기업에 취업하는 동문도 늘고 있어요.', zh: '毕业生进入多个领域。近年来，在中国、台湾企业就业的校友也越来越多。', en: 'Graduates work in many fields, and more are joining companies in China and Taiwan.' },
    car1: { ko: '대기업 · 무역회사 중국 관련 부서', zh: '大企业·贸易公司 涉华部门', en: 'China teams at large firms & trading companies' },
    car1_d: { ko: '가장 많은 동문이 일하는 분야예요. 중국 지사로 파견 근무를 하기도 해요.', zh: '校友最多的领域，也有人被派往中国分公司工作。', en: 'Where most alumni work, including postings to China branches.' },
    car2: { ko: '중국 · 대만 기업', zh: '中国·台湾企业', en: 'Companies in China & Taiwan' },
    car2_d: { ko: '최근 취업하는 동문이 늘고 있어요.', zh: '近年来就业的校友不断增加。', en: 'A growing number of recent graduates.' },
    car3: { ko: '중 · 고등학교 교원', zh: '初高中教师', en: 'Middle & high school teacher' },
    car3_d: { ko: '학부 교직 과정을 이수해 교원 자격증을 받을 수 있어요.', zh: '可修读本科教职课程，取得教师资格证。', en: 'Take the teacher-training course to earn a teaching licence.' },
    car4: { ko: '통번역 · 출판 · 언론', zh: '翻译·出版·媒体', en: 'Translation, publishing & media' },
    car4_d: { ko: '언어 전문성을 살리는 분야예요.', zh: '发挥语言专长的领域。', en: 'Fields that use your language expertise.' },
    car5: { ko: '대학원 · 중국 유학', zh: '研究生·赴华留学', en: 'Graduate school & study in China' },
    car5_d: { ko: '학업을 이어 대학교수 · 강사로 활동하는 동문도 많아요.', zh: '继续深造并成为大学教授、讲师的校友也很多。', en: 'Many continue on to become professors and lecturers.' },
    fields_t: { ko: '동문들이 일하는 곳', zh: '校友就职领域', en: 'Where alumni work' },
    f_air: { ko: '항공사', zh: '航空公司', en: 'Airlines' },
    f_travel: { ko: '여행사', zh: '旅行社', en: 'Travel agencies' },
    f_hotel: { ko: '호텔', zh: '酒店', en: 'Hotels' },
    f_casino: { ko: '카지노', zh: '娱乐场', en: 'Casinos' },
    f_show: { ko: '해외 공연 기획', zh: '海外演出策划', en: 'Overseas event planning' },
    f_academy: { ko: '학원', zh: '培训机构', en: 'Language schools' },
    f_interp: { ko: '통번역', zh: '翻译', en: 'Interpreting & translation' },
    f_pub: { ko: '출판', zh: '出版', en: 'Publishing' },
    f_press: { ko: '언론', zh: '媒体', en: 'Media' },
    f_fin: { ko: '금융', zh: '金融', en: 'Finance' },
    car_trend: { ko: '최근에는 중국과 대만 기업에 취업한 동문이 늘고 있어요.', zh: '近年来，在中国和台湾企业就业的校友不断增加。', en: 'Recently, more alumni are joining companies in China and Taiwan.' },
    loc_t: { ko: '위치 및 연락처', zh: '位置与联系方式', en: 'Location & contact' },
    loc_lead: { ko: '학과사무실은 수원캠퍼스 예지관에 있어요.', zh: '系办公室位于水原校区예지관（Yeji Hall）。', en: 'The department office is in Yeji Hall on the Suwon campus.' },
    loc_addr_k: { ko: '주소', zh: '地址', en: 'Address' },
    loc_addr: { ko: '경기대학교 수원캠퍼스 예지관 4101호', zh: '京畿大学 水原校区 예지관（Yeji Hall）4101室', en: 'Room 4101, Yeji Hall, Suwon Campus, Kyonggi University' },
    loc_tel_k: { ko: '전화', zh: '电话', en: 'Phone' },
    loc_office: { ko: '중어중문전공 학과사무실', zh: '中国语言文学专业 系办公室', en: 'Chinese Language & Literature department office' },
    copy_addr: { ko: '주소 복사', zh: '复制地址', en: 'Copy address' },
    copy_tel: { ko: '전화번호 복사', zh: '复制电话', en: 'Copy phone number' },
    copied: { ko: '복사했어요', zh: '已复制', en: 'Copied' },
    map_kakao: { ko: '카카오맵', zh: 'Kakao地图', en: 'Kakao Map' },
    map_naver: { ko: '네이버 지도', zh: 'Naver地图', en: 'Naver Map' },
    map_google: { ko: '구글 지도', zh: 'Google地图', en: 'Google Maps' },
    map_fallback: { ko: '눌러서 지도에서 보기', zh: '点击在地图中查看', en: 'Open in a map' },
    hero_search_ph: { ko: '무엇이 궁금하세요? 예: 융합트랙, 장학금', zh: '想了解什么？例如：融合方向、奖学金', en: 'What are you looking for? e.g. scholarships' },
    board_t: { ko: '공지 · 소식', zh: '公告·动态', en: 'Notices & news' },
    tab_notice: { ko: '공지사항', zh: '公告', en: 'Notices' },
    notice_empty: { ko: '아직 올라온 공지가 없어요.', zh: '暂无公告。', en: 'No notices yet.' },
    m_grad: { ko: '졸업요건', zh: '毕业要求', en: 'Graduation requirements' },
    grad_t: { ko: '졸업요건', zh: '毕业要求', en: 'Graduation' },
    grad_single: { ko: '단일전공', zh: '单一专业', en: 'Single major' },
    grad_double: { ko: '복수전공', zh: '双专业', en: 'Double major' },
    grad_total_k: { ko: '졸업 최저 이수학점', zh: '毕业最低学分', en: 'Minimum credits to graduate' },
    credit_u: { ko: '학점', zh: '学分', en: ' cr' },
    grad_gen: { ko: '교양 / MSC 최저', zh: '通识/MSC 最低', en: 'General ed / MSC min.' },
    grad_major: { ko: '전공 최저', zh: '专业 最低', en: 'Major min.' },
    req_mreq: { ko: '전공필수', zh: '专业必修', en: 'Major required' },
    req_mreq_v: { ko: '0과목 이수', zh: '修0门', en: '0 courses' },
    req_msel: { ko: '전공선택', zh: '专业选修', en: 'Major elective' },
    req_msel_v: { ko: '4과목 이수', zh: '修4门', en: '4 courses' },
    req_breq: { ko: '학부기초필수', zh: '学部基础必修', en: 'Division core' },
    req_breq_v: { ko: '2과목 이수', zh: '修2门', en: '2 courses' },
    req_bsel: { ko: '학부기초선택', zh: '学部基础选修', en: 'Division elective' },
    req_bsel_v: { ko: '2과목 이수 (2학기 과목 중 선택)', zh: '修2门（从第二学期课程中选）', en: '2 courses (from semester-2 list)' },
    grad_note: { ko: '2025 교육과정표 기준이에요. 그 밖의 졸업요건은 학과사무실 확인 필요.', zh: '依据2025课程表。其他毕业要求请向系办公室确认。', en: 'Based on the 2025 course table. For other requirements, check with the department office.' },
    fy_t: { ko: '학년별 맞춤 안내', zh: '按年级查看', en: 'Find what you need' },
    fy_lead: { ko: '지금 나에게 필요한 것만 골라 보여 드려요.', zh: '只为你展示现在需要的内容。', en: 'Pick where you are and we’ll show what matters now.' },
    aud_hs: { ko: '고등학생', zh: '高中生', en: 'High school' },
    aud_y1: { ko: '1학년', zh: '大一', en: 'Year 1' },
    aud_mid: { ko: '재학생', zh: '在校生', en: 'Year 2–3' },
    aud_y4: { ko: '4학년', zh: '大四', en: 'Year 4' },
    fy_hs_t: { ko: '중어중문전공이\n궁금하다면', zh: '想了解\n中文专业的话', en: 'Curious about\nthe department?' },
    fy_y1_t: { ko: '학과에 먼저\n익숙해져요', zh: '先熟悉\n专业生活', en: 'Settle in\nfirst' },
    fy_mid_t: { ko: '나에게 맞는\n경로를 정해요', zh: '选择\n适合自己的路径', en: 'Choose\nyour path' },
    fy_y4_t: { ko: '졸업과 취업을\n챙겨요', zh: '做好\n毕业与就业准备', en: 'Get ready to\ngraduate' },
    fy_hs1: { ko: '학과소개', zh: '学科介绍', en: 'About the department' },
    fy_hs1_d: { ko: '1984년에 문을 연 학과, 무엇을 배우는지 한눈에', zh: '创立于1984年，一览所学内容', en: 'Founded in 1984 — what you’ll learn, at a glance' },
    fy_hs2: { ko: '1분 소개', zh: '一分钟介绍', en: 'One-minute intro' },
    fy_hs2_d: { ko: '배우는 것과 얻는 것을 넘겨 보며 알아봐요', zh: '翻一翻，了解所学与所得', en: 'Tap through what you learn and get' },
    fy_hs3: { ko: '학과 소개 영상', zh: '专业介绍视频', en: 'Department video' },
    fy_hs3_d: { ko: '맨 위 배너에서 바로 볼 수 있어요', zh: '可在页面顶部直接观看', en: 'Plays in the banner at the top' },
    fy_hs4: { ko: '졸업 후 진로', zh: '毕业去向', en: 'After graduation' },
    fy_hs4_d: { ko: '대기업 · 무역회사부터 항공사 · 호텔 · 교원까지', zh: '从大企业、贸易公司到航空、酒店、教师', en: 'From trading firms to airlines, hotels and teaching' },
    fy_hs5: { ko: '교환학생', zh: '交换生', en: 'Exchange study' },
    fy_hs5_d: { ko: '중국 · 대만 20여 개 대학과 학점 교류', zh: '与中国、台湾20余所大学学分互认', en: 'Credit exchange with 20+ universities in China & Taiwan' },
    fy_y11: { ko: '우그웨이&포', zh: '乌龟大师&阿宝', en: 'Oogway & Po' },
    fy_y11_d: { ko: '선배 튜터와 함께 공부하고 어학자격증을 준비해요 · 1학기', zh: '与学长学姐一起学习并准备语言证书 · 第一学期', en: 'Study with senior tutors and prep for language tests · spring' },
    fy_y12: { ko: '전공 MATE', zh: '专业MATE', en: 'Major MATE' },
    fy_y12_d: { ko: '교수님과 소그룹으로 · 성조 발음 교정 같은 전공기초 프로그램도 있어요', zh: '与教授的小组学习 · 也有声调发音纠正等基础项目', en: 'Small groups with professors, incl. tone-pronunciation basics' },
    fy_y13: { ko: '대륙제', zh: '大陆节', en: 'Daeryuk Festival' },
    fy_y13_d: { ko: '11월 · 선배 멘토와 1학년 멘티가 함께 무대를 준비해요', zh: '11月 · 学长导师与新生一起准备舞台', en: 'November · mentors and first-years stage it together' },
    fy_y14: { ko: '세 갈래 이수 경로 미리 보기', zh: '提前了解三条修读路径', en: 'Preview the three paths' },
    fy_y14_d: { ko: '융합트랙은 2학년 1학기부터 시작해요', zh: '融合方向从大二第一学期开始', en: 'The convergence track starts in Year 2, semester 1' },
    fy_m1: { ko: '세 갈래 이수 경로', zh: '三条修读路径', en: 'Three study paths' },
    fy_m1_d: { ko: '단일트랙 · 융합트랙 · 마이크로디그리 중에서 골라요', zh: '在单一方向、融合方向、微学位中选择', en: 'Single-major, convergence or micro-degree' },
    fy_m2: { ko: '융합트랙 이수체계도', zh: '融合方向修读体系图', en: 'Convergence track roadmap' },
    fy_m2_d: { ko: '학기별로 들을 과목과 쌓이는 학점', zh: '各学期课程与累计学分', en: 'Courses and credits, semester by semester' },
    fy_m3: { ko: '중국어 프레젠테이션 및 토론 경진대회', zh: '中文演讲与辩论大赛', en: 'Chinese Presentation & Debate Contest' },
    fy_m3_d: { ko: '1학기 · 수상팀은 「김명환 동문 장학금」', zh: '第一学期 · 获奖团队获“金明焕校友奖学金”', en: 'Spring · winners get the Kim Myung-hwan Alumni Scholarship' },
    fy_m4: { ko: '브릿지 동문 취업 특강', zh: '桥梁校友就业讲座', en: 'Bridge Alumni Career Talks' },
    fy_m4_d: { ko: '매 학기 현직 동문 2명을 만나요', zh: '每学期与两位在职校友见面', en: 'Meet two working alumni every semester' },
    fy_m5: { ko: '지금 신청할 수 있는 프로그램', zh: '现在可报名的项目', en: 'Programs open now' },
    fy_m5_d: { ko: 'BARUN 비교과 소식', zh: 'BARUN课外活动动态', en: 'BARUN program news' },
    fy_41: { ko: '학생 포트폴리오 경진대회', zh: '学生作品集大赛', en: 'Student Portfolio Competition' },
    fy_41_d: { ko: '2학기 · 교과목 · 경력 두 부문으로 취업 준비', zh: '第二学期 · 课程与经历两个部分', en: 'Fall · course and career portfolios' },
    fy_42: { ko: 'KGU_중어중문 동문 취업지원센터', zh: 'KGU中文系校友就业支援中心', en: 'KGU Chinese Alumni Career Center' },
    fy_42_d: { ko: '선배 멘토링, 이력서 · 모의면접, 국내외 취업 연계', zh: '学长辅导、简历·模拟面试、国内外就业对接', en: 'Mentoring, CVs & mock interviews, job links' },
    fy_43: { ko: '졸업 후 진로', zh: '毕业去向', en: 'After graduation' },
    fy_43_d: { ko: '동문들이 일하는 분야 살펴보기', zh: '看看校友就职的领域', en: 'See where alumni work' },
    aria_theme: { ko: '밝은 화면 / 어두운 화면 바꾸기', zh: '切换浅色 / 深色模式', en: 'Switch light / dark mode' },
    aria_menu: { ko: '메뉴 열기', zh: '打开菜单', en: 'Open menu' },

    hero_kicker: { ko: '2025 교육과정 개편', zh: '2025 课程改革', en: '2025 curriculum update' },
    hero_title: { ko: '중국어에, 나만의 전공 한 줄을 더하다', zh: '在中文之上，规划你的专业方向', en: 'Chinese, plus the path you choose' },
    hero_lead: {
      ko: '단일트랙, 융합트랙, 마이크로디그리. 세 갈래 중에서 나에게 맞는 길을 고를 수 있어요.',
      zh: '单一方向、融合方向、微学位，三条路径任你选择。',
      en: 'Single-major tracks, a convergence track and micro-degrees. Pick the path that fits you.'
    },
    hero_cta1: { ko: '이수 경로 보기', zh: '查看修读路径', en: 'See study paths' },
    hero_cta2: { ko: '프로그램 일정', zh: '项目日程', en: 'Program schedule' },
    now_title: { ko: '지금 진행 중', zh: '正在进行', en: 'Happening now' },
    now_empty: { ko: '지금 모집 중인 프로그램이 없어요.', zh: '目前没有正在招募的项目。', en: 'Nothing is open right now.' },

    stat_paths: { ko: '갈래의 이수 경로', zh: '条修读路径', en: 'study paths' },
    stat_programs: { ko: '개 트랙 · 마이크로디그리', zh: '个方向 · 微学位', en: 'tracks & micro-degrees' },
    stat_credits: { ko: '학점 · 융합트랙', zh: '学分 · 融合方向', en: 'credits · convergence track' },
    stat_teach: { ko: '교수 강의의 질 · 5점 척도', zh: '教授授课质量 · 5分制', en: 'teaching quality · out of 5' },

    paths_kicker: { ko: 'Study Paths', zh: 'Study Paths', en: 'Study Paths' },
    paths_title: { ko: '세 갈래 이수 경로', zh: '三条修读路径', en: 'Three study paths' },
    paths_lead: { ko: '전공을 깊게 팔지, 다른 학과와 함께 배울지, 짧게 한 분야를 익힐지 고르면 돼요.', zh: '深化专业、跨系学习，或短期掌握一个领域，由你决定。', en: 'Go deeper, learn with another department, or pick up one focused skill.' },
    single: { ko: '단일트랙', zh: '单一方向', en: 'Single-major Tracks' },
    single_desc: { ko: '전공을 깊게 파는 길이에요. 산업 수요에 맞춰 2개 트랙으로 다시 짰어요.', zh: '深化专业的路径。根据产业需求重组为两个方向。', en: 'Go deeper in the major. Rebuilt into two tracks around industry needs.' },
    t1: NAMES.t1, t1_desc: { ko: '중국 자료를 모으고 해석해서 시장과 산업을 분석하는 힘을 길러요.', zh: '培养收集、解读中国资料并分析市场与产业的能力。', en: 'Collect and read Chinese sources, then use them to analyse markets and industries.' },
    t2: NAMES.t2, t2_desc: { ko: 'AI 번역 결과가 정확하고 알맞은지 검토하고, 상황에 맞게 고쳐 전달하는 힘을 길러요.', zh: '培养审校AI翻译结果、并根据场合修改与传达的能力。', en: 'Check AI translations for accuracy and fit, then revise them for the situation.' },
    common: { ko: '두 트랙 공통 과목: 중국시장빅데이터분석 (3학년 2학기, 3학점)', zh: '两个方向共同课程：中国市场大数据分析（大三下学期，3学分）', en: 'Shared course: China Market Big Data Analysis (Year 3, Sem. 2, 3 credits)' },
    jobs_label: { ko: '진로', zh: '就业方向', en: 'Careers' },
    job1: { ko: '중국 · 해외 영업', zh: '中国·海外营销', en: 'China & overseas sales' },
    job2: { ko: '대중국 무역 · 물류', zh: '对华贸易·物流', en: 'China trade & logistics' },
    job3: { ko: '중국어 교육 · 통번역', zh: '汉语教育·翻译', en: 'Chinese teaching & translation' },
    job4: { ko: '관광 · MICE', zh: '旅游·MICE', en: 'Tourism & MICE' },
    micro: { ko: '마이크로디그리', zh: '微学位', en: 'Micro-degrees' },
    micro_desc: { ko: '현장에서 필요한 직무 역량을 짧은 단위로 집중해서 익혀요. 이수 결과는 진로 · 경력 관리에 써요.', zh: '以短期单元集中培养职场所需能力，修读成果可用于职业规划。', en: 'Short, focused units for job skills. Use the result in your career planning.' },
    m1: NAMES.m1, m2: NAMES.m2,
    micro_note: { ko: '세부 교과목: 학과사무실 확인 필요', zh: '具体课程：请向系办公室确认', en: 'Course list: please check with the department office' },
    fusion: { ko: '융합트랙', zh: '融合方向', en: 'Convergence Track' },
    t3: NAMES.t3,
    t3_desc: { ko: '무역학과와 함께 운영해요.', zh: '与贸易学系共同开设。', en: 'Run jointly with the Department of International Trade.' },
    f_courses: { ko: '과목', zh: '门课程', en: 'courses' },
    f_credits: { ko: '학점', zh: '学分', en: 'credits' },
    f_cert: { ko: '학점 이상이면 이수증', zh: '学分以上颁发结业证', en: 'credits+ earns a certificate' },
    fusion_career: { ko: '2026학년도 첫 운영 · 진로: 대중국 무역 · 물류', zh: '2026学年首次开设 · 就业：对华贸易·物流', en: 'First run in 2026 · Careers: China trade & logistics' },
    legend_trade: { ko: '무역학과 과목', zh: '贸易学系课程', en: 'Trade courses' },
    legend_chn: { ko: '중어중문 과목', zh: '中文系课程', en: 'Chinese courses' },
    sem_caption: { ko: '학년-학기', zh: '年级-学期', en: 'Year-semester' },

    why_kicker: { ko: 'Why', zh: 'Why', en: 'Why' },
    why_title: { ko: '왜 바꿨을까요', zh: '为什么要调整', en: 'Why we changed' },
    why_lead: { ko: '2025학년도 재학생 만족도 조사에서 현장실습과 산업 연계 문항만 평균에 못 미쳤어요. 그래서 실무 역량 중심으로 트랙을 다시 짰어요.', zh: '在2025学年在校生满意度调查中，只有实习与产业联动项目低于平均分，因此以实务能力为中心重组了方向。', en: 'In the 2025 student survey, only the internship and industry items scored below average. So the tracks were rebuilt around practical skills.' },
    chart_empty: { ko: '만족도 자료(그림 2) 입력 예정', zh: '满意度数据（图2）待补充', en: 'Satisfaction data (Figure 2) coming soon' },
    chart_axis: { ko: '5점 척도 · 막대는 3.5점부터', zh: '5分制 · 横轴从3.5分开始', en: '5-point scale · bars start at 3.5' },
    avg: { ko: '평균 ', zh: '平均 ', en: 'Average ' },
    below_avg: { ko: ' 아래 문항은 주황색', zh: ' 以下的项目以橙色显示', en: ' — items below it in orange' },

    act_kicker: { ko: 'Activities', zh: 'Activities', en: 'Activities' },
    act_title: { ko: '비교과 프로그램', zh: '课外活动', en: 'Beyond the classroom' },
    act_lead: { ko: '한 해 동안 학습 역량에서 시작해 전공 · 진로 역량, 취 · 창업 역량으로 이어져요.', zh: '一年中从学习能力出发，延伸到专业·职业能力，再到就业·创业能力。', en: 'Over the year you build study skills, then major & career skills, then job-ready skills.' },
    stage1: { ko: '학습 역량', zh: '学习能力', en: 'Study skills' },
    stage2: { ko: '전공 · 진로 역량', zh: '专业·职业能力', en: 'Major & career' },
    stage3: { ko: '취 · 창업 역량', zh: '就业·创业能力', en: 'Getting hired' },
    a_ugway: { ko: '우그웨이&포', zh: '乌龟大师&阿宝', en: 'Oogway & Po' }, a_ugway_d: { ko: '선배 튜터와 신입생이 함께 공부하고 어학자격증을 준비해요. 2026학년도부터 1학기 운영.', zh: '学长学姐辅导新生，一起学习并准备语言证书。2026学年起于第一学期运营。', en: 'Senior tutors and first-years study together for courses and language tests. Runs in spring from 2026.' },
    a_mate: { ko: '전공 MATE', zh: '专业MATE', en: 'Major MATE' }, a_mate_d: { ko: '교수님과 함께하는 전공 소그룹. 2025-1 <중국시사문화연구회> 최우수상.', zh: '与教授一起的专业小组。2025年第一学期《中国时事文化研究会》获最优秀奖。', en: 'Small groups with professors. Top award in spring 2025 for the China Current Affairs & Culture group.' },
    a_debate: { ko: '중국어 프레젠테이션 및 토론 경진대회', zh: '中文演讲与辩论大赛', en: 'Chinese Presentation & Debate Contest' }, a_debate_d: { ko: '1학기 · 면접에 대비해 중국어 말하기를 길러요.', zh: '第一学期 · 为面试锻炼中文口语。', en: 'Spring · Practise spoken Chinese for job interviews.' },
    a_daeryuk: { ko: '대륙제', zh: '大陆节', en: 'Daeryuk Festival' }, a_daeryuk_d: { ko: '2학기 11월 전공학술제 · 선배 멘토와 1학년이 더빙, 연극, 노래, 발표를 준비해요.', zh: '第二学期11月专业学术节 · 学长与新生一起准备配音、话剧、歌曲与发表。', en: 'Nov. academic festival · Mentors and first-years stage dubbing, plays, songs and talks.' },
    a_bridge: { ko: '브릿지 동문 취업 특강', zh: '桥梁校友就业讲座', en: 'Bridge Alumni Career Talks' }, a_bridge_d: { ko: '매 학기 현직 동문 2명을 초청해요.', zh: '每学期邀请两位在职校友。', en: 'Two working alumni visit every semester.' },
    a_portfolio: { ko: '학생 포트폴리오 경진대회', zh: '学生作品集大赛', en: 'Student Portfolio Competition' }, a_portfolio_d: { ko: '2학기 · 교과목 포트폴리오와 경력 포트폴리오 두 부문.', zh: '第二学期 · 分课程作品集与经历作品集两个部分。', en: 'Fall · Two categories: course portfolio and career portfolio.' },
    a_center: { ko: 'KGU_중어중문 동문 취업지원센터', zh: 'KGU中文系校友就业支援中心', en: 'KGU Chinese Alumni Career Center' }, a_center_d: { ko: '선배 멘토링, 이력서 · 모의면접, 국내외 취업 연계, 현장실습.', zh: '学长辅导、简历·模拟面试、国内外就业对接、现场实习。', en: 'Mentoring, CV & mock interviews, job links at home and abroad, internships.' },

    prog_kicker: { ko: 'BARUN', zh: 'BARUN', en: 'BARUN' },
    prog_title: { ko: 'BARUN 프로그램 일정', zh: 'BARUN 项目日程', en: 'BARUN program schedule' },
    prog_lead: { ko: 'BARUN 비교과 목록 가운데 최근 프로그램이에요. 오늘 날짜를 기준으로 운영 중, 새 소식, 지난 일정을 자동으로 나눠요.', zh: 'BARUN课外活动中的近期项目，根据今天的日期自动区分进行中、最新与已结束。', en: 'Recent programs from BARUN, sorted automatically by today’s date.' },
    prog_note: { ko: '전체 목록은 BARUN 비교과 활동에서 「중어중문」으로 검색해 확인하세요. 인원은 BARUN에 표시된 신청 인원이에요.', zh: '完整列表请在BARUN课外活动中搜索“中어중문”。人数为BARUN显示的报名人数。', en: 'For the full list, search “중어중문” in BARUN. Numbers show sign-ups listed on BARUN.' },
    badge_open: { ko: '진행 중', zh: '进行中', en: 'Now' },
    badge_soon: { ko: '이번 달', zh: '本月', en: 'This month' },
    apply: { ko: '신청 ', zh: '报名 ', en: 'Apply ' },
    run: { ko: '운영 ', zh: '运营 ', en: 'Runs ' },
    people: { ko: '명', zh: '人', en: ' people' },
    badge_later: { ko: '예정', zh: '预定', en: 'Upcoming' },
    badge_past: { ko: '종료', zh: '已结束', en: 'Ended' },
    badge_example: { ko: '예시', zh: '示例', en: 'Sample' },

    ben_kicker: { ko: 'Benefits', zh: 'Benefits', en: 'Benefits' },
    ben_title: { ko: '학생 혜택', zh: '学生福利', en: 'Student benefits' },
    b1: { ko: '장학금', zh: '奖学金', en: 'Scholarships' }, b1_d: { ko: '토론 경진대회 · 대륙제 수상팀은 「김명환 동문 장학금」, 포트폴리오 경진대회는 수상 장학금, 전공 MATE 우수팀도 장학금을 받아요. 2025-1 최우수상은 1,000,000원.', zh: '辩论大赛·大陆节获奖团队可获“金明焕校友奖学金”，作品集大赛与专业MATE优秀团队也有奖学金。2025年第一学期最优秀奖为100万韩元。', en: 'Award-winning teams in the debate contest and Daeryuk get the Kim Myung-hwan Alumni Scholarship. Portfolio winners and top MATE teams get scholarships too. Top MATE award in spring 2025: KRW 1,000,000.' },
    b2: { ko: '교수님 · 동문과 연결', zh: '与教授·校友建立联系', en: 'Professors & alumni' }, b2_d: { ko: '전공 MATE에서 교수님과 소그룹으로 배우고, 브릿지 특강에서 현직 동문을 만나요.', zh: '在专业MATE与教授小组学习，在桥梁讲座结识在职校友。', en: 'Learn in small groups with professors in MATE and meet working alumni at Bridge talks.' },
    b3: { ko: '경력 관리', zh: '职业经历管理', en: 'Career records' }, b3_d: { ko: '포트폴리오 경진대회로 학업과 경력을 정리하고, 이력서 · 모의면접을 준비해요.', zh: '通过作品集大赛整理学业与经历，准备简历与模拟面试。', en: 'Organise your study and work record in the portfolio contest, and prepare CVs and mock interviews.' },
    b4: { ko: '국내외 취업 연계', zh: '国内外就业对接', en: 'Jobs at home & abroad' }, b4_d: { ko: '동문 취업지원센터가 현직 선배 멘토링, 국내외 취업 연계, 동문 물류 기업 지점 견학 · 실습을 도와요.', zh: '校友就业支援中心提供学长辅导、国内外就业对接以及校友物流企业的参观与实习。', en: 'The alumni career center offers mentoring, job links and visits & internships at an alumni logistics firm.' },
    hubs_label: { ko: '동문 취업지원센터 거점', zh: '校友就业支援中心据点', en: 'Alumni career center offices' },
    hub_seoul: { ko: '서울', zh: '首尔', en: 'Seoul' },
    hub_sh: { ko: '상하이', zh: '上海', en: 'Shanghai' },
    hub_gz: { ko: '광저우', zh: '广州', en: 'Guangzhou' },

    fig_kicker: { ko: 'Figures', zh: 'Figures', en: 'Figures' },
    fig_title: { ko: '자료로 보기', zh: '看图了解', en: 'See the figures' },
    fig1: { ko: '그림 1 · 교육과정 개편', zh: '图1 · 课程调整', en: 'Figure 1 · Curriculum restructure' },
    fig2: { ko: '그림 2 · 만족도', zh: '图2 · 满意度', en: 'Figure 2 · Satisfaction' },
    fig3: { ko: '그림 3 · 무역 융합트랙', zh: '图3 · 贸易融合方向', en: 'Figure 3 · Trade convergence track' },
    fig_missing: { ko: '그림 파일 준비 중', zh: '图片准备中', en: 'Image coming soon' },

    explore_kicker: { ko: 'Explore', zh: 'Explore', en: 'Explore' },
    explore_title: { ko: '더 자세히 보기', zh: '了解更多', en: 'Explore more' },
    e_curr: { ko: '2025 교육과정표, 학년 · 학기별 교과목', zh: '2025课程表，按年级·学期的课程', en: '2025 course table by year and semester' },
    e_tracks: { ko: '단일트랙 · 융합트랙 · 마이크로디그리 자세히', zh: '单一方向·融合方向·微学位详解', en: 'Single, convergence and micro-degree paths' },
    e_act: { ko: '학습 · 진로 · 취업 역량 프로그램', zh: '学习·职业·就业能力项目', en: 'Study, career and job programs' },
    e_ben: { ko: '장학금, 멘토링, 취업 연계', zh: '奖学金、辅导、就业对接', en: 'Scholarships, mentoring, job links' },

    footer_name: { ko: '경기대학교 인문대학 중어중문전공', zh: '京畿大学 人文学院 中国语言文学专业', en: 'Chinese Language & Literature, Kyonggi University' },
    footer_contact: { ko: '경기대학교 수원캠퍼스 예지관 4101호 · 031-249-9105', zh: '京畿大学 水原校区 예지관（Yeji Hall）4101室 · 031-249-9105', en: 'Room 4101, Yeji Hall, Suwon Campus · 031-249-9105' },
    footer_barun: { ko: '© 경기대학교 중어중문전공', zh: '© 京畿大学 中国语言文学专业', en: '© Kyonggi University Chinese Language & Literature' }
  };

  /* ---------- BARUN 일정 (03_activities.md) ----------
     apply: 신청 시작, run: 운영 시작, end: 운영 끝(없으면 null), n: 신청 인원
     month: 해마다 정해진 달에 열리는 행사 (자료에 명시된 것만) */
  var PROGRAMS = [
    { name: { ko: 'MATE · 콘텐츠로 완성하는 중국어 미션랩', zh: 'MATE · 用内容完成的中文任务实验室', en: 'MATE · Chinese Mission Lab through Content' }, apply: '2026-09-07', run: '2026-09-21', end: null, n: '14/20' },
    { name: { ko: 'MATE · 실전 HSK 5급 준비반', zh: 'MATE · 实战HSK五级备考班', en: 'MATE · HSK Level 5 Prep' }, apply: '2026-09-07', run: '2026-09-21', end: null, n: '6/20' },
    { name: I18N.a_daeryuk, month: 11, desc: { ko: '2학기 11월 전공학술제', zh: '第二学期11月专业学术节', en: 'Fall academic festival, November' } },
    { name: { ko: '2026-1 중국어 프레젠테이션 및 토론 경진대회', zh: '2026年第一学期 中文演讲与辩论大赛', en: 'Spring 2026 Chinese Presentation & Debate Contest' }, apply: '2026-05-18', run: '2026-06-25', end: '2026-06-25', n: '25' },
    { name: { ko: '브릿지 프로젝트 동문멘토특강', zh: '桥梁项目校友导师讲座', en: 'Bridge Project Alumni Mentor Talk' }, apply: '2026-05-13', run: '2026-05-20', end: '2026-05-20', n: '69' },
    { name: { ko: 'MATE · 중국시사문화연구회', zh: 'MATE · 中国时事文化研究会', en: 'MATE · China Current Affairs & Culture' }, apply: '2026-03-09', run: '2026-03-16', end: null, n: '9/20' },
    { name: { ko: '2025-2 학생 포트폴리오 경진대회', zh: '2025年第二学期 学生作品集大赛', en: 'Fall 2025 Student Portfolio Competition' }, apply: '2025-11-19', run: '2025-12-26', end: '2025-12-26', n: '28' },
    { name: { ko: '2025 학술제 (대륙제)', zh: '2025 学术节（大陆节）', en: '2025 Academic Festival (Daeryuk)' }, apply: '2025-10-15', run: '2025-11-14', end: '2025-11-14', n: '40' }
  ];

  /* ---------- 공지사항 ----------
     학과 공지가 생기면 여기에 넣는다. 예) { title: { ko:'…', zh:'…', en:'…' }, date: '2026-11-10', pin: true }
     지어낸 공지는 넣지 않는다 (CLAUDE.md 2. 내용 규칙). */
  var NOTICES = [];

  /* ---------- 만족도 자료 (그림 2 자료가 오면 채운다) ---------- */
  // 예) { label: { ko:'...', zh:'...', en:'...' }, value: 4.19 }
  var SATISFACTION = [
    { label: { ko: '교육과정 구성 · 교과목 내용', zh: '课程构成·课程内容', en: 'Curriculum & course content' }, value: 4.05 },
    { label: { ko: '사회 변화 · 요구 반영', zh: '反映社会变化·需求', en: 'Reflects social change' }, value: 4.05 },
    { label: { ko: '이수체계 안내', zh: '修读体系指导', en: 'Guidance on study paths' }, value: 4.11 },
    { label: { ko: '교수 강의의 질', zh: '教授授课质量', en: 'Teaching quality' }, value: 4.19 },
    { label: { ko: '성적평가 방식', zh: '成绩评价方式', en: 'Grading' }, value: 4.14 },
    { label: { ko: '교과목 통한 현장실습 기회', zh: '课程中的实习机会', en: 'Internships through courses' }, value: 3.70 },
    { label: { ko: '실습학기제 현장실습 기회', zh: '实习学期制实习机会', en: 'Internship-semester placements' }, value: 3.70 },
    { label: { ko: '산업 연계 교과목 실무역량 도움', zh: '产业联动课程的实务帮助', en: 'Industry courses build job skills' }, value: 3.76 }
  ];
  var SATISFACTION_AVG = 3.96;
  var AXIS_MIN = 3.5, AXIS_MAX = 4.3;

  /* ---------- 형광펜 키워드 ---------- */
  var KEYWORDS = ['모집 중', '마감 임박', '2026학년도 첫 운영', '신설', '최우수상', '대륙제', '포트폴리오 경진대회',
                  '2026学年首次开设', '最优秀奖', '大陆节', '作品集大赛', 'First run in 2026', 'Top award', 'Daeryuk'];

  var LANG_ATTR = { ko: 'ko', zh: 'zh-CN', en: 'en' };
  var root = document.documentElement;
  var reduce = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
  var lang = 'ko';

  function store(k, v) { try { if (v === undefined) return localStorage.getItem(k); localStorage.setItem(k, v); } catch (e) { return null; } }
  function t(entry, l) { if (!entry) return ''; return entry[l || lang] || entry.ko || ''; }
  function tk(key, l) { return t(I18N[key], l); }
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
  function highlight(s) {
    return esc(s);
    var out = esc(s);
    KEYWORDS.forEach(function (k) { if (out.indexOf(k) > -1) out = out.split(k).join('<mark class="hl">' + k + '</mark>'); });
    return out;
  }

  /* ---------- 날짜 ---------- */
  function today() { var d = new Date(); d.setHours(0, 0, 0, 0); return d; }
  function parse(s) { var p = s.split('-'); return new Date(+p[0], +p[1] - 1, +p[2]); }
  function fmt(d) {
    var m = d.getMonth() + 1, day = d.getDate();
    if (lang === 'en') return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
    if (lang === 'zh') return m + '月' + day + '日';
    return m + '. ' + day + '.';
  }
  function fmtY(d) {
    if (lang === 'en') return d.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
    if (lang === 'zh') return d.getFullYear() + '年' + fmt(d);
    return d.getFullYear() + '. ' + fmt(d);
  }
  function monthLabel(m) { return lang === 'en' ? new Date(2000, m - 1, 1).toLocaleDateString('en-US', { month: 'long' }) : m + (lang === 'zh' ? '月' : '월'); }

  // open: 운영 중 / soon: 이번 달 / later: 예정 / new: 최근 3개월 안 / past: 지난 일정
  function status(p) {
    var now = today(), DAY = 864e5;
    if (p.month) return (now.getMonth() + 1 === p.month) ? 'soon' : 'later';
    var ap = parse(p.apply), run = parse(p.run), end = p.end ? parse(p.end) : null;
    if (now < ap) return 'later';
    if (now >= run && (end ? now <= end : (now - run) / DAY <= 100)) return 'open';
    if (now < run) return 'open';
    var last = end || run;
    if ((now - last) / DAY <= 92) return 'new';
    return 'past';
  }
  function badgeHTML(st) {
    // 토스처럼: 진행 중인 것만 파란 글자로, 나머지는 표시하지 않는다
    if (st === 'open') return '<span class="st on">' + esc(tk('badge_open')) + '</span>';
    if (st === 'soon') return '<span class="st on">' + esc(tk('badge_soon')) + '</span>';
    if (st === 'later') return '<span class="st">' + esc(tk('badge_later')) + '</span>';
    return '';
  }
  function whenHTML(p) {
    if (p.month) return esc(monthLabel(p.month));
    var a = tk('apply') + fmtY(parse(p.apply)) + '~';
    var r = p.end ? tk('run') + '~' + fmt(parse(p.end)) : tk('run') + fmt(parse(p.run)) + '~';
    return esc(a) + '<br>' + esc(r);
  }
  function sortKey(p) { return p.month ? new Date(today().getFullYear(), p.month - 1, 1) : parse(p.apply); }

  /* ---------- 동적 영역 그리기 ---------- */
  var progFilter = NOTICES.length ? 'notice' : 'all';
  function renderPrograms() {
    var list = document.getElementById('progList');
    var nowList = document.getElementById('nowList');
    var order = { open: 0, soon: 1, later: 2, new: 3, past: 4 };
    var items = PROGRAMS.map(function (p) { return { p: p, st: status(p) }; })
      .sort(function (a, b) { return order[a.st] - order[b.st] || sortKey(b.p) - sortKey(a.p); });

    if (list && progFilter === 'notice') {
      list.innerHTML = NOTICES.length ? NOTICES.slice().sort(function (a, b) { return (b.pin ? 1 : 0) - (a.pin ? 1 : 0) || parse(b.date) - parse(a.date); }).map(function (n) {
        var isNew = (today() - parse(n.date)) / 864e5 <= 14;
        return '<li class="post"><span class="p-badge">' + (n.pin ? '<span class="st on">' + esc(tk('tab_notice')) + '</span>' : (isNew ? '<span class="st on">NEW</span>' : '')) + '</span>' +
          '<span class="p-title">' + esc(t(n.title)) + '</span><span class="p-date">' + esc(fmtY(parse(n.date))) + '</span></li>';
      }).join('') : '<li class="post empty"><span class="p-title">' + esc(tk('notice_empty')) + '</span></li>';
      var nn = document.getElementById('progNote'); if (nn) nn.textContent = '';
    } else if (list) {
      var shown = items.filter(function (x) {
        var live = x.st === 'open' || x.st === 'soon' || x.st === 'later';
        return progFilter === 'all' || (progFilter === 'live' ? live : !live);
      });
      shown = shown.slice(0, 5);   // 대문은 5개만 깔끔하게
      list.innerHTML = shown.map(function (x) {
        var live = x.st === 'open' || x.st === 'soon';
        var title = live ? highlight(t(x.p.name)) : esc(t(x.p.name));
        var meta = x.p.desc ? t(x.p.desc) : (x.p.n ? x.p.n + tk('people') : '');
        var when = x.p.month ? monthLabel(x.p.month) : fmtY(parse(x.p.apply));
        return '<li class="post' + (x.st === 'past' ? ' is-past' : '') + '">' +
          '<span class="p-badge">' + badgeHTML(x.st) + '</span>' +
          '<span class="p-title">' + title + (meta ? '<small>' + esc(meta) + '</small>' : '') + '</span>' +
          '<span class="p-date">' + esc(when) + '</span></li>';
      }).join('');
      var note = document.getElementById('progNote');
      if (note) note.textContent = tk('prog_note');
    }

    if (nowList) {
      var open = items.filter(function (x) { return x.st === 'open' || x.st === 'soon'; });
      nowList.innerHTML = open.length ? open.map(function (x) {
        var when = x.p.month ? monthLabel(x.p.month) : (x.p.end ? tk('run') + '~' + fmt(parse(x.p.end)) : tk('run') + fmt(parse(x.p.run)) + '~');
        return '<li><span class="n-name">' + highlight(t(x.p.name)) + '</span>' + badgeHTML(x.st) +
          '<span class="n-date">' + esc(when) + (x.p.n ? ' · ' + esc(x.p.n + tk('people')) : '') + '</span></li>';
      }).join('') : '<li class="now-empty">' + esc(tk('now_empty')) + '</li>';
    }
    var td = document.getElementById('today');
    if (td) td.textContent = fmtY(today());
  }

  function renderMarquee() {
    var m = document.getElementById('marquee');
    if (!m) return;
    var names = ['t1', 't2', 't3', 'm1', 'm2'].map(function (k) { return '<span>' + esc(t(NAMES[k])) + '</span>'; }).join('');
    m.innerHTML = names + names;
  }

  function renderChart() {
    var c = document.getElementById('chart');
    if (!c) return;
    var note = document.querySelector('.chart-note');
    if (!SATISFACTION.length) {
      c.className = 'chart-empty';
      c.textContent = tk('chart_empty');
      if (note) note.hidden = true;
      return;
    }
    function pct(v) { return Math.max(0, Math.min(100, (v - AXIS_MIN) / (AXIS_MAX - AXIS_MIN) * 100)); }
    var avgP = SATISFACTION_AVG != null ? pct(SATISFACTION_AVG) : null;
    var ticks = [3.6, 3.8, 4.0, 4.2];
    c.innerHTML = SATISFACTION.map(function (r) {
      var low = SATISFACTION_AVG != null && r.value < SATISFACTION_AVG;
      return '<div class="bar-row' + (low ? ' low' : '') + '"><span class="lbl">' + esc(t(r.label)) + '</span>' +
        '<div class="bar"><i style="--w:' + pct(r.value) + '%"></i>' +
        (avgP != null ? '<s class="avgline" style="left:' + avgP + '%"></s>' : '') +
        '</div><span class="val">' + r.value.toFixed(2) + '</span></div>';
    }).join('') +
      '<div class="bar-row axis" aria-hidden="true"><span class="lbl">' + esc(tk('chart_axis')) + '</span><div class="ticks">' +
      ticks.map(function (v) { return '<span style="left:' + pct(v) + '%">' + v.toFixed(1) + '</span>'; }).join('') +
      '</div><span></span></div>';
    if (note) {
      note.hidden = SATISFACTION_AVG == null;
      var b = note.querySelector('b'); if (b && SATISFACTION_AVG != null) b.textContent = SATISFACTION_AVG.toFixed(2);
    }
  }

  /* ---------- 언어 ---------- */
  function applyLang(l) {
    lang = I18N.brand[l] ? l : 'ko';
    root.setAttribute('lang', LANG_ATTR[lang]);
    store('lang', lang);

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      el.textContent = tk(key);
      if (el.hasAttribute('data-sub') && lang === 'ko') {
        var zh = tk(key, 'zh');
        if (zh && zh !== tk(key)) {
          var s = document.createElement('span');
          s.className = 'sub'; s.lang = 'zh-CN'; s.textContent = zh;
          el.appendChild(s);
        }
      }
    });
    document.querySelectorAll('[data-i18n-aria]').forEach(function (el) { el.setAttribute('aria-label', tk(el.getAttribute('data-i18n-aria'))); });
    document.querySelectorAll('[data-i18n-alt]').forEach(function (el) { el.setAttribute('alt', tk(el.getAttribute('data-i18n-alt'))); });
    document.querySelectorAll('[data-i18n-ph]').forEach(function (el) { el.setAttribute('placeholder', tk(el.getAttribute('data-i18n-ph'))); });
    var ht = document.getElementById('heroTags');
    if (ht) ht.innerHTML = (POPULAR[lang] || POPULAR.ko).slice(0, 5).map(function (w) { return '<button type="button" data-hq="' + esc(w) + '">' + esc(w) + '</button>'; }).join('');
    document.querySelectorAll('.fig').forEach(function (f) { var fig = f.querySelector('figure'); if (fig) fig.setAttribute('data-missing', tk('fig_missing')); });
    document.querySelectorAll('[data-lang]').forEach(function (b) { b.setAttribute('aria-pressed', b.getAttribute('data-lang') === lang ? 'true' : 'false'); });
    var pageKey = document.body.getAttribute('data-page') === 'about' ? tk('about_h1') + ' · ' : '';
    document.title = pageKey + tk('brand') + ' · ' + (lang === 'ko' ? '경기대학교' : lang === 'zh' ? '京畿大学' : 'Kyonggi University');

    renderMarquee();
    renderPrograms();
    renderChart();
    if (document.getElementById('chart') && document.getElementById('chart').classList.contains('in')) {
      document.getElementById('chart').classList.add('in');
    }
  }

  /* ---------- 테마 ---------- */
  function setTheme(th) {
    root.setAttribute('data-theme', th);
    store('theme', th);
  }

  /* ---------- 카운트업 ---------- */
  function countUp(el) {
    var target = parseFloat(el.getAttribute('data-count'));
    var dec = parseInt(el.getAttribute('data-dec') || '0', 10);
    if (reduce) { el.textContent = target.toFixed(dec); return; }
    var dur = 1200, t0 = null;
    function step(ts) {
      if (!t0) t0 = ts;
      var p = Math.min((ts - t0) / dur, 1);
      var e = 1 - Math.pow(1 - p, 3);
      el.textContent = (target * e).toFixed(dec);
      if (p < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }


  /* ---------- 붓글씨: 前进中文 ----------
     글자마다 1000×1000 칸, 획순대로 중심선을 적었다. (x 오른쪽, y 아래)  */
  var GLYPHS = [
    [ // 前 (9획)
      'M330 80 Q365 125 395 185',
      'M690 70 Q650 130 600 190',
      'M120 262 Q500 240 885 250',
      'M245 350 L245 700 Q238 820 165 905',
      'M245 350 L530 345 L530 820 Q528 880 455 840',
      'M262 488 L515 485',
      'M262 625 L515 622',
      'M675 400 L675 700',
      'M835 330 L835 860 Q832 905 750 860'
    ],
    [ // 进 (7획)
      'M380 255 Q610 238 845 245',
      'M335 470 Q610 452 885 462',
      'M520 95 L520 520 Q505 640 395 735',
      'M715 95 L715 735',
      'M130 165 Q175 205 215 265',
      'M80 410 L250 402 Q190 500 135 565 Q200 585 255 615 Q215 700 150 790',
      'M150 790 Q260 835 400 860 Q650 895 935 880'
    ],
    [ // 中 (4획)
      'M215 300 L235 700',
      'M215 300 L780 290 L760 690',
      'M240 680 L760 678',
      'M500 55 L500 960'
    ],
    [ // 文 (4획)
      'M470 55 Q510 105 545 170',
      'M120 288 Q500 262 880 276',
      'M710 300 Q620 560 455 720 Q320 845 130 925',
      'M300 335 Q420 600 600 760 Q740 875 905 930'
    ]
  ];
  var CELL = 1060;

  // 서예 글꼴(마산정 楷书)로 글자를 놓고, 위의 획순 경로를 굵은 붓 자국 마스크로 써서
  // 획순대로 먹이 드러나게 한다.
  var CHARS = ['前', '进', '中', '文'];
  var BRUSH_FONT = '"Ma Shan Zheng", "STKaiti", "KaiTi", "Kaiti SC", "BiauKai", serif';

  function initBrush() {
    var btn = document.getElementById('brush');
    if (!btn) return;
    var svg = btn.querySelector('svg');
    var ink = svg.querySelector('.brush-ink'), ghost = svg.querySelector('.brush-ghost'), defs = svg.querySelector('defs');
    var NS = 'http://www.w3.org/2000/svg', W = 210, paths = [], fills = [];
    function el(tag, attrs) { var e = document.createElementNS(NS, tag); for (var k in attrs) e.setAttribute(k, attrs[k]); return e; }
    function glyph(ch, cls) {
      var t = el('text', { x: 500, y: 865, 'text-anchor': 'middle', 'class': cls });
      t.style.fontFamily = BRUSH_FONT;
      t.textContent = ch;
      return t;
    }

    GLYPHS.forEach(function (strokes, ci) {
      var id = 'hzMask' + ci;
      var mask = el('mask', { id: id, maskUnits: 'userSpaceOnUse', x: -150, y: -150, width: 1300, height: 1300 });
      mask.appendChild(el('rect', { x: -150, y: -150, width: 1300, height: 1300, fill: '#000' }));
      var mg = el('g', { filter: 'url(#inkEdge)', fill: 'none', stroke: '#fff', 'stroke-width': W, 'stroke-linecap': 'round', 'stroke-linejoin': 'round' });
      strokes.forEach(function (d) { var pth = el('path', { d: d }); mg.appendChild(pth); paths.push({ el: pth, ci: ci }); });
      mask.appendChild(mg);
      // 마지막에 빈틈 없이 다 드러나게 하는 판
      var full = el('rect', { x: -150, y: -150, width: 1300, height: 1300, fill: '#fff', opacity: 0 });
      mask.appendChild(full); fills.push(full);
      defs.appendChild(mask);

      var gg = el('g', { transform: 'translate(' + ci * CELL + ' 0)' });
      gg.appendChild(glyph(CHARS[ci], 'hz'));
      ghost.appendChild(gg);
      var gi = el('g', { transform: 'translate(' + ci * CELL + ' 0)' });
      var ti = glyph(CHARS[ci], 'hz');
      ti.setAttribute('mask', 'url(#' + id + ')');
      gi.appendChild(ti);
      ink.appendChild(gi);
    });
    paths.forEach(function (o) { o.len = o.el.getTotalLength(); });

    var running = [];
    function showAll() {
      paths.forEach(function (o) { o.el.style.strokeDasharray = 'none'; o.el.style.strokeDashoffset = '0'; });
      fills.forEach(function (f) { f.setAttribute('opacity', 1); });
      btn.classList.add('done');
    }
    function write() {
      running.forEach(function (a) { a.cancel(); }); running = [];
      btn.classList.remove('done');
      fills.forEach(function (f) { f.setAttribute('opacity', 0); });
      if (reduce || !paths[0].el.animate) { showAll(); return; }
      var t = 200, prev = 0, charEnd = [];
      paths.forEach(function (o) {
        var L = o.len;
        o.el.style.strokeDasharray = L + ' ' + (L + W * 2);
        o.el.style.strokeDashoffset = L + W;
        if (o.ci !== prev) { charEnd[prev] = t; t += 240; prev = o.ci; }
        var dur = Math.max(200, L / 1.9);
        running.push(o.el.animate([{ strokeDashoffset: L + W }, { strokeDashoffset: 0 }],
          { duration: dur, delay: t, easing: 'cubic-bezier(.5,0,.3,1)', fill: 'forwards' }));
        t += dur + 60;
      });
      charEnd[prev] = t;
      // 글자마다 다 쓰고 나면 남은 틈을 먹으로 메운다
      fills.forEach(function (f, ci) {
        running.push(f.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 380, delay: charEnd[ci] - 40, easing: 'ease-out', fill: 'forwards' }));
      });
      var last = running[running.length - 1];
      last.onfinish = function () { showAll(); };
    }
    btn.addEventListener('click', write);

    // 글꼴을 받은 뒤에 쓰기 시작 (최대 2.5초 기다림)
    var started = false;
    function go() { if (!started) { started = true; write(); } }
    if (document.fonts && document.fonts.load) {
      document.fonts.load('400 100px "Ma Shan Zheng"', '前进中文').then(go, go);
      setTimeout(go, 2500);
    } else go();
  }


  /* ---------- 대문 하늘 (WebGL) ----------
     여러 겹의 노이즈로 구름 덩어리를 만들고, 해 방향으로 빛을 계산해
     밝은 윗면과 그늘진 아랫면을 그린다. 하늘은 경기대 파랑 ↔ 노랑 노을을 오간다. */
  var SKY_FRAG = [
    'precision highp float;',
    'uniform vec2 R; uniform float T; uniform float D; uniform float N;',
    'float h(vec2 p){p=fract(p*vec2(123.34,456.21));p+=dot(p,p+45.32);return fract(p.x*p.y);}',
    'float n(vec2 p){vec2 i=floor(p),f=fract(p);vec2 u=f*f*(3.-2.*f);',
    ' return mix(mix(h(i),h(i+vec2(1,0)),u.x),mix(h(i+vec2(0,1)),h(i+vec2(1,1)),u.x),u.y);}',
    'const mat2 M=mat2(1.6,1.2,-1.2,1.6);',
    'float fbm(vec2 p){float f=0.,a=.5;for(int i=0;i<6;i++){f+=a*n(p);p=M*p;a*=.5;}return f;}',
    'float dens(vec2 p){',
    ' vec2 q=vec2(fbm(p*.8+vec2(0.,T*.006)),fbm(p*.8+vec2(5.2,1.3)));',
    ' float b=fbm(p+.75*q+vec2(T*.022,0.));',
    ' float dt=fbm(p*3.1+q*2.+vec2(T*.03,0.));',
    ' return b*.82+dt*.18;}',
    'void main(){',
    ' vec2 uv=gl_FragCoord.xy/R; float ar=R.x/R.y;',
    ' vec2 p=vec2(uv.x*ar,uv.y*1.25)*1.7+vec2(T*.012,0.);',
    ' vec3 dayTop=vec3(.20,.44,.78), dayLow=vec3(.68,.82,.95);',
    ' vec3 duskTop=vec3(.10,.24,.56), duskMid=vec3(.52,.58,.82), duskLow=vec3(1.,.78,.36);',
    ' vec3 day=mix(dayLow,dayTop,pow(uv.y,.8));',
    ' vec3 dusk=mix(duskLow,duskMid,smoothstep(0.,.55,uv.y)); dusk=mix(dusk,duskTop,smoothstep(.45,1.,uv.y));',
    ' vec3 sky=mix(day,dusk,D);',
    ' vec2 sun=vec2(ar*.78,mix(.55,.08,D)); float sd=length(vec2(uv.x*ar,uv.y)-sun);',
    ' sky+=vec3(1.,.72,.28)*exp(-sd*2.6)*(.25+.75*D)*.7;',
    ' float d=dens(p);',
    ' float band=smoothstep(.02,.32,uv.y)*smoothstep(1.05,.62,uv.y);',
    ' float cov=mix(.58,.43,band);',
    ' float c=smoothstep(cov,cov+.16,d);',
    ' vec2 l=normalize(vec2(sun.x-uv.x*ar,sun.y-uv.y)+vec2(0.,.35));',
    ' float d2=dens(p+l*.09);',
    ' float lit=clamp((d-d2)*4.2+.6,0.,1.);',
    ' float thick=smoothstep(cov+.05,cov+.4,d);',
    ' vec3 cb=mix(vec3(1.),vec3(1.,.86,.66),D), cs=mix(vec3(.60,.67,.79),vec3(.50,.44,.58),D);',
    ' vec3 cc=mix(cs,cb,lit); cc*=mix(1.,.9,thick*(1.-lit));',
    ' cc+=vec3(1.,.8,.5)*pow(lit,6.)*.25*(.3+D);',
    ' vec3 col=mix(sky,cc,c*.97);',
    ' vec3 night=mix(vec3(.05,.09,.20),vec3(.01,.02,.07),uv.y);',
    ' night+=vec3(.55,.30,.10)*D*smoothstep(.55,0.,uv.y)*.55;',
    ' vec3 ncl=mix(vec3(.10,.12,.19),vec3(.33,.37,.48),lit)+vec3(.35,.2,.08)*D*lit*.35;',
    ' vec3 ncol=mix(night,ncl,c*.85);',
    ' col=mix(col,ncol,N);',
    ' gl_FragColor=vec4(col,1.);}'
  ].join('\n');

  function initSky() {
    var cv = document.getElementById('skyGl');
    if (!cv) return;
    var gl = cv.getContext('webgl', { antialias: false, alpha: false, preserveDrawingBuffer: true });
    if (!gl) return;
    function sh(type, src) { var s = gl.createShader(type); gl.shaderSource(s, src); gl.compileShader(s); return gl.getShaderParameter(s, gl.COMPILE_STATUS) ? s : null; }
    var vs = sh(gl.VERTEX_SHADER, 'attribute vec2 a;void main(){gl_Position=vec4(a,0.,1.);}');
    var fs = sh(gl.FRAGMENT_SHADER, SKY_FRAG);
    if (!vs || !fs) return;
    var pr = gl.createProgram(); gl.attachShader(pr, vs); gl.attachShader(pr, fs); gl.linkProgram(pr);
    if (!gl.getProgramParameter(pr, gl.LINK_STATUS)) return;
    gl.useProgram(pr);
    var buf = gl.createBuffer(); gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
    var loc = gl.getAttribLocation(pr, 'a'); gl.enableVertexAttribArray(loc); gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);
    var uR = gl.getUniformLocation(pr, 'R'), uT = gl.getUniformLocation(pr, 'T'), uD = gl.getUniformLocation(pr, 'D'), uN = gl.getUniformLocation(pr, 'N');
    cv.parentNode.classList.add('gl-on');

    var scale = 0.6, night = 0, t0 = performance.now(), visible = true, raf = 0;
    var seed = 40 + Math.random() * 60;   // 열 때마다 다른 하늘
    function size() {
      var r = cv.getBoundingClientRect(), dpr = Math.min(window.devicePixelRatio || 1, 2);
      var w = Math.max(1, Math.round(r.width * dpr * scale)), h = Math.max(1, Math.round(r.height * dpr * scale));
      if (cv.width !== w || cv.height !== h) { cv.width = w; cv.height = h; gl.viewport(0, 0, w, h); }
    }
    function isDark() { return root.getAttribute('data-theme') === 'dark'; }
    function frame(now) {
      size();
      var t = seed + (now - t0) / 1000;
      var dusk = 0.5 - 0.5 * Math.cos(t / 12 * Math.PI * 2);          // 12초 주기로 파랑 ↔ 노을
      dusk = dusk * dusk * (3 - 2 * dusk);
      night += ((isDark() ? 1 : 0) - night) * 0.08;                    // 테마 바꿀 때 부드럽게
      gl.uniform2f(uR, cv.width, cv.height); gl.uniform1f(uT, t); gl.uniform1f(uD, dusk); gl.uniform1f(uN, night);
      gl.drawArrays(gl.TRIANGLES, 0, 3);
      if (!reduce && visible) raf = requestAnimationFrame(frame);
    }
    night = isDark() ? 1 : 0;
    if (reduce) { frame(performance.now()); new MutationObserver(function () { night = isDark() ? 1 : 0; frame(performance.now()); }).observe(root, { attributes: true, attributeFilter: ['data-theme'] }); return; }
    function start() { cancelAnimationFrame(raf); raf = requestAnimationFrame(frame); }
    if ('IntersectionObserver' in window) {
      new IntersectionObserver(function (es) { visible = es[0].isIntersecting && !document.hidden; if (visible) start(); }).observe(cv);
    }
    document.addEventListener('visibilitychange', function () { visible = !document.hidden; if (visible) start(); });
    window.addEventListener('resize', function () { if (!visible) frame(performance.now()); });
    start();
  }


  /* ---------- 통합검색 ----------
     지금 언어로 보이는 페이지 내용(제목 · 카드 · 일정 · 메뉴)을 모아 찾는다. */
  var POPULAR = {
    ko: ['융합트랙', '마이크로디그리', '장학금', '대륙제', 'HSK', '동문', '만족도'],
    zh: ['融合方向', '微学位', '奖学金', '大陆节', 'HSK', '校友', '满意度'],
    en: ['Convergence', 'Micro-degree', 'Scholarship', 'Daeryuk', 'HSK', 'Alumni', 'Survey']
  };
  function textOf(node) {
    if (!node) return '';
    var c = node.cloneNode(true);
    c.querySelectorAll('.sub, svg, .badge').forEach(function (x) { x.remove(); });
    return c.textContent.replace(/\s+/g, ' ').trim();
  }
  function buildIndex() {
    var idx = [];
    function add(title, text, group, target, href) {
      title = (title || '').trim(); if (!title) return;
      idx.push({ title: title, text: (text || '').trim(), group: group, target: target, href: href });
    }
    // 메뉴
    document.querySelectorAll('#nav .menu').forEach(function (m) {
      var top = textOf(m.querySelector('.menu-top'));
      m.querySelectorAll('.drop a').forEach(function (a) {
        if (a.classList.contains('todo')) return;
        var ext = /^https?:/.test(a.getAttribute('href'));
        add(textOf(a), ext ? tk('search_ext') : '', tk('search_menu') + ' · ' + top, null, a.getAttribute('href'));
      });
    });
    // 본문 구역
    document.querySelectorAll('main section[id]').forEach(function (sec) {
      if (sec.id === 'story' || sec.id === 'foryou') return;
      var head = sec.querySelector('.sec-head h2, .big-head h2, .rm-title');
      var group = textOf(head);
      if (head) add(group, textOf(sec.querySelector('.sec-head p, .big-head p, .rm-lead')), group, sec);
      sec.querySelectorAll('h3, h4, .idx, .chip, .hub, figcaption, .bar-row .lbl, .post .p-title').forEach(function (h) {
        if (h.closest('.sec-head, .big-head, .story')) return;
        var box = h.closest('.row, .step, .post, .bar-row, .fig, .group') || h;
        var body = '';
        var p = h.nextElementSibling;
        if (p && /^(P|SPAN|DIV)$/.test(p.tagName)) body = textOf(p);
        var row = h.closest('.row, .step');
        if (row && !body) body = textOf(row).replace(textOf(h), '').trim();
        if (h.matches('.bar-row .lbl')) body = textOf(box.querySelector('.val'));
        add(textOf(h), body, group, box);
      });
    });
    // 트랙 이름 흐름에만 있는 이름도 찾히게
    ['t1', 't2', 't3', 'm1', 'm2'].forEach(function (k) {
      add(t(NAMES[k]), '', textOf(document.querySelector('#paths .sec-head h2')), document.getElementById('paths'));
    });
    // 같은 제목 · 같은 위치는 하나만
    var seen = {};
    return idx.filter(function (e) { var k = e.title + '|' + (e.href || '') + '|' + (e.target ? (e.target.id || e.target.className) : ''); if (seen[k]) return false; seen[k] = 1; return true; });
  }
  function norm(x) { return x.toLowerCase().replace(/[\s·・,.\-()（）「」]/g, ''); }
  function mark(str, terms) {
    var out = esc(str);
    terms.forEach(function (q) {
      if (!q) return;
      var re = new RegExp('(' + q.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + ')', 'ig');
      out = out.replace(re, '<mark>$1</mark>');
    });
    return out;
  }

  function initSearch() {
    var panel = document.getElementById('searchPanel'), openBtn = document.getElementById('searchOpen');
    if (!panel || !openBtn) return;
    var input = document.getElementById('searchInput'), list = document.getElementById('searchResults');
    var count = document.getElementById('searchCount'), popular = document.getElementById('searchPopular');
    var index = [], current = [], active = -1, lastFocus = null;

    function renderPopular() {
      popular.innerHTML = '<span>' + esc(tk('search_popular')) + '</span>' +
        (POPULAR[lang] || POPULAR.ko).map(function (w) { return '<button type="button" data-q="' + esc(w) + '">' + esc(w) + '</button>'; }).join('');
    }
    function run() {
      var raw = input.value.trim();
      active = -1;
      if (!raw) { list.innerHTML = ''; count.textContent = ''; popular.hidden = false; return; }
      popular.hidden = true;
      var terms = raw.split(/\s+/).filter(Boolean), nterms = terms.map(norm);
      current = index.map(function (e) {
        var nt = norm(e.title), nb = norm(e.text + ' ' + e.group), sc = 0;
        for (var i = 0; i < nterms.length; i++) {
          var q = nterms[i];
          if (nt.indexOf(q) === 0) sc += 6; else if (nt.indexOf(q) > -1) sc += 4; else if (nb.indexOf(q) > -1) sc += 1; else return null;
        }
        return { e: e, sc: sc };
      }).filter(Boolean).sort(function (a, b) { return b.sc - a.sc; }).slice(0, 12);
      count.textContent = current.length ? tk('search_count').replace('{n}', current.length) : tk('search_none');
      list.innerHTML = current.map(function (r, i) {
        var e = r.e, ext = e.href && /^https?:/.test(e.href);
        return '<li style="--i:' + i + '"><a href="' + esc(e.href || '#') + '" data-i="' + i + '"' + (ext ? ' target="_blank" rel="noopener"' : '') + '>' +
          '<small>' + esc(e.group) + '</small><strong>' + mark(e.title, terms) + '</strong>' +
          (e.text ? '<span>' + mark(e.text.length > 90 ? e.text.slice(0, 90) + '…' : e.text, terms) + '</span>' : '') + '</a></li>';
      }).join('');
    }
    function open(q) {
      index = buildIndex();
      if (typeof q === 'string') input.value = q;
      renderPopular();
      input.placeholder = tk('search_ph');
      lastFocus = document.activeElement;
      panel.hidden = false;
      requestAnimationFrame(function () { panel.classList.add('open'); });
      openBtn.setAttribute('aria-expanded', 'true');
      document.documentElement.style.overflow = 'hidden';
      setTimeout(function () { input.focus(); if (typeof q === 'string') { var n = input.value.length; input.setSelectionRange(n, n); } else input.select(); }, 60);
      run();
    }
    function close() {
      panel.classList.remove('open');
      openBtn.setAttribute('aria-expanded', 'false');
      document.documentElement.style.overflow = '';
      setTimeout(function () { if (!panel.classList.contains('open')) panel.hidden = true; }, reduce ? 0 : 380);
      if (lastFocus && lastFocus.focus) lastFocus.focus();
    }
    function go(r) {
      if (!r) return;
      var e = r.e;
      if (e.href && /^https?:/.test(e.href)) return;          // 새 탭으로 열림
      close();
      var target = e.target || (e.href && e.href.charAt(0) === '#' ? document.querySelector(e.href) : null);
      if (!target) { if (e.href) location.href = e.href; return; }
      setTimeout(function () {
        target.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'center' });
        target.classList.remove('flash'); void target.offsetWidth; target.classList.add('flash');
        setTimeout(function () { target.classList.remove('flash'); }, 2200);
      }, 120);
    }

    openBtn.addEventListener('click', function () { open(); });
    // 메인 배너의 큰 검색창
    var hs = document.getElementById('heroSearch'), hsf = document.getElementById('heroSearchForm'), tags = document.getElementById('heroTags');
    if (hs && hsf) {
      // 누르면 바로 통합검색 창으로 (한글 입력이 끊기지 않게 입력은 검색 창에서)
      hs.addEventListener('focus', function () { var v = hs.value; hs.value = ''; hs.blur(); open(v); });
      hsf.addEventListener('submit', function (e) { e.preventDefault(); var v = hs.value; hs.value = ''; open(v); });
    }
    if (tags) tags.addEventListener('click', function (e) { var b = e.target.closest('[data-hq]'); if (b) open(b.getAttribute('data-hq')); });
    panel.addEventListener('click', function (ev) {
      if (ev.target.closest('[data-close]')) { close(); return; }
      var b = ev.target.closest('[data-q]');
      if (b) { input.value = b.getAttribute('data-q'); run(); input.focus(); return; }
      var a = ev.target.closest('a[data-i]');
      if (a) { var r = current[+a.getAttribute('data-i')]; if (!(r.e.href && /^https?:/.test(r.e.href))) ev.preventDefault(); go(r); }
    });
    input.addEventListener('input', run);
    document.getElementById('searchForm').addEventListener('submit', function (ev) { ev.preventDefault(); go(current[active > -1 ? active : 0]); });
    input.addEventListener('keydown', function (ev) {
      var links = list.querySelectorAll('a');
      if (ev.key === 'ArrowDown' || ev.key === 'ArrowUp') {
        ev.preventDefault();
        if (!links.length) return;
        active = (active + (ev.key === 'ArrowDown' ? 1 : -1) + links.length) % links.length;
        links.forEach(function (l, i) { l.classList.toggle('on', i === active); });
        links[active].scrollIntoView({ block: 'nearest' });
      }
    });
    document.addEventListener('keydown', function (ev) {
      if (ev.key === 'Escape' && !panel.hidden) close();
      var typing = /INPUT|TEXTAREA|SELECT/.test((document.activeElement || {}).tagName || '');
      if (!typing && panel.hidden && (ev.key === '/' || ((ev.ctrlKey || ev.metaKey) && ev.key.toLowerCase() === 'k'))) { ev.preventDefault(); open(); }
    });
  }


  /* ---------- 스토리: 인스타 스토리처럼 넘어가는 소개 ---------- */
  function initStory() {
    var box = document.getElementById('storyBox');
    if (!box) return;
    var slides = [].slice.call(box.querySelectorAll('.slide'));
    var barsEl = box.querySelector('.story-bars');
    var pauseBtn = document.getElementById('storyPause');
    var DUR = 5600, idx = 0, elapsed = 0, last = 0, paused = reduce, holding = false, inView = false;
    barsEl.innerHTML = slides.map(function () { return '<span><i></i></span>'; }).join('');
    var bars = [].slice.call(barsEl.querySelectorAll('i'));
    slides.forEach(function (sl) { [].slice.call(sl.querySelectorAll('[data-a]')).forEach(function (el, k) { el.style.setProperty('--k', k); }); });

    function fmtNum(n, sep) { return sep ? Math.round(n).toLocaleString('ko-KR') : String(Math.round(n)); }
    function counts(sl) {
      sl.querySelectorAll('[data-story-count]').forEach(function (el) {
        var target = +el.getAttribute('data-story-count'), sep = el.hasAttribute('data-sep');
        if (reduce) { el.textContent = fmtNum(target, sep); return; }
        var t0 = null;
        function step(ts) {
          if (!t0) t0 = ts + 350;
          var p = Math.max(0, Math.min((ts - t0) / 1100, 1)), e = 1 - Math.pow(1 - p, 3);
          el.textContent = fmtNum(target * e, sep);
          if (p < 1) requestAnimationFrame(step);
        }
        el.textContent = '0'; requestAnimationFrame(step);
      });
    }
    function show(i) {
      idx = (i + slides.length) % slides.length; elapsed = 0;
      slides.forEach(function (sl, k) {
        sl.classList.toggle('on', k === idx);
        sl.classList.toggle('before', k < idx);
        sl.setAttribute('aria-hidden', k === idx ? 'false' : 'true');
      });
      bars.forEach(function (b, k) { b.style.transform = 'scaleX(' + (k < idx ? 1 : 0) + ')'; });
      counts(slides[idx]);
    }
    function frame(ts) {
      var dt = last ? ts - last : 0; last = ts;
      if (!paused && !holding && inView && !document.hidden) {
        elapsed += dt;
        if (elapsed >= DUR) show(idx + 1);
      }
      bars[idx].style.transform = 'scaleX(' + Math.min(elapsed / DUR, 1) + ')';
      requestAnimationFrame(frame);
    }
    function setPaused(p) { paused = p; box.classList.toggle('paused', p); pauseBtn.setAttribute('aria-pressed', p ? 'true' : 'false'); }

    box.querySelector('.story-zone.prev').addEventListener('click', function () { if (!swiped) show(idx - 1); });
    box.querySelector('.story-zone.next').addEventListener('click', function () { if (!swiped) show(idx + 1); });
    pauseBtn.addEventListener('click', function () { setPaused(!paused); });
    box.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowRight') { e.preventDefault(); show(idx + 1); }
      if (e.key === 'ArrowLeft') { e.preventDefault(); show(idx - 1); }
      if (e.key === ' ' && e.target === box) { e.preventDefault(); setPaused(!paused); }
    });
    // 누르고 있으면 잠깐 멈춤, 옆으로 밀면 넘김
    var sx = 0, sy = 0, holdT, swiped = false;
    box.addEventListener('pointerdown', function (e) {
      sx = e.clientX; sy = e.clientY; swiped = false;
      holdT = setTimeout(function () { holding = true; box.classList.add('holding'); }, 220);
    });
    function up(e) {
      clearTimeout(holdT);
      var dx = e.clientX - sx, dy = e.clientY - sy;
      if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy)) { swiped = true; show(idx + (dx < 0 ? 1 : -1)); }
      else if (holding) swiped = true;
      holding = false; box.classList.remove('holding');
      setTimeout(function () { swiped = false; }, 0);
    }
    box.addEventListener('pointerup', up);
    box.addEventListener('pointercancel', function () { clearTimeout(holdT); holding = false; box.classList.remove('holding'); });

    if ('IntersectionObserver' in window) {
      new IntersectionObserver(function (es) { inView = es[0].isIntersecting; }, { threshold: 0.45 }).observe(box);
    } else inView = true;
    setPaused(paused);
    show(0);
    requestAnimationFrame(frame);
  }

  /* ---------- 이수체계도: 스크롤 따라 학기가 켜짐 ---------- */
  function initRoadmap() {
    var steps = [].slice.call(document.querySelectorAll('#steps .step'));
    if (!steps.length) return;
    var credits = steps.map(function (st) { return st.querySelectorAll('.course').length * 3; });
    var bar = document.getElementById('rmProgress'), out = document.getElementById('rmCredits');
    var shown = -2, ticking = false;
    function update() {
      ticking = false;
      var mid = window.innerHeight * 0.55, active = -1;
      steps.forEach(function (st, i) { if (st.getBoundingClientRect().top < mid) active = i; });
      if (reduce) active = steps.length - 1;
      if (active === shown) return;
      shown = active;
      var sum = 0;
      steps.forEach(function (st, i) {
        st.classList.toggle('lit', i <= active);
        st.classList.toggle('cur', i === active);
        if (i <= active) sum += credits[i];
      });
      if (bar) bar.style.transform = 'scaleY(' + ((active + 1) / steps.length) + ')';
      if (out) {
        out.textContent = sum;
        out.parentNode.classList.toggle('cert', sum >= 21);
        out.parentNode.setAttribute('data-cert', tk('rm_cert'));
      }
    }
    window.addEventListener('scroll', function () { if (!ticking) { ticking = true; requestAnimationFrame(update); } }, { passive: true });
    window.addEventListener('resize', update);
    update();
  }


  /* ---------- 다크 모드: 밤하늘로 떠오르는 홍등(孔明灯) ---------- */
  function initLanterns() {
    var box = document.getElementById('lanterns');
    if (!box) return;
    var N = window.innerWidth < 720 ? 7 : 13;
    function rnd(a, b) { return a + Math.random() * (b - a); }
    function build(burst) {
      var hero = box.closest('.hero');
      box.style.setProperty('--rise', ((hero ? hero.offsetHeight : 700) + 160) + 'px');
      var html = '';
      for (var i = 0; i < N; i++) {
        var t = rnd(16, 28);
        // 처음 켤 때는 아래에서 차례로 떠오르게, 일부는 이미 하늘 중간에 있게
        var dl = burst ? (i % 3 === 0 ? -rnd(2, t * .6) : rnd(0, 6)) : -rnd(0, t);
        html += '<span class="lantern" style="--x:' + rnd(2, 96).toFixed(1) + '%;--s:' + rnd(18, 46).toFixed(0) + 'px;--t:' + t.toFixed(1) + 's;--dl:' + dl.toFixed(1) + 's;--sw:' + rnd(3, 6).toFixed(1) + 's;--dx:' + rnd(-40, 40).toFixed(0) + 'px"><i></i></span>';
      }
      box.innerHTML = html;
    }
    var wasDark = null;
    function sync() {
      var dark = root.getAttribute('data-theme') === 'dark';
      if (dark === wasDark) return;
      if (dark) build(wasDark === false);
      else setTimeout(function () { if (root.getAttribute('data-theme') !== 'dark') box.innerHTML = ''; }, 1200);
      box.classList.toggle('on', dark);
      wasDark = dark;
    }
    new MutationObserver(sync).observe(root, { attributes: true, attributeFilter: ['data-theme'] });
    sync();
  }

  /* ---------- 홍바오(红包) 뜯기 ---------- */
  function initHongbao() {
    var hb = document.getElementById('hongbao');
    if (!hb) return;
    var hint = document.getElementById('hbHint'), reset = document.getElementById('hbReset'), money = document.getElementById('hbMoney');
    var opened = false, sy = 0, dragging = false;
    function count() {
      if (reduce) { money.textContent = (1000000).toLocaleString('ko-KR'); return; }
      var t0 = null;
      function step(ts) {
        if (!t0) t0 = ts + 450;
        var p = Math.max(0, Math.min((ts - t0) / 1200, 1)), e = 1 - Math.pow(1 - p, 3);
        money.textContent = Math.round(1000000 * e).toLocaleString('ko-KR');
        if (p < 1) requestAnimationFrame(step);
      }
      requestAnimationFrame(step);
    }
    function open() {
      if (opened) return;
      opened = true;
      hb.style.removeProperty('--pull');
      hb.classList.add('open');
      hint.hidden = true; reset.hidden = false;
      money.textContent = '0';
      count();
    }
    function close() {
      opened = false;
      hb.classList.remove('open');
      hint.hidden = false; reset.hidden = true;
      money.textContent = '0';
    }
    hb.addEventListener('pointerdown', function (e) { if (opened) return; dragging = true; sy = e.clientY; hb.setPointerCapture && hb.setPointerCapture(e.pointerId); });
    hb.addEventListener('pointermove', function (e) {
      if (!dragging || opened) return;
      var dy = Math.max(0, sy - e.clientY);
      hb.style.setProperty('--pull', Math.min(dy, 60) + 'px');
      if (dy > 48) { dragging = false; open(); }
    });
    function end(e) {
      if (!dragging) return;
      dragging = false;
      var dy = sy - e.clientY;
      hb.style.removeProperty('--pull');
      if (Math.abs(dy) < 8) open();             // 그냥 눌러도 열림
    }
    hb.addEventListener('pointerup', end);
    hb.addEventListener('pointercancel', function () { dragging = false; hb.style.removeProperty('--pull'); });
    hb.addEventListener('keydown', function (e) { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open(); } });
    reset.addEventListener('click', close);
  }


  /* ---------- 학과소개: 수준 × 영역 표가 차례로 켜짐 ---------- */
  function initMatrix() {
    var mx = document.getElementById('matrix');
    if (!mx) return;
    if (reduce || !('IntersectionObserver' in window)) { mx.classList.add('in'); return; }
    var io = new IntersectionObserver(function (es) {
      if (es[0].isIntersecting) { mx.classList.add('in'); io.disconnect(); }
    }, { threshold: 0.5 });
    io.observe(mx);
  }


  /* ---------- 복사 버튼 ---------- */
  function initCopy() {
    document.querySelectorAll('[data-copy]').forEach(function (b) {
      b.addEventListener('click', function () {
        var text = b.getAttribute('data-copy');
        function done() {
          b.classList.add('ok'); b.setAttribute('data-tip', tk('copied'));
          setTimeout(function () { b.classList.remove('ok'); }, 1600);
        }
        function fallback() {
          var r = document.createRange(), host = b.closest('.row').querySelector('.idx');
          r.selectNodeContents(host); var sel = getSelection(); sel.removeAllRanges(); sel.addRange(r);
        }
        try {
          if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(text).then(done, fallback);
          else fallback();
        } catch (e) { fallback(); }
      });
    });
  }


  /* ---------- 졸업요건: 단일 / 복수전공 전환 ---------- */
  function initGrad() {
    var tabs = document.getElementById('gradTabs');
    if (!tabs) return;
    var out = document.getElementById('gradMajor'), bar = document.getElementById('gradMajorBar');
    tabs.addEventListener('click', function (e) {
      var b = e.target.closest('[data-major]'); if (!b) return;
      tabs.querySelectorAll('[data-major]').forEach(function (x) { x.setAttribute('aria-selected', x === b ? 'true' : 'false'); });
      var to = b.getAttribute('data-major') === 'double' ? 42 : 60, from = +out.textContent || 0;
      bar.style.setProperty('--w', (to / 130 * 100).toFixed(1) + '%');
      if (reduce) { out.textContent = to; return; }
      var t0 = null;
      (function step(ts) {
        if (!t0) t0 = ts;
        var p = Math.min((ts - t0) / 500, 1), e2 = 1 - Math.pow(1 - p, 3);
        out.textContent = Math.round(from + (to - from) * e2);
        if (p < 1) requestAnimationFrame(step);
      })(performance.now());
    });
  }


  /* ---------- 학년별 맞춤 안내 ---------- */
  function initForYou() {
    var tabs = document.getElementById('fyTabs');
    if (!tabs) return;
    var panels = [].slice.call(document.querySelectorAll('.fy-panel'));
    function select(aud, save) {
      tabs.querySelectorAll('[data-aud]').forEach(function (b) { b.setAttribute('aria-selected', b.getAttribute('data-aud') === aud ? 'true' : 'false'); });
      panels.forEach(function (p) {
        var on = p.getAttribute('data-aud') === aud;
        if (on) { p.hidden = false; p.classList.remove('show'); void p.offsetWidth; p.classList.add('show'); }
        else { p.hidden = true; p.classList.remove('show'); }
      });
      if (save) store('aud', aud);
    }
    tabs.addEventListener('click', function (e) { var b = e.target.closest('[data-aud]'); if (b) select(b.getAttribute('data-aud'), true); });
    var saved = store('aud');
    select(saved && tabs.querySelector('[data-aud="' + saved + '"]') ? saved : 'hs', false);
    // 메뉴의 '졸업요건' → 4학년 탭을 열고 그 자리로
    function toGrad() {
      select('y4', false);
      var g = document.getElementById('graduation');
      setTimeout(function () { g.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' }); }, 60);
    }
    document.addEventListener('click', function (e) {
      var a = e.target.closest('a[href$="#graduation"]');
      if (a && (a.getAttribute('href') === '#graduation' || location.pathname.split('/').pop() === a.getAttribute('href').split('#')[0])) { e.preventDefault(); toGrad(); }
    });
    if (location.hash === '#graduation') toGrad();
  }

  /* ---------- 시작 ---------- */
  function init() {
    // 언어
    var saved = store('lang');
    applyLang(saved || 'ko');
    document.querySelectorAll('[data-lang]').forEach(function (b) {
      b.addEventListener('click', function () { applyLang(b.getAttribute('data-lang')); });
    });

    initBrush();
    document.querySelectorAll('.board-tabs [data-filter]').forEach(function (x) { x.setAttribute('aria-selected', x.getAttribute('data-filter') === progFilter ? 'true' : 'false'); });
    document.querySelectorAll('.board-tabs [data-filter]').forEach(function (b) {
      b.addEventListener('click', function () {
        progFilter = b.getAttribute('data-filter');
        document.querySelectorAll('.board-tabs [data-filter]').forEach(function (x) { x.setAttribute('aria-selected', x === b ? 'true' : 'false'); });
        renderPrograms();
      });
    });
    initSky();
    initSearch();
    initStory();
    initRoadmap();
    initLanterns();
    initHongbao();
    initMatrix();
    initCopy();
    initGrad();
    initForYou();

    // 테마
    var themeBtn = document.getElementById('themeBtn');
    if (themeBtn) themeBtn.addEventListener('click', function () {
      setTheme(root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark');
    });

    // 헤더 유리 효과
    var header = document.getElementById('header');
    function onScroll() { if (header) header.classList.toggle('scrolled', window.scrollY > 8); }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    // 휴대폰 메뉴
    var menuBtn = document.getElementById('menuBtn'), nav = document.getElementById('nav');
    var mobile = window.matchMedia('(max-width: 1080px)');
    // 아이패드처럼 마우스가 없는 기기에서는 hover로 열지 않고 탭으로만 연다
    var canHover = window.matchMedia('(hover: hover) and (pointer: fine)');
    function closeMenus(except) {
      document.querySelectorAll('.menu.open').forEach(function (m) {
        if (m !== except) { m.classList.remove('open'); m.querySelector('.menu-top').setAttribute('aria-expanded', 'false'); }
      });
      var h = document.getElementById('header');
      if (h && !except) h.classList.remove('mega');
    }
    if (menuBtn && nav) {
      menuBtn.addEventListener('click', function () {
        var open = nav.classList.toggle('open');
        menuBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
        if (!open) closeMenus();
      });
    }

    // 드롭다운: 마우스를 올리면 열리고, 누르면 열고 닫는다
    document.querySelectorAll('.menu').forEach(function (m) {
      var btn = m.querySelector('.menu-top'), timer;
      function set(on) {
        m.classList.toggle('open', on);
        btn.setAttribute('aria-expanded', on ? 'true' : 'false');
        var h = document.getElementById('header');
        if (h) h.classList.toggle('mega', !!document.querySelector('.menu.open'));
      }
      m.addEventListener('mouseenter', function () {
        if (mobile.matches || !canHover.matches) return;
        clearTimeout(timer);
        // 다른 메뉴에서 넘어올 때는 띠를 다시 펼치지 않고 내용만 바꾼다
        var swapping = !!document.querySelector('.menu.open:not(:hover)') || document.getElementById('header').classList.contains('mega');
        if (swapping) { m.classList.add('swap'); setTimeout(function () { m.classList.remove('swap'); }, 450); }
        closeMenus(m); set(true);
      });
      m.addEventListener('mouseleave', function () { if (mobile.matches || !canHover.matches) return; timer = setTimeout(function () { set(false); }, 140); });
      btn.addEventListener('click', function () { var on = !m.classList.contains('open'); closeMenus(m); set(on); });
      m.addEventListener('focusout', function (e) { if (!m.contains(e.relatedTarget) && !mobile.matches) set(false); });
    });
    document.addEventListener('click', function (e) { if (!e.target.closest('.menu')) closeMenus(); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeMenus(); });
    if (nav) nav.addEventListener('click', function (e) {
      var a = e.target.closest('a');
      if (!a) return;
      if (a.classList.contains('todo')) { e.preventDefault(); return; }
      closeMenus();
      if (menuBtn) { nav.classList.remove('open'); menuBtn.setAttribute('aria-expanded', 'false'); }
    });

    // 카드 호버 빛
    document.addEventListener('pointermove', function (e) {
      var c = e.target.closest && e.target.closest('.card');
      if (!c) return;
      var r = c.getBoundingClientRect();
      c.style.setProperty('--mx', (e.clientX - r.left) + 'px');
      c.style.setProperty('--my', (e.clientY - r.top) + 'px');
    }, { passive: true });

    // 그림이 없으면 자리표시
    document.querySelectorAll('.fig img').forEach(function (img) {
      function miss() { img.closest('.fig').classList.add('missing'); }
      if (img.complete && img.naturalWidth === 0) miss();
      img.addEventListener('error', miss);
    });

    // 라이트박스
    var lb = document.getElementById('lightbox');
    document.querySelectorAll('.fig').forEach(function (f) {
      f.addEventListener('click', function () {
        if (f.classList.contains('missing') || !lb) return;
        var img = lb.querySelector('img');
        img.src = f.getAttribute('data-src');
        img.alt = (f.querySelector('img') || {}).alt || '';
        lb.classList.add('open');
      });
    });
    if (lb) {
      lb.addEventListener('click', function () { lb.classList.remove('open'); });
      document.addEventListener('keydown', function (e) { if (e.key === 'Escape') lb.classList.remove('open'); });
    }

    // 스크롤 등장 · 카운트업 · 막대
    var watched = document.querySelectorAll('.reveal, .roadmap, .timeline, #chart');
    var counters = document.querySelectorAll('[data-count]');
    if (reduce || !('IntersectionObserver' in window)) {
      watched.forEach(function (el) { el.classList.add('in'); });
      counters.forEach(countUp);
      return;
    }
    root.classList.add('js');
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        en.target.classList.add('in');
        en.target.querySelectorAll('[data-count]').forEach(function (c) { if (!c._done) { c._done = 1; countUp(c); } });
        io.unobserve(en.target);
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    watched.forEach(function (el) { io.observe(el); });
    var cio = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting && !en.target._done) { en.target._done = 1; countUp(en.target); cio.unobserve(en.target); }
      });
    }, { threshold: 0.5 });
    counters.forEach(function (c) { cio.observe(c); });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();

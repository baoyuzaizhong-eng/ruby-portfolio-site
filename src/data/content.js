// ==========================================
// 个人信息
// ==========================================
export const personalInfo = {
  name: '钟欣汝',
  englishName: 'Ruby',
  title: '活动策划师',
  englishTitle: 'Event Planner & Project Manager',
  subtitle: '8年资深策划及项目运营管理者',
  email: '790518634@qq.com',
  location: '珠海 · 可接受全国出差',
  bio: '事业心强，逻辑严密，拥有从项目概念至成果落地的全流程管理与质控经验。既能独当一面，多方协调沟通，独立运作项目从0到1；又能团队作战，知人育人，发挥团队最大实力。',
  education: '汕头大学（一本）· 市场营销本科 · 2017届',
  languages: '普通话 · 粤语 · 基础英语',
  certificates: ['初级社工证', '中级经济师（人力资源）', 'BEC中级证书'],
}

// ==========================================
// 核心数据
// ==========================================
export const stats = [
  { number: 8, suffix: '', label: '年行业深耕', sublabel: 'Years of Experience' },
  { number: 206, suffix: '', label: '场年度活动', sublabel: 'Events in 2025' },
  { number: 12, suffix: 'x', label: '场地收入增长', sublabel: 'Revenue Growth' },
  { number: 3, suffix: '万+', label: '线上活动参与', sublabel: 'Online Participants' },
]

// ==========================================
// 工作经历
// ==========================================
export const experiences = [
  {
    period: '2023.05 — 2026.01',
    company: '珠海市横琴新区励盈商业管理有限公司',
    location: '励骏庞都广场',
    role: '市场策划部主管',
    highlights: [
      '制定年度宣传计划及预算，协调3人团队运作市场推广项目',
      '推动场地租赁收入从3万/年增长至37万+/年',
      '2025年举办活动206场，支出仅81万元',
      '对接政府部门、场外品牌等资源，助力商场招商',
      '自主创建场地刊例标准及报价单、活动入场须知等SOP',
    ],
  },
  {
    period: '2020.07 — 2023.04',
    company: '珠海大横琴城市公共资源经营管理有限公司',
    location: '垃圾分类策划组',
    role: '策划组主管',
    highlights: [
      '带领十人团队策划并完成各项垃圾分类宣传活动',
      '策划线上绘画大赛（1800+投稿）、城市环保跑（500+参与）',
      '开发垃圾分类环保先锋赛网页小游戏（30000+参与）',
      '对接高校科研院所，实现"高校-企业-社区"三位一体宣发模式',
    ],
  },
  {
    period: '2017.08 — 2020.06',
    company: '珠海惠嘉国际会展集团有限公司',
    location: '策划推广部',
    role: '策划推广主管',
    highlights: [
      '负责会展会议、晚宴、庆典仪式、商场活动方案策划与执行',
      '往返珠澳两地，为集团澳门分公司提供活动组织与执行统筹',
      '珠海庞都跨年之夜、中国(澳门)财经风云榜等大型活动',
    ],
  },
]

// ==========================================
// 作品模块 — WHAT I CAN DO
// ==========================================
export const works = [
  {
    id: 'event-planning',
    title: '活动策划',
    subtitle: 'Event Planning',
    cover: '/assets/works/spring-roaming-1.jpg',
    description: '涵盖商场节庆、文化美食节、体育赛事、亲子活动、交友活动等多元化活动策划，从方案设计到落地执行全流程把控。',
    tags: ['节庆活动', '体育赛事', '亲子活动', '交友活动', '商家活动'],
    type: 'gallery',
    images: [
      { src: '/assets/works/spring-roaming-1.jpg', caption: '2025春日漫游展' },
      { src: '/assets/works/spring-roaming-2.jpg', caption: '2025春日漫游展' },
      { src: '/assets/works/food-festival-1.png', caption: '2024澳门国际文化美食节' },
      { src: '/assets/works/food-festival-2.png', caption: '2024澳门国际文化美食节' },
      { src: '/assets/works/beer-camping-1.png', caption: '2025啤酒露营节' },
      { src: '/assets/works/beer-camping-2.png', caption: '2025啤酒露营节' },
      { src: '/assets/works/summer-kids-1.png', caption: '2024暑期乐享童趣·夏日接头计划' },
      { src: '/assets/works/summer-kids-2.png', caption: '2024暑期乐享童趣·夏日接头计划' },
      { src: '/assets/works/summer-kids-3.png', caption: '2024暑期乐享童趣·夏日接头计划' },
      { src: '/assets/works/dating-1.jpg', caption: '2025暑期交友季' },
      { src: '/assets/works/dating-2.png', caption: '2025暑期交友季' },
      { src: '/assets/works/boxing.png', caption: '2025拳王争霸赛' },
      { src: '/assets/works/balance-bike.png', caption: '2025小车神平衡车挑战赛' },
      { src: '/assets/works/anniversary-1.png', caption: '2024周年庆·5限欢乐' },
      { src: '/assets/works/anniversary-2.png', caption: '2024周年庆·5限欢乐' },
      { src: '/assets/works/yoga.png', caption: '2024琴澳百人瑜伽活动' },
      { src: '/assets/works/rally.png', caption: '澳门至北京·新能源车·长城拉力挑战赛' },
      { src: '/assets/works/grand-prix-1.png', caption: '2023澳门大赛车参赛车辆展览' },
      { src: '/assets/works/ice-cream-tasting.png', caption: '雪糕品鉴会（商家活动）' },
    ],
  },
  {
    id: 'video-production',
    title: '视频协助',
    subtitle: 'Video Production',
    cover: '/assets/videos/mall-promo-cover.jpg',
    description: '商场招商宣传片、商家推广视频制作，涵盖拍摄、剪辑、出镜主持全流程，用视觉语言传递品牌价值。',
    tags: ['招商宣传', '商家推广', '短视频'],
    type: 'video',
    videos: [
      { src: '/assets/videos/mall-promo.mp4', title: '在此·遇见 — 商场招商宣传' },
      { src: '/assets/videos/dining.mp4', title: '餐饮商家宣传（霸王餐）' },
      { src: '/assets/videos/scalp-care.mp4', title: '头皮管理 — 商家宣传' },
      { src: '/assets/videos/eye-care.mp4', title: '眼睛健康 — 商家宣传' },
    ],
  },
  {
    id: 'sustainable',
    title: '可持续运营',
    subtitle: 'Sustainable Operations',
    cover: '/assets/works/book-hut.png',
    description: '常态化运营项目打造，包括图书漂流小屋、庞都小舞台、宠物友好商场等，以低成本实现长效运营价值。',
    tags: ['常态化项目', '社区共建', '公益联动'],
    type: 'gallery',
    images: [
      { src: '/assets/works/book-hut.png', caption: '图书漂流小屋 — 征集近千本书籍' },
      { src: '/assets/works/dating-stage.png', caption: '庞都交友舞台' },
      { src: '/assets/works/happy-theater.png', caption: '庞都开心剧场' },
      { src: '/assets/works/eco-center-1.png', caption: '横琴垃圾分类科普中心' },
      { src: '/assets/works/eco-center-2.png', caption: '横琴垃圾分类科普中心' },
    ],
  },
  {
    id: 'eco-exhibition',
    title: '环保策展',
    subtitle: 'Eco Exhibition',
    cover: '/assets/works/eco-run.png',
    description: '垃圾分类主题展览策划，结合政策导向与公众参与，打造环保公益新场景，推动社区共建共治。',
    tags: ['主题展览', '公益活动', '政策结合'],
    type: 'gallery',
    images: [
      { src: '/assets/works/eco-run.png', caption: '2020横琴垃圾分类环保跑（500+参与）' },
      { src: '/assets/works/waste-summary.png', caption: '2023横琴垃圾分类年度总结展' },
    ],
  },
  {
    id: 'documents',
    title: '方案与文档',
    subtitle: 'Plans & Documents',
    cover: '/assets/works/docs-cover.png',
    description: '活动方案、总结报告、SOP标准化文件、政府补贴申报等全流程文档体系，以规范化管理提升团队效率。',
    tags: ['活动方案', '总结报告', 'SOP标准', '补贴申报', '报价体系'],
    type: 'document',
    documents: [
      { name: '2024励骏庞都暑期活动方案', category: '活动方案', file: '/assets/docs/2024励骏庞都暑期活动方案.pdf' },
      { name: '2025励骏3-4月春季活动方案', category: '活动方案', file: '/assets/docs/2025励骏3-4月春季活动方案.pdf' },
      { name: '2025暑期花样交友季方案', category: '活动方案', file: '/assets/docs/2025暑期花样交友季方案.pdf' },
      { name: '2025霸王餐抽奖活动方案', category: '活动方案', file: '/assets/docs/2025霸王餐抽奖活动方案.pdf' },
      { name: '2024励骏庞都暑期活动总结报告', category: '总结报告', file: '' },
      { name: '总结及2025年度计划', category: '总结报告', file: '/assets/docs/总结及2025年度计划.pdf' },
      { name: '活动信息表 Event Sheet', category: 'SOP标准', file: '/assets/docs/活动信息表event-sheet.pdf' },
      { name: '活动入场须知 V10', category: 'SOP标准', file: '/assets/docs/活动入场须知V10.pdf' },
      { name: '场地临时租赁收费标准', category: '报价体系', file: '' },
      { name: '广告资源报价单', category: '报价体系', file: '/assets/docs/广告资源报价单.pdf' },
      { name: '啤酒露营节补贴备案文件', category: '补贴申报', file: '' },
      { name: '垃圾分类主题展览月方案', category: '策展规划', file: '' },
    ],
  },
]

// ==========================================
// 个人优势
// ==========================================
export const advantages = [
  {
    icon: '◆',
    title: '全流程项目管理',
    en: 'Full-Cycle Management',
    desc: '从项目概念到成果落地的完整管理与质控经验，独立运作项目从0到1，确保每个环节精准执行。',
  },
  {
    icon: '◇',
    title: '资源整合与公关',
    en: 'Resource Integration',
    desc: '涵盖演艺、培训、舞美、影视、媒体、旅游、明星经纪等丰富供应商资源，对接政府与品牌方，为项目开源节流、扩大品牌效应。',
  },
  {
    icon: '▲',
    title: 'AI技术赋能',
    en: 'AI-Powered Planning',
    desc: '逐步使用多种AI工具提升工作效率，如图像及视频生成工具、Trae Word工作台等，将方案构想与项目细节可视化呈现，提升方案更多样创意与可行性。',
  },
]

// ==========================================
// WHAT I ENJOY
// ==========================================
export const enjoyCategories = [
  {
    id: 'travel',
    title: '旅游',
    en: 'Travel',
    images: [
      { src: '/assets/enjoy/travel-beijing.jpg', caption: '北京' },
      { src: '/assets/enjoy/travel-lhasa.jpg', caption: '拉萨' },
      { src: '/assets/enjoy/travel-dali.jpg', caption: '大理' },
      { src: '/assets/enjoy/travel-xinjiang.jpg', caption: '北疆' },
      { src: '/assets/enjoy/travel-changbai.jpg', caption: '长白山' },
      { src: '/assets/enjoy/travel-harbin.jpg', caption: '哈尔滨' },
    ],
  },
  {
    id: 'sports',
    title: '运动',
    en: 'Sports',
    images: [
      { src: '/assets/enjoy/sport-skiing.jpg', caption: '滑雪' },
      { src: '/assets/enjoy/sport-skating.jpg', caption: '滑冰' },
      { src: '/assets/enjoy/sport-hiking-hk.jpg', caption: '徒步·HK太平山' },
      { src: '/assets/enjoy/sport-hiking-dxc.jpg', caption: '徒步·东西涌' },
      { src: '/assets/enjoy/sport-climbing.jpg', caption: '爬山·罗浮山' },
    ],
  },
  {
    id: 'explore',
    title: '探索',
    en: 'Explore',
    images: [
      { src: '/assets/enjoy/explore-diving.jpg', caption: '体验潜水' },
      { src: '/assets/enjoy/explore-tie-dye.jpg', caption: '扎染' },
      { src: '/assets/enjoy/explore-flower.jpg', caption: '插花' },
      { src: '/assets/enjoy/explore-train.jpg', caption: '火车进藏' },
      { src: '/assets/enjoy/explore-crab.jpg', caption: '钓蟹' },
    ],
  },
  {
    id: 'study',
    title: '学习',
    en: 'Learning',
    images: [
      { src: '/assets/enjoy/study-cert.png', caption: '在职考证' },
    ],
    videos: [
      { src: '/assets/enjoy/study-mall.mp4', caption: '毛茸茸的万象汇', poster: '/assets/enjoy/study-mall.jpeg' },
    ],
    audios: [
      { src: '/assets/enjoy/study-music-job.mp3', caption: '音乐创作：《求职跳楼机》', artist: '' },
      { src: '/assets/enjoy/study-music-flute.mp3', caption: '音乐创作：《风过笛声轻》', artist: '乐观的焦糖圣代 · 流行' },
    ],
  },
]

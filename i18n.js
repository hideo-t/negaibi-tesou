/* i18n.js — 願い灯 多言語切替
 * 対応言語: ja(日本語) / en(English) / zh-TW(繁體中文) / zh-CN(简体中文) / ko(한국어)
 * 使い方: HTMLの要素に data-i18n="キー" を付与 → 自動置換
 *        言語選択は body.dataset.lang またはローカルストレージ "lang"
 */
(function(){
  const I18N = {
    ja: {
      "lang.name":"日本語",
      // ナビ
      "nav.overview":"概要","nav.services":"鑑定メニュー","nav.price":"料金",
      "nav.access":"アクセス","nav.contact":"お問い合わせ","nav.flyer":"フライヤー","nav.fc":"FC募集",
      "nav.teller":"🔮 占い師募集",
      // ロゴ
      "logo.main":"世界王 手相診断所","logo.sub":"願い灯 NEGAIBI",
      // ヒーロー
      "hero.label":"PALM READING × AI",
      "hero.title":"世界王",
      "hero.ruby":"─ 手相診断所 願い灯 ─",
      "hero.catch":"その手のひらに、<br>未来を照らす光がある。",
      "hero.sub":"伝統の叡智と最先端テクノロジーの融合<br>より深く、より正確に、あなたの可能性を読み解く",
      "hero.cta.line":"LINEで予約",
      "hero.cta.trial":"無料で体験する","hero.cta.free":"無料",
      "hero.teller_recruit":"🔮 占い師の方はこちら（募集中）",
      // メッセージ
      "msg.line1":"手相は、人生の地図。",
      "msg.line2":"あなたの手のひらには、<br>これまでの歩みと、これからの可能性が<br>すべて刻まれています。",
      "msg.line3":"未来は、変えられる。",
      // サービス
      "services.title":"鑑定メニュー",
      "svc.01.title":"丁寧な鑑定","svc.01.desc":"お一人おひとりに寄り添い、手相の線一本一本を丁寧に読み解きます。",
      "svc.02.title":"恋愛・結婚","svc.02.desc":"相性・結婚の時期など、恋の未来を手相から紐解きます。",
      "svc.03.title":"仕事・金運","svc.03.desc":"適職・転機・金運の流れなど、お仕事と財運を鑑定します。",
      "svc.04.title":"人間関係","svc.04.desc":"家族・友人・職場の悩みなど、人との関係性を読み解きます。",
      "svc.05.title":"癒しの空間","svc.05.desc":"南湖公園の自然に囲まれた空間で、心をリセットできます。",
      "svc.06.title":"手のひら画像診断","svc.06.desc":"写真を送るだけでOK。遠方の方もお気軽にご相談いただけます。",
      // 料金
      "price.title":"鑑定料","price.note":"税込","price.from":"〜",
      // アクセス
      "access.title":"アクセス",
      "access.shop":"店名","access.shop.value":"世界王 手相診断所<br>願い灯（ねがいび）",
      "access.addr":"住所","access.addr.value":"〒961-0815<br>福島県白河市五郎窪38-1<br>南湖神社社務所そば",
      "access.hours":"営業時間","access.hours.value":"10:30〜（予約優先）",
      "access.closed":"定休日","access.closed.value":"水曜日",
      // CTA
      "cta.title":"手のひら画像診断<br>無料体験 受付中",
      "cta.note":"DMにてお気軽にお問い合わせください",
      // フライヤー
      "flyer.title":"フライヤー","flyer.download":"ダウンロード",
      // 世界王プロジェクト
      "wk.label":"WORLD KING PROJECT","wk.title":"世界王プロジェクト",
      "wk.desc":"人は、誰でも自分の世界の王になれる。AI診断・物語・ツールが融合したプラットフォーム。",
      // フッター
      "footer.logo":"願い灯 NEGAIBI","footer.copy":"&copy; 2025 世界王 手相診断所",
      // メタ
      "meta.title":"世界王 手相診断所 願い灯（ねがいび）| 白河市南湖公園",
      "meta.desc":"福島県白河市、南湖公園の自然に囲まれた癒しの空間で手相診断。AI×伝統の手相鑑定。鑑定料500円から。",
      // 共通
      "common.back":"← トップに戻る",
      "common.ja_only":"※ このページの詳細は日本語のみご用意しています。",
      // 事業概要 (overview.html)
      "ov.title":"事業概要","ov.h1":"事業概要",
      // FC加盟店 (fc.html)
      "fc.title":"FC加盟店募集","fc.h1":"FC加盟店 募集",
      // 店舗案内 (shop.html)
      "shop.h1":"和の静寂に、未来を読む。",
      "shop.sub":"— 南湖公園の杜に佇む、手相診断所 —",
      "shop.sec1.title":"鑑定の間","shop.sec2.title":"待合の間",
      "shop.sec3.title":"お守り・お土産","shop.sec4.title":"願い灯の灯",
      "shop.access.title":"アクセス",
      "shop.cta.title":"お会いできる日を、お待ちしています。",
      "shop.cta.map":"地図を見る",
      "nav.shop":"🏪 店舗案内",
    },

    en: {
      "lang.name":"English",
      "nav.overview":"About","nav.services":"Menu","nav.price":"Price",
      "nav.access":"Access","nav.contact":"Contact","nav.flyer":"Flyer","nav.fc":"Franchise",
      "nav.teller":"🔮 Fortune Teller Recruit",
      "logo.main":"World King Palm Reading","logo.sub":"NEGAIBI",
      "hero.label":"PALM READING × AI",
      "hero.title":"World King",
      "hero.ruby":"─ Palm Reading Salon NEGAIBI ─",
      "hero.catch":"In the palm of your hand,<br>there is a light that illuminates your future.",
      "hero.sub":"Ancient wisdom meets cutting-edge technology<br>A deeper, more accurate reading of your potential.",
      "hero.cta.line":"Book via LINE",
      "hero.cta.trial":"Try the Free Experience","hero.cta.free":"FREE",
      "hero.teller_recruit":"🔮 Fortune Tellers Wanted — Apply Here",
      "msg.line1":"Your palm is the map of your life.",
      "msg.line2":"Every step you have taken<br>and every possibility ahead<br>is carved into your hand.",
      "msg.line3":"The future can be changed.",
      "services.title":"Reading Menu",
      "svc.01.title":"Thoughtful Reading","svc.01.desc":"We sit beside you and carefully read every single line of your palm.",
      "svc.02.title":"Love & Marriage","svc.02.desc":"Compatibility, the right timing for marriage — the future of love revealed.",
      "svc.03.title":"Work & Wealth","svc.03.desc":"Your true vocation, turning points and the flow of fortune.",
      "svc.04.title":"Relationships","svc.04.desc":"Family, friends, the workplace — we read into the bonds that surround you.",
      "svc.05.title":"Healing Space","svc.05.desc":"Reset your heart in our quiet space surrounded by Nanko Park's nature.",
      "svc.06.title":"Remote Photo Reading","svc.06.desc":"Just send us a photo. Available for anyone, anywhere.",
      "price.title":"Price","price.note":"tax included","price.from":"~",
      "access.title":"Access",
      "access.shop":"Shop","access.shop.value":"World King Palm Reading<br>NEGAIBI",
      "access.addr":"Address","access.addr.value":"38-1 Gorokubo, Shirakawa,<br>Fukushima 961-0815, Japan<br>(Next to Nanko Shrine Office)",
      "access.hours":"Hours","access.hours.value":"From 10:30 (Reservation preferred)",
      "access.closed":"Closed","access.closed.value":"Wednesdays",
      "cta.title":"Free Remote Photo Reading<br>Available Now",
      "cta.note":"Feel free to message us on DM",
      "flyer.title":"Flyer","flyer.download":"Download",
      "wk.label":"WORLD KING PROJECT","wk.title":"World King Project",
      "wk.desc":"Anyone can be the king of their own world. An AI-powered platform fusing diagnosis, story and tools.",
      "footer.logo":"NEGAIBI","footer.copy":"&copy; 2025 World King Palm Reading",
      "meta.title":"World King Palm Reading NEGAIBI | Nanko Park, Shirakawa",
      "meta.desc":"AI × traditional palm reading in a healing space surrounded by Nanko Park nature, Shirakawa, Fukushima. From 500 JPY.",
      "common.back":"← Back to top",
      "common.ja_only":"※ Detailed information on this page is currently available in Japanese only.",
      "ov.title":"Business Overview","ov.h1":"Business Overview",
      "fc.title":"Franchise Opportunities","fc.h1":"Franchise Opportunities",
      "shop.h1":"Read your future in tranquil Japanese serenity.",
      "shop.sub":"— A palm reading salon by Nanko Park —",
      "shop.sec1.title":"Reading Room","shop.sec2.title":"Waiting Area",
      "shop.sec3.title":"Charms & Souvenirs","shop.sec4.title":"The Light of NEGAIBI",
      "shop.access.title":"Access",
      "shop.cta.title":"We look forward to seeing you.",
      "shop.cta.map":"View Map",
      "nav.shop":"🏪 Shop Guide",
    },

    "zh-TW": {
      "lang.name":"繁體中文",
      "nav.overview":"關於","nav.services":"鑑定項目","nav.price":"費用",
      "nav.access":"交通","nav.contact":"聯絡我們","nav.flyer":"宣傳單","nav.fc":"加盟招募",
      "nav.teller":"🔮 占卜師招募",
      "logo.main":"世界王 手相鑑定所","logo.sub":"願燈 NEGAIBI",
      "hero.label":"PALM READING × AI",
      "hero.title":"世界王",
      "hero.ruby":"─ 手相鑑定所 願燈 ─",
      "hero.catch":"在您的掌心，<br>有一道照亮未來的光。",
      "hero.sub":"傳統智慧與最尖端科技的融合<br>更深入、更準確地解讀您的潛能。",
      "hero.cta.line":"用LINE預約",
      "hero.cta.trial":"免費體驗","hero.cta.free":"免費",
      "hero.teller_recruit":"🔮 占卜師招募中（點此申請）",
      "msg.line1":"手相，是人生的地圖。",
      "msg.line2":"您的掌心，<br>刻劃著至今的足跡<br>與未來所有的可能。",
      "msg.line3":"未來，是能夠改變的。",
      "services.title":"鑑定項目",
      "svc.01.title":"細膩鑑定","svc.01.desc":"用心傾聽每一位來客，仔細解讀手相上的每一條紋路。",
      "svc.02.title":"戀愛・婚姻","svc.02.desc":"從手相中解開緣分、結婚時機等戀愛之未來。",
      "svc.03.title":"工作・財運","svc.03.desc":"鑑定您的天職、轉機與財運走勢。",
      "svc.04.title":"人際關係","svc.04.desc":"解讀家人、朋友、職場等與您相關的人際緣分。",
      "svc.05.title":"療癒空間","svc.05.desc":"在南湖公園自然環抱的空間中，沉澱身心。",
      "svc.06.title":"手掌照片鑑定","svc.06.desc":"只需寄出照片，遠方的您也能輕鬆諮詢。",
      "price.title":"鑑定費","price.note":"含稅","price.from":"起",
      "access.title":"交通",
      "access.shop":"店名","access.shop.value":"世界王 手相鑑定所<br>願燈（NEGAIBI）",
      "access.addr":"地址","access.addr.value":"〒961-0815<br>福島縣白河市五郎窪38-1<br>南湖神社社務所旁",
      "access.hours":"營業時間","access.hours.value":"10:30開始（預約優先）",
      "access.closed":"公休日","access.closed.value":"每週三",
      "cta.title":"手掌照片鑑定<br>免費體驗 開放預約",
      "cta.note":"歡迎透過私訊與我們聯繫",
      "flyer.title":"宣傳單","flyer.download":"下載",
      "wk.label":"WORLD KING PROJECT","wk.title":"世界王企劃",
      "wk.desc":"每個人都能成為自己世界的王。融合AI鑑定、故事與工具的綜合平台。",
      "footer.logo":"願燈 NEGAIBI","footer.copy":"&copy; 2025 世界王 手相鑑定所",
      "meta.title":"世界王 手相鑑定所 願燈（NEGAIBI）| 白河市南湖公園",
      "meta.desc":"在福島縣白河市南湖公園自然環抱的療癒空間中享受手相鑑定。AI與傳統的融合。鑑定費500日圓起。",
      "common.back":"← 回到首頁",
      "common.ja_only":"※ 本頁詳細內容目前僅提供日文版本。",
      "ov.title":"事業概要","ov.h1":"事業概要",
      "fc.title":"加盟招募","fc.h1":"FC加盟店 招募",
      "shop.h1":"在和風寧靜中，閱讀您的未來。",
      "shop.sub":"— 佇立於南湖公園的手相鑑定所 —",
      "shop.sec1.title":"鑑定室","shop.sec2.title":"等候區",
      "shop.sec3.title":"護身符・伴手禮","shop.sec4.title":"願燈之光",
      "shop.access.title":"交通",
      "shop.cta.title":"期待與您相見的日子。",
      "shop.cta.map":"查看地圖",
      "nav.shop":"🏪 店舗導覽",
    },

    "zh-CN": {
      "lang.name":"简体中文",
      "nav.overview":"关于","nav.services":"鉴定项目","nav.price":"费用",
      "nav.access":"交通","nav.contact":"联系我们","nav.flyer":"宣传单","nav.fc":"加盟招募",
      "nav.teller":"🔮 占卜师招募",
      "logo.main":"世界王 手相鉴定所","logo.sub":"愿灯 NEGAIBI",
      "hero.label":"PALM READING × AI",
      "hero.title":"世界王",
      "hero.ruby":"─ 手相鉴定所 愿灯 ─",
      "hero.catch":"在您的掌心，<br>有一束照亮未来的光。",
      "hero.sub":"传统智慧与尖端科技的融合<br>更深入、更精准地解读您的潜能。",
      "hero.cta.line":"用LINE预约",
      "hero.cta.trial":"免费体验","hero.cta.free":"免费",
      "hero.teller_recruit":"🔮 占卜师招募中（点此申请）",
      "msg.line1":"手相，是人生的地图。",
      "msg.line2":"您的掌心，<br>刻有过往的足迹<br>与未来的全部可能。",
      "msg.line3":"未来，是可以改变的。",
      "services.title":"鉴定项目",
      "svc.01.title":"细致鉴定","svc.01.desc":"用心倾听每一位来客，仔细解读手相上的每一条纹路。",
      "svc.02.title":"恋爱・婚姻","svc.02.desc":"从手相中解读缘分、结婚时机等恋爱的未来。",
      "svc.03.title":"事业・财运","svc.03.desc":"鉴定您的天职、转机与财运走势。",
      "svc.04.title":"人际关系","svc.04.desc":"解读家人、朋友、职场等与您相关的人际缘分。",
      "svc.05.title":"疗愈空间","svc.05.desc":"在南湖公园自然环抱的空间中，沉淀身心。",
      "svc.06.title":"手掌照片鉴定","svc.06.desc":"只需寄出照片，远方的您也能轻松咨询。",
      "price.title":"鉴定费","price.note":"含税","price.from":"起",
      "access.title":"交通",
      "access.shop":"店名","access.shop.value":"世界王 手相鉴定所<br>愿灯（NEGAIBI）",
      "access.addr":"地址","access.addr.value":"〒961-0815<br>福岛县白河市五郎洼38-1<br>南湖神社事务所旁",
      "access.hours":"营业时间","access.hours.value":"10:30开始（预约优先）",
      "access.closed":"公休日","access.closed.value":"每周三",
      "cta.title":"手掌照片鉴定<br>免费体验 开放预约",
      "cta.note":"欢迎通过私信与我们联系",
      "flyer.title":"宣传单","flyer.download":"下载",
      "wk.label":"WORLD KING PROJECT","wk.title":"世界王企划",
      "wk.desc":"每个人都能成为自己世界的王。融合AI鉴定、故事与工具的综合平台。",
      "footer.logo":"愿灯 NEGAIBI","footer.copy":"&copy; 2025 世界王 手相鉴定所",
      "meta.title":"世界王 手相鉴定所 愿灯（NEGAIBI）| 白河市南湖公园",
      "meta.desc":"在福岛县白河市南湖公园自然环抱的疗愈空间中享受手相鉴定。AI与传统的融合。鉴定费500日元起。",
      "common.back":"← 回到首页",
      "common.ja_only":"※ 本页详细内容目前仅提供日文版本。",
      "ov.title":"事业概要","ov.h1":"事业概要",
      "fc.title":"加盟招募","fc.h1":"FC加盟店 招募",
      "shop.h1":"在和风宁静中，阅读您的未来。",
      "shop.sub":"— 伫立于南湖公园的手相鉴定所 —",
      "shop.sec1.title":"鉴定室","shop.sec2.title":"等候区",
      "shop.sec3.title":"护身符・伴手礼","shop.sec4.title":"愿灯之光",
      "shop.access.title":"交通",
      "shop.cta.title":"期待与您相见的日子。",
      "shop.cta.map":"查看地图",
      "nav.shop":"🏪 店舗导览",
    },

    ko: {
      "lang.name":"한국어",
      "nav.overview":"소개","nav.services":"메뉴","nav.price":"요금",
      "nav.access":"오시는 길","nav.contact":"문의","nav.flyer":"전단지","nav.fc":"가맹점 모집",
      "nav.teller":"🔮 점술가 모집",
      "logo.main":"세계왕 손금감정원","logo.sub":"네가이비 NEGAIBI",
      "hero.label":"PALM READING × AI",
      "hero.title":"세계왕",
      "hero.ruby":"─ 손금감정원 네가이비 ─",
      "hero.catch":"당신의 손바닥에,<br>미래를 비추는 빛이 있습니다.",
      "hero.sub":"전통의 지혜와 최첨단 기술의 융합<br>당신의 가능성을 더 깊고 정확하게 읽어드립니다.",
      "hero.cta.line":"LINE으로 예약",
      "hero.cta.trial":"무료 체험하기","hero.cta.free":"무료",
      "hero.teller_recruit":"🔮 점술가 모집 중（지원하기）",
      "msg.line1":"손금은, 인생의 지도.",
      "msg.line2":"당신의 손바닥에는,<br>지금까지의 걸음과 앞으로의 가능성이<br>모두 새겨져 있습니다.",
      "msg.line3":"미래는, 바꿀 수 있습니다.",
      "services.title":"감정 메뉴",
      "svc.01.title":"정성스러운 감정","svc.01.desc":"한 분 한 분 곁에서, 손금의 선 하나하나를 정성껏 읽어드립니다.",
      "svc.02.title":"연애・결혼","svc.02.desc":"궁합과 결혼 시기 등, 사랑의 미래를 손금에서 풀어냅니다.",
      "svc.03.title":"일・금전운","svc.03.desc":"적성, 전환점, 재운의 흐름 등 일과 재운을 감정합니다.",
      "svc.04.title":"인간관계","svc.04.desc":"가족・친구・직장 등 사람과의 관계성을 읽어드립니다.",
      "svc.05.title":"치유의 공간","svc.05.desc":"난코공원의 자연에 둘러싸인 공간에서 마음을 리셋할 수 있습니다.",
      "svc.06.title":"손바닥 사진 감정","svc.06.desc":"사진만 보내주시면 OK. 멀리 계신 분도 편하게 상담하실 수 있습니다.",
      "price.title":"감정료","price.note":"세금 포함","price.from":"부터",
      "access.title":"오시는 길",
      "access.shop":"상호","access.shop.value":"세계왕 손금감정원<br>네가이비 (NEGAIBI)",
      "access.addr":"주소","access.addr.value":"〒961-0815<br>후쿠시마현 시라카와시 고로쿠보 38-1<br>난코신사 사무소 옆",
      "access.hours":"영업시간","access.hours.value":"10:30~（예약 우선）",
      "access.closed":"정기휴일","access.closed.value":"수요일",
      "cta.title":"손바닥 사진 감정<br>무료 체험 접수 중",
      "cta.note":"DM으로 부담 없이 문의해 주세요",
      "flyer.title":"전단지","flyer.download":"다운로드",
      "wk.label":"WORLD KING PROJECT","wk.title":"세계왕 프로젝트",
      "wk.desc":"누구나 자신만의 세계의 왕이 될 수 있다. AI진단・스토리・도구가 융합된 플랫폼.",
      "footer.logo":"네가이비 NEGAIBI","footer.copy":"&copy; 2025 세계왕 손금감정원",
      "meta.title":"세계왕 손금감정원 네가이비 | 시라카와시 난코공원",
      "meta.desc":"후쿠시마현 시라카와시 난코공원의 자연에 둘러싸인 치유의 공간에서 손금감정. AI×전통의 융합. 감정료 500엔부터.",
      "common.back":"← 메인으로",
      "common.ja_only":"※ 이 페이지의 자세한 내용은 일본어로만 제공됩니다.",
      "ov.title":"사업 개요","ov.h1":"사업 개요",
      "fc.title":"가맹점 모집","fc.h1":"FC 가맹점 모집",
      "shop.h1":"고요한 일본의 정취 속에서, 미래를 읽다.",
      "shop.sub":"— 난코공원 옆에 자리한 손금감정원 —",
      "shop.sec1.title":"감정실","shop.sec2.title":"대기 공간",
      "shop.sec3.title":"부적・기념품","shop.sec4.title":"네가이비의 등불",
      "shop.access.title":"오시는 길",
      "shop.cta.title":"뵙는 날을 기다리고 있습니다.",
      "shop.cta.map":"지도 보기",
      "nav.shop":"🏪 매장 안내",
    },
  };

  const LANG_LIST = ["ja","en","zh-TW","zh-CN","ko"];
  const STORAGE_KEY = "negaibi_lang";

  function detectLang(){
    // 1. URLパラメータ ?lang=xx を最優先
    try {
      const p = new URLSearchParams(location.search).get("lang");
      if (p && I18N[p]) return p;
      // zh-tw 表記揺れ吸収
      if (p){
        const lower = p.toLowerCase();
        if (lower === "zh-tw" || lower === "zh_tw" || lower === "zh-hant") return "zh-TW";
        if (lower === "zh-cn" || lower === "zh_cn" || lower === "zh-hans") return "zh-CN";
      }
    } catch(e){}
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved && I18N[saved]) return saved;
    const nav = (navigator.language || navigator.userLanguage || "ja").toLowerCase();
    if (nav.startsWith("zh-tw") || nav.startsWith("zh-hant")) return "zh-TW";
    if (nav.startsWith("zh"))    return "zh-CN";
    if (nav.startsWith("ko"))    return "ko";
    if (nav.startsWith("en"))    return "en";
    return "ja";
  }

  function applyLang(lang){
    if (!I18N[lang]) lang = "ja";
    const dict = I18N[lang];
    document.documentElement.setAttribute("lang", lang);
    document.body && document.body.setAttribute("data-lang", lang);

    // 通常テキスト・innerHTML
    document.querySelectorAll("[data-i18n]").forEach(el=>{
      const key = el.getAttribute("data-i18n");
      const val = dict[key];
      if (val != null) el.innerHTML = val;
    });
    // 属性差し替え
    document.querySelectorAll("[data-i18n-attr]").forEach(el=>{
      const cfg = el.getAttribute("data-i18n-attr"); // 例: "title:meta.title;alt:hero.title"
      if (!cfg) return;
      cfg.split(";").forEach(pair=>{
        const [attr,key] = pair.split(":").map(s=>s.trim());
        const val = dict[key];
        if (attr && key && val != null) el.setAttribute(attr, val.replace(/<br\s*\/?>/gi,' ').replace(/<[^>]+>/g,''));
      });
    });
    // <title> と meta description
    const tt = dict["meta.title"];
    if (tt) document.title = tt.replace(/<[^>]+>/g,"");
    const md = dict["meta.desc"];
    if (md){
      let mt = document.querySelector('meta[name="description"]');
      if (mt) mt.setAttribute("content", md.replace(/<[^>]+>/g," "));
    }
    // ボタンUI更新
    document.querySelectorAll(".i18n-switch [data-lang-btn]").forEach(b=>{
      b.classList.toggle("active", b.getAttribute("data-lang-btn") === lang);
    });
    localStorage.setItem(STORAGE_KEY, lang);
  }

  function buildSwitcher(){
    if (document.querySelector(".i18n-switch")) return;
    const labels = {ja:"日本語",en:"EN","zh-TW":"繁中","zh-CN":"简中",ko:"한국어"};
    const div = document.createElement("div");
    div.className = "i18n-switch";
    div.innerHTML = LANG_LIST.map(l=>`<button type="button" data-lang-btn="${l}">${labels[l]}</button>`).join("");
    div.addEventListener("click", e=>{
      const b = e.target.closest("[data-lang-btn]");
      if (!b) return;
      applyLang(b.getAttribute("data-lang-btn"));
    });
    document.body.appendChild(div);
  }

  function init(){
    buildSwitcher();
    applyLang(detectLang());
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }

  // グローバルへ公開
  window.NegaibiI18N = { apply: applyLang, dict: I18N };
})();

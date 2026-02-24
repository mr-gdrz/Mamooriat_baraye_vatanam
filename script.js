const DONORBOX_CAMPAIGN_URL = "https://donorbox.org/your-campaign-slug";
const DONORBOX_PLACEHOLDER = "your-campaign-slug";
const LANGUAGE_STORAGE_KEY = "mbv_site_language";
const DEFAULT_LANGUAGE = "en";
const SUPPORTED_LANGUAGES = ["fa", "en"];

const translations = {
  en: {
    pageTitle: "Mamooriat Baraye Vatanam",
    metaDescription:
      "Mamooriat Baraye Vatanam - a community-led movement page with volunteer actions, outreach, and Donorbox support.",
    skipToContent: "Skip to content",
    gateTitle: "Choose your language",
    gateSubtitle: "Select one to continue",
    gateFarsi: "Farsi",
    gateEnglish: "English",
    brandAria: "Mamooriat Baraye Vatanam Home",
    brandText: "Mamooriat Baraye Vatanam",
    menuOpenAria: "Open navigation",
    navAria: "Primary navigation",
    languageSwitchAria: "Language switch",
    navMission: "Mission",
    navGetInvolved: "Get Involved",
    navDonate: "Donate",
    navX: "X",
    navInstagram: "Instagram",
    heroEyebrow: "Grassroots | Unity | Action",
    heroTitle: "Together for a Free Iran",
    heroLead:
      "A community-led voice for dignity, freedom, and democratic transition. We organize, mobilize, and speak with one message: Iran belongs to its people.",
    heroGetInvolved: "Get Involved",
    heroDonate: "Donate with Donorbox",
    panelPurposeTitle: "Purpose",
    panelPurposeText:
      "Build visible, peaceful, and organized support for democratic change.",
    panelApproachTitle: "Approach",
    panelApproachText:
      "Community events, digital outreach, volunteer coordination, and transparent funding.",
    missionEyebrow: "Our Mission",
    missionTitle: "Supporting freedom through organized civic action",
    missionText:
      "We connect diaspora communities and allies to amplify awareness, coordinate peaceful events, and sustain momentum through practical local work.",
    statCommunityTitle: "Community-Led",
    statCommunityText:
      "Built by volunteers and supporters working side by side.",
    statTransparentTitle: "Transparent",
    statTransparentText:
      "Donations are focused on logistics, coordination, and event delivery.",
    statConsistentTitle: "Consistent",
    statConsistentText: "Ongoing outreach keeps the message visible and active.",
    pillarUnityTitle: "National Unity",
    pillarUnityText:
      "Stand for a free, sovereign, and united Iran built on mutual respect.",
    pillarRightsTitle: "Democratic Rights",
    pillarRightsText:
      "Defend civil liberties, equality under law, and freedom of expression.",
    pillarTransitionTitle: "Democratic Transition",
    pillarTransitionText:
      "Promote peaceful, accountable, and representative governance.",
    actionEyebrow: "Get Involved",
    actionTitle: "Your participation turns support into momentum",
    actionSupportTitle: "Support",
    actionSupportText:
      "Help fund permits, audio setup, safety logistics, and coordination work.",
    actionVolunteerTitle: "Volunteer",
    actionVolunteerText:
      "Contribute on event days or behind the scenes with planning and outreach.",
    actionShareTitle: "Share",
    actionShareText:
      "Use your social channels to spread updates and invite others to join.",
    donateEyebrow: "Power the Movement",
    donateTitle: "Contribute Through Donorbox",
    donateText:
      "Every contribution helps cover essential operations for rallies and community organizing: permits, venue needs, volunteer coordination, and public outreach.",
    donateNow: "Donate Now",
    donateOpenPage: "Open Donorbox Page",
    donateNotePrefix: "Set your campaign URL in",
    donateNoteMiddle: "by replacing:",
    footerBrand: "Mamooriat Baraye Vatanam",
    footerX: "X Account",
    footerInstagram: "Instagram"
  },
  fa: {
    pageTitle: "ماموریت برای وطنم",
    metaDescription:
      "ماموریت برای وطنم؛ صفحه‌ای مردمی برای کنش مدنی، اطلاع‌رسانی و حمایت مالی از طریق Donorbox.",
    skipToContent: "رفتن به محتوا",
    gateTitle: "زبان را انتخاب کنید",
    gateSubtitle: "برای ادامه یکی را انتخاب کنید",
    gateFarsi: "فارسی",
    gateEnglish: "English",
    brandAria: "صفحه اصلی ماموریت برای وطنم",
    brandText: "ماموریت برای وطنم",
    menuOpenAria: "باز کردن منوی ناوبری",
    navAria: "منوی اصلی",
    languageSwitchAria: "تغییر زبان",
    navMission: "ماموریت",
    navGetInvolved: "همراهی",
    navDonate: "حمایت مالی",
    navX: "ایکس",
    navInstagram: "اینستاگرام",
    heroEyebrow: "مردمی | همبستگی | اقدام",
    heroTitle: "با هم برای ایرانی آزاد",
    heroLead:
      "ما صدایی مردمی برای کرامت، آزادی و گذار دموکراتیک هستیم. هدف ما سازماندهی، بسیج و رساندن یک پیام روشن است: ایران متعلق به مردم ایران است.",
    heroGetInvolved: "همراه شوید",
    heroDonate: "حمایت مالی با Donorbox",
    panelPurposeTitle: "هدف",
    panelPurposeText:
      "ساختن حمایت گسترده، منظم و مسالمت‌آمیز برای تغییر دموکراتیک.",
    panelApproachTitle: "رویکرد",
    panelApproachText:
      "رویدادهای اجتماعی، فعالیت دیجیتال، هماهنگی داوطلبان و تامین مالی شفاف.",
    missionEyebrow: "ماموریت ما",
    missionTitle: "پشتیبانی از آزادی با کنش مدنی سازمان‌یافته",
    missionText:
      "ما جامعه ایرانیان خارج از کشور و حامیان را به هم متصل می‌کنیم تا آگاهی عمومی را افزایش دهیم، برنامه‌های مسالمت‌آمیز را هماهنگ کنیم و حرکت را پایدار نگه داریم.",
    statCommunityTitle: "مردم‌محور",
    statCommunityText: "این حرکت با همکاری داوطلبان و حامیان پیش می‌رود.",
    statTransparentTitle: "شفاف",
    statTransparentText:
      "کمک‌های مالی صرف اجرا، هماهنگی و نیازهای عملیاتی می‌شود.",
    statConsistentTitle: "پیوسته",
    statConsistentText:
      "اطلاع‌رسانی مستمر پیام را زنده و دیده‌شده نگه می‌دارد.",
    pillarUnityTitle: "وحدت ملی",
    pillarUnityText:
      "برای ایرانی آزاد، مستقل و یکپارچه بر پایه احترام متقابل می‌ایستیم.",
    pillarRightsTitle: "حقوق دموکراتیک",
    pillarRightsText:
      "از آزادی‌های مدنی، برابری در برابر قانون و آزادی بیان دفاع می‌کنیم.",
    pillarTransitionTitle: "گذار دموکراتیک",
    pillarTransitionText:
      "گذار مسالمت‌آمیز، پاسخ‌گو و نماینده اراده مردم را ترویج می‌کنیم.",
    actionEyebrow: "همراهی کنید",
    actionTitle: "مشارکت شما حمایت را به حرکت تبدیل می‌کند",
    actionSupportTitle: "حمایت مالی",
    actionSupportText:
      "به تامین هزینه مجوزها، تجهیزات صوتی، ایمنی و هماهنگی کمک کنید.",
    actionVolunteerTitle: "داوطلبی",
    actionVolunteerText:
      "در روز برنامه‌ها یا در بخش برنامه‌ریزی و اطلاع‌رسانی همراه ما باشید.",
    actionShareTitle: "بازنشر",
    actionShareText:
      "با شبکه‌های اجتماعی خود پیام و اخبار را به افراد بیشتری برسانید.",
    donateEyebrow: "قدرت‌بخشی به حرکت",
    donateTitle: "کمک مالی از طریق Donorbox",
    donateText:
      "هر کمک شما هزینه‌های ضروری برنامه‌ها و سازماندهی جامعه را پوشش می‌دهد: مجوزها، نیازهای اجرایی، هماهنگی داوطلبان و اطلاع‌رسانی عمومی.",
    donateNow: "اکنون کمک کنید",
    donateOpenPage: "باز کردن صفحه Donorbox",
    donateNotePrefix: "لینک کمپین خود را در",
    donateNoteMiddle: "جایگزین کنید:",
    footerBrand: "ماموریت برای وطنم",
    footerX: "حساب ایکس",
    footerInstagram: "اینستاگرام"
  }
};

document.documentElement.classList.add("js");

function isSupportedLanguage(language) {
  return SUPPORTED_LANGUAGES.includes(language);
}

function getStoredLanguage() {
  try {
    const language = localStorage.getItem(LANGUAGE_STORAGE_KEY);
    if (!language || !isSupportedLanguage(language)) return null;
    return language;
  } catch (error) {
    return null;
  }
}

function setStoredLanguage(language) {
  try {
    localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
  } catch (error) {
    return;
  }
}

function updateLanguageButtons(language) {
  document.querySelectorAll("[data-set-lang]").forEach((button) => {
    const active = button.getAttribute("data-set-lang") === language;
    button.classList.toggle("active", active);
    button.setAttribute("aria-pressed", String(active));
  });
}

function applyTranslations(language) {
  const selected = isSupportedLanguage(language) ? language : DEFAULT_LANGUAGE;
  const messages = translations[selected];

  document.documentElement.lang = selected;
  document.documentElement.dir = selected === "fa" ? "rtl" : "ltr";
  document.body.classList.toggle("fa-lang", selected === "fa");

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.getAttribute("data-i18n");
    if (!key || !messages[key]) return;
    element.textContent = messages[key];
  });

  document.querySelectorAll("[data-i18n-attr]").forEach((element) => {
    const value = element.getAttribute("data-i18n-attr");
    if (!value) return;

    value.split(";").forEach((pair) => {
      const [attr, key] = pair.split(":").map((item) => item && item.trim());
      if (!attr || !key || !messages[key]) return;
      element.setAttribute(attr, messages[key]);
    });
  });

  document.title = messages.pageTitle;
  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription && messages.metaDescription) {
    metaDescription.setAttribute("content", messages.metaDescription);
  }

  updateLanguageButtons(selected);
}

function openLanguageGate() {
  const gate = document.getElementById("language-gate");
  if (!gate) return;
  gate.hidden = false;
  document.body.classList.add("gate-open");
}

function closeLanguageGate() {
  const gate = document.getElementById("language-gate");
  if (!gate) return;
  gate.hidden = true;
  document.body.classList.remove("gate-open");
}

function setupLanguageSelection() {
  const gateButtons = document.querySelectorAll("[data-lang-choice]");
  const switchButtons = document.querySelectorAll("[data-set-lang]");
  let language = getStoredLanguage();

  if (!language) {
    language = DEFAULT_LANGUAGE;
    openLanguageGate();
  } else {
    closeLanguageGate();
  }

  applyTranslations(language);

  gateButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const selected = button.getAttribute("data-lang-choice");
      if (!selected || !isSupportedLanguage(selected)) return;

      applyTranslations(selected);
      setStoredLanguage(selected);
      closeLanguageGate();
    });
  });

  switchButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const selected = button.getAttribute("data-set-lang");
      if (!selected || !isSupportedLanguage(selected)) return;

      applyTranslations(selected);
      setStoredLanguage(selected);
      closeLanguageGate();
    });
  });
}

function setupMobileMenu() {
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".primary-nav");

  if (!toggle || !nav) return;

  toggle.addEventListener("click", () => {
    const isOpen = nav.getAttribute("data-open") === "true";
    nav.setAttribute("data-open", String(!isOpen));
    toggle.setAttribute("aria-expanded", String(!isOpen));
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.removeAttribute("data-open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}

function setupDonorboxLinks() {
  const links = document.querySelectorAll(
    "#donate-hero-btn, #donate-main-btn, #donorbox-direct-link"
  );
  const configured = !DONORBOX_CAMPAIGN_URL.includes(DONORBOX_PLACEHOLDER);
  const campaignUrl = configured ? DONORBOX_CAMPAIGN_URL : "https://donorbox.org";

  links.forEach((link) => {
    link.setAttribute("href", campaignUrl);
    if (!configured) link.classList.remove("custom-dbox-popup");
  });
}

function setupRevealAnimation() {
  const items = Array.from(document.querySelectorAll(".reveal"));
  if (!items.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.18, rootMargin: "0px 0px -10% 0px" }
  );

  items.forEach((item, index) => {
    item.style.transitionDelay = `${Math.min(index * 45, 280)}ms`;
    observer.observe(item);
  });
}

setupLanguageSelection();
setupMobileMenu();
setupDonorboxLinks();
setupRevealAnimation();

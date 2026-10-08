
/* ---------- boot ---------- */
const CFG = window.SALSALA || {view: "<?= view ?>", key: "<?= key ?>", base: "<?= base ?>", user: "<?= user ?>"};
const VIEW_IN = CFG.view, KEY = CFG.key, BASE = CFG.base;
const NAMES = {nil: "ניל", shlomi: "שלומי", marco: "מרקו", dudi: "דודי"};
const DEFAULT_USER = {office: "nil", widget: "nil", strip: "nil", agent: "shlomi", marco: "marco", plan: "marco", week: "shlomi", ai: "marco"};
const LOGO = "data:image/png;base64,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";
const MARK = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"> <path d="M27 47 C27 17, 73 17, 73 47" stroke-width="3.6"/> <path d="M39 39.5 L46.5 46 L61.5 31" stroke-width="4.6"/> <rect x="16" y="46" width="68" height="8" rx="3.5" stroke-width="3.6"/> <path d="M21 54 L29 82 Q30.5 86.5 35 86.5 L65 86.5 Q69.5 86.5 71 82 L79 54" stroke-width="3.6"/> <path d="M23.8 64 L76.2 64 M26.6 74 L73.4 74" stroke-width="2.4"/> <path d="M36 55 L38 64 M50 55 L50 64 M64 55 L62 64 M43 64 L44 74 M57 64 L56 74 M37 74 L38.5 86 M50 74 L50 86 M63 74 L61.5 86" stroke-width="2.1"/> </svg> ';
const DEMO = !(window.google && google.script && google.script.run);
const VIEWS = ["widget","office","strip","marco","agent","plan","week","ai"];
let view = VIEWS.includes(VIEW_IN) ? VIEW_IN : (DEMO ? "plan" : "office");
let USER = NAMES[CFG.user] ? CFG.user : DEFAULT_USER[view];
const brand = () => `<div class="brand"><img src="${LOGO}" alt="MARCO KAIRI"><span class="brand-name">${MARK}סל</span></div>`;
const fromTag = t => t.by && t.by !== USER && NAMES[t.by] ? "מ" + NAMES[t.by] : "";
let S = {tasks:[], rec:[], cal:{today:[], tomorrow:[]}, today:""};
const ui = {openDone:null, confirmDel:null, busy:false, justDone:null, fresh:new Set(), known:null};
const forms = { a:{who:"office", due:""}, w:{who:"office", due:""}, o:{who:"office", due:""}, m:{who:"office", due:"", rep:"once", wday:"0"} };
const $ = s => document.querySelector(s);
const esc = s => String(s == null ? "" : s).replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const DAYS = ["ראשון","שני","שלישי","רביעי","חמישי","שישי","שבת"];

/* ---------- dates ---------- */
const TZ = "Asia/Jerusalem";
const jlm = d => new Date(d).toLocaleDateString("en-CA", {timeZone: TZ});
const today = () => S.today || jlm(Date.now());
const addDays = (iso, n) => { const d = new Date(iso + "T12:00:00Z"); d.setUTCDate(d.getUTCDate() + n); return d.toISOString().slice(0, 10); };
const diff = (a, b) => Math.round((Date.parse(b) - Date.parse(a)) / 864e5);
const nowHour = () => Number(new Date().toLocaleString("en-GB", {timeZone: TZ, hour: "2-digit", hour12: false}));
const age = t => Math.max(0, diff(jlm(t.created), today()));
function nextThursday(){ const d = new Date(today() + "T12:00:00Z"); return addDays(today(), (4 - d.getUTCDay() + 7) % 7); }
function shortDate(iso){ const [, m, d] = iso.split("-"); return Number(d) + "." + Number(m); }
function dueLabel(due){
  if (!due) return "";
  const d = diff(today(), due);
  if (d < 0) return "היה ליום " + shortDate(due);
  if (d === 0) return "היום";
  if (d === 1) return "מחר";
  return "יום " + DAYS[new Date(due + "T12:00:00Z").getUTCDay()] + ", " + shortDate(due);
}
function ageText(n){ return n === 0 ? "נוספה היום" : n === 1 ? "נוספה אתמול" : "מחכה " + n + " ימים"; }
function freqText(r){
  if (r.freq === "daily") return "כל יום, ראשון עד חמישי";
  if (r.freq === "weekly") return "כל יום " + DAYS[r.day];
  return "בכל " + r.day + " לחודש";
}

/* ---------- task state ---------- */
function st(t){
  if (t.done) return "done";
  if (t.due && diff(today(), t.due) < 0) return "late";
  if (age(t) >= 3) return "stuck";
  if (t.due === today()) return "today";
  return "open";
}
function rank(t){ const s = st(t); return s === "late" ? 0 : s === "stuck" ? 1 : s === "today" ? 2 : t.due === addDays(today(), 1) ? 3 : 4; }
const byPriority = (a, b) => rank(a) - rank(b) || (a.due || "9").localeCompare(b.due || "9") || age(b) - age(a);
const openOf = who => S.tasks.filter(t => t.who === who && !t.done).sort(byPriority);
const doneOf = (who, days) => S.tasks.filter(t => t.who === who && t.done && t.doneAt && diff(jlm(t.doneAt), today()) <= days)
  .sort((a, b) => (b.doneAt || "").localeCompare(a.doneAt || ""));
const urgent = list => list.filter(t => ["late","stuck"].includes(st(t)));

/* ---------- api ---------- */
function api(fn, ...args){
  if (DEMO) return Promise.resolve(demoApi(fn, args));
  return new Promise((res, rej) => google.script.run.withSuccessHandler(res).withFailureHandler(rej)[fn](KEY, ...args));
}
function toast(msg, err){
  const el = $("#toast"); el.textContent = msg; el.className = "toast" + (err ? " err" : ""); el.hidden = false;
  clearTimeout(toast.h); toast.h = setTimeout(() => el.hidden = true, err ? 5000 : 2200);
}
async function run(fn, args, okMsg){
  if (ui.busy) return false;
  ui.busy = true;
  try { S = await api(fn, ...args); ui.busy = false; refresh(true); if (okMsg) toast(okMsg); return true; }
  catch (e) { ui.busy = false; toast((e && e.message) || "משהו השתבש. נסו שוב", true); return false; }
}
async function load(){
  if (ui.busy) return;
  try { S = await api("api_load"); notice(); refresh(false); }
  catch (e) { toast("אין חיבור ללוח. מנסה שוב בעוד דקה", true); }
}

/* a task that arrived while the page was open gets a short highlight and a toast */
function notice(){
  const mine = view === "agent" ? "agent" : view === "marco" ? null : "office";
  const ids = new Set(S.tasks.map(t => t.id));
  if (ui.known && mine){
    const fresh = S.tasks.filter(t => t.who === mine && !t.done && !ui.known.has(t.id));
    fresh.forEach(t => ui.fresh.add(t.id));
    if (fresh.length) toast(fresh.length === 1 ? "משימה חדשה: " + fresh[0].title : fresh.length + " משימות חדשות");
  }
  ui.known = ids;
}

/* ---------- shared pieces ---------- */
function chipGroup(form, name, opts){
  const cur = forms[form][name];
  return `<div class="chips">${opts.map(([v, l]) =>
    `<button type="button" class="chip" data-chip="${form}|${name}|${v}" aria-pressed="${cur === v}">${l}</button>`).join("")}</div>`;
}
function dueGroup(form){
  return `<div class="opt-row">${chipGroup(form, "due", [["", "בלי יעד"], ["today", "היום"], ["tomorrow", "מחר"], ["thu", "עד חמישי"]])}
    <input type="date" class="date-in" id="${form}-date" aria-label="תאריך יעד אחר"></div>`;
}
function resolveDue(form){
  const v = forms[form].due, el = $("#" + form + "-date");
  if (el && el.value) return el.value;
  return v === "today" ? today() : v === "tomorrow" ? addDays(today(), 1) : v === "thu" ? nextThursday() : "";
}
function proofHtml(t){
  const lines = (t.proof || []).map(p => `<span>${esc(p[0])}: <b>${esc(p[1])}</b></span>`);
  if (t.note) lines.push(`<span>הערה: <b>${esc(t.note)}</b></span>`);
  return lines.length ? `<div class="proof">${lines.join("")}</div>` : "";
}
function doneForm(t){
  const f = t.fields || [];
  return `<div class="dform">
    ${f.map((name, i) => `<label><span class="lbl">${esc(name)}</span><input id="pf-${t.id}-${i}" data-proof="${t.id}" autocomplete="off"></label>`).join("")}
    <label><span class="lbl">הערה (לא חובה)</span><input id="pn-${t.id}" data-note="${t.id}" autocomplete="off"></label>
    <div class="row"><button class="btn pri" data-save="${t.id}" ${f.length ? "disabled" : ""}>סמני בוצע</button>
    <button class="btn ghost" data-cancel>ביטול</button>${f.length ? `<span class="small soft">ממלאים את כל השדות, ואז הכפתור נפתח</span>` : ""}</div></div>`;
}
function card(t){
  const s = st(t), tags = [];
  if (s === "late") tags.push(`<span class="tag late">באיחור, ${esc(dueLabel(t.due))}</span>`);
  if (s === "stuck") tags.push(`<span class="tag late">מחכה ${age(t)} ימים</span>`);
  if (s === "today") tags.push(`<span class="tag today">להיום</span>`);
  if (t.done) tags.push(`<span class="tag ok">בוצע</span>`);
  else {
    if (t.due && s !== "late" && s !== "today") tags.push(`<span class="tag">${esc(dueLabel(t.due))}</span>`);
    if (s !== "stuck" && !t.rec) tags.push(`<span class="tag">${ageText(age(t))}</span>`);
    if (t.fields && t.fields.length) tags.push(`<span class="tag f">${t.fields.length === 1 ? "שדה אחד" : t.fields.length + " שדות"} למילוי</span>`);
  }
  if (t.rec) tags.push(`<span class="tag rec">קבועה</span>`);
  if (fromTag(t)) tags.push(`<span class="tag">${fromTag(t)}</span>`);
  let side = "";
  if (t.done) side = `<div class="side-btn"><button class="btn ghost small" data-reopen="${t.id}">החזרה</button></div>`;
  else if (ui.openDone !== t.id) side = `<button class="done-btn" data-open="${t.id}">✓ בוצע</button>`;
  return `<article class="sw card st-${s}${ui.justDone === t.id ? " just-done" : ""}${ui.fresh.has(t.id) ? " fresh" : ""}"><div class="c-title">${esc(t.title)}</div>${side}
    <div class="c-meta">${tags.join("")}</div>${t.done ? proofHtml(t) : ""}${ui.openDone === t.id ? doneForm(t) : ""}</article>`;
}
function group(title, list, emptyMsg){
  if (!list.length && !emptyMsg) return "";
  return `<section class="group"><div class="group-h"><h2>${title}</h2><span class="n">${list.length}</span></div>
    ${list.length ? list.map(card).join("") : `<p class="empty">${emptyMsg}</p>`}</section>`;
}
function calRows(list, isToday){
  if (!list.length) return `<p class="empty">אין אירועים</p>`;
  const now = Date.now(); let nextSet = false;
  return list.map(e => {
    const past = isToday && !e.allDay && e.endMs < now;
    let next = false; if (isToday && !past && !e.allDay && !nextSet) { next = true; nextSet = true; }
    return `<div class="ev ${past ? "past" : ""} ${next ? "next" : ""}"><span class="tm">${e.allDay ? "כל היום" : esc(e.start)}</span>
      <span><span class="nm">${esc(e.title)}</span>${e.loc ? `<div class="loc">${esc(e.loc)}</div>` : ""}</span></div>`;
  }).join("");
}
function calPanel(){
  if (S.cal.error) return `<p class="empty">${esc(S.cal.error)}</p>`;
  const t = `<div class="cal-day">היום</div>${calRows(S.cal.today, true)}`;
  const m = `<div class="cal-day">מחר</div>${calRows(S.cal.tomorrow, false)}`;
  return nowHour() >= 15 ? m + t : t + m;
}
const dateLine = () => new Date().toLocaleDateString("he-IL", {weekday: "long", day: "numeric", month: "long", timeZone: TZ});

/* ---------- shells (built once per view) ---------- */
function shell(){
  document.body.classList.toggle("full-strip", view === "strip" && !DEMO);
  const bar = DEMO ? `<nav class="demo" aria-label="תצוגה">תצוגה מקדימה עם נתוני דוגמה:
    ${[["plan","תכנון השבוע של שלומי"],["week","השבוע של שלומי (בטלפון שלו)"],["ai","הסוכן"],["widget","הווידג'ט של ניל"],["office","הלוח המלא של ניל"],["marco","הטלפון שלך"],["agent","משימות שלומי"]]
      .map(([v, l]) => `<button type="button" data-view="${v}" aria-pressed="${view === v}">${l}</button>`).join("")}</nav>` : "";
  let body = "";
  if (view === "office") body = `<div class="office">
    ${brand()}
    <header class="o-head"><div><h1>המשימות שלי</h1><div class="o-date" id="o-date"></div></div><div class="counts" id="o-counts"></div></header>
    <form class="quick" id="o-form" autocomplete="off">
      <input id="o-title" placeholder="משימה חדשה, למשל מהמחברת" maxlength="300">
      <button class="btn pri" type="submit">הוספה</button>
      <div class="opt-row"><span class="lbl">למי</span>${chipGroup("o", "who", [["office","לי"],["agent","לשלומי"]])}
        <span class="lbl">יעד</span>${dueGroup("o")}</div>
    </form>
    <div class="o-grid"><main id="o-list" class="group"></main>
      <aside class="o-side">
        <section class="panel"><h2>ביומן</h2><div id="o-cal"></div></section>
        <section class="panel"><h2>אצל שלומי</h2><div id="o-agent"></div></section>
      </aside></div></div>`;
  if (view === "strip") body = DEMO
    ? `<div class="demo-strip"><div class="monitor"><div class="strip" id="strip"></div></div>
       <p class="small soft">המסך הארוך (1280×400). בגרסה המותקנת הוא ממלא את כל המסך הקטן ומתעדכן לבד כל דקה.</p></div>`
    : `<div class="strip" id="strip"></div>`;
  if (view === "marco") body = `<div class="m">
    ${brand()}
    <header><h1>שלום ${NAMES[USER]}</h1><div class="counts" id="m-counts"></div></header>
    <form class="panel m-form" id="m-form" autocomplete="off">
      <h2>משימה חדשה</h2>
      <div class="opt-row"><span class="lbl">למי</span>${chipGroup("m", "who", [["office","ניל"],["agent","שלומי"]])}</div>
      <textarea id="m-title" rows="2" placeholder="מה צריך לעשות?" maxlength="300"></textarea>
      <div id="m-fields" class="m-form"></div>
      <button type="button" class="addf" id="m-addf">+ שדה למילוי</button>
      <span class="lbl">חוזרת?</span>
      ${chipGroup("m", "rep", [["once","פעם אחת"],["daily","כל יום"],["weekly","כל שבוע"],["monthly","כל חודש"]])}
      <div id="m-wday" hidden>${chipGroup("m", "wday", DAYS.slice(0, 6).map((d, i) => [String(i), d]))}</div>
      <div id="m-mday" class="opt-row" hidden><span class="lbl">ביום</span><input type="number" min="1" max="31" value="1" class="num-in" id="m-mday-in" aria-label="יום בחודש"><span class="lbl">בחודש</span></div>
      <div id="m-due"><span class="lbl">יעד</span>${dueGroup("m")}</div>
      <button class="btn pri" type="submit" id="m-submit">שליחה</button>
    </form>
    <section class="group"><div class="group-h"><h2>אצל ניל</h2></div><div id="m-office" class="group"></div></section>
    <section class="group"><div class="group-h"><h2>אצל שלומי</h2></div><div id="m-agent" class="group"></div></section>
    <section class="group"><div class="group-h"><h2>משימות קבועות</h2></div><div id="m-rec" class="group"></div></section></div>`;
  if (view === "agent") body = `<div class="ag">
    ${brand()}
    <header class="o-head"><div><h1>שלום ${NAMES[USER]}</h1><div class="o-date" id="a-date"></div></div><div class="counts" id="a-counts"></div></header>
    <form class="a-add" id="a-form" autocomplete="off"><span class="lbl">משימה לניל</span>
      <input id="a-title" placeholder="למשל: להוציא חשבונית ללקוח" maxlength="300" aria-label="משימה לניל"><button class="btn pri" type="submit">שליחה</button></form>
    <main id="a-list" class="group"></main></div>`;
  if (view === "plan") body = `<div class="pl" id="pl"></div>`;
  if (view === "ai") body = `<div class="ai" id="ai"></div>`;
  if (view === "week") body = `<div class="wk" id="wk"></div>`;
  if (view === "widget"){
    const inner = `<div class="wg">
      ${brand()}
      <header class="wg-head"><div><h1>היום שלי</h1><div class="wg-date" id="w-date"></div></div><div class="counts" id="w-counts"></div></header>
      <form class="wg-add" id="w-form" autocomplete="off"><input id="w-title" placeholder="משימה חדשה" maxlength="300" aria-label="משימה חדשה"><button class="btn pri" type="submit">הוספה</button></form>
      <div id="w-list" class="group"></div>
      <section class="panel"><h2>ביומן</h2><div id="w-cal"></div></section>
      <div class="wg-foot" id="w-foot"></div></div>`;
    body = DEMO ? `<div class="demo-wg"><div class="wg-frame"><div class="bar"><span>סל</span><span>— ▢ ✕</span></div>${inner}</div>
      <p class="small soft">חלון צר שעומד בצד המסך שלה, תמיד מעל שאר החלונות, ומתעדכן לבד כל 30 שניות.</p></div>` : inner;
  }
  const TABS = {
    shlomi: [["week", "השבוע שלי"], ["agent", "משימות", () => openOf("agent").length]],
    marco: [["marco", "משימות"], ["plan", "השבוע של שלומי"], ["ai", "הסוכן", () => AI.props.length]],
    dudi: [["marco", "משימות"], ["plan", "השבוע של שלומי"], ["ai", "הסוכן", () => AI.props.length]]
  }[USER];
  const showTabs = TABS && TABS.some(t => t[0] === view);
  document.body.classList.toggle("has-tabs", !!showTabs);
  const tabbar = showTabs ? `<nav class="tabbar" aria-label="מסכים"><div>${TABS.map(([v, l, n]) => { const c = n ? n() : 0;
    return `<button type="button" data-view="${v}" ${v === view ? 'aria-current="page"' : ""}>${l}${c ? `<span class="badge">${c}</span>` : ""}</button>`; }).join("")}</div></nav>` : "";
  $("#app").innerHTML = bar + body + tabbar;
  if (view === "marco") syncRepeat();
  refresh(true);
}

/* ---------- live regions ---------- */
function refresh(force){
  const keep = ui.openDone && !force;
  if (view === "office") renderOffice(keep);
  if (view === "strip") renderStrip();
  if (view === "marco") renderMarco();
  if (view === "agent") renderAgent(keep);
  if (view === "widget") renderWidget(keep);
  if (view === "plan" && force) renderPlan();
  if (view === "week" && force) renderWeek();
  if (view === "ai" && force) renderAI();
  ui.justDone = null;
  if (!keep) ui.fresh.clear();
}
function counts(items){ return items.map(([n, l, c]) => `<div class="count ${c || ""}"><b>${n}</b><span>${l}</span></div>`).join(""); }
function renderOffice(keep){
  const o = openOf("office"), att = urgent(o), td = o.filter(t => st(t) === "today"), rest = o.filter(t => st(t) === "open");
  $("#o-date").textContent = dateLine();
  $("#o-counts").innerHTML = counts([[o.length, "פתוחות"], [att.length, "דחופות", "urgent"], [doneOf("office", 0).length, "בוצעו היום", "done"]]);
  if (!keep) $("#o-list").innerHTML = group("דחוף", att) + group("להיום", td) +
    group("פתוחות", rest, o.length ? "" : "אין משימות פתוחות.") + group("בוצעו היום", doneOf("office", 0));
  $("#o-cal").innerHTML = calPanel();
  const ao = openOf("agent"), ad = doneOf("agent", 0);
  $("#o-agent").innerHTML = (ao.length || ad.length) ? ao.concat(ad).map(t =>
    `<div class="mini"><span>${esc(t.title)}</span><span class="tag ${t.done ? "ok" : urgent([t]).length ? "late" : ""}">${t.done ? "בוצע" : "פתוח"}</span></div>`).join("")
    : `<p class="empty">אין משימות פתוחות לשלומי. בוחרים "לשלומי" בשורת ההוספה כדי לשלוח לו.</p>`;
}
function renderWidget(keep){
  const o = openOf("office"), att = urgent(o), td = o.filter(t => st(t) === "today"), rest = o.filter(t => st(t) === "open");
  const dn = doneOf("office", 0);
  $("#w-date").textContent = dateLine();
  $("#w-counts").innerHTML = counts([[o.length, "פתוחות"], [att.length, "דחופות", "urgent"]]);
  if (!keep) $("#w-list").innerHTML = group("דחוף", att) + group("להיום", td) +
    group("פתוחות", rest, o.length ? "" : "אין משימות פתוחות.") +
    (dn.length ? `<p class="wg-done">✓ ${dn.length === 1 ? "משימה אחת בוצעה" : dn.length + " משימות בוצעו"} היום</p>` : "");
  $("#w-cal").innerHTML = calPanel();
  $("#w-foot").innerHTML = DEMO ? `<button type="button" data-view="office">פתיחת הלוח המלא</button>`
    : `<a target="_blank" href="${esc(BASE + "?v=office&k=" + encodeURIComponent(KEY))}">פתיחת הלוח המלא</a>`;
}
function renderStrip(){
  const el = $("#strip"); if (!el) return;
  const o = openOf("office"), att = urgent(o).length;
  const clock = new Date().toLocaleTimeString("he-IL", {hour: "2-digit", minute: "2-digit", timeZone: TZ});
  let cal;
  if (S.cal.error) cal = `<div class="s-h">יומן</div><div class="s-empty">${esc(S.cal.error)}</div>`;
  else if (nowHour() >= 15) {
    const left = S.cal.today.filter(e => !e.allDay && e.endMs > Date.now());
    cal = `<div class="s-h">מחר ביומן</div><div>${S.cal.tomorrow.slice(0, 5).map(e =>
      `<div class="s-ev"><span class="tm">${e.allDay ? "יום" : esc(e.start)}</span><span class="nm">${esc(e.title)}</span></div>`).join("") || `<div class="s-empty">מחר פנוי</div>`}
      ${left.length ? `<div class="s-sub">עוד היום: ${left.map(e => esc(e.start + " " + e.title)).join(", ")}</div>` : ""}</div>`;
  } else {
    const now = Date.now(); let nextSet = false;
    const rows = S.cal.today.map(e => { const past = !e.allDay && e.endMs < now; let nx = false;
      if (!past && !e.allDay && !nextSet) { nx = true; nextSet = true; } return {e, past, nx}; });
    const first = Math.max(0, rows.findIndex(r => !r.past) - 1);
    cal = `<div class="s-h">היום ביומן</div><div>${rows.slice(first, first + 5).map(r =>
      `<div class="s-ev ${r.past ? "past" : ""} ${r.nx ? "next" : ""}"><span class="tm">${r.e.allDay ? "יום" : esc(r.e.start)}</span><span class="nm">${esc(r.e.title)}</span></div>`).join("")
      || `<div class="s-empty">אין אירועים היום</div>`}</div>`;
  }
  const link = DEMO ? `<button type="button" class="s-link" data-view="office">לרשימה המלאה</button>`
    : `<a class="s-link" target="_blank" href="${esc(BASE + "?v=office&k=" + encodeURIComponent(KEY))}">לרשימה המלאה</a>`;
  el.innerHTML = `
    <div class="s-side"><div><div class="s-clock">${clock}</div><div class="s-date">${esc(dateLine())}</div></div>
      <div class="s-counts"><div class="s-count"><b>${o.length}</b><span>פתוחות</span></div><div class="s-count urgent"><b>${att}</b><span>דחופות</span></div></div></div>
    <div class="s-main"><div class="s-h">עכשיו על השולחן</div>
      <div class="s-list">${o.slice(0, 3).map(t => { const s = st(t);
        const tg = s === "late" ? "באיחור" : s === "stuck" ? "מחכה " + age(t) + " ימים" : s === "today" ? "היום" : t.due ? dueLabel(t.due) : ageText(age(t));
        return `<div class="sw s-task st-${s}"><span class="tt">${esc(t.title)}</span><span class="tg">${esc(tg)}</span></div>`; }).join("")
        || `<div class="s-empty">אין משימות פתוחות</div>`}</div>
      <div class="s-foot"><span>${o.length > 3 ? "ועוד " + (o.length - 3) + " משימות" : ""}</span>${link}</div></div>
    <div class="s-cal">${cal}</div>`;
}
function mItem(t){
  const s = st(t), meta = [];
  if (t.done) meta.push("בוצע " + (diff(jlm(t.doneAt), today()) === 0 ? "היום" : "ב-" + shortDate(jlm(t.doneAt))));
  else {
    if (s === "late") meta.push("באיחור, " + dueLabel(t.due));
    else if (t.due) meta.push(dueLabel(t.due));
    meta.push(ageText(age(t)));
    if (t.fields && t.fields.length) meta.push(t.fields.length + " שדות למילוי");
  }
  if (t.rec) meta.push("קבועה");
  if (fromTag(t)) meta.push(fromTag(t));
  const del = ui.confirmDel === t.id
    ? `<span class="m-acts"><button class="btn danger small" data-delok="${t.id}">למחוק</button><button class="link-btn" data-delno>ביטול</button></span>`
    : `<button class="link-btn" data-del="${t.id}">מחיקה</button>`;
  return `<div class="sw m-item st-${s}"><div class="m-top"><b>${esc(t.title)}</b>${del}</div>
    <span class="m-meta">${esc(meta.join(", "))}</span>${t.done ? proofHtml(t) : ""}</div>`;
}
function recItem(r){
  const key = "r:" + r.id;
  const acts = ui.confirmDel === key
    ? `<span class="m-acts"><button class="btn danger small" data-recdelok="${r.id}">למחוק</button><button class="link-btn" data-delno>ביטול</button></span>`
    : `<span class="m-acts"><button class="link-btn" data-rectoggle="${r.id}">${r.active ? "השהיה" : "הפעלה"}</button><button class="link-btn" data-recdel="${r.id}">מחיקה</button></span>`;
  return `<div class="sw m-item ${r.active ? "" : "st-paused"}" style="--thread:${r.active ? "var(--sky)" : "var(--seam)"}">
    <div class="m-top"><b>${esc(r.title)}</b>${acts}</div>
    <span class="m-meta">${esc(freqText(r))}, ${r.who === "agent" ? "לשלומי" : "לניל"}${r.fields.length ? ", " + r.fields.length + " שדות למילוי" : ""}${r.active ? "" : ", מושהית"}</span></div>`;
}
function renderMarco(){
  const o = openOf("office"), ao = openOf("agent");
  $("#m-counts").innerHTML = counts([[o.length, "אצל ניל"], [urgent(o).length, "תקועות", "urgent"], [ao.length, "אצל שלומי"]]);
  const list = who => { const op = openOf(who), dn = doneOf(who, 7);
    return (op.map(mItem).join("") || `<p class="empty">אין משימות פתוחות</p>`) +
      (dn.length ? `<div class="sub-h">בוצעו השבוע</div>` + dn.map(mItem).join("") : ""); };
  $("#m-office").innerHTML = list("office");
  $("#m-agent").innerHTML = list("agent");
  $("#m-rec").innerHTML = S.rec.length ? S.rec.map(recItem).join("")
    : `<p class="empty">עדיין אין. כותבים משימה למעלה ובוחרים "כל שבוע" או "כל חודש".</p>`;
}
function renderAgent(keep){
  const o = openOf("agent");
  $("#a-date").textContent = dateLine();
  $("#a-counts").innerHTML = counts([[o.length, "פתוחות"], [doneOf("agent", 0).length, "בוצעו היום", "done"]]);
  if (!keep) $("#a-list").innerHTML = group("לעשות", o, "אין משימות פתוחות.") + group("בוצעו היום", doneOf("agent", 0));
}
function syncRepeat(){
  const rep = forms.m.rep;
  $("#m-wday").hidden = rep !== "weekly";
  $("#m-mday").hidden = rep !== "monthly";
  $("#m-due").hidden = rep !== "once";
  $("#m-submit").textContent = rep === "once" ? "שליחה" : "שמירת משימה קבועה";
}

/* ---------- events ---------- */
document.addEventListener("click", async e => {
  const b = e.target.closest("button"); if (!b) return;
  const d = b.dataset;
  if (d.view){ const fromTab = !!b.closest(".tabbar"); view = d.view; if (DEMO && !fromTab) USER = DEFAULT_USER[view]; ui.openDone = null; shell(); return; }
  if (d.chip){ const [f, n, v] = d.chip.split("|"); forms[f][n] = v;
    b.parentElement.querySelectorAll(".chip").forEach(c => c.setAttribute("aria-pressed", c === b));
    if (n === "due" && $("#" + f + "-date")) $("#" + f + "-date").value = "";
    if (n === "rep") syncRepeat(); return; }
  if (d.open){ ui.openDone = d.open; refresh(true); const first = document.querySelector(`[data-proof="${d.open}"],[data-note="${d.open}"]`); if (first) first.focus(); return; }
  if (b.hasAttribute("data-cancel")){ ui.openDone = null; refresh(true); return; }
  if (d.save){
    const id = d.save, proof = [...document.querySelectorAll(`[data-proof="${id}"]`)].map(i => i.value.trim());
    const note = ($(`[data-note="${id}"]`) || {}).value || "";
    ui.openDone = null; ui.justDone = id;
    if (!(await run("api_done", [id, proof, note], "סומן כבוצע"))) ui.openDone = id;
    return;
  }
  if (d.reopen){ run("api_reopen", [d.reopen], "המשימה חזרה לרשימה"); return; }
  if (d.del){ ui.confirmDel = d.del; renderMarco(); return; }
  if (d.recdel){ ui.confirmDel = "r:" + d.recdel; renderMarco(); return; }
  if (b.hasAttribute("data-delno")){ ui.confirmDel = null; renderMarco(); return; }
  if (d.delok){ ui.confirmDel = null; run("api_delete", [d.delok], "נמחק"); return; }
  if (d.recdelok){ ui.confirmDel = null; run("api_rec_delete", [d.recdelok], "המשימה הקבועה נמחקה"); return; }
  if (d.rectoggle){ const r = S.rec.find(x => x.id === d.rectoggle); run("api_rec_toggle", [d.rectoggle], r && r.active ? "הושהתה" : "הופעלה"); return; }
  if (b.id === "m-addf"){
    const wrap = $("#m-fields"); if (wrap.children.length >= 8) return;
    const row = document.createElement("div"); row.className = "fld";
    row.innerHTML = `<input id="mf-${Date.now()}" placeholder="שם השדה, למשל: מחיר" maxlength="60"><button type="button" class="btn ghost" data-rmf aria-label="הסרת שדה">✕</button>`;
    wrap.appendChild(row); row.querySelector("input").focus(); return;
  }
  if (b.hasAttribute("data-rmf")){ b.parentElement.remove(); return; }
});
document.addEventListener("input", e => {
  const id = e.target.dataset.proof; if (!id) return;
  const all = [...document.querySelectorAll(`[data-proof="${id}"]`)].every(i => i.value.trim());
  const btn = document.querySelector(`[data-save="${id}"]`); if (btn) btn.disabled = !all;
});
document.addEventListener("submit", async e => {
  e.preventDefault();
  const f = e.target.id === "o-form" ? "o" : e.target.id === "m-form" ? "m" : e.target.id === "w-form" ? "w" : e.target.id === "a-form" ? "a" : null; if (!f) return;
  const titleEl = $("#" + f + "-title"), title = titleEl.value.trim();
  if (!title){ titleEl.focus(); toast("כתבו קודם מה המשימה", true); return; }
  const fields = f === "m" ? [...document.querySelectorAll("#m-fields input")].map(i => i.value.trim()).filter(Boolean) : [];
  const who = forms[f].who;
  let ok;
  if (f === "m" && forms.m.rep !== "once"){
    const day = forms.m.rep === "weekly" ? Number(forms.m.wday) : forms.m.rep === "monthly" ? Number($("#m-mday-in").value) : 0;
    ok = await run("api_rec_add", [{title, who, freq: forms.m.rep, day, fields, by: USER}], "נשמרה משימה קבועה");
  } else {
    ok = await run("api_add", [{title, who, due: resolveDue(f), fields, by: USER}],
      who === "agent" ? "נשלח לשלומי" : (f === "m" || f === "a") ? "נשלח לניל" : "נוספה");
  }
  if (ok){ titleEl.value = ""; if (f === "m") $("#m-fields").innerHTML = ""; const di = $("#" + f + "-date"); if (di) di.value = ""; }
});

/* ---------- demo data (preview only, never used by the installed board) ---------- */
let demo = null;
function demoInit(){
  const ago = n => new Date(Date.now() - n * 864e5).toISOString(), t0 = today(), at = (h, m) => { const d = new Date(); d.setHours(h, m, 0, 0); return d.getTime(); };
  demo = {today: t0,
    cal: {today: [
      {title: "משלוח מהמחסן מגיע לחנות", allDay: false, start: "09:30", endMs: at(10, 0), loc: "נחלת בנימין"},
      {title: "פגישה עם ספק שטיחים", allDay: false, start: "12:00", endMs: at(13, 0), loc: "משרד"},
      {title: "שיחה עם רואה החשבון", allDay: false, start: "14:30", endMs: at(15, 0), loc: ""},
      {title: "איסוף דוגמאות בדים", allDay: false, start: "16:30", endMs: at(17, 0), loc: "מחסן"}],
     tomorrow: [
      {title: "מדידות וילונות אצל לקוח", allDay: false, start: "09:00", endMs: 0, loc: "רמת גן"},
      {title: "צילום מוצרים חדשים לאתר", allDay: false, start: "11:00", endMs: 0, loc: "חנות"}]},
    rec: [
      {id: "r1", title: "סיכום מכירות וקנייה שבועי", who: "office", freq: "weekly", day: 4, fields: ["מכירות חנות (₪)", "מכירות אתר (₪)", "רכש השבוע (₪)"], active: true},
      {id: "r2", title: "מעבר על תקציבי המשלוחים", who: "office", freq: "monthly", day: 1, fields: ["סכום החודש (₪)", "סכום חודש קודם (₪)"], active: true},
      {id: "r3", title: "לבדוק הזמנות חדשות באתר", who: "office", freq: "daily", day: 0, fields: [], active: false}],
    tasks: [
      {id: "d1", created: ago(4), who: "office", title: "לבדוק מלאי כריות קטיפה במחסן", due: "", fields: [], done: false},
      {id: "d2", by: "marco", created: ago(2), who: "office", title: "להתקשר לספק הבדים לגבי האיחור במשלוח", due: addDays(t0, -1), fields: [], done: false},
      {id: "d3", by: "dudi", created: ago(0), who: "office", title: "לבדוק מחירי משלוח לאילת", due: t0, fields: ["חברה", "מחיר (₪)"], done: false},
      {id: "d9", created: ago(0), who: "office", title: "סיכום מכירות וקנייה שבועי", due: t0, fields: ["מכירות חנות (₪)", "מכירות אתר (₪)", "רכש השבוע (₪)"], done: false, rec: true},
      {id: "d4", by: "dudi", created: ago(1), who: "office", title: "לשלוח לשלומי מחירון מעודכן", due: addDays(t0, 1), fields: [], done: false},
      {id: "d5", created: ago(0), who: "office", title: "להזמין קרטונים לאריזה", due: "", fields: [], done: false},
      {id: "d10", by: "shlomi", created: ago(0), who: "office", title: "להוציא חשבונית לחנות בנס ציונה", due: t0, fields: [], done: false},
      {id: "d6", created: ago(1), who: "office", title: "לתאם איסוף מהמחסן לחנות", due: "", fields: [], done: true, doneAt: new Date().toISOString(), proof: [], note: "תואם לרביעי 10:00"},
      {id: "d7", by: "nil", created: ago(0), who: "agent", title: "לאסוף צ'ק מוכן מלקוח בסניף רחובות", due: t0, fields: [], done: false},
      {id: "d8", by: "marco", created: ago(1), who: "agent", title: "להשאיר קטלוג חדש בחנות בהרצליה", due: "", fields: ["מי קיבל"], done: false}]};
}
function demoApi(fn, a){
  if (!demo) demoInit();
  if (fn === "api_add") demo.tasks.push({id: "n" + Date.now(), created: new Date().toISOString(), who: a[0].who, by: a[0].by, title: a[0].title, due: a[0].due, fields: a[0].fields || [], done: false, proof: [], note: ""});
  if (fn === "api_rec_add"){
    if (a[0].freq === "monthly" && !(a[0].day >= 1 && a[0].day <= 31)) throw new Error("יום בחודש צריך להיות בין 1 ל-31");
    demo.rec.push({id: "r" + Date.now(), title: a[0].title, who: a[0].who, freq: a[0].freq, day: a[0].day, fields: a[0].fields || [], active: true});
  }
  const t = demo.tasks.find(x => x.id === a[0]), r = demo.rec.find(x => x.id === a[0]);
  if (fn === "api_done" && t){
    if (t.fields.length && t.fields.some((_, i) => !(a[1][i] || "").trim())) throw new Error("צריך למלא את כל השדות לפני שמסמנים בוצע");
    Object.assign(t, {done: true, doneAt: new Date().toISOString(), proof: t.fields.map((f, i) => [f, a[1][i]]), note: a[2]});
  }
  if (fn === "api_reopen" && t) Object.assign(t, {done: false, doneAt: "", proof: [], note: ""});
  if (fn === "api_delete") demo.tasks = demo.tasks.filter(x => x.id !== a[0]);
  if (fn === "api_rec_toggle" && r) r.active = !r.active;
  if (fn === "api_rec_delete") demo.rec = demo.rec.filter(x => x.id !== a[0]);
  return JSON.parse(JSON.stringify({tasks: demo.tasks, rec: demo.rec, cal: demo.cal, today: demo.today}));
}

/* ---------- Shlomi's week (preview with sample data; saving to the sheet comes with the build) ---------- */
const KINDS = {meet: "פגישה", collect: "גבייה", pickup: "איסוף", deliver: "מסירה"};
const AREAS = ["צפון", "חיפה והקריות", "שרון", "מרכז", "שפלה", "ירושלים", "דרום", "משרד"];
const DAY_NAMES = ["ראשון", "שני", "שלישי", "רביעי", "חמישי"];
const R = {day: 0, open: null, thread: null, kind: ["meet","meet","meet","meet","meet"], sum: {}, skind: "meet"};
let WEEK = null, sid = 100;
function weekInit(){
  const t = new Date(today() + "T12:00:00Z"), sun = addDays(today(), -t.getUTCDay());
  const st = (type, client, extra) => Object.assign({id: "s" + (sid++), type, client, note: "", debt: "", status: "planned", thread: []}, extra || {});
  WEEK = {start: sun, sent: false, days: [
    {area: "צפון", stops: [
      st("meet", "גלריה מקסיקנית", {note: "להציג את קולקציית החורף", status: "done", result: {text: "אהבו את השטיחים הקלועים, ביקשו דוגמאות של כריות", order: true, amount: "8,500"},
        thread: [{by: "marco", text: "תזכיר להם שהמשלוח הבא מגיע בנובמבר", at: "08:12"}, {by: "shlomi", text: "סגור, אמרתי להם", at: "11:40"}]}),
      st("meet", "ענן עיצוב", {status: "done", result: {text: "רוצים לחשוב, לחזור אליהם בעוד שבועיים", order: false}}),
      st("meet", "בית ונוף, כרמיאל", {debt: "חוב פתוח 12,400 ₪ · 75 יום"}),
      st("collect", "רהיטי הגליל", {note: "צ'ק על 6,800 ₪ מחכה אצל אורית"}),
      st("meet", "סטודיו זית, ראש פינה"),
      st("deliver", "אורנים", {note: "דוגמאות בדים שהבטחנו"})]},
    {area: "שפלה", stops: [st("meet", "פרחי הבית, רחובות"), st("collect", "לבן ועץ, נס ציונה", {note: "3,200 ₪"}), st("meet", "קאזה, גדרה"), st("meet", "נוי לבית, יבנה")]},
    {area: "משרד", stops: [st("pickup", "מחסן", {note: "לאסוף קטלוגים חדשים ודוגמאות"})]},
    {area: "שרון", stops: [st("meet", "מעצבת דנה ל., הרצליה"), st("meet", "בית קטן, רעננה", {debt: "חוב פתוח 4,100 ₪ · 62 יום"}), st("meet", "דקו פלוס, נתניה")]},
    {area: "", stops: []}],
    tray: [{id: "t1", type: "meet", client: "אוסף, כפר סבא", note: "לא הספיק בשבוע שעבר"}]};
  const d = t.getUTCDay(); R.day = d <= 4 ? d : 0;
}
const dayDate = i => shortDate(addDays(WEEK.start, i));
const stopCount = () => WEEK.days.reduce((n, d) => n + d.stops.length, 0);
function kindTag(k){ return `<span class="kind k-${k}">${KINDS[k]}</span>`; }
function resultLine(s){
  if (!s.result) return "";
  if (s.type === "collect") return s.result.got ? `נאסף ${esc(s.result.amount || "")} ₪` : "לא נאסף";
  return s.result.order ? `הזמנה ${esc(s.result.amount || "")} ₪` : "בלי הזמנה";
}

/* planning screen */
function renderPlan(){
  if (!WEEK) weekInit();
  const end = shortDate(addDays(WEEK.start, 4));
  let h = `${brand()}
    <header class="o-head"><div><h1>השבוע של שלומי</h1><div class="pl-sub">שבוע ${dayDate(0)} עד ${end}. בוחרים אזור לכל יום, מקלידים לקוחות, ושולחים לשלומי.</div></div>
      <div class="counts">${counts([[stopCount(), "תחנות"], [WEEK.days.reduce((n, d) => n + d.stops.filter(s => s.status === "done").length, 0), "בוצעו", "done"]])}</div></header>`;
  if (WEEK.tray.length) h += `<section class="tray"><h2>לא בוצעו בשבוע שעבר</h2>${WEEK.tray.map(t => `<div class="tray-item"><span>${kindTag(t.type)}<b>${esc(t.client)}</b></span>
      <span class="chips">${DAY_NAMES.map((n, i) => `<button type="button" class="chip" data-tray="${t.id}|${i}">${n}</button>`).join("")}</span></div>`).join("")}</section>`;
  h += `<div class="days">${WEEK.days.map((d, i) => `<section class="day">
      <div class="day-h"><h2>${DAY_NAMES[i]}</h2><span class="dt">${dayDate(i)}</span></div>
      <select class="area" data-areasel="${i}" id="area-${i}" aria-label="אזור ל${DAY_NAMES[i]}"><option value="">בחירת אזור</option>${AREAS.map(a => `<option ${d.area === a ? "selected" : ""}>${a}</option>`).join("")}</select>
      ${d.stops.length ? `<ol class="stops">${d.stops.map((s, j) => `<li class="stop ${s.status === "done" ? "done" : s.status === "missed" ? "missed" : ""}">
          <span>${kindTag(s.type)}<b>${esc(s.client)}</b>${s.self ? `<span class="self">הוסיף שלומי</span>` : ""}${s.note ? `<span class="sm">${esc(s.note)}</span>` : ""}${s.debt ? `<span class="debt">${esc(s.debt)}</span>` : ""}
          ${s.result ? `<span class="res">✓ ${resultLine(s)}${s.result.text ? ": " + esc(s.result.text) : ""}</span>` : ""}</span>
          <span class="stop-acts">${j ? `<button class="icon-btn" data-up="${i}|${j}" aria-label="להקדים">↑</button>` : ""}<button class="icon-btn" data-del-stop="${i}|${j}" aria-label="להסיר">✕</button></span></li>`).join("")}</ol>`
        : `<p class="empty-day">${d.area ? "עדיין אין תחנות" : "יום פנוי"}</p>`}
      <form class="add-stop" data-addstop="${i}" autocomplete="off">
        <div class="chips">${Object.entries(KINDS).map(([k, l]) => `<button type="button" class="chip" data-kind="${i}|${k}" aria-pressed="${R.kind[i] === k}">${l}</button>`).join("")}</div>
        <div class="row"><input id="add-${i}" placeholder="לקוח (כמה? עם פסיק)" aria-label="תחנה חדשה ל${DAY_NAMES[i]}"><button class="btn pri" type="submit">הוספה</button></div>
      </form></section>`).join("")}</div>`;
  h += `<div class="sendrow"><span>${WEEK.sent ? "השבוע נשלח. כל שינוי מתעדכן אצלו מיד." : `${stopCount()} תחנות ב-${WEEK.days.filter(d => d.stops.length).length} ימים`}</span><button class="btn pri" data-sendweek>${WEEK.sent ? "נשלח ✓" : "שליחת השבוע לשלומי"}</button></div>`;
  $("#pl").innerHTML = h;
}

/* Shlomi's field view */
function renderWeek(){
  if (!WEEK) weekInit();
  const d = WEEK.days[R.day], done = d.stops.filter(s => s.status !== "planned").length;
  const isToday = addDays(WEEK.start, R.day) === today();
  let h = `${brand()}
    <header><h1>השבוע שלי</h1><div class="pl-sub">שבוע ${dayDate(0)} עד ${dayDate(4)}</div></header>
    <div class="strip-days">${WEEK.days.map((x, i) => `<button type="button" class="dpill" data-wday="${i}" aria-pressed="${R.day === i}">
      <b>${DAY_NAMES[i]}</b><span>${esc(x.area || "פנוי")}${x.stops.length ? " · " + x.stops.length : ""}</span></button>`).join("")}</div>
    <div class="today-h"><h2>${isToday ? "היום" : DAY_NAMES[R.day]}: <em>${esc(d.area || "יום פנוי")}</em></h2><span class="pl-sub">${done} מתוך ${d.stops.length}</span></div>
    <div class="prog"><i style="width:${d.stops.length ? Math.round(done / d.stops.length * 100) : 0}%"></i></div>`;
  h += d.stops.length ? d.stops.map((s, j) => fieldStop(s, j)).join("") : `<p class="empty">אין תחנות ביום הזה.</p>`;
  h += `<form class="selfadd" data-selfstop autocomplete="off"><span class="lbl">עברת במקום שלא היה בתכנון? מוסיפים אותו כאן</span>
    <div class="chips">${Object.entries(KINDS).map(([k, l]) => `<button type="button" class="chip" data-skind="${k}" aria-pressed="${R.skind === k}">${l}</button>`).join("")}</div>
    <div class="row"><input id="self-add" placeholder="שם הלקוח" aria-label="תחנה שהוספת"><button class="btn pri" type="submit">הוספה</button></div></form>`;
  $("#wk").innerHTML = h;
}
function fieldStop(s, j){
  const st = s.status;
  let body = "";
  if (st === "done" && s.result){
    body = `<div class="result"><span><b>${s.type === "collect" ? "גבייה" : "סוכם"}:</b> ${s.result.text ? esc(s.result.text) : resultLine(s)}</span>
      ${s.type !== "collect" ? `<span><b>הזמנה:</b> ${resultLine(s)}</span>` : ""}
      ${s.result.order ? `<span class="follow">מעקב אוטומטי ב-${shortDate(addDays(today(), 7))}: לבדוק עם ניל מצב ההזמנה</span>` : ""}</div>`;
  } else if (st === "missed"){
    body = `<p class="note">לא הגעת. חוזר לתכנון של השבוע הבא.</p>`;
  } else if (R.open === s.id){
    const f = R.sum[s.id] || {};
    body = s.type === "collect"
      ? `<div class="sumform"><span class="lbl">הצ'ק נאסף?</span><div class="chips"><button type="button" class="chip" data-yn="${s.id}|got|1" aria-pressed="${f.got === true}">כן</button><button type="button" class="chip" data-yn="${s.id}|got|0" aria-pressed="${f.got === false}">לא</button></div>
         ${f.got ? `<label><span class="lbl">סכום (₪)</span><input id="amt-${s.id}" inputmode="numeric" value="${esc(f.amount || "")}"></label>` : ""}
         <label><span class="lbl">הערה</span><input id="txt-${s.id}" value="${esc(f.text || "")}"></label>
         <div class="fstop-acts"><button class="btn pri" data-savestop="${s.id}" ${f.got === undefined ? "disabled" : ""}>שמירה</button><button class="btn ghost" data-closestop>ביטול</button></div></div>`
      : `<div class="sumform"><label><span class="lbl">מה סוכם?</span><textarea id="txt-${s.id}">${esc(f.text || "")}</textarea></label>
         <span class="lbl">הייתה הזמנה?</span><div class="chips"><button type="button" class="chip" data-yn="${s.id}|order|1" aria-pressed="${f.order === true}">כן</button><button type="button" class="chip" data-yn="${s.id}|order|0" aria-pressed="${f.order === false}">לא</button></div>
         ${f.order ? `<label><span class="lbl">סכום ההזמנה (₪)</span><input id="amt-${s.id}" inputmode="numeric" value="${esc(f.amount || "")}"></label>` : ""}
         <div class="fstop-acts"><button class="btn pri" data-savestop="${s.id}" ${f.order === undefined ? "disabled" : ""}>שמירת הסיכום</button><button class="btn ghost" data-closestop>ביטול</button></div></div>`;
  } else {
    body = `<div class="fstop-acts"><button class="btn pri" data-openstop="${s.id}">הייתי</button><button class="btn ghost" data-missstop="${s.id}">לא הגעתי</button></div>`;
  }
  const msgs = s.thread.length;
  const thread = R.thread === s.id ? `<div class="thread">${s.thread.map(m => `<div class="msg ${m.by === USER ? "mine" : ""}"><small>${NAMES[m.by]} · ${m.at}</small>${esc(m.text)}</div>`).join("") || `<p class="note">עוד אין הודעות. מה שנכתב כאן נשמר ליד התחנה.</p>`}
      <form data-msg="${s.id}" autocomplete="off"><input id="msg-${s.id}" placeholder="הודעה למשרד" aria-label="הודעה"><button class="btn pri" type="submit">שליחה</button></form></div>` : "";
  return `<article class="fstop ${st}"><div class="fstop-top"><span class="num">${st === "done" ? "✓" : st === "missed" ? "–" : j + 1}</span>
    <div><h3>${kindTag(s.type)}${esc(s.client)}${s.self ? `<span class="self">הוספת</span>` : ""}</h3>${s.note ? `<div class="note">${esc(s.note)}</div>` : ""}${s.debt ? `<span class="debt">${esc(s.debt)}</span>` : ""}</div></div>
    ${body}<div><button class="link-btn" data-thread="${s.id}">${R.thread === s.id ? "סגירת ההודעות" : msgs ? `הודעות (${msgs})` : "הודעה למשרד"}</button></div>${thread}</article>`;
}
function findStop(id){ for (const d of WEEK.days){ const s = d.stops.find(x => x.id === id); if (s) return s; } }
function keepSum(id){ const t = $("#txt-" + id), a = $("#amt-" + id); R.sum[id] = Object.assign(R.sum[id] || {}, t ? {text: t.value} : {}, a ? {amount: a.value} : {}); }
document.addEventListener("click", e => {
  const b = e.target.closest("button"); if (!b || !WEEK) return;
  const d = b.dataset, pair = v => v.split("|");
  if (d.area){ const [i, a] = pair(d.area); WEEK.days[i].area = WEEK.days[i].area === a ? "" : a; renderPlan(); }
  if (d.kind){ const [i, k] = pair(d.kind); R.kind[i] = k; b.parentElement.querySelectorAll(".chip").forEach(c => c.setAttribute("aria-pressed", c === b)); }
  if (d.up){ const [i, j] = pair(d.up).map(Number), st = WEEK.days[i].stops; [st[j - 1], st[j]] = [st[j], st[j - 1]]; renderPlan(); }
  if (d.delStop){ const [i, j] = pair(d.delStop).map(Number); WEEK.days[i].stops.splice(j, 1); renderPlan(); }
  if (d.tray){ const [id, i] = pair(d.tray), t = WEEK.tray.find(x => x.id === id);
    WEEK.days[i].stops.push({id: "s" + (sid++), type: t.type, client: t.client, note: "", debt: "", status: "planned", thread: []});
    WEEK.tray = WEEK.tray.filter(x => x.id !== id); renderPlan(); toast("שובץ ליום " + DAY_NAMES[i]); }
  if (b.hasAttribute("data-sendweek")){ WEEK.sent = true; renderPlan(); toast("השבוע נשלח לשלומי"); }
  if (d.wday){ R.day = +d.wday; R.open = null; renderWeek(); }
  if (d.skind){ R.skind = d.skind; b.parentElement.querySelectorAll(".chip").forEach(c => c.setAttribute("aria-pressed", c === b)); }
  if (d.openstop){ R.open = d.openstop; renderWeek(); }
  if (b.hasAttribute("data-closestop")){ R.open = null; renderWeek(); }
  if (d.yn){ const [id, k, v] = pair(d.yn); keepSum(id); R.sum[id][k] = v === "1"; renderWeek(); }
  if (d.savestop){ const id = d.savestop, s = findStop(id); keepSum(id); s.result = R.sum[id]; s.status = "done"; R.open = null; renderWeek();
    toast(s.result.order ? "נשמר. נקבע מעקב בעוד שבוע" : "נשמר"); }
  if (d.missstop){ findStop(d.missstop).status = "missed"; renderWeek(); toast("חוזר לתכנון של השבוע הבא"); }
  if (d.thread){ R.thread = R.thread === d.thread ? null : d.thread; renderWeek(); const m = $("#msg-" + d.thread); if (m) m.focus(); }
});
document.addEventListener("change", e => { const i = e.target.dataset && e.target.dataset.areasel; if (i !== undefined && WEEK){ WEEK.days[i].area = e.target.value; renderPlan(); } });
document.addEventListener("input", e => { const id = (e.target.id || "").replace(/^(txt|amt)-/, ""); if (id !== e.target.id && R.sum) keepSum(id); });
document.addEventListener("submit", e => {
  const f = e.target;
  if (f.dataset.addstop !== undefined){ e.preventDefault(); const i = +f.dataset.addstop, inp = $("#add-" + i);
    const names = inp.value.split(/[,\n]/).map(x => x.trim()).filter(Boolean); if (!names.length) return;
    names.forEach(n => WEEK.days[i].stops.push({id: "s" + (sid++), type: R.kind[i], client: n, note: "", debt: "", status: "planned", thread: []}));
    renderPlan(); const again = $("#add-" + i); if (again) again.focus(); }
  if (f.dataset.selfstop !== undefined){ e.preventDefault(); const inp = $("#self-add"), n = inp.value.trim(); if (!n) return;
    const st = {id: "s" + (sid++), type: R.skind, client: n, note: "", debt: "", status: "planned", thread: [], self: true};
    WEEK.days[R.day].stops.push(st); R.open = st.id; renderWeek(); toast("נוסף ליום. אפשר למלא סיכום"); }
  if (f.dataset.msg){ e.preventDefault(); const id = f.dataset.msg, inp = $("#msg-" + id); if (!inp.value.trim()) return;
    findStop(id).thread.push({by: USER, text: inp.value.trim(), at: new Date().toLocaleTimeString("he-IL", {hour: "2-digit", minute: "2-digit", timeZone: TZ})});
    renderWeek(); const again = $("#msg-" + id); if (again) again.focus(); }
}, true);

/* ---------- the agent (preview: sample summary, insights, proposals and answers) ---------- */
const AI = {asked: null, props: [
  {id: "p1", title: "לחזור לענן עיצוב: עברו שבועיים מהפגישה", who: "agent", due: 14, src: "מסיכום הפגישה של שלומי: \"רוצים לחשוב, לחזור אליהם בעוד שבועיים\""},
  {id: "p2", title: "גבייה: בית ונוף, כרמיאל, 12,400 ₪", who: "agent", due: 3, src: "מגיול החובות: 75 יום, ושלומי נפגש איתם השבוע בלי לגבות"},
  {id: "p3", title: "לשלוח לגלריה מקסיקנית דוגמאות כריות", who: "office", due: 1, src: "מהפגישה של שלומי: \"ביקשו דוגמאות של כריות\""},
  {id: "p4", title: "להתקשר לספק הבדים: המשימה תקועה 5 ימים", who: "office", due: 0, src: "המשימה של ניל עוד לא נסגרה. אולי צריך לעזור לה"}]};
const ANSWERS = {
  "מה קרה השבוע אצל שלומי?": ["17 תחנות תוכננו, 12 בוצעו, 2 לא הגיע (חוזרות לשבוע הבא).", "3 הזמנות: גלריה מקסיקנית 8,500 ₪, קאזה 7,200 ₪, דקו פלוס 5,600 ₪. סה\"כ 21,300 ₪.", "2 צ'קים נאספו, 10,000 ₪. רהיטי הגליל עוד לא.", "הצפון היה האזור החזק: 2 הזמנות מתוך 6 פגישות."],
  "מי חייב לנו מעל 60 יום?": ["בית ונוף, כרמיאל: 12,400 ₪, 75 יום. היו 3 פגישות מאז בלי גבייה.", "בית קטן, רעננה: 4,100 ₪, 62 יום. שלומי אצלם ביום רביעי, הוספתי הערה לתחנה."],
  "איפה ניל נתקעת?": ["2 משימות מחכות יותר מ-3 ימים: ספק הבדים (5 ימים) ומלאי כריות (4 ימים).", "שתיהן תלויות בתשובה מספק או מהמחסן. אולי שווה שאתה תתקשר."]
};
function renderAI(){
  const el = $("#ai"); if (!el) return;
  let h = `${brand()}
    <header><h1>הסוכן</h1><div class="pl-sub">כל בוקר הסוכן עובר על הסל וכותב כאן: סיכום, מה כדאי לשים לב, והצעות שמחכות לאישור שלך.</div></header>
    <section class="panel"><h2>השבוע במספרים</h2><div class="digest">
      <div><b>12/17</b><span>תחנות של שלומי בוצעו</span></div><div><b>21,300 ₪</b><span>הזמנות מ-3 לקוחות</span></div>
      <div><b>10,000 ₪</b><span>צ'קים שנאספו</span></div><div><b>14</b><span>משימות שניל סגרה</span></div></div></section>
    <section class="panel"><h2>מה כדאי לשים לב</h2>
      <div class="insight warn"><i></i><p>בית ונוף בכרמיאל: חוב של 12,400 ₪ כבר 75 יום, ו-3 פגישות בלי הזמנה.<small>הצעה: לא לשבץ פגישה נוספת עד שהחוב ייסגר.</small></p></div>
      <div class="insight good"><i></i><p>הצפון הוא האזור החזק החודש: 4 הזמנות מ-11 פגישות.<small>שווה יום צפון נוסף לפני החגים.</small></p></div>
      <div class="insight"><i></i><p>השרון: 9 ביקורים בחודש, הזמנה אחת.<small>אולי לבקר שם פעם בשבועיים במקום כל שבוע.</small></p></div>
      <div class="insight warn"><i></i><p>2 משימות של ניל תקועות יותר מ-3 ימים, ושתיהן תלויות בספקים.</p></div></section>
    <section class="panel"><h2>הצעות לאישור${AI.props.length ? ` (${AI.props.length})` : ""}</h2>
      ${AI.props.length ? AI.props.map(p => `<div class="prop"><b>${esc(p.title)}</b>
        <span class="src">${esc(p.src)}</span>
        <span class="src">${p.who === "agent" ? "לשלומי" : "לניל"} · יעד ${dueLabel(addDays(today(), p.due))}</span>
        <div class="acts"><button class="btn pri" data-approve-prop="${p.id}">✓ להכניס לסל</button><button class="btn ghost" data-drop-prop="${p.id}">לא צריך</button></div></div>`).join("")
        : `<p class="empty">אין הצעות כרגע. הסוכן עובר על הסל כל בוקר.</p>`}</section>
    <p class="small soft">לשאלות ולניתוחים פותחים שיחה עם Claude. הסוכן קורא משם את אותם נתונים.</p>`;
  el.innerHTML = h;
}
document.addEventListener("click", async e => {
  const b = e.target.closest("button"); if (!b) return;
  const d = b.dataset;
  if (d.ask){ AI.asked = d.ask; renderAI(); }
  if (d.approveProp){ const p = AI.props.find(x => x.id === d.approveProp); AI.props = AI.props.filter(x => x !== p);
    await run("api_add", [{title: p.title, who: p.who, due: addDays(today(), p.due), fields: [], by: USER}], p.who === "agent" ? "נכנס לסל של שלומי" : "נכנס לסל של ניל"); shell(); }
  if (d.dropProp){ AI.props = AI.props.filter(x => x.id !== d.dropProp); shell(); toast("ההצעה נמחקה"); }
});
document.addEventListener("submit", e => {
  if (e.target.dataset.askfree === undefined) return;
  e.preventDefault(); const q = $("#ask-free").value.trim(); if (!q) return;
  ANSWERS[q] = ["כאן תופיע התשובה של הסוכן, מתוך המשימות, התחנות, הסיכומים והחובות שבסל."]; AI.asked = q; renderAI();
}, true);

/* ---------- start ---------- */
shell();
load();
setInterval(load, view === "strip" ? 60000 : 30000);
setInterval(() => { if (view === "strip") renderStrip(); }, 20000);
document.addEventListener("visibilitychange", () => { if (!document.hidden) load(); });

// Loads סל's screens from this site. The Google side only loads this file, so everything else can change without touching Google.
(function () {
  var site = "https://marcokairi01-del.github.io/Salsala-/", v = "?t=" + Date.now();
  var app = document.getElementById("app");
  if (app && !app.innerHTML) app.innerHTML = '<p style="font-family:Arial,sans-serif;padding:24px;color:#4C7476;font-size:18px">טוען את סל…</p>';
  if (!document.getElementById("toast")) { var t = document.createElement("div"); t.id = "toast"; t.className = "toast"; t.hidden = true; document.body.appendChild(t); }
  var css = document.createElement("link"); css.rel = "stylesheet"; css.href = site + "app.css" + v;
  document.head.appendChild(css);
  var js = document.createElement("script"); js.src = site + "app.js" + v;
  js.onerror = function () { app.innerHTML = '<p style="font-family:Arial;padding:24px">סל לא נטען. בדקו את החיבור לאינטרנט ורעננו את הדף.</p>'; };
  document.body.appendChild(js);
})();

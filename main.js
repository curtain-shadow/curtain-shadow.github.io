// 深浅色主题切换（站点共享）
(function () {
  var root = document.documentElement;
  var btn = document.getElementById('theme-toggle');
  if (!btn) return;
  var darkIcon = '🌙', lightIcon = '☀️';
  var sysDark = function () { return window.matchMedia('(prefers-color-scheme: dark)').matches; };
  var isDark = function () {
    var t = root.getAttribute('data-theme');
    if (t === 'dark') return true;
    if (t === 'light') return false;
    return sysDark();
  };
  var apply = function () { btn.textContent = isDark() ? lightIcon : darkIcon; };
  btn.addEventListener('click', function () {
    root.setAttribute('data-theme', isDark() ? 'light' : 'dark');
    apply();
  });
  apply();
})();

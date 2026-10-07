// 公式LINEのURL：LP用の友だち追加URLに差し替えるときは、ここだけ変える
var LINE_URL = 'https://lin.ee/Wxep7BH';
document.querySelectorAll('a[data-line]').forEach(function (a) { a.href = LINE_URL; });

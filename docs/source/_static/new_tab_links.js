document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll("a.external").forEach(function (a) {
    a.setAttribute("target", "_blank");
    a.setAttribute("rel", "noopener noreferrer");
  });
});

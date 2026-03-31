/**
 * Cà Phê Tây Nguyên - 48
 * Main Script
 */

(function () {
  "use strict";

  // Cập nhật năm tự động ở Footer
  function updateYear() {
    var year = String(new Date().getFullYear());
    var elY = document.getElementById("y");
    var elY2 = document.getElementById("y2");
    if (elY) elY.textContent = year;
    if (elY2) elY2.textContent = year;
  }

  // Điều khiển Menu trên Mobile
  function initMobileMenu() {
    var header = document.getElementById("header");
    var toggleBtn = document.getElementById("header-toggle");
    var mobilePanel = document.getElementById("header-panel");
    var scrim = document.getElementById("header-scrim");

    if (!header || !toggleBtn || !mobilePanel || !scrim) return;

    function setMenuOpen(isOpen) {
      header.classList.toggle("header--open", isOpen);
      mobilePanel.classList.toggle("header-panel--open", isOpen);
      scrim.classList.toggle("header-scrim--open", isOpen);
      
      toggleBtn.setAttribute("aria-expanded", isOpen ? "true" : "false");
      mobilePanel.setAttribute("aria-hidden", isOpen ? "false" : "true");
      scrim.setAttribute("aria-hidden", isOpen ? "false" : "true");
      
      document.body.classList.toggle("body--nav-locked", isOpen);
      toggleBtn.setAttribute("aria-label", isOpen ? "Đóng menu điều hướng" : "Mở menu điều hướng");
    }

    toggleBtn.addEventListener("click", function () {
      setMenuOpen(!header.classList.contains("header--open"));
    });

    scrim.addEventListener("click", function () {
      setMenuOpen(false);
    });

    // Đóng menu khi bấm vào link bất kỳ
    mobilePanel.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        setMenuOpen(false);
      });
    });

    // Đóng menu khi bấm phím Esc
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") setMenuOpen(false);
    });
  }
  // Hiệu ứng cuộn Fade Up (Scroll Animations)
  function initScrollAnimations() {
    var observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
        }
      });
    }, {
      root: null,
      rootMargin: "0px",
      threshold: 0.15 // Kích hoạt khi thấy 15% khối
    });

    document.querySelectorAll(".fade-up").forEach(function(el) {
      observer.observe(el);
    });
  }

  // Khởi tạo các module
  document.addEventListener("DOMContentLoaded", function () {
    updateYear();
    initMobileMenu();
    initScrollAnimations();
  });

})();

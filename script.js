/* H&M Gift Card landing page — progressive enhancements, no dependencies */
(function () {
  'use strict';

  // 1. Keep the footer year current automatically
  var yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }

  // 2. FAQ accordion — tap a question to open it, the others close
  var questions = document.querySelectorAll('.faq-question button');
  questions.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var answer = btn.closest('.faq-item').querySelector('.faq-answer');
      var isOpen = btn.getAttribute('aria-expanded') === 'true';

      // Close everything first
      questions.forEach(function (otherBtn) {
        otherBtn.setAttribute('aria-expanded', 'false');
        otherBtn.closest('.faq-item').querySelector('.faq-answer').hidden = true;
      });

      // Open the one that was tapped (unless it was already open)
      if (!isOpen) {
        btn.setAttribute('aria-expanded', 'true');
        answer.hidden = false;
      }
    });
  });
})();

document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('contact-form');
  const formStatus = document.getElementById('form-status');

  form.addEventListener('submit', function(e) {
    e.preventDefault();
    // إحنا ما عندنا سيرفر حقيقي الآن، مجرد محاكاة
    formStatus.textContent = '🚀 تم استلام طلبك! سنتواصل معك عبر الواتساب قريباً.';
    formStatus.style.color = 'green';
    form.reset();
  });
});

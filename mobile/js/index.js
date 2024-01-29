// تعبير وظيفي يُنفذ فوريًا (IIFE) لعزل الكود
(function () {
  'use strict' // استخدام الوضع الصارم لتجنب الأخطاء الشائعة

  // اختيار كل النماذج التي نريد تطبيق أنماط التحقق من الصحة الخاصة بـ Bootstrap عليها
  var forms = document.querySelectorAll('.needs-validation');

  // التكرار على هذه النماذج ومنع إرسالها
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      // إضافة مستمع الأحداث على حدث الإرسال
      form.addEventListener('submit', function (event) {
        // إذا لم يكن النموذج صالحًا
        if (!form.checkValidity()) {
          event.preventDefault(); // منع الإرسال الافتراضي
          event.stopPropagation(); // وقف انتشار الحدث
        }

        // إضافة فئة 'was-validated' للنموذج
        form.classList.add('was-validated');
      }, false);
    })
})();

// تحديث سنة حقوق النشر ديناميكيًا
var copyrightSpan = document.getElementById("copyrightSpan");
// تعيين السنة الحالية إلى innerHTML
copyrightSpan.innerHTML = new Date().getFullYear();

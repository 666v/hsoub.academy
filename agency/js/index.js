function scrollFunction() {
    if (document.documentElement.scrollTop > 200) {
        document.getElementById("navbar").classList.add("noTransparrent");
    } else {
        document.getElementById("navbar").classList.remove("noTransparrent");
    }
}

window.onload = function () {
    // وظائف العدادات
    let website = new CountUp('website-count', 0, 436, 0, 2.5);
    website.start();
    let app = new CountUp('app-count', 0, 186, 0, 2.5);
    app.start();
    let user = new CountUp('user', 0, 15000, 0, 2.5);
    user.start();
    let video = new CountUp('video-count', 0, 112, 0, 2.5);
    video.start();

    // وظيفة scrollFunction تنفذ عند السحب
    window.onscroll = function () {
        scrollFunction();
    };

    // وظيفة تعطي قيمة السنة الحالية لعنصر بواسطة الهوية
    document.getElementById('fullYear').innerHTML = new Date().getFullYear();
};

// وظيفة لتعطيل تقديم النموذج في حالة وجود حقول غير صالحة
(function () {
    'use strict';

    var forms = document.querySelectorAll('.needs-validation');

    Array.prototype.slice.call(forms)
        .forEach(function (form) {
            form.addEventListener('submit', function (event) {
                if (!form.checkValidity()) {
                    event.preventDefault();
                    event.stopPropagation();
                }

                form.classList.add('was-validated');
            }, false);
        });
})();


document.getElementById('fullYear').innerHTML = new Date().getFullYear();
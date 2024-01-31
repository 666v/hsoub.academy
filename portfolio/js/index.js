// عندما يتم التمرير في النافذة
$(window).scroll(function() {
    // التحقق ما إذا كان التمرير أكثر من أو يساوي 200 بكسل
    if ($(this).scrollTop() >= 200) {
        // إضافة فئة 'noTransparent' للنافبار
        $("#navbar").addClass("noTransparent");
    } else {
        // إزالة فئة 'noTransparent' من النافبار إذا كان التمرير أقل من 200 بكسل
        $("#navbar").removeClass("noTransparent");
    }
});

// عندما يكون المستند جاهزًا
$(document).ready(function() {
    // تهيئة التقدم الدائري لكل عنصر بفئة 'circle'
    $('.circle').circleProgress({
        startAngle: -Math.PI / 2, // تعيين زاوية البداية
        fill: "#0575e6"           // تعيين لون التعبئة
    }).on('circle-animation-progress', function(event, progress, stepValue) {
        // أثناء تقدم الرسوم البيانية، تحديث النص داخل العنصر 'span'
        $(this).find('span').html(Math.round(stepValue * 100) + '%');
    });

    // تطبيق التحقق من صحة النموذج على النموذج بمُعرف 'contactForm'
    $('#contactForm').validate();
});

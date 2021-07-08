$(document).ready(function () {
    var vitrikhoiedu = $("#khoiedu").offset().top;
    $(".btn-xuong,.kinhnghiem").click(function (e) { 
        $("body,html").animate({scrollTop:vitrikhoiedu},800)
        
    });
});
 
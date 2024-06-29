$(document).ready(function() {
    $("a.nav-link").click(function(event) {
        event.preventDefault();
        var target = $(this).attr("href");
        $.ajax({
            url: target + ".html",
            success: function(data) {
                $("#content").html(data);
                $("html, body").animate({
                    scrollTop: $("#" + target).offset().top
                }, 1000);
            }
        });
    });
});
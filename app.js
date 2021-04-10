$(function () {

// Smooth scroll

    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();

        let blockID = $(this).data("scroll");
        let blockOffset = $(blockID).offset().top;

        console.log(blockOffset);

        $("html, body").animate ({
            scrollTop: blockOffset - 30
        }, 700);
    });

});
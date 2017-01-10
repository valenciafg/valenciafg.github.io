import $ from 'jquery';

export default function() {
    $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') && location.hostname === this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
    //Fix Jump background on IE11
    console.log("el navegador es "+navigator.userAgent);
    if(navigator.userAgent.match(/Trident\/7\./)) {
        console.log("entro aqui");
        $('body').on("mousewheel", function () {
            // remove default behavior
            event.preventDefault();
            //scroll without smoothing
            var wheelDelta = event.wheelDelta;
            var currentScrollPosition = window.pageYOffset;
            window.scrollTo(0, currentScrollPosition - wheelDelta);
        });
    }
}

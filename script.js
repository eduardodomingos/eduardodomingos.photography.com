(function ($) {
    $(document).ready(function () {
        var dom = {
            $window: $(window),
            $body: $('body'),
            $offcanvasToggle: $('.offcanvas-toggle')
        };

        (function init() {
            // Nav Toggle
            dom.$offcanvasToggle.click(function() {
                dom.$body.toggleClass('offcanvas-open');
            });

            // Throttle window scroll for performace
            var throttled = _.throttle(updatePosition, 100);
            dom.$window.scroll(throttled);

            // Throttle callback
            function updatePosition() {
                if ( dom.$window.scrollTop() > 500 ) {
                    dom.$body.addClass('header-collapsed');
                }
                else {
                    dom.$body.removeClass('header-collapsed');
                }
            }

        })();

    });
}(jQuery));
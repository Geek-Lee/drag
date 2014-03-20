;(function($, window, undefined) {

    $.fn.wnlDrag = function(options) {

        var dft = {}, 

            ops = $.extend(dft, options);

        $(this).each(function() {

            var _this = $(this), el = _this.get(0);

            _this.on('mousedown', function(ev) {

                var _l = ev.clientX - el.offsetLeft,

                    _t = ev.clientY - el.offsetTop;

                $(document).on('mousemove', function(ev) {

                    el.style.left = ev.clientX - _l + 'px';

                    el.style.top = ev.clientY - _t + 'px';

                })

                $(document).on('mouseup', function() {

                    $(document).unbind('mousemove');

                });

            });

        });

        return this;
    };

})(jQuery, window);
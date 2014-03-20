/**
 * jQuery 插件的几个关键点
 * jQuery.fn.extend() 用于扩展 jQuery 方法
 * jQuery.extend() 用于扩展 jQuery 对象和 Object 对象
 */

;(function($) {
    $.fn.wnlDrag = function(options) {
        var dft = {};
        var ops = $.extend(dft, options);
        return this;
    };
})(jQuery);
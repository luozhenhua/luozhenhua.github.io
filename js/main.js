(function ($) {
    $.getUrlParam = function (name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(reg);
        /*r=r.replace(/\+/g,' ');*/
        if (r != null) return unescape(r[2]).replace(/\+/g,' '); return null;
    }
})(jQuery);
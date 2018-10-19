__CreateJSPath = function (js) {
    var scripts = document.getElementsByTagName("script");
    var path = "";
    for (var i = 0, l = scripts.length; i < l; i++) {
        var src = scripts[i].src;
        if (src.indexOf(js) != -1) {
            var ss = src.split(js);
            path = ss[0];
            break;
        }
    }
    var href = location.href;
    href = href.split("#")[0];
    href = href.split("?")[0];
    var ss = href.split("/");
    ss.length = ss.length - 1;
    href = ss.join("/");
    if (path.indexOf("https:") == -1 && path.indexOf("http:") == -1 && path.indexOf("file:") == -1 && path.indexOf("\/") != 0) {
        path = href + "/" + path;
    }
    return path;
}

var bootPATH = __CreateJSPath("start.js");
mini_debugger=false
//layui
document.write('<script src="' + bootPATH + 'jquery.min.js" type="text/javascript"></script>');
document.write('<script src="' + bootPATH + 'layui/xadmin.js" type="text/javascript" ></script>');
document.write('<script src="' + bootPATH + 'layui/layui.js" type="text/javascript" ></script>');
document.write('<script src="' + bootPATH + 'utils/session.js" type="text/javascript" ></script>');
document.write('<link href="' + bootPATH + 'layui/css/xadmin.css?Math.random()" rel="stylesheet" type="text/css" />');




////////////////////////////////////////////////////////////////////////////////////////
function getCookie(sName) {
    var aCookie = document.cookie.split("; ");
    var lastMatch = null;
    for (var i = 0; i < aCookie.length; i++) {
        var aCrumb = aCookie[i].split("=");
        if (sName == aCrumb[0]) {
            lastMatch = aCrumb;
        }
    }
    if (lastMatch) {
        var v = lastMatch[1];
        if (v === undefined) return v;
        return unescape(v);
    }
    return null;
}
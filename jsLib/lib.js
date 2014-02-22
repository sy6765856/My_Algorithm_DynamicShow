/**
 * Created with JetBrains WebStorm.
 * User: honsytshen
 * Date: 14-1-2
 * Time: 下午3:24
 * To change this template use File | Settings | File Templates.
 */
window.deepCopy = function(target, source) {
    var target = target || {};
    for (var item in source) {
        if(typeof source[item] === 'object') {
            target[item] = (source[item].constructor === Array) ? [] : {};
            deepCopy(target[item], source[item]);
        } else {
            target[item] = source[item];
        }
    } return target;
};
window.extend = function(parent, object) {
    function F() {};
    F.prototype = parent;
    var son = new F();
    deepCopy(son, object);
    return son;
};
window.requestAnimFrame = (function() {
    return window.requestAnimationFrame
        || window.webkitRequestAnimationFrame
        || window.mozRequestAnimationFrame
        || window.oRequestAnimationFrame
        || window.msRequestAnimationFrame
        || function() { return setTimeout(arguments[0], 1000 / 60); }
})();
window.cancelRequestAnimFrame = (function() {
    return window.cancelRequestAnimationFrame
        || window.webkitCancelRequestAnimationFrame
        || window.mozCancelRequestAnimationFrame
        || window.oCancelRequestAnimationFrame
        || window.msCancelRequestAnimationFrame || function() { return -1; }
})();

window.clearAllTimeOut = function(maxIndex) {
    maxIndex = maxIndex ? maxIndex : IndexINF;
    for(var i = 1; i<=maxIndex; i++) {
        clearTimeout(i);
    }
};

window.swap = function(a, b) {
    var tmp = a;
    a = b; b = tmp;
};

window.min = function(a, b) {
    return a < b ? a : b;
};

window.max = function(a, b) {
    return a > b ? a : b;
};

window.isset = function(a) {
    if(a === null || a === undefined) {
        return 0;
    }
    return 1;
};
window.warnNumber = function(value, warnInfo) {
    $("#input2").val('');
    if(isNaN(value)) {
        alert(warnInfo);
        $("#input1").val('').focus();
        return 1;
    }
    $("#input1").val('').focus();
    return 0;
};

/**
 * Created with JetBrains WebStorm.
 * User: sy6765856
 * Date: 14-1-13
 * Time: 下午4:54
 * To change this template use File | Settings | File Templates.
 */
Array.prototype.max = function(){
    return Math.max.apply({}, this);
};
Array.prototype.min = function(){
    return Math.min.apply({}, this);
};

var INF = 10000,
    frame = 0,
    IndexINF = 100000;

$('#prim').click(function() {
    clearAllTimeOut();
    Canvas.clearAll('canvas');
    var fun = 'Krusal.run("canvas")';
    $('#start').replaceWith('<button id="start" class="start" onclick=' + fun + '>开始</button>');
});
$('#sort').click(function() {
    clearAllTimeOut();
    Canvas.clearAll('canvas');
    var fun = 'Sort.run("canvas")';
    $('#start').replaceWith('<button id="start" class="start" onclick=' + fun + '>开始</button>');
});

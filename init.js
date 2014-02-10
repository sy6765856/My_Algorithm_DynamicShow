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

var name_list = {
    'sort': 'Sort',
    'prim': 'Prim'
};

//for(var key in name_list) {
//    var ff = '#' + key.substr(0);
//    var rr = name_list[key];
//
//    $(ff).click(function() {
//        clearAllTimeOut();
//        Canvas.clearAll('canvas');
//        $('#start').replaceWith('<button id="start" class="start" onclick=' + rr + '.run("canvas")' + '>开始</button>');
//    });
//}
$('#prim').click(function() {
        clearAllTimeOut();
        Canvas.clearAll('canvas');
        $('#start').replaceWith('<button id="start" class="start" onclick=' + 'Prim' + '.run("canvas")' + '>开始</button>');
});

$('#krusal').click(function() {
    clearAllTimeOut();
    Canvas.clearAll('canvas');
    $('#start').replaceWith('<button id="start" class="start" onclick=' + 'Krusal' + '.run("canvas")' + '>开始</button>');
});

$('#sort').click(function() {
    clearAllTimeOut();
    Canvas.clearAll('canvas');
    $('#start').replaceWith('<button id="start" class="start" onclick=' + 'Sort' + '.run("canvas")' + '>开始</button>');
});

$('#floyd').click(function() {
    clearAllTimeOut();
    Canvas.clearAll('canvas');
    $('#start').replaceWith('<button id="start" class="start" onclick=' + 'Floyd' + '.run("canvas")' + '>开始</button>');
});

$('#heap').click(function() {
    clearAllTimeOut();
    Canvas.clearAll('canvas');
    $('#start').replaceWith('<button id="start" class="start" onclick=' + 'Heap' + '.run("canvas")' + '>开始</button>');
});

$('#insert').click(BinaryTree.insert);

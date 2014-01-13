/**
 * Created with JetBrains WebStorm.
 * User: sy6765856
 * Date: 14-1-13
 * Time: 下午4:54
 * To change this template use File | Settings | File Templates.
 */
$('#prim').click(function() {
    Canvas.clearById('canvas');
    var fun = 'Prim.run("canvas")';
    $('#start').replaceWith('<button id="start" class="start" onclick=' + fun + '>开始</button>');
});
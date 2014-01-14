/**
 * Created with JetBrains WebStorm.
 * User: honsytshen
 * Date: 14-1-2
 * Time: 下午3:47
 * To change this template use File | Settings | File Templates.
 */
var INF = 10000;
Canvas = extend(CanvasBase, {
    draw : function(frame) {
        var ctx = this.ctx;
        ctx.fillStyle = 'rgba(255, ' + frame + ', 0, .5)';
        ctx.fillRect(frame,frame, 10, 10);
        if(frame > 200) return;
        frame += 4;
        window.setTimeout(Canvas.draw(frame), 100000);
    },
    drawBinaryTree: function(treeNodes) {
        this.drawBoundedCircle(10, {x: 63, y: 63}, '99');
    }
});
/**
 * Created with JetBrains WebStorm.
 * User: honsytshen
 * Date: 14-1-2
 * Time: 下午3:47
 * To change this template use File | Settings | File Templates.
 */
var INF = 10000,
    frame = 0;
Canvas = extend(CanvasBase, {
    draw : function() {
        var ctx = this.ctx;
        ctx.fillStyle = 'rgba(255, ' + frame + ', 0, .5)';
        ctx.fillRect(frame,frame, 10, 10);
        if(frame > 200) return;
        frame += 4;
        setTimeout("Canvas.draw();", 1000);
    },
    highLight: function() {

    },
    drawBinaryTree: function(treeNodes) {
        setTimeout("Canvas.drawBoundedCircle(10, {x: 63, y: 103}, '99', 4);", 2000);
        setTimeout("Canvas.drawBoundedCircle(20, {x: 100, y:50}, '56', 4);", 2000);
        setTimeout("Canvas.drawBoundedCircle(20, {x: 100, y:150}, '56', 4);", 2000);

        this.drawCircleBound(20, {x: 100, y:150}, 4);

        this.linkTwoCircle({r:10, o: {x: 63, y: 103}}, {r:20, o: {x: 100, y:50}});
        this.linkTwoCircle({r:10, o: {x: 63, y: 103}}, {r:20, o: {x: 100, y:150}});
        return this;
    },
    linkTwoCircle: function(A, B, str) {
        var u = A.o.y < B.o.y ? A : B,
            d = A.o.y < B.o.y ? B : A;
        var a = d.o.y - u.o.y,
            b = u.o.x - d.o.x,
            c = Math.sqrt(a*a + b*b);

        this.drawLine({x: d.o.x + d.r/c*b, y: d.o.y - d.r/c*a}
            , {x: u.o.x - u.r/c*b, y: u.o.y + u.r/c*a});
    }
});
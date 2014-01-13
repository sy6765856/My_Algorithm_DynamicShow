/**
 * Created with JetBrains WebStorm.
 * User: honsytshen
 * Date: 14-1-2
 * Time: 下午3:47
 * To change this template use File | Settings | File Templates.
 */
var INF = 10000;
Canvas = extend(CanvasBase, {
    draw : function(ctx, frame) {
        console.log(frame);
        ctx.fillStyle = 'rgba(255, ' + frame + ', 0, .5)';
        ctx.fillRect(frame,frame, 10, 10);
        if(frame > 200)return;
        frame += 4;
//        Canvas.clear(ctx);
        window.setTimeout(Canvas.draw(ctx, frame), 10);
    }
});
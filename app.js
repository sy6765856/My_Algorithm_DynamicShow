/**
 * Created with JetBrains WebStorm.
 * User: honsytshen
 * Date: 14-1-2
 * Time: 下午3:27
 * To change this template use File | Settings | File Templates.
 */
app = {
    run: function(id) {
        var canvas = document.getElementById(id);
        if (canvas.getContext) {
            var ctx = canvas.getContext("2d");
//            Canvas.draw(ctx);
            Canvas.drawRectangle(ctx, 230, 10, {x: 24, y: 111});
            Canvas.drawCircle(ctx, 50, {x: 23, y: 23});
            Canvas.drawLine(ctx, {x: 21, y: 56}, {x: 123, y: 32});
//            Canvas.clearByObject(ctx);
            Canvas.draw(ctx, 0);
        }
    }
}
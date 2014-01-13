/**
 * Created with JetBrains WebStorm.
 * User: honsytshen
 * Date: 14-1-3
 * Time: 下午5:21
 * To change this template use File | Settings | File Templates.
 */
Prim = extend(AlgorithmBase, {
    run: function(id){
        var canvas = document.getElementById(id);
        if (canvas.getContext) {
            var ctx = canvas.getContext("2d");
//            Canvas.drawRectangle(ctx, 230, 10, {x: 24, y: 111});
//            Canvas.drawLine(ctx, {x: 21, y: 56}, {x: 123, y: 32});
            Canvas.clearByObject(ctx);
            Canvas.drawCircle(ctx, 50, {x: 63, y: 63}, '99999999923');

            Canvas.writeText(ctx, 'hello', {x: 34, y:45});
            Canvas.draw(ctx, 0);
        }
    },
    drawTree: function(){

    }
});

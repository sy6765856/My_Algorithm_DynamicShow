/**
 * Created with JetBrains WebStorm.
 * User: honsytshen
 * Date: 14-1-2
 * Time: 下午3:23
 * To change this template use File | Settings | File Templates.
 */
CanvasBase = {
    drawRectangle: function(ctx, width, height, pos) {
        ctx.fillStyle = "rgb(100,0,0)";
        ctx.fillRect(pos.x, pos.y, width, height);
    },

    drawCircle: function(ctx, radius, pos, str) {
        ctx.fillStyle = "rgb(0,100,100)";
        ctx.beginPath();
        ctx.arc(pos.x, pos.y, radius, 0, Math.PI*2, true);
        ctx.closePath();
        ctx.fill();
        this.writeText(ctx, str, pos);
    },

    drawLine: function(ctx, start, end) {
        ctx.beginPath();
        ctx.moveTo(start.x, start.y);
        ctx.lineTo(end.x, end.y);
        ctx.stroke();
    },

    writeText: function(ctx, str, pos) {
        ctx.fillStyle = "rgb(100,100,0)";
        ctx.fillText(str, pos.x, pos.y);
    },

    clearByObject: function(ctx) {
        ctx.clearRect(0, 0, INF, INF);
    },

    clearById: function(id) {
        var canvas = document.getElementById(id);
        if (canvas.getContext) {
            var ctx = canvas.getContext("2d");
            this.clearByObject(ctx);
        }
    }
};

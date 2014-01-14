/**
 * Created with JetBrains WebStorm.
 * User: honsytshen
 * Date: 14-1-2
 * Time: 下午3:23
 * To change this template use File | Settings | File Templates.
 */
CanvasBase = {
    init: function(id) {
        var canvas = document.getElementById(id);
        if (canvas.getContext) {
            var ctx = canvas.getContext("2d");
            this.ctx = ctx;
        }
        return this;
    },

    drawRectangle: function(width, height, pos) {
        var ctx = this.ctx;
        ctx.fillStyle = "rgb(100,0,0)";
        ctx.fillRect(pos.x, pos.y, width, height);
        return this;
    },

    drawCircle: function(radius, pos, str) {
        var ctx = this.ctx;
        ctx.fillStyle = "rgb(0,255,0)";
        ctx.beginPath();
        ctx.arc(pos.x, pos.y, radius, 0, Math.PI*2, true);
        ctx.closePath();
        ctx.fill();

        this.writeText(str, {x:pos.x - radius/2, y: pos.y + radius/4});
        return this;
    },

    drawBoundedCircle: function(radius, pos, str) {
        var ctx = this.ctx;
        ctx.strokeStyle = "rgb(255,0,0)";
        ctx.beginPath();
        ctx.arc(pos.x, pos.y, radius, 0, Math.PI*2, true);
        ctx.stroke();

        this.drawCircle(radius, pos, str);
        return this;
    },

    drawLine: function(start, end) {
        var ctx = this.ctx;
        ctx.beginPath();
        ctx.moveTo(start.x, start.y);
        ctx.lineTo(end.x, end.y);
        ctx.stroke();
        return this;
    },

    writeText: function(str, pos) {
        var ctx = this.ctx;
        ctx.fillStyle = "rgb(100,0,0)";
        ctx.fillText(str, pos.x, pos.y);
        return this;
    },

    clear: function() {
        this.ctx.clearRect(0, 0, INF, INF);
        return this;
    },

    clearByObject: function(ctx) {
        ctx.clearRect(0, 0, INF, INF);
        return this;
    },

    clearById: function(id) {
        var canvas = document.getElementById(id);
        if (canvas.getContext) {
            var ctx = canvas.getContext("2d");
            this.clearByObject(ctx);
        }
        return this;
    }
};

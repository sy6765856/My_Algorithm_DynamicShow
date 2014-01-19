/**
 * Created with JetBrains WebStorm.
 * User: honsytshen
 * Date: 14-1-2
 * Time: 下午3:23
 * To change this template use File | Settings | File Templates.
 */
CanvasBase = {
    init: function(id, width, height) {
        var canvas = document.getElementById(id);
        canvas.width = width ? width : 450;
        canvas.height = height ? height : 500;
        if (canvas.getContext) {
            var ctx = canvas.getContext("2d");
            this.ctx = ctx;
        }
        return this;
    },

    drawRectangle: function(width, height, pos, str) {
        var ctx = this.ctx;
        ctx.fillStyle = "rgb(100,0,0)";
        ctx.fillRect(pos.x - width, pos.y - height, width, height);
        if(str){
            this.writeText(str, pos);
        }
        return this;
    },

    drawCircle: function(radius, pos, str) {
        var ctx = this.ctx;
        ctx.fillStyle = "rgb(0,255,0)";
        ctx.beginPath();
        ctx.arc(pos.x, pos.y, radius, 0, Math.PI*2, true);
        ctx.closePath();
        ctx.fill();

        if(str) {
            this.writeText(str, {x:pos.x - radius/2, y: pos.y + radius/4});
        }
        return this;
    },

    drawBoundedCircle: function(radius, pos, str, boundWidth) {
        this.drawCircleBound(radius, pos, boundWidth);
        this.drawCircle(radius, pos, str);
        return this;
    },

    drawCircleBound: function(radius, pos, boundWidth, style) {
        var ctx = this.ctx;
        ctx.strokeStyle = "rgb(0,255,0)";
        ctx.beginPath();
        ctx.arc(pos.x, pos.y, radius, 0, Math.PI*2, true);
        ctx.lineWidth = boundWidth ? boundWidth : 2;
        ctx.stroke();
        return this;
    },

    drawLine: function(start, end, lineWidth) {
        var ctx = this.ctx;
        ctx.strokeStyle = "rgb(0, 255, 255)";
        ctx.beginPath();
        ctx.moveTo(start.x, start.y);
        ctx.lineTo(end.x, end.y);
        ctx.lineWidth = lineWidth ? lineWidth : 3;
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

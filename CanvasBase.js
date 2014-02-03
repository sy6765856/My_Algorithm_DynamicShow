/**
 * Created with JetBrains WebStorm.
 * User: honsytshen
 * Date: 14-1-2
 * Time: 下午3:23
 * To change this template use File | Settings | File Templates.
 */
CanvasBase = function() {
    return extend(Base, {
        init: function(id, width, height) {
            var canvas = document.getElementById(id);
            canvas.width = width ? width : 450;
            canvas.height = height ? height : 500;
            this.canvas = canvas;

            if (canvas.getContext) {
                var ctx = canvas.getContext("2d");
                this.ctx = ctx;
            }
            Base.init.call(this);
            this.flag = 0;
            var that = this;
            this.canvas.onmousedown = function(e) {
                var mousePosition = that.getMousePosition(e);
                that.drawCircle(3, mousePosition)
                    .save(that.drawCircle, [3, mousePosition])
                    .flag = (that.flag + 1)%2;
                if(that.flag) {
                    that.drawBegin(mousePosition);
                } else {
                    that.drawEnd();
                }
            };

            return this;
        },

        drawBegin: function(pos) {
            var that = this;
            this.canvas.onmousemove = function(e) {
                var end = that.clear()
                    .restore(that)
                    .getMousePosition(e);

                that.drawLine(pos, end);
                that.start = pos;
                that.end = end;
            };
        },
        drawEnd: function() {
            this.canvas.onmousemove = null;
            this.save(this.drawLine, [this.start, this.end])
                .restore(this);
        },
        drawRectangle: function(width, height, pos, str) {
            var ctx = this.ctx;
            ctx.fillStyle = CanvasLib.colorSet("purple");
            var ps = {x: pos.x - width, y: pos.y-height};
            ctx.fillRect(ps.x, ps.y, width, height);
            if(str){
                this.writeText(str, ps);
            }
            return this;
        },
        drawSquare: function(sideLength, pos, number, color) {
            var ctx = this.ctx;
            ctx.fillStyle = CanvasLib.colorSet(color);
            var ps = {x: pos.x - sideLength, y: pos.y - sideLength};
            ctx.fillRect(ps.x, ps.y, sideLength, sideLength);
            this.writeText(number, {x: pos.x - sideLength/2 - 4, y: pos.y - sideLength/2 + 4});
            return this;
        },
        drawSquareBound: function(sideLength, pos) {
            var ctx = this.ctx;
            ctx.fillStyle = CanvasLib.colorSet("red");
            ctx.strokeRect(pos.x - sideLength, pos.y - sideLength, sideLength, sideLength);
            return this;
        },
        drawBoundedSquare: function(sideLength, pos, number, color) {
            this.drawSquareBound(sideLength, pos)
                .drawSquare(sideLength, pos, number, color);
        },

        drawCircle: function(radius, pos, str) {
            if(pos && pos.x && pos.y && radius) {
                var ctx = this.ctx;
                ctx.fillStyle = "rgb(0,255,0)";
                ctx.beginPath();
                ctx.arc(pos.x, pos.y, radius, 0, Math.PI*2, true);
                ctx.closePath();
                ctx.fill();

                if(str) {
                    this.writeText(str, {x:pos.x - 3, y: pos.y + 3});
                }
            }
            return this;
        },

        drawBoundedCircle: function(radius, pos, str, boundWidth) {
            this.drawCircleBound(radius, pos, boundWidth)
                .drawCircle(radius, pos, str);
            return this;
        },

        drawCircleBound: function(radius, pos, boundWidth, style) {
            if(radius && pos) {
                var ctx = this.ctx;
                ctx.strokeStyle = "rgb(255,0,0)";
                ctx.beginPath();
                ctx.arc(pos.x, pos.y, radius, 0, Math.PI*2, true);
                ctx.lineWidth = boundWidth ? boundWidth : 2;
                ctx.stroke();
            }
            return this;
        },

        drawLine: function(start, end, style) {
            var ctx = this.ctx;
            style = {color: style && style.color ? style.color : "green", lineWidth: style && style.lineWidth ? style.lineWidth:3};
            ctx.strokeStyle = CanvasLib.colorSet(style.color);
            ctx.beginPath();
            ctx.moveTo(start.x, start.y);
            ctx.lineTo(end.x, end.y);
            ctx.lineWidth = style.lineWidth ? style.lineWidth : 3;
            ctx.stroke();
            return this;
        },

        drawDirectedLine: function(start, end, lineWidth) {
            var ctx = this.ctx;
            this.drawLine(start, end, lineWidth);
            var len = 5;
            var c = CanvasLib.distance(start, end),
                p = {x: end.x - len/c*(end.x-start.x)
                    ,y: end.y - len/c*(end.y-start.y)};

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
        },
        clearAll: function(object) {
            this.clearBuffer();
            if(object) {
                if(typeof object === "object") {
                    this.clearByObject(object);
                } else if(typeof object === "string") {
                    this.clearById(object);
                }
            } else if(this.ctx) {
                this.clear();
            }
            return this;
        },

        getMousePosition: function(e) {
            var bound = this.canvas.getBoundingClientRect();
            return {x: e.clientX - bound.left, y: e.clientY - bound.top};
        }
    });
}();

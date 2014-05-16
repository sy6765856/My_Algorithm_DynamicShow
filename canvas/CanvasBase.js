/**
 * Created with JetBrains WebStorm.
 * User: honsytshen
 * Date: 14-1-2
 * Time: 下午3:23
 * To change this template use File | Settings | File Templates.
 */
DotTest.init('CanvasBase.js')
    .begin();
CanvasBase = function() {
    return extend(Base, {

        initCanvas: function(id, width, height) {
            this.INF = 10000;
            var canvas = document.getElementById(id);
            canvas.width = width ? width : this.width;
            canvas.height = height ? height : this.height;
            this.canvas = canvas;

            if (canvas.getContext) {
                var ctx = canvas.getContext("2d");
                this.ctx = ctx;
            }
            return this;
        },

        imageBufferQUEUE_init: function() {
            this.imageFrame = 0;
            this.imageDataQUEUE = [];
            return this;
        },

        init: function(id, width, height) {
            this.initCanvas(id, width, height);
            Base.init.call(this);
            this.imageBufferQUEUE_init()
                .flag = 0;

//            var that = this;
//            this.canvas.onmousedown = function(e) {
//                var mousePosition = that.getMousePosition(e);
//                that.drawCircle(3, mousePosition)
//                    .save(that.drawCircle, [3, mousePosition])
//                    .flag = (that.flag + 1)%2;
//                if(that.flag) {
//                    that.drawBegin(mousePosition);
//                } else {
//                    that.drawEnd();
//                }
//            };
            return this;
        },


        getImageData: function() {
            var ctx = this.ctx;
            this.imageData = ctx.getImageData(0, 0, this.canvas.width, this.canvas.height);
            return this;
        },

        setImageData: function() {
            var ctx = this.ctx;
            ctx.putImageData(this.imageData, 0, 0);
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

        setColor: function(color) {
            this.colorTmp = this.color;
            this.color = CanvasLib.colorSet(color);
            return this;
        },
        restoreColor: function(color) {
            this.color = this.colorTmp;
            return this;
        },
        setShadow: function() {
            var ctx = this.ctx;
            this.ctxTmp = ctx;
            ctx.shadowColor = CanvasLib.colorSet('black');
            ctx.shadowOffsetX = 1.5;
            ctx.shadowOffsetY = 1.5;
            ctx.shadowBlur = 1;
            return this;
        },
        setOpacity: function(opacity) {
            this.opacityTmp = this.opacity;
            this.opacity = opacity;
            this.setSelfOpacity(opacity);
            return this;
        },
        setSelfOpacity: function(persent) {
            var ctx = this.ctx;
            ctx.globalAlpha = persent;
            return this;
        },
        restoreCtx: function() {
            var ctx = this.ctx;
            ctx.shadowBlur = 0;
            ctx.shadowColor = '';
            return this;
        },
        restoreOpacity: function() {
            this.opacity = isset(this.opacityTmp) ? this.opacityTmp : 0.85;
            this.setSelfOpacity(this.opacity);
            return this;
        },
        drawPolygon: function(vertexs) {
            var ctx = this.ctx,
                n = vertexs.length;
            ctx.fillStyle = isset(this.color) ? this.color : CanvasLib.colorSet("green");
            ctx.moveTo(vertexs[n-1][0], vertexs[n-1][1]);
            ctx.beginPath();
            for(var i = 0; i < n; i++) {
                ctx.lineTo(vertexs[i][0], vertexs[i][1]);
            }
            ctx.closePath();
            ctx.fill();
            return this;
        },
        drawRectangle: function(width, height, pos, str, color) {
            var ctx = this.ctx,
                opacity = isset(this.opacity) ? this.opacity : 0.85;
            color = isset(color) ? color : "green";
            ctx.fillStyle = isset(this.color) ? this.color : CanvasLib.colorSet(color);
            this.setShadow()
                .setSelfOpacity(opacity);
            var ps = {x: pos.x - width, y: pos.y-height},
                radius = 5;
            radius = Math.min(width, height, radius * 2) / 2;

            ctx.beginPath();
            ctx.arc(ps.x + radius, ps.y + radius, radius, Math.PI/2*3, Math.PI, true);
            ctx.lineTo(ps.x, ps.y + height - radius);
            ctx.arc(ps.x + radius, ps.y + height - radius, radius, Math.PI, Math.PI / 2, true);
            ctx.lineTo(ps.x + width - radius, ps.y + height);
            ctx.arc(ps.x + width - radius, ps.y + height - radius, radius, Math.PI / 2, 0, true);
            ctx.lineTo(ps.x + width, ps.y + radius);
            ctx.arc(ps.x + width - radius, ps.y + radius, radius,  0, Math.PI * 3/ 2, true);
            ctx.lineTo(ps.x + radius, ps.y);
            ctx.closePath();
            ctx.fill();
//            ctx.fillRect(ps.x, ps.y, width, height);
            this.restoreCtx();
            if(str){
                this.writeText(str, { x: ps.x, y: ps.y - 10});
            }
            return this;
        },

        drawRectangleBound: function(pos, width, height, color) {
            color = color ? color : 'black';
            var ctx = this.ctx;
            ctx.strokeStyle = CanvasLib.colorSet(color);
            ctx.strokeRect(pos.x, pos.y, width, height);
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
            ctx.strokeStyle = CanvasLib.colorSet("red");
            ctx.strokeRect(pos.x - sideLength, pos.y - sideLength, sideLength, sideLength);
            return this;
        },

        drawBoundedSquare: function(sideLength, pos, number, color) {
            this.drawSquareBound(sideLength, pos)
                .drawSquare(sideLength, pos, number, color);
            return this;
        },

        drawCircle: function(radius, pos, opt) {
            if(pos && pos.x && pos.y && radius) {
                var ctx = this.ctx,
                    color = opt && opt.color ? opt.color : "white";
                ctx.fillStyle = CanvasLib.colorSet(color);
                this.setShadow();
                ctx.beginPath();
                ctx.arc(pos.x, pos.y, radius, 0, Math.PI*2, true);
                ctx.closePath();
                ctx.fill();

                if(opt && opt.str) {
                    this.writeText(opt.str, {x:pos.x - 3, y: pos.y + 3});
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
                ctx.strokeStyle = CanvasLib.colorSet("red");
                ctx.beginPath();
                ctx.arc(pos.x, pos.y, radius, 0, Math.PI*2, true);
                ctx.lineWidth = boundWidth ? boundWidth : 2;
                ctx.stroke();
            }
            return this;
        },

        drawLine: function(start, end, style) {
            var ctx = this.ctx;
            style = {color: style && style.color ? style.color : this.lineColor, lineWidth: style && style.lineWidth ? style.lineWidth:3};
            ctx.strokeStyle = style.color;
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
            var l = 5,
                t = {x: -end.y + start.y, y: end.x - start.x},
                p_x = end.x - l / (CanvasLib.distance(start, end)) * (end.x - start.x),
                p_y = end.y - l / (CanvasLib.distance(start, end)) * (end.y - start.y),
                offX = l / CanvasLib.distance(t, {x:0, y:0})* t.x,
                offY = l / CanvasLib.distance(t, {x:0, y:0})* t.y;
            this.drawLine(end, { x: p_x + offX, y: p_y + offY})
                .drawLine(end, { x: p_x - offX, y: p_y - offY});
            return this;
        },

        setFont: function(color, font) {
            this.fontColotTmp = this.fontColor;
            this.fontColor = color;
            if(isset(font)) {
                this.fontTmp = this.font;
                this.font = font;
            }
            return this;
        },

        restoreFont: function() {
            this.fontColor = this.fontColotTmp;
            this.font = this.fontTmp;
            return this;
        },

        writeText: function(str, pos) {
            var ctx = this.ctx;
            ctx.font = isset(this.font) ? this.font : "15px Arial";
            ctx.shadowOffsetX = 0;
            ctx.shadowOffsetY = 0;
            ctx.fillStyle = isset(this.fontColor)? CanvasLib.colorSet(this.fontColor) : CanvasLib.colorSet('black');
            ctx.fillText(str, pos.x, pos.y);
            return this;
        },



        clear: function() {
            this.ctx.clearRect(0, 0, this.INF, this.INF);
            return this;
        },

        clearByObject: function(ctx) {
            ctx.clearRect(0, 0, this.INF, this.INF);
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
        },

        drawXYCoordinateSystem: function(origin, unitLength) {
            this.drawDirectedLine(origin, { x: origin.x, y: origin.y + unitLength * 8})
                .drawDirectedLine(origin, { x: origin.x + unitLength * 8, y: origin.y})
                .writeText('o', origin)
                .writeText('x', { x: origin.x , y: origin.y + unitLength * 8 + 8})
                .writeText('y', { x: origin.x + unitLength * 8, y: origin.y});
            return this;
        }
    });
}();
DotTest.end()
    .calculate();
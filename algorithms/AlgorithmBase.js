/**
 * Created with JetBrains WebStorm.
 * User: honsytshen
 * Date: 14-1-2
 * Time: 上午9:57
 * To change this template use File | Settings | File Templates.
 */
DotTest.init('AlgorithmBase.js')
    .begin();
AlgorithmBase = function(){
    return extend(Base, {
        INTERVAL: 1000,
        init: function(name, interval) {
            Base.init.call(this);
            this.NAME = name;
            this.FRAME = 0;
            this.QUEUE = [];
            this.BoardQueue = [];
            this.BoardColor = [];
            this.COLOR = [];
            this.step = 0;
//            Scroll.setInterval(interval);
            Log.setSig(this.SIG);
            return this;
        },

        drawBefore: function() {
            this.DRAW_FUNCTION = this.NAME + '.drawing();';
            return this;
        },

        draw: function() {
            this.drawBefore()
                .drawing();
            return this;
        },

        drawAfter: function() {
            return this;
        },
        drawNextFrame: function(frame) {
            Canvas.clearAll('canvas')
                .drawRectangleByNumber(this.QUEUE[frame], this.COLOR[frame]);
            return this;
        },
        next: function() {
            if(this.step < this.QUEUE.length) {
                this.drawNextFrame(this.step);
                Info.permanent()
                    .temporary(this.step);
                this.step++;
            }
            return this;
        },
        drawing: function() {
            if(this.FRAME >= this.QUEUE.length) {
                return this;
            }
            Canvas.clearAll('canvas')
                .drawRectangleByNumber(this.QUEUE[this.FRAME], this.COLOR[this.FRAME]);
            Info.permanent()
                .temporary(this.FRAME);
            this.FRAME++;
            setTimeout.call(null, this.DRAW_FUNCTION, Scroll.interval);
            return this;
        },

        saveCanvasFrame: function() {
            Canvas.saveCanvasFrame();
            return this;
        },

        drawCanvasFrame: function(imageData) {
            Canvas.drawCanvasFrame(imageData);
            return this;
        },

        clearAll: function() {
            Canvas.clearAll();
            return this;
        }
    });
}();
DotTest.end()
    .calculate();
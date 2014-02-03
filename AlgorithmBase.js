/**
 * Created with JetBrains WebStorm.
 * User: honsytshen
 * Date: 14-1-2
 * Time: 上午9:57
 * To change this template use File | Settings | File Templates.
 */
AlgorithmBase = function(){
    return extend(Base, {
        init: function(name, interval) {
            Base.init.call(this);
            this.NAME = name;
            this.FRAME = 0;
            this.QUEUE = [];
            this.INTERVAL = interval ? interval : this.INTERVAL;
            return this;
        },
        drawBefore: function() {
            this.DRAW_FUNCTION = this.NAME + '.drawing();';
            return this;
        },
        draw: function() {
            this.drawBefore()
                .drawing()
                .drawAfter();
            return this;
        },
        drawAfter: function() {
            return this;
        },
        drawing: function() {
            if(this.FRAME >= this.QUEUE.length) {
                return this;
            }
            Canvas.clearAll('canvas')
                .drawRectangleByNumber(this.QUEUE[this.FRAME]);
            this.FRAME++;
            setTimeout.call(null, this.DRAW_FUNCTION, this.INTERVAL ? this.INTERVAL : 500);
            return this;
        }
    });
}();
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
        },
        drawBefore: function() {
            this.DRAW_FUNCTION = this.NAME + '.drawing();';
        },
        draw: function() {
            this.drawBefore();
            this.drawing();
            this.drawAfter();
        },
        drawAfter: function() {

        },
        drawing: function() {
            if(this.FRAME >= this.QUEUE.length) {
                return;
            }
            Canvas.clearAll('canvas');
            Canvas.drawRectangleByNumber(this.QUEUE[this.FRAME]);
            this.FRAME++;
            setTimeout.call(null, this.DRAW_FUNCTION, this.INTERVAL ? this.INTERVAL : 500);
        }
    });
}();
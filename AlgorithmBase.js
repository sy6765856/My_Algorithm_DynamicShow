/**
 * Created with JetBrains WebStorm.
 * User: honsytshen
 * Date: 14-1-2
 * Time: 上午9:57
 * To change this template use File | Settings | File Templates.
 */
AlgorithmBase = function(){
    return {
        init: function(self) {
            self.name = 'base';
            return self;
        }(this.parent),

        draw: function() {
            if(FRAME >= QUEUE.length) {
                return;
            }
            Canvas.clearById('canvas');
            Canvas.drawRectangleByNumber(QUEUE[FRAME]);
            FRAME++;
            setTimeout('Sort.draw()', INTERVAL ? INTERVAL : 500);
        }
    }
}();
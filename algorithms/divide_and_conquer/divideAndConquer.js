/**
 * Created with JetBrains WebStorm.
 * User: sy6765856
 * Date: 14-3-8
 * Time: 下午5:06
 * To change this template use File | Settings | File Templates.
 */
DotTest.init('divideAndConquer.js')
    .begin();
DivideAndConquer = function() {
    return extend(AlgorithmBase, {
        drawing: function() {
            if(this.FRAME >= this.BoardQueue.length) {
                return this;
            }
            Canvas.clearAll('canvas')
                .drawBoard(this.BoardQueue[this.FRAME], this.BoardColor[this.FRAME], BoardCover.height, BoardCover.width);
            this.FRAME++;
            setTimeout.call(null, this.DRAW_FUNCTION, Scroll.interval);
            return this;
        }
    });
}();
DotTest.end()
    .calculate();
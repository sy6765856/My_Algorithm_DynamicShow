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
        drawNextFrame: function() {
            if(this.step < this.BoardQueue.length) {
                Canvas.clearAll('canvas')
                    .drawBoard(this.BoardQueue[this.step], this.BoardColor[this.step], BoardCover.height, BoardCover.width);
                this.step++;
            }
            return this;
        },

        drawing: function() {
            if(this.FRAME >= this.BoardQueue.length) {
                return this;
            }
            Canvas.clearAll('canvas')
                .drawBoard(this.BoardQueue[this.FRAME], this.BoardColor[this.FRAME], BoardCover.height, BoardCover.width);
            Info.permanent()
                .temporary(this.FRAME);
            this.FRAME++;
            setTimeout.call(null, this.DRAW_FUNCTION, Scroll.interval);
            return this;
        }
    });
}();
DotTest.end()
    .calculate();
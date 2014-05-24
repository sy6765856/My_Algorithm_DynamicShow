/**
 * Created with JetBrains WebStorm.
 * User: sy6765856
 * Date: 14-1-20
 * Time: 下午9:36
 * To change this template use File | Settings | File Templates.
 */
DotTest.init('dynamic.js')
    .begin();
Dynamic = function() {
    return extend(AlgorithmBase, {
        init: function(name) {
            AlgorithmBase.init(name, Scroll.interval);
            this.queue = [];
            this.Table = Table.init();
//            this.change();
            return this;
        },

        drawQueue: function() {
            this.Table.drawArrayContent(this.queue, this.queue.length)
                .drawTableBody(1, this.queue.length, 0, 0);
            return this;
        },

        push: function(val) {
            this.queue.push(val);
            this.drawQueue();
            return this;
        },

        pop: function() {
            this.queue.pop();
            this.drawQueue();
            return this;
        },
        saveDpArray: function(info) {
            Table.drawTable(this.dp, this.str1.length, this.str2.length);
            this.saveCanvasFrame()
                .addTemp(info)
                .clearAll();
            return this;
        },
        addTemp: function(info) {
            Info.addTemp(info);
            return this;
        },
        drawNextFrame: function() {
            if(this.step < Canvas.imageDataQUEUE.length) {
                Canvas.clearAll();
                this.drawCanvasFrame(Canvas.imageDataQUEUE[this.step]);
                Info.permanent();
                this.step++;
            } else {
                this.step = 0;
            }
            return this;
        }

    });
}();
DotTest.end()
    .calculate();
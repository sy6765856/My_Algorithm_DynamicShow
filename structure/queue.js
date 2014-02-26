/**
 * Created with JetBrains WebStorm.
 * User: sy6765856
 * Date: 14-2-24
 * Time: 下午6:10
 * To change this template use File | Settings | File Templates.
 */
Queue = function() {
    $('#queue').click(FunctionTemplate.startButton('Queue'));
    $('#queue').click(FunctionTemplate.addSingleButton('Queue'));
    $('#queue').click(FunctionTemplate.resetButton('Queue'));
    return extend(AlgorithmBase, {
        queue: [],
        init: function() {
            return this;
        },
        reset: function() {
            this.queue = [];
            return this;
        },
        push: function(v) {
            this.queue.push(v);
            this.drawQueue();
            return this;
        },
        shift: function() {
            this.queue.shift();
            this.drawQueue();
            return this;
        },
        drawQueue: function() {
            Table.drawArray(this.stack, this.stack.length);
            return this;
        }
    });
}();
/**
 * Created with JetBrains WebStorm.
 * User: sy6765856
 * Date: 14-2-10
 * Time: 上午12:02
 * To change this template use File | Settings | File Templates.
 */
Stack = function() {
    $('#stack').click(FunctionTemplate.startButton('Stack'));
    $('#stack').click(FunctionTemplate.addSingleButton('Stack'));
    $('#stack').click(FunctionTemplate.resetButton('Stack'));
    return extend(AlgorithmBase, {
        stack: [],
        init: function() {
            return this;
        },
        reset: function() {
            this.stack = [];
            return this;
        },
        push: function(v) {
            this.stack.push(v);
            this.drawStack();
            return this;
        },
        pop: function() {
            this.stack.pop();
            this.drawStack();
            return this;
        },
        drawStack: function() {
            Table.drawArray(this.stack, this.stack.length);
            return this;
        }
    });
}();
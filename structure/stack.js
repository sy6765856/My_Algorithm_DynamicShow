/**
 * Created with JetBrains WebStorm.
 * User: sy6765856
 * Date: 14-2-10
 * Time: 上午12:02
 * To change this template use File | Settings | File Templates.
 */
Stack = function() {
    $('#stack').click(FunctionTemplate.clearButton('start'));
    $('#stack').click(FunctionTemplate.clearButton('random'));
    $('#stack').click(FunctionTemplate.addSingleButton('Stack', '入栈'));
    $('#stack').click(FunctionTemplate.resetButton('Stack'));
    $('#stack').click(FunctionTemplate.popButton('Stack', '出栈'));
    Table.init();
    return extend(AlgorithmBase, {
        stack: [],
        init: function() {
            this.stack = [];
            this.drawStack();
            return this;
        },
        reset: function() {
            this.stack = [];
            this.clearAll();
            return this;
        },
        add: function(v) {
            this.push(v);
            $("#input1").val('').focus();
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
            this.clearAll();
            Table.drawStackAndQueue(this.stack, this.stack.length, 'stack');
            return this;
        }
    });
}();
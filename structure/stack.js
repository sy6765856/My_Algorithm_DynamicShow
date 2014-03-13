/**
 * Created with JetBrains WebStorm.
 * User: sy6765856
 * Date: 14-2-10
 * Time: 上午12:02
 * To change this template use File | Settings | File Templates.
 */
Stack = function() {
    app.initToolsView('stack')
        .singleAddButtonInit('入栈')
        .resetButtonInit()
        .popButtonInit('出栈')
        .inputOneInit();
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
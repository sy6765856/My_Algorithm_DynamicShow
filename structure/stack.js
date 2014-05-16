/**
 * Created with JetBrains WebStorm.
 * User: sy6765856
 * Date: 14-2-10
 * Time: 上午12:02
 * To change this template use File | Settings | File Templates.
 */
DotTest.init('stack.js')
    .begin();
Stack = function() {
    app.initToolsView('stack')
        .singleAddButtonInit('入栈')
        .resetButtonInit()
        .popButtonInit('出栈')
        .inputOneInit('入栈值')
        .description('栈是一种先进后出的基本数据结构，图中top即为栈顶。');
    Table.init();
    return extend(AlgorithmBase, {
        SIG: 'Stack',
        stack: [],
        init: function() {
            Info.init()
                .setPermanent('栈');
            this.stack = [];
            this.drawStack();
            return this;
        },
        reset: function() {
            this.stack = [];
            Info.setPermanent('栈清空');
            this.clearAll()
                .drawStack();
            return this;
        },
        add: function(v) {
            if(!v) {
                alert('请输入进栈的元素！');
                return this;
            }
            this.push(v);
            $("#input1").val('').focus();
            return this;
        },
        push: function(v) {
            this.stack.push(v);
            Info.setPermanent(v + '压人栈中');
            this.drawStack();
            return this;
        },
        pop: function() {
            if(this.stack.length) {
                Info.setPermanent(this.stack[this.stack.length - 1] + '出栈');
            } else {
                Info.setPermanent('栈已空');
            }
            this.stack.pop();
            this.drawStack();
            return this;
        },
        drawStack: function() {
            this.clearAll();
            Table.drawStackAndQueue(this.stack, this.stack.length, 'stack');
            Info.permanent();
            return this;
        }
    });
}();
DotTest.end()
    .calculate();
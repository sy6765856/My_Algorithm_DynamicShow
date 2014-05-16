/**
 * Created with JetBrains WebStorm.
 * User: sy6765856
 * Date: 14-2-24
 * Time: 下午6:10
 * To change this template use File | Settings | File Templates.
 */
DotTest.init('queue.js')
    .begin();
Queue = function() {
    app.initToolsView('queue')
        .singleAddButtonInit('进队列')
        .popButtonInit('出队列')
        .resetButtonInit()
        .inputOneInit('进队值')
        .description('队列是一种先进先出的基本数据结构，图中front即为队首。');

    return extend(AlgorithmBase, {
        SIG: 'Queue',
        queue: [],
        init: function() {
            Info.init()
                .setPermanent('队列');
            this.queue = [];
            this.drawQueue();
            return this;
        },
        reset: function() {
            this.queue = [];
            Info.setPermanent('队列清空');
            this.clearAll()
                .drawQueue();
            return this;
        },
        add: function(v) {
            if(!v) {
                alert('请输入进队列元素！');
                return this;
            }
            this.push(v);
            $("#input1").val('').focus();
            return this;
        },
        push: function(v) {                          z
            this.queue.push(v);
            Info.setPermanent(v + '进入队列');
            this.drawQueue();
            return this;
        },
        pop: function() {
            if(this.queue.length) {
                Info.setPermanent(this.queue[0] + '出队列');
            } else {
                Info.setPermanent('队列已空');
            }
            this.queue.shift();
            this.drawQueue();
            return this;
        },
        drawQueue: function() {
            this.clearAll();
            Info.permanent();
            Table.drawStackAndQueue(this.queue, this.queue.length, 'queue');
            return this;
        }
    });
}();
$('#queue').click(Queue.init);
DotTest.end()
    .calculate();
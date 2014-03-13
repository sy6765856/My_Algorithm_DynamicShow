/**
 * Created with JetBrains WebStorm.
 * User: sy6765856
 * Date: 14-2-24
 * Time: 下午6:10
 * To change this template use File | Settings | File Templates.
 */
Queue = function() {
    app.initToolsView('queue')
        .singleAddButtonInit('进队列')
        .popButtonInit('出队列')
        .resetButtonInit()
        .inputOneInit();

    return extend(AlgorithmBase, {
        queue: [],
        init: function() {
            return this;
        },
        reset: function() {
            this.queue = [];
            this.clearAll();
            return this;
        },
        add: function(v) {
            this.push(v);
            $("#input1").val('').focus();
            return this;
        },
        push: function(v) {
            this.queue.push(v);
            this.drawQueue();
            return this;
        },
        pop: function() {
            this.queue.shift();
            this.drawQueue();
            return this;
        },
        drawQueue: function() {
            this.clearAll();
            Table.drawStackAndQueue(this.queue, this.queue.length, 'queue');
            return this;
        }
    });
}();
$('#queue').click(Queue.init);
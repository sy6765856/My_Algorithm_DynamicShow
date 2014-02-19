/**
 * Created with JetBrains WebStorm.
 * User: sy6765856
 * Date: 14-1-20
 * Time: 下午9:36
 * To change this template use File | Settings | File Templates.
 */
Dynamic = function() {
    return extend(AlgorithmBase, {
        init: function(name) {
            AlgorithmBase.init(name, 200);
            this.queue = [];
            this.Table = Table.init();
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
        }

    });
}();

/**
 * Created with JetBrains WebStorm.
 * User: sy6765856
 * Date: 14-2-21
 * Time: 下午6:44
 * To change this template use File | Settings | File Templates.
 */
OrderSort = function() {
    $('#orderSort').click(FunctionTemplate.startButton('OrderSort', '开始动态演示'));
    $('#orderSort').click(FunctionTemplate.addSingleButton('OrderSort', '输入'));
    $('#orderSort').click(FunctionTemplate.resetButton('OrderSort'));
    $('#orderSort').click(FunctionTemplate.randomButton('OrderSort'));
    $('#orderSort').click(FunctionTemplate.clearButton('pop'));
    Canvas.init('canvas');
    return extend(Sort, {
        run: function(id) {
            this.orderSort();
            return this;
        },
        orderSort: function(CanvasObject){
            var array = this.array;
            this.init('OrderSort', 500)
                .QUEUE.push(array.slice(0));

            len = array.length;
            for(var i = 0; i<len; i++) {
                for(var j = i+1; j<len; j++) {
                    if(array[i] > array[j]) {
                        var tmp = array[i]; array[i] = array[j]; array[j] = tmp;
                    }
                }
                this.QUEUE.push(array.slice(0));
            }
            this.draw();
            return this;
        }
    });
}();
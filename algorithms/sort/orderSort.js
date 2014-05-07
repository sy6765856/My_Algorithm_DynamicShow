/**
 * Created with JetBrains WebStorm.
 * User: sy6765856
 * Date: 14-2-21
 * Time: 下午6:44
 * To change this template use File | Settings | File Templates.
 */
DotTest.init('orderSort.js')
    .begin();
OrderSort = function() {
    app.initToolsView('orderSort')
        .startButtonInit('开始动态演示')
        .resetButtonInit()
        .randomButtonInit()
        .singleAddButtonInit('输入')
        .inputOneInit('请输入一个数')
        .description('这里会演示顺序排序过程中数字序列的变化过程');
    Canvas.init('canvas');
    return extend(Sort, {
        SIG: 'OrderSort',
        run: function(id) {
            this.orderSort();
            Log.success();
            return this;
        },
        orderSort: function(CanvasObject){
            var array = this.array;
            this.init('OrderSort', Scroll.interval)
                .QUEUE.push(array.slice(0));

            len = array.length;
            for(var i = 0; i<len; i++) {
                for(var j = i+1; j<len; j++) {
                    var color = [];
                    color[i] = "red";
                    color[j] = "yellow";
                    if(array[i] > array[j]) {
                        var tmp = array[i]; array[i] = array[j]; array[j] = tmp;
                    }
                    this.QUEUE.push(array.slice(0));
                    this.COLOR.push(color);
                }
            }
            this.draw();
            return this;
        }
    });
}();
DotTest.end()
    .calculate();
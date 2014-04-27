/**
 * Created with JetBrains WebStorm.
 * User: sy6765856
 * Date: 14-3-3
 * Time: 下午4:11
 * To change this template use File | Settings | File Templates.
 */
BubbleSort = function() {
    app.initToolsView('bubbleSort')
        .startButtonInit('开始动态演示')
        .singleAddButtonInit('输入')
        .resetButtonInit()
        .randomButtonInit()
        .inputOneInit('请输入一个数')
        .description('这里会演示冒泡排序过程中数字序列的变化过程');
    return extend(Sort, {
        run: function(id) {
            this.bubble_Sort(Canvas.init(id));
            return this;
        },
        bubble_Sort: function(CanvasObject){
            var array = this.array;
            this.init('BubbleSort', 1000)
                .QUEUE.push(array.slice(0));

            this.bubbleSort(array, 0, array.length)
                .draw();

            return this;
        },
        bubbleSort: function(array, begin, end) {
            var flag = end - 1,
                k, tmp;
            while(flag > begin) {
                k = flag;
                flag = begin;
                for(var j = begin; j < k; j++) {
                    if(array[j] > array[j+1]) {
                        flag = j;
                        tmp = array[j];
                        array[j] = array[j+1];
                        array[j+1] = tmp;
                    }
                    var color = [];
                    color[j] = "red";
                    color[j + 1] = "yellow";
                    this.QUEUE.push(array.slice(0));
                    this.COLOR.push(color);
                }
            }
            return this;
        }
    });
}();
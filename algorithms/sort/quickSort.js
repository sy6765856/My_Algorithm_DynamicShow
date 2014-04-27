/**
 * Created with JetBrains WebStorm.
 * User: sy6765856
 * Date: 14-3-25
 * Time: 下午4:37
 * To change this template use File | Settings | File Templates.
 */
QuickSort = function() {
    app.initToolsView('quickSort')
        .startButtonInit('开始动态演示')
        .singleAddButtonInit('输入')
        .resetButtonInit()
        .randomButtonInit()
        .inputOneInit('请输入一个数')
        .description('这里会演示快速排序过程中数字序列的变化过程');
    return extend(Sort, {
        run: function(id) {
            this.quick_Sort(Canvas.init(id));
            return this;
        },
        quick_Sort: function(CanvasObject) {
            var array = this.array,
                color = [];
            this.init('QuickSort', 2000)
                .QUEUE.push(array.slice(0));
            this.COLOR.push(color);
            this.quickSort(array, 0, array.length - 1)
                .draw();
            return this;
        },
        quickSort: function(array, begin, end) {
            if(begin >= end) {
                return this;
            }
            var mid = Math.floor((begin + end)/ 2),
                left = [],
                right = [],
                tmp = array[mid],
                color =[];

            for(var i = begin; i <= end; i++) {
                if(array[i] < array[mid]) {
                    left.push(array[i]);
                } else if(array[i] > array[mid]){
                    right.push(array[i]);
                }
                color[i] = "yellow";
            }
            left.push(tmp);
            var leftLength = left.length + begin;
            for(var i = begin; i < leftLength; i++) {
                array[i] = left[i - begin];
            }
            color[leftLength - 1] = "red";
            for(var i = leftLength; i <= end; i++) {
                array[i] = right[i - leftLength];
            }
            this.QUEUE.push(array.slice(0));
            this.COLOR.push(color);

            this.quickSort(array, begin, leftLength - 2)
                .quickSort(array, leftLength, end);
            return this;
        }
    })
}();
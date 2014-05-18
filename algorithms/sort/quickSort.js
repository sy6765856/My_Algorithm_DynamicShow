/**
 * Created with JetBrains WebStorm.
 * User: sy6765856
 * Date: 14-3-25
 * Time: 下午4:37
 * To change this template use File | Settings | File Templates.
 */
DotTest.init('quickSort.js')
    .begin();
QuickSort = function() {
    app.initToolsView('quickSort')
        .startButtonInit('开始动态演示')
        .singleAddButtonInit('输入')
        .resetButtonInit()
        .randomButtonInit()
        .inputOneInit('请输入一个数')
        .description('这里会演示快速排序过程中数字序列的变化过程');
    return extend(Sort, {
        SIG: 'QuickSort',
        run: function(id) {
            Info.init()
                .setPermanent('快速排序');
            this.quick_Sort(Canvas.init(id));
            Log.success();
            return this;
        },
        quick_Sort: function(CanvasObject) {
            var array = this.array,
                color = [];
            this.init('QuickSort', Scroll.interval)
                .addInfo('正在对于区间' + '0' + '-' + (array.length - 1) + '进行排序')
                .QUEUE.push(array.slice(0));
            this.COLOR.push(color);
            ComplexityAnalysis.init(this.SIG, array.length);
            this.quickSort(array, 0, array.length - 1)
                .draw();
            ComplexityAnalysis.compare();
            console.log(ComplexityAnalysis.complexityName);
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
            ComplexityAnalysis.addCalculation(end - begin + 1);
            left.push(tmp);
            var leftLength = left.length + begin;
            for(var i = begin; i < leftLength; i++) {
                array[i] = left[i - begin];
            }
            color[leftLength - 1] = "red";
            for(var i = leftLength; i <= end; i++) {
                array[i] = right[i - leftLength];
            }
            this.addInfo('对于区间' + begin + '-' + end + '进行排序,选定' + array[leftLength - 1] + '为固定数')
                .QUEUE.push(array.slice(0));
            this.COLOR.push(color);

            this.quickSort(array, begin, leftLength - 2)
                .quickSort(array, leftLength, end);
            return this;
        }
    })
}();
DotTest.end()
    .calculate();
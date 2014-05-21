/**
 * Created with JetBrains WebStorm.
 * User: sy6765856
 * Date: 14-3-3
 * Time: 下午4:11
 * To change this template use File | Settings | File Templates.
 */
DotTest.init('bubbleSort.js')
    .begin();
BubbleSort = function() {
    app.initToolsView('bubbleSort')
        .startButtonInit('开始动态演示')
        .singleAddButtonInit('输入')
        .resetButtonInit()
        .randomButtonInit()
        .inputOneInit('请输入一个数', '请输入要加入排序序列的数')
        .next()
        .description('这里会演示冒泡排序过程中数字序列的变化过程');
    Canvas.init('canvas');
    return extend(Sort, {
        SIG: 'BubbleSort',
        run_init: function(id) {
            Info.init()
                .setPermanent('冒泡排序');
            this.bubble_Sort();
            Log.success();
            return this;
        },
        run: function() {
            this.run_init()
                .draw();
            return this;
        },
        bubble_Sort: function(){
            var array = this.array;
            this.init('BubbleSort', Scroll.interval)
                .QUEUE.push(array.slice(0));

            ComplexityAnalysis.init(this.SIG, array.length);
            this.bubbleSort(array, 0, array.length);
            ComplexityAnalysis.compare();
            console.log(ComplexityAnalysis.complexityName);
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
                        ComplexityAnalysis.addCalculation(3);
                    }
                    var color = [];
                    color[j] = "red";
                    color[j + 1] = "yellow";
                    this.addInfo('正在比较第' + j + '和' + (j+1) + '的大小')
                        .QUEUE.push(array.slice(0));
                    this.COLOR.push(color);
                }
            }
            return this;
        }
    });
}();
DotTest.end()
    .calculate();
/**
 * Created with JetBrains WebStorm.
 * User: sy6765856
 * Date: 14-2-21
 * Time: 下午6:44
 * To change this template use File | Settings | File Templates.
 */
MergeSort = function() {
    app.initToolsView('mergeSort')
        .startButtonInit('开始动态演示')
        .singleAddButtonInit('输入')
        .resetButtonInit()
        .randomButtonInit()
        .inputOneInit('请输入一个数')
        .description('这里会演示归并排序过程中数字序列的变化过程');
    return extend(Sort, {
        run: function(id) {
            this.merge_Sort(Canvas.init(id));
            return this;
        },
        merge_Sort: function(CanvasObject){
            var array = this.array;
            this.init('MergeSort', Scroll.interval)
                .QUEUE.push(array.slice(0));

            this.mergeSort(array, 0, array.length-1)
                .draw();

            return this;
        },
        mergeSort: function(array, begin, end){
            if(begin >= end) {
                return this;
            }
            var mid = Math.floor((begin + end)/2);
            this.mergeSort(array, begin, mid)
                .mergeSort(array, mid+1, end);
            var i = begin,j = mid + 1,st = [];
            while(i <= mid && j <= end){
                if(array[i] <= array[j]){
                    st = st.concat(array[i]);
                    i++;
                } else {
                    st = st.concat(array[j]);
                    j++;
                }
            }
            if(i <= mid) {
                st = st.concat(array.slice(i, mid+1));
            } else if(j <= end) {
                st = st.concat(array.slice(j, end+1));
            }

            var color = [];
            for(var pos = begin; pos <= end; pos++){
                array[pos] = st[pos - begin];
                color[pos] = "yellow";
            }
            this.QUEUE.push(array.slice(0));
            this.COLOR.push(color);
            return this;
        }
    });
}();
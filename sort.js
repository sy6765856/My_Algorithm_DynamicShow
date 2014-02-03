/**
 * Created with JetBrains WebStorm.
 * User: sy6765856
 * Date: 14-1-20
 * Time: 下午5:08
 * To change this template use File | Settings | File Templates.
 */
Sort = function() {
    return extend(AlgorithmBase, {
        run: function(id){
            this.merge_Sort(Canvas.init(id), this.produceRandomArray(10));
        },
        produceRandomArray: function(len){
            var ret = [];
            for(var i = 0; i<len; i++){
                ret[i] = Math.random()*100;
            }
            return ret;
        },

        orderSort: function(CanvasObject, array){
            this.init('Sort', 500)
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
        },

        merge_Sort: function(CanvasObject, array){
            this.init('Sort', 100)
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
            while(i<=mid && j<=end){
                if(array[i] <= array[j]){
                    st = st.concat(array[i]);
                    i++;
                } else {
                    st = st.concat(array[j]);
                    j++;
                }
            }
            if(i<=mid) {
                st = st.concat(array.slice(i, mid+1));
            } else if(j<=end) {
                st = st.concat(array.slice(j,end+1));
            }

            for(var pos = begin; pos<=end; pos++){
                array[pos] = st[pos - begin];
            }
            this.QUEUE.push(array.slice(0));
            return this;
        }
    });
}();
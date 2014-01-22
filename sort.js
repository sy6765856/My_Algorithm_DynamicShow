/**
 * Created with JetBrains WebStorm.
 * User: sy6765856
 * Date: 14-1-20
 * Time: 下午5:08
 * To change this template use File | Settings | File Templates.
 */
Sort = function() {
    return extend(AlgorithmBase, {
        init: function(interval) {
            FRAME = 0;
            QUEUE = [];
            INTERVAL = interval ? interval : INTERVAL;
        },
        run: function(id){
            this.orderSort(Canvas.init(id), this.produceRandomArray(20));
        },
        produceRandomArray: function(len){
            var ret = [];
            for(var i = 0; i<len; i++){
                ret[i] = Math.random()*100;
            }
            return ret;
        },
        orderSort: function(CanvasObject, array){
            this.init(100);
            QUEUE.push(array.slice(0));
            len = array.length;
            for(var i = 0; i<len; i++) {
                for(var j = i+1; j<len; j++) {
                    if(array[i] > array[j]) {
                        var tmp = array[i]; array[i] = array[j]; array[j] = tmp;
                    }
                }
                QUEUE.push(array.slice(0));
            }
            this.draw();
            return this;
        }
    });
}();
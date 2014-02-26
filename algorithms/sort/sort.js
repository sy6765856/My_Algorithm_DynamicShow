/**
 * Created with JetBrains WebStorm.
 * User: sy6765856
 * Date: 14-1-20
 * Time: 下午5:08
 * To change this template use File | Settings | File Templates.
 */
Sort = function() {
    return extend(AlgorithmBase, {
        array: [],
        run: function(id){
            return this;
        },
        produceRandomArray: function(len){
            this.array = [];
            for(var i = 0; i < len; i++){
                this.array[i] = Math.random()*100;
            }
            return this;
        },
        reset: function() {
            this.array = [];
            this.clearAll();
            return this;
        },
        add: function(v) {
            if(warnNumber(v, '输入应该是数字！')) {
                return this;
            }
            this.array.push(Number(v));
            this.drawSortArray();
            return this;
        },
        drawSortArray: function() {
            this.clearAll();
            Table.drawStackAndQueue(this.array, this.array.length);
            return this;
        }
    });
}();
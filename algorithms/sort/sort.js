/**
 * Created with JetBrains WebStorm.
 * User: sy6765856
 * Date: 14-1-20
 * Time: 下午5:08
 * To change this template use File | Settings | File Templates.
 */
DotTest.init('sort.js')
    .begin();
Sort = function() {
    return extend(AlgorithmBase, {
        array: [],
        run: function(id){
            return this;
        },
        random: function() {
            this.produceRandomArray(10);
            $('#info').html('成功生成随机序列');
            setTimeout("$('#info').html('');", '1600');
            return this;
        },
        produceRandomArray: function(len){
            this.array = [];
            for(var i = 0; i < len; i++){
                this.array[i] = Math.round(Math.random()*10000)/100;
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
DotTest.end()
    .calculate();
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
        SIG: 'Sort',
        array: [],
        run: function(id){
            return this;
        },
        random: function() {
            this.produceRandomArray(10);
            Info.setInfo('成功生成随机序列');
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
            this.step = 0;
            this.clearAll()
                .change();
            return this;
        },
        add: function(v) {
            if(warnNumber(v, '输入应该是数字！')) {
                return this;
            }
            this.array.push(Number(v));
            this.drawSortArray();
            this.change();
            return this;
        },
        drawSortArray: function() {
            this.clearAll();
            Table.drawStackAndQueue(this.array, this.array.length);
            return this;
        },
        addInfo: function(info) {
            Info.addTemp(info);
            return this;
        }
    });
}();
DotTest.end()
    .calculate();
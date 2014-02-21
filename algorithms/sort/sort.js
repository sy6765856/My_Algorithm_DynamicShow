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
            return this;
        },
        produceRandomArray: function(len){
            var ret = [];
            for(var i = 0; i < len; i++){
                ret[i] = Math.random()*100;
            }
            return ret;
        }
    });
}();
/**
 * Created with JetBrains WebStorm.
 * User: sy6765856
 * Date: 14-2-3
 * Time: 下午9:31
 * To change this template use File | Settings | File Templates.
 */
Tree = function() {
    return extend(AlgorithmBase, {
        init: function() {
            return this;
        },
        addFatherChildRelation: function(father, child) {
            return this;
        },
        swapNodes: function(A, B) {
            this.step = this.step ? this.step : 20;
            return this;
        }
    });
}();
/**
 * Created with JetBrains WebStorm.
 * User: sy6765856
 * Date: 14-2-3
 * Time: 下午9:31
 * To change this template use File | Settings | File Templates.
 */
Tree = function() {
    return extend(Graph, {
        generateTree: function() {
            this.generateNodes()
                .generateTreeEdges();
            return this;
        },
        generateTreeEdges: function() {
            this.addFatherChildRelation(1,3,1)
                .addFatherChildRelation(1,4,1);
            return this;
        },
        addFatherChildRelation: function(father, child, len) {
            this.addEdge(father, child, len, 'black');
            return this;
        },
        swapNodes: function(A, B) {
            this.step = this.step ? this.step : 20;
            return this;
        }
    });
}();
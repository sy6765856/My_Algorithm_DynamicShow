/**
 * Created with JetBrains WebStorm.
 * User: sy6765856
 * Date: 14-2-3
 * Time: 下午9:31
 * To change this template use File | Settings | File Templates.
 */
Tree = function() {
    return extend(Graph, {
        father: [],
        node: [],
        generateTree: function() {
            this.generateNodes()
                .resetGraphMatrix()
                .generateTreeEdges();
            return this;
        },
        generateTreeEdges: function() {
            this.addFatherChildRelation(1,3,1)
                .addFatherChildRelation(1,4,1);
            return this;
        },
        addFatherChildRelation: function(father, child, len) {
            this.addEdge(father, child, len);
            return this;
        },
        draw_Tree: function() {
            return this;
        },
        drawTree: function() {

            return this;
        },
        swapNodes: function(x, y) {
            var a = this.nodes[x],
                b = this.nodes[y];
            if(a.label && b.label) {
                var label = a.label;
                a.label = b.label;
                b.label = label;
            }
            if(a.value && b.value) {
                var value = a.value;
                a.value = b.value;
                b.value = value;
            }
            return this;
        },
        saveTree: function(highlightNodes) {
            this.drawTree()
                .saveCanvasFrame()
                .clearAll();
            return this;
        }
    });
}();
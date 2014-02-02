/**
 * Created with JetBrains WebStorm.
 * User: sy6765856
 * Date: 14-1-23
 * Time: 下午3:47
 * To change this template use File | Settings | File Templates.
 */
Graph = function() {
    return extend(AlgorithmBase, {
        init: function() {
            AlgorithmBase.init('Graph', 200);
            this.edges = [];
            this.nodes = [];
            this.edgesNum = 1;
            this.first = [];
            this.nxt = [];
        },
        addNodes: function(node) {
            this.nodes.push(node);
        },
        addEdge: function(a, b, v) {
            this.edges[this.edgesNum] = [a, b, v];
            this.nxt[this.edgesNum] = this.first[a]? this.first[a] : 0;
            this.first[a] = this.edgesNum++;
        },

        drawGragh: function(nodes, edges) {
            if(edges) {
                for(var key in edges) {
                    var edge = edges[key],
                        s = edge[0],
                        e = edge[1];
                    Canvas.linkTwoCircle(nodes[s], nodes[e]);
//                    this.highLightEdge(nodes[s], nodes[e]);
                    this.save(Canvas.linkTwoCircle, [nodes[s], nodes[e]]);
                }
            }
            if(nodes) {
                for(var key in nodes) {
                    var node = nodes[key];
                    Canvas.drawCircle(node.r, node.o);
                    this.save(Canvas.drawCircle, [node.r, node.o]);
                }
            }
//            this.restore(Canvas);
            return this;
        },

        highLightEdge: function(A, B) {
            Canvas.linkTwoCircle(A, B, {style: {color: "red", lineWidth: 4}});
            Canvas.linkTwoCircle(A, B, {style: {color: "green", lineWidth: 2}});
        },
        highLightNode: function(node) {
            Canvas.drawBoundedCircle(node.r, node.o);
        },

        swapNodes: function(A, B) {
            this.step = this.step ? this.step : 20;

        }
    });
}();

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
            return this;
        },
        addNodes: function(node) {
            this.nodes.push(node);
            return this;
        },
        addEdge: function(a, b, v) {
            this.addDirectedEdge(a, b, v)
                .addDirectedEdge(b, a, v);
            return this;
        },
        addDirectedEdge: function(a, b, v) {
            this.edges[this.edgesNum] = [a, b, v];
            this.nxt[this.edgesNum] = this.first[a]? this.first[a] : 0;
            this.first[a] = this.edgesNum++;
            return this;
        },

        drawGragh: function(nodes, edges) {
            if(edges) {
                for(var key in edges) {
                    var edge = edges[key],
                        s = edge[0],
                        e = edge[1];
                    Canvas.linkTwoCircle(nodes[s], nodes[e], {str: edge[2]});
//                    this.highLightEdge(nodes[s], nodes[e]);
                    this.save(Canvas.linkTwoCircle, [nodes[s], nodes[e]]);
                }
            }
            if(nodes) {
                for(var key in nodes) {
                    var node = nodes[key];
                    Canvas.drawCircle(node.r, node.o, key);
                    this.save(Canvas.drawCircle, [node.r, node.o, key]);
                }
            }
//            Canvas.clearAll();
//            this.restore(Canvas);
            return this;
        },

        highLightEdge: function(A, B) {
            Canvas.linkTwoCircle(A, B, {style: {color: "red", lineWidth: 4}})
                .linkTwoCircle(A, B, {style: {color: "green", lineWidth: 2}});
        },
        highLightNode: function(node) {
            Canvas.drawBoundedCircle(node.r, node.o);
        },

        swapNodes: function(A, B) {
            this.step = this.step ? this.step : 20;

        }
    });
}();

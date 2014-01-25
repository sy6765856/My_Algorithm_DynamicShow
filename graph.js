/**
 * Created with JetBrains WebStorm.
 * User: sy6765856
 * Date: 14-1-23
 * Time: 下午3:47
 * To change this template use File | Settings | File Templates.
 */
Graph = function() {
    return extend(AlgorithmBase, {
        edges: [],
        nodes: [],
        init: function() {
            Graph.edges = [];
            Graph.nodes = [];
        },
        addNodes: function(node) {
            Graph.nodes.push(node);
        },
        addEdge: function(a, b) {
            Graph.edges.push([a, b]);
        },

        drawGragh: function(nodes, edges) {
            if(nodes) {
                for(var key in nodes) {
                    var node = nodes[key];
                    Canvas.drawCircle(node.r, node.o);
                }
            }
            if(edges) {
                for(var key in edges) {
                    var edge = edges[key],
                        s = edge[0],
                        e = edge[1];
                    Canvas.linkTwoCircle(nodes[s], nodes[e]);
                }
            }
            return this;
        },

        swapNodes: function(A, B) {
            step = step ? step : 20;

        }
    });
}();

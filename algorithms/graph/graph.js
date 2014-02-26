/**
 * Created with JetBrains WebStorm.
 * User: sy6765856
 * Date: 14-1-23
 * Time: 下午3:47
 * To change this template use File | Settings | File Templates.
 */
Graph = function() {
    return extend(AlgorithmBase, {

        init: function(name) {
            AlgorithmBase.init(name, 200);
            this.INF = 1000000;
            this.edges = [];
            this.nodes = [];
            this.edgesNum = 1;
            this.first = [];
            this.nxt = [];
            this.GraphMatrix = [];
            this.array = [];
            return this;
        },

        addNodes: function(node) {
            node.r = 10;
            this.nodes.push(node);
            return this;
        },

        addEdge: function(a, b, v, c) {
            this.addDirectedEdge(a, b, v, c)
                .addDirectedEdge(b, a, v, c);
            return this;
        },

        addDirectedEdge: function(a, b, v, c) {
            this.edges[this.edgesNum] = [a, b, v, c];
            this.nxt[this.edgesNum] = this.first[a]? this.first[a] : 0;
            this.first[a] = this.edgesNum++;
            this.GraphMatrix[a][b] = min(this.GraphMatrix[a][b], v);
            return this;
        },

        generateNodes: function() {
            this.addNodes({o:{x:34,y:34}})
                .addNodes({o:{x:64,y:34}})
                .addNodes({o:{x:124,y:154}})
                .addNodes({o:{x:150,y:33}})
                .addNodes({o:{x:300,y:300}});
            return this;
        },
        generateEdges: function() {
            this.addEdge(2,1,1, 'black')
                .addEdge(0,1,5, 'black')
                .addEdge(0,2,1, 'black')
                .addEdge(1,3,2, 'black')
                .addEdge(1,4,3, 'black')
                .addEdge(3,4,1, 'black')
                .addEdge(2,4,1, 'black')
                .addEdge(2,3,2, 'black');
            return this;
        },
        generateGraph: function() {
            this.generateNodes()
                .resetGraphMatrix()
                .generateEdges();
            return this;
        },

        changeGraphMatrixInf: function(row, col) {
            for(var i = 0 ; i < row; i++ ) {
                for(var j = 0 ; j < col; j++) {
                    if(this.GraphMatrix[i][j] === this.INF) {
                        this.GraphMatrix[i][j] = 'INF';
                    }
                }
            }
            return this;
        },

        resetGraphMatrix: function() {
            var n = this.nodes.length;
            this.GraphMatrix = [];
            for(var i = 0; i < n; i++) {
                this.GraphMatrix[i] = [];
                for(var j = 0; j < n; j++) {
                    this.GraphMatrix[i][j] = i === j ? 0 : this.INF;
                }
            }
            return this;
        },

        draw_Gragh: function(nodes, edges) {
            if(edges) {
                for(var key in edges) {
                    var edge = edges[key],
                        s = edge[0],
                        e = edge[1];
                    Canvas.linkTwoCircle(nodes[s], nodes[e], {str: edge[2], style: {color: edge[3]}});
//                    this.highLightEdge(nodes[s], nodes[e]);
                    this.save(Canvas.linkTwoCircle, [nodes[s], nodes[e], {str: edge[2], style: {color: edge[3]}}]);
                }
            }
            if(nodes) {
                for(var key in nodes) {
                    var node = nodes[key],
                        str = node.label ? node.label : key,
                        r = isset(node.r) ? node.r : 10;

                    Canvas.drawCircle(r, node.o, {str: key, color: node.color});
                    this.save(Canvas.drawCircle, [node.r, node.o, {str: key, color: node.color}]);
                }
            }
//            Canvas.clearAll();
//            this.restore(Canvas);
            return this;
        },

        drawGragh: function(highlightNodes){
            this.draw_Gragh(this.nodes, this.edges);
            if(highlightNodes) {
                for(var key in highlightNodes) {
                    var index = highlightNodes[key];
                    this.highLightNode(this.nodes[index]);
                }
            }
            return this;
        },

        highLightEdge: function(A, B) {
            Canvas.linkTwoCircle(A, B, {style: {color: "red", lineWidth: 4}})
                .linkTwoCircle(A, B, {style: {color: "green", lineWidth: 2}});
            return this;
        },

        highLightNode: function(node) {
            Canvas.drawCircleBound(node.r, node.o);
            return this;
        },

        changeNodeColor: function(index, color) {
            this.nodes[index].color = color;
            return this;
        },

        changeEdgeColor: function(index, color) {
            if(index) {
                this.changeDirectedEdgeColor(index, color)
                    .changeDirectedEdgeColor(((index - 1) ^ 1) + 1, color);
            }
            return this;
        },

        changeDirectedEdgeColor: function(index, color) {
            if(this.edges[index]) {
                this.edges[index][3] = color;
            }
            return this;
        },

        saveGraph: function(highlightNodes) {
            this.drawGragh(highlightNodes)
                .saveCanvasFrame()
                .clearAll();
            return this;
        },

        drawing: function() {
            if(Canvas.imageFrame >= Canvas.imageDataQUEUE.length) {
                return this;
            }
            this.drawCanvasFrame(Canvas.imageDataQUEUE[Canvas.imageFrame]);
            Canvas.imageFrame++;
            setTimeout.call(null, 'Graph.drawing();', 300);
            return this;
        },

        drawTable: function(table, row, col, highlightRectangles) {
            Table.init()
                .drawTable(table, row, col)
                .highLightRectangles(highlightRectangles);
            return this;
        },

        saveTable: function(highlightRectangles, table, row, col) {
            var table = table ? table : this.GraphMatrix,
                row = row ? row : this.nodes.length,
                col = col ? col : this.nodes.length;
            this.drawTable(table, row, col, highlightRectangles)
                .saveCanvasFrame()
                .clearAll();
            return this;
        },


        saveGraphAndTable: function(table, row, col, highlightNodes, highlightRectangles) {
            this.drawTable(table, row, col, highlightRectangles)
                .drawGragh(highlightNodes)
                .saveCanvasFrame()
                .clearAll();
            return this;
        },

        drawArray: function(array, col, highlightNodes) {
            Table.init()
                .drawArray(array, col)
                .highLightRectangles(highlightNodes);
            return this;
        },

        saveGraphAndArray: function(highlightNodes) {
            this.drawArray(this.array, this.nodes.length, highlightNodes)
                .drawGragh()
                .saveCanvasFrame()
                .clearAll();
            return this;
        },
        saveArray: function(highlightNodes) {
            this.drawArray(this.array, this.nodes.length, highlightNodes)
                .saveCanvasFrame()
                .clearAll();
            return this;
        }
    });
}();

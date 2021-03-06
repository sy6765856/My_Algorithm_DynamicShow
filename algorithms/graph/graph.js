/**
 * Created with JetBrains WebStorm.
 * User: sy6765856
 * Date: 14-1-23
 * Time: 下午3:47
 * To change this template use File | Settings | File Templates.
 */
DotTest.init('graph.js')
    .begin();
Graph = function() {
    return extend(AlgorithmBase, {

        init: function(name) {
            AlgorithmBase.init(name, Scroll.interval);
            this.INF = 1000000;
            this.edges = [];
            this.nodes = [];
            this.edgesNum = 1;
            this.first = [];
            this.nxt = [];
            this.GraphMatrix = [];
            this.array = [];
            this.radius = 15;
            this.nodeColor = 'grey';
            this.edgeColor = 'blue';
            Canvas.clearAll();
            return this;
        },
        add: function() {
            var a = $('#input1').val(),
                b = $('#input2').val(),
                v = $('#input3').val(),
                warnInfo = '边的端点编号不合法';
            if(!(a && b && v)) {
                myAlert('边信息输入不完整');
                return this;
            }
            if(warnNumber(a, warnInfo)) {
                return this;
            }
            if(warnNumber(b, warnInfo)) {
                return this;
            }
            if(warnNumber(v, '请输入边的权值')) {
                return this;
            }
            $("#input3").val('');
            this.clearAll()
                .addEdge(a, b, parseInt(v))
                .drawGragh();
            return this;
        },
        reset: function() {
            this.init();
            return this;
        },
        random: function() {
            this.init()
                .generateGraph()
                .drawGragh();
            return this;
        },
        randomInRange: function(limit, padding) {
            return Math.random() * (limit - padding * 2) + padding;
        },
        addNodes: function(node) {
            node.r = this.radius;
            node.color = this.nodeColor;
            node.o.x = this.randomInRange(this.width, 200);
            node.o.y = this.randomInRange(this.height, 200) - 100;
            this.collisionCheck(node);
            return this;
        },

        collisionCheck: function(node) {
            for(var key in this.nodes) {
                var nod = this.nodes[key];
                if(!isset(nod.o)) {
                    continue;
                }
                var limit = (node.r + nod.r) * 2;
                if(CanvasLib.distance(nod.o, node.o) < limit) {
                    return this;
                }
            }
            this.nodes.push(node);
            return this;
        },

        addEdge: function(a, b, v) {
            var color = this.edgeColor ? this.edgeColor : 'blue';
            this.addDirectedEdge(a, b, v, color)
                .addDirectedEdge(b, a, v, color);
            return this;
        },

        addDirectedEdge: function(a, b, v, c) {
            this.edges[this.edgesNum] = [a, b, v, c, this.edgesNum, 0];
            this.nxt[this.edgesNum] = this.first[a]? this.first[a] : 0;
            this.first[a] = this.edgesNum++;
            if(!isset(this.GraphMatrix[a])) {
                this.GraphMatrix[a] = [];
            }
            this.GraphMatrix[a][b] = min(this.GraphMatrix[a][b], v);
            return this;
        },

        generateNodes: function(num) {
            for(var i = 0; i < num; i++) {
                this.addNodes({o:{x:150,y:33}});
            }
            return this;
        },
        generateEdges: function(num) {
            this.addEdge(2,1,1)
                .addEdge(0,1,5)
                .addEdge(0,2,1)
                .addEdge(1,3,2)
                .addEdge(1,4,3)
                .addEdge(3,4,1)
                .addEdge(2,4,1)
                .addEdge(2,3,2);
            return this;
        },
        generateGraph: function() {
            this.generateNodes(5)
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

        drawNextFrame: function() {
            if(this.step < Canvas.imageDataQUEUE.length) {
                Canvas.clearAll();
                this.drawCanvasFrame(Canvas.imageDataQUEUE[this.step]);
                this.step++;
            } else {
                this.step = 0;
            }
            return this;
        },

        drawing: function() {
            if(Canvas.imageFrame >= Canvas.imageDataQUEUE.length) {
                Graph.drawAfter();
                return this;
            }
            this.drawCanvasFrame(Canvas.imageDataQUEUE[Canvas.imageFrame]);
            Info.permanent()
                .temporary(Canvas.imageFrame);
            Canvas.imageFrame++;
            setTimeout.call(null, 'Graph.drawing();', Scroll.interval);
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
        },
        drawNode: function(pos, node) {
            var r = isset(node.r) ? node.r : 10;
            Canvas.drawCircle(r, pos, {str: node[0], color: node[1]});
            return this;
        },
        linkFatherAndSon: function(father, son) {
            var r = 10,
                A = { o: father['pos'], r: r },
                B = { o: son['pos'], r: r };
            Canvas.linkTwoCircle(A, B, { style: {color: 'green'}});
            return this;
        },
        addTemp: function(info) {
            Info.addTemp(info);
            return this;
        }
    });
}();
DotTest.end()
    .calculate();
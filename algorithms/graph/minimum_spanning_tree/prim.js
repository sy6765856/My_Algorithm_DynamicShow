/**
 * Created with JetBrains WebStorm.
 * User: honsytshen
 * Date: 14-1-3
 * Time: 下午5:21
 * To change this template use File | Settings | File Templates.
 */
DotTest.init('prim.js')
    .begin();
Prim = function() {
    app.initToolsView('prim')
        .startButtonInit()
        .randomButtonInit('产生随机图')
        .resetButtonInit()
        .inputOneInit('A', '要加边的一个端点标号')
        .inputTwoInit('B', '要加边的另一个端点标号')
        .inputThreeInit('边权值', '请输入要加边的权值')
        .addButtonInit('添加这条边')
        .next()
        .description('最小生成树问题：给定一张无向图，选择其中的一些边得到图的一棵生成树，使得这些边的权值和最小。');
    Canvas.init('canvas');
    return extend(Graph, {
        SIG: 'Prim',
        run_init: function(id){
            Canvas.init('canvas');
            Info.init()
                .setPermanent('最小生成树prim算法');
            ComplexityAnalysis.init(this.SIG, this.nodes.length);
            this.prim();
            ComplexityAnalysis.compare();
            $('#answer').html('最小生成树边权和为：' + this.minLength);
            Button.enableNextButton();
            return this;
        },
        run: function(){
            this.run_init()
                .draw();
            return this;
        },
        prim_init: function(){
            this.minLength = 0;
            return this;
        },
        prim: function(){
            this.prim_init();

            var source = 0,
                min = this.INF,
                edges = this.edges,
                dis = [], edgeIndex = [],
                f = [];

            for(var cnt = 0; cnt < this.nodes.length; cnt++) {
                dis[cnt] = this.INF;
            }

            f[source] = 1;
            this.changeNodeColor(source, "green")
                .addTemp('将点' + source + '加入已选点集')
                .saveGraph();

            for(var cnt = 1; cnt < this.nodes.length; cnt++) {
                for(var e = this.first[source]; e; e = this.nxt[e]) {
                    var v = edges[e][1];
                    ComplexityAnalysis.addCalculation(1);
                    if(!f[v] && dis[v] > edges[e][2]) {
                        dis[v] = edges[e][2];
                        edgeIndex[v] = e;
                        ComplexityAnalysis.addCalculation(2);
                    }
                }
                min = this.INF;
                var pre_source = source;
                for(var i = 0; i < this.nodes.length; i++) {
                    if(!f[i] && edgeIndex[i]) {
                        this.changeEdgeColor(edgeIndex[i], 'red')
                            .addTemp('判断' + i)
                            .saveGraph();
                        if(dis[i] < min) {
                            min = dis[i];
                            if(source === pre_source) {
                                this.changeEdgeColor(edgeIndex[i], 'yellow')
                                    .addTemp('判断' + i)
                                    .saveGraph();
                            } else {
                                this.changeEdgeColor(edgeIndex[i], 'yellow')
                                    .changeEdgeColor(edgeIndex[source], 'blue')
                                    .addTemp('判断' + i)
                                    .saveGraph();
                            }
                            source = i;
                        } else {
                            this.changeEdgeColor(edgeIndex[i], 'blue')
                                .addTemp('判断' + i)
                                .saveGraph();
                        }
                    }
                }
                f[source] = 1;
                this.changeNodeColor(source, "green")
                    .addTemp('将点' + source + '加入已选点集')
                    .saveGraph();
                this.minLength += min;
            }
            ComplexityAnalysis.addCalculation(this.nodes.length);
            return this;
        },

        drawAfter: function() {
            $('#answer').html('最小生成树边权和为：' + this.minLength);
            return this;
        },

        drawTree: function(CanvasObject){
            var treeNodes = new Array();
            treeNodes[0] = {r:6, o:{x:24,y:34}};
            treeNodes[1] = {r:6, o:{x:34,y:34}};
            treeNodes[2] = {r:6, o:{x:64,y:34}};
            treeNodes[3] = {r:6, o:{x:124,y:54}};
            var father = {r:6, o:{x:34,y:154}};
            CanvasObject.drawTreeLevel(treeNodes, father);
        }
    });
}();
DotTest.end()
    .calculate();
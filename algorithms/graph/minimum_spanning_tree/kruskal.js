/**
 * Created with JetBrains WebStorm.
 * User: sy6765856
 * Date: 14-2-3
 * Time: 下午9:40
 * To change this template use File | Settings | File Templates.
 */
DotTest.init('kruskal.js')
    .begin();
Kruskal = function() {
    app.initToolsView('kruskal')
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
        SIG: 'Kruskal',
        run_init: function(id) {
            Canvas.init('canvas');
            Info.init()
                .setPermanent('最小生成树kruskal算法');
            ComplexityAnalysis.init(this.SIG, this.edges.length/2);
            this.kruskal();
            ComplexityAnalysis.compare();
            $('#answer').html('最小生成树边权和为：' + this.minLength);
            return this;
        },
        run: function() {
            this.run_init()
                .draw();
            return this;
        },
        drawAfter: function() {
            $('#answer').html('最小生成树边权和为：' + this.minLength);
            return this;
        },

        kruskal_init: function() {
            this.father = [];
            for(var i = 0; i < this.nodes.length; i++) {
                this.father[i] = i;
            }
            this.minLength = 0;
        },

        find: function(x) {
            while(this.father[x] != x) {
                ComplexityAnalysis.addCalculation(1);
                x = this.father[x];
            }
            return x;
        },

        merge: function(a, b) {
            this.father[a] = b;
            ComplexityAnalysis.addCalculation(1);
            return this;
        },

        kruskal: function() {
            this.kruskal_init();
            var edges = this.edges,
                cmp = function(a, b) {
                    return a[2] - b[2];
                },
                cnt = 0;

            edges.sort(cmp);
            ComplexityAnalysis.addCalculation(this.nodes.length * Math.log(this.nodes.length));
            for(var i = 1; i < edges.length; i += 2) {
                if(typeof edges[i] !== 'object') {
                    continue;
                }
                this.changeEdgeColor(i, 'red')
                    .addTemp('正在判断边' + edges[i][0] + '-' + edges[i][1])
                    .saveGraph();

                var a = this.find(edges[i][0]),
                    b = this.find(edges[i][1]);
                if(a !== b) {
                    this.changeEdgeColor(i, 'yellow')
                        .addTemp('将边' + edges[i][0] + '-' + edges[i][1] + '加入已选边集' )
                        .saveGraph();
                    edges[i][5] = 1;
                    this.merge(a, b);
                    cnt ++;
                    this.minLength += edges[i][2];
                } else {
                    this.changeEdgeColor(i, 'blue')
                        .addTemp('正在判断边' + edges[i][0] + '-' + edges[i][1])
                        .saveGraph();
                }
                if(cnt === this.nodes.length - 1) {
                    console.log(this.minLength);
                    return this;
                }
            }
            console.log(this.minLength);
            return this;
        }
    });
}();
DotTest.end()
    .calculate();
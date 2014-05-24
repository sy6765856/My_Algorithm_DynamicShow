/**
 * Created with JetBrains WebStorm.
 * User: sy6765856
 * Date: 14-1-20
 * Time: 下午9:35
 * To change this template use File | Settings | File Templates.
 */
DotTest.init('dijkstra.js')
    .begin();
Dijkstra = function() {
    app.initToolsView('dijkstra')
        .randomButtonInit('产生随机图')
        .resetButtonInit()
        .inputOneInit('A', '要加边的一个端点标号')
        .inputTwoInit('B', '要加边的另一个端点标号')
        .inputThreeInit('边权值', '请输入要加边的权值')
        .addButtonInit('添加这条边')
        .description('')
        .next()
        .startButtonInit();
    Canvas.init('canvas');
    return extend(Graph, {
        SIG: 'Dijkstra',
        run_init: function(id) {
            Canvas.init('canvas');
            Info.init()
                .setPermanent('dijkstra算法');
            ComplexityAnalysis.init(this.SIG, this.nodes.length);
            this.dijkstra();
            ComplexityAnalysis.compare();
            return this;
        },
        run: function() {
            this.run_init()
                .draw();
            return this;
        },
        dij_init: function() {
            this.array = [];
            this.source = 0;
            for(var i = 0; i < this.nodes.length; i++) {
                this.array[i] = this.INF;
            }
            return this;
        },
        dijkstra: function() {
            this.dij_init();
            var f = [],
                s = this.source,
                d = this.array,
                edges = this.edges,
                n = this.nodes.length,
                link = [],
                min;
            d[0] = 0;
            for(var i = 0; i < n; i++) {
                min = this.INF;
                var s_pre = s;
                for(var j = 0; j < n; j++) {
                    ComplexityAnalysis.addCalculation(1);
                    if(!f[j] && d[j] < min) {
                        min = d[j];
                        s = j;
                        ComplexityAnalysis.addCalculation(2);
                    }
                }

                this.changeNodeColor(s, "green")
                    .changeNodeColor(s_pre, 'white');

                f[s] = 1;
                for(var e = this.first[s]; e; e = this.nxt[e]) {
                    var v = edges[e][1];
                    ComplexityAnalysis.addCalculation(1);
                    if(edges[e][2] + d[s] < d[v]) {
                        d[v] = d[s] + edges[e][2];
                        ComplexityAnalysis.addCalculation(1);
                        this.saveGraphAndArray([[0, v, 'red']]);
                    } else {

                    }
                }
            }
            this.changeNodeColor(s, "white")
                .saveGraphAndArray();
            return this;
        }

    });
}();
DotTest.end()
    .calculate();
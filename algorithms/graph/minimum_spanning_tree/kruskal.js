/**
 * Created with JetBrains WebStorm.
 * User: sy6765856
 * Date: 14-2-3
 * Time: 下午9:40
 * To change this template use File | Settings | File Templates.
 */
Kruskal = function() {
    app.initToolsView('kruskal')
        .startButtonInit()
        .randomButtonInit('产生随机图')
        .description('最小生成树问题：给定一张无向图，选择其中的一些边得到图的一棵生成树，使得这些边的权值和最小。');
    return extend(Graph, {
        run: function(id) {
            Canvas.init(id);
            this.random()
                .kruskal()
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
                x = this.father[x];
            }
            return x;
        },

        merge: function(a, b) {
            this.father[a] = b;
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
            for(var i = 1; i < edges.length; i+=2) {
                if(typeof edges[i] !== 'object') {
                    continue;
                }
                this.changeEdgeColor(i, 'red')
                    .saveGraph();

                var a = this.find(edges[i][0]),
                    b = this.find(edges[i][1]);
                if(a !== b) {
                    this.changeEdgeColor(i, 'yellow')
                        .saveGraph();
                    this.merge(a, b);
                    cnt ++;
                    this.minLength += edges[i][2];
                } else {
                    this.changeEdgeColor(i, 'black')
                        .saveGraph();
                }
                if(cnt === this.nodes.length - 1) {
                    return this;
                }
            }
            return this;
        }
    });
}();

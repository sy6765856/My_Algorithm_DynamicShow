/**
 * Created with JetBrains WebStorm.
 * User: sy6765856
 * Date: 14-3-25
 * Time: 下午4:46
 * To change this template use File | Settings | File Templates.
 */
Spfa = function() {
    app.initToolsView('spfa')
        .randomButtonInit('产生随机图')
        .resetButtonInit()
        .inputOneInit('边的两个端点 A')
        .inputTwoInit('          B')
        .inputThreeInit('边权值')
        .addButtonInit('添加这条边')
        .description('')
        .startButtonInit();
    return extend(Graph, {
        run: function(id) {
            Canvas.init(id);
            Info.init()
                .setPermanent('spfa算法');
            this.SPFA()
                .draw();
            return this;
        },
        setSource: function(source) {
            this.source = source;
            return this;
        },
        spfa_init: function() {
            this.array = [];
            this.vis = [];
            this.source = this.source ? this.source : 0;
            for(var i = 0; i < this.nodes.length; i++) {
                this.array[i] = this.INF;
                this.vis[i] = false;
            }
            return this;
        },
        SPFA: function() {
            this.spfa();
            return this;
        },
        spfa: function() {
            this.spfa_init();
            var dist = this.array,
                vis = this.vis,
                s = this.source,
                edges = this.edges,
                Q = [],
                top = 1;
            dist[s] = 0;
            Q[0] = s; vis[s] = true;
            while(top) {
                var u,v;
                u = Q[--top];
                vis[u] = false;
                for(var e = this.first[s]; e; e = this.nxt[e]) {
                    v = edges[e][1];
                    if(this.relax(u, v, edges[e][2] && !vis[v])) {
                        Q[top++] = v;
                        vis[v] = true;
                    }
                }
            }
            console.log(s, dist);
            return this;
        },
        relax: function(u, v, cost) {
            var dist = this.array;
            if(dist[v] > dist[u] + cost) {
                dist[v] = dist[u] + cost;
                return true;
            }
            return false;
        }
    })
}();
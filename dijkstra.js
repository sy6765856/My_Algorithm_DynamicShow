/**
 * Created with JetBrains WebStorm.
 * User: sy6765856
 * Date: 14-1-20
 * Time: 下午9:35
 * To change this template use File | Settings | File Templates.
 */
Dijkstra = function() {
    return extend(Graph, {
        run: function(id) {
            Canvas.init(id);
            this.init('Dijkstra')
                .generateGraph()
                .dijkstra()
                .draw();
            return this;
        },
        dij_init: function() {
            this.d = [];
            for(var i = 0; i < this.nodes.length; i++) {
                this.d[i] = this.INF;
            }
            return this;
        },
        dijkstra: function() {
            this.dij_init();
            var f = [],
                s = 0,
                d = this.d,
                edges = this.edges,
                n = this.nodes.length;
            d[0] = 0;
            for(var i = 0; i < n; i++) {
                min = this.INF;
                for(var j = 0; j < n; j++) {
                    if(!f[j] && d[j] < min) {
                        min = d[j];
                        s = j;
                    }
                }
                f[s] = 1;
                for(var e = this.first[s]; e; e = this.nxt[e]) {
                    var v = edges[e][1];
                    if(edges[e][2] + d[s] < d[v]) {
                        d[v] = d[s] + edges[e][2];
                    } else {

                    }
                }
            }
            return this;
        }

    });
}();
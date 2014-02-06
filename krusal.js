/**
 * Created with JetBrains WebStorm.
 * User: sy6765856
 * Date: 14-2-3
 * Time: 下午9:40
 * To change this template use File | Settings | File Templates.
 */
Krusal = function() {
    return extend(Graph, {
        run: function(id) {
            Canvas.init(id);
            this.init('Krusal')
                .generateGraph()
                .krusal()
//                .draw()
                .drawArray([1,33,4], 5);
//                .drawTable([[1, 4, 4], [3, 4, 1], [3, 5, 3]], 3, 5);
            console.log(this.minLength);
            return this;
        },

        krusal_init: function() {
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

        krusal: function() {
            this.krusal_init();
            console.log(this.father);
            var edges = this.edges;
            var cmp = function(a, b) {
                return a[2] - b[2];
            };
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
                    this.minLength += edges[i][2];
                } else {
                    this.changeEdgeColor(i, 'black')
                        .saveGraph();
                }
            }
            return this;
        }
    });
}();
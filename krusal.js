/**
 * Created with JetBrains WebStorm.
 * User: sy6765856
 * Date: 14-2-3
 * Time: 下午9:40
 * To change this template use File | Settings | File Templates.
 */
Krusal = function() {
    return extend(Graph, {
        krusal_init: function() {
            this.father = [];
            this.minLength = 0;
        },
        find: function(x) {
            while(this.father[x] != null) {
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
            var edges = this.edges;
            var cmp = function(a, b) {
                return a[2] - b[2];
            };
            edges.sort(cmp);

            for(var i = 0; i < edges.length; i++) {
                var a = find(edges[i][0]),
                    b = find(edges[i][1]);
                if(a !== b) {
                    merge(a, b);
                    this.minLength += edges[i][2];
                }
            }
            return this;
        }
    });
}();
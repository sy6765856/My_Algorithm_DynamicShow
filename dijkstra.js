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
        },
        dijkstra: function() {
            for(var i = 0; i < this.nodes.length; i++) {

            }
            return this;
        }

    });
}();
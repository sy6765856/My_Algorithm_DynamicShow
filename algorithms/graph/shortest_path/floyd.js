/**
 * Created with JetBrains WebStorm.
 * User: sy6765856
 * Date: 14-2-9
 * Time: 下午4:11
 * To change this template use File | Settings | File Templates.
 */
Floyd = function() {
    $('#floyd').click(FunctionTemplate.startButton('Floyd'));
    return extend(Graph, {
        run: function(id) {
            Canvas.init(id);
            this.init('floyd')
                .generateGraph()
                .drawGragh()
                .floyd()
                .draw();
            return this;
        },
        floyd: function() {
            var n = this.nodes.length,
                v = this.GraphMatrix;
            for(var k = 0; k < n; k++) {
                for(var i = 0; i < n; i++) {
                    for(var j = 0; j < n; j++) {
                        if(v[i][k] + v[k][j] < v[i][j]) {
                            v[i][j] = v[i][k] + v[k][j];
                            this.drawGragh()
                                .saveTable([[i, j, 'red'], [i, k, 'blue'], [k, j, 'BLue']]);
                        }
                    }
                }
            }
            return this;
        }
    });
}();
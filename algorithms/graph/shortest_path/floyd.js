/**
 * Created with JetBrains WebStorm.
 * User: sy6765856
 * Date: 14-2-9
 * Time: 下午4:11
 * To change this template use File | Settings | File Templates.
 */
DotTest.init('floyd.js')
    .begin();
Floyd = function() {
    app.initToolsView('floyd')
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
        SIG: 'Floyd',
        run_init: function(id) {
            Canvas.init('canvas');
            Info.init()
                .setPermanent('floyd算法');
            ComplexityAnalysis.init(this.SIG, this.nodes.length);
            this.floyd();
            ComplexityAnalysis.compare();
            return this;
        },
        run: function() {
            this.run_init()
                .draw();
            return this;
        },
        floyd: function() {
            var n = this.nodes.length,
                v = this.GraphMatrix;
            for(var k = 0; k < n; k++) {
                for(var i = 0; i < n; i++) {
                    for(var j = 0; j < n; j++) {
                        ComplexityAnalysis.addCalculation(1);
                        if(v[i][k] + v[k][j] < v[i][j]) {
                            v[i][j] = v[i][k] + v[k][j];
                            ComplexityAnalysis.addCalculation(1);
                            this.drawGragh()
                                .addTemp('更新顶点' + i + '和顶点' + j + '之间的最小距离')
                                .saveTable([[i, j, 'red'], [i, k, 'blue'], [k, j, 'BLue']]);
                        }
                    }
                }
            }
            return this;
        }
    });
}();
DotTest.end()
    .calculate();
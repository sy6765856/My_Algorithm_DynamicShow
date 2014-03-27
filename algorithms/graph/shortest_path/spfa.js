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
        .description('')
        .startButtonInit();
    return extend(Graph, {
        run: function() {
            return this;
        }
    })
}();
/**
 * Created with JetBrains WebStorm.
 * User: sy6765856
 * Date: 14-2-19
 * Time: 下午9:56
 * To change this template use File | Settings | File Templates.
 */
Greedy = function() {
    $('#greedy').click(FunctionTemplate.startButton('Greedy'));
    return extend(Dynamic, {
        init: function(id) {
            Canvas.init(id);
            return this;
        },
        generateQueue: function() {
            this.push(1)
                .push(2)
                .push(3);
            return this;
        },
        drawActivities: function(width, height, pos) {
            Canvas.drawActivities(width, height, pos);
            return this;
        }
    });
}();
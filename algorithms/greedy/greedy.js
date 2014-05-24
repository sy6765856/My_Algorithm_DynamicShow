/**
 * Created with JetBrains WebStorm.
 * User: sy6765856
 * Date: 14-2-19
 * Time: 下午9:56
 * To change this template use File | Settings | File Templates.
 */
DotTest.init('greedy.js')
    .begin();
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
        setPos: function(pos) {
            this.pos = pos;
            return this;
        },
        setWidth: function(width) {
            this.width = width;
            return this;
        },
        setHeight: function(height) {
            this.height = height;
            return this;
        },
        setSpacing: function(spacing) {
            this.spacing = spacing;
            return this;
        },
        addTemp: function(info) {
            Info.addTemp(info);
            return this;
        },
        checkParameters: function() {
            if(!isset(this.width)) {
                this.width = 300;
            }
            if(!isset(this.height)) {
                this.height = 50;
            }
            if(!isset(this.pos)) {
                this.pos = {x: 10, y: 10};
            }
            if(!isset(this.spacing)) {
                this.spacing = 30;
            }
            return this;
        },
        drawActivities: function(array, minimum, maximum) {
            this.checkParameters();
            Canvas.clearAll()
                .drawActivities(array, minimum, maximum, this.pos, 500, this.height, this.spacing);
            return this;
        },
        save: function() {
            this.saveCanvasFrame();
            return this;
        }
    });
}();
DotTest.end()
    .calculate();
/**
 * Created with JetBrains WebStorm.
 * User: sy6765856
 * Date: 14-2-21
 * Time: 下午7:50
 * To change this template use File | Settings | File Templates.
 */
FunctionTemplate = function() {
    return {
        startButton: function(name) {
            return function() {
                clearAllTimeOut();
                Canvas.clearAll('canvas');
                $('#start').replaceWith(Template.beginButton(name));
            };
        },
        addButton: function(name) {
            return function() {
                $('#add').replaceWith(Template.addButton(name));
            };
        },
        resetButton: function(name) {
            return function() {
                $('#reset').replaceWith(Template.resetButton(name));
            };
        }
    };
}();
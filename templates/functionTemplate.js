/**
 * Created with JetBrains WebStorm.
 * User: sy6765856
 * Date: 14-2-21
 * Time: 下午7:50
 * To change this template use File | Settings | File Templates.
 */
FunctionTemplate = function() {
    return {
        startButton: function(name, str) {
            return function() {
                clearAllTimeOut();
                Canvas.clearAll('canvas');
                $('#start').html(Template.beginButton(name, str));
            };
        },
        addSingleButton: function(name, str) {
            return function() {
                $('#add').html(Template.addSingleButton(name, str));
            };
        },
        addButton: function(name) {
            return function() {
                $('#add').html(Template.addButton(name));
            };
        },
        resetButton: function(name) {
            return function() {
                $('#reset').html(Template.resetButton(name));
            };
        },
        popButton: function(name, str) {
            return function() {
                $('#pop').html(Template.popButton(name, str));
            }
        },
        randomButton: function(name, str) {
            return function() {
                $('#random').html(Template.randomButton(name, str));
            }
        },
        setButton: function(name, str) {
            return function() {
                $('#set').html(Template.setButton(name, str));
            }
        },
        clearButton: function(name) {
            return function() {
                $('#' + name).html('');
            }
        },
        clearAllButtons: function() {
            return function() {
                $('#add').html('');
                $('#pop').html('');
                $('#start').html('');
                $('#reset').html('');
                $('#random').html('');
                $('#set').html('');
            }
        },
        clearAllInputs: function() {
            return function() {
                $('#input').html('');
            }
        }
    };
}();
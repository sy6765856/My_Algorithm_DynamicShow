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
        addNextButton: function(name, str) {
            return function() {
                $('#next').html(Template.addNextButton(name, str));
            };
        },
        addButton: function(val, name) {
            return function() {
                $('#add').html(Template.addButton(val, name));
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
                $('#next').html('');
            }
        },
        clearAllInputs: function() {
            return function() {
                $('#input').html('');
            }
        },
        complexity: function(array, info) {
            $('.complexity').html('算法复杂度为： ' + info);
            $('.complexity').append(Template.complexity_head(['复杂度', '相似度（完全相同为1）']));
            $('.complexity').append('<tbody>');
            for(var key in array) {
                if(typeof array[key] === 'function') {
                    continue;
                }
                $('.complexity').append(Template.complexity(key, Math.round(array[key]*1000)/1000));
            }
            $('.complexity').append('</tbody>');
            return this;
        }
    };
}();
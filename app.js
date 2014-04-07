/**
 * Created with JetBrains WebStorm.
 * User: honsytshen
 * Date: 14-1-2
 * Time: 下午3:27
 * To change this template use File | Settings | File Templates.
 */
app = {
    init: function(id) {
        Array.prototype.max = function(){
            return Math.max.apply({}, this);
        };
        Array.prototype.min = function(){
            return Math.min.apply({}, this);
        };
        frame = 0;
        IndexINF = 100000;
        Menu.init('menu');
        return this;
    },
    run: function() {
        return this;
    },
    initToolsView: function(id) {
        this.id = id;
        var index = '#' + id;
        $(index).click(FunctionTemplate.clearAllButtons());
        $(index).click(FunctionTemplate.clearAllInputs());
        $(index).click(
            function() {
                $('#answer').html('');
                $('#info').html('');
                $('#description').html('');
            }
        );
        $(index).click(
            function() {
                $('#subTitle').html(id);
            }
        );
        var tmp = id.toUpperCase();
        this.class = tmp[0] + id.substr(1);
        return this;
    },

    description: function(content) {
        var index = '#' + this.id;
        $(index).click(function(){$('#description').html('&nbsp&nbsp' + content);});
        return this;
    },
    startButtonInit: function(name) {
        var index = '#' + this.id,
            className = this.class;
        $(index).click(FunctionTemplate.startButton(className, name));
        return this;
    },
    singleAddButtonInit: function(name) {
        var index = '#' + this.id,
            className = this.class;
        $(index).click(FunctionTemplate.addSingleButton(className, name));
        return this;
    },
    addButtonInit: function(name) {
        var index = '#' + this.id,
            className = this.class;
        $(index).click(FunctionTemplate.addButton(className, name));
        return this;
    },
    resetButtonInit: function() {
        var index = '#' + this.id
            ,className = this.class;
        $(index).click(FunctionTemplate.resetButton(className));
        return this;
    },
    popButtonInit: function(name) {
        var index = '#' + this.id
            ,className = this.class;
        $(index).click(FunctionTemplate.popButton(className, name));
        return this;
    },
    inputOneInit: function(name) {
        var index = '#' + this.id;
        if(name === undefined) {
            name = '';
        } else {
            name += ':';
        }
        $(index).click(
            function() {
                $('#input').append('<label class = "label" for="input1">'+ name +'</label><input id = "input1"/>');
            }
        );
        return this;
    },
    inputTwoInit: function(name) {
        var index = '#' + this.id;
        if(name === undefined) {
            name = '';
        } else {
            name += ':';
        }
        $(index).click(
            function() {
                $('#input').append('</br><label class = "label" for="input2">' + name + '</label><input id = "input2"/>');
            }
        );
        return this;
    },
    inputThreeInit: function(name) {
        var index = '#' + this.id;
        if(name === undefined) {
            name = '';
        } else {
            name += ':';
        }
        $(index).click(
            function() {
                $('#input').append('</br><label class = "label" for="input3">' + name + '</label><input id = "input3"/>');
            }
        );
        return this;
    },
    informationInit: function(name) {
        var index = '#' + this.id;
        if(name === undefined) {
            name = '';
        } else {
            name += ':';
        }
        $(index).click(
            function() {
                $('#input').append('</br><a>' + name + '</a>');
            }
        );
        return this;
    },
    randomButtonInit: function(name) {
        var index = '#' + this.id
            ,className = this.class;
        $(index).click(FunctionTemplate.randomButton(className, name));
        return this;
    },
    setButtonInit: function(name) {
        var index = '#' + this.id
            ,className = this.class;
        $(index).click(FunctionTemplate.setButton(className, name));
        return this;
    }
};
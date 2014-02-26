/**
 * Created with JetBrains WebStorm.
 * User: sy6765856
 * Date: 14-2-20
 * Time: 上午10:45
 * To change this template use File | Settings | File Templates.
 */
Template = function() {
    return {
        navBar: function(id, name, level) {
            var ret = '';
            switch (level) {
                case 1:
                    ret =  '<li class="menutitle" id="' + id + '">' +
                        name + '</li>';
                    break;
                case 2:
                    ret = '<li>' +
                        '<a id="' + id +
                        '" href="#">' + name +'</a>' +
                        '</li>';
                    break;
            }
            return ret;
        },
        navBarBottom: function() {
            var ret = '<li class="menubottom">&nbsp</li>&nbsp';
            return ret;
        },
        beginButton: function(name) {
            var ret = '<button id="start" class="start" onclick=' + name + '.run("canvas")' + '>开始</button>';
            return ret;
        },
        addButton: function(name) {
            var ret = '<button id="add" class="add" onclick=' + name + ".add($('#input1').val(),$('#input2').val());" + '>插入</button>';
            return ret;
        },
        addSingleButton: function(name) {
            var ret = '<button id="add" class="add" onclick=' + name + ".add($('#input1').val());" + '>插入</button>';
            return ret;
        },
        resetButton: function(name) {
            var ret = '<button id="reset" class="reset" onclick=' + name + ".reset();" + '>重置</button>';;
            return ret;
        }
    };
}();
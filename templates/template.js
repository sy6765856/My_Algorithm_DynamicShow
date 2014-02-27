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
                    ret =  '<li class="menutitle" id = ' + id +
                        '>' +
                        name + '</li>';
                    break;
                case 2:
                    ret = '<li>' +
                        '<a  href="#" id =' + id +
                        '>' + name +'</a>' +
                        '</li>';
                    break;
            }
            return ret;
        },
        navBarBottom: function() {
            return '<li class="menubottom">&nbsp</li>&nbsp';
        },
        beginButton: function(name, str) {
            str = isset(str) ? str : '开始';
            return '<button class="start" onclick=' + name + '.run("canvas")' + '>' +
                str +
                '</button>';
        },
        addButton: function(name) {
            return'<button class="add" onclick=' + name + ".add($('#input1').val(),$('#input2').val());" + '>插入</button>';
        },
        addSingleButton: function(name, str) {
            str = isset(str) ? str : '插入';
            return '<button class="add" onclick=' + name + ".add($('#input1').val());" + '>' +
                str + '</button>';
        },
        resetButton: function(name) {
            return '<button class="reset" onclick=' + name + ".reset();" + '>重置</button>';;
        },
        popButton: function(name, str) {
            str = isset(str) ? str : '弹出';
            return '<button class="pop" onclick=' + name + ".pop();" + '>' +
                str +
                '</button>';
        },
        randomButton: function(name, str) {
            str = isset(str) ? str : '产生随机序列';
            return '<button class="random" onclick=' + name + ".random();" + '>' +
                str +
                '</button>';
        }
    };
}();
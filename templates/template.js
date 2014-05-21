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
                    ret = '<li style="display:none">' +
                        '<a  href="#"  id =' + id +
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
            return '<button class="start btn btn-success" onclick=' + name + '.run("canvas")' + '>' +
                str +
                '</button>';
        },
        addButton: function(val, name) {
            name = name ? name : '插入';
            return'<button class="add btn" onclick=' + val + ".add($('#input1').val(),$('#input2').val());>" + name + '</button>';
        },
        addSingleButton: function(name, str) {
            str = isset(str) ? str : '插入';
            return '<button class="add btn" onclick=' + name + ".add($('#input1').val());" + '>' +
                str + '</button>';
        },
        addNextButton: function(name, str) {
            str = isset(str) ? str : '下一步';
            return '<button class="next btn btn-primary"  id = "next-button" disabled="disabled" onclick=' + name + ".next();" + '>' +
                str + '</button>';
        },
        resetButton: function(name) {
            return '<button class="reset btn btn-danger" onclick=' + name + ".reset();" + '>重置</button>';
        },
        popButton: function(name, str) {
            str = isset(str) ? str : '弹出';
            return '<button class="pop btn" onclick=' + name + ".pop();" + '>' +
                str +
                '</button>';
        },
        randomButton: function(name, str) {
            str = isset(str) ? str : '产生随机序列';
            return '<button class="random btn" onclick=' + name + ".random();" + '>' +
                str +
                '</button>';
        },
        setButton: function(name, str) {
            str = isset(str) ? str : '产生随机序列';
            return '<button class="random btn" onclick=' + name + ".set();" + '>' +
                str +
                '</button>';
        },
        complexity: function(key, val) {
            return '<tr><td>' + key + '</td><td>' + val + '</td></tr>'
        },
        complexity_head: function(list) {
            content = '<thead><tr>';
            for(var key in list) {
                if(typeof list[key] === 'function') {
                    continue;
                }
                content += '<td>' + list[key] + '</td>';
            }
            return content + '</tr></thead>';
        }
    };
}();
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
                    ret =  '<div class="Item">' +
                        '<a id ="' + id +
                        '" href="#" class="item">' + name + '</a>' +
                        '</div>';
                    break;
                case 2:
                    ret = '<div class="Item">' +
                        '<a id="' + id +
                        '" href="#" class="item">' + name +'</a>' +
                        '</div>';
                    break;
            }
            return ret;
        }
    };
}();
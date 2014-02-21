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
    }
};
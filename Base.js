/**
 * Created with JetBrains WebStorm.
 * User: sy6765856
 * Date: 14-1-30
 * Time: 下午3:04
 * To change this template use File | Settings | File Templates.
 */
Base = function() {
    return {
        init: function() {
            this.clearBuffer();
        },
        save: function(fun, arguments) {
            this.functionQUEUE.push({function: fun, arguments: arguments});
        },
        restore: function(that) {
            for(var key in this.functionQUEUE) {
                if(this.functionQUEUE[key]['function']) {
                    var argus = this.functionQUEUE[key]['arguments'];
                    this.functionQUEUE[key]['function'].apply(that, argus);
                }
            }
        },
        clearBuffer: function() {
            this.functionQUEUE = [];
        }
    }
}();
/**
 * Created with JetBrains WebStorm.
 * User: sy6765856
 * Date: 14-5-7
 * Time: 上午9:10
 * To change this template use File | Settings | File Templates.
 */
DotTest.init('log.js')
    .begin();
Log = function() {
    return {
        SIG: 'Log',
        log: function() {
            this.write(this.SIG);
            return this;
        },
        success: function() {
            this.write(this.SIG + ' run successfully!');
            return this;
        },
        error: function() {
            this.write(this.SIG + ' failed!');
            return this;
        },
        search: function() {
            return this;
        },
        del: function() {
            return this;
        },
        timeLog: function() {
            console.log(new Date().toLocaleString() + '  >>>>>>> ');
            return this;
        },
        write: function(str) {
            this.timeLog();
            console.log(str);
            console.log('');
            return this;
        },
        setSig: function(sig) {
            this.SIG = sig;
            return this;
        }
    }
}();
DotTest.end()
    .calculate();
/**
 * Created with JetBrains WebStorm.
 * User: sy6765856
 * Date: 14-5-7
 * Time: 下午6:01
 * To change this template use File | Settings | File Templates.
 */
DotTest = function() {
    return {
        SIG: 'DotTest',
        time_total: 0,
        init: function(name) {
            this.name = name;
            this.beginTime = 0;
            this.endTime = 0;
            return this;
        },
        begin: function() {
            this.beginTime = new Date().getTime();
            console.log(this.name + ' begin loading at ' + this.beginTime);
            return this;
        },
        end: function() {
            this.endTime = new Date().getTime();
            console.log(this.name + ' completed at ' + this.endTime);
            return this;
        },
        calculate: function() {
            var time = this.endTime - this.beginTime;
            console.log(this.name + ' costs ' + time + ' milliseconds.');
            console.log('');
            this.time_total += time;
            return this;
        }
    }
}();
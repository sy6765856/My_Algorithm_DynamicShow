/**
 * Created with JetBrains WebStorm.
 * User: honsytshen
 * Date: 14-4-30
 * Time: 下午3:15
 * To change this template use File | Settings | File Templates.
 */
DotTest.init('scroll.js')
    .begin();
Scroll = function() {
    return {
        SIG: 'Scroll',
        interval: 1000,
        minSpeed: 10,
        maxSpeed: 100,
        setInterval: function(interval) {
            Scroll.interval = interval;
            return this;
        },
        setSpeed: function(pos, begin, end) {
            var speed = (pos - begin) / (end - begin) * (this.maxSpeed - this.minSpeed) + this.minSpeed;
            this.setInterval(this.minSpeed / speed * 1000);
            Info.setInfo('设置了新的演示速度，快试试吧~');
            return this;
        }
    }
}();
DotTest.end()
    .calculate();
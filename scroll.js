/**
 * Created with JetBrains WebStorm.
 * User: honsytshen
 * Date: 14-4-30
 * Time: 下午3:15
 * To change this template use File | Settings | File Templates.
 */
Scroll = function() {
    return {
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
            return this;
        }
    }
}();
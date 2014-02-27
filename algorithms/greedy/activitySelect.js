/**
 * Created with JetBrains WebStorm.
 * User: sy6765856
 * Date: 14-2-21
 * Time: 下午7:15
 * To change this template use File | Settings | File Templates.
 */
ActivitySelect = function() {
    $('#activitySelect').click(FunctionTemplate.startButton('ActivitySelect'));
    $('#activitySelect').click(FunctionTemplate.addButton('ActivitySelect'));
    $('#activitySelect').click(FunctionTemplate.resetButton('ActivitySelect'));
    $('#activitySelect').click(FunctionTemplate.clearButton('random'));
    Canvas.init('canvas');
    return extend(Greedy, {
        activities: [],
        height: 10,
        widthPer: 2,
        pos: { x: 100, y: 150},
        spacing: 3,
        inf: 10000000,
        minimum: 1000000,
        maximum: -1000000,
        selfInit: function() {
            this.init('canvas');
            this.activities = [];
            this.minimum = this.inf;
            this.maximum = -this.inf;
            return this;
        },
        reset: function() {
            this.selfInit();
            return this;
        },
        run: function() {
            this.init('canvas')
                .activitySelect();
            return this;
        },
        add: function(begin, end) {
            if(warnNumber(begin, '开始时间应为数字！')) {
                return this;
            }
            if(warnNumber(end, '结束时间应为数字！')) {
                return this;
            }
            begin = parseInt(begin);
            end = parseInt(end);
            if(begin > end) {
                alert('开始时间不能大于结束时间！');
                return this;
            }
            this.minimum = min(this.minimum, begin);
            this.maximum = max(this.maximum, end);
            this.insert([begin, end]);
            return this;
        },
        insert: function(obj) {
            this.activities.push(obj);
            this.drawActivities(this.activities, this.minimum, this.maximum);
            return this;
        },
        activitySelect: function() {

            return this;
        }
    });
}();
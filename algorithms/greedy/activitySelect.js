/**
 * Created with JetBrains WebStorm.
 * User: sy6765856
 * Date: 14-2-21
 * Time: 下午7:15
 * To change this template use File | Settings | File Templates.
 */
ActivitySelect = function() {
    app.initToolsView('activitySelect')
        .startButtonInit()
        .addButtonInit()
        .resetButtonInit()
        .inputOneInit('活动开始时间')
        .inputTwoInit('活动结束时间')
        .description('现有一些活动，每个活动会占用活动开始到结束时间内的资源，该资源只能在某一时刻被一个活动占用。假设活动的开始结束时间都是整数，现给出一系列活动，求解最多可以安排的活动数。最后选出的活动用黄色标记。');
    Canvas.init('canvas');
    return extend(Greedy, {
        activities: [],
        height: 20,
        widthPer: 2,
        pos: { x: 100, y: 150},
        spacing: 10,
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
                .activitySelect()
                .draw();
            return this;
        },
        drawAfter: function() {
            $('#info').html('选出活动最多为' + this.ans + '个');
            return this;
        },
        drawing: function() {
            if(Canvas.imageFrame >= Canvas.imageDataQUEUE.length) {
                ActivitySelect.drawAfter();
                return this;
            }
            this.drawCanvasFrame(Canvas.imageDataQUEUE[Canvas.imageFrame]);
            Canvas.imageFrame++;
            setTimeout.call(null, 'ActivitySelect.drawing();', 300);
            return this;
        },
        add: function(begin, end) {
            if(!begin) {
                alert('请输入开始时间！');
                return this;
            }
            if(!end) {
                alert('请输入结束时间！');
                return this;
            }
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
            this.insert([begin, end, 'green', this.activities.length]);
            return this;
        },
        refresh: function() {
            this.drawActivities(this.activities, this.minimum, this.maximum);
            return this;
        },
        insert: function(obj) {
            this.activities.push(obj);
            this.refresh();
            return this;
        },
        activitySelect: function() {
            var activities = this.activities,
                cmp = function(a, b) {
                    return a[1] - b[1];
                },
                ed = this.minimum - 1,
                ans = 0;
            activities.sort(cmp);
            this.refresh()
                .save();

            for(var key in activities) {
                this.changeActivityColor(key, 'red')
                    .refresh()
                    .save();
                var activity = activities[key];
                if(activity[0] > ed) {
                    ans ++;
                    ed = activity[1];
                    this.changeActivityColor(key, 'yellow')
                        .refresh()
                        .save();
                } else {
                    this.changeActivityColor(key, 'green')
                        .refresh()
                        .save();
                }
            }
            this.ans = ans;
            return this;
        },
        changeActivityColor: function(key, color) {
            this.activities[key][2] = color;
            return this;
        }
    });
}();
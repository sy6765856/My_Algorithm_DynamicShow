/**
 * Created with JetBrains WebStorm.
 * User: sy6765856
 * Date: 14-2-20
 * Time: 上午10:41
 * To change this template use File | Settings | File Templates.
 */
Menu = function() {
    $('#menu').click(function(e) {
        e = window.event ? window.event : e;
        var who = e.target ? e.target : e.srcElement;
        who.className = 'active';
        $('#answer').html('');
    });
    return {
        init: function(id) {
            this.area = '#' + id;
            this.load()
                .render();
            return this;
        },
        load: function() {
            this.config = {
                'structure': ['数据结构', 1],
                'stack': ['栈', 2],
                'queue': ['队列', 2],
                'heap': ['堆', 2],

                'dynamic': ['动态规划', 1],

                'sort': ['排序算法', 1],
                'mergeSort': ['归并排序', 2],
                'orderSort': ['顺序排序', 2],
                'bubbleSort': ['冒泡排序', 2],

                'greedy': ['贪心算法', 1],
                'activitySelect': ['活动选择', 2],

                'minimum_spanning_tree': ['最小生成树', 1],
                'prim': ['prim', 2],
                'kruskal': ['kruskal', 2],

                'shortest_path': ['最短路径', 1],
                'dijkstra': ['dijkstra', 2],
                'floyd': ['floyd', 2]
            };
            return this;
        },
        render: function() {
            this.generateContext();
            $(this.area).html(this.context);
            $('.menutitle').before(Template.navBarBottom());
            var li = $('li');
            li.last().after(Template.navBarBottom());
            li.first().remove();
            return this;
        },
        generateContext: function() {
            this.context = '';
            var config = this.config;
            for(var key in config) {
                this.context += Template.navBar(key, config[key][0], config[key][1]);
            }
            return this;
        }
    }
}();
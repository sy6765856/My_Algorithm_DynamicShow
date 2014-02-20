/**
 * Created with JetBrains WebStorm.
 * User: sy6765856
 * Date: 14-2-20
 * Time: 上午10:41
 * To change this template use File | Settings | File Templates.
 */
Menu = function() {
    return {
        init: function(id) {
            this.area = '#' + id;
            this.load()
                .render();
            return this;
        },
        load: function() {
            this.config = {
                'dynamic': ['动态规划', 1],
                'sort': ['排序算法', 1],
                'greedy': ['贪心算法', 1],
                'minum_spanning_tree': ['最小生成树', 1],
                'prim': ['prim', 2],
                'kruskal': ['kruskal', 2],
                'shortest_path': ['最短路径', 1],
                'dijkstra': ['dijkstra', 2],
                'floyd': ['floyd', 2],
                'heap': ['堆', 1]
            };
            return this;
        },
        render: function() {
            this.generateContext();
            $(this.area).html(this.context);
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
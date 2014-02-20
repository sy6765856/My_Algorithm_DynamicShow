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
        $('#prim').click(function() {
            clearAllTimeOut();
            Canvas.clearAll('canvas');
            $('#start').replaceWith('<button id="start" class="start" onclick=' + 'Prim' + '.run("canvas")' + '>开始</button>');
        });
        $('#kruskal').click(function() {
            clearAllTimeOut();
            Canvas.clearAll('canvas');
            $('#start').replaceWith('<button id="start" class="start" onclick=' + 'Kruskal' + '.run("canvas")' + '>开始</button>');
        });

        $('#sort').click(function() {
            clearAllTimeOut();
            Canvas.clearAll('canvas');
            $('#start').replaceWith('<button id="start" class="start" onclick=' + 'Sort' + '.run("canvas")' + '>开始</button>');
        });

        $('#floyd').click(function() {
            clearAllTimeOut();
            Canvas.clearAll('canvas');
            $('#start').replaceWith('<button id="start" class="start" onclick=' + 'Floyd' + '.run("canvas")' + '>开始</button>');
        });

        $('#heap').click(function() {
            clearAllTimeOut();
            Canvas.clearAll('canvas');
            $('#start').replaceWith('<button id="start" class="start" onclick=' + 'Heap' + '.run("canvas")' + '>开始</button>');
        });

        $('#dijkstra').click(function() {
            clearAllTimeOut();
            Canvas.clearAll('canvas');
            $('#start').replaceWith('<button id="start" class="start" onclick=' + 'Dijkstra' + '.run("canvas")' + '>开始</button>');
        });

        $('#greedy').click(function() {
            clearAllTimeOut();
            Canvas.clearAll('canvas');
            $('#start').replaceWith('<button id="start" class="start" onclick=' + 'Greedy' + '.run("canvas")' + '>开始</button>');
        });
        $('#insert').click(BinaryTree.insert);
        return this;
    }
};
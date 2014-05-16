/**
 * Created with JetBrains WebStorm.
 * User: sy6765856
 * Date: 14-2-10
 * Time: 下午7:45
 * To change this template use File | Settings | File Templates.
 */
DotTest.init('binaryTree.js')
    .begin();
BinaryTree = function() {
    return extend(Tree, {
        left: [],
        right: [],
        nodes: [],
        level: [],
        max_level: 100,
        run: function() {
            return this;
        },
        add: function(val) {
            if(warnNumber(val, '输入值应该为数字！')) {
                return this;
            }
            this.insert(parseFloat(val));
            return this;
        },
        insert: function(val) {
            return this;
        },
        reset: function() {
            this.left = [];
            this.right = [];
            this.nodes = [];
            for(var h = 0; h < this.max_level; h++) {
                this.level[h] = 0;
            }
            return this;
        }
    });
}();
DotTest.end()
    .calculate();
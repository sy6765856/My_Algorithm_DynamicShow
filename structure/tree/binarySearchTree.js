/**
 * Created with JetBrains WebStorm.
 * User: honsytshen
 * Date: 14-4-8
 * Time: 上午11:38
 * To change this template use File | Settings | File Templates.
 */
BinarySearchTree = function() {
    app.initToolsView('binarySearchTree')
        .singleAddButtonInit('插入')
        .resetButtonInit()
        .inputOneInit('插入值')
        .description('');
    return extend(BinaryTree, {
        run: function() {
            return this;
        },
        insert: function(val) {
            var rt = 0,
                rot = 0,
                nodes = this.nodes,
                left = this.left,
                right = this.right;
            if(this.nodes.length) {
                while(isset(rot)) {
                    rt = rot;
                    var value = nodes[rt];
                    if(val <= value) {
                        rot = left[rt];
                    } else {
                        rot = right[rt];
                    }
                }
                if(val <= nodes[rt]) {
                    left[rt] = nodes.length;
                } else {
                    right[rt] = nodes.length;
                }
            }
            nodes.push(val);
            this.drawTree(0, 0);
            return this;
        },
        drawTree: function(rt, x) {
            this.draw_Tree(rt, x);
            return this;
        },
        draw_Tree: function(rt, x) {
            if(!isset(rt)) {
                return this;
            }
            Canvas.drawCircle();
            if(rt !== x) {
                Canvas.linkTwoCircle();
            }
            if(this.left[rt]) {
                this.draw_Tree(this.left[rt], rt);
            }
            if(this.right[rt]) {
                this.draw_Tree(this.right[rt], rt);
            }
            return this;
        }
    });
}();

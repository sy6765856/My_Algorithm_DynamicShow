/**
 * Created with JetBrains WebStorm.
 * User: honsytshen
 * Date: 14-4-8
 * Time: 上午11:38
 * To change this template use File | Settings | File Templates.
 */
DotTest.init('binarySearchTree.js')
    .begin();
BinarySearchTree = function() {
    app.initToolsView('binarySearchTree')
        .singleAddButtonInit('插入')
        .resetButtonInit()
        .inputOneInit('插入值')
        .description('');
    return extend(BinaryTree, {
        SIG: 'BinarySearchTree',
        run: function() {
            return this;
        },
        insert: function(val) {
            var rt = 0,
                rot = 0,
                nodes = this.nodes,
                left = this.left,
                right = this.right,
                dep = 0;
            if(this.nodes.length) {
                while(isset(rot)) {
                    rt = rot;
                    var value = nodes[rt][0];
                    if(val <= value) {
                        rot = left[rt];
                    } else {
                        rot = right[rt];
                    }
                    dep++;
                }
                if(val <= nodes[rt][0]) {
                    left[rt] = nodes.length;
                } else {
                    right[rt] = nodes.length;
                }
            }
            this.level[dep] ++;
            nodes.push([val, 'green', this.level[dep]]);
            this.drawTree(0, 0, 0);
            return this;
        },
        drawTree: function(rt, x, h) {
            Canvas.clearAll();
            this.draw_Tree(rt, x, h);
            return this;
        },
        draw_Tree: function(rt, x, h) {
            if(!isset(rt)) {
                return this;
            }
            var num = this.level[h],
                ct = this.nodes[rt][2],
                pos = { x: this.width/2/num*ct, y: h*120};
            this.nodes[rt]['pos'] = pos;
            this.drawNode(pos, this.nodes[rt]);
            if(rt !== x) {
                this.linkFatherAndSon(this.nodes[rt], this.nodes[x]);
            }
            if(this.left[rt]) {
                this.draw_Tree(this.left[rt], rt, h + 1);
            }
            if(this.right[rt]) {
                this.draw_Tree(this.right[rt], rt, h + 1);
            }
            return this;
        }
    });
}();
DotTest.end()
    .calculate();
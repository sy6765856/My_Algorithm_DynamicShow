/**
 * Created with JetBrains WebStorm.
 * User: honsytshen
 * Date: 14-1-3
 * Time: 下午5:21
 * To change this template use File | Settings | File Templates.
 */
Prim = extend(AlgorithmBase, {
    run: function(id){
        Canvas.init(id)
            .drawBinaryTree()
            .draw();
    },
    drawTree: function(){

    }
});

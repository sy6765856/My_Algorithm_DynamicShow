/**
 * Created with JetBrains WebStorm.
 * User: honsytshen
 * Date: 14-1-3
 * Time: 下午5:21
 * To change this template use File | Settings | File Templates.
 */
Prim = extend(AlgorithmBase, {
    run: function(id){
        FRAME = 0;
        this.drawRectangles(Canvas.init(id));
    },
    drawTree: function(CanvasObject){
        var treeNodes = new Array();
        treeNodes[0] = {r:6, o:{x:24,y:34}};
        treeNodes[1] = {r:6, o:{x:34,y:34}};
        treeNodes[2] = {r:6, o:{x:64,y:34}};
        treeNodes[3] = {r:6, o:{x:124,y:54}};
        var father = {r:6, o:{x:34,y:154}};
        CanvasObject.drawTreeLevel(treeNodes, father).draw();
    },
    drawGragh: function(CanvasObject){
        var treeNodes = new Array();
        treeNodes[1] = {r:6, o:{x:34,y:34}};
        treeNodes[2] = {r:6, o:{x:64,y:34}};
        treeNodes[3] = {r:6, o:{x:124,y:54}};
        var edges = [[3,2],[1,2]];
        CanvasObject.drawGragh(treeNodes, edges);
    },
    drawRectangles: function(CanvasObject){
        var array = [1,2,3,4,5,6];
        CanvasObject.drawRectangleByNumber(array).draw();
    }
});

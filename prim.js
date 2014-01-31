/**
 * Created with JetBrains WebStorm.
 * User: honsytshen
 * Date: 14-1-3
 * Time: 下午5:21
 * To change this template use File | Settings | File Templates.
 */
Prim = extend(Graph, {
    run: function(id){
        this.init();
        this.drawGragh(Canvas.init(id));
    },
    prim: function(graph){

    },

    drawGragh: function(CanvasObject){
        var treeNodes = new Array();
        treeNodes[1] = {r:6, o:{x:34,y:34}};
        treeNodes[2] = {r:6, o:{x:64,y:34}};
        treeNodes[3] = {r:6, o:{x:124,y:54}};
        var edges = [[3,2],[1,2]];
        Graph.drawGragh(treeNodes, edges);
    },

    drawTree: function(CanvasObject){
        var treeNodes = new Array();
        treeNodes[0] = {r:6, o:{x:24,y:34}};
        treeNodes[1] = {r:6, o:{x:34,y:34}};
        treeNodes[2] = {r:6, o:{x:64,y:34}};
        treeNodes[3] = {r:6, o:{x:124,y:54}};
        var father = {r:6, o:{x:34,y:154}};
        CanvasObject.drawTreeLevel(treeNodes, father);
    }
});

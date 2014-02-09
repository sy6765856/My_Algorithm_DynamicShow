/**
 * Created with JetBrains WebStorm.
 * User: honsytshen
 * Date: 14-1-3
 * Time: 下午5:21
 * To change this template use File | Settings | File Templates.
 */
Prim = extend(Graph, {
    run: function(id){
        Canvas.init(id);
        this.init('Prim')
            .generateGraph()
            .prim()
            .draw();
        console.log(this.NAME);
        console.log(this.minLength);
        return this;
    },
    prim_init: function(){
        this.minLength = 0;
        return this;
    },
    prim: function(){
        this.prim_init();

        var source = 0,
            min = this.INF,
            edges = this.edges,
            dis = [], edgeIndex = [],
            f = [];

        for(var cnt = 0; cnt < this.nodes.length; cnt++) {
            dis[cnt] = this.INF;
        }

        f[source] = 1;
        this.changeNodeColor(source, "green")
            .saveGraph();

        for(var cnt = 1; cnt < this.nodes.length; cnt++) {
            for(var e = this.first[source]; e; e = this.nxt[e]) {
                var v = edges[e][1];
                if(!f[v] && dis[v] > edges[e][2]) {
                    dis[v] = edges[e][2];
                    edgeIndex[v] = e;
                }
            }
            min = this.INF;
            var pre_source = source;
            for(var i = 0; i < this.nodes.length; i++) {
                if(!f[i] && edgeIndex[i]) {
                    this.changeEdgeColor(edgeIndex[i], 'red')
                        .saveGraph();
                    if(dis[i] < min) {
                        min = dis[i];
                        if(source === pre_source) {
                            this.changeEdgeColor(edgeIndex[i], 'yellow')
                                .saveGraph();
                        } else {
                            this.changeEdgeColor(edgeIndex[i], 'yellow')
                                .changeEdgeColor(edgeIndex[source], 'black')
                                .saveGraph();
                        }
                        source = i;
                    } else {
                        this.changeEdgeColor(edgeIndex[i], 'black')
                            .saveGraph();
                    }
                }
            }
            f[source] = 1;
            this.changeNodeColor(source, "green")
                .saveGraph();

            this.minLength += min;
        }
        return this;
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

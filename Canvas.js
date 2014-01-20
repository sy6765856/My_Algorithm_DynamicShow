/**
 * Created with JetBrains WebStorm.
 * User: honsytshen
 * Date: 14-1-2
 * Time: 下午3:47
 * To change this template use File | Settings | File Templates.
 */
var INF = 10000,
    frame = 0,
    IndexINF = 100000;
Canvas = function(){
    return extend(CanvasBase, {
            draw : function() {
                var ctx = this.ctx;
                ctx.fillStyle = 'rgba(255, ' + frame + ', 0, .5)';
                ctx.fillRect(frame,frame, 10, 10);
                if(frame > 200) return;
                frame += 4;
                var tt = setTimeout("Canvas.draw();", 1000);
                console.log(tt);
            },
            highLight: function() {

            },
            drawRectangleByNumber: function(array, width) {
                width = width ? width : 10;
                var pos = {x:10, y:100};
                for(var i in array) {
                    this.drawRectangle(width, array[i]*10, pos);
                    pos.x += width + 1;
                }
            },
            drawGragh: function(nodes, edges) {
                if(nodes) {
                    for(var key in nodes) {
                        var node = nodes[key];
                        this.drawCircle(node.r, node.o);
                    }
                }
                if(edges) {
                    for(var key in edges) {
                        var edge = edges[key],
                            s = edge[0],
                            e = edge[1];
                        this.linkTwoCircle(nodes[s], nodes[e]);
                    }
                }
            },
            drawTreeLevel: function(treeNodes, father) {
                for(var key in treeNodes) {
                    var node = treeNodes[key];
                    this.drawCircle(node.r, node.o);
                }
                if(father) {
                    this.drawCircle(father.r, father.o);
                    for(var key in treeNodes) {
                        var node = treeNodes[key];
                        this.linkTwoCircle(father, node);
                    }
                }
                return this;
            },
            linkTwoCircle: function(A, B, str) {
                var u = A.o.y < B.o.y ? A : B,
                    d = A.o.y < B.o.y ? B : A;
                var a = d.o.y - u.o.y,
                    b = u.o.x - d.o.x,
                    c = Math.sqrt(a*a + b*b);

                this.drawLine({x: d.o.x + d.r/c*b, y: d.o.y - d.r/c*a}
                    , {x: u.o.x - u.r/c*b, y: u.o.y + u.r/c*a});
            }
    });
}();
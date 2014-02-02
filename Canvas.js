/**
 * Created with JetBrains WebStorm.
 * User: honsytshen
 * Date: 14-1-2
 * Time: 下午3:47
 * To change this template use File | Settings | File Templates.
 */
Canvas = function(){
    return extend(CanvasBase, {
            drawRectangleByNumber: function(array, width) {
                width = width ? width : (400 - array.length)/array.length;
                var h = 100/(array.max() - array.min());
                var pos = {x:25, y:200};
                for(var i in array) {
                    this.drawRectangle(width, array[i]*h, pos);
                    pos.x += width + 1;
                }
                return this;
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
            linkTwoCircle: function(A, B, option) {
                var opt = {style: option.style?option.style:{color: "red", lineWidth: 1}
                    ,str: option.str?option.str:""};
                if(A && B) {
                    var u = A.o.y < B.o.y ? A : B,
                        d = A.o.y < B.o.y ? B : A;
                    var a = d.o.y - u.o.y,
                        b = u.o.x - d.o.x,
                        c = Math.sqrt(a*a + b*b);
                    this.drawLine({x: d.o.x + d.r/c*b, y: d.o.y - d.r/c*a}
                        , {x: u.o.x - u.r/c*b, y: u.o.y + u.r/c*a}, opt.style);

                    if(opt.str) {
                        this.writeText(str, {x: (A.o.x+ B.o.x)/2, y:(A.o.y+ B.o.y)/2});
                    }
                }
                return this;
            }
    });
}();
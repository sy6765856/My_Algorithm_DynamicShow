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

                var h = 100/(array.max() - array.min()),
                    pos = {x:120 + width, y:350};
                for(var i in array) {
                    this.drawRectangle(width, array[i]*h, pos, array[i]);
                    pos.x += width + 1;
                }
                return this;
            },

            drawActivities: function(array, minimum, maximum, pos, width, height, spacing) {
                var widthPer = width/(maximum - minimum + 1),
                    row = 0;
                for(var key in array) {
                    var st = array[key][0],
                        ed = array[key][1],
                        ps = { x: pos.x + (ed - minimum + 1)*widthPer, y: pos.y + row*(height+spacing) + height};
                    this.drawRectangle(widthPer * (ed - st + 1), height, ps);
                    row ++;
                }
                return this;
            },

            drawSquareArray: function(array, width) {

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
                var opt = {style: option && option.hasOwnProperty('style')?option.style:{color: "red", lineWidth: 1}
                    ,str: option && option.hasOwnProperty('str')?option.str:""};
                if(A && B) {
                    var u = A.o.y < B.o.y ? A : B,
                        d = A.o.y < B.o.y ? B : A;
                    var a = d.o.y - u.o.y,
                        b = u.o.x - d.o.x,
                        c = Math.sqrt(a*a + b*b);
                    this.drawLine({x: d.o.x + d.r/c*b, y: d.o.y - d.r/c*a}
                        , {x: u.o.x - u.r/c*b, y: u.o.y + u.r/c*a}, opt.style);

                    if(opt.str) {
                        this.writeText(opt.str, {x: (A.o.x+ B.o.x)/2, y:(A.o.y+ B.o.y)/2});
                    }
                }
                return this;
            },

            saveCanvasFrame: function() {
                this.imageDataTmp = this.imageData;
                this.getImageData()
                    .imageDataQUEUE.push(this.imageData);
                this.imageData = this.imageDataTmp;
                return this;
            },

            drawCanvasFrame: function(imageData) {
                this.imageDataTmp = this.imageData;
                this.imageData = imageData;
                this.setImageData();
                this.imageData = this.imageDataTmp;
                return this;
            }
    });
}();
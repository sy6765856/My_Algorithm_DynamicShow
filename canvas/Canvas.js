/**
 * Created with JetBrains WebStorm.
 * User: honsytshen
 * Date: 14-1-2
 * Time: 下午3:47
 * To change this template use File | Settings | File Templates.
 */
DotTest.init('Canvas.js')
    .begin();
Canvas = function(){
    return extend(CanvasBase, {
            drawRectangleByNumber: function(array, color, width) {
                width = width ? width : (400 - array.length)/array.length;
                color = isset(color) ? color : [];
                var h = 100/(array.max() - array.min()),
                    pos = {x:120 + width, y:350};
                for(var i in array) {
                    if(typeof array[i] == "function") {
                        continue;
                    }
                    this.drawRectangle(width, array[i]*h, pos, array[i], color[i]);
                    pos.x += width + 5;
                }
                return this;
            },
            drawBoard: function(grids, color, row, col) {
                color = isset(color)? color : [];
                Table.drawGrids(grids, color, row, col);
                return this;
            },

            drawActivities: function(array, minimum, maximum, pos, width, height, spacing) {
                var widthPer = width/(maximum - minimum + 1),
                    row = 0,
                    textOffset = widthPer/4;
                for(var key in array) {
                    var st = array[key][0],
                        ed = array[key][1],
                        ps = { x: pos.x + (ed - minimum + 1)*widthPer, y: pos.y + row*(height+spacing) + height},
                        color = array[key][2];
                    if(isset(st) && isset(ed)) {
                        this.setColor(color)
                            .drawRectangle(widthPer * (ed - st + 1), height, ps)
                            .writeText(st, { x: pos.x + (st - minimum )*widthPer - textOffset, y: ps.y - height/4})
                            .writeText(ed, { x: pos.x + (ed - minimum + 1 )*widthPer + textOffset, y: ps.y - height/4})
                            .restoreColor()
                            .drawSeparate(ps, height, (ed - st), widthPer);
                        row ++;
                    }
                }
                return this;
            },

            drawSeparate: function(pos, height, num, widPer){
                if(widPer < 10) {

                    return this;
                }
                for(var i = 0; i < num ; i++) {
                    this.lineColor = 'skyblue';
                    this.drawLine({x: pos.x - (i+1) * widPer, y: pos.y}, { x: pos.x - (i + 1) *widPer, y: pos.y - height});
                }
                return this;
            },

            drawSquareArray: function(array, width) {
                return this;
            },

            drawGrid: function(pos, width, str, color) {
                var offX = 25,
                    offY = 15;
                if(str == undefined) {
                    str = '';
                }
                this.fontColor = 'red';
                this.drawRectangle(width, width, pos, 0, color)
                    .writeText(str,{ x: pos.x - offX, y: pos.y - offY});
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
            },

            writeTextArray: function(str, highlights, pos) {
                var sp = 20;
                for(var i = 0; i < str.length; i++) {
                    if(highlights[i]) {
                        this.setFont('red')
                            .writeText(str[i], { x: pos.x + i*sp, y: pos.y})
                            .restoreFont();
                    } else {
                        this.writeText(str[i], { x: pos.x + i*sp, y: pos.y});
                    }
                }
                return this;
            }
    });
}();
DotTest.end()
    .calculate();
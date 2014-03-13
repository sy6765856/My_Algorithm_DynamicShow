/**
 * Created with JetBrains WebStorm.
 * User: sy6765856
 * Date: 14-2-6
 * Time: 下午5:03
 * To change this template use File | Settings | File Templates.
 */
Table = function() {
    return extend(Canvas, {
        init: function(pos, tableWidth, tableHeight) {
            this.pos = pos ? pos : {x: 300, y:450};
            this.tableWidth = tableWidth ? tableWidth : 40;
            this.tableHeight = tableHeight ? tableHeight : 20;
            this.offset_x = this.tableWidth/2 - 3;
            this.offset_y = this.tableHeight/2 + 3;
            return this;
        },
        drawTableBody: function(row, col, rowBegin, colBegin, pos) {
            rowBegin = isset(rowBegin) ? rowBegin : -1;
            colBegin = isset(colBegin) ? colBegin : -1;
            Canvas.lineColor = "black";

            var tableWidth = this.tableWidth,
                tableHeight = this.tableHeight,
                pos = pos ? pos : this.pos,
                x_now, y_now;
            for(var i = rowBegin; i <= row; i++) {
                y_now = pos.y + i * tableHeight;
                x_now = pos.x + colBegin * tableWidth;

                this.drawLine({x: x_now, y: y_now}
                    ,{x: pos.x + col * tableWidth, y: y_now});
            }
            for(var j = colBegin; j <= col; j++) {
                x_now = pos.x + j * tableWidth;
                y_now = pos.y + rowBegin * tableHeight;

                this.drawLine({x: x_now, y: y_now}
                    ,{x: x_now, y: pos.y + row * tableHeight});
            }
            return this;
        },

        drawTableContent: function(table, row, col) {
            var tableWidth = this.tableWidth,
                tableHeight = this.tableHeight,
                offset_x = this.offset_x,
                offset_y = this.offset_y,
                pos = this.pos;

            for(var i = 0; i < row; i++){
                for(var j = 0; j < col; j++){
                    if(table[i][j] !== undefined) {
                        this.writeText(table[i][j], {x: pos.x + j * tableWidth + offset_x
                            , y: pos.y + i * tableHeight + offset_y});
                    }
                }
            }
            return this;
        },

        drawArrayContent: function(array, col) {
            var tableWidth = this.tableWidth,
                offset_x = this.offset_x,
                offset_y = this.offset_y,
                pos = this.pos;
            for(var i = 0; i < col; i++) {
                if(array[i] !== undefined) {
                    this.writeText(array[i], {x: pos.x + i * tableWidth + offset_x, y: pos.y + offset_y});
                }
            }
            return this;
        },
        drawStackAndQueueContent: function(array, row) {
            var tableHeight = this.tableHeight,
                offset_x = this.offset_x,
                offset_y = this.offset_y,
                pos = this.pos;
            for(var i = 0; i < row; i++) {
                if(array[i] !== undefined) {
                    this.writeText(array[i], {x: pos.x +  offset_x, y: pos.y - i * tableHeight + offset_y});
                }
            }
            return this;
        },
        separateGrad: function(kind) {
            var pos = this.pos;
            if(kind == 2) {
                this.drawLine({x: pos.x - this.tableWidth, y: pos.y - this.tableHeight}, pos);
            } else if(kind == 3) {
                this.drawLine({x: pos.x - this.tableWidth/2, y: pos.y - this.tableHeight}, pos)
                    .drawLine({x: pos.x - this.tableWidth, y: pos.y - this.tableHeight/2}, pos);
            }
            return this;
        },
        drawNames: function(rowNames, colNames, kind) {
            kind = kind ? kind : 2;
            this.separateGrad(kind);
            return this;
        },
        drawTable: function(table, row, col, rowNames, colNames) {
            this.drawNames(rowNames, colNames)
                .drawTableBody(row, col)
                .drawTableContent(table, row, col);
            return this;
        },
        drawStackAndQueueBorder: function(num, type) {
            var border = 2,
                pos = this.pos;
            Canvas.lineColor = 'green';
            Canvas.setOpacity(0.5);
            if(type === 'stack') {
                this.drawRectangle(this.tableWidth, this.tableHeight * (num + 1), { x: pos.x + this.tableWidth, y: pos.y + this.tableHeight});

            } else {
                this.drawRectangle(this.tableWidth, this.tableHeight * (num + 2), { x: pos.x + this.tableWidth, y: pos.y + this.tableHeight * 2});
            }
            Canvas.restoreOpacity();
//            this.drawLine({ x: this.pos.x - border, y: 60}, { x:this.pos.x - border, y: this.pos.y + this.tableHeight}, {color: 'red'})
//                .drawLine({ x: this.pos.x + this.tableWidth + border, y: 60}, { x: this.pos.x + this.tableWidth + border, y: this.pos.y + this.tableHeight}, {color: 'red'})
//            if(type === 'stack') {
//                this.drawLine({ x: this.pos.x - border, y: this.pos.y + this.tableHeight}, { x: this.pos.x + this.tableWidth + border, y: this.pos.y + this.tableHeight}, {color: 'red'});
//            }
            return this;
        },
        render3Dback: function(row, col, pos) {
            var tableWidth = this.tableWidth,
                tableHeight = this.tableHeight,
                ps = { x: pos.x + col * this.tableWidth, y: pos.y},
                x_now, y_now,
                angle = 30/180 * Math.PI,
                length = 20,
                offsetX = length * Math.cos(angle),
                offsetY = -length * Math.sin(angle);

            this.drawLine(pos, { x: pos.x + offsetX, y: pos.y + offsetY})
                .drawLine({ x: pos.x + offsetX, y: pos.y + offsetY}
                    ,{ x: ps.x + offsetX, y: ps.y + offsetY});
            for(var i = 0; i <= row; i++) {
                y_now = ps.y + i * tableHeight;
                x_now = ps.x;

                this.drawLine({x: x_now, y: y_now}
                    ,{x: x_now + offsetX, y: y_now + offsetY});
            }
            this.drawLine({x: ps.x + offsetX, y: ps.y + offsetY}
            ,{x: ps.x + offsetX, y: ps.y + row * tableHeight  + offsetY});
            return this;
        },
        render3Dborder: function(type) {

            return this;
        },
        drawStackAndQueue: function(array, row, type) {
            if(array.length === 0) {
                this.drawStackAndQueueBorder(type);
                return this;
            }
            var topOffset = this.tableHeight * (row-1),
                textOffset = 10;
            this.drawTableBody(row, 1, 0, 0, {x: this.pos.x, y: this.pos.y - topOffset})
                .render3Dback(row, 1, {x: this.pos.x, y: this.pos.y - topOffset})
                .drawStackAndQueueContent(array, row)
                .drawStackAndQueueBorder(array.length, type)
                .render3Dborder(type);
            switch (type) {
                case 'queue':
                    this.writeText('front', { x: this.pos.x, y: this.pos.y + this.tableHeight + textOffset});
                    break;
                case 'stack':
                    this.writeText('top', { x: this.pos.x, y: this.pos.y - topOffset - textOffset});
                    break;
            }
            return this;
        },

        drawArray: function(array, col) {
            this.drawTableBody(1, col, 0, 0)
                .drawArrayContent(array, col);
            return this;
        },
        highLightRectangles: function(array) {
            array = array ? array : [];
            for(var i = 0; i < array.length; i++) {
                this.highLightRectangle({x: this.pos.x + this.tableWidth * array[i][1]
                    , y: this.pos.y + this.tableHeight * array[i][0]}, array[i][2]);
            }
            return this;
        },
        highLightRectangle: function(pos, color) {
            color = color ? color : 'black';
            Canvas.drawRectangleBound(pos, this.tableWidth, this.tableHeight, color);
            return this;
        }
    });
}();
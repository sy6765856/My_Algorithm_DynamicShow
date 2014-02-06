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
            this.pos = pos ? pos : {x: 100, y:100};
            this.tableWidth = tableWidth ? tableWidth : 20;
            this.tableHeight = tableHeight ? tableHeight : 20;
            this.offset_x = this.tableWidth/2 - 3;
            this.offset_y = this.tableHeight/2 + 3;
            return this;
        },
        drawTableBody: function(row, col) {
            var tableWidth = this.tableWidth,
                tableHeight = this.tableHeight,
                pos = this.pos,
                x_now, y_now;
            for(var i = 0; i <= row; i++) {
                y_now = pos.y + i * tableHeight;
                this.drawLine({x: pos.x, y: y_now}
                    ,{x: pos.x + col * tableWidth, y: y_now}, 'black');
            }
            for(var j = 0; j <= col; j++) {
                x_now = pos.x + j * tableWidth;
                this.drawLine({x: x_now, y: pos.y}
                    ,{x: x_now, y: pos.y + row * tableHeight}, 'black');
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
        drawTable: function(table, row, col) {
            this.drawTableBody(row, col)
                .drawTableContent(table, row, col);
            return this;
        },

        drawArray: function(array, col) {
            this.drawTableBody(1, col)
                .drawArrayContent(array, col);
            return this;
        }
    });
}();
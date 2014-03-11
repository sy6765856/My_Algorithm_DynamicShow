/**
 * Created with JetBrains WebStorm.
 * User: sy6765856
 * Date: 14-3-8
 * Time: 下午5:04
 * To change this template use File | Settings | File Templates.
 */
BoardCover = function() {
    $('#boardCover').click(FunctionTemplate.addSingleButton('BoardCover', '开始覆盖'));
    return extend(DivideAndConquer, {
        board: [],
        init: function() {
            return this;
        },
        run: function(scale, x, y) {
            this.divideAndConquer(scale, x, y);
            return this;
        },
        add: function(scale) {
            this.divideAndConquer(scale, 1, 1);
            Table.drawGrids(this.board, this.width, this.height);
            return this;
        },
        generateBoard: function(scale) {
            var ret = 1,
                mul = 2;
            while(scale) {
                if(scale%2) {
                    ret *= mul;
                }
                scale = parseInt(scale/2);
                mul *= mul;
            }
            this.width = ret;
            this.height = ret;
            return this;
        },
        divide_conquer_init: function(x, y) {
            this.index = 1;
            for(var i = 0; i < this.width; i++) {
                this.board[i] = [];
            }
            this.board[x][y] = 0;
            return this;
        },
        divideAndConquer: function(scale, x, y) {
            this.generateBoard(scale);
            var width =  this.width,
                height = this.height;
            this.divide_conquer_init(x, y)
                .divide_conquer(0, width - 1, 0, height - 1, x, y);
            return this;
        },
        in: function(low_x, high_x, x, low_y, high_y, y) {
            return (x >= low_x && x <= high_x && y >= low_y && y <= high_y);
        },
        divide_conquer: function(low_x, high_x, low_y, high_y, x, y) {
            if(high_x === low_x || high_y === low_y ) {
                return this;
            }
            var midx = parseInt( (low_x + high_x) / 2),
                midy = parseInt( (low_y + high_y) / 2),
                board = this.board,
                index = this.index,
                indx = index;
            //left-top block
            if(!this.in(low_x, midx, x, low_y, midy, y)) {
                board[midx][midy] = indx;
                index ++;
                this.divide_conquer(low_x, midx, low_y, midy, midx, midy);
            } else {
                this.divide_conquer(low_x, midx, low_y, midy, x, y);
            }

            //left-bottom block
            if(!this.in(low_x, midx, x, midy + 1, high_y, y)) {
                board[midx][midy + 1] = indx;
                index ++;
                this.divide_conquer(low_x, midx, midy + 1, high_y, midx, midy + 1);
            } else {
                this.divide_conquer(low_x, midx, midy + 1, high_y, x, y);
            }

            //right-top block
            if(!this.in(midx + 1, high_x, x, low_y, midy, y)) {
                board[midx + 1][midy] = indx;
                index ++;
                this.divide_conquer(midx + 1, high_x, low_y, midy, midx + 1, midy);
            } else {
                this.divide_conquer(midx + 1, high_x, low_y, midy, x, y);
            }

            //right-bottom block
            if(!this.in(midx + 1, high_x, x, midy + 1, high_y, y)) {
                board[midx + 1][midy + 1] = indx;
                index ++;
                this.divide_conquer(midx + 1, high_x, midy + 1, high_y, midx + 1, midy + 1);
            } else {
                this.divide_conquer(midx + 1, high_x, midy + 1, high_y, x, y);
            }
            return this;
        }
    });
}();
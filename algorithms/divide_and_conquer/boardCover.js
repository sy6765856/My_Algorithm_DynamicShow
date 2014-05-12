/**
 * Created with JetBrains WebStorm.
 * User: sy6765856
 * Date: 14-3-8
 * Time: 下午5:04
 * To change this template use File | Settings | File Templates.
 */
DotTest.init('boardcover.js')
    .begin();
BoardCover = function() {
    app.initToolsView('boardCover')
        .inputOneInit('棋盘大小（2的次方数）')
        .informationInit('棋盘上特殊格位置')
        .inputTwoInit('x坐标')
        .inputThreeInit('y坐标')
        .singleAddButtonInit('开始覆盖')
        .description('在2^n的棋盘上有且仅有一个特殊方格，除特殊方格外的所有方格要求被四种L型的地砖覆盖。本问题采用分治的方法，对于2^n的棋盘，递归为2^(n-1)的子问题。特殊方格标记为零，其他标记相同的L型为一块地砖。');
    return extend(DivideAndConquer, {
        board: [],
        run: function(scale, x, y) {
            this.clearAll()
                .divideAndConquer(scale, x, y);
            return this;
        },
        check: function(v) {
            if(isNaN(v)) {
                alert('坐标应为整数！');
                return this;
            }
            return this;
        },
        add: function(scale) {
            var x = $('#input2').val(),
                y = $('#input3').val();
            this.clearAll();
            this.check(scale)
                .check(x)
                .check(y);
            this.divideAndConquer(scale, x, y)
                .draw();
//            Table.drawGrids(this.board, this.height, this.width)
//                .drawXYCoordinateSystem();
            return this;
        },
        generateBoard: function(scale, x, y) {
            var ret = 1,
                mul = 2;
            while(scale) {
                if(scale%2) {
                    ret *= mul;
                }
                scale = parseInt(scale/2);
                mul *= mul;
            }
            if(!(x >=0 && x < ret) || !(y >=0 && y < ret)) {
                alert('特殊格须是棋盘上一点！');
                return this;
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
            this.generateBoard(scale, x, y);
            var width =  this.width,
                height = this.height;

            this.divide_conquer_init(x, y)
                .init('BoardCover', Scroll.interval);
            var target = new Object();
            deepCopy(target, this.board);
            this.BoardQueue.push(target);
            this.divide_conquer(0, width - 1, 0, height - 1, x, y);
            return this;
        },
        in: function(low_x, high_x, x, low_y, high_y, y) {
            return (x >= low_x && x <= high_x && y >= low_y && y <= high_y);
        },
        colorInit: function(low_x, high_x, low_y, high_y, x, y) {
            var color = [];
            for(var row = 0; row < this.height; row ++) {
                color[row] = [];
            }
            for(var row = low_x; row <= high_x; row ++) {
                color[row] = [];
                for(var col = low_y; col <= high_y; col ++) {
                    color[row][col] = "yellow";
                }
            }
            color[x][y] = "red";
            this.BoardColor.push(color);
            return this;
        },
        divide_conquer: function(low_x, high_x, low_y, high_y, x, y) {
            if(high_x === low_x || high_y === low_y ) {
                return this;
            }
            var target = new Object(),
                color = this.colorInit(low_x, high_x, low_y, high_y, x, y);
            deepCopy(target, this.board);
            this.BoardQueue.push(target);

            var midx = parseInt( (low_x + high_x) / 2),
                midy = parseInt( (low_y + high_y) / 2),
                board = this.board,
                index = this.index;
            if(!this.in(low_x, midx, x, low_y, midy, y)) {
                board[midx][midy] = index;
            }
            if(!this.in(low_x, midx, x, midy + 1, high_y, y)) {
                board[midx][midy + 1] = index;
            }
            if(!this.in(midx + 1, high_x, x, low_y, midy, y)) {
                board[midx + 1][midy] = index;
            }
            if(!this.in(midx + 1, high_x, x, midy + 1, high_y, y)) {
                board[midx + 1][midy + 1] = index;
            }

            this.index ++;
            //left-top block
            if(!this.in(low_x, midx, x, low_y, midy, y)) {
                this.divide_conquer(low_x, midx, low_y, midy, midx, midy);
            } else {
                this.divide_conquer(low_x, midx, low_y, midy, x, y);
            }

            //left-bottom block
            if(!this.in(low_x, midx, x, midy + 1, high_y, y)) {
                this.divide_conquer(low_x, midx, midy + 1, high_y, midx, midy + 1);
            } else {
                this.divide_conquer(low_x, midx, midy + 1, high_y, x, y);
            }

            //right-top block
            if(!this.in(midx + 1, high_x, x, low_y, midy, y)) {
                this.divide_conquer(midx + 1, high_x, low_y, midy, midx + 1, midy);
            } else {
                this.divide_conquer(midx + 1, high_x, low_y, midy, x, y);
            }

            //right-bottom block
            if(!this.in(midx + 1, high_x, x, midy + 1, high_y, y)) {
                this.divide_conquer(midx + 1, high_x, midy + 1, high_y, midx + 1, midy + 1);
            } else {
                this.divide_conquer(midx + 1, high_x, midy + 1, high_y, x, y);
            }
            return this;
        }
    });
}();
DotTest.end()
    .calculate();
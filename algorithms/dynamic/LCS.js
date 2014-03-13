/**
 * Created with JetBrains WebStorm.
 * User: sy6765856
 * Date: 14-3-8
 * Time: 下午5:09
 * To change this template use File | Settings | File Templates.
 */
LCS = function() {
    app.initToolsView('LCS')
        .inputOneInit('字符串a')
        .inputTwoInit('字符串b')
        .startButtonInit()
        .resetButtonInit();

    return extend(Dynamic, {
        dp: [],
        link: [],
        pos: { x: 40, y: 60},
        reset: function() {
            this.str1 = this.str2 = '';
            return this;
        },
        run: function() {
            this.str1 = $('#input1').val();
            this.str2 = $('#input2').val();
            $('#input1').val('').focus();
            $('#input2').val('');
            if(!(this.str1 && this.str2)) {
                alert("请输入两个字符串!");
                return this;
            }
            Canvas.init('canvas');
            this.init('canvas')
                .LCS()
//            console.log(Canvas.imageDataQUEUE.length);
                .draw();
            console.log(this.chose1, this.chose2);
            return this;
        },
        drawing: function() {
            if(Canvas.imageFrame >= Canvas.imageDataQUEUE.length) {
                console.log("end!");
                return this;
            }
            this.drawCanvasFrame(Canvas.imageDataQUEUE[Canvas.imageFrame]);
            Canvas.imageFrame++;
            setTimeout.call(null, 'LCS.drawing();', 300);
            return this;
        },
        LCS_init: function() {
            var dp = this.dp,
                link = this.link;
            for(var i = 0; i <= this.str1.length; i++) {
                dp[i] = [];
                link[i] = [];
                for(var j = 0; j <= this.str2.length; j++) {
                    dp[i][j] = 0;
                }
            }
            this.chose_init();
            return this;
        },
        chose_init: function() {
            this.chose1 = [];
            this.chose2 = [];
            return this;
        },
        LCS: function() {
            this.LCS_init();
            var a = this.str1,
                b = this.str2,
                dp = this.dp,
                link = this.link,
                chose1 = this.chose1,
                chose2 = this.chose2;
            this.saveTextArray();
            link[0][0] = link[0][1] = link[1][0] = 0;
            for(var i = 0; i < a.length; i++) {
                for(var j = 0; j < b.length; j++) {
//                    this.saveTextArray();
                    if(dp[i][j+1] > dp[i+1][j]) {
                        dp[i+1][j+1] = dp[i][j+1];
                        link[i+1][j+1] = 1;
                    } else if(dp[i][j+1] <= dp[i+1][j]) {
                        dp[i+1][j+1] = dp[i+1][j];
                        link[i+1][j+1] = 2;
                    }
                    var add = (a[i] === b[j] ? 1 : 0);
                    if(dp[i][j] + add > dp[i+1][j+1]) {
                        dp[i+1][j+1] = dp[i][j] + add;
                        link[i+1][j+1] = add ? 3 : 4;
                    }
                }
            }
            var fi = a.length,
                li = b.length;
            console.log(dp[fi][li]);
            while(link[fi][li]) {
                switch (link[fi][li]) {
                    case 1:
                        fi --;
                        break;
                    case 2:
                        li --;
                        break;
                    case 3:
                        fi --;
                        li --;
                        chose1[fi - 0] = 1;
                        chose2[li - 0] = 1;
                        break;
                    case 4:
                        fi --;
                        li --;
                        break;
                }
            }
            this.saveTextArray();
            return this;
        },
        saveTextArray: function() {
            Canvas.writeTextArray(this.str1, this.chose1, this.pos)
                  .writeTextArray(this.str2, this.chose2, {x: this.pos.x, y: this.pos.y + 20})
                  .saveCanvasFrame()
                  .clearAll();
            return this;
        }
    });
}();
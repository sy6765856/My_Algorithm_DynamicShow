/**
 * Created with JetBrains WebStorm.
 * User: sy6765856
 * Date: 14-3-8
 * Time: 下午5:09
 * To change this template use File | Settings | File Templates.
 */
DotTest.init('LCS.js')
    .begin();
LCS = function() {
    app.initToolsView('LCS')
        .inputOneInit('字符串a', '请输入一个字符串')
        .inputTwoInit('字符串b', '请输入一个字符串')
        .startButtonInit()
        .resetButtonInit()
        .description('现有两个你给出的字符串A,B。最长公共子序列问题就是求解A,B中相同子序列的最大长度，最后会给出最大公共子序列长度及子序列。');

    return extend(Dynamic, {
        SIG: 'LCS',
        dp: [],
        link: [],
        pos: { x: 40, y: 60},
        reset: function() {
            this.str1 = this.str2 = '';
            this.clearAll();
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
            Info.init()
                .setPermanent('最长公共子序列');
            ComplexityAnalysis.init(this.SIG, this.str1.length + this.str2.length);
            this.init('canvas')
                .LCS()
                .draw();
            ComplexityAnalysis.compare();
            return this;
        },
        drawing: function() {
            if(Canvas.imageFrame >= Canvas.imageDataQUEUE.length) {
                LCS.drawAfter();
                return this;
            }
            this.drawCanvasFrame(Canvas.imageDataQUEUE[Canvas.imageFrame]);
            Info.permanent()
                .temporary(Canvas.imageFrame);
            Canvas.imageFrame++;
            setTimeout.call(null, 'LCS.drawing();', Scroll.interval);
            return this;
        },
        drawAfter: function() {
            $('#answer').html('最长公共子序列长度为：' + this.dp[this.str1.length][this.str2.length]);
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
                    this.saveDpArray();
                    ComplexityAnalysis.addCalculation(1);
                    if(dp[i][j+1] > dp[i+1][j]) {
                        dp[i+1][j+1] = dp[i][j+1];
                        link[i+1][j+1] = 1;
                        ComplexityAnalysis.addCalculation(2);
                    } else if(dp[i][j+1] <= dp[i+1][j]) {
                        dp[i+1][j+1] = dp[i+1][j];
                        link[i+1][j+1] = 2;
                        ComplexityAnalysis.addCalculation(2);
                    }
                    var add = (a[i] === b[j] ? 1 : 0);
                    if(dp[i][j] + add > dp[i+1][j+1]) {
                        dp[i+1][j+1] = dp[i][j] + add;
                        ComplexityAnalysis.addCalculation(2);
                        link[i+1][j+1] = add ? 3 : 4;
                    }
                }
            }
            var fi = a.length,
                li = b.length;
            while(link[fi][li]) {
                this.saveTextArray();
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
            var ps = { x: this.pos.x + 90, y: this.pos.y + 60};
            Canvas.writeTextArray(this.str1, this.chose1, ps)
                  .writeTextArray(this.str2, this.chose2, {x: ps.x, y: ps.y + 50})
                  .saveCanvasFrame()
                  .clearAll();
            return this;
        }
    });
}();
DotTest.end()
    .calculate();
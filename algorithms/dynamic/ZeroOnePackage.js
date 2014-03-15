/**
 * Created with JetBrains WebStorm.
 * User: honsytshen
 * Date: 14-3-12
 * Time: 下午3:18
 * To change this template use File | Settings | File Templates.
 */
ZeroOnePackage = function() {
    app.initToolsView('zeroOnePackage')
        .startButtonInit('开始')
        .addButtonInit()
        .inputOneInit('物品重量')
        .inputTwoInit('物品价值')
        .inputThreeInit('背包大小')
        .setButtonInit('设置背包大小')
        .resetButtonInit()
        .description('小偷抢劫一家商店时带了一个能容纳限定重量的背包，商店里有一些物品，每个商品有一定价值和重量。假设背包能容纳的物品重量，商品的价值重量均为整数，且每种商品都只有一个，求解小偷可以偷走的最大价值。');
    return extend(Dynamic, {
        goods: [],
        dp: [],
        reset: function() {
            this.goods = [];
            this.clearAll();
            $('#info').html('当前无物品。');
            return this;
        },
        add: function(w, v) {
            if(!w) {
                alert('请输入物品重量！');
                return this;
            }
            if(!v) {
                alert('请输入物品价值！');
                return this;
            }
            this.goods.push([parseInt(w), parseInt(v)]);
            this.drawGoods();
            $('#input2').val('');
            $('#input1').val('').focus();
            $('#info').html('成功加入物品，重量为：' + w + '，价值为：' + v + '。当前物品共' + this.goods.length + '个。');
            return this;
        },
        set: function() {
            var size = $('#input3').val();
            if(!size) {
                alert('请输入背包大小！');
                return this;
            }
            this.setPackageSize(size);
            return this;
        },
        setPackageSize: function(size) {
            if(warnNumber(size, '背包大小应为整数！')) {
                return this;
            }
            this.packageSize = parseInt(size);
            $('#info').html('背包大小为：' + this.packageSize);
            return this;
        },
        drawGoods: function() {
            Table.drawGoods(this.goods);
            return this;
        },
        run: function() {
            if(!isset(this.packageSize)) {
                alert('请设置背包大小！');
                return this;
            }
            this.zeroOne_package();
            return this;
        },
        zeroOne_package: function() {
            this.zeroOnePackage();
            return this;
        },
        zeroOnePackageInit: function() {
            for(var i = 0; i <= this.packageSize; i++) {
                this.dp[i] = 0;
            }
            return this;
        },
        zeroOnePackage: function() {
            var n = this.goods.length,
                size = this.packageSize,
                dp = this.dp;
            this.zeroOnePackageInit();
            for(var i = 0; i < n; i++) {
                var good = this.goods[i];
                for(var w = size; w >= good[0]; w--) {
                    if(dp[w - good[0]] + good[1] > dp[w]) {
                        dp[w] = dp[w - good[0]] + good[1];
                    } else {

                    }
                }
            }

            $('#info').html('背包大小为：' + size + '，该背包能装的最大物品价值为：' + dp[size]);
            return this;
        }
    });
}();
/**
 * Created with JetBrains WebStorm.
 * User: honsytshen
 * Date: 14-3-12
 * Time: 下午3:18
 * To change this template use File | Settings | File Templates.
 */
ZeroOnePackage = function() {
    app.initToolsView('zeroOnePackage')
        .addButtonInit()
        .inputOneInit('物品重量')
        .inputTwoInit('物品价值')
        .resetButtonInit();
    return extend(Dynamic, {
        goods: [],
        dp: [],
        reset: function() {
            this.goods = [];
            return this;
        },
        add: function(w, v) {
            this.goods.push([w, v]);
            return this;
        },
        setPackageSize: function(size) {
            if(warnNumber(size, '背包大小应为整数！')) {
                return this;
            }
            this.packageSize = parseInt(size);
            return this;
        },
        run: function() {
            if(!isset(this.packageSize)) {
                alert('请设置背包大小！');
                return;
            }
            return this;
        },
        zeroOne_package: function() {
            this.zeroOnePackage();
            return this;
        },
        zeroOnePackageInit: function() {
            for(var i = 0; i < this.packageSize; i++) {
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
            return this;
        }
    });
}();
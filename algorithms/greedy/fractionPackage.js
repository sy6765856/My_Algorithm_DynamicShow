/**
 * Created with JetBrains WebStorm.
 * User: sy6765856
 * Date: 14-3-25
 * Time: 下午4:39
 * To change this template use File | Settings | File Templates.
 */
DotTest.init('fractionPackage.js')
    .begin();
FractionPackage = function() {
    app.initToolsView('fractionPackage')
        .startButtonInit('开始')
        .addButtonInit()
        .resetButtonInit()
        .inputOneInit('物品价值')
        .inputTwoInit('物品重量')
        .inputThreeInit('背包载重')
        .setButtonInit('设置背包载重')
        .description('');
    Canvas.init('canvas');
    return extend(Greedy, {
        SIG: 'FractionPackage',
        goods: [],
        add: function(value, weight) {
            if(!value) {
                alert('请输入物品价值！');
                return this;
            }
            if(!weight) {
                alert('请输入物品重量！');
                return this;
            }
            if(warnNumber(value, '物品价值应为数字！')) {
                return this;
            }
            if(warnNumber(weight, '物品重量应为数字！')) {
                return this;
            }
            this.goods.push([parseFloat(weight), parseFloat(value), this.goods.length, 0]);
            this.drawGoods();
            $('#input2').val('');
            $('#input1').val('').focus();
            $('#info').html('成功加入物品，重量为：' + weight + '，价值为：' + value + '。当前物品共' + this.goods.length + '个。');
            return this;
        },
        set: function() {
            var size = $('#input3').val();
            if(!size) {
                alert('请输入背包载重！');
                return this;
            }
            this.setPackageSize(size);
            return this;
        },
        drawGoods: function() {
            Table.drawGoods(this.goods);
            return this;
        },
        setPackageSize: function(size) {
            if(warnNumber(size, '背包载重应为数字！')) {
                return this;
            }
            this.packageSize = parseFloat(size);
            $('#info').html('背包载重为：' + this.packageSize);
            return this;
        },
        reset: function() {
            this.goods = [];
            this.clearAll();
            $('#info').html('当前无物品。');
            return this;
        },
        run: function() {
            if(!isset(this.packageSize)) {
                alert('请设置背包载重！');
                return this;
            }
            Info.init()
                .setPermanent('分数背包。  背包载重为：' + this.packageSize);
            ComplexityAnalysis.init(this.SIG, this.goods.length);
            this.fraction_package()
                .draw();
            ComplexityAnalysis.compare();
            return this;
        },
        fraction_package: function() {
            this.fractionPackage();
            return this;
        },
        fractionPackage: function() {
            var goods = this.goods,
                cmp = function(a, b) {
                    return - a[0]/a[1] + b[0]/b[1];
                },
                packageSize = this.packageSize,
                totalValue = 0;
            goods.sort(cmp);
            for(var i = 0; i < goods.length; i++) {
                var good = goods[i];
                ComplexityAnalysis.addCalculation(1);
                if(packageSize <= 0) {
                    break;
                }
                if(packageSize >= good[1]) {
                    packageSize -= good[1];
                    good[3] = good[1];
                    totalValue += good[0];
                } else {
                    totalValue += packageSize / good[1] * good[0];
                    good[3] = packageSize;
                    packageSize = 0;
                }
            }
            this.totalValue = totalValue;
            return this;
        },
        drawAfter: function() {
            $('#info').html('选出物品最大价值为' + this.totalValue);
            return this;
        },
        drawing: function() {
            if(Canvas.imageFrame >= Canvas.imageDataQUEUE.length) {
                FractionPackage.drawAfter();
                return this;
            }
            this.drawCanvasFrame(Canvas.imageDataQUEUE[Canvas.imageFrame]);
            Info.permanent()
                .temporary(Canvas.imageFrame);
            Canvas.imageFrame++;
            setTimeout.call(null, 'FractionPackage.drawing();', Scroll.interval);
            return this;
        }
    });
}();
DotTest.end()
    .calculate();
/**
 * Created with JetBrains WebStorm.
 * User: sy6765856
 * Date: 14-3-25
 * Time: 下午4:39
 * To change this template use File | Settings | File Templates.
 */
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
            this.goods.push([parseFloat(weight), parseFloat(value)]);
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
            this.fraction_package()
                .draw();
            return this;
        },
        fraction_package: function() {
            this.fractionPackage();
            return this;
        },
        fractionPackage: function() {
            return this;
        }
    });
}();
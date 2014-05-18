/**
 * Created with JetBrains WebStorm.
 * User: honsytshen
 * Date: 14-5-13
 * Time: 上午9:37
 * To change this template use File | Settings | File Templates.
 */
DotTest.init('complexityAnalysis.js')
    .begin();
ComplexityAnalysis = function() {
    return {
        SIG: 'ComplexityAnalysis',
        init: function(name, scale) {
            this.scale = scale;
            this.calculation = 0;
            this.algorithmName = name;
            this.complexity = [];
            this.ratioList = [];
            this.complexityName = '';
            this.calculate();
            return this;
        },
        addCalculation: function(number) {
            this.calculation += number;
            return this;
        },
        calculate: function() {
            this._sqr_complexity()
                ._log_complexity()
                ._n_complexity()
                ._nlogn_complexity()
                ._sqrt_complexity()
                ._sqr_complexity();
            return this;
        },
        compare: function() {
            var calculation = this.calculation,
                ratioDiff = 100000000,
                ratio,
                name = this.complexityName;
            for(var key in this.complexity) {
                var comp = this.complexity[key];
                if(typeof comp === 'function' ) {
                    continue;
                }
                this.ratioList[comp] = eval('this.' + comp)  / calculation;
                ratio = Math.abs( this.ratioList[comp] - 1);
                if(ratio < ratioDiff) {
                    name = comp;
                    ratioDiff = ratio;
                }
            }
            this.complexityName = name;
            this.render();
            return this;
        },
        render: function() {
            FunctionTemplate.complexity(this.ratioList, this.complexityName);
            return this;
        },
        _sqr_complexity: function() {
            this.sqrComplexity = this.scale * this.scale;
            this.complexity.push('sqrComplexity');
            return this;
        },
        _log_complexity: function() {
            this.logComplexity = Math.log(this.scale);
            this.complexity.push('logComplexity');
            return this;
        },
        _n_complexity: function() {
            this.nComplexity = this.scale;
            this.complexity.push('nComplexity');
            return this;
        },
        _sqrt_complexity: function() {
            this.sqrtComplexity = Math.sqrt(this.scale);
            this.complexity.push('sqrtComplexity');
            return this;
        },
        _nlogn_complexity: function() {
            this.nlognComplexity = this.scale * Math.log(this.scale);
            this.complexity.push('nlognComplexity');
            return this;
        }
    }
}();
DotTest.end()
    .calculate();
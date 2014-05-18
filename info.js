/**
 * Created with JetBrains WebStorm.
 * User: sy6765856
 * Date: 14-5-2
 * Time: 下午5:25
 * To change this template use File | Settings | File Templates.
 */
DotTest.init('info.js')
    .begin();
Info = function() {
    return {
        SIG: 'Info',
        left: 0,
        top: 0,
        init: function() {
            this.temporaryArray = [];
            this.permanentInfo = '';
            this.pos = { x: 200, y: 200 };
            this.temporaryPos = { x: 400, y: 200 };
            return this;
        },
        addTemp: function(info) {
            this.temporaryArray.push(info);
            return this;
        },
        setPermanent: function(info, pos) {
            this.permanentInfo = info;
            this.pos = pos ? pos : this.pos;
            this.permanent();
            return this;
        },
        temporary: function(frame) {
            var info = this.temporaryArray[frame];
            if(isset(info)) {
                Canvas.writeText(info, this.temporaryPos);
            }
            return this;
        },
        permanent: function() {
            Canvas.writeText(this.permanentInfo, this.pos);
            return this;
        },
        setInfo: function(info) {
            $('#info').html(info);
            setTimeout("$('#info').html('');", '1600');
            return this;
        }
    };
}();
DotTest.end()
    .calculate();
/**
 * Created with JetBrains WebStorm.
 * User: sy6765856
 * Date: 14-5-18
 * Time: 下午10:41
 * To change this template use File | Settings | File Templates.
 */
Button = function() {
    return {
        enableNextButton: function() {
            $('.next').attr('disabled', '');
            return this;
        },
        disableNextButton: function() {
            $('.next').attr('disabled', 'disabled');
            return this;
        }
    }
}();
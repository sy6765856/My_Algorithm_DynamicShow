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
            $('#next-button').attr('disabled', '');
            $('#next-button').attr('class', 'next btn btn-primary');
            return this;
        },
        disableNextButton: function() {
            $('#next-button').attr('disabled', 'disabled');
            $('#next-button').attr('class', 'next-disable btn btn-primary disabled');
            return this;
        }
    }
}();
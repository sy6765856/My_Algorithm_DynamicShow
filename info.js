/**
 * Created with JetBrains WebStorm.
 * User: sy6765856
 * Date: 14-5-2
 * Time: 下午5:25
 * To change this template use File | Settings | File Templates.
 */
Info = function() {
    return {
        left: 0,
        top: 0,
        permanentInfo: '',
        temporary: function(info) {

            return this;
        },
        permanent: function() {
            return this;
        }
    };
}();
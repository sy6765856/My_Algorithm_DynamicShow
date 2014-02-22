/**
 * Created with JetBrains WebStorm.
 * User: sy6765856
 * Date: 14-2-10
 * Time: 下午7:45
 * To change this template use File | Settings | File Templates.
 */
BinaryTree = function() {
    return extend(Tree, {
        run: function() {

        },
        insert: function() {
            var value = $('#input').val();

            console.log(value);

            this.addNodes();

        }
    });
}();
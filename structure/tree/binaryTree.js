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
            if(isNaN(value)) {
                alert("请插入数字");
                $("#input").val('').focus();
                return;
            }
            console.log(value);

            this.addNodes();

        }
    });
}();
/**
 * Created with JetBrains WebStorm.
 * User: sy6765856
 * Date: 14-1-20
 * Time: 下午9:39
 * To change this template use File | Settings | File Templates.
 */
Heap = function(){
    return extend(Tree, {
        run: function(id) {
            Canvas.init(id);
            this.init('heap')
                .generateTree()
                .drawGragh();
            return this;
        },
        insert: function(value) {

            return this;
        },
        maintain: function() {
            return this;
        }
    });
}();
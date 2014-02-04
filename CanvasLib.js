/**
 * Created with JetBrains WebStorm.
 * User: sy6765856
 * Date: 14-1-20
 * Time: 下午5:18
 * To change this template use File | Settings | File Templates.
 */
CanvasLib = function() {
    return {
        distance: function(A, B){
            return Math.sqrt((A.x-B.x)*(A.x-B.x) + (A.y-B.y)*(A.y-B.y));
        },
        dot: function(A, B, O){
            return (A.x - O.x)*(B.x - O.x) + (A.y - O.y)*(B.y - O.y);
        },
        cross: function(A, B, O){
            return (A.x - O.x)*(B.y - O.y) - (B.x - O.x)*(A.y - O.y);
        },

        //仅用于圆A,B外离的情况
        circleInnerDistance: function(A, B){
            return this.distance(A.o, B.o) - A.r - B.r;
        },

        colorSet: function(color) {
            var colorString = "";
            switch(color) {
                case "red":
                    colorString = "#FF0000";
                    break;
                case "blue":
                    colorString = "#0033CC";
                    break;
                case "yellow":
                    colorString = "#FFFF00";
                    break;
                case "green":
                    colorString = "#33FF00";
                    break;
                case "purple":
                    colorString = "#660099";
                    break;
                case "black":
                    colorString = "#000000";
                    break;
                default:
                    colorString = "#FFFFFF";
                    break;
            }
            return colorString;
        }
    }
}();
/**
 * Created with JetBrains WebStorm.
 * User: sy6765856
 * Date: 14-1-20
 * Time: 下午5:18
 * To change this template use File | Settings | File Templates.
 */
DotTest.init('CanvasLib.js')
    .begin();
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

        randomColor: function(key) {
            var colorString = "",
                val;
            val = Math.floor(Math.random() * 256);
            colorString += val.toString(16);
            val = Math.floor(Math.random() * 256);
            colorString += val.toString(16);
            val = Math.floor(Math.random() * 256);
            colorString += val.toString(16);
            return colorString;
        },

        produceColor: function(key) {
//            var val =[37, 123, 53],
//                colorString = "";
//            for(var i = 0; i < 3; i ++) {
//                colorString += ((key * val[i])%256).toString(16);
//            }
            var colorString = "";
            if(key%2) {
                colorString = '000000';
            } else {
                colorString = "FFFFFF";
            }
            return colorString;
        },

        colorSet: function(color) {
            color = color.toLowerCase();
            var colorString = "";
            switch(color) {
                case "red":
                    colorString = "#FF0000";
                    break;
                case "blue":
                    colorString = "#99B3FF";
                    break;
                case "skyblue":
                    colorString = "#00FFFF";
                    break;
                case "yellow":
                    colorString = "#FFFF00";
                    break;
                case "green":
                    colorString = "#33FF00";
                    break;
                case "darkgreen":
                    colorString = "#2F4F2F";
                    break;
                case "purple":
                    colorString = "#660099";
                    break;
                case "black":
                    colorString = "#000000";
                    break;
                case "grey":
                    colorString = "#778899";
                    break;
                default:
                    colorString = "#" + color;
                    break;
            }
            return colorString;
        }
    }
}();
DotTest.end()
    .calculate();
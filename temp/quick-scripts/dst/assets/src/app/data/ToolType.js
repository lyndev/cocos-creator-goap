
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/app/data/ToolType.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd4e5bt584VL7qvlagZk2P9P', 'ToolType');
// src/app/data/ToolType.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ToolType = void 0;
/*
 * @Description:
 * @Author: RannarYang
 * @Date: 2018-11-03 19:01:10
 * @Last Modified by:   RannarYang
 * @Last Modified time: 2018-11-03 19:01:10
 */
var ToolType = /** @class */ (function () {
    function ToolType() {
    }
    ToolType.getSource = function (type) {
        return type + '_png';
    };
    ToolType.Axe = 'axe';
    ToolType.Pick = 'pick';
    return ToolType;
}());
exports.ToolType = ToolType;

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvYXBwL2RhdGEvVG9vbFR5cGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7OztHQU1HO0FBQ0g7SUFBQTtJQU1BLENBQUM7SUFIYyxrQkFBUyxHQUF2QixVQUF3QixJQUFZO1FBQ25DLE9BQU8sSUFBSSxHQUFHLE1BQU0sQ0FBQztJQUN0QixDQUFDO0lBSmEsWUFBRyxHQUFXLEtBQUssQ0FBQztJQUNwQixhQUFJLEdBQVcsTUFBTSxDQUFDO0lBSXJDLGVBQUM7Q0FORCxBQU1DLElBQUE7QUFOWSw0QkFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBARGVzY3JpcHRpb246IFxuICogQEF1dGhvcjogUmFubmFyWWFuZyBcbiAqIEBEYXRlOiAyMDE4LTExLTAzIDE5OjAxOjEwIFxuICogQExhc3QgTW9kaWZpZWQgYnk6ICAgUmFubmFyWWFuZyBcbiAqIEBMYXN0IE1vZGlmaWVkIHRpbWU6IDIwMTgtMTEtMDMgMTk6MDE6MTAgXG4gKi9cbmV4cG9ydCBjbGFzcyBUb29sVHlwZSB7XG5cdHB1YmxpYyBzdGF0aWMgQXhlOiBzdHJpbmcgPSAnYXhlJztcblx0cHVibGljIHN0YXRpYyBQaWNrOiBzdHJpbmcgPSAncGljayc7XG5cdHB1YmxpYyBzdGF0aWMgZ2V0U291cmNlKHR5cGU6IHN0cmluZykge1xuXHRcdHJldHVybiB0eXBlICsgJ19wbmcnO1xuXHR9XG59Il19

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/app/data/T_LabourerContainer.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '5d81aYW+MRMsIoQeqANKXML', 'T_LabourerContainer');
// src/app/data/T_LabourerContainer.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.T_LabourerBean = exports.T_LabourerContainer = void 0;
var LabourerType_1 = require("./LabourerType");
var ToolType_1 = require("./ToolType");
/*
 * @Description:
 * @Author: RannarYang
 * @Date: 2018-11-03 18:37:14
 * @Last Modified by: RannarYang
 * @Last Modified time: 2018-11-03 19:03:22
 */
var T_LabourerContainer = /** @class */ (function () {
    function T_LabourerContainer() {
        this._labourerMap = new Map();
        this._labourerMap.set(LabourerType_1.LabourerType.Blacksmith, new T_LabourerBean(LabourerType_1.LabourerType.Blacksmith, 1, ToolType_1.ToolType.Axe));
        this._labourerMap.set(LabourerType_1.LabourerType.Logger, new T_LabourerBean(LabourerType_1.LabourerType.Logger, 2, ToolType_1.ToolType.Axe));
        this._labourerMap.set(LabourerType_1.LabourerType.Miner, new T_LabourerBean(LabourerType_1.LabourerType.Miner, 1, ToolType_1.ToolType.Pick));
        this._labourerMap.set(LabourerType_1.LabourerType.WoodCutter, new T_LabourerBean(LabourerType_1.LabourerType.WoodCutter, 2, ToolType_1.ToolType.Axe));
    }
    Object.defineProperty(T_LabourerContainer.prototype, "labourerMap", {
        get: function () {
            return this._labourerMap;
        },
        enumerable: false,
        configurable: true
    });
    T_LabourerContainer.prototype.getLabourerByType = function (type) {
        if (this._labourerMap.has(type)) {
            return this._labourerMap.get(type);
        }
        else {
            console.warn("can not find labourer by type: ", type);
            return null;
        }
    };
    return T_LabourerContainer;
}());
exports.T_LabourerContainer = T_LabourerContainer;
var T_LabourerBean = /** @class */ (function () {
    function T_LabourerBean(type, speed, toolType) {
        this.type = type;
        this.speed = speed;
        this.toolType = toolType;
    }
    return T_LabourerBean;
}());
exports.T_LabourerBean = T_LabourerBean;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvYXBwL2RhdGEvVF9MYWJvdXJlckNvbnRhaW5lci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwrQ0FBOEM7QUFDOUMsdUNBQXNDO0FBRXRDOzs7Ozs7R0FNRztBQUNIO0lBS0M7UUFKUSxpQkFBWSxHQUFnQyxJQUFJLEdBQUcsRUFBMEIsQ0FBQztRQUtyRixJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQywyQkFBWSxDQUFDLFVBQVUsRUFBRSxJQUFJLGNBQWMsQ0FBQywyQkFBWSxDQUFDLFVBQVUsRUFBRSxDQUFDLEVBQUUsbUJBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFBO1FBQzVHLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLDJCQUFZLENBQUMsTUFBTSxFQUFFLElBQUksY0FBYyxDQUFDLDJCQUFZLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxtQkFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUE7UUFDcEcsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsMkJBQVksQ0FBQyxLQUFLLEVBQUUsSUFBSSxjQUFjLENBQUMsMkJBQVksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxFQUFFLG1CQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQTtRQUNuRyxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQywyQkFBWSxDQUFDLFVBQVUsRUFBRSxJQUFJLGNBQWMsQ0FBQywyQkFBWSxDQUFDLFVBQVUsRUFBRSxDQUFDLEVBQUUsbUJBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFBO0lBQzdHLENBQUM7SUFSRCxzQkFBVyw0Q0FBVzthQUF0QjtZQUNDLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQztRQUMxQixDQUFDOzs7T0FBQTtJQU9NLCtDQUFpQixHQUF4QixVQUF5QixJQUFZO1FBQ3BDLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDaEMsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNuQzthQUFNO1lBQ04sT0FBTyxDQUFDLElBQUksQ0FBQyxpQ0FBaUMsRUFBRSxJQUFJLENBQUMsQ0FBQTtZQUNyRCxPQUFPLElBQUksQ0FBQztTQUNaO0lBQ0YsQ0FBQztJQUNGLDBCQUFDO0FBQUQsQ0FuQkEsQUFtQkMsSUFBQTtBQW5CWSxrREFBbUI7QUFxQmhDO0lBUUMsd0JBQVksSUFBa0IsRUFBRSxLQUFhLEVBQUUsUUFBZ0I7UUFDOUQsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7SUFDMUIsQ0FBQztJQUNGLHFCQUFDO0FBQUQsQ0FiQSxBQWFDLElBQUE7QUFiWSx3Q0FBYyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IExhYm91cmVyVHlwZSB9IGZyb20gXCIuL0xhYm91cmVyVHlwZVwiO1xuaW1wb3J0IHsgVG9vbFR5cGUgfSBmcm9tIFwiLi9Ub29sVHlwZVwiO1xuXG4vKlxuICogQERlc2NyaXB0aW9uOiBcbiAqIEBBdXRob3I6IFJhbm5hcllhbmcgXG4gKiBARGF0ZTogMjAxOC0xMS0wMyAxODozNzoxNCBcbiAqIEBMYXN0IE1vZGlmaWVkIGJ5OiBSYW5uYXJZYW5nXG4gKiBATGFzdCBNb2RpZmllZCB0aW1lOiAyMDE4LTExLTAzIDE5OjAzOjIyXG4gKi9cbmV4cG9ydCBjbGFzcyBUX0xhYm91cmVyQ29udGFpbmVyIHtcblx0cHJpdmF0ZSBfbGFib3VyZXJNYXA6IE1hcDxudW1iZXIsIFRfTGFib3VyZXJCZWFuPiA9IG5ldyBNYXA8bnVtYmVyLCBUX0xhYm91cmVyQmVhbj4oKTtcblx0cHVibGljIGdldCBsYWJvdXJlck1hcCgpOiBNYXA8bnVtYmVyLCBUX0xhYm91cmVyQmVhbj4ge1xuXHRcdHJldHVybiB0aGlzLl9sYWJvdXJlck1hcDtcblx0fVxuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHR0aGlzLl9sYWJvdXJlck1hcC5zZXQoTGFib3VyZXJUeXBlLkJsYWNrc21pdGgsIG5ldyBUX0xhYm91cmVyQmVhbihMYWJvdXJlclR5cGUuQmxhY2tzbWl0aCwgMSwgVG9vbFR5cGUuQXhlKSlcblx0XHR0aGlzLl9sYWJvdXJlck1hcC5zZXQoTGFib3VyZXJUeXBlLkxvZ2dlciwgbmV3IFRfTGFib3VyZXJCZWFuKExhYm91cmVyVHlwZS5Mb2dnZXIsIDIsIFRvb2xUeXBlLkF4ZSkpXG5cdFx0dGhpcy5fbGFib3VyZXJNYXAuc2V0KExhYm91cmVyVHlwZS5NaW5lciwgbmV3IFRfTGFib3VyZXJCZWFuKExhYm91cmVyVHlwZS5NaW5lciwgMSwgVG9vbFR5cGUuUGljaykpXG5cdFx0dGhpcy5fbGFib3VyZXJNYXAuc2V0KExhYm91cmVyVHlwZS5Xb29kQ3V0dGVyLCBuZXcgVF9MYWJvdXJlckJlYW4oTGFib3VyZXJUeXBlLldvb2RDdXR0ZXIsIDIsIFRvb2xUeXBlLkF4ZSkpXG5cdH1cblx0cHVibGljIGdldExhYm91cmVyQnlUeXBlKHR5cGU6IG51bWJlcik6IFRfTGFib3VyZXJCZWFuIHtcblx0XHRpZiAodGhpcy5fbGFib3VyZXJNYXAuaGFzKHR5cGUpKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5fbGFib3VyZXJNYXAuZ2V0KHR5cGUpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRjb25zb2xlLndhcm4oXCJjYW4gbm90IGZpbmQgbGFib3VyZXIgYnkgdHlwZTogXCIsIHR5cGUpXG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIFRfTGFib3VyZXJCZWFuIHtcblx0Lyoq57G75Z6LICovXG5cdHB1YmxpYyB0eXBlOiBMYWJvdXJlclR5cGU7XG5cdC8qKuenu+WKqOmAn+W6piAqL1xuXHRwdWJsaWMgc3BlZWQ6IG51bWJlcjtcblx0Lyoq5bel5YW357G75Z6LICovXG5cdHB1YmxpYyB0b29sVHlwZTogc3RyaW5nO1xuXG5cdGNvbnN0cnVjdG9yKHR5cGU6IExhYm91cmVyVHlwZSwgc3BlZWQ6IG51bWJlciwgdG9vbFR5cGU6IHN0cmluZykge1xuXHRcdHRoaXMudHlwZSA9IHR5cGU7XG5cdFx0dGhpcy5zcGVlZCA9IHNwZWVkO1xuXHRcdHRoaXMudG9vbFR5cGUgPSB0b29sVHlwZTtcblx0fVxufVxuIl19
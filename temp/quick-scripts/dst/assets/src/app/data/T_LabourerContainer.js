
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxhcHBcXGRhdGFcXFRfTGFib3VyZXJDb250YWluZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsK0NBQThDO0FBQzlDLHVDQUFzQztBQUV0Qzs7Ozs7O0dBTUc7QUFDSDtJQUtDO1FBSlEsaUJBQVksR0FBZ0MsSUFBSSxHQUFHLEVBQTBCLENBQUM7UUFLckYsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsMkJBQVksQ0FBQyxVQUFVLEVBQUUsSUFBSSxjQUFjLENBQUMsMkJBQVksQ0FBQyxVQUFVLEVBQUUsQ0FBQyxFQUFFLG1CQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQTtRQUM1RyxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQywyQkFBWSxDQUFDLE1BQU0sRUFBRSxJQUFJLGNBQWMsQ0FBQywyQkFBWSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsbUJBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFBO1FBQ3BHLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLDJCQUFZLENBQUMsS0FBSyxFQUFFLElBQUksY0FBYyxDQUFDLDJCQUFZLENBQUMsS0FBSyxFQUFFLENBQUMsRUFBRSxtQkFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUE7UUFDbkcsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsMkJBQVksQ0FBQyxVQUFVLEVBQUUsSUFBSSxjQUFjLENBQUMsMkJBQVksQ0FBQyxVQUFVLEVBQUUsQ0FBQyxFQUFFLG1CQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQTtJQUM3RyxDQUFDO0lBUkQsc0JBQVcsNENBQVc7YUFBdEI7WUFDQyxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUM7UUFDMUIsQ0FBQzs7O09BQUE7SUFPTSwrQ0FBaUIsR0FBeEIsVUFBeUIsSUFBWTtRQUNwQyxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ2hDLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDbkM7YUFBTTtZQUNOLE9BQU8sQ0FBQyxJQUFJLENBQUMsaUNBQWlDLEVBQUUsSUFBSSxDQUFDLENBQUE7WUFDckQsT0FBTyxJQUFJLENBQUM7U0FDWjtJQUNGLENBQUM7SUFDRiwwQkFBQztBQUFELENBbkJBLEFBbUJDLElBQUE7QUFuQlksa0RBQW1CO0FBcUJoQztJQVFDLHdCQUFZLElBQWtCLEVBQUUsS0FBYSxFQUFFLFFBQWdCO1FBQzlELElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO0lBQzFCLENBQUM7SUFDRixxQkFBQztBQUFELENBYkEsQUFhQyxJQUFBO0FBYlksd0NBQWMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMYWJvdXJlclR5cGUgfSBmcm9tIFwiLi9MYWJvdXJlclR5cGVcIjtcclxuaW1wb3J0IHsgVG9vbFR5cGUgfSBmcm9tIFwiLi9Ub29sVHlwZVwiO1xyXG5cclxuLypcclxuICogQERlc2NyaXB0aW9uOiBcclxuICogQEF1dGhvcjogUmFubmFyWWFuZyBcclxuICogQERhdGU6IDIwMTgtMTEtMDMgMTg6Mzc6MTQgXHJcbiAqIEBMYXN0IE1vZGlmaWVkIGJ5OiBSYW5uYXJZYW5nXHJcbiAqIEBMYXN0IE1vZGlmaWVkIHRpbWU6IDIwMTgtMTEtMDMgMTk6MDM6MjJcclxuICovXHJcbmV4cG9ydCBjbGFzcyBUX0xhYm91cmVyQ29udGFpbmVyIHtcclxuXHRwcml2YXRlIF9sYWJvdXJlck1hcDogTWFwPG51bWJlciwgVF9MYWJvdXJlckJlYW4+ID0gbmV3IE1hcDxudW1iZXIsIFRfTGFib3VyZXJCZWFuPigpO1xyXG5cdHB1YmxpYyBnZXQgbGFib3VyZXJNYXAoKTogTWFwPG51bWJlciwgVF9MYWJvdXJlckJlYW4+IHtcclxuXHRcdHJldHVybiB0aGlzLl9sYWJvdXJlck1hcDtcclxuXHR9XHJcblx0Y29uc3RydWN0b3IoKSB7XHJcblx0XHR0aGlzLl9sYWJvdXJlck1hcC5zZXQoTGFib3VyZXJUeXBlLkJsYWNrc21pdGgsIG5ldyBUX0xhYm91cmVyQmVhbihMYWJvdXJlclR5cGUuQmxhY2tzbWl0aCwgMSwgVG9vbFR5cGUuQXhlKSlcclxuXHRcdHRoaXMuX2xhYm91cmVyTWFwLnNldChMYWJvdXJlclR5cGUuTG9nZ2VyLCBuZXcgVF9MYWJvdXJlckJlYW4oTGFib3VyZXJUeXBlLkxvZ2dlciwgMiwgVG9vbFR5cGUuQXhlKSlcclxuXHRcdHRoaXMuX2xhYm91cmVyTWFwLnNldChMYWJvdXJlclR5cGUuTWluZXIsIG5ldyBUX0xhYm91cmVyQmVhbihMYWJvdXJlclR5cGUuTWluZXIsIDEsIFRvb2xUeXBlLlBpY2spKVxyXG5cdFx0dGhpcy5fbGFib3VyZXJNYXAuc2V0KExhYm91cmVyVHlwZS5Xb29kQ3V0dGVyLCBuZXcgVF9MYWJvdXJlckJlYW4oTGFib3VyZXJUeXBlLldvb2RDdXR0ZXIsIDIsIFRvb2xUeXBlLkF4ZSkpXHJcblx0fVxyXG5cdHB1YmxpYyBnZXRMYWJvdXJlckJ5VHlwZSh0eXBlOiBudW1iZXIpOiBUX0xhYm91cmVyQmVhbiB7XHJcblx0XHRpZiAodGhpcy5fbGFib3VyZXJNYXAuaGFzKHR5cGUpKSB7XHJcblx0XHRcdHJldHVybiB0aGlzLl9sYWJvdXJlck1hcC5nZXQodHlwZSk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRjb25zb2xlLndhcm4oXCJjYW4gbm90IGZpbmQgbGFib3VyZXIgYnkgdHlwZTogXCIsIHR5cGUpXHJcblx0XHRcdHJldHVybiBudWxsO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFRfTGFib3VyZXJCZWFuIHtcclxuXHQvKirnsbvlnosgKi9cclxuXHRwdWJsaWMgdHlwZTogTGFib3VyZXJUeXBlO1xyXG5cdC8qKuenu+WKqOmAn+W6piAqL1xyXG5cdHB1YmxpYyBzcGVlZDogbnVtYmVyO1xyXG5cdC8qKuW3peWFt+exu+WeiyAqL1xyXG5cdHB1YmxpYyB0b29sVHlwZTogc3RyaW5nO1xyXG5cclxuXHRjb25zdHJ1Y3Rvcih0eXBlOiBMYWJvdXJlclR5cGUsIHNwZWVkOiBudW1iZXIsIHRvb2xUeXBlOiBzdHJpbmcpIHtcclxuXHRcdHRoaXMudHlwZSA9IHR5cGU7XHJcblx0XHR0aGlzLnNwZWVkID0gc3BlZWQ7XHJcblx0XHR0aGlzLnRvb2xUeXBlID0gdG9vbFR5cGU7XHJcblx0fVxyXG59XHJcbiJdfQ==
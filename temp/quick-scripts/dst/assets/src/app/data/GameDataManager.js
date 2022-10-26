
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/app/data/GameDataManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c0fae6p8ixIWZuJZzEkk1+6', 'GameDataManager');
// src/app/data/GameDataManager.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameDataManager = void 0;
var T_LabourerContainer_1 = require("./T_LabourerContainer");
/*
 * @Description: 游戏数据管理器
 * @Author: RannarYang
 * @Date: 2018-11-03 19:02:46
 * @Last Modified by: RannarYang
 * @Last Modified time: 2018-11-03 19:03:42
 */
var GameDataManager = /** @class */ (function () {
    function GameDataManager() {
        this.t_labourderContainer = new T_LabourerContainer_1.T_LabourerContainer();
    }
    Object.defineProperty(GameDataManager, "I", {
        get: function () {
            if (!this.instance) {
                this.instance = new GameDataManager();
            }
            return this.instance;
        },
        enumerable: false,
        configurable: true
    });
    return GameDataManager;
}());
exports.GameDataManager = GameDataManager;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxhcHBcXGRhdGFcXEdhbWVEYXRhTWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw2REFBNEQ7QUFFNUQ7Ozs7OztHQU1HO0FBQ0g7SUFBQTtRQUNXLHlCQUFvQixHQUF3QixJQUFJLHlDQUFtQixFQUFFLENBQUM7SUFTakYsQ0FBQztJQU5HLHNCQUFrQixvQkFBQzthQUFuQjtZQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFO2dCQUNoQixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksZUFBZSxFQUFFLENBQUM7YUFDekM7WUFDRCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDekIsQ0FBQzs7O09BQUE7SUFDTCxzQkFBQztBQUFELENBVkEsQUFVQyxJQUFBO0FBVlksMENBQWUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUX0xhYm91cmVyQ29udGFpbmVyIH0gZnJvbSBcIi4vVF9MYWJvdXJlckNvbnRhaW5lclwiO1xyXG5cclxuLypcclxuICogQERlc2NyaXB0aW9uOiDmuLjmiI/mlbDmja7nrqHnkIblmahcclxuICogQEF1dGhvcjogUmFubmFyWWFuZyBcclxuICogQERhdGU6IDIwMTgtMTEtMDMgMTk6MDI6NDYgXHJcbiAqIEBMYXN0IE1vZGlmaWVkIGJ5OiBSYW5uYXJZYW5nXHJcbiAqIEBMYXN0IE1vZGlmaWVkIHRpbWU6IDIwMTgtMTEtMDMgMTk6MDM6NDJcclxuICovXHJcbmV4cG9ydCBjbGFzcyBHYW1lRGF0YU1hbmFnZXIge1xyXG4gICAgcHVibGljIHRfbGFib3VyZGVyQ29udGFpbmVyOiBUX0xhYm91cmVyQ29udGFpbmVyID0gbmV3IFRfTGFib3VyZXJDb250YWluZXIoKTtcclxuICAgIC8qKuWNleS+iyAqL1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgaW5zdGFuY2U6IEdhbWVEYXRhTWFuYWdlcjtcclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IEkoKTogR2FtZURhdGFNYW5hZ2VyIHtcclxuICAgICAgICBpZiAoIXRoaXMuaW5zdGFuY2UpIHtcclxuICAgICAgICAgICAgdGhpcy5pbnN0YW5jZSA9IG5ldyBHYW1lRGF0YU1hbmFnZXIoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaW5zdGFuY2U7XHJcbiAgICB9XHJcbn0iXX0=
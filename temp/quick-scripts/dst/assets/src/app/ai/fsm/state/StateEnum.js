
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/app/ai/fsm/state/StateEnum.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '5df00n6FwFEZ4MgeC5dAu/p', 'StateEnum');
// src/app/ai/fsm/state/StateEnum.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StateEnum = void 0;
var StateEnum = /** @class */ (function () {
    function StateEnum() {
    }
    StateEnum.StateIdle = "StateIdle";
    StateEnum.StateMove = "StateMove";
    StateEnum.StatePerformAction = "StatePerformAction";
    return StateEnum;
}());
exports.StateEnum = StateEnum;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvYXBwL2FpL2ZzbS9zdGF0ZS9TdGF0ZUVudW0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7SUFBQTtJQUlBLENBQUM7SUFIYyxtQkFBUyxHQUFHLFdBQVcsQ0FBQztJQUN4QixtQkFBUyxHQUFHLFdBQVcsQ0FBQztJQUN4Qiw0QkFBa0IsR0FBRyxvQkFBb0IsQ0FBQztJQUN6RCxnQkFBQztDQUpELEFBSUMsSUFBQTtBQUpZLDhCQUFTIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIFN0YXRlRW51bSB7XG5cdHB1YmxpYyBzdGF0aWMgU3RhdGVJZGxlID0gXCJTdGF0ZUlkbGVcIjtcblx0cHVibGljIHN0YXRpYyBTdGF0ZU1vdmUgPSBcIlN0YXRlTW92ZVwiO1xuXHRwdWJsaWMgc3RhdGljIFN0YXRlUGVyZm9ybUFjdGlvbiA9IFwiU3RhdGVQZXJmb3JtQWN0aW9uXCI7XG59Il19
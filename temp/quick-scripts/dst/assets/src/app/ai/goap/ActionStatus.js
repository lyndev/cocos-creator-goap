
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/app/ai/goap/ActionStatus.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '602a3OxObpPqoMH8KzIbVll', 'ActionStatus');
// src/app/ai/goap/ActionStatus.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActionStatus = void 0;
var ActionStatus = /** @class */ (function () {
    function ActionStatus() {
    }
    ActionStatus.HasTool = "HasTool";
    ActionStatus.HasFirewood = "HasFirewood";
    ActionStatus.HasLogs = "HasLogs";
    ActionStatus.CollectFirewood = "CollectFirewood";
    ActionStatus.CollectLogs = "CollectLogs";
    ActionStatus.HasOre = "HasOre";
    ActionStatus.CollectOre = "CollectOre";
    ActionStatus.HasNewTools = "HasNewTools";
    ActionStatus.CollectTools = "CollectTools";
    return ActionStatus;
}());
exports.ActionStatus = ActionStatus;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvYXBwL2FpL2dvYXAvQWN0aW9uU3RhdHVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0lBQUE7SUFVQSxDQUFDO0lBVGMsb0JBQU8sR0FBRyxTQUFTLENBQUM7SUFDcEIsd0JBQVcsR0FBRyxhQUFhLENBQUE7SUFDM0Isb0JBQU8sR0FBRyxTQUFTLENBQUE7SUFDbkIsNEJBQWUsR0FBRyxpQkFBaUIsQ0FBQTtJQUNuQyx3QkFBVyxHQUFHLGFBQWEsQ0FBQTtJQUMzQixtQkFBTSxHQUFHLFFBQVEsQ0FBQTtJQUNqQix1QkFBVSxHQUFHLFlBQVksQ0FBQTtJQUN6Qix3QkFBVyxHQUFHLGFBQWEsQ0FBQTtJQUMzQix5QkFBWSxHQUFHLGNBQWMsQ0FBQTtJQUM1QyxtQkFBQztDQVZELEFBVUMsSUFBQTtBQVZZLG9DQUFZIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIEFjdGlvblN0YXR1cyB7XG5cdHB1YmxpYyBzdGF0aWMgSGFzVG9vbCA9IFwiSGFzVG9vbFwiO1xuXHRwdWJsaWMgc3RhdGljIEhhc0ZpcmV3b29kID0gXCJIYXNGaXJld29vZFwiXG5cdHB1YmxpYyBzdGF0aWMgSGFzTG9ncyA9IFwiSGFzTG9nc1wiXG5cdHB1YmxpYyBzdGF0aWMgQ29sbGVjdEZpcmV3b29kID0gXCJDb2xsZWN0RmlyZXdvb2RcIlxuXHRwdWJsaWMgc3RhdGljIENvbGxlY3RMb2dzID0gXCJDb2xsZWN0TG9nc1wiXG5cdHB1YmxpYyBzdGF0aWMgSGFzT3JlID0gXCJIYXNPcmVcIlxuXHRwdWJsaWMgc3RhdGljIENvbGxlY3RPcmUgPSBcIkNvbGxlY3RPcmVcIlxuXHRwdWJsaWMgc3RhdGljIEhhc05ld1Rvb2xzID0gXCJIYXNOZXdUb29sc1wiXG5cdHB1YmxpYyBzdGF0aWMgQ29sbGVjdFRvb2xzID0gXCJDb2xsZWN0VG9vbHNcIlxufSJdfQ==
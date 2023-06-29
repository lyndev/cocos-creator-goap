
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/app/gamedata/actions/ForgeToolAction.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c8aadKkvVBMOKX0cJTF86Tm', 'ForgeToolAction');
// src/app/gamedata/actions/ForgeToolAction.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.ForgeToolAction = void 0;
var TimeUtil_1 = require("../../../utils/TimeUtil");
var ActionStatus_1 = require("../../ai/goap/ActionStatus");
var GoapAction_1 = require("../../ai/goap/GoapAction");
var VGameObject_1 = require("../../base/VGameObject");
var Environment_1 = require("../Environment");
var Labourer_1 = require("../labourers/Labourer");
var ForgeToolAction = /** @class */ (function (_super) {
    __extends(ForgeToolAction, _super);
    function ForgeToolAction() {
        var _this = _super.call(this) || this;
        _this.forged = false;
        _this.startTime = 0;
        _this.forgeDuration = 2; // seconds
        _this.addPrecondition(ActionStatus_1.ActionStatus.HasOre, true);
        _this.addEffect(ActionStatus_1.ActionStatus.HasNewTools, true);
        return _this;
    }
    ForgeToolAction.prototype.reset = function () {
        this.forged = false;
        this.startTime = 0;
    };
    ForgeToolAction.prototype.isDone = function () {
        return this.forged;
    };
    ForgeToolAction.prototype.requiresInRange = function () {
        return true;
    };
    ForgeToolAction.prototype.checkProceduralPrecondition = function (go) {
        //TODO: find the nearest forge
        var forges = Environment_1.Environment.forgeComps;
        var closest = null;
        var closestDist = 0;
        var vg = go.getComponent(VGameObject_1.VGameObject);
        for (var _i = 0, forges_1 = forges; _i < forges_1.length; _i++) {
            var forge = forges_1[_i];
            if (closest == null) {
                // first one, so choose it for now
                closest = forge;
                closestDist = forge.distanceSquare(vg);
            }
            else {
                // is this one closer than the last?
                var dist = forge.distanceSquare(vg);
                if (dist < closestDist) {
                    // we found a closer one, use it
                    closest = forge;
                    closestDist = dist;
                }
            }
        }
        if (closest == null)
            return false;
        this.target = closest;
        return closest != null;
    };
    ForgeToolAction.prototype.perform = function (node) {
        if (this.startTime == 0)
            this.startTime = TimeUtil_1.default.getTime();
        if (TimeUtil_1.default.getTime() - this.startTime > this.forgeDuration) {
            var labourer = node.getComponent(Labourer_1.Labourer);
            // finished forging a tool
            var backpack = labourer.backpack;
            backpack.numOre = 0;
            this.forged = true;
        }
        return true;
    };
    return ForgeToolAction;
}(GoapAction_1.GoapAction));
exports.ForgeToolAction = ForgeToolAction;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvYXBwL2dhbWVkYXRhL2FjdGlvbnMvRm9yZ2VUb29sQWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvREFBOEM7QUFDOUMsMkRBQXlEO0FBQ3pELHVEQUFxRDtBQUNyRCxzREFBb0Q7QUFFcEQsOENBQTRDO0FBRTVDLGtEQUFnRDtBQUVoRDtJQUFxQyxtQ0FBVTtJQU0zQztRQUFBLFlBQ0ksaUJBQU8sU0FHVjtRQVRPLFlBQU0sR0FBWSxLQUFLLENBQUE7UUFHdkIsZUFBUyxHQUFXLENBQUMsQ0FBQTtRQUNyQixtQkFBYSxHQUFXLENBQUMsQ0FBQSxDQUFDLFVBQVU7UUFHeEMsS0FBSSxDQUFDLGVBQWUsQ0FBQywyQkFBWSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQTtRQUMvQyxLQUFJLENBQUMsU0FBUyxDQUFDLDJCQUFZLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxDQUFBOztJQUNsRCxDQUFDO0lBRU0sK0JBQUssR0FBWjtRQUNJLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFBO1FBQ25CLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFBO0lBQ3RCLENBQUM7SUFFTSxnQ0FBTSxHQUFiO1FBQ0ksT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFBO0lBQ3RCLENBQUM7SUFDTSx5Q0FBZSxHQUF0QjtRQUNJLE9BQU8sSUFBSSxDQUFBO0lBQ2YsQ0FBQztJQUVNLHFEQUEyQixHQUFsQyxVQUFtQyxFQUFXO1FBQzFDLDhCQUE4QjtRQUM5QixJQUFJLE1BQU0sR0FBcUIseUJBQVcsQ0FBQyxVQUFVLENBQUE7UUFDckQsSUFBSSxPQUFPLEdBQW1CLElBQUksQ0FBQTtRQUNsQyxJQUFJLFdBQVcsR0FBVyxDQUFDLENBQUE7UUFDM0IsSUFBSSxFQUFFLEdBQUcsRUFBRSxDQUFDLFlBQVksQ0FBQyx5QkFBVyxDQUFDLENBQUE7UUFDckMsS0FBa0IsVUFBTSxFQUFOLGlCQUFNLEVBQU4sb0JBQU0sRUFBTixJQUFNLEVBQUU7WUFBckIsSUFBSSxLQUFLLGVBQUE7WUFDVixJQUFJLE9BQU8sSUFBSSxJQUFJLEVBQUU7Z0JBQ2pCLGtDQUFrQztnQkFDbEMsT0FBTyxHQUFHLEtBQUssQ0FBQTtnQkFDZixXQUFXLEdBQUcsS0FBSyxDQUFDLGNBQWMsQ0FBQyxFQUFFLENBQUMsQ0FBQTthQUN6QztpQkFBTTtnQkFDSCxvQ0FBb0M7Z0JBQ3BDLElBQUksSUFBSSxHQUFXLEtBQUssQ0FBQyxjQUFjLENBQUMsRUFBRSxDQUFDLENBQUE7Z0JBQzNDLElBQUksSUFBSSxHQUFHLFdBQVcsRUFBRTtvQkFDcEIsZ0NBQWdDO29CQUNoQyxPQUFPLEdBQUcsS0FBSyxDQUFBO29CQUNmLFdBQVcsR0FBRyxJQUFJLENBQUE7aUJBQ3JCO2FBQ0o7U0FDSjtRQUNELElBQUksT0FBTyxJQUFJLElBQUk7WUFBRSxPQUFPLEtBQUssQ0FBQTtRQUVqQyxJQUFJLENBQUMsTUFBTSxHQUFHLE9BQU8sQ0FBQTtRQUVyQixPQUFPLE9BQU8sSUFBSSxJQUFJLENBQUE7SUFDMUIsQ0FBQztJQUVNLGlDQUFPLEdBQWQsVUFBZSxJQUFhO1FBQ3hCLElBQUksSUFBSSxDQUFDLFNBQVMsSUFBSSxDQUFDO1lBQUUsSUFBSSxDQUFDLFNBQVMsR0FBRyxrQkFBUSxDQUFDLE9BQU8sRUFBRSxDQUFBO1FBQzVELElBQUksa0JBQVEsQ0FBQyxPQUFPLEVBQUUsR0FBRyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxhQUFhLEVBQUU7WUFDMUQsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxtQkFBUSxDQUFDLENBQUE7WUFDMUMsMEJBQTBCO1lBQzFCLElBQUksUUFBUSxHQUFzQixRQUFRLENBQUMsUUFBUSxDQUFBO1lBQ25ELFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFBO1lBQ25CLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFBO1NBQ3JCO1FBQ0QsT0FBTyxJQUFJLENBQUE7SUFDZixDQUFDO0lBQ0wsc0JBQUM7QUFBRCxDQS9EQSxBQStEQyxDQS9Eb0MsdUJBQVUsR0ErRDlDO0FBL0RZLDBDQUFlIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRpbWVVdGlsIGZyb20gXCIuLi8uLi8uLi91dGlscy9UaW1lVXRpbFwiXG5pbXBvcnQgeyBBY3Rpb25TdGF0dXMgfSBmcm9tIFwiLi4vLi4vYWkvZ29hcC9BY3Rpb25TdGF0dXNcIlxuaW1wb3J0IHsgR29hcEFjdGlvbiB9IGZyb20gXCIuLi8uLi9haS9nb2FwL0dvYXBBY3Rpb25cIlxuaW1wb3J0IHsgVkdhbWVPYmplY3QgfSBmcm9tIFwiLi4vLi4vYmFzZS9WR2FtZU9iamVjdFwiXG5pbXBvcnQgeyBCYWNrUGFja0NvbXBvbmVudCB9IGZyb20gXCIuLi9CYWNrUGFja0NvbXBvbmVudFwiXG5pbXBvcnQgeyBFbnZpcm9ubWVudCB9IGZyb20gXCIuLi9FbnZpcm9ubWVudFwiXG5pbXBvcnQgeyBGb3JnZUNvbXBvbmVudCB9IGZyb20gXCIuLi9Gb3JnZUNvbXBvbmVudFwiXG5pbXBvcnQgeyBMYWJvdXJlciB9IGZyb20gXCIuLi9sYWJvdXJlcnMvTGFib3VyZXJcIlxuXG5leHBvcnQgY2xhc3MgRm9yZ2VUb29sQWN0aW9uIGV4dGVuZHMgR29hcEFjdGlvbiB7XG4gICAgcHJpdmF0ZSBmb3JnZWQ6IGJvb2xlYW4gPSBmYWxzZVxuICAgIHB1YmxpYyB0YXJnZXQ6IEZvcmdlQ29tcG9uZW50IC8vIHdoZXJlIHdlIGZvcmdlIHRvb2xzXG5cbiAgICBwcml2YXRlIHN0YXJ0VGltZTogbnVtYmVyID0gMFxuICAgIHByaXZhdGUgZm9yZ2VEdXJhdGlvbjogbnVtYmVyID0gMiAvLyBzZWNvbmRzXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpXG4gICAgICAgIHRoaXMuYWRkUHJlY29uZGl0aW9uKEFjdGlvblN0YXR1cy5IYXNPcmUsIHRydWUpXG4gICAgICAgIHRoaXMuYWRkRWZmZWN0KEFjdGlvblN0YXR1cy5IYXNOZXdUb29scywgdHJ1ZSlcbiAgICB9XG5cbiAgICBwdWJsaWMgcmVzZXQoKSB7XG4gICAgICAgIHRoaXMuZm9yZ2VkID0gZmFsc2VcbiAgICAgICAgdGhpcy5zdGFydFRpbWUgPSAwXG4gICAgfVxuXG4gICAgcHVibGljIGlzRG9uZSgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZm9yZ2VkXG4gICAgfVxuICAgIHB1YmxpYyByZXF1aXJlc0luUmFuZ2UoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuXG4gICAgcHVibGljIGNoZWNrUHJvY2VkdXJhbFByZWNvbmRpdGlvbihnbzogY2MuTm9kZSk6IGJvb2xlYW4ge1xuICAgICAgICAvL1RPRE86IGZpbmQgdGhlIG5lYXJlc3QgZm9yZ2VcbiAgICAgICAgbGV0IGZvcmdlczogRm9yZ2VDb21wb25lbnRbXSA9IEVudmlyb25tZW50LmZvcmdlQ29tcHNcbiAgICAgICAgbGV0IGNsb3Nlc3Q6IEZvcmdlQ29tcG9uZW50ID0gbnVsbFxuICAgICAgICBsZXQgY2xvc2VzdERpc3Q6IG51bWJlciA9IDBcbiAgICAgICAgbGV0IHZnID0gZ28uZ2V0Q29tcG9uZW50KFZHYW1lT2JqZWN0KVxuICAgICAgICBmb3IgKGxldCBmb3JnZSBvZiBmb3JnZXMpIHtcbiAgICAgICAgICAgIGlmIChjbG9zZXN0ID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAvLyBmaXJzdCBvbmUsIHNvIGNob29zZSBpdCBmb3Igbm93XG4gICAgICAgICAgICAgICAgY2xvc2VzdCA9IGZvcmdlXG4gICAgICAgICAgICAgICAgY2xvc2VzdERpc3QgPSBmb3JnZS5kaXN0YW5jZVNxdWFyZSh2ZylcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gaXMgdGhpcyBvbmUgY2xvc2VyIHRoYW4gdGhlIGxhc3Q/XG4gICAgICAgICAgICAgICAgbGV0IGRpc3Q6IG51bWJlciA9IGZvcmdlLmRpc3RhbmNlU3F1YXJlKHZnKVxuICAgICAgICAgICAgICAgIGlmIChkaXN0IDwgY2xvc2VzdERpc3QpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gd2UgZm91bmQgYSBjbG9zZXIgb25lLCB1c2UgaXRcbiAgICAgICAgICAgICAgICAgICAgY2xvc2VzdCA9IGZvcmdlXG4gICAgICAgICAgICAgICAgICAgIGNsb3Nlc3REaXN0ID0gZGlzdFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoY2xvc2VzdCA9PSBudWxsKSByZXR1cm4gZmFsc2VcblxuICAgICAgICB0aGlzLnRhcmdldCA9IGNsb3Nlc3RcblxuICAgICAgICByZXR1cm4gY2xvc2VzdCAhPSBudWxsXG4gICAgfVxuXG4gICAgcHVibGljIHBlcmZvcm0obm9kZTogY2MuTm9kZSk6IGJvb2xlYW4ge1xuICAgICAgICBpZiAodGhpcy5zdGFydFRpbWUgPT0gMCkgdGhpcy5zdGFydFRpbWUgPSBUaW1lVXRpbC5nZXRUaW1lKClcbiAgICAgICAgaWYgKFRpbWVVdGlsLmdldFRpbWUoKSAtIHRoaXMuc3RhcnRUaW1lID4gdGhpcy5mb3JnZUR1cmF0aW9uKSB7XG4gICAgICAgICAgICBsZXQgbGFib3VyZXIgPSBub2RlLmdldENvbXBvbmVudChMYWJvdXJlcilcbiAgICAgICAgICAgIC8vIGZpbmlzaGVkIGZvcmdpbmcgYSB0b29sXG4gICAgICAgICAgICBsZXQgYmFja3BhY2s6IEJhY2tQYWNrQ29tcG9uZW50ID0gbGFib3VyZXIuYmFja3BhY2tcbiAgICAgICAgICAgIGJhY2twYWNrLm51bU9yZSA9IDBcbiAgICAgICAgICAgIHRoaXMuZm9yZ2VkID0gdHJ1ZVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgfVxufVxuIl19
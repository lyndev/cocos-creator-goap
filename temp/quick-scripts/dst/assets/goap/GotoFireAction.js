
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/goap/GotoFireAction.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e22c2loAydIDY/KiKv+hFz1', 'GotoFireAction');
// goap/GotoFireAction.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.GotoFireAction = void 0;
var GoapAction_1 = require("../src/app/ai/goap/GoapAction");
var Environment_1 = require("../src/app/gamedata/Environment");
var TimeUtil_1 = require("../src/utils/TimeUtil");
var ActionDataStatus_1 = require("./ActionDataStatus");
var GotoFireAction = /** @class */ (function (_super) {
    __extends(GotoFireAction, _super);
    function GotoFireAction() {
        var _this = _super.call(this) || this;
        _this.bDone = false;
        _this.startTime = 0;
        _this.workDuration = 2; // seconds
        _this.addPrecondition(ActionDataStatus_1.ActionDataStatus.isFireOk, false); // we need a tool to do this
        _this.addPrecondition(ActionDataStatus_1.ActionDataStatus.isEquipOk, true); // we need a tool to do this
        _this.addEffect(ActionDataStatus_1.ActionDataStatus.outFire, true);
        _this.addEffect(ActionDataStatus_1.ActionDataStatus.isEquipOk, false);
        return _this;
    }
    GotoFireAction.prototype.reset = function () {
        this.bDone = false;
        this.startTime = 0;
    };
    GotoFireAction.prototype.isDone = function () {
        return this.bDone;
    };
    GotoFireAction.prototype.requiresInRange = function () {
        return true;
    };
    GotoFireAction.prototype.checkProceduralPrecondition = function (agent) {
        this.target = Environment_1.Environment.fireTarget;
        return this.target != null;
        // // TODO:find the nearest tree that we can chop
        // let trees: TreeComponent[] = Environment.treeComps;
        // let closest: TreeComponent = null;
        // let closestDist: number = 0;
        // for (let tree of trees) {
        // 	if (closest == null) {
        // 		// first one, so choose it for now
        // 		closest = tree;
        // 		closestDist = tree.distanceSquare(agent);
        // 	} else {
        // 		// is this one closer than the last?
        // 		let dist: number = tree.distanceSquare(agent);
        // 		if (dist < closestDist) {
        // 			// we found a closer one, use it
        // 			closest = tree;
        // 			closestDist = dist;
        // 		}
        // 	}
        // }
        // if (closest == null)
        // 	return false;
        // this.target = closest;
        // return closest != null;
    };
    GotoFireAction.prototype.perform = function (iGoap) {
        var entity = iGoap;
        if (this.startTime == 0)
            this.startTime = TimeUtil_1.default.getTime();
        if (TimeUtil_1.default.getTime() - this.startTime > this.workDuration) {
            entity.memory.set(ActionDataStatus_1.ActionDataStatus.isFireOk, true);
            this.bDone = true;
            entity.memory.set(ActionDataStatus_1.ActionDataStatus.isTolietOk, false);
            entity.memory.set(ActionDataStatus_1.ActionDataStatus.isEatOk, false);
            entity.memory.set(ActionDataStatus_1.ActionDataStatus.isEquipOk, false);
            entity.memory.set(ActionDataStatus_1.ActionDataStatus.isFireOk, false);
        }
        return true;
    };
    return GotoFireAction;
}(GoapAction_1.GoapAction));
exports.GotoFireAction = GotoFireAction;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9nb2FwL0dvdG9GaXJlQWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw0REFBMkQ7QUFHM0QsK0RBQThEO0FBQzlELGtEQUE2QztBQUM3Qyx1REFBc0Q7QUFHdEQ7SUFBb0Msa0NBQVU7SUFJN0M7UUFBQSxZQUNDLGlCQUFPLFNBS1A7UUFUTyxXQUFLLEdBQVksS0FBSyxDQUFBO1FBQ3RCLGVBQVMsR0FBVyxDQUFDLENBQUM7UUFDdEIsa0JBQVksR0FBVyxDQUFDLENBQUMsQ0FBQyxVQUFVO1FBRzNDLEtBQUksQ0FBQyxlQUFlLENBQUMsbUNBQWdCLENBQUMsUUFBUSxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsNEJBQTRCO1FBQ3BGLEtBQUksQ0FBQyxlQUFlLENBQUMsbUNBQWdCLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsNEJBQTRCO1FBQ3BGLEtBQUksQ0FBQyxTQUFTLENBQUMsbUNBQWdCLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQy9DLEtBQUksQ0FBQyxTQUFTLENBQUMsbUNBQWdCLENBQUMsU0FBUyxFQUFFLEtBQUssQ0FBQyxDQUFBOztJQUNsRCxDQUFDO0lBRU0sOEJBQUssR0FBWjtRQUNDLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDO0lBQ3BCLENBQUM7SUFFTSwrQkFBTSxHQUFiO1FBQ0MsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ25CLENBQUM7SUFFTSx3Q0FBZSxHQUF0QjtRQUNDLE9BQU8sSUFBSSxDQUFDO0lBQ2IsQ0FBQztJQUNNLG9EQUEyQixHQUFsQyxVQUFtQyxLQUFrQjtRQUNwRCxJQUFJLENBQUMsTUFBTSxHQUFHLHlCQUFXLENBQUMsVUFBVSxDQUFDO1FBQ3JDLE9BQU8sSUFBSSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUE7UUFDMUIsaURBQWlEO1FBQ2pELHNEQUFzRDtRQUN0RCxxQ0FBcUM7UUFDckMsK0JBQStCO1FBRS9CLDRCQUE0QjtRQUM1QiwwQkFBMEI7UUFDMUIsdUNBQXVDO1FBQ3ZDLG9CQUFvQjtRQUNwQiw4Q0FBOEM7UUFDOUMsWUFBWTtRQUNaLHlDQUF5QztRQUN6QyxtREFBbUQ7UUFDbkQsOEJBQThCO1FBQzlCLHNDQUFzQztRQUN0QyxxQkFBcUI7UUFDckIseUJBQXlCO1FBQ3pCLE1BQU07UUFDTixLQUFLO1FBQ0wsSUFBSTtRQUNKLHVCQUF1QjtRQUN2QixpQkFBaUI7UUFFakIseUJBQXlCO1FBRXpCLDBCQUEwQjtJQUMzQixDQUFDO0lBRU0sZ0NBQU8sR0FBZCxVQUFlLEtBQVk7UUFDMUIsSUFBSSxNQUFNLEdBQUcsS0FBZSxDQUFDO1FBQzdCLElBQUksSUFBSSxDQUFDLFNBQVMsSUFBSSxDQUFDO1lBQ3RCLElBQUksQ0FBQyxTQUFTLEdBQUcsa0JBQVEsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUVyQyxJQUFJLGtCQUFRLENBQUMsT0FBTyxFQUFFLEdBQUcsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQzVELE1BQU0sQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLG1DQUFnQixDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQTtZQUNsRCxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQTtZQUNqQixNQUFNLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxtQ0FBZ0IsQ0FBQyxVQUFVLEVBQUUsS0FBSyxDQUFDLENBQUE7WUFDckQsTUFBTSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsbUNBQWdCLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFBO1lBQ2xELE1BQU0sQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLG1DQUFnQixDQUFDLFNBQVMsRUFBRSxLQUFLLENBQUMsQ0FBQTtZQUNwRCxNQUFNLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxtQ0FBZ0IsQ0FBQyxRQUFRLEVBQUUsS0FBSyxDQUFDLENBQUE7U0FDbkQ7UUFDRCxPQUFPLElBQUksQ0FBQztJQUNiLENBQUM7SUFDRixxQkFBQztBQUFELENBdEVBLEFBc0VDLENBdEVtQyx1QkFBVSxHQXNFN0M7QUF0RVksd0NBQWMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHb2FwQWN0aW9uIH0gZnJvbSBcIi4uL3NyYy9hcHAvYWkvZ29hcC9Hb2FwQWN0aW9uXCI7XG5pbXBvcnQgeyBJR29hcCB9IGZyb20gXCIuLi9zcmMvYXBwL2FpL2dvYXAvSUdvYXBcIjtcbmltcG9ydCB7IFZHYW1lT2JqZWN0IH0gZnJvbSBcIi4uL3NyYy9hcHAvYmFzZS9WR2FtZU9iamVjdFwiO1xuaW1wb3J0IHsgRW52aXJvbm1lbnQgfSBmcm9tIFwiLi4vc3JjL2FwcC9nYW1lZGF0YS9FbnZpcm9ubWVudFwiO1xuaW1wb3J0IFRpbWVVdGlsIGZyb20gXCIuLi9zcmMvdXRpbHMvVGltZVV0aWxcIjtcbmltcG9ydCB7IEFjdGlvbkRhdGFTdGF0dXMgfSBmcm9tIFwiLi9BY3Rpb25EYXRhU3RhdHVzXCI7XG5pbXBvcnQgRW50aXR5IGZyb20gXCIuL0VudGl0eVwiO1xuXG5leHBvcnQgY2xhc3MgR290b0ZpcmVBY3Rpb24gZXh0ZW5kcyBHb2FwQWN0aW9uIHtcblx0cHJpdmF0ZSBiRG9uZTogYm9vbGVhbiA9IGZhbHNlXG5cdHByaXZhdGUgc3RhcnRUaW1lOiBudW1iZXIgPSAwO1xuXHRwcml2YXRlIHdvcmtEdXJhdGlvbjogbnVtYmVyID0gMjsgLy8gc2Vjb25kc1xuXHRwdWJsaWMgY29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoKTtcblx0XHR0aGlzLmFkZFByZWNvbmRpdGlvbihBY3Rpb25EYXRhU3RhdHVzLmlzRmlyZU9rLCBmYWxzZSk7IC8vIHdlIG5lZWQgYSB0b29sIHRvIGRvIHRoaXNcblx0XHR0aGlzLmFkZFByZWNvbmRpdGlvbihBY3Rpb25EYXRhU3RhdHVzLmlzRXF1aXBPaywgdHJ1ZSk7IC8vIHdlIG5lZWQgYSB0b29sIHRvIGRvIHRoaXNcblx0XHR0aGlzLmFkZEVmZmVjdChBY3Rpb25EYXRhU3RhdHVzLm91dEZpcmUsIHRydWUpO1xuXHRcdHRoaXMuYWRkRWZmZWN0KEFjdGlvbkRhdGFTdGF0dXMuaXNFcXVpcE9rLCBmYWxzZSlcblx0fVxuXG5cdHB1YmxpYyByZXNldCgpOiB2b2lkIHtcblx0XHR0aGlzLmJEb25lID0gZmFsc2U7XG5cdFx0dGhpcy5zdGFydFRpbWUgPSAwO1xuXHR9XG5cblx0cHVibGljIGlzRG9uZSgpIHtcblx0XHRyZXR1cm4gdGhpcy5iRG9uZTtcblx0fVxuXG5cdHB1YmxpYyByZXF1aXJlc0luUmFuZ2UoKSB7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cblx0cHVibGljIGNoZWNrUHJvY2VkdXJhbFByZWNvbmRpdGlvbihhZ2VudDogVkdhbWVPYmplY3QpOiBib29sZWFuIHtcblx0XHR0aGlzLnRhcmdldCA9IEVudmlyb25tZW50LmZpcmVUYXJnZXQ7XG5cdFx0cmV0dXJuIHRoaXMudGFyZ2V0ICE9IG51bGxcblx0XHQvLyAvLyBUT0RPOmZpbmQgdGhlIG5lYXJlc3QgdHJlZSB0aGF0IHdlIGNhbiBjaG9wXG5cdFx0Ly8gbGV0IHRyZWVzOiBUcmVlQ29tcG9uZW50W10gPSBFbnZpcm9ubWVudC50cmVlQ29tcHM7XG5cdFx0Ly8gbGV0IGNsb3Nlc3Q6IFRyZWVDb21wb25lbnQgPSBudWxsO1xuXHRcdC8vIGxldCBjbG9zZXN0RGlzdDogbnVtYmVyID0gMDtcblxuXHRcdC8vIGZvciAobGV0IHRyZWUgb2YgdHJlZXMpIHtcblx0XHQvLyBcdGlmIChjbG9zZXN0ID09IG51bGwpIHtcblx0XHQvLyBcdFx0Ly8gZmlyc3Qgb25lLCBzbyBjaG9vc2UgaXQgZm9yIG5vd1xuXHRcdC8vIFx0XHRjbG9zZXN0ID0gdHJlZTtcblx0XHQvLyBcdFx0Y2xvc2VzdERpc3QgPSB0cmVlLmRpc3RhbmNlU3F1YXJlKGFnZW50KTtcblx0XHQvLyBcdH0gZWxzZSB7XG5cdFx0Ly8gXHRcdC8vIGlzIHRoaXMgb25lIGNsb3NlciB0aGFuIHRoZSBsYXN0P1xuXHRcdC8vIFx0XHRsZXQgZGlzdDogbnVtYmVyID0gdHJlZS5kaXN0YW5jZVNxdWFyZShhZ2VudCk7XG5cdFx0Ly8gXHRcdGlmIChkaXN0IDwgY2xvc2VzdERpc3QpIHtcblx0XHQvLyBcdFx0XHQvLyB3ZSBmb3VuZCBhIGNsb3NlciBvbmUsIHVzZSBpdFxuXHRcdC8vIFx0XHRcdGNsb3Nlc3QgPSB0cmVlO1xuXHRcdC8vIFx0XHRcdGNsb3Nlc3REaXN0ID0gZGlzdDtcblx0XHQvLyBcdFx0fVxuXHRcdC8vIFx0fVxuXHRcdC8vIH1cblx0XHQvLyBpZiAoY2xvc2VzdCA9PSBudWxsKVxuXHRcdC8vIFx0cmV0dXJuIGZhbHNlO1xuXG5cdFx0Ly8gdGhpcy50YXJnZXQgPSBjbG9zZXN0O1xuXG5cdFx0Ly8gcmV0dXJuIGNsb3Nlc3QgIT0gbnVsbDtcblx0fVxuXG5cdHB1YmxpYyBwZXJmb3JtKGlHb2FwOiBJR29hcCk6IGJvb2xlYW4ge1xuXHRcdGxldCBlbnRpdHkgPSBpR29hcCBhcyBFbnRpdHk7XG5cdFx0aWYgKHRoaXMuc3RhcnRUaW1lID09IDApXG5cdFx0XHR0aGlzLnN0YXJ0VGltZSA9IFRpbWVVdGlsLmdldFRpbWUoKTtcblxuXHRcdGlmIChUaW1lVXRpbC5nZXRUaW1lKCkgLSB0aGlzLnN0YXJ0VGltZSA+IHRoaXMud29ya0R1cmF0aW9uKSB7XG5cdFx0XHRlbnRpdHkubWVtb3J5LnNldChBY3Rpb25EYXRhU3RhdHVzLmlzRmlyZU9rLCB0cnVlKVxuXHRcdFx0dGhpcy5iRG9uZSA9IHRydWVcblx0XHRcdGVudGl0eS5tZW1vcnkuc2V0KEFjdGlvbkRhdGFTdGF0dXMuaXNUb2xpZXRPaywgZmFsc2UpXG5cdFx0XHRlbnRpdHkubWVtb3J5LnNldChBY3Rpb25EYXRhU3RhdHVzLmlzRWF0T2ssIGZhbHNlKVxuXHRcdFx0ZW50aXR5Lm1lbW9yeS5zZXQoQWN0aW9uRGF0YVN0YXR1cy5pc0VxdWlwT2ssIGZhbHNlKVxuXHRcdFx0ZW50aXR5Lm1lbW9yeS5zZXQoQWN0aW9uRGF0YVN0YXR1cy5pc0ZpcmVPaywgZmFsc2UpXG5cdFx0fVxuXHRcdHJldHVybiB0cnVlO1xuXHR9XG59Il19
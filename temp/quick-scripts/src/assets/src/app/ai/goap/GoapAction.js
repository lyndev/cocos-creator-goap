"use strict";
cc._RF.push(module, 'cb66cSHr3JCl5d2q3MzKcU5', 'GoapAction');
// src/app/ai/goap/GoapAction.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GoapAction = void 0;
/*
 * @Description:
 * @Author: RannarYang
 * @Date: 2018-09-06 00:09:26
 * @Last Modified by:   RannarYang
 * @Last Modified time: 2018-09-06 00:09:26
 */
var GoapAction = /** @class */ (function () {
    function GoapAction() {
        this.inRange = false;
        /* 执行动作的成本。
         * 找出适合动作的重量。
         * 更改它将影响在计划期间选择的操作。*/
        this.cost = 1;
        this._preconditions = new Map();
        this._effects = new Map();
    }
    GoapAction.prototype.doReset = function () {
        this.inRange = false;
        this.target = null;
        this.reset();
    };
    /**
     * Are we in range of the target?
     * The MoveTo state will set this and it gets reset each time this action is performed.
     */
    GoapAction.prototype.isInRange = function () {
        return this.inRange;
    };
    GoapAction.prototype.setInRange = function (inRange) {
        this.inRange = inRange;
    };
    GoapAction.prototype.addPrecondition = function (key, value) {
        this._preconditions.set(key, value);
    };
    GoapAction.prototype.removePrecondition = function (key) {
        this._preconditions.delete(key);
    };
    GoapAction.prototype.addEffect = function (key, value) {
        this._effects.set(key, value);
    };
    GoapAction.prototype.removeEffect = function (key) {
        this._effects.delete(key);
    };
    Object.defineProperty(GoapAction.prototype, "preconditions", {
        get: function () {
            return this._preconditions;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GoapAction.prototype, "effects", {
        get: function () {
            return this._effects;
        },
        enumerable: false,
        configurable: true
    });
    return GoapAction;
}());
exports.GoapAction = GoapAction;

cc._RF.pop();
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
        /* The cost of performing the action.
         * Figure out a weight that suits the action.
         * Changing it will affect what actions are chosen during planning.*/
        this.cost = 1;
        this.preconditions = new Map();
        this.effects = new Map();
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
        this.preconditions.set(key, value);
    };
    GoapAction.prototype.removePrecondition = function (key) {
        this.preconditions.delete(key);
    };
    GoapAction.prototype.addEffect = function (key, value) {
        this.effects.set(key, value);
    };
    GoapAction.prototype.removeEffect = function (key) {
        this.effects.delete(key);
    };
    Object.defineProperty(GoapAction.prototype, "Preconditions", {
        get: function () {
            return this.preconditions;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GoapAction.prototype, "Effects", {
        get: function () {
            return this.effects;
        },
        enumerable: false,
        configurable: true
    });
    return GoapAction;
}());
exports.GoapAction = GoapAction;

cc._RF.pop();
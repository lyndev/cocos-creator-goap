"use strict";
cc._RF.push(module, '9c368tjj3lOdoA4/lBbS3e1', 'BackPackComponent');
// src/app/gamedata/BackPackComponent.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BackPackComponent = void 0;
/*
 * @Description: Holds resources for the Agent
 * @Author: Rannar.Yang
 * @Date: 2018-09-05 20:44:56
 * @Last Modified by: RannarYang
 * @Last Modified time: 2018-11-04 18:33:07
 */
var BackPackComponent = /** @class */ (function () {
    function BackPackComponent(numLogs, numFirewood, numOre) {
        this._numLogs = 0;
        this._numFirewood = 0;
        this._numOre = 0;
        this._numLogs = numLogs;
        this._numFirewood = numFirewood;
        this._numOre = numOre;
    }
    Object.defineProperty(BackPackComponent.prototype, "numLogs", {
        get: function () {
            return this._numLogs;
        },
        set: function (val) {
            this._numLogs = val;
            this.owner.updateBackPack();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BackPackComponent.prototype, "numFirewood", {
        get: function () {
            return this._numFirewood;
        },
        set: function (val) {
            this._numFirewood = val;
            this.owner.updateBackPack();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BackPackComponent.prototype, "numOre", {
        get: function () {
            return this._numOre;
        },
        set: function (val) {
            this._numOre = val;
            this.owner.updateBackPack();
        },
        enumerable: false,
        configurable: true
    });
    BackPackComponent.prototype.setOwner = function (owner) {
        this.owner = owner;
    };
    BackPackComponent.prototype.hasOre = function () {
        return this.numOre > 0;
    };
    BackPackComponent.prototype.hasLog = function () {
        return this.numLogs > 0;
    };
    BackPackComponent.prototype.hasFirewood = function () {
        return this.numFirewood > 0;
    };
    return BackPackComponent;
}());
exports.BackPackComponent = BackPackComponent;

cc._RF.pop();

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/app/gamedata/BackPackComponent.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvYXBwL2dhbWVkYXRhL0JhY2tQYWNrQ29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBOzs7Ozs7R0FNRztBQUNIO0lBOEJDLDJCQUFZLE9BQWUsRUFBRSxXQUFtQixFQUFFLE1BQWM7UUE1QnhELGFBQVEsR0FBVyxDQUFDLENBQUM7UUFVckIsaUJBQVksR0FBVyxDQUFDLENBQUM7UUFTekIsWUFBTyxHQUFXLENBQUMsQ0FBQztRQVUzQixJQUFJLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQztRQUN4QixJQUFJLENBQUMsWUFBWSxHQUFHLFdBQVcsQ0FBQztRQUNoQyxJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQztJQUN2QixDQUFDO0lBL0JELHNCQUFXLHNDQUFPO2FBQWxCO1lBQ0MsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQ3RCLENBQUM7YUFDRCxVQUFtQixHQUFXO1lBQzdCLElBQUksQ0FBQyxRQUFRLEdBQUcsR0FBRyxDQUFDO1lBQ3BCLElBQUksQ0FBQyxLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDN0IsQ0FBQzs7O09BSkE7SUFRRCxzQkFBVywwQ0FBVzthQUF0QjtZQUNDLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQztRQUMxQixDQUFDO2FBQ0QsVUFBdUIsR0FBVztZQUNqQyxJQUFJLENBQUMsWUFBWSxHQUFHLEdBQUcsQ0FBQztZQUN4QixJQUFJLENBQUMsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQzdCLENBQUM7OztPQUpBO0lBT0Qsc0JBQVcscUNBQU07YUFBakI7WUFDQyxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDckIsQ0FBQzthQUNELFVBQWtCLEdBQVc7WUFDNUIsSUFBSSxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUM7WUFDbkIsSUFBSSxDQUFDLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUM3QixDQUFDOzs7T0FKQTtJQVdNLG9DQUFRLEdBQWYsVUFBZ0IsS0FBZTtRQUM5QixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztJQUNwQixDQUFDO0lBRU0sa0NBQU0sR0FBYjtRQUNDLE9BQU8sSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7SUFDeEIsQ0FBQztJQUVNLGtDQUFNLEdBQWI7UUFDQyxPQUFPLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDO0lBQ3pCLENBQUM7SUFFTSx1Q0FBVyxHQUFsQjtRQUNDLE9BQU8sSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUM7SUFDN0IsQ0FBQztJQUVGLHdCQUFDO0FBQUQsQ0FuREEsQUFtREMsSUFBQTtBQW5EWSw4Q0FBaUIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMYWJvdXJlciB9IGZyb20gXCIuL2xhYm91cmVycy9MYWJvdXJlclwiO1xuXG4vKlxuICogQERlc2NyaXB0aW9uOiBIb2xkcyByZXNvdXJjZXMgZm9yIHRoZSBBZ2VudFxuICogQEF1dGhvcjogUmFubmFyLllhbmcgXG4gKiBARGF0ZTogMjAxOC0wOS0wNSAyMDo0NDo1NiBcbiAqIEBMYXN0IE1vZGlmaWVkIGJ5OiBSYW5uYXJZYW5nXG4gKiBATGFzdCBNb2RpZmllZCB0aW1lOiAyMDE4LTExLTA0IDE4OjMzOjA3XG4gKi9cbmV4cG9ydCBjbGFzcyBCYWNrUGFja0NvbXBvbmVudCB7XG5cdHByaXZhdGUgb3duZXI6IExhYm91cmVyO1xuXHRwcml2YXRlIF9udW1Mb2dzOiBudW1iZXIgPSAwO1xuXHRwdWJsaWMgZ2V0IG51bUxvZ3MoKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gdGhpcy5fbnVtTG9ncztcblx0fVxuXHRwdWJsaWMgc2V0IG51bUxvZ3ModmFsOiBudW1iZXIpIHtcblx0XHR0aGlzLl9udW1Mb2dzID0gdmFsO1xuXHRcdHRoaXMub3duZXIudXBkYXRlQmFja1BhY2soKTtcblx0fVxuXG5cblx0cHJpdmF0ZSBfbnVtRmlyZXdvb2Q6IG51bWJlciA9IDA7XG5cdHB1YmxpYyBnZXQgbnVtRmlyZXdvb2QoKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gdGhpcy5fbnVtRmlyZXdvb2Q7XG5cdH1cblx0cHVibGljIHNldCBudW1GaXJld29vZCh2YWw6IG51bWJlcikge1xuXHRcdHRoaXMuX251bUZpcmV3b29kID0gdmFsO1xuXHRcdHRoaXMub3duZXIudXBkYXRlQmFja1BhY2soKTtcblx0fVxuXG5cdHByaXZhdGUgX251bU9yZTogbnVtYmVyID0gMDtcblx0cHVibGljIGdldCBudW1PcmUoKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gdGhpcy5fbnVtT3JlO1xuXHR9XG5cdHB1YmxpYyBzZXQgbnVtT3JlKHZhbDogbnVtYmVyKSB7XG5cdFx0dGhpcy5fbnVtT3JlID0gdmFsO1xuXHRcdHRoaXMub3duZXIudXBkYXRlQmFja1BhY2soKTtcblx0fVxuXG5cdGNvbnN0cnVjdG9yKG51bUxvZ3M6IG51bWJlciwgbnVtRmlyZXdvb2Q6IG51bWJlciwgbnVtT3JlOiBudW1iZXIpIHtcblx0XHR0aGlzLl9udW1Mb2dzID0gbnVtTG9ncztcblx0XHR0aGlzLl9udW1GaXJld29vZCA9IG51bUZpcmV3b29kO1xuXHRcdHRoaXMuX251bU9yZSA9IG51bU9yZTtcblx0fVxuXHRwdWJsaWMgc2V0T3duZXIob3duZXI6IExhYm91cmVyKSB7XG5cdFx0dGhpcy5vd25lciA9IG93bmVyO1xuXHR9XG5cblx0cHVibGljIGhhc09yZSgpIHtcblx0XHRyZXR1cm4gdGhpcy5udW1PcmUgPiAwO1xuXHR9XG5cblx0cHVibGljIGhhc0xvZygpIHtcblx0XHRyZXR1cm4gdGhpcy5udW1Mb2dzID4gMDtcblx0fVxuXG5cdHB1YmxpYyBoYXNGaXJld29vZCgpIHtcblx0XHRyZXR1cm4gdGhpcy5udW1GaXJld29vZCA+IDA7XG5cdH1cblxufSJdfQ==
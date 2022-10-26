
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxhcHBcXGdhbWVkYXRhXFxCYWNrUGFja0NvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQTs7Ozs7O0dBTUc7QUFDSDtJQThCQywyQkFBWSxPQUFlLEVBQUUsV0FBbUIsRUFBRSxNQUFjO1FBNUJ4RCxhQUFRLEdBQVcsQ0FBQyxDQUFDO1FBVXJCLGlCQUFZLEdBQVcsQ0FBQyxDQUFDO1FBU3pCLFlBQU8sR0FBVyxDQUFDLENBQUM7UUFVM0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUM7UUFDeEIsSUFBSSxDQUFDLFlBQVksR0FBRyxXQUFXLENBQUM7UUFDaEMsSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7SUFDdkIsQ0FBQztJQS9CRCxzQkFBVyxzQ0FBTzthQUFsQjtZQUNDLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUN0QixDQUFDO2FBQ0QsVUFBbUIsR0FBVztZQUM3QixJQUFJLENBQUMsUUFBUSxHQUFHLEdBQUcsQ0FBQztZQUNwQixJQUFJLENBQUMsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQzdCLENBQUM7OztPQUpBO0lBUUQsc0JBQVcsMENBQVc7YUFBdEI7WUFDQyxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUM7UUFDMUIsQ0FBQzthQUNELFVBQXVCLEdBQVc7WUFDakMsSUFBSSxDQUFDLFlBQVksR0FBRyxHQUFHLENBQUM7WUFDeEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUM3QixDQUFDOzs7T0FKQTtJQU9ELHNCQUFXLHFDQUFNO2FBQWpCO1lBQ0MsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQ3JCLENBQUM7YUFDRCxVQUFrQixHQUFXO1lBQzVCLElBQUksQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDO1lBQ25CLElBQUksQ0FBQyxLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDN0IsQ0FBQzs7O09BSkE7SUFXTSxvQ0FBUSxHQUFmLFVBQWdCLEtBQWU7UUFDOUIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7SUFDcEIsQ0FBQztJQUVNLGtDQUFNLEdBQWI7UUFDQyxPQUFPLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO0lBQ3hCLENBQUM7SUFFTSxrQ0FBTSxHQUFiO1FBQ0MsT0FBTyxJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQztJQUN6QixDQUFDO0lBRU0sdUNBQVcsR0FBbEI7UUFDQyxPQUFPLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUFFRix3QkFBQztBQUFELENBbkRBLEFBbURDLElBQUE7QUFuRFksOENBQWlCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTGFib3VyZXIgfSBmcm9tIFwiLi9sYWJvdXJlcnMvTGFib3VyZXJcIjtcclxuXHJcbi8qXHJcbiAqIEBEZXNjcmlwdGlvbjogSG9sZHMgcmVzb3VyY2VzIGZvciB0aGUgQWdlbnRcclxuICogQEF1dGhvcjogUmFubmFyLllhbmcgXHJcbiAqIEBEYXRlOiAyMDE4LTA5LTA1IDIwOjQ0OjU2IFxyXG4gKiBATGFzdCBNb2RpZmllZCBieTogUmFubmFyWWFuZ1xyXG4gKiBATGFzdCBNb2RpZmllZCB0aW1lOiAyMDE4LTExLTA0IDE4OjMzOjA3XHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgQmFja1BhY2tDb21wb25lbnQge1xyXG5cdHByaXZhdGUgb3duZXI6IExhYm91cmVyO1xyXG5cdHByaXZhdGUgX251bUxvZ3M6IG51bWJlciA9IDA7XHJcblx0cHVibGljIGdldCBudW1Mb2dzKCk6IG51bWJlciB7XHJcblx0XHRyZXR1cm4gdGhpcy5fbnVtTG9ncztcclxuXHR9XHJcblx0cHVibGljIHNldCBudW1Mb2dzKHZhbDogbnVtYmVyKSB7XHJcblx0XHR0aGlzLl9udW1Mb2dzID0gdmFsO1xyXG5cdFx0dGhpcy5vd25lci51cGRhdGVCYWNrUGFjaygpO1xyXG5cdH1cclxuXHJcblxyXG5cdHByaXZhdGUgX251bUZpcmV3b29kOiBudW1iZXIgPSAwO1xyXG5cdHB1YmxpYyBnZXQgbnVtRmlyZXdvb2QoKTogbnVtYmVyIHtcclxuXHRcdHJldHVybiB0aGlzLl9udW1GaXJld29vZDtcclxuXHR9XHJcblx0cHVibGljIHNldCBudW1GaXJld29vZCh2YWw6IG51bWJlcikge1xyXG5cdFx0dGhpcy5fbnVtRmlyZXdvb2QgPSB2YWw7XHJcblx0XHR0aGlzLm93bmVyLnVwZGF0ZUJhY2tQYWNrKCk7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIF9udW1PcmU6IG51bWJlciA9IDA7XHJcblx0cHVibGljIGdldCBudW1PcmUoKTogbnVtYmVyIHtcclxuXHRcdHJldHVybiB0aGlzLl9udW1PcmU7XHJcblx0fVxyXG5cdHB1YmxpYyBzZXQgbnVtT3JlKHZhbDogbnVtYmVyKSB7XHJcblx0XHR0aGlzLl9udW1PcmUgPSB2YWw7XHJcblx0XHR0aGlzLm93bmVyLnVwZGF0ZUJhY2tQYWNrKCk7XHJcblx0fVxyXG5cclxuXHRjb25zdHJ1Y3RvcihudW1Mb2dzOiBudW1iZXIsIG51bUZpcmV3b29kOiBudW1iZXIsIG51bU9yZTogbnVtYmVyKSB7XHJcblx0XHR0aGlzLl9udW1Mb2dzID0gbnVtTG9ncztcclxuXHRcdHRoaXMuX251bUZpcmV3b29kID0gbnVtRmlyZXdvb2Q7XHJcblx0XHR0aGlzLl9udW1PcmUgPSBudW1PcmU7XHJcblx0fVxyXG5cdHB1YmxpYyBzZXRPd25lcihvd25lcjogTGFib3VyZXIpIHtcclxuXHRcdHRoaXMub3duZXIgPSBvd25lcjtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBoYXNPcmUoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5udW1PcmUgPiAwO1xyXG5cdH1cclxuXHJcblx0cHVibGljIGhhc0xvZygpIHtcclxuXHRcdHJldHVybiB0aGlzLm51bUxvZ3MgPiAwO1xyXG5cdH1cclxuXHJcblx0cHVibGljIGhhc0ZpcmV3b29kKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMubnVtRmlyZXdvb2QgPiAwO1xyXG5cdH1cclxuXHJcbn0iXX0=
"use strict";
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

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/goap/ActionDataStatus');
require('./assets/goap/DataMemory');
require('./assets/goap/Eating');
require('./assets/goap/Entity');
require('./assets/goap/Env');
require('./assets/goap/Equip');
require('./assets/goap/Fire');
require('./assets/goap/FireNpc');
require('./assets/goap/GotSleepAction');
require('./assets/goap/GotoEatAction');
require('./assets/goap/GotoEquipmentAction');
require('./assets/goap/GotoFireAction');
require('./assets/goap/GotoToiletAction');
require('./assets/goap/Sleep');
require('./assets/goap/StoreA');
require('./assets/goap/Toilet');
require('./assets/goap/actions/ActionBuyShopItem');
require('./assets/goap/actions/ActionPayMoney');
require('./assets/goap/goaps/GoapOutFire2');
require('./assets/src/NewScript');
require('./assets/src/app/ai/fsm/StateManager');
require('./assets/src/app/ai/fsm/state/StateBase');
require('./assets/src/app/ai/fsm/state/StateEnum');
require('./assets/src/app/ai/fsm/state/StateIdle');
require('./assets/src/app/ai/fsm/state/StateMove');
require('./assets/src/app/ai/fsm/state/StatePerformAction');
require('./assets/src/app/ai/goap/ActionStatus');
require('./assets/src/app/ai/goap/GoapAction');
require('./assets/src/app/ai/goap/GoapAgent');
require('./assets/src/app/ai/goap/GoapPlanner');
require('./assets/src/app/ai/goap/IGoap');
require('./assets/src/app/base/VGameObject');
require('./assets/src/app/data/GameDataManager');
require('./assets/src/app/data/LabourerType');
require('./assets/src/app/data/T_LabourerContainer');
require('./assets/src/app/data/ToolType');
require('./assets/src/app/gamedata/BackPackComponent');
require('./assets/src/app/gamedata/ChoppingBlockComponent');
require('./assets/src/app/gamedata/Environment');
require('./assets/src/app/gamedata/ForgeComponent');
require('./assets/src/app/gamedata/IronRockComponent');
require('./assets/src/app/gamedata/SupplyPileComponent');
require('./assets/src/app/gamedata/ToolComponent');
require('./assets/src/app/gamedata/TreeComponent');
require('./assets/src/app/gamedata/actions/ChopFirewoodAction');
require('./assets/src/app/gamedata/actions/ChopTreeAction');
require('./assets/src/app/gamedata/actions/DropOffFirewoodAction');
require('./assets/src/app/gamedata/actions/DropOffLogsAction');
require('./assets/src/app/gamedata/actions/DropOffOreAction');
require('./assets/src/app/gamedata/actions/DropOffToolsAction');
require('./assets/src/app/gamedata/actions/ForgeToolAction');
require('./assets/src/app/gamedata/actions/MineOreAction');
require('./assets/src/app/gamedata/actions/PickUpLogsAction');
require('./assets/src/app/gamedata/actions/PickUpOreAction');
require('./assets/src/app/gamedata/actions/PickUpToolAction');
require('./assets/src/app/gamedata/labourers/Blacksmith');
require('./assets/src/app/gamedata/labourers/Labourer');
require('./assets/src/app/gamedata/labourers/Logger');
require('./assets/src/app/gamedata/labourers/Miner');
require('./assets/src/app/gamedata/labourers/WoodCutter');
require('./assets/src/app/gamedata/labourers/vlabourers/VBlacksmith');
require('./assets/src/app/gamedata/labourers/vlabourers/VLabourer');
require('./assets/src/app/gamedata/labourers/vlabourers/VLogger');
require('./assets/src/app/gamedata/labourers/vlabourers/VMiner');
require('./assets/src/app/gamedata/labourers/vlabourers/VWoodCutter');
require('./assets/src/app/view/EnvironmentView');
require('./assets/src/utils/TimeUtil');

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
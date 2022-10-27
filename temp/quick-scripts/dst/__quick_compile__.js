
(function () {
var scripts = [{"deps":{"./assets/goap/Eating":5,"./assets/goap/Entity":9,"./assets/goap/Env":11,"./assets/goap/Equip":21,"./assets/goap/Fire":19,"./assets/goap/FireNpc":12,"./assets/goap/GotSleepAction":15,"./assets/goap/GotoEatAction":13,"./assets/goap/GotoEquipmentAction":10,"./assets/goap/GotoFireAction":17,"./assets/goap/GotoToiletAction":23,"./assets/goap/Sleep":29,"./assets/goap/StoreA":24,"./assets/goap/Toilet":27,"./assets/goap/ActionDataStatus":25,"./assets/goap/actions/ActionPayMoney":3,"./assets/goap/actions/ActionBuyShopItem":16,"./assets/goap/goaps/GoapOutFire2":68,"./assets/src/NewScript":18,"./assets/src/utils/TimeUtil":1,"./assets/goap/DataMemory":28,"./assets/src/app/data/LabourerType":62,"./assets/src/app/data/T_LabourerContainer":2,"./assets/src/app/data/ToolType":30,"./assets/src/app/data/GameDataManager":22,"./assets/src/app/gamedata/ChoppingBlockComponent":26,"./assets/src/app/gamedata/Environment":33,"./assets/src/app/gamedata/ForgeComponent":37,"./assets/src/app/gamedata/IronRockComponent":34,"./assets/src/app/gamedata/SupplyPileComponent":31,"./assets/src/app/gamedata/ToolComponent":38,"./assets/src/app/gamedata/TreeComponent":32,"./assets/src/app/gamedata/BackPackComponent":36,"./assets/src/app/gamedata/actions/ChopTreeAction":35,"./assets/src/app/gamedata/actions/DropOffFirewoodAction":4,"./assets/src/app/gamedata/actions/DropOffLogsAction":39,"./assets/src/app/gamedata/actions/DropOffOreAction":42,"./assets/src/app/gamedata/actions/DropOffToolsAction":41,"./assets/src/app/gamedata/actions/ForgeToolAction":48,"./assets/src/app/gamedata/actions/MineOreAction":44,"./assets/src/app/gamedata/actions/PickUpLogsAction":43,"./assets/src/app/gamedata/actions/PickUpOreAction":40,"./assets/src/app/gamedata/actions/PickUpToolAction":47,"./assets/src/app/gamedata/actions/ChopFirewoodAction":45,"./assets/src/app/gamedata/labourers/Labourer":55,"./assets/src/app/gamedata/labourers/Logger":46,"./assets/src/app/gamedata/labourers/Miner":49,"./assets/src/app/gamedata/labourers/WoodCutter":52,"./assets/src/app/gamedata/labourers/Blacksmith":54,"./assets/src/app/gamedata/labourers/vlabourers/VLabourer":50,"./assets/src/app/gamedata/labourers/vlabourers/VLogger":6,"./assets/src/app/gamedata/labourers/vlabourers/VMiner":51,"./assets/src/app/gamedata/labourers/vlabourers/VWoodCutter":58,"./assets/src/app/gamedata/labourers/vlabourers/VBlacksmith":57,"./assets/src/app/view/EnvironmentView":8,"./assets/src/app/ai/fsm/state/StateEnum":63,"./assets/src/app/ai/fsm/state/StateIdle":61,"./assets/src/app/ai/fsm/state/StateMove":65,"./assets/src/app/ai/fsm/state/StatePerformAction":64,"./assets/src/app/ai/fsm/state/StateBase":66,"./assets/src/app/ai/goap/GoapAction":7,"./assets/src/app/ai/goap/GoapAgent":59,"./assets/src/app/ai/goap/GoapPlanner":53,"./assets/src/app/ai/goap/IGoap":56,"./assets/src/app/ai/goap/ActionStatus":60,"./assets/src/app/ai/fsm/StateManager":14,"./assets/src/app/base/VGameObject":20},"path":"preview-scripts/__qc_index__.js"},{"deps":{},"path":"preview-scripts/assets/src/utils/TimeUtil.js"},{"deps":{"./LabourerType":62,"./ToolType":30},"path":"preview-scripts/assets/src/app/data/T_LabourerContainer.js"},{"deps":{"../../src/app/ai/goap/GoapAction":7,"../../src/app/gamedata/Environment":33,"../../src/utils/TimeUtil":1},"path":"preview-scripts/assets/goap/actions/ActionPayMoney.js"},{"deps":{"../../ai/goap/ActionStatus":60,"../../ai/goap/GoapAction":7,"../Environment":33},"path":"preview-scripts/assets/src/app/gamedata/actions/DropOffFirewoodAction.js"},{"deps":{"../src/app/base/VGameObject":20},"path":"preview-scripts/assets/goap/Eating.js"},{"deps":{"./VLabourer":50},"path":"preview-scripts/assets/src/app/gamedata/labourers/vlabourers/VLogger.js"},{"deps":{},"path":"preview-scripts/assets/src/app/ai/goap/GoapAction.js"},{"deps":{"../gamedata/BackPackComponent":36,"../gamedata/ChoppingBlockComponent":26,"../gamedata/Environment":33,"../gamedata/ForgeComponent":37,"../gamedata/IronRockComponent":34,"../gamedata/labourers/Blacksmith":54,"../gamedata/labourers/Logger":46,"../gamedata/labourers/Miner":49,"../gamedata/labourers/WoodCutter":52,"../gamedata/SupplyPileComponent":31,"../gamedata/TreeComponent":32},"path":"preview-scripts/assets/src/app/view/EnvironmentView.js"},{"deps":{"../src/app/ai/goap/GoapAgent":59},"path":"preview-scripts/assets/goap/Entity.js"},{"deps":{"../src/app/ai/goap/GoapAction":7,"../src/app/gamedata/Environment":33,"../src/utils/TimeUtil":1,"./ActionDataStatus":25},"path":"preview-scripts/assets/goap/GotoEquipmentAction.js"},{"deps":{"../src/app/gamedata/Environment":33,"./Eating":5,"./Equip":21,"./Fire":19,"./Sleep":29,"./StoreA":24,"./Toilet":27},"path":"preview-scripts/assets/goap/Env.js"},{"deps":{"./ActionDataStatus":25,"./GotoToiletAction":23,"./GotoEatAction":13,"./GotoEquipmentAction":10,"./GotoFireAction":17,"./GotSleepAction":15,"./goaps/GoapOutFire2":68,"../src/app/ai/goap/GoapAgent":59},"path":"preview-scripts/assets/goap/FireNpc.js"},{"deps":{"../src/app/ai/goap/GoapAction":7,"../src/app/gamedata/Environment":33,"../src/utils/TimeUtil":1,"./ActionDataStatus":25},"path":"preview-scripts/assets/goap/GotoEatAction.js"},{"deps":{},"path":"preview-scripts/assets/src/app/ai/fsm/StateManager.js"},{"deps":{"../src/app/ai/goap/GoapAction":7,"../src/app/gamedata/Environment":33,"../src/utils/TimeUtil":1,"./ActionDataStatus":25},"path":"preview-scripts/assets/goap/GotSleepAction.js"},{"deps":{"../../src/app/ai/goap/GoapAction":7,"../../src/app/gamedata/Environment":33,"../../src/utils/TimeUtil":1},"path":"preview-scripts/assets/goap/actions/ActionBuyShopItem.js"},{"deps":{"../src/app/ai/goap/GoapAction":7,"../src/app/gamedata/Environment":33,"../src/utils/TimeUtil":1,"./ActionDataStatus":25},"path":"preview-scripts/assets/goap/GotoFireAction.js"},{"deps":{},"path":"preview-scripts/assets/src/NewScript.js"},{"deps":{"../src/app/base/VGameObject":20},"path":"preview-scripts/assets/goap/Fire.js"},{"deps":{},"path":"preview-scripts/assets/src/app/base/VGameObject.js"},{"deps":{"../src/app/base/VGameObject":20},"path":"preview-scripts/assets/goap/Equip.js"},{"deps":{"./T_LabourerContainer":2},"path":"preview-scripts/assets/src/app/data/GameDataManager.js"},{"deps":{"../src/app/ai/goap/GoapAction":7,"../src/app/gamedata/Environment":33,"../src/utils/TimeUtil":1,"./ActionDataStatus":25},"path":"preview-scripts/assets/goap/GotoToiletAction.js"},{"deps":{"../src/app/base/VGameObject":20},"path":"preview-scripts/assets/goap/StoreA.js"},{"deps":{},"path":"preview-scripts/assets/goap/ActionDataStatus.js"},{"deps":{"../base/VGameObject":20},"path":"preview-scripts/assets/src/app/gamedata/ChoppingBlockComponent.js"},{"deps":{"../src/app/base/VGameObject":20},"path":"preview-scripts/assets/goap/Toilet.js"},{"deps":{},"path":"preview-scripts/assets/goap/DataMemory.js"},{"deps":{"../src/app/base/VGameObject":20},"path":"preview-scripts/assets/goap/Sleep.js"},{"deps":{},"path":"preview-scripts/assets/src/app/data/ToolType.js"},{"deps":{"../base/VGameObject":20},"path":"preview-scripts/assets/src/app/gamedata/SupplyPileComponent.js"},{"deps":{"../base/VGameObject":20},"path":"preview-scripts/assets/src/app/gamedata/TreeComponent.js"},{"deps":{},"path":"preview-scripts/assets/src/app/gamedata/Environment.js"},{"deps":{"../base/VGameObject":20},"path":"preview-scripts/assets/src/app/gamedata/IronRockComponent.js"},{"deps":{"../../../utils/TimeUtil":1,"../../ai/goap/ActionStatus":60,"../../ai/goap/GoapAction":7,"../Environment":33},"path":"preview-scripts/assets/src/app/gamedata/actions/ChopTreeAction.js"},{"deps":{},"path":"preview-scripts/assets/src/app/gamedata/BackPackComponent.js"},{"deps":{"../base/VGameObject":20},"path":"preview-scripts/assets/src/app/gamedata/ForgeComponent.js"},{"deps":{},"path":"preview-scripts/assets/src/app/gamedata/ToolComponent.js"},{"deps":{"../../ai/goap/ActionStatus":60,"../../ai/goap/GoapAction":7,"../Environment":33},"path":"preview-scripts/assets/src/app/gamedata/actions/DropOffLogsAction.js"},{"deps":{"../../ai/goap/ActionStatus":60,"../../ai/goap/GoapAction":7,"../Environment":33},"path":"preview-scripts/assets/src/app/gamedata/actions/PickUpOreAction.js"},{"deps":{"../../ai/goap/ActionStatus":60,"../../ai/goap/GoapAction":7,"../Environment":33},"path":"preview-scripts/assets/src/app/gamedata/actions/DropOffToolsAction.js"},{"deps":{"../../ai/goap/ActionStatus":60,"../../ai/goap/GoapAction":7,"../Environment":33},"path":"preview-scripts/assets/src/app/gamedata/actions/DropOffOreAction.js"},{"deps":{"../../ai/goap/ActionStatus":60,"../../ai/goap/GoapAction":7},"path":"preview-scripts/assets/src/app/gamedata/actions/PickUpLogsAction.js"},{"deps":{"../../../utils/TimeUtil":1,"../../ai/goap/ActionStatus":60,"../../ai/goap/GoapAction":7,"../Environment":33},"path":"preview-scripts/assets/src/app/gamedata/actions/MineOreAction.js"},{"deps":{"../../../utils/TimeUtil":1,"../../ai/goap/ActionStatus":60,"../../ai/goap/GoapAction":7,"../Environment":33},"path":"preview-scripts/assets/src/app/gamedata/actions/ChopFirewoodAction.js"},{"deps":{"../../ai/goap/ActionStatus":60,"../actions/ChopTreeAction":35,"../actions/DropOffLogsAction":39,"../actions/PickUpToolAction":47,"./Labourer":55},"path":"preview-scripts/assets/src/app/gamedata/labourers/Logger.js"},{"deps":{"../../ai/goap/ActionStatus":60,"../../ai/goap/GoapAction":7,"../Environment":33},"path":"preview-scripts/assets/src/app/gamedata/actions/PickUpToolAction.js"},{"deps":{"../../../utils/TimeUtil":1,"../../ai/goap/ActionStatus":60,"../../ai/goap/GoapAction":7,"../Environment":33},"path":"preview-scripts/assets/src/app/gamedata/actions/ForgeToolAction.js"},{"deps":{"../../ai/goap/ActionStatus":60,"../actions/DropOffOreAction":42,"../actions/MineOreAction":44,"../actions/PickUpToolAction":47,"./Labourer":55},"path":"preview-scripts/assets/src/app/gamedata/labourers/Miner.js"},{"deps":{"../../../base/VGameObject":20},"path":"preview-scripts/assets/src/app/gamedata/labourers/vlabourers/VLabourer.js"},{"deps":{"./VLabourer":50},"path":"preview-scripts/assets/src/app/gamedata/labourers/vlabourers/VMiner.js"},{"deps":{"../../ai/goap/ActionStatus":60,"../actions/ChopFirewoodAction":45,"../actions/DropOffFirewoodAction":4,"../actions/PickUpToolAction":47,"./Labourer":55},"path":"preview-scripts/assets/src/app/gamedata/labourers/WoodCutter.js"},{"deps":{},"path":"preview-scripts/assets/src/app/ai/goap/GoapPlanner.js"},{"deps":{"../../ai/goap/ActionStatus":60,"../actions/DropOffToolsAction":41,"../actions/ForgeToolAction":48,"../actions/PickUpOreAction":40,"./Labourer":55},"path":"preview-scripts/assets/src/app/gamedata/labourers/Blacksmith.js"},{"deps":{"../../ai/goap/ActionStatus":60,"../../ai/goap/GoapAgent":59,"../../data/GameDataManager":22,"../../data/LabourerType":62,"../ToolComponent":38},"path":"preview-scripts/assets/src/app/gamedata/labourers/Labourer.js"},{"deps":{},"path":"preview-scripts/assets/src/app/ai/goap/IGoap.js"},{"deps":{"./VLabourer":50},"path":"preview-scripts/assets/src/app/gamedata/labourers/vlabourers/VBlacksmith.js"},{"deps":{"./VLabourer":50},"path":"preview-scripts/assets/src/app/gamedata/labourers/vlabourers/VWoodCutter.js"},{"deps":{"../fsm/state/StateEnum":63,"../fsm/state/StateIdle":61,"../fsm/state/StateMove":65,"../fsm/state/StatePerformAction":64,"../fsm/StateManager":14,"./GoapPlanner":53},"path":"preview-scripts/assets/src/app/ai/goap/GoapAgent.js"},{"deps":{},"path":"preview-scripts/assets/src/app/ai/goap/ActionStatus.js"},{"deps":{"./StateBase":66,"./StateEnum":63},"path":"preview-scripts/assets/src/app/ai/fsm/state/StateIdle.js"},{"deps":{},"path":"preview-scripts/assets/src/app/data/LabourerType.js"},{"deps":{},"path":"preview-scripts/assets/src/app/ai/fsm/state/StateEnum.js"},{"deps":{"./StateBase":66,"./StateEnum":63},"path":"preview-scripts/assets/src/app/ai/fsm/state/StatePerformAction.js"},{"deps":{"./StateBase":66,"./StateEnum":63},"path":"preview-scripts/assets/src/app/ai/fsm/state/StateMove.js"},{"deps":{"../StateManager":14},"path":"preview-scripts/assets/src/app/ai/fsm/state/StateBase.js"},{"deps":{"../ActionDataStatus":25},"path":"preview-scripts/assets/goap/goaps/GoApOutFire.js"},{"deps":{"../ActionDataStatus":25,"../DataMemory":28},"path":"preview-scripts/assets/goap/goaps/GoapOutFire2.js"}];
var entries = ["preview-scripts/__qc_index__.js"];
var bundleScript = 'preview-scripts/__qc_bundle__.js';

/**
 * Notice: This file can not use ES6 (for IE 11)
 */
var modules = {};
var name2path = {};

// Will generated by module.js plugin
// var scripts = ${scripts};
// var entries = ${entries};
// var bundleScript = ${bundleScript};

if (typeof global === 'undefined') {
    window.global = window;
}

var isJSB = typeof jsb !== 'undefined';

function getXMLHttpRequest () {
    return window.XMLHttpRequest ? new window.XMLHttpRequest() : new ActiveXObject('MSXML2.XMLHTTP');
}

function downloadText(url, callback) {
    if (isJSB) {
        var result = jsb.fileUtils.getStringFromFile(url);
        callback(null, result);
        return;
    }

    var xhr = getXMLHttpRequest(),
        errInfo = 'Load text file failed: ' + url;
    xhr.open('GET', url, true);
    if (xhr.overrideMimeType) xhr.overrideMimeType('text\/plain; charset=utf-8');
    xhr.onload = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200 || xhr.status === 0) {
                callback(null, xhr.responseText);
            }
            else {
                callback({status:xhr.status, errorMessage:errInfo + ', status: ' + xhr.status});
            }
        }
        else {
            callback({status:xhr.status, errorMessage:errInfo + '(wrong readyState)'});
        }
    };
    xhr.onerror = function(){
        callback({status:xhr.status, errorMessage:errInfo + '(error)'});
    };
    xhr.ontimeout = function(){
        callback({status:xhr.status, errorMessage:errInfo + '(time out)'});
    };
    xhr.send(null);
};

function loadScript (src, cb) {
    if (typeof require !== 'undefined') {
        require(src);
        return cb();
    }

    // var timer = 'load ' + src;
    // console.time(timer);

    var scriptElement = document.createElement('script');

    function done() {
        // console.timeEnd(timer);
        // deallocation immediate whatever
        scriptElement.remove();
    }

    scriptElement.onload = function () {
        done();
        cb();
    };
    scriptElement.onerror = function () {
        done();
        var error = 'Failed to load ' + src;
        console.error(error);
        cb(new Error(error));
    };
    scriptElement.setAttribute('type','text/javascript');
    scriptElement.setAttribute('charset', 'utf-8');
    scriptElement.setAttribute('src', src);

    document.head.appendChild(scriptElement);
}

function loadScripts (srcs, cb) {
    var n = srcs.length;

    srcs.forEach(function (src) {
        loadScript(src, function () {
            n--;
            if (n === 0) {
                cb();
            }
        });
    })
}

function formatPath (path) {
    let destPath = window.__quick_compile_project__.destPath;
    if (destPath) {
        let prefix = 'preview-scripts';
        if (destPath[destPath.length - 1] === '/') {
            prefix += '/';
        }
        path = path.replace(prefix, destPath);
    }
    return path;
}

window.__quick_compile_project__ = {
    destPath: '',

    registerModule: function (path, module) {
        path = formatPath(path);
        modules[path].module = module;
    },

    registerModuleFunc: function (path, func) {
        path = formatPath(path);
        modules[path].func = func;

        var sections = path.split('/');
        var name = sections[sections.length - 1];
        name = name.replace(/\.(?:js|ts|json)$/i, '');
        name2path[name] = path;
    },

    require: function (request, path) {
        var m, requestScript;

        path = formatPath(path);
        if (path) {
            m = modules[path];
            if (!m) {
                console.warn('Can not find module for path : ' + path);
                return null;
            }
        }

        if (m) {
            let depIndex = m.deps[request];
            // dependence script was excluded
            if (depIndex === -1) {
                return null;
            }
            else {
                requestScript = scripts[ m.deps[request] ];
            }
        }
        
        let requestPath = '';
        if (!requestScript) {
            // search from name2path when request is a dynamic module name
            if (/^[\w- .]*$/.test(request)) {
                requestPath = name2path[request];
            }

            if (!requestPath) {
                if (CC_JSB) {
                    return require(request);
                }
                else {
                    console.warn('Can not find deps [' + request + '] for path : ' + path);
                    return null;
                }
            }
        }
        else {
            requestPath = formatPath(requestScript.path);
        }

        let requestModule = modules[requestPath];
        if (!requestModule) {
            console.warn('Can not find request module for path : ' + requestPath);
            return null;
        }

        if (!requestModule.module && requestModule.func) {
            requestModule.func();
        }

        if (!requestModule.module) {
            console.warn('Can not find requestModule.module for path : ' + path);
            return null;
        }

        return requestModule.module.exports;
    },

    run: function () {
        entries.forEach(function (entry) {
            entry = formatPath(entry);
            var module = modules[entry];
            if (!module.module) {
                module.func();
            }
        });
    },

    load: function (cb) {
        var self = this;

        var srcs = scripts.map(function (script) {
            var path = formatPath(script.path);
            modules[path] = script;

            if (script.mtime) {
                path += ("?mtime=" + script.mtime);
            }
            return path;
        });

        console.time && console.time('load __quick_compile_project__');
        // jsb can not analysis sourcemap, so keep separate files.
        if (bundleScript && !isJSB) {
            downloadText(formatPath(bundleScript), function (err, bundleSource) {
                console.timeEnd && console.timeEnd('load __quick_compile_project__');
                if (err) {
                    console.error(err);
                    return;
                }

                let evalTime = 'eval __quick_compile_project__ : ' + srcs.length + ' files';
                console.time && console.time(evalTime);
                var sources = bundleSource.split('\n//------QC-SOURCE-SPLIT------\n');
                for (var i = 0; i < sources.length; i++) {
                    if (sources[i]) {
                        window.eval(sources[i]);
                        // not sure why new Function cannot set breakpoints precisely
                        // new Function(sources[i])()
                    }
                }
                self.run();
                console.timeEnd && console.timeEnd(evalTime);
                cb();
            })
        }
        else {
            loadScripts(srcs, function () {
                self.run();
                console.timeEnd && console.timeEnd('load __quick_compile_project__');
                cb();
            });
        }
    }
};

// Polyfill for IE 11
if (!('remove' in Element.prototype)) {
    Element.prototype.remove = function () {
        if (this.parentNode) {
            this.parentNode.removeChild(this);
        }
    };
}
})();
    
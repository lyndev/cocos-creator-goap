
(function () {
var scripts = [{"deps":{"./assets/goap/Eating":1,"./assets/goap/Entity":8,"./assets/goap/Env":12,"./assets/goap/Equip":16,"./assets/goap/Fire":15,"./assets/goap/FireNpc":11,"./assets/goap/GotSleepAction":63,"./assets/goap/GotoEatAction":14,"./assets/goap/GotoEquipmentAction":18,"./assets/goap/GotoFireAction":26,"./assets/goap/GotoToiletAction":17,"./assets/goap/Sleep":62,"./assets/goap/Toilet":20,"./assets/goap/ActionDataStatus":24,"./assets/src/NewScript":13,"./assets/src/utils/TimeUtil":3,"./assets/goap/DataMemory":23,"./assets/src/app/data/LabourerType":2,"./assets/src/app/data/T_LabourerContainer":25,"./assets/src/app/data/ToolType":21,"./assets/src/app/data/GameDataManager":19,"./assets/src/app/gamedata/ChoppingBlockComponent":22,"./assets/src/app/gamedata/Environment":27,"./assets/src/app/gamedata/ForgeComponent":30,"./assets/src/app/gamedata/IronRockComponent":29,"./assets/src/app/gamedata/SupplyPileComponent":28,"./assets/src/app/gamedata/ToolComponent":33,"./assets/src/app/gamedata/TreeComponent":31,"./assets/src/app/gamedata/BackPackComponent":36,"./assets/src/app/gamedata/actions/ChopTreeAction":34,"./assets/src/app/gamedata/actions/DropOffFirewoodAction":32,"./assets/src/app/gamedata/actions/DropOffLogsAction":4,"./assets/src/app/gamedata/actions/DropOffOreAction":35,"./assets/src/app/gamedata/actions/DropOffToolsAction":39,"./assets/src/app/gamedata/actions/ForgeToolAction":37,"./assets/src/app/gamedata/actions/MineOreAction":41,"./assets/src/app/gamedata/actions/PickUpLogsAction":46,"./assets/src/app/gamedata/actions/PickUpOreAction":42,"./assets/src/app/gamedata/actions/PickUpToolAction":38,"./assets/src/app/gamedata/actions/ChopFirewoodAction":44,"./assets/src/app/gamedata/labourers/Labourer":45,"./assets/src/app/gamedata/labourers/Logger":40,"./assets/src/app/gamedata/labourers/Miner":43,"./assets/src/app/gamedata/labourers/WoodCutter":48,"./assets/src/app/gamedata/labourers/Blacksmith":52,"./assets/src/app/gamedata/labourers/vlabourers/VLabourer":5,"./assets/src/app/gamedata/labourers/vlabourers/VLogger":47,"./assets/src/app/gamedata/labourers/vlabourers/VMiner":53,"./assets/src/app/gamedata/labourers/vlabourers/VWoodCutter":49,"./assets/src/app/gamedata/labourers/vlabourers/VBlacksmith":54,"./assets/src/app/view/EnvironmentView":7,"./assets/src/app/base/VGameObject":10,"./assets/src/app/ai/fsm/state/StateEnum":57,"./assets/src/app/ai/fsm/state/StateIdle":58,"./assets/src/app/ai/fsm/state/StateMove":59,"./assets/src/app/ai/fsm/state/StatePerformAction":60,"./assets/src/app/ai/fsm/state/StateBase":61,"./assets/src/app/ai/goap/GoapAction":6,"./assets/src/app/ai/goap/GoapAgent":50,"./assets/src/app/ai/goap/GoapPlanner":51,"./assets/src/app/ai/goap/IGoap":55,"./assets/src/app/ai/goap/ActionStatus":56,"./assets/src/app/ai/fsm/StateManager":9},"path":"preview-scripts/__qc_index__.js"},{"deps":{"../src/app/base/VGameObject":10},"path":"preview-scripts/assets/goap/Eating.js"},{"deps":{},"path":"preview-scripts/assets/src/app/data/LabourerType.js"},{"deps":{},"path":"preview-scripts/assets/src/utils/TimeUtil.js"},{"deps":{"../../ai/goap/ActionStatus":56,"../../ai/goap/GoapAction":6,"../Environment":27},"path":"preview-scripts/assets/src/app/gamedata/actions/DropOffLogsAction.js"},{"deps":{"../../../base/VGameObject":10},"path":"preview-scripts/assets/src/app/gamedata/labourers/vlabourers/VLabourer.js"},{"deps":{},"path":"preview-scripts/assets/src/app/ai/goap/GoapAction.js"},{"deps":{"../gamedata/BackPackComponent":36,"../gamedata/ChoppingBlockComponent":22,"../gamedata/Environment":27,"../gamedata/ForgeComponent":30,"../gamedata/IronRockComponent":29,"../gamedata/labourers/Blacksmith":52,"../gamedata/labourers/Logger":40,"../gamedata/labourers/Miner":43,"../gamedata/labourers/WoodCutter":48,"../gamedata/SupplyPileComponent":28,"../gamedata/TreeComponent":31},"path":"preview-scripts/assets/src/app/view/EnvironmentView.js"},{"deps":{"./ActionDataStatus":24,"./DataMemory":23,"../src/app/ai/goap/GoapAgent":50},"path":"preview-scripts/assets/goap/Entity.js"},{"deps":{},"path":"preview-scripts/assets/src/app/ai/fsm/StateManager.js"},{"deps":{},"path":"preview-scripts/assets/src/app/base/VGameObject.js"},{"deps":{"./ActionDataStatus":24,"./Entity":8,"./GotoToiletAction":17,"./GotoEatAction":14,"./GotoEquipmentAction":18,"./GotoFireAction":26,"./GotSleepAction":63},"path":"preview-scripts/assets/goap/FireNpc.js"},{"deps":{"./Eating":1,"./Equip":16,"./Fire":15,"./Sleep":62,"./Toilet":20,"../src/app/gamedata/Environment":27},"path":"preview-scripts/assets/goap/Env.js"},{"deps":{},"path":"preview-scripts/assets/src/NewScript.js"},{"deps":{"./ActionDataStatus":24,"../src/app/ai/goap/GoapAction":6,"../src/app/gamedata/Environment":27,"../src/utils/TimeUtil":3},"path":"preview-scripts/assets/goap/GotoEatAction.js"},{"deps":{"../src/app/base/VGameObject":10},"path":"preview-scripts/assets/goap/Fire.js"},{"deps":{"../src/app/base/VGameObject":10},"path":"preview-scripts/assets/goap/Equip.js"},{"deps":{"./ActionDataStatus":24,"../src/app/ai/goap/GoapAction":6,"../src/app/gamedata/Environment":27,"../src/utils/TimeUtil":3},"path":"preview-scripts/assets/goap/GotoToiletAction.js"},{"deps":{"./ActionDataStatus":24,"../src/app/ai/goap/GoapAction":6,"../src/app/gamedata/Environment":27,"../src/utils/TimeUtil":3},"path":"preview-scripts/assets/goap/GotoEquipmentAction.js"},{"deps":{"./T_LabourerContainer":25},"path":"preview-scripts/assets/src/app/data/GameDataManager.js"},{"deps":{"../src/app/base/VGameObject":10},"path":"preview-scripts/assets/goap/Toilet.js"},{"deps":{},"path":"preview-scripts/assets/src/app/data/ToolType.js"},{"deps":{"../base/VGameObject":10},"path":"preview-scripts/assets/src/app/gamedata/ChoppingBlockComponent.js"},{"deps":{},"path":"preview-scripts/assets/goap/DataMemory.js"},{"deps":{},"path":"preview-scripts/assets/goap/ActionDataStatus.js"},{"deps":{"./LabourerType":2,"./ToolType":21},"path":"preview-scripts/assets/src/app/data/T_LabourerContainer.js"},{"deps":{"./ActionDataStatus":24,"../src/app/ai/goap/GoapAction":6,"../src/app/gamedata/Environment":27,"../src/utils/TimeUtil":3},"path":"preview-scripts/assets/goap/GotoFireAction.js"},{"deps":{},"path":"preview-scripts/assets/src/app/gamedata/Environment.js"},{"deps":{"../base/VGameObject":10},"path":"preview-scripts/assets/src/app/gamedata/SupplyPileComponent.js"},{"deps":{"../base/VGameObject":10},"path":"preview-scripts/assets/src/app/gamedata/IronRockComponent.js"},{"deps":{"../base/VGameObject":10},"path":"preview-scripts/assets/src/app/gamedata/ForgeComponent.js"},{"deps":{"../base/VGameObject":10},"path":"preview-scripts/assets/src/app/gamedata/TreeComponent.js"},{"deps":{"../../ai/goap/ActionStatus":56,"../../ai/goap/GoapAction":6,"../Environment":27},"path":"preview-scripts/assets/src/app/gamedata/actions/DropOffFirewoodAction.js"},{"deps":{},"path":"preview-scripts/assets/src/app/gamedata/ToolComponent.js"},{"deps":{"../../../utils/TimeUtil":3,"../../ai/goap/ActionStatus":56,"../../ai/goap/GoapAction":6,"../Environment":27},"path":"preview-scripts/assets/src/app/gamedata/actions/ChopTreeAction.js"},{"deps":{"../../ai/goap/ActionStatus":56,"../../ai/goap/GoapAction":6,"../Environment":27},"path":"preview-scripts/assets/src/app/gamedata/actions/DropOffOreAction.js"},{"deps":{},"path":"preview-scripts/assets/src/app/gamedata/BackPackComponent.js"},{"deps":{"../../../utils/TimeUtil":3,"../../ai/goap/ActionStatus":56,"../../ai/goap/GoapAction":6,"../Environment":27},"path":"preview-scripts/assets/src/app/gamedata/actions/ForgeToolAction.js"},{"deps":{"../../ai/goap/ActionStatus":56,"../../ai/goap/GoapAction":6,"../Environment":27},"path":"preview-scripts/assets/src/app/gamedata/actions/PickUpToolAction.js"},{"deps":{"../../ai/goap/ActionStatus":56,"../../ai/goap/GoapAction":6,"../Environment":27},"path":"preview-scripts/assets/src/app/gamedata/actions/DropOffToolsAction.js"},{"deps":{"../../ai/goap/ActionStatus":56,"../actions/ChopTreeAction":34,"../actions/DropOffLogsAction":4,"../actions/PickUpToolAction":38,"./Labourer":45},"path":"preview-scripts/assets/src/app/gamedata/labourers/Logger.js"},{"deps":{"../../../utils/TimeUtil":3,"../../ai/goap/ActionStatus":56,"../../ai/goap/GoapAction":6,"../Environment":27},"path":"preview-scripts/assets/src/app/gamedata/actions/MineOreAction.js"},{"deps":{"../../ai/goap/ActionStatus":56,"../../ai/goap/GoapAction":6,"../Environment":27},"path":"preview-scripts/assets/src/app/gamedata/actions/PickUpOreAction.js"},{"deps":{"../../ai/goap/ActionStatus":56,"../actions/DropOffOreAction":35,"../actions/MineOreAction":41,"../actions/PickUpToolAction":38,"./Labourer":45},"path":"preview-scripts/assets/src/app/gamedata/labourers/Miner.js"},{"deps":{"../../../utils/TimeUtil":3,"../../ai/goap/ActionStatus":56,"../../ai/goap/GoapAction":6,"../Environment":27},"path":"preview-scripts/assets/src/app/gamedata/actions/ChopFirewoodAction.js"},{"deps":{"../../ai/goap/ActionStatus":56,"../../ai/goap/GoapAgent":50,"../../base/VGameObject":10,"../../data/GameDataManager":19,"../../data/LabourerType":2,"../ToolComponent":33},"path":"preview-scripts/assets/src/app/gamedata/labourers/Labourer.js"},{"deps":{"../../ai/goap/ActionStatus":56,"../../ai/goap/GoapAction":6},"path":"preview-scripts/assets/src/app/gamedata/actions/PickUpLogsAction.js"},{"deps":{"./VLabourer":5},"path":"preview-scripts/assets/src/app/gamedata/labourers/vlabourers/VLogger.js"},{"deps":{"../../ai/goap/ActionStatus":56,"../actions/ChopFirewoodAction":44,"../actions/DropOffFirewoodAction":32,"../actions/PickUpToolAction":38,"./Labourer":45},"path":"preview-scripts/assets/src/app/gamedata/labourers/WoodCutter.js"},{"deps":{"./VLabourer":5},"path":"preview-scripts/assets/src/app/gamedata/labourers/vlabourers/VWoodCutter.js"},{"deps":{"../fsm/state/StateEnum":57,"../fsm/state/StateIdle":58,"../fsm/state/StateMove":59,"../fsm/state/StatePerformAction":60,"../fsm/StateManager":9,"./GoapPlanner":51},"path":"preview-scripts/assets/src/app/ai/goap/GoapAgent.js"},{"deps":{},"path":"preview-scripts/assets/src/app/ai/goap/GoapPlanner.js"},{"deps":{"../../ai/goap/ActionStatus":56,"../actions/DropOffToolsAction":39,"../actions/ForgeToolAction":37,"../actions/PickUpOreAction":42,"./Labourer":45},"path":"preview-scripts/assets/src/app/gamedata/labourers/Blacksmith.js"},{"deps":{"./VLabourer":5},"path":"preview-scripts/assets/src/app/gamedata/labourers/vlabourers/VMiner.js"},{"deps":{"./VLabourer":5},"path":"preview-scripts/assets/src/app/gamedata/labourers/vlabourers/VBlacksmith.js"},{"deps":{},"path":"preview-scripts/assets/src/app/ai/goap/IGoap.js"},{"deps":{},"path":"preview-scripts/assets/src/app/ai/goap/ActionStatus.js"},{"deps":{},"path":"preview-scripts/assets/src/app/ai/fsm/state/StateEnum.js"},{"deps":{"./StateBase":61,"./StateEnum":57},"path":"preview-scripts/assets/src/app/ai/fsm/state/StateIdle.js"},{"deps":{"./StateBase":61,"./StateEnum":57},"path":"preview-scripts/assets/src/app/ai/fsm/state/StateMove.js"},{"deps":{"./StateBase":61,"./StateEnum":57},"path":"preview-scripts/assets/src/app/ai/fsm/state/StatePerformAction.js"},{"deps":{"../StateManager":9},"path":"preview-scripts/assets/src/app/ai/fsm/state/StateBase.js"},{"deps":{"../src/app/base/VGameObject":10},"path":"preview-scripts/assets/goap/Sleep.js"},{"deps":{"./ActionDataStatus":24,"../src/app/gamedata/Environment":27,"../src/app/ai/goap/GoapAction":6,"../src/utils/TimeUtil":3},"path":"preview-scripts/assets/goap/GotSleepAction.js"}];
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
    
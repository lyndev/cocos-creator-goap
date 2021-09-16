
(function () {
var scripts = [{"deps":{"./assets/goap/Eating":57,"./assets/goap/Entity":49,"./assets/goap/Env":55,"./assets/goap/Equip":56,"./assets/goap/Fire":61,"./assets/goap/GotoEatAction":58,"./assets/goap/FireNpc":52,"./assets/goap/GotoEquipmentAction":60,"./assets/goap/GotoFireAction":59,"./assets/goap/Toilet":53,"./assets/goap/GotoToiletAction":54,"./assets/goap/ActionDataStatus":50,"./assets/src/NewScript":1,"./assets/src/utils/TimeUtil":6,"./assets/goap/DataMemory":51,"./assets/src/app/data/T_LabourerContainer":41,"./assets/src/app/data/LabourerType":4,"./assets/src/app/data/ToolType":13,"./assets/src/app/data/GameDataManager":10,"./assets/src/app/gamedata/ChoppingBlockComponent":11,"./assets/src/app/gamedata/ForgeComponent":16,"./assets/src/app/gamedata/Environment":12,"./assets/src/app/gamedata/IronRockComponent":18,"./assets/src/app/gamedata/SupplyPileComponent":14,"./assets/src/app/gamedata/ToolComponent":15,"./assets/src/app/gamedata/TreeComponent":21,"./assets/src/app/gamedata/BackPackComponent":17,"./assets/src/app/gamedata/actions/ChopTreeAction":19,"./assets/src/app/gamedata/actions/DropOffLogsAction":5,"./assets/src/app/gamedata/actions/DropOffFirewoodAction":22,"./assets/src/app/gamedata/actions/DropOffToolsAction":24,"./assets/src/app/gamedata/actions/DropOffOreAction":23,"./assets/src/app/gamedata/actions/ForgeToolAction":20,"./assets/src/app/gamedata/actions/MineOreAction":26,"./assets/src/app/gamedata/actions/PickUpLogsAction":31,"./assets/src/app/gamedata/actions/PickUpOreAction":25,"./assets/src/app/gamedata/actions/PickUpToolAction":28,"./assets/src/app/gamedata/actions/ChopFirewoodAction":27,"./assets/src/app/gamedata/labourers/Logger":30,"./assets/src/app/gamedata/labourers/Labourer":43,"./assets/src/app/gamedata/labourers/Miner":29,"./assets/src/app/gamedata/labourers/WoodCutter":42,"./assets/src/app/gamedata/labourers/Blacksmith":32,"./assets/src/app/gamedata/labourers/vlabourers/VLabourer":2,"./assets/src/app/gamedata/labourers/vlabourers/VWoodCutter":33,"./assets/src/app/gamedata/labourers/vlabourers/VMiner":34,"./assets/src/app/gamedata/labourers/vlabourers/VLogger":40,"./assets/src/app/gamedata/labourers/vlabourers/VBlacksmith":36,"./assets/src/app/view/EnvironmentView":7,"./assets/src/app/ai/fsm/state/StateEnum":3,"./assets/src/app/ai/fsm/state/StateMove":35,"./assets/src/app/ai/fsm/state/StatePerformAction":38,"./assets/src/app/ai/fsm/state/StateIdle":37,"./assets/src/app/ai/fsm/state/StateBase":39,"./assets/src/app/ai/goap/GoapPlanner":47,"./assets/src/app/ai/goap/GoapAgent":48,"./assets/src/app/ai/goap/GoapAction":8,"./assets/src/app/ai/goap/IGoap":45,"./assets/src/app/ai/goap/ActionStatus":46,"./assets/src/app/ai/fsm/StateManager":44,"./assets/src/app/base/VGameObject":9},"path":"preview-scripts/__qc_index__.js"},{"deps":{},"path":"preview-scripts/assets/src/NewScript.js"},{"deps":{"../../../base/VGameObject":9},"path":"preview-scripts/assets/src/app/gamedata/labourers/vlabourers/VLabourer.js"},{"deps":{},"path":"preview-scripts/assets/src/app/ai/fsm/state/StateEnum.js"},{"deps":{},"path":"preview-scripts/assets/src/app/data/LabourerType.js"},{"deps":{"../../ai/goap/ActionStatus":46,"../../ai/goap/GoapAction":8,"../Environment":12},"path":"preview-scripts/assets/src/app/gamedata/actions/DropOffLogsAction.js"},{"deps":{},"path":"preview-scripts/assets/src/utils/TimeUtil.js"},{"deps":{"../gamedata/BackPackComponent":17,"../gamedata/ChoppingBlockComponent":11,"../gamedata/Environment":12,"../gamedata/ForgeComponent":16,"../gamedata/IronRockComponent":18,"../gamedata/labourers/Blacksmith":32,"../gamedata/labourers/Logger":30,"../gamedata/labourers/Miner":29,"../gamedata/labourers/WoodCutter":42,"../gamedata/SupplyPileComponent":14,"../gamedata/TreeComponent":21},"path":"preview-scripts/assets/src/app/view/EnvironmentView.js"},{"deps":{},"path":"preview-scripts/assets/src/app/ai/goap/GoapAction.js"},{"deps":{},"path":"preview-scripts/assets/src/app/base/VGameObject.js"},{"deps":{"./T_LabourerContainer":41},"path":"preview-scripts/assets/src/app/data/GameDataManager.js"},{"deps":{"../base/VGameObject":9},"path":"preview-scripts/assets/src/app/gamedata/ChoppingBlockComponent.js"},{"deps":{},"path":"preview-scripts/assets/src/app/gamedata/Environment.js"},{"deps":{},"path":"preview-scripts/assets/src/app/data/ToolType.js"},{"deps":{"../base/VGameObject":9},"path":"preview-scripts/assets/src/app/gamedata/SupplyPileComponent.js"},{"deps":{},"path":"preview-scripts/assets/src/app/gamedata/ToolComponent.js"},{"deps":{"../base/VGameObject":9},"path":"preview-scripts/assets/src/app/gamedata/ForgeComponent.js"},{"deps":{},"path":"preview-scripts/assets/src/app/gamedata/BackPackComponent.js"},{"deps":{"../base/VGameObject":9},"path":"preview-scripts/assets/src/app/gamedata/IronRockComponent.js"},{"deps":{"../../../utils/TimeUtil":6,"../../ai/goap/ActionStatus":46,"../../ai/goap/GoapAction":8,"../Environment":12},"path":"preview-scripts/assets/src/app/gamedata/actions/ChopTreeAction.js"},{"deps":{"../../../utils/TimeUtil":6,"../../ai/goap/ActionStatus":46,"../../ai/goap/GoapAction":8,"../Environment":12},"path":"preview-scripts/assets/src/app/gamedata/actions/ForgeToolAction.js"},{"deps":{"../base/VGameObject":9},"path":"preview-scripts/assets/src/app/gamedata/TreeComponent.js"},{"deps":{"../../ai/goap/ActionStatus":46,"../../ai/goap/GoapAction":8,"../Environment":12},"path":"preview-scripts/assets/src/app/gamedata/actions/DropOffFirewoodAction.js"},{"deps":{"../../ai/goap/ActionStatus":46,"../../ai/goap/GoapAction":8,"../Environment":12},"path":"preview-scripts/assets/src/app/gamedata/actions/DropOffOreAction.js"},{"deps":{"../../ai/goap/ActionStatus":46,"../../ai/goap/GoapAction":8,"../Environment":12},"path":"preview-scripts/assets/src/app/gamedata/actions/DropOffToolsAction.js"},{"deps":{"../../ai/goap/ActionStatus":46,"../../ai/goap/GoapAction":8,"../Environment":12},"path":"preview-scripts/assets/src/app/gamedata/actions/PickUpOreAction.js"},{"deps":{"../../../utils/TimeUtil":6,"../../ai/goap/ActionStatus":46,"../../ai/goap/GoapAction":8,"../Environment":12},"path":"preview-scripts/assets/src/app/gamedata/actions/MineOreAction.js"},{"deps":{"../../../utils/TimeUtil":6,"../../ai/goap/ActionStatus":46,"../Environment":12,"../../ai/goap/GoapAction":8},"path":"preview-scripts/assets/src/app/gamedata/actions/ChopFirewoodAction.js"},{"deps":{"../../ai/goap/ActionStatus":46,"../../ai/goap/GoapAction":8,"../Environment":12},"path":"preview-scripts/assets/src/app/gamedata/actions/PickUpToolAction.js"},{"deps":{"./Labourer":43,"../actions/MineOreAction":26,"../actions/PickUpToolAction":28,"../actions/DropOffOreAction":23,"../../ai/goap/ActionStatus":46},"path":"preview-scripts/assets/src/app/gamedata/labourers/Miner.js"},{"deps":{"../../ai/goap/ActionStatus":46,"../actions/ChopTreeAction":19,"../actions/DropOffLogsAction":5,"../actions/PickUpToolAction":28,"./Labourer":43},"path":"preview-scripts/assets/src/app/gamedata/labourers/Logger.js"},{"deps":{"../../ai/goap/ActionStatus":46,"../../ai/goap/GoapAction":8},"path":"preview-scripts/assets/src/app/gamedata/actions/PickUpLogsAction.js"},{"deps":{"../../ai/goap/ActionStatus":46,"../actions/DropOffToolsAction":24,"../actions/ForgeToolAction":20,"../actions/PickUpOreAction":25,"./Labourer":43},"path":"preview-scripts/assets/src/app/gamedata/labourers/Blacksmith.js"},{"deps":{"./VLabourer":2},"path":"preview-scripts/assets/src/app/gamedata/labourers/vlabourers/VWoodCutter.js"},{"deps":{"./VLabourer":2},"path":"preview-scripts/assets/src/app/gamedata/labourers/vlabourers/VMiner.js"},{"deps":{"./StateBase":39,"./StateEnum":3},"path":"preview-scripts/assets/src/app/ai/fsm/state/StateMove.js"},{"deps":{"./VLabourer":2},"path":"preview-scripts/assets/src/app/gamedata/labourers/vlabourers/VBlacksmith.js"},{"deps":{"./StateBase":39,"./StateEnum":3},"path":"preview-scripts/assets/src/app/ai/fsm/state/StateIdle.js"},{"deps":{"./StateBase":39,"./StateEnum":3},"path":"preview-scripts/assets/src/app/ai/fsm/state/StatePerformAction.js"},{"deps":{"../StateManager":44},"path":"preview-scripts/assets/src/app/ai/fsm/state/StateBase.js"},{"deps":{"./VLabourer":2},"path":"preview-scripts/assets/src/app/gamedata/labourers/vlabourers/VLogger.js"},{"deps":{"./LabourerType":4,"./ToolType":13},"path":"preview-scripts/assets/src/app/data/T_LabourerContainer.js"},{"deps":{"../../ai/goap/ActionStatus":46,"../actions/ChopFirewoodAction":27,"../actions/DropOffFirewoodAction":22,"../actions/PickUpToolAction":28,"./Labourer":43},"path":"preview-scripts/assets/src/app/gamedata/labourers/WoodCutter.js"},{"deps":{"../ToolComponent":15,"../../base/VGameObject":9,"../../data/GameDataManager":10,"../../data/LabourerType":4,"../../ai/goap/ActionStatus":46,"../../ai/goap/GoapAgent":48},"path":"preview-scripts/assets/src/app/gamedata/labourers/Labourer.js"},{"deps":{},"path":"preview-scripts/assets/src/app/ai/fsm/StateManager.js"},{"deps":{},"path":"preview-scripts/assets/src/app/ai/goap/IGoap.js"},{"deps":{},"path":"preview-scripts/assets/src/app/ai/goap/ActionStatus.js"},{"deps":{},"path":"preview-scripts/assets/src/app/ai/goap/GoapPlanner.js"},{"deps":{"../fsm/state/StateIdle":37,"../fsm/state/StateEnum":3,"../fsm/state/StateMove":35,"../fsm/state/StatePerformAction":38,"../fsm/StateManager":44,"./GoapPlanner":47},"path":"preview-scripts/assets/src/app/ai/goap/GoapAgent.js"},{"deps":{"./ActionDataStatus":50,"./DataMemory":51,"../src/app/ai/goap/GoapAgent":48},"path":"preview-scripts/assets/goap/Entity.js"},{"deps":{},"path":"preview-scripts/assets/goap/ActionDataStatus.js"},{"deps":{},"path":"preview-scripts/assets/goap/DataMemory.js"},{"deps":{"./GotoToiletAction":54,"./Entity":49,"./ActionDataStatus":50,"./GotoEatAction":58,"./GotoEquipmentAction":60,"./GotoFireAction":59},"path":"preview-scripts/assets/goap/FireNpc.js"},{"deps":{"../src/app/base/VGameObject":9},"path":"preview-scripts/assets/goap/Toilet.js"},{"deps":{"./ActionDataStatus":50,"../src/utils/TimeUtil":6,"../src/app/ai/goap/GoapAction":8,"../src/app/gamedata/Environment":12},"path":"preview-scripts/assets/goap/GotoToiletAction.js"},{"deps":{"./Eating":57,"./Equip":56,"./Fire":61,"./Toilet":53,"../src/app/gamedata/Environment":12},"path":"preview-scripts/assets/goap/Env.js"},{"deps":{"../src/app/base/VGameObject":9},"path":"preview-scripts/assets/goap/Equip.js"},{"deps":{"../src/app/base/VGameObject":9},"path":"preview-scripts/assets/goap/Eating.js"},{"deps":{"./ActionDataStatus":50,"../src/app/ai/goap/GoapAction":8,"../src/app/gamedata/Environment":12,"../src/utils/TimeUtil":6},"path":"preview-scripts/assets/goap/GotoEatAction.js"},{"deps":{"./ActionDataStatus":50,"../src/utils/TimeUtil":6,"../src/app/ai/goap/GoapAction":8,"../src/app/gamedata/Environment":12},"path":"preview-scripts/assets/goap/GotoFireAction.js"},{"deps":{"./ActionDataStatus":50,"../src/app/gamedata/Environment":12,"../src/utils/TimeUtil":6,"../src/app/ai/goap/GoapAction":8},"path":"preview-scripts/assets/goap/GotoEquipmentAction.js"},{"deps":{"../src/app/base/VGameObject":9},"path":"preview-scripts/assets/goap/Fire.js"}];
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
    
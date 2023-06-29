
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/app/ai/goap/GoapPlanner.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '5e207LkB2BGBbOyFkEIyz4d', 'GoapPlanner');
// src/app/ai/goap/GoapPlanner.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlanNode = exports.GoapPlanner = void 0;
/**
 * Plans what actions can be completed in order to fulfill a goal state.
 */
var GoapPlanner = /** @class */ (function () {
    function GoapPlanner() {
    }
    /**
     * Plan what sequence of actions can fulfill the goal.
     * Returns null if a plan could not be found, or a list of the actions
     * that must be performed, in order, to fulfill the goal.
     */
    GoapPlanner.prototype.plan = function (go, availableActions, worldState, goal) {
        // reset the actions so we can start fresh with them
        for (var _i = 0, availableActions_1 = availableActions; _i < availableActions_1.length; _i++) {
            var a = availableActions_1[_i];
            a.doReset();
        }
        // check what actions can run using their checkProceduralPrecondition
        var usableActions = [];
        for (var _a = 0, availableActions_2 = availableActions; _a < availableActions_2.length; _a++) {
            var a = availableActions_2[_a];
            if (a.checkProceduralPrecondition(go)) {
                usableActions.push(a);
            }
        }
        // we now have all actions that can run, stored in usableActions
        // build up the tree and record the leaf nodes that provide a solution to the goal.
        var leaves = [];
        // build graph
        var start = new PlanNode(null, 0, worldState, null);
        var success = this.buildGraph(start, leaves, usableActions, goal);
        if (!success) {
            // oh no, we didn't get a plan
            //console.log("NO PLan");
            return null;
        }
        // get the cheapest leaf
        var cheapest = null;
        for (var _b = 0, leaves_1 = leaves; _b < leaves_1.length; _b++) {
            var leaf = leaves_1[_b];
            if (cheapest == null) {
                cheapest = leaf;
            }
            else {
                if (leaf.runningCost < cheapest.runningCost) {
                    cheapest = leaf;
                }
            }
        }
        // get its node and work back through the parents
        var result = [];
        var n = cheapest;
        while (n != null) {
            if (n.action != null) {
                result.push(n.action);
            }
            n = n.parent;
        }
        result.reverse();
        // hooray we have a plan!
        return result;
    };
    /**
     * Create a subset of the actions excluding the removeMe one. Creates a new set.
     */
    GoapPlanner.prototype.actionSubset = function (actions, removeMe) {
        var subset = [];
        for (var _i = 0, actions_1 = actions; _i < actions_1.length; _i++) {
            var a = actions_1[_i];
            if (a != removeMe) {
                subset.push(a);
            }
        }
        return subset;
    };
    /**
     * Returns true if at least one solution was found.
     * The possible paths are stored in the leaves list. Each leaf has a
     * 'runningCost' value where the lowest cost will be the best action
     * sequence.
     */
    GoapPlanner.prototype.buildGraph = function (parent, leaves, usableActions, goal) {
        var foundOne = false;
        // go through each action available at this node and see if we can use it here
        for (var _i = 0, usableActions_1 = usableActions; _i < usableActions_1.length; _i++) {
            var action = usableActions_1[_i];
            // if the parent state has the conditions for this action's preconditions, we can use it here
            if (this.inState(action.preconditions, parent.state)) {
                // apply the action's effects to the parent state
                var currentState = this.populateState(parent.state, action.effects);
                var node = new PlanNode(parent, parent.runningCost + action.cost, currentState, action);
                if (this.inState(goal, currentState)) {
                    // we found a solution!
                    leaves.push(node);
                    foundOne = true;
                }
                else {
                    // not at a solution yet, so test all the remaining actions and branch out the tree
                    var subset = this.actionSubset(usableActions, action);
                    var found = this.buildGraph(node, leaves, subset, goal);
                    if (found) {
                        foundOne = true;
                    }
                }
            }
        }
        return foundOne;
    };
    /**
     * Check that all items in 'test' are in 'state'. If just one does not match or is not there
     * then this returns false.
     */
    GoapPlanner.prototype.inState = function (test, state) {
        var testKeyArr = Array.from(test.keys());
        for (var _i = 0, testKeyArr_1 = testKeyArr; _i < testKeyArr_1.length; _i++) {
            var key = testKeyArr_1[_i];
            if (test.get(key) != state.get(key)) {
                return false;
            }
        }
        return true;
    };
    /**
     * Apply the stateChange to the currentState
     */
    GoapPlanner.prototype.populateState = function (currentState, stateChange) {
        var state = new Map();
        // copy the KVPs over as new objects
        currentState.forEach(function (value, key) {
            state.set(key, value);
        });
        stateChange.forEach(function (value, key) {
            state.set(key, value);
        });
        return state;
    };
    return GoapPlanner;
}());
exports.GoapPlanner = GoapPlanner;
var PlanNode = /** @class */ (function () {
    function PlanNode(parent, runningCost, state, action) {
        this.parent = parent;
        this.runningCost = runningCost;
        this.state = state;
        this.action = action;
    }
    return PlanNode;
}());
exports.PlanNode = PlanNode;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvYXBwL2FpL2dvYXAvR29hcFBsYW5uZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR0E7O0dBRUc7QUFDSDtJQUFBO0lBNklBLENBQUM7SUE1SUc7Ozs7T0FJRztJQUNJLDBCQUFJLEdBQVgsVUFBWSxFQUFXLEVBQUUsZ0JBQThCLEVBQUUsVUFBcUMsRUFBRSxJQUErQjtRQUMzSCxvREFBb0Q7UUFDcEQsS0FBYyxVQUFnQixFQUFoQixxQ0FBZ0IsRUFBaEIsOEJBQWdCLEVBQWhCLElBQWdCLEVBQUU7WUFBM0IsSUFBSSxDQUFDLHlCQUFBO1lBQ04sQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFBO1NBQ2Q7UUFFRCxxRUFBcUU7UUFDckUsSUFBSSxhQUFhLEdBQWlCLEVBQUUsQ0FBQTtRQUNwQyxLQUFjLFVBQWdCLEVBQWhCLHFDQUFnQixFQUFoQiw4QkFBZ0IsRUFBaEIsSUFBZ0IsRUFBRTtZQUEzQixJQUFJLENBQUMseUJBQUE7WUFDTixJQUFJLENBQUMsQ0FBQywyQkFBMkIsQ0FBQyxFQUFFLENBQUMsRUFBRTtnQkFDbkMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQTthQUN4QjtTQUNKO1FBRUQsZ0VBQWdFO1FBRWhFLG1GQUFtRjtRQUNuRixJQUFJLE1BQU0sR0FBZSxFQUFFLENBQUE7UUFFM0IsY0FBYztRQUNkLElBQUksS0FBSyxHQUFhLElBQUksUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsVUFBVSxFQUFFLElBQUksQ0FBQyxDQUFBO1FBQzdELElBQUksT0FBTyxHQUFZLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxFQUFFLE1BQU0sRUFBRSxhQUFhLEVBQUUsSUFBSSxDQUFDLENBQUE7UUFFMUUsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNWLDhCQUE4QjtZQUM5Qix5QkFBeUI7WUFDekIsT0FBTyxJQUFJLENBQUE7U0FDZDtRQUVELHdCQUF3QjtRQUN4QixJQUFJ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QixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQTtJQUN4QixDQUFDO0lBQ0wsZUFBQztBQUFELENBWkEsQUFZQyxJQUFBO0FBWlksNEJBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBY3Rpb25TdGF0dXMgfSBmcm9tIFwiLi9BY3Rpb25TdGF0dXNcIlxuaW1wb3J0IHsgR29hcEFjdGlvbiB9IGZyb20gXCIuL0dvYXBBY3Rpb25cIlxuXG4vKipcbiAqIFBsYW5zIHdoYXQgYWN0aW9ucyBjYW4gYmUgY29tcGxldGVkIGluIG9yZGVyIHRvIGZ1bGZpbGwgYSBnb2FsIHN0YXRlLlxuICovXG5leHBvcnQgY2xhc3MgR29hcFBsYW5uZXIge1xuICAgIC8qKlxuICAgICAqIFBsYW4gd2hhdCBzZXF1ZW5jZSBvZiBhY3Rpb25zIGNhbiBmdWxmaWxsIHRoZSBnb2FsLlxuICAgICAqIFJldHVybnMgbnVsbCBpZiBhIHBsYW4gY291bGQgbm90IGJlIGZvdW5kLCBvciBhIGxpc3Qgb2YgdGhlIGFjdGlvbnNcbiAgICAgKiB0aGF0IG11c3QgYmUgcGVyZm9ybWVkLCBpbiBvcmRlciwgdG8gZnVsZmlsbCB0aGUgZ29hbC5cbiAgICAgKi9cbiAgICBwdWJsaWMgcGxhbihnbzogY2MuTm9kZSwgYXZhaWxhYmxlQWN0aW9uczogR29hcEFjdGlvbltdLCB3b3JsZFN0YXRlOiBNYXA8QWN0aW9uU3RhdHVzLCBPYmplY3Q+LCBnb2FsOiBNYXA8QWN0aW9uU3RhdHVzLCBPYmplY3Q+KTogR29hcEFjdGlvbltdIHtcbiAgICAgICAgLy8gcmVzZXQgdGhlIGFjdGlvbnMgc28gd2UgY2FuIHN0YXJ0IGZyZXNoIHdpdGggdGhlbVxuICAgICAgICBmb3IgKGxldCBhIG9mIGF2YWlsYWJsZUFjdGlvbnMpIHtcbiAgICAgICAgICAgIGEuZG9SZXNldCgpXG4gICAgICAgIH1cblxuICAgICAgICAvLyBjaGVjayB3aGF0IGFjdGlvbnMgY2FuIHJ1biB1c2luZyB0aGVpciBjaGVja1Byb2NlZHVyYWxQcmVjb25kaXRpb25cbiAgICAgICAgbGV0IHVzYWJsZUFjdGlvbnM6IEdvYXBBY3Rpb25bXSA9IFtdXG4gICAgICAgIGZvciAobGV0IGEgb2YgYXZhaWxhYmxlQWN0aW9ucykge1xuICAgICAgICAgICAgaWYgKGEuY2hlY2tQcm9jZWR1cmFsUHJlY29uZGl0aW9uKGdvKSkge1xuICAgICAgICAgICAgICAgIHVzYWJsZUFjdGlvbnMucHVzaChhKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gd2Ugbm93IGhhdmUgYWxsIGFjdGlvbnMgdGhhdCBjYW4gcnVuLCBzdG9yZWQgaW4gdXNhYmxlQWN0aW9uc1xuXG4gICAgICAgIC8vIGJ1aWxkIHVwIHRoZSB0cmVlIGFuZCByZWNvcmQgdGhlIGxlYWYgbm9kZXMgdGhhdCBwcm92aWRlIGEgc29sdXRpb24gdG8gdGhlIGdvYWwuXG4gICAgICAgIGxldCBsZWF2ZXM6IFBsYW5Ob2RlW10gPSBbXVxuXG4gICAgICAgIC8vIGJ1aWxkIGdyYXBoXG4gICAgICAgIGxldCBzdGFydDogUGxhbk5vZGUgPSBuZXcgUGxhbk5vZGUobnVsbCwgMCwgd29ybGRTdGF0ZSwgbnVsbClcbiAgICAgICAgbGV0IHN1Y2Nlc3M6IGJvb2xlYW4gPSB0aGlzLmJ1aWxkR3JhcGgoc3RhcnQsIGxlYXZlcywgdXNhYmxlQWN0aW9ucywgZ29hbClcblxuICAgICAgICBpZiAoIXN1Y2Nlc3MpIHtcbiAgICAgICAgICAgIC8vIG9oIG5vLCB3ZSBkaWRuJ3QgZ2V0IGEgcGxhblxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcIk5PIFBMYW5cIik7XG4gICAgICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgICB9XG5cbiAgICAgICAgLy8gZ2V0IHRoZSBjaGVhcGVzdCBsZWFmXG4gICAgICAgIGxldCBjaGVhcGVzdDogUGxhbk5vZGUgPSBudWxsXG4gICAgICAgIGZvciAobGV0IGxlYWYgb2YgbGVhdmVzKSB7XG4gICAgICAgICAgICBpZiAoY2hlYXBlc3QgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGNoZWFwZXN0ID0gbGVhZlxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAobGVhZi5ydW5uaW5nQ29zdCA8IGNoZWFwZXN0LnJ1bm5pbmdDb3N0KSB7XG4gICAgICAgICAgICAgICAgICAgIGNoZWFwZXN0ID0gbGVhZlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGdldCBpdHMgbm9kZSBhbmQgd29yayBiYWNrIHRocm91Z2ggdGhlIHBhcmVudHNcbiAgICAgICAgbGV0IHJlc3VsdDogR29hcEFjdGlvbltdID0gW11cbiAgICAgICAgbGV0IG46IFBsYW5Ob2RlID0gY2hlYXBlc3RcbiAgICAgICAgd2hpbGUgKG4gIT0gbnVsbCkge1xuICAgICAgICAgICAgaWYgKG4uYWN0aW9uICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICByZXN1bHQucHVzaChuLmFjdGlvbilcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG4gPSBuLnBhcmVudFxuICAgICAgICB9XG4gICAgICAgIHJlc3VsdC5yZXZlcnNlKClcblxuICAgICAgICAvLyBob29yYXkgd2UgaGF2ZSBhIHBsYW4hXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGEgc3Vic2V0IG9mIHRoZSBhY3Rpb25zIGV4Y2x1ZGluZyB0aGUgcmVtb3ZlTWUgb25lLiBDcmVhdGVzIGEgbmV3IHNldC5cbiAgICAgKi9cbiAgICBwcml2YXRlIGFjdGlvblN1YnNldChhY3Rpb25zOiBHb2FwQWN0aW9uW10sIHJlbW92ZU1lOiBHb2FwQWN0aW9uKTogR29hcEFjdGlvbltdIHtcbiAgICAgICAgbGV0IHN1YnNldDogR29hcEFjdGlvbltdID0gW11cbiAgICAgICAgZm9yIChsZXQgYSBvZiBhY3Rpb25zKSB7XG4gICAgICAgICAgICBpZiAoYSAhPSByZW1vdmVNZSkge1xuICAgICAgICAgICAgICAgIHN1YnNldC5wdXNoKGEpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHN1YnNldFxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdHJ1ZSBpZiBhdCBsZWFzdCBvbmUgc29sdXRpb24gd2FzIGZvdW5kLlxuICAgICAqIFRoZSBwb3NzaWJsZSBwYXRocyBhcmUgc3RvcmVkIGluIHRoZSBsZWF2ZXMgbGlzdC4gRWFjaCBsZWFmIGhhcyBhXG4gICAgICogJ3J1bm5pbmdDb3N0JyB2YWx1ZSB3aGVyZSB0aGUgbG93ZXN0IGNvc3Qgd2lsbCBiZSB0aGUgYmVzdCBhY3Rpb25cbiAgICAgKiBzZXF1ZW5jZS5cbiAgICAgKi9cbiAgICBwcml2YXRlIGJ1aWxkR3JhcGgocGFyZW50OiBQbGFuTm9kZSwgbGVhdmVzOiBQbGFuTm9kZVtdLCB1c2FibGVBY3Rpb25zOiBHb2FwQWN0aW9uW10sIGdvYWw6IE1hcDxBY3Rpb25TdGF0dXMsIE9iamVjdD4pOiBib29sZWFuIHtcbiAgICAgICAgbGV0IGZvdW5kT25lOiBib29sZWFuID0gZmFsc2VcblxuICAgICAgICAvLyBnbyB0aHJvdWdoIGVhY2ggYWN0aW9uIGF2YWlsYWJsZSBhdCB0aGlzIG5vZGUgYW5kIHNlZSBpZiB3ZSBjYW4gdXNlIGl0IGhlcmVcbiAgICAgICAgZm9yIChsZXQgYWN0aW9uIG9mIHVzYWJsZUFjdGlvbnMpIHtcbiAgICAgICAgICAgIC8vIGlmIHRoZSBwYXJlbnQgc3RhdGUgaGFzIHRoZSBjb25kaXRpb25zIGZvciB0aGlzIGFjdGlvbidzIHByZWNvbmRpdGlvbnMsIHdlIGNhbiB1c2UgaXQgaGVyZVxuICAgICAgICAgICAgaWYgKHRoaXMuaW5TdGF0ZShhY3Rpb24ucHJlY29uZGl0aW9ucywgcGFyZW50LnN0YXRlKSkge1xuICAgICAgICAgICAgICAgIC8vIGFwcGx5IHRoZSBhY3Rpb24ncyBlZmZlY3RzIHRvIHRoZSBwYXJlbnQgc3RhdGVcbiAgICAgICAgICAgICAgICBsZXQgY3VycmVudFN0YXRlOiBNYXA8QWN0aW9uU3RhdHVzLCBPYmplY3Q+ID0gdGhpcy5wb3B1bGF0ZVN0YXRlKHBhcmVudC5zdGF0ZSwgYWN0aW9uLmVmZmVjdHMpXG4gICAgICAgICAgICAgICAgbGV0IG5vZGU6IFBsYW5Ob2RlID0gbmV3IFBsYW5Ob2RlKHBhcmVudCwgcGFyZW50LnJ1bm5pbmdDb3N0ICsgYWN0aW9uLmNvc3QsIGN1cnJlbnRTdGF0ZSwgYWN0aW9uKVxuXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaW5TdGF0ZShnb2FsLCBjdXJyZW50U3RhdGUpKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIHdlIGZvdW5kIGEgc29sdXRpb24hXG4gICAgICAgICAgICAgICAgICAgIGxlYXZlcy5wdXNoKG5vZGUpXG4gICAgICAgICAgICAgICAgICAgIGZvdW5kT25lID0gdHJ1ZVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIG5vdCBhdCBhIHNvbHV0aW9uIHlldCwgc28gdGVzdCBhbGwgdGhlIHJlbWFpbmluZyBhY3Rpb25zIGFuZCBicmFuY2ggb3V0IHRoZSB0cmVlXG5cbiAgICAgICAgICAgICAgICAgICAgbGV0IHN1YnNldDogR29hcEFjdGlvbltdID0gdGhpcy5hY3Rpb25TdWJzZXQodXNhYmxlQWN0aW9ucywgYWN0aW9uKVxuXG4gICAgICAgICAgICAgICAgICAgIGxldCBmb3VuZCA9IHRoaXMuYnVpbGRHcmFwaChub2RlLCBsZWF2ZXMsIHN1YnNldCwgZ29hbClcbiAgICAgICAgICAgICAgICAgICAgaWYgKGZvdW5kKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3VuZE9uZSA9IHRydWVcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmb3VuZE9uZVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENoZWNrIHRoYXQgYWxsIGl0ZW1zIGluICd0ZXN0JyBhcmUgaW4gJ3N0YXRlJy4gSWYganVzdCBvbmUgZG9lcyBub3QgbWF0Y2ggb3IgaXMgbm90IHRoZXJlXG4gICAgICogdGhlbiB0aGlzIHJldHVybnMgZmFsc2UuXG4gICAgICovXG4gICAgcHJpdmF0ZSBpblN0YXRlKHRlc3Q6IE1hcDxBY3Rpb25TdGF0dXMsIE9iamVjdD4sIHN0YXRlOiBNYXA8QWN0aW9uU3RhdHVzLCBPYmplY3Q+KTogYm9vbGVhbiB7XG4gICAgICAgIGxldCB0ZXN0S2V5QXJyID0gQXJyYXkuZnJvbSh0ZXN0LmtleXMoKSlcbiAgICAgICAgZm9yIChsZXQga2V5IG9mIHRlc3RLZXlBcnIpIHtcbiAgICAgICAgICAgIGlmICh0ZXN0LmdldChrZXkpICE9IHN0YXRlLmdldChrZXkpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBcHBseSB0aGUgc3RhdGVDaGFuZ2UgdG8gdGhlIGN1cnJlbnRTdGF0ZVxuICAgICAqL1xuICAgIHByaXZhdGUgcG9wdWxhdGVTdGF0ZShjdXJyZW50U3RhdGU6IE1hcDxBY3Rpb25TdGF0dXMsIE9iamVjdD4sIHN0YXRlQ2hhbmdlOiBNYXA8QWN0aW9uU3RhdHVzLCBPYmplY3Q+KTogTWFwPEFjdGlvblN0YXR1cywgT2JqZWN0PiB7XG4gICAgICAgIGxldCBzdGF0ZTogTWFwPEFjdGlvblN0YXR1cywgT2JqZWN0PiA9IG5ldyBNYXA8QWN0aW9uU3RhdHVzLCBPYmplY3Q+KClcbiAgICAgICAgLy8gY29weSB0aGUgS1ZQcyBvdmVyIGFzIG5ldyBvYmplY3RzXG4gICAgICAgIGN1cnJlbnRTdGF0ZS5mb3JFYWNoKCh2YWx1ZTogT2JqZWN0LCBrZXk6IEFjdGlvblN0YXR1cykgPT4ge1xuICAgICAgICAgICAgc3RhdGUuc2V0KGtleSwgdmFsdWUpXG4gICAgICAgIH0pXG5cbiAgICAgICAgc3RhdGVDaGFuZ2UuZm9yRWFjaCgodmFsdWU6IE9iamVjdCwga2V5OiBBY3Rpb25TdGF0dXMpID0+IHtcbiAgICAgICAgICAgIHN0YXRlLnNldChrZXksIHZhbHVlKVxuICAgICAgICB9KVxuXG4gICAgICAgIHJldHVybiBzdGF0ZVxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFBsYW5Ob2RlIHtcbiAgICBwdWJsaWMgcGFyZW50OiBQbGFuTm9kZVxuICAgIHB1YmxpYyBydW5uaW5nQ29zdDogbnVtYmVyXG4gICAgcHVibGljIHN0YXRlOiBNYXA8QWN0aW9uU3RhdHVzLCBPYmplY3Q+XG4gICAgcHVibGljIGFjdGlvbjogR29hcEFjdGlvblxuXG4gICAgY29uc3RydWN0b3IocGFyZW50OiBQbGFuTm9kZSwgcnVubmluZ0Nvc3Q6IG51bWJlciwgc3RhdGU6IE1hcDxBY3Rpb25TdGF0dXMsIE9iamVjdD4sIGFjdGlvbjogR29hcEFjdGlvbikge1xuICAgICAgICB0aGlzLnBhcmVudCA9IHBhcmVudFxuICAgICAgICB0aGlzLnJ1bm5pbmdDb3N0ID0gcnVubmluZ0Nvc3RcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHN0YXRlXG4gICAgICAgIHRoaXMuYWN0aW9uID0gYWN0aW9uXG4gICAgfVxufVxuIl19
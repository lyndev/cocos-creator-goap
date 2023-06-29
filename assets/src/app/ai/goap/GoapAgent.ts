import { StateEnum } from "../fsm/state/StateEnum"
import { StateIdle } from "../fsm/state/StateIdle"
import { StateMove } from "../fsm/state/StateMove"
import { StatePerformAction } from "../fsm/state/StatePerformAction"
import { StateManager } from "../fsm/StateManager"
import { ActionStatus } from "./ActionStatus"
import { GoapAction } from "./GoapAction"
import { GoapPlanner } from "./GoapPlanner"
import { IGoap } from "./IGoap"

const { ccclass, property } = cc._decorator
@ccclass
export class GoapAgent extends cc.Component {
    protected availableActions: GoapAction[]
    protected currentActions: GoapAction[]
    protected stateMgr: StateManager
    protected goap: IGoap
    protected planner: GoapPlanner

    protected onLoad(): void {
        this.initState()
        this.planner = new GoapPlanner()
        this.currentActions = []
        this.stateMgr.changeState(StateEnum.StateIdle)
    }

    private initState() {
        let stateMgr = (this.stateMgr = new StateManager(this.node))
        stateMgr.registerState(StateEnum.StateIdle, new StateIdle(this.node))
        stateMgr.registerState(StateEnum.StateMove, new StateMove(this.node))
        stateMgr.registerState(StateEnum.StatePerformAction, new StatePerformAction(this.node))
    }

    public getGoap(): IGoap {
        return this.goap
    }

    public setGoap(v) {
        this.goap = v
    }

    public getPlanner(): GoapPlanner {
        return this.planner
    }

    public getAvaliableActions(): GoapAction[] {
        return this.availableActions
    }

    public setCurrentActions(currentActions: GoapAction[]) {
        this.currentActions = currentActions
    }

    public peekCurrentActions(): GoapAction {
        return this.currentActions[0]
    }

    public dequeueCurrentActions(): GoapAction {
        return this.currentActions.shift()
    }

    public getCurrentActions(): GoapAction[] {
        return this.currentActions
    }

    public changeState(key: string, obj?: any, isForce?: boolean) {
        this.stateMgr.changeState(key, obj, isForce)
    }

    public update(delta: number) {
        this.stateMgr.update(delta)
    }
    public addAction(a: GoapAction) {
        this.availableActions.push(a)
    }

    public getAction<T extends GoapAction>(cls: { new (): T }) {
        for (let action of this.availableActions) {
            if (action instanceof cls) {
                return action
            }
        }
        return null
    }
    public removeAction(action: GoapAction) {
        for (let i = 0, len = this.availableActions.length; i < len; i++) {
            if (this.availableActions[i] == action) {
                this.availableActions.splice(i, 1)
                return
            }
        }
    }

    public hasActionPlan() {
        return this.currentActions.length > 0
    }

    public cleanCurActions() {
        this.currentActions.length = 0
    }

    public cleanAvalableActions() {
        this.availableActions.length = 0
    }

    private loadActions() {
        let actions: GoapAction[] = this.getAvaliableActions()
        for (let action of actions) {
            this.availableActions.push(action)
        }
        console.log("Found actions: " + GoapAgent.prettyPrintActions(actions))
    }
    // 输出 ==================================================
    public static prettyPrintState(state: Map<ActionStatus, Object>) {
        let s: string = ""
        state.forEach((value, key) => {
            s += key + ":" + value
            s += ", "
        })
        return s
    }

    public static prettyPrintActionsQueue(actions: GoapAction[]): string {
        console.log("prettyPrintActionsQueue: ", actions)
        let s: string = ""
        actions.forEach((action: GoapAction) => {
            s += action.constructor.name
            s += "-> "
        })
        s += "GOAL"
        return s
    }

    public static prettyPrintActions(actions: GoapAction[]) {
        let s: string = ""
        actions.forEach((action: GoapAction) => {
            s += action.constructor.name
            s += ", "
        })
        return s
    }

    public static prettyPrintAction(action: GoapAction) {
        return "" + action.constructor.name
    }
}

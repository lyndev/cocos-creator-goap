import Entity from "../../../../goap/Entity"
import { VGameObject } from "../../base/VGameObject"
import { ActionStatus } from "./ActionStatus"
import { GoapAgent } from "./GoapAgent"
import { IGoap } from "./IGoap"

/*
 * @Description:
 * @Author: RannarYang
 * @Date: 2018-09-06 00:09:26
 * @Last Modified by:   RannarYang
 * @Last Modified time: 2018-09-06 00:09:26
 */
export abstract class GoapAction {
    private _preconditions: Map<ActionStatus, Object>
    private _effects: Map<ActionStatus, Object>
    private inRange: boolean = false
    /* 执行动作的成本。
     * 找出适合动作的重量。
     * 更改它将影响在计划期间选择的操作。*/
    public cost: number = 1

    /**
     * 动作执行的目标对象，可以为空。 */
    public target: any

    // 动作所属
    public goapAgent: GoapAgent

    public constructor() {
        this._preconditions = new Map<ActionStatus, Object>()
        this._effects = new Map<ActionStatus, Object>()
    }

    public doReset() {
        this.inRange = false
        this.target = null
        this.reset()
    }
    /**
     * Reset any variables that need to be reset before planning happens again.
     */
    abstract reset(): void

    /**
     * Is the action done?
     */
    abstract isDone(): boolean

    /**
     * Procedurally check if this action can run. Not all actions
     * will need this, but some might.
     */
    abstract checkProceduralPrecondition(node: cc.Node): boolean

    /**
     * Run the action.
     * Returns True if the action performed successfully or false
     * if something happened and it can no longer perform. In this case
     * the action queue should clear out and the goal cannot be reached.
     */
    abstract perform(goap: cc.Node): boolean

    /**
     * Does this action need to be within range of a target game object?
     * If not then the moveTo state will not need to run for this action.
     */
    abstract requiresInRange(): boolean

    /**
     * Are we in range of the target?
     * The MoveTo state will set this and it gets reset each time this action is performed.
     */
    public isInRange(): boolean {
        return this.inRange
    }

    public setInRange(inRange: boolean): void {
        this.inRange = inRange
    }

    public addPrecondition(key: string, value: any) {
        this._preconditions.set(key, value)
    }

    public removePrecondition(key: string) {
        this._preconditions.delete(key)
    }

    public addEffect(key: string, value: any) {
        this._effects.set(key, value)
    }

    public removeEffect(key: string) {
        this._effects.delete(key)
    }

    public get preconditions() {
        return this._preconditions
    }

    public get effects() {
        return this._effects
    }
}

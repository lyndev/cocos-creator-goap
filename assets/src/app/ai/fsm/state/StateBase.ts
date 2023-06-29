import { StateManager } from "../StateManager"
export class StateBase {
    protected _owner: cc.Node

    public get owner(): cc.Node {
        return this._owner
    }
    constructor(owner: cc.Node) {
        this._owner = owner
    }
    /**
     * 进入状态
     */
    public onEnter(obj: any = null): void {}

    /**
     * 再次进入状态
     * @param obj
     * @return
     */
    public onReEnter(obj: any = null): void {}

    /**
     * 状态更新
     * @return
     */
    public onUpdate(timeStamp: number): void {}

    /**
     * 离开状态结束
     * @param string
     * @return
     *
     */
    public onExit(preKey: string = undefined): void {}
    /**
     * 返回状态ID
     * @return
     *
     */
    public getStateKey(): string {
        return StateManager.InvalidState
    }
}

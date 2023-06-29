import { GoapAction } from "../../goap/GoapAction"
import { GoapAgent } from "../../goap/GoapAgent"
import { IGoap } from "../../goap/IGoap"
import { StateBase } from "./StateBase"
import { StateEnum } from "./StateEnum"

export class StateMove extends StateBase {
    public onEnter() {}
    /**
     * 状态更新
     * @return
     */
    public onUpdate(delta: number): void {
        let goapAgent = this.owner.getComponent(GoapAgent)
        let goap: IGoap = goapAgent.getGoap()
        let action: GoapAction = goapAgent.peekCurrentActions()
        if (action.requiresInRange() && action.target == null) {
            console.log("Fatal error: Action requires a target but has none. Planning failed. You did not assign the target in your Action.checkProceduralPrecondition()")
            goapAgent.changeState(StateEnum.StateIdle)
            return
        }

        // get the agent to move itself
        if (goap.moveAgent(action, delta)) {
            goapAgent.changeState(StateEnum.StatePerformAction)
        }
    }
}

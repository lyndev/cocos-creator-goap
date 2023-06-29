import { GoapAction } from "../../goap/GoapAction"
import { GoapAgent } from "../../goap/GoapAgent"
import { IGoap } from "../../goap/IGoap"
import { StateBase } from "./StateBase"
import { StateEnum } from "./StateEnum"

export class StatePerformAction extends StateBase {
    public onEnter() {}
    /**
     * 状态更新
     * @return
     */
    public onUpdate(timeStamp: number): void {
        let goapAgent = this.owner.getComponent(GoapAgent)
        let goap: IGoap = goapAgent.getGoap()
        if (!goapAgent.hasActionPlan()) {
            // no actions to perform
            console.log("Done actions")
            goapAgent.changeState(StateEnum.StateIdle)
            goap.actionsFinished()
            return
        }
        let action: GoapAction = goapAgent.peekCurrentActions()
        if (action.isDone()) {
            // the action is done. Remove it so we can perform the next one
            goapAgent.dequeueCurrentActions()
        }

        if (goapAgent.hasActionPlan()) {
            // perform the next action
            action = goapAgent.peekCurrentActions()
            let inRange: boolean = action.requiresInRange() ? action.isInRange() : true
            if (inRange) {
                // we are in range, so perform the action
                let success: boolean = action.perform(this.owner)
                if (!success) {
                    // action failed, we need to plan again
                    goapAgent.changeState(StateEnum.StateIdle)
                    goap.planAborted(action)
                }
            } else {
                // we need to move there first
                //TODO: push moveTo state
                goapAgent.changeState(StateEnum.StateMove)
            }
        } else {
            // no actions left, move to Plan state
            goapAgent.changeState(StateEnum.StateIdle)
            goap.actionsFinished()
        }
    }
}

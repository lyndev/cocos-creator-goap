import { GoapAction } from "../../goap/GoapAction";
import { GoapAgent } from "../../goap/GoapAgent";
import { IGoap } from "../../goap/IGoap";
import { StateBase } from "./StateBase";
import { StateEnum } from "./StateEnum";

export class StateMove extends StateBase {
    protected _owner: GoapAgent
    /**
     * 状态更新 
     * @return 
     */
    public onUpdate(delta: number): void {
        let iGoap: IGoap = this.owner.getOwner();

        // move the game object

        let action: GoapAction = this.owner.peekCurrentActions();
        if (action.requiresInRange() && action.target == null) {
            console.log("Fatal error: Action requires a target but has none. Planning failed. You did not assign the target in your Action.checkProceduralPrecondition()");
            this.owner.changeState(StateEnum.StateIdle);
            return;
        }

        // get the agent to move itself
        if (iGoap.moveAgent(action, delta)) {
            this.owner.changeState(StateEnum.StatePerformAction);
        }
    }
}
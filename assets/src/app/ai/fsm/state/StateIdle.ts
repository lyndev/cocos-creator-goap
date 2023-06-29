import { GoapAction } from "../../goap/GoapAction"
import { GoapAgent } from "../../goap/GoapAgent"
import { GoapPlanner } from "../../goap/GoapPlanner"
import { IGoap } from "../../goap/IGoap"
import { StateBase } from "./StateBase"
import { StateEnum } from "./StateEnum"

export class StateIdle extends StateBase {
    public onEnter() {}

    /**
     * 状态更新
     * @return
     */
    public onUpdate(timeStamp: number): void {
        let owner = this.owner.getComponent(GoapAgent)
        let goap: IGoap = owner.getGoap()
        let planner: GoapPlanner = owner.getPlanner()
        let avaliableActions: GoapAction[] = owner.getAvaliableActions()
        // GOAP planning

        // get the world state and the goal we want to plan for
        let worldState: Map<string, Object> = goap.getWorldState()
        let goal: Map<string, Object> = goap.createGoalState()

        // plan
        let plan: GoapAction[] = planner.plan(owner.node, avaliableActions, worldState, goal)
        if (plan != null) {
            // we have a plan, hooray!
            owner.setCurrentActions(plan)
            goap.planFound(goal, plan)

            // move to PerformAction state
            owner.changeState(StateEnum.StatePerformAction)
        } else {
            //console.log("Failed Plan");
            goap.planFailed(goal)
            owner.changeState(StateEnum.StateIdle)
        }
    }
}

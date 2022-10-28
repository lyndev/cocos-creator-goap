import { GoapAction } from "../../src/app/ai/goap/GoapAction";
import { GoapAgent } from "../../src/app/ai/goap/GoapAgent";
import { IGoap } from "../../src/app/ai/goap/IGoap";
import { ActionDataStatus } from "../ActionDataStatus";
import DataMemory from "../DataMemory";
import { ExigenceFireAction } from "../ExigenceFireAction";
import { GotoEquipmentAction } from "../GotoEquipmentAction";
import { GotoFireAction } from "../GotoFireAction";

export default class GoapOutFireExigence implements IGoap {
    memory: DataMemory
    bMoveEnd: boolean = false
    bMoving: boolean = false

    constructor() {
        this.memory = new DataMemory()
        this.memory.set(ActionDataStatus.isTolietOk, false)
        this.memory.set(ActionDataStatus.isCanOutfire, false)
        this.memory.set(ActionDataStatus.isEquipOk, false)
        this.memory.set(ActionDataStatus.isFireOk, false)
        this.memory.set(ActionDataStatus.isSleepOk, false)
    }

    /**拥有的actions */
    private avaliableActions: GoapAction[] = [];
    public initAvaliableActions(goapAgent: GoapAgent) {
        let actionCls: any[] = [GotoEquipmentAction, GotoFireAction, ExigenceFireAction]
        let action: GoapAction;
        for (let i = 0, len = actionCls.length; i < len; i++) {
            action = new actionCls[i]()
            action.goapAgent = goapAgent
            this.avaliableActions.push(action);
        }
    }

    getAvaliableActions(): GoapAction[] {
        return this.avaliableActions
    }

    // 该计划的目标
    createGoalState(): Map<string, Object> {
        let goal = new Map<string, Object>();
        goal.set(ActionDataStatus.outFire, true);
        return goal
    }

    getWorldState(): Map<string, Object> {
        let worldData: Map<string, Object> = new Map<string, Object>();
        worldData.set(ActionDataStatus.isTolietOk, this.memory.get(ActionDataStatus.isTolietOk));
        worldData.set(ActionDataStatus.isCanOutfire, this.memory.get(ActionDataStatus.isCanOutfire));
        worldData.set(ActionDataStatus.isEquipOk, this.memory.get(ActionDataStatus.isEquipOk));
        worldData.set(ActionDataStatus.isFireOk, this.memory.get(ActionDataStatus.isFireOk));
        worldData.set(ActionDataStatus.isSleepOk, this.memory.get(ActionDataStatus.isSleepOk));
        return worldData;
    }

    planFailed(failedGoal: Map<string, Object>): void {
        console.log("planFailed")
    }

    planFound(goal: Map<string, Object>, actions: GoapAction[]): void {
        console.log("planFound")
    }

    actionsFinished(): void {
        console.log("Actions completed");
    }

    planAborted(aborter: GoapAction): void {
        console.log("planAborted")
    }

    moveAgent(nextAction: GoapAction, delta: number): boolean {
        let target = nextAction.target;
        let goapAgent = nextAction.goapAgent;
        if (this.bMoveEnd) {
            this.bMoveEnd = false
            return true
        }
        if (!this.bMoving) {
            this.bMoving = true
            let actions = []
            actions.push(cc.moveTo(2, new cc.Vec2(target.node.x, target.node.y)))
            actions.push(cc.callFunc(() => {
                this.bMoveEnd = true
                this.bMoving = false
                nextAction.setInRange(true);
            }))
            goapAgent.node.stopAllActions()
            goapAgent.node.runAction(cc.sequence(actions))
        }

        return this.bMoveEnd
    }
}
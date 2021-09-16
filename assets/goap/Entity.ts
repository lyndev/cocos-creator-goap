import { GoapAction } from '../src/app/ai/goap/GoapAction';
import { GoapAgent } from '../src/app/ai/goap/GoapAgent';
import { IGoap } from '../src/app/ai/goap/IGoap';
import { ActionDataStatus } from './ActionDataStatus';
import DataMemory from './DataMemory';

const { ccclass, property } = cc._decorator;
@ccclass
export abstract default class Entity extends cc.Component implements IGoap {
    memory: DataMemory
    bMoveEnd: boolean = false
    bMoving: boolean = false

    /**goap agent */
    protected goapAgent: GoapAgent;
    /**拥有的actions */
    private avaliableActions: GoapAction[] = [];

    public init() {
        this.memory = new DataMemory()
        this.memory.set(ActionDataStatus.isTolietOk, false)
        this.memory.set(ActionDataStatus.isEatOk, false)
        this.memory.set(ActionDataStatus.isEquipOk, false)
        this.memory.set(ActionDataStatus.isFireOk, false)
        this.goapAgent = new GoapAgent(this);
    }

    public getAvaliableActions(): GoapAction[] {
        return this.avaliableActions;
    }

    public toInitAvaliableActions(actionCls: any[]) {
        let action;
        for (let i = 0, len = actionCls.length; i < len; i++) {
            action = new actionCls[i]();
            this.avaliableActions.push(action);
        }
    }

    getWorldState(): Map<string, Object> {
        let worldData: Map<string, Object> = new Map<string, Object>();
        worldData.set(ActionDataStatus.isTolietOk, this.memory.get(ActionDataStatus.isTolietOk));
        worldData.set(ActionDataStatus.isEatOk, this.memory.get(ActionDataStatus.isEatOk));
        worldData.set(ActionDataStatus.isEquipOk, this.memory.get(ActionDataStatus.isEquipOk));
        worldData.set(ActionDataStatus.isFireOk, this.memory.get(ActionDataStatus.isFireOk));
        return worldData;
    }

    abstract createGoalState(): Map<string, Object>

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
            this.node.stopAllActions()
            this.node.runAction(cc.sequence(actions))
        }

        return this.bMoveEnd
    }

    public updateTimer(delta: number) {
        this.goapAgent.update(delta);
    }
}

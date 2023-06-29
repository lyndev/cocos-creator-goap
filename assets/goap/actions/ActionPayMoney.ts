import { GoapAction } from "../../src/app/ai/goap/GoapAction"
import { IGoap } from "../../src/app/ai/goap/IGoap"
import { VGameObject } from "../../src/app/base/VGameObject"
import { Environment } from "../../src/app/gamedata/Environment"
import TimeUtil from "../../src/utils/TimeUtil"

export class ActionPayMoney extends GoapAction {
    private bDone: boolean = false
    private startTime: number = 0
    private workDuration: number = 2 // seconds
    public cost: number = 1
    public constructor() {
        super()
    }

    public reset(): void {
        this.bDone = false
        this.startTime = 0
    }

    public isDone() {
        return this.bDone
    }

    public requiresInRange() {
        return true
    }

    public checkProceduralPrecondition(node: cc.Node): boolean {
        if (Environment.storeA.isHaveGoods()) {
            return true
        }
    }

    public perform(node: cc.Node): boolean {
        if (this.startTime == 0) this.startTime = TimeUtil.getTime()

        if (TimeUtil.getTime() - this.startTime > this.workDuration) {
            //entity.memory.set(ActionDataStatus.isCanOutfire, true)
            this.bDone = true
        }
        return true
    }
}

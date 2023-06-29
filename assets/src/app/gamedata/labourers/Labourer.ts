import { ActionStatus } from "../../ai/goap/ActionStatus"
import { GoapAction } from "../../ai/goap/GoapAction"
import { GoapAgent } from "../../ai/goap/GoapAgent"
import { IGoap } from "../../ai/goap/IGoap"
import { GameDataManager } from "../../data/GameDataManager"
import { LabourerType } from "../../data/LabourerType"
import { T_LabourerBean } from "../../data/T_LabourerContainer"
import { BackPackComponent } from "../BackPackComponent"
import { ToolComponent } from "../ToolComponent"

const { requireComponent, ccclass, property } = cc._decorator
@ccclass
export class Labourer extends GoapAgent implements IGoap {
    @property({ type: cc.Enum(LabourerType), displayName: "type" })
    public labourerType: LabourerType = LabourerType.None

    /**背包 */
    public backpack: BackPackComponent
    public bean: T_LabourerBean
    public tool: ToolComponent

    bMoving = false
    bMoveEnd = false
    public onLoad() {
        super.onLoad()
        let goapAgent = this.getComponent(GoapAgent)
        goapAgent.setGoap(this)
        this.bean = GameDataManager.I.t_labourderContainer.getLabourerByType(this.labourerType)
        if (!this.tool) {
            this.pickUpTool()
        }
    }

    protected initAvaliableActions(actionCls: any[]) {
        let action
        this.availableActions = []
        for (let i = 0, len = actionCls.length; i < len; i++) {
            action = new actionCls[i]()
            this.availableActions.push(action)
        }
    }

    public update(dt: number) {
		super.update(dt)
	}

    public getWorldState(): Map<string, Object> {
        let worldData: Map<string, Object> = new Map<string, Object>()
        worldData.set(ActionStatus.HasOre, this.backpack.hasOre())
        worldData.set(ActionStatus.HasLogs, this.backpack.hasLog())
        worldData.set(ActionStatus.HasFirewood, this.backpack.hasFirewood())
        worldData.set(ActionStatus.HasTool, this.hasTool())
        return worldData
    }

    private hasTool() {
        return this.tool != null
    }

    public createGoalState(): Map<string, Object> {
        throw new Error("Method not implemented.")
    }

    public planFailed(failedGoad: Map<string, Object>) {
        // Not handling this here since we are making sure our goals will always succeed.
        // But normally you want to make sure the world state has changed before running
        // the same goal again, or else it will just fail.
    }

    public planFound(goal: Map<string, Object>, actions: GoapAction[]) {
        // Yay we found a plan for our goal
        console.log("Plan found: ", GoapAgent.prettyPrintActionsQueue(actions))
    }

    public actionsFinished(): void {
        // Everything is done, we completed our actions for this gool. Hooray!
        console.log("Actions completed")
    }

    public planAborted(aborter: GoapAction) {
        // An action bailed out of the plan. State has been reset to plan again.
        // Take note of what happened and make sure if you run the same goal again
        // that it can succeed.
        console.log("Plan Aborted: " + GoapAgent.prettyPrintAction(aborter))
    }

    public moveAgent(nextAction: GoapAction, delta: number) {
        let target = nextAction.target
        if (this.bMoveEnd) {
            this.bMoveEnd = false
            return true
        }
        if (!this.bMoving) {
            this.bMoving = true
            let actions = []
            actions.push(cc.moveTo(2, new cc.Vec2(target.node.x, target.node.y)))
            actions.push(
                cc.callFunc(() => {
                    this.bMoveEnd = true
                    this.bMoving = false
                    nextAction.setInRange(true)
                })
            )
            this.node.stopAllActions()
            this.node.runAction(cc.sequence(actions))
        }

        return this.bMoveEnd
    }

    /**设置背包里的物品 */
    public setBackPack(backpack: BackPackComponent) {
        this.backpack = backpack
        backpack.setOwner(this)
    }
    /**拾取工具 */
    public pickUpTool() {
        this.tool = new ToolComponent()
        console.log("拾取工具", this.constructor.name)
    }

    /**销毁工具 */
    public destroyTool() {
        this.tool = undefined
    }

    public updateBackPack() {}
}

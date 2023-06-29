import TimeUtil from "../../../utils/TimeUtil"
import { ActionStatus } from "../../ai/goap/ActionStatus"
import { GoapAction } from "../../ai/goap/GoapAction"
import { VGameObject } from "../../base/VGameObject"
import { BackPackComponent } from "../BackPackComponent"
import { ChoppingBlockComponent } from "../ChoppingBlockComponent"
import { Environment } from "../Environment"
import { Labourer } from "../labourers/Labourer"

export class ChopFirewoodAction extends GoapAction {
    private chopped: boolean = false
    private startTime: number = 0
    public workDuration: number = 2
	
    public constructor() {
        super()
        this.addPrecondition(ActionStatus.HasTool, true) // we need a tool to do this
        this.addPrecondition(ActionStatus.HasFirewood, false) // if we have firewood we don't want more
        this.addEffect(ActionStatus.HasFirewood, true)
    }
    public reset() {
        this.chopped = false
        this.startTime = 0
    }
    public isDone() {
        return this.chopped
    }

    public requiresInRange() {
        return true
    }

    public checkProceduralPrecondition(go: cc.Node): boolean {
        // find the nearest chopping block that we can chop our wood at
        let blocks: ChoppingBlockComponent[] = Environment.choppingBlockComps
        let closest: ChoppingBlockComponent = null
        let closestDist: number = 0
        let vg = go.getComponent(VGameObject)
        for (let block of blocks) {
            if (closest == null) {
                closest = block
                closestDist = block.distanceSquare(vg)
            } else {
                // is this one closer than the last?
                let dist: number = block.distanceSquare(vg)
                if (dist < closestDist) {
                    // we found a closer one, use it
                    closest = block
                    closestDist = dist
                }
            }
        }

        if (closest == null) return false

        this.target = closest

        return closest != null
    }

    public perform(node: cc.Node): boolean {
        let labourer = node.getComponent(Labourer)
        if (this.startTime == 0) this.startTime = TimeUtil.getTime()
        if (TimeUtil.getTime() - this.startTime > this.workDuration) {
            // finished chopping
            let backpack: BackPackComponent = labourer.backpack
            backpack.numFirewood += 5
            this.chopped = true
            let tool = labourer.tool
            tool.use(0.34)
            if (tool.destroyed()) {
                // TODO:删除 Destroy(backpack.tool);
                labourer.destroyTool()
            }
        }
        return true
    }
}

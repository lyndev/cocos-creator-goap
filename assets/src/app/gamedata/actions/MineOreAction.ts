import TimeUtil from "../../../utils/TimeUtil"
import { ActionStatus } from "../../ai/goap/ActionStatus"
import { GoapAction } from "../../ai/goap/GoapAction"
import { VGameObject } from "../../base/VGameObject"
import { BackPackComponent } from "../BackPackComponent"
import { Environment } from "../Environment"
import { IronRockComponent } from "../IronRockComponent"
import { Labourer } from "../labourers/Labourer"
import { ToolComponent } from "../ToolComponent"

export class MineOreAction extends GoapAction {
    private mined: boolean = false

    private startTime: number = 0
    private miningDuration: number = 2 // seconds;

    public constructor() {
        super()
        this.addPrecondition(ActionStatus.HasTool, true) // we need a tool to do this
        this.addPrecondition(ActionStatus.HasOre, false) // if we have ore we don't want more
        this.addEffect(ActionStatus.HasOre, true)
    }

    public reset(): void {
        this.mined = false
        this.startTime = 0
    }

    public isDone(): boolean {
        return this.mined
    }

    public requiresInRange(): boolean {
        return true // yes we need to be near a rock
    }

    public checkProceduralPrecondition(agent: cc.Node): boolean {
        //TODO: find the nearest rock that we can mine
        let rocks: IronRockComponent[] = Environment.rockComps
        let closest: IronRockComponent = null
        let closestDist: number = 0
        let vg = agent.getComponent(VGameObject)
        for (let rock of rocks) {
            if (closest == null) {
                // first one, so choose it for now
                closest = rock
                closestDist = rock.distanceSquare(vg)
            } else {
                // is this one closer than the last?
                let dist: number = rock.distanceSquare(vg)
                if (dist < closestDist) {
                    // we found a closer one, use it
                    closest = rock
                    closestDist = dist
                }
            }
        }
        this.target = closest

        return closest != null
    }

    public perform(node: cc.Node): boolean {
        if (this.startTime == 0) this.startTime = TimeUtil.getTime()
        if (TimeUtil.getTime() - this.startTime > this.miningDuration) {
            // finished mining
            let labourer = node.getComponent(Labourer)
            let backpack: BackPackComponent = labourer.backpack
            backpack.numOre += 2
            this.mined = true
            let tool: ToolComponent = labourer.tool
            tool.use(0.5)
            if (tool.destroyed()) {
                //TODO:删除 Destroy(backpack.tool);
                labourer.destroyTool()
            }
        }
        return true
    }
}

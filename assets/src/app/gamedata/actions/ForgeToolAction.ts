import TimeUtil from "../../../utils/TimeUtil"
import { ActionStatus } from "../../ai/goap/ActionStatus"
import { GoapAction } from "../../ai/goap/GoapAction"
import { VGameObject } from "../../base/VGameObject"
import { BackPackComponent } from "../BackPackComponent"
import { Environment } from "../Environment"
import { ForgeComponent } from "../ForgeComponent"
import { Labourer } from "../labourers/Labourer"

export class ForgeToolAction extends GoapAction {
    private forged: boolean = false
    public target: ForgeComponent // where we forge tools

    private startTime: number = 0
    private forgeDuration: number = 2 // seconds
    public constructor() {
        super()
        this.addPrecondition(ActionStatus.HasOre, true)
        this.addEffect(ActionStatus.HasNewTools, true)
    }

    public reset() {
        this.forged = false
        this.startTime = 0
    }

    public isDone(): boolean {
        return this.forged
    }
    public requiresInRange(): boolean {
        return true
    }

    public checkProceduralPrecondition(go: cc.Node): boolean {
        //TODO: find the nearest forge
        let forges: ForgeComponent[] = Environment.forgeComps
        let closest: ForgeComponent = null
        let closestDist: number = 0
        let vg = go.getComponent(VGameObject)
        for (let forge of forges) {
            if (closest == null) {
                // first one, so choose it for now
                closest = forge
                closestDist = forge.distanceSquare(vg)
            } else {
                // is this one closer than the last?
                let dist: number = forge.distanceSquare(vg)
                if (dist < closestDist) {
                    // we found a closer one, use it
                    closest = forge
                    closestDist = dist
                }
            }
        }
        if (closest == null) return false

        this.target = closest

        return closest != null
    }

    public perform(node: cc.Node): boolean {
        if (this.startTime == 0) this.startTime = TimeUtil.getTime()
        if (TimeUtil.getTime() - this.startTime > this.forgeDuration) {
            let labourer = node.getComponent(Labourer)
            // finished forging a tool
            let backpack: BackPackComponent = labourer.backpack
            backpack.numOre = 0
            this.forged = true
        }
        return true
    }
}

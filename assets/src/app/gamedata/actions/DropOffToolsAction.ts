import { ActionStatus } from "../../ai/goap/ActionStatus"
import { GoapAction } from "../../ai/goap/GoapAction"
import { VGameObject } from "../../base/VGameObject"
import { Environment } from "../Environment"
import { Labourer } from "../labourers/Labourer"
import { SupplyPileComponent } from "../SupplyPileComponent"

export class DropOffToolsAction extends GoapAction {
    private droppedOffTools: boolean = false
    public target: SupplyPileComponent // where we drop off the  tools
    public constructor() {
        super()
        this.addPrecondition(ActionStatus.HasNewTools, true) // can't drop off tools if we don't already have some
        this.addEffect(ActionStatus.HasNewTools, false) // we now have no tools
        this.addEffect(ActionStatus.CollectTools, true) // we collected tools
    }

    public reset(): void {
        this.droppedOffTools = false
    }

    public isDone() {
        return this.droppedOffTools
    }

    public requiresInRange() {
        return true // yes we need to be near a supply pile so we can drop off the tools
    }

    public checkProceduralPrecondition(agent: cc.Node): boolean {
        //TODO: find the nearest supply pile that has spare tools
        let supplyPiles: SupplyPileComponent[] = Environment.supplyPileComps
        let closest: SupplyPileComponent = null
        let closestDist: number = 0
        let vg = agent.getComponent(VGameObject)
        for (let supply of supplyPiles) {
            if (closest == null) {
                // first one, so choose it for now
                closest = supply
                closestDist = supply.distanceSquare(vg)
            } else {
                // is this one closer than the last?
                let dist: number = supply.distanceSquare(vg)
                if (dist < closestDist) {
                    // we found a closer one, use it
                    closest = supply
                    closestDist = dist
                }
            }
        }
        if (closest == null) return false

        this.target = closest

        return closest != null
    }

    public perform(node: cc.Node): boolean {
        this.target.numTools += 2
        this.droppedOffTools = true
        //TODO play effect, change actor icon

        return true
    }
}

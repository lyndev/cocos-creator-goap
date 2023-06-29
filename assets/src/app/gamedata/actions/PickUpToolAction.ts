import { ActionStatus } from "../../ai/goap/ActionStatus"
import { GoapAction } from "../../ai/goap/GoapAction"
import { VGameObject } from "../../base/VGameObject"
import { Environment } from "../Environment"
import { Labourer } from "../labourers/Labourer"
import { SupplyPileComponent } from "../SupplyPileComponent"

export class PickUpToolAction extends GoapAction {
    private hasTool: boolean = false
    public target: SupplyPileComponent // where we get the tool from
    public constructor() {
        super()
        this.addPrecondition(ActionStatus.HasTool, false) // don't get a tool if we already have one
        this.addEffect(ActionStatus.HasTool, true) // we now have a tool
    }

    public reset(): void {
        this.hasTool = false
    }

    public isDone(): boolean {
        return this.hasTool
    }

    public requiresInRange(): boolean {
        return true
    }

    public checkProceduralPrecondition(agent: cc.Node): boolean {
        //TODO: find the nearest supply pile that has spare tools
        let supplyPiles: SupplyPileComponent[] = Environment.supplyPileComps
        let closest: SupplyPileComponent = null
        let closestDist: number = 0
        let vg = agent.getComponent(VGameObject)
        for (let supply of supplyPiles) {
            if (supply.numTools > 0) {
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
        }
        if (closest == null) return false

        this.target = closest

        return closest != null
    }

    public perform(node: cc.Node): boolean {
        if (this.target.numTools > 0) {
            this.target.numTools -= 1
            this.hasTool = true
            let labourer = node.getComponent(Labourer)
            // create the tool and add it to the agent
            labourer.pickUpTool()
            return true
        } else {
            // we got there but there was no tool available! Someone got there first. Cannot perform action
            return false
        }
    }
}

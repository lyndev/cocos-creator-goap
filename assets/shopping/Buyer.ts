import { GoapAction } from "../src/app/ai/goap/GoapAction"
import { GoapAgent } from "../src/app/ai/goap/GoapAgent"
import { IGoap } from "../src/app/ai/goap/IGoap"
import ActionBuyerLeave from "./ActionBuyerLeave"
import ActionBuyerPay from "./ActionBuyerPay"
import ActionBuyProduct from "./ActionBuyProduct"
import { Product } from "./GoodsShelf"

const { ccclass } = cc._decorator
@ccclass
export class Buyer extends GoapAgent implements IGoap {
    bMoving = false
    bMoveEnd = false
    needPrdoucts: Map<number, Product>

    public onLoad() {
        super.onLoad()
        this.needPrdoucts = new Map<number, Product>()
        let needProd = new Product()
        needProd.amount = 0
        needProd.cfgId = 1
        needProd.maxAmount = 20
        this.needPrdoucts.set(1, needProd)
        let goapAgent = this.getComponent(GoapAgent)
        goapAgent.setGoap(this)

        this.initAvaliableActions([ActionBuyProduct, ActionBuyerPay, ActionBuyerLeave])
    }

    public getProducts() {
        return this.needPrdoucts
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
        worldData.set("hasProduct", false)
        worldData.set("payed", false)
        worldData.set("leaved", false)
        return worldData
    }

    public createGoalState(): Map<string, Object> {
        let goal = new Map<string, Object>()
        goal.set("leaved", true)
        return goal
    }

    public planFailed(failedGoad: Map<string, Object>) {}

    public planFound(goal: Map<string, Object>, actions: GoapAction[]) {
        console.log("Plan found: ", GoapAgent.prettyPrintActionsQueue(actions))
    }

    public actionsFinished(): void {
        console.log("Actions completed")
    }

    public planAborted(aborter: GoapAction) {
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

    public addProduct(cfgId, v) {
        let product = this.needPrdoucts.get(cfgId)
        if (!product) {
            return
        }

        product.amount += v
        product.amount = Math.min(product.amount, product.maxAmount)

        console.log("buy prod", product.cfgId, product.amount)
    }

    public hasProductFull(cfgId): boolean {
        let product = this.needPrdoucts.get(cfgId)
        if (!product) {
            throw "unvalid product" + cfgId
        }
        return product.amount >= product.maxAmount
    }

    public updateBackPack() {}
}

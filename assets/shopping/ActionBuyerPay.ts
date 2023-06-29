import { GoapAction } from "../src/app/ai/goap/GoapAction"
import { Buyer } from "./Buyer"
import Checkstand from "./Checkstand"
import ContextShop from "./ContextShop"

export default class ActionBuyerPay extends GoapAction {
    protected bDone: boolean = false
    public target: Checkstand
    constructor() {
        super()
        this.addPrecondition("hasProduct", true)
        this.addPrecondition("payed", false)
        this.addEffect("payed", true)
    }

    reset(): void {
        this.bDone = false
    }

    isDone(): boolean {
        return this.bDone
    }

    checkProceduralPrecondition(go: cc.Node): boolean {
        if (ContextShop.checkstand) {
            this.target = ContextShop.checkstand
            return true
        }
        return false
    }

    perform(node: cc.Node): boolean {
        let buyer = node.getComponent(Buyer)
        let prods = buyer.getProducts()
        prods.forEach((prod, _) => {
            this.target.pay(prod)
        })
        this.bDone = true
        console.log("结算完成")
        return true
    }

    requiresInRange(): boolean {
        return true
    }
}

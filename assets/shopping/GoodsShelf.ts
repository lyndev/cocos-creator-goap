import { VGameObject } from "../src/app/base/VGameObject"

export class Product {
    cfgId: number | string
    amount: number
    maxAmount: number
}
const { ccclass, property } = cc._decorator
@ccclass
export default class GoodsShelf extends VGameObject {
    @property(cc.Integer)
    cfgId: number = 0

    product: Product
    interval: number = 3
    protected onLoad(): void {
        this.product = new Product()
        this.product.amount = 10
        this.product.maxAmount = 10
        this.product.cfgId = this.cfgId
    }

    public has(count) {
        return this.product.amount >= count
    }

    public cost(count) {
        if (this.has(count)) {
            this.product.amount -= count
        }
    }

    public add(count) {
        this.product.amount += count
        this.product.amount = Math.min(this.product.amount, this.product.maxAmount)
    }

    protected update(dt: number): void {
        this.interval -= dt
        if (this.interval <= 0) {
            this.interval = 3
            this.add(1)
        }
    }
}

import { VGameObject } from "../src/app/base/VGameObject"
import { Product } from "./GoodsShelf"
const { ccclass, property } = cc._decorator;
@ccclass
export default class Checkstand extends VGameObject {
    gold: number = 0
    protected onLoad(): void {}

    public pay(prod: Product) {
        if (!prod) {
            return
        }

        this.gold += prod.amount * 10
        prod.amount = 0
    }
}

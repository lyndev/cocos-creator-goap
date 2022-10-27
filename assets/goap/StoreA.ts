import { VGameObject } from '../src/app/base/VGameObject';

const { ccclass, property } = cc._decorator;
@ccclass
export default class StoreA extends VGameObject {
    public shopCount = 10
    public cost(v = 1) {
        this.shopCount -= v
    }

    public isHaveGoods() {
        return this.shopCount > 0
    }
}

import { VGameObject } from "../src/app/base/VGameObject"
const { ccclass, property } = cc._decorator
@ccclass
export default class BagPoint extends VGameObject {
    gold: number = 0
    protected onLoad(): void {}
}

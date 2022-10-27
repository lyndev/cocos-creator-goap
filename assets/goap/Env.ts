
import { Environment } from "../src/app/gamedata/Environment";
import Eating from "./Eating";
import Equip from "./Equip";
import Fire from "./Fire";
import Sleep from "./Sleep";
import StoreA from "./StoreA";
import Toilet from "./Toilet";

const { ccclass, property } = cc._decorator;

@ccclass
export default class Env extends cc.Component {
    @property(Toilet)
    toilet: Toilet = null

    @property(Fire)
    fire: Toilet = null

    @property(Equip)
    equip: Toilet = null

    @property(Eating)
    eating: Toilet = null

    @property(Sleep)
    sleep: Toilet = null

    @property(StoreA)
    storeA: StoreA = null

    start() {
        Environment.toiletTarget = this.toilet
        Environment.fireTarget = this.fire
        Environment.eatingTarget = this.eating
        Environment.equipTarget = this.equip
        Environment.sleepTarget = this.sleep
        Environment.storeA = this.storeA
    }
}

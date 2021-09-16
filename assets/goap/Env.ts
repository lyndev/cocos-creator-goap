
import { Environment } from "../src/app/gamedata/Environment";
import Eating from "./Eating";
import Equip from "./Equip";
import Fire from "./Fire";
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

    start() {
        Environment.toiletTarget = this.toilet
        Environment.fireTarget = this.fire
        Environment.eatingTarget = this.eating
        Environment.equipTarget = this.equip
    }
}

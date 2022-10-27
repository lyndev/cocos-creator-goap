import Eating from "../../../goap/Eating";
import Equip from "../../../goap/Equip";
import Fire from "../../../goap/Fire";
import Sleep from "../../../goap/Sleep";
import StoreA from "../../../goap/StoreA";
import Toilet from "../../../goap/Toilet";
import { ChoppingBlockComponent } from "./ChoppingBlockComponent";
import { ForgeComponent } from "./ForgeComponent";
import { IronRockComponent } from "./IronRockComponent";
import { SupplyPileComponent } from "./SupplyPileComponent";
import { TreeComponent } from "./TreeComponent";

export class Environment {
	public static supplyPileComps: SupplyPileComponent[];
	public static treeComps: TreeComponent[];
	public static rockComps: IronRockComponent[];
	public static forgeComps: ForgeComponent[];
	public static choppingBlockComps: ChoppingBlockComponent[];

	public static toiletTarget: Toilet;
	public static fireTarget: Fire;
	public static eatingTarget: Eating;
	public static equipTarget: Equip;
	public static sleepTarget: Sleep
	public static storeA: StoreA
}
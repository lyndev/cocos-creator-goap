import { ChoppingBlockComponent } from "./ChoppingBlockComponent";
import { ForgeComponent } from "./ForgeComponent";
import { IronRockComponent } from "./IronRockComponent";
import { SupplyPileComponent } from "./SupplyPileComponent";
import { TreeComponent } from "./TreeComponent";

/*
 * @Description: 环境
 * @Author: RannarYang 
 * @Date: 2018-10-28 11:18:38 
 * @Last Modified by: RannarYang
 * @Last Modified time: 2018-10-28 11:30:51
 */
export class Environment {
	public static supplyPileComps: SupplyPileComponent[];
	public static treeComps: TreeComponent[];
	public static rockComps: IronRockComponent[];
	public static forgeComps: ForgeComponent[];
	public static choppingBlockComps: ChoppingBlockComponent[];
}
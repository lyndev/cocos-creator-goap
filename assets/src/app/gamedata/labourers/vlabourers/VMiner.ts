import { Miner } from "../Miner";
import { VLabourer } from "./VLabourer";

/*
 * @Description: 矿工
 * @Author: RannarYang 
 * @Date: 2018-11-03 12:14:32 
 * @Last Modified by: RannarYang
 * @Last Modified time: 2018-11-03 12:17:13
 */
export class VMiner extends VLabourer {
	protected labourer: Miner;
	public constructor() {
		super();
	}
}
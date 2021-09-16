import { Blacksmith } from "../Blacksmith";
import { VLabourer } from "./VLabourer";

/*
 * @Description: 铁匠
 * @Author: RannarYang 
 * @Date: 2018-11-03 12:13:59 
 * @Last Modified by: RannarYang
 * @Last Modified time: 2018-11-03 12:16:30
 */
export class VBlacksmith extends VLabourer {
	protected labourer: Blacksmith;
	public constructor() {
		super();
	}
}
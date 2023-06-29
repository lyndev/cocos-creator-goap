import { Blacksmith } from "../Blacksmith";
import { VLabourer } from "./VLabourer";

/**
 * 铁匠
 */
export class VBlacksmith extends VLabourer {
	protected labourer: Blacksmith;
	public constructor() {
		super();
	}
}
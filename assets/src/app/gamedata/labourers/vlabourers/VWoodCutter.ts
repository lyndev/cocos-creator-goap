import { WoodCutter } from "../WoodCutter";
import { VLabourer } from "./VLabourer";

/**
 * 伐木工
 */
export class VWoodCutter extends VLabourer {
	protected labourer: WoodCutter;
	public constructor() {
		super();
	}
}
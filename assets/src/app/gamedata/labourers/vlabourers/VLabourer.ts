import { VGameObject } from "../../../base/VGameObject";
import { Labourer } from "../Labourer";

export abstract class VLabourer extends VGameObject {
	protected labourer: Labourer;
	public constructor() {
		super();
	}

}
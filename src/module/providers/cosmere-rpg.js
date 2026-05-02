import EstimationProvider from "./templates/Base.js";

export default class cosmereRpgEstimationProvider extends EstimationProvider {
	fraction(token) {
		const hp = token.actor.system.resources.hea;
		return hp.value / hp.max.value;
	}
}

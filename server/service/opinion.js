import { Opinion } from '../models/opinion.model.js';

export const postOpinion = async (id, opinion) => {
	let response = await Opinion.update(id, opinion);

	console.log(response);

	return response;
};
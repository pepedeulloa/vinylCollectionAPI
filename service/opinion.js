import { Opinion } from '../models/opinion.model.js';
import { ResourceNotFoundError, IdentifierNotValidError } from '../utils/errors.js';

export const postOpinion = async (id, opinion) => {

	const record_id = parseInt(id);

	if (isNaN(record_id)) throw new IdentifierNotValidError;

	let response = await Opinion.update(record_id, opinion);

	if (response.rowsAffected > 0) return;
	throw new ResourceNotFoundError();
};
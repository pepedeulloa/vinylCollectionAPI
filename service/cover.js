import { Cover } from '../models/cover.model.js';
import { IdentifierNotValidError, ResourceNotFoundError } from '../utils/errors.js';

export const getCoversById = async (id) => {

	const record_id = parseInt(id);

	if (isNaN(record_id)) throw new IdentifierNotValidError;

	let response = await Cover.findById(record_id);

	if (response.rows.length === 0 || !response) {
		throw new ResourceNotFoundError;
	}

	let urls = response.rows[0];

	return urls;
};
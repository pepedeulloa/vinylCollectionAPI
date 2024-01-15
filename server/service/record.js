import { Record } from '../models/record.model.js';
import { IdentifierNotValidError, ResourceNotFoundError } from '../utils/errors.js';

export const getAllRecords = async () => {
	const response = await Record.findAll();

	let records = response.rows.map((r) => {
		return {
			id: r[0],
			year: r[1],
			artist: r[2],
			title: r[3],
			url: r[4]
		};
	});

	return records;
};

export const getLandingData = async () => {
	const response = await Record.findAllWithCovers();

	let records = response.rows.map((r) => {
		return {
			id: r[0],
			title: r[1],
			artist: r[2],
			url: r[3]
		};
	});

	return records;
};

export const getRecord = async (id) => {

	const record_id = parseInt(id);

	if (isNaN(record_id)) throw new IdentifierNotValidError;

	let response = await Record.findById(record_id);

	if (response.rows.length === 0 || !response) {
		throw new ResourceNotFoundError;
	}

	let record = {
		id: response.rows[0][0],
		year: response.rows[0][1],
		artist: response.rows[0][2],
		title: response.rows[0][3],
		url: response.rows[0][4],
	};

	return record;
};

export const getCountRecords = async () => {
	const response = await Record.count();
	let count = response.rows[0][0];

	return count;
};
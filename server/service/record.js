import { Record } from '../models/record.model.js';

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

export const getRecord = async (id) => {
	let response = await Record.findById(parseInt(id));

	let record = {
		id: response.rows[0][0],
		year: response.rows[0][1],
		artist: response.rows[0][2],
		title: response.rows[0][3],
		url: response.rows[0][4],
	};

	return record;
};
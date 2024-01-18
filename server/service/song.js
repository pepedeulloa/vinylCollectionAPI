import { Song } from '../models/song.model.js';
import { IdentifierNotValidError, ResourceNotFoundError } from '../utils/errors.js';

const sortSongs = (a, b) => {
	let charPosA = a.pos.charCodeAt(0);
	let charPosB = b.pos.charCodeAt(0);

	let posA = charPosA + a.pos.charAt(1);
	let posB = charPosB + b.pos.charAt(1);

	return posA - posB;
};

export const getSongsById = async (id) => {
	const record_id = parseInt(id);

	if (isNaN(record_id)) throw new IdentifierNotValidError;

	let response = await Song.findById(record_id);

	if (response.rows.length === 0 || !response) {
		throw new ResourceNotFoundError;
	}

	let songs = response.rows;

	const sortedSongs = songs.sort(sortSongs);

	return sortedSongs;
};
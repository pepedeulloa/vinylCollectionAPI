import { db } from './index.js';

export class Tracklist {
	constructor(id, recordID) {
		this.recordID = recordID;
	}

	static all() {
		return db.execute('SELECT * FROM tracklist');
	}

	static async findById(id) {
		try {
			let query = await db.execute({
				sql: 'SELECT * FROM tracklist WHERE record_id = :id',
				args: { id }
			});
			let query_flat = query.flat();
			let tracklist = query_flat[0];
			return tracklist.id;
		} catch (error) {
			console.log(error);
		}
	}

	static create(tracklist) {
		return db.execute({ sql: 'INSERT INTO tracklist SET :tracklist', args: { tracklist } });
	}

	static update(tracklist) {
		const record_id = tracklist.record_id;
		return db.execute({
			sql: 'UPDATE tracklist SET :tracklist WHERE record_id = :record_id',
			args: {
				tracklist,
				record_id,
			}
		});
	}

	static delete(id) {
		return db.execute({ sql: 'DELETE FROM tracklist WHERE id = :id', args: { id } });
	}

	static deleteAll() {
		return db.execute('DELETE FROM tracklist;');
	}
}

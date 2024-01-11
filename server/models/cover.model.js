import { db } from './index.js';

export class Cover {
	constructor(id, url, recordID) {
		this.url = url;
		this.recordID = recordID;
	}

	static all() {
		return db.execute('SELECT * FROM cover');
	}

	static async findById(id) {
		try {
			let query = await db.execute({
				sql: 'SELECT * FROM cover WHERE record_id = :id',
				args: { id },
			});
			let query_flat = query.flat();
			let cover = query_flat[0];
			return cover.id;
		} catch (error) {
			console.log(error);
		}
	}

	static create(cover) {
		return db.execute({ sql: 'INSERT INTO cover SET :cover', args: { cover } });
	}

	static update(cover) {
		const id = cover.id;
		return db.execute({ sql: 'UPDATE cover SET :cover WHERE id = :id', args: { cover, id } });
	}

	static delete(id) {
		return db.execute({ sql: 'DELETE FROM cover WHERE id = :id', args: { id } });
	}
	static deleteAll() {
		return db.execute('DELETE FROM cover');
	}
}

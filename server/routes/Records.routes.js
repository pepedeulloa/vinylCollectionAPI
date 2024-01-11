import express from 'express';
import { getAllRecords, getRecord } from '../service/record.js';

const recordsRouter = express.Router();

recordsRouter.get('/', async (req, res) => {
	const records = await getAllRecords();

	res.status(200).json(records);
});

recordsRouter.get('/:id', async (req, res) => {
	const record = await getRecord(req.params.id);
	res.status(200).json(record);
});

recordsRouter.post('/:id/opinion', async (req, res) => {
	res.status(200).json({ msg: 'ok' });
});

export { recordsRouter };
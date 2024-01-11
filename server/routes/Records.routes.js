import express from 'express';
import { Record } from '../models/record.model.js';

const recordsRouter = express.Router();

recordsRouter.get('/', async (req, res) => {
	const records = await Record.findAll();

	res.send(records);
});

recordsRouter.post('/:id/opinion', async (req, res) => {
	res.status(200).json({ msg: 'ok' });
});

export { recordsRouter };
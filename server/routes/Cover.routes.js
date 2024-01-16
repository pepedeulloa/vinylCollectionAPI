import express from 'express';
import { getCoversById } from '../service/cover.js';

const coversRouter = express.Router();

coversRouter.get('/:id', async (req, res, next) => {
	try {
		const covers = await getCoversById(req.params.id);
		res.status(200).json(covers);
	} catch (error) {
		next(error);
	}
});

export { coversRouter };
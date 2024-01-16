import express from 'express';
import { getCoversById } from '../service/cover.js';

const coversRouter = express.Router();

/**
	* @swagger
	* tags:
	*   name: Covers
	*   description: API for managing records collection
	* /api/covers/{id}:
	*   get:
	*     summary: Retrieve the covers of a record by ID
	*     tags: [Covers]
	*     parameters:
	*       - in: path
	*         name: id
	*         required: true
	*         schema:
	*           type: integer
	*         description: ID of the record of the covers to retrieve.
	*     responses:
	*       '200':
	*         description: Successful response
	*         content:
	*           application/json:
	*             example:
	*               message: All covers of a record.
	*       '500':
	*         description: Server error
	*         content:
	*           application/json:
	*             example:
	*               error: Some server error
	*/

coversRouter.get('/:id', async (req, res, next) => {
	try {
		const covers = await getCoversById(req.params.id);
		res.status(200).json(covers);
	} catch (error) {
		next(error);
	}
});

export { coversRouter };
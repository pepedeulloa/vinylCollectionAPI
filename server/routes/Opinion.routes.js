import express from 'express';
import { postOpinion } from '../service/opinion.js';

const opinionsRouter = express.Router();

/**
	* @swagger
	* tags:
	*   name: Opinions
	*   description: API for managing records and opinions
	* /api/opinion/{id}:
	*   post:
	*     summary: Add an opinion for a record.
	*     tags: [Opinions]
	*     parameters:
	*       - in: path
	*         name: id
	*         required: true
	*         schema:
	*           type: integer
	*         description: ID of the record to which an opinion will be added.
	*     responses:
	*       '200':
	*         description: Successful response.
	*         content:
	*           application/json:
	*             example:
	*               message: Opinion added successfully.
	*       '400':
	*         description: Bad request. The provided identifier is not valid or the data is invalid.
	*         content:
	*           application/json:
	*             example:
	*               error: Invalid identifier or data.
	*       '404':
	*         description: Resource not found.
	*         content:
	*           application/json:
	*             example:
	*               error: Resource not found.
	*       '500':
	*         description: Some server error
	*/

opinionsRouter.put('/:id', async (req, res, next) => {
	try {
		await postOpinion(req.params.id, req.body.opinion);
		res.status(200).json({ msg: 'Opinion updated succesfully.' });
	} catch (error) {
		next(error);
	}
});

export { opinionsRouter };
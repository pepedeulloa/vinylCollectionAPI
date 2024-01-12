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
	*       '500':
	*         description: Server error.
	*         content:
	*           application/json:
	*             example:
	*               error: Some server error
	*/

opinionsRouter.post('api/opinion/:id', async (req, res) => {
	const newOpinion = req.body;

	try {
		const result = await postOpinion(req.params.id, newOpinion);

		console.log(result);
		res.status(200).json({ msg: 'Opinion updated succesfully.' });
	} catch (error) {
		console.log(error);
		res.status(400).json({ msg: 'Bad request.' });
	}

});

export { opinionsRouter };
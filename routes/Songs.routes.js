import express from 'express';
import { getSongsById } from '../service/song.js';

const songsRouter = express.Router();

/**
	* @swagger
	* tags:
	*   name: Songs
	*   description: API for managing records collection
	* /api/songs/{id}:
	*   get:
	*     summary: Retrieve all the songs of a record by ID
	*     tags: [Songs]
	*     parameters:
	*       - in: path
	*         name: id
	*         required: true
	*         schema:
	*           type: integer
	*         description: ID of the record of the songs to retrieve.
	*     responses:
	*       '200':
	*         description: Successful response
	*         content:
	*           application/json:
	*             example:
	*               message: All songs of a record.
	*       '500':
	*         description: Server error
	*         content:
	*           application/json:
	*             example:
	*               error: Some server error
	*/

songsRouter.get('/:id', async (req, res, next) => {
	try {
		const songs = await getSongsById(req.params.id);
		res.status(200).json(songs);
	} catch (error) {
		next(error);
	}
});

export { songsRouter };
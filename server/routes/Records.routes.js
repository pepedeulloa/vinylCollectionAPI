import express from 'express';
import { getAllRecords, getRecord } from '../service/record.js';

const recordsRouter = express.Router();

/**
	* @swagger
	* tags:
	*   name: Records
	*   description: The records collection managing API
	* /api/records/:
	*   get:
	*     summary: Get all records in the database
	*     tags: [Records]
	*     responses:
	*       200:
	*         description: All records.
	*         content:
	*           application/json:
	*             All records in the database
	*       500:
	*         description: Some server error
	*
	*/
recordsRouter.get('/', async (req, res) => {
	const records = await getAllRecords();

	res.status(200).json(records);
});

/**
	* @swagger
	* tags:
	*   name: Records
	*   description: API for managing records collection
	* /api/records/{id}:
	*   get:
	*     summary: Retrieve a record by ID
	*     tags: [Records]
	*     parameters:
	*       - in: path
	*         name: id
	*         required: true
	*         schema:
	*           type: integer
	*         description: ID of the record to retrieve.
	*     responses:
	*       '200':
	*         description: Successful response
	*         content:
	*           application/json:
	*             example:
	*               message: All records in the database
	*       '500':
	*         description: Server error
	*         content:
	*           application/json:
	*             example:
	*               error: Some server error
	*/

recordsRouter.get('/:id', async (req, res) => {
	const record = await getRecord(req.params.id);
	res.status(200).json(record);
});

export { recordsRouter };
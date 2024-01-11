import express from 'express';
import dotenv from 'dotenv';
import process from 'process';

import { recordsRouter } from './routes/Records.routes.js';

dotenv.config();

const app = express();

app.use('/api/records', recordsRouter);

app.use('/', (_req, res) => {
	res.send('<h1>Benvidx a API da miña colección de vinilos</h1>');
});

const PORT = process.env.PORT;



app.listen(PORT, () => {
	console.log(`Servizo correndo na dirección http://127.0.0.1:${PORT}`);
});

import express from 'express';
import path from 'path';
import cors from 'cors';
import dotenv from 'dotenv';
import process from 'process';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

import { swaggerDoc } from './middlewares/swagger.js';
import { recordsRouter } from './routes/Records.routes.js';
import { opinionsRouter } from './routes/Opinion.routes.js';
import { coversRouter } from './routes/Cover.routes.js';
import { songsRouter } from './routes/Songs.routes.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// middlewares
import { unknownEndpoint } from './middlewares/unknownEndpoint.js';
import { errorHandler } from './middlewares/errorHandler.js';

dotenv.config();

const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(cors());

app.disable('verbose errors');

swaggerDoc(app);
app.use('/api/ctl',(req, res) => {
	let date = new Date();
	console.log(date.toString() + " - ctl req - " + req.ip);
	res.status(200).send();
})
app.use('/api/records', recordsRouter);
app.use('/api/opinion', opinionsRouter);
app.use('/api/covers', coversRouter);
app.use('/api/songs', songsRouter);
app.use('/', (_req, res) => {
	res.sendFile(path.join(__dirname, '/public/index.html'));
});

app.use(errorHandler);
app.use(unknownEndpoint);

const PORT = process.env.PORT || 9900;

app.listen(PORT, () => {
	console.log(`Servizo correndo na dirección http://127.0.0.1:${PORT}`);
	console.log(`Consulta a documentación en http://127.0.0.1:${PORT}/docs/`);
});

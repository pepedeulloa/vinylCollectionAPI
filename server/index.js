import express from 'express';
import dotenv from 'dotenv';
import process from 'process';

import { swaggerDoc } from './middlewares/swagger.js';
import { recordsRouter } from './routes/Records.routes.js';
import { opinionsRouter } from './routes/Opinion.routes.js';
import { coversRouter } from './routes/Cover.routes.js';


// middlewares
import { unknownEndpoint } from './middlewares/unknownEndpoint.js';
import { errorHandler } from './middlewares/errorHandler.js';

dotenv.config();

const app = express();

app.use(express.json());


app.disable('verbose errors');

swaggerDoc(app);
app.use('/api/records', recordsRouter);
app.use('/api/opinion', opinionsRouter);
app.use('/api/covers', coversRouter);

app.use('/', (_req, res) => {
	res.send('<h1>Benvidx a API da miña colección de vinilos</h1>');
});

app.use(errorHandler);
app.use(unknownEndpoint);

const PORT = process.env.PORT || 9900;

app.listen(PORT, () => {
	console.log(`Servizo correndo na dirección http://127.0.0.1:${PORT}`);
	console.log(`Consulta a documentación en http://127.0.0.1:${PORT}/docs/`);
});

import express from 'express';
import dotenv from 'dotenv';
import process from 'process';

import { swaggerDoc } from './middlewares/swagger.js';
import { recordsRouter } from './routes/Records.routes.js';

dotenv.config();

const app = express();

swaggerDoc(app);
app.use('/api/records', recordsRouter);

app.use('/', (_req, res) => {
	res.send('<h1>Benvidx a API da miña colección de vinilos</h1>');
});

const PORT = process.env.PORT || 9900;

app.listen(PORT, () => {
	console.log(`Servizo correndo na dirección http://127.0.0.1:${PORT}`);
	console.log(`Consulta a documentación en http://127.0.0.1:${PORT}/docs/`);
});

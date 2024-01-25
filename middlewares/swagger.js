import swaggerJSDoc from 'swagger-jsdoc';
import { serve, setup } from 'swagger-ui-express';

const options = {
	definition: {
		openapi: '3.0.0',
		info: {
			title: 'Records Collection API',
			version: '0.0.1',
			description: 'Using swagger for my records collection API',
		},
	},
	apis: ['./routes/*.js'], // Ruta a tus archivos que contienen las rutas
};

const specs = swaggerJSDoc(options);

export const swaggerDoc = (app) => app.use('/docs', serve, setup(specs));

import dotenv from 'dotenv';
import { createClient } from '@libsql/client';

import process from 'process';

dotenv.config();

export const db = createClient({
	url: process.env.DB_URL,
	authToken: process.env.DB_TOKEN,
});


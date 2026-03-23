import { drizzle } from 'drizzle-orm/better-sqlite3';
import Database from 'better-sqlite3';
import { schema } from '@/types/schemas/db';

const sqlite = new Database('./data.db');
export const db = drizzle(sqlite, { schema });
import { PUBLIC_POCKETBASE_URL } from '$env/static/public';
import { customAlphabet } from 'nanoid';
import PocketBase from 'pocketbase';
export const pb = new PocketBase(PUBLIC_POCKETBASE_URL);
export const uniqueId = customAlphabet('1234567890abcdef', 10);

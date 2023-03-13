import { PUBLIC_POCKETBASE_URL } from '$env/static/public';
import { customAlphabet } from 'nanoid';
import PocketBase from 'pocketbase';
export const pb = new PocketBase(PUBLIC_POCKETBASE_URL);
export const Lengths = {
  password: { min: 6, max: 32 }
};

export const uniqueId = customAlphabet('1234567890abcdefghijk');

export const isFulfilled = <T>(p: PromiseSettledResult<T>): p is PromiseFulfilledResult<T> => p.status === 'fulfilled';
export const isRejected = <T>(p: PromiseSettledResult<T>): p is PromiseRejectedResult => p.status === 'rejected';

export type IconName = 'home' | 'account' | 'hamburger' | 'logout' | 'login' | 'account-plus-outline' | 'view-dashboard-variant-outline';

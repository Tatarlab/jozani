import { getFirebaseCallable } from '../../entities/firebase';

export const createChallenge = getFirebaseCallable('createChallenge');

export const getChallenge = getFirebaseCallable('getChallenge');

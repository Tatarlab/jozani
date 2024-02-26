/* eslint-disable max-len */
import { initializeApp } from 'firebase-admin/app';
// import { setGlobalOptions } from 'firebase-functions/v2/options';

initializeApp();

// setGlobalOptions({
//   // region: 'asia-east1',
//   maxInstances: 10,
// });

export * from './features';

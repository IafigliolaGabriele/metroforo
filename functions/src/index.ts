import * as functions from 'firebase-functions';
import { initializeApp } from 'firebase-admin';
initializeApp();
const universal = require(`${process.cwd()}/dist/server`).app;
export const ssr = functions.https.onRequest(universal);
import { environment as envProd } from 'environments/environment.prod';
import { environment as envDev } from 'environments/environment';

let host;
let pathRoot;
let reintentos;
let tokenAuthUsername;
let tokenAuthPassword;
let tokenName;

// revisamos si estamos corriendo en producción on en desarrollo
if(envDev.production) {
    host = envProd.HOST;
    pathRoot = envProd.PATH_ROOT;
    reintentos = envProd.REINTENTOS;
    tokenAuthUsername = envProd.TOKEN_AUTH_USERNAME;
    tokenAuthPassword = envProd.TOKEN_AUTH_PASSWORD;
    tokenName = envProd.TOKEN_NAME;
} else {
    host = envDev.HOST;
    pathRoot = envDev.PATH_ROOT;
    reintentos = envDev.REINTENTOS;
    tokenAuthUsername = envDev.TOKEN_AUTH_USERNAME;
    tokenAuthPassword = envDev.TOKEN_AUTH_PASSWORD;
    tokenName = envDev.TOKEN_NAME;
}

export const HOST = host;
export const PATH_ROOT = pathRoot;
export const REINTENTOS = reintentos;
export const TOKEN_AUTH_USERNAME = tokenAuthUsername;
export const TOKEN_AUTH_PASSWORD = tokenAuthPassword;
export const TOKEN_NAME = tokenName;

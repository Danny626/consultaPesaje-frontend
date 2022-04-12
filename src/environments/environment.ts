// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  HOST: 'http://localhost:8080/consultaPesaje-backend',
  PATH_ROOT: '/consultaPesaje',
  REINTENTOS: 3,
  TOKEN_AUTH_USERNAME: 'consultaPesaje',
  TOKEN_AUTH_PASSWORD: '${TOKEN_AUTH_PASSWORD}',
  TOKEN_NAME: 'access_token'
};

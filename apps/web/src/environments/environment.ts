// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  api: 'https://v2.api.goal.ge/api/',
  storage: '//storage.goal.ge',
  storage_old: '//storage.goal.ge/uploads/',
  storage_video: '//storage.setantamedia.ge/',
  storageurlResizerPoster: '//storage.goal.ge/size/timthumb.php?src=/uploads/posts/',
  domain: 'https://goal.ge',
  livescore_refresh_seconds: 60,
  match_refresh_seconds: 60,
  port: 4000,
  alternate: 'https://nodem.goal.ge'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.

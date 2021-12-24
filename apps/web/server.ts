import 'zone.js/dist/zone-node';

import { ngExpressEngine } from '@nguniversal/express-engine';
import * as express from 'express';
import { join } from 'path';

import { AppServerModule } from './src/main.server';
import { APP_BASE_HREF } from '@angular/common';
import { existsSync } from 'fs';
import * as compression from 'compression';
import * as domino from 'domino';
import * as fs from 'fs';
import 'localstorage-polyfill'
import { environment } from './src/environments/environment';
import * as helmet from 'helmet';
import * as useragent from 'express-useragent';

// The Express app is exported so that it can be used by serverless Functions.
export function app(): express.Express {
  const server = express();
  let distFolder;
  if (environment.production) {
    distFolder = join(process.cwd(), 'wwwroot');
  }
  else {
    distFolder = join(process.cwd(), 'dist/web/browser');
  }
  const indexHtml = existsSync(join(distFolder, 'index.original.html')) ? 'index.original.html' : 'index';

  // Compress all HTTP responses
  server.use(compression());

  // Helmet
  server.use(helmet.dnsPrefetchControl());

  let template;
  if (environment.production) {
    template = fs.readFileSync(join(__dirname, '.', 'wwwroot', 'index.html')).toString();
  }
  else {
    template = fs.readFileSync(join(__dirname, '.', '../browser', 'index.html')).toString();
  }

  const win: any = domino.createWindow(template);
  global['window'] = win;
  global['document'] = win.document;
  global['localStorage'] = localStorage;

  server.engine('html', (_, options: any, callback) => {
    let engine = ngExpressEngine({
      bootstrap: AppServerModule,
      providers: [
        { provide: 'request', useFactory: () => options.req, deps: [] },
      ]
    });
    engine(_, options, callback);
  });

  server.set('view engine', 'html');
  server.set('views', distFolder);

  // Example Express Rest API endpoints
  server.get('/api/**', (req, res) => {
    //console.log(req.query);
  });
  // Serve static files from /browser
  server.get('*.*', express.static(distFolder, {
    maxAge: '1y'
  }));

  // All regular routes use the Universal engine
  server.get('*', (req, res) => {
    const source = req.headers['user-agent'];
    const ua = useragent.parse(source);
    if (ua.isMobile) {
      res.redirect(302, environment.alternate + req.originalUrl);
    }
    else {
      res.render(indexHtml, { req, providers: [{ provide: APP_BASE_HREF, useValue: req.baseUrl }] });
    }
  });

  return server;
}

function run(): void {

  // Start up the Node server
  const server = app();
  server.listen(environment.port, '127.0.0.1', () => {
    console.log(`Node Express server listening on http://localhost:${environment.port}`);
  });
}

// Webpack will replace 'require' with '__webpack_require__'
// '__non_webpack_require__' is a proxy to Node 'require'
// The below code is to ensure that the server is run only when not requiring the bundle.
declare const __non_webpack_require__: NodeRequire;
const mainModule = __non_webpack_require__.main;
const moduleFilename = mainModule && mainModule.filename || '';
if (moduleFilename === __filename || moduleFilename.includes('iisnode')) {
  run();
}

export * from './src/main.server';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app.module';
import './global.scss';
// import './assets/creation-drawer-icons/circle-generic-icon.svg'
// require('./assets/creation-drawer-icons/circle-generic-icon.svg');

declare let window:any;
declare let Office:any;

// Office.initialize = function () {
// 	platformBrowserDynamic().bootstrapModule(AppModule);
// };
platformBrowserDynamic().bootstrapModule(AppModule);

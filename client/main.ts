import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app.module';
import './global.scss';

declare let window:any;
declare let Office:any;

Office.initialize = function () {
	platformBrowserDynamic().bootstrapModule(AppModule);
};
// platformBrowserDynamic().bootstrapModule(AppModule);

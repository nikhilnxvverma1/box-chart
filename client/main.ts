import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app.module';
import './public/sass/my-styles.scss';

platformBrowserDynamic().bootstrapModule(AppModule);

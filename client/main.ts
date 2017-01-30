import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app.module';
import './workspace.scss';

declare let window:any;
declare let Office:any;
if (window.hasOwnProperty('Office')){
        // Application-specific initialization code goes into a function that is
        // assigned to the Office.initialize event and runs after the Office.js initializes.
        // Bootstrapping of the AppModule must come AFTER Office has initialized.
		Office.initialize = (reason:any) => {
                platformBrowserDynamic().bootstrapModule(AppModule);
        }
}else{
        platformBrowserDynamic().bootstrapModule(AppModule);
}
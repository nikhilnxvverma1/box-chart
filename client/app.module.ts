import { NgModule, CUSTOM_ELEMENTS_SCHEMA }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent }  from './app.component';
import { LoginComponent }  from './login.component';
import { SignupComponent }  from './signup.component';
import { DocumentListComponent }  from './document-list.component';
import { DocumentComponent }  from './document.component';

const MyRoutes=RouterModule.forRoot([
    {path:'',component:LoginComponent},
    {path:'signup',component:SignupComponent},
    {path:'all-docs',component:DocumentListComponent},
    {path:'all-docs/document',component:DocumentComponent},
]);

@NgModule({
    imports:      [ 
        BrowserModule,
        MyRoutes
     ],
    declarations: [
         AppComponent,
         LoginComponent,
         SignupComponent,
         DocumentListComponent,
         DocumentComponent,
         ],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }

import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { APP_BASE_HREF } from '@angular/common';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MainComponent } from './components/app.main.component';
import { AccountListItemComponent } from './components/app.accountListItemComponent';
import { NotFoundComponent } from "./components/app.notFoundComponent";
import { CallbackDirective } from "./directives/app.callback.directive";

import { DataService } from './services/data.service';
import { SortPipe } from "./Pipes/app.sortPipe";

const appRoutes: Routes = [
    {path:'', component:MainComponent},
    {path:'**', component:NotFoundComponent}
  ];

@NgModule({
    declarations: [
        SortPipe,
        AppComponent,
        MainComponent,
        AccountListItemComponent,
        NotFoundComponent,
        CallbackDirective
    ],
    imports: [
        BrowserModule,
        HttpModule,
        FormsModule,
        RouterModule.forRoot(appRoutes)
    ],
    providers: [
        DataService,
        { provide: APP_BASE_HREF, useValue: '/' }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }

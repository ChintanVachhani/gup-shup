import {RouterModule, Routes} from "@angular/router";
import {MessagesComponent} from "./messages/messages.component";
import {AuthenticationComponent} from "./authentication/authentication.component";

const APP_ROUTES: Routes = [
    {path: '', redirectTo: '/messages', pathMatch: 'full'},
    {path: 'messages', component: MessagesComponent},
    {path: 'authentication', component: AuthenticationComponent, loadChildren: './authentication/authentication.module#AuthenticationModule'} //loadChildren value used for lazy loading
];

export const CustomRouterModule = RouterModule.forRoot(APP_ROUTES);
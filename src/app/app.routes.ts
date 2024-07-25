import { Routes } from '@angular/router';
import { PrivatePolicyComponent } from './about/private-policy/private-policy.component';
import { WelcomeComponent } from './home/welcome/welcome.component';

export const routes: Routes = [
    { path: 'privatepolicy', component: PrivatePolicyComponent},
    { path: '', redirectTo: 'Welcome', pathMatch: 'full'},
    { path: '**', component: WelcomeComponent}
];

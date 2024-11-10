import { Routes } from '@angular/router';
import { PrivatePolicyComponent } from './about/private-policy/private-policy.component';
import { WelcomeComponent } from './home/welcome/welcome.component';
import { ProductsComponent } from './products/products.component'; 
import { ProductDetailComponent } from './products/product-detail.component';

export const routes: Routes = [
    { path: 'privatepolicy', component: PrivatePolicyComponent},
    { path: 'Product', component: ProductsComponent},    
    { path: 'Product/:id', component: ProductDetailComponent},
    { path: '', redirectTo: 'Welcome', pathMatch: 'full'},
    { path: '**', component: WelcomeComponent}
];

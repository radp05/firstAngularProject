import { Routes, CanActivate } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthService } from './services/auth.service'
import { CartComponent } from './cart/cart.component';
import { DetailsComponent } from './details/details.component';






export const APP_ROUTES: Routes = [{
    path: "",                             // http://localhost:4200
    redirectTo: "register",
    pathMatch: "full"
}, {
    path: "register",
    component: RegisterComponent,

},
{
    path: "dashboard",
    component: DashboardComponent,
    canActivate: [AuthService]

},
{
    path: "cart",
    component: CartComponent,
    canActivate: [AuthService]

},
{
    path: "details",
    component: DetailsComponent,
    canActivate: [AuthService]
}

]

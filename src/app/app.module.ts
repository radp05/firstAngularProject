import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { ReactiveFormsModule } from "@angular/forms"
import { APP_ROUTES } from './app.routes';
import { AppComponent } from './app.component';
import { AgGridModule } from '@ag-grid-community/angular';

import { RegisterComponent } from './register/register.component';

import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CartComponent } from './cart/cart.component';
import { DetailsComponent } from './details/details.component';
import { QuantityRendererComponent } from './quantity-renderer/quantity-renderer.component';





//declarations array is for your Components, Pipes, Directives
@NgModule({
  declarations: [
    AppComponent,
  
    RegisterComponent,

    HeaderComponent,

    DashboardComponent,

    CartComponent,

    DetailsComponent,

    QuantityRendererComponent
 
    
   
  ],
  //imports array is for importing modules such as BrowserModule, FormsModule, HttpModule
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(APP_ROUTES),
    HttpClientModule,
    AgGridModule.withComponents([QuantityRendererComponent])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

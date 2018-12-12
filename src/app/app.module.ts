
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { CalcComponent } from './calc/calc.component';
import { FormsModule }   from '@angular/forms';
import { CustomerComponent } from './customer/customer.component';
import { ValidateComponent } from './validate/validate.component';
import { JumbotronComponent } from './bootstrap/jumbotron/jumbotron.component';
import { TableComponent } from './bootstrap/table/table.component';
import { ModalComponent } from './bootstrap/modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    CalcComponent,
    CustomerComponent,
    ValidateComponent,
    JumbotronComponent,
    TableComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { 
    constructor() {

    }
}

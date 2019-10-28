import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { InvestmentDetailsComponent } from './investment-details/investment-details.component';
import { AddInvestmentComponent } from './add-investment/add-investment.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { AddIncomeComponent } from './add-income/add-income.component';
import { IncomeDetailsComponent } from './income-details/income-details.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    InvestmentDetailsComponent,
    AddInvestmentComponent,
    LoginFormComponent,
    SignupFormComponent,
    AddIncomeComponent,
    IncomeDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

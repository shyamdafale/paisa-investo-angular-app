import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AddInvestmentComponent } from "./add-investment/add-investment.component";
import { InvestmentDetailsComponent } from "./investment-details/investment-details.component";
import { LoginFormComponent } from "./login-form/login-form.component";
import { SignupFormComponent } from "./signup-form/signup-form.component";
import { AddIncomeComponent } from "./add-income/add-income.component";
import { IncomeDetailsComponent } from "./income-details/income-details.component";

const routes: Routes = [
  { path: "add-investment", component: AddInvestmentComponent },
  { path: "add-income", component: AddIncomeComponent },
  { path: "investment-details", component: InvestmentDetailsComponent },
  { path: "income-details", component: IncomeDetailsComponent },
  { path: "login-form", component: LoginFormComponent },
  { path: "signup-form", component: SignupFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { InvestmentServiceService } from "../services/investment-service.service";
import { InvestmentClass } from "../classes/investment-class";
import { Income } from "../classes/income";
import { IncomeService } from "../services/income.service";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"]
})
export class NavbarComponent implements OnInit {
  constructor(
    private investmentService: InvestmentServiceService,
    private incomeService: IncomeService,
    private router: Router
  ) {}

  ngOnInit() {}

  newInvestment() {
    let investment = new InvestmentClass();
    this.investmentService.setter(investment);
    this.router.navigate(["/add-investment"]);
  }

  newIncome() {
    let income = new Income();
    this.incomeService.setter(income);
    this.router.navigate(["/add-income"]);
  }
}

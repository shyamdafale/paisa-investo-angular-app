import { Component, OnInit } from "@angular/core";
import { InvestmentServiceService } from "../services/investment-service.service";
import { Router } from "@angular/router";
import { Investment } from "../interfaces/investment";

@Component({
  selector: "app-investment-details",
  templateUrl: "./investment-details.component.html",
  styleUrls: ["./investment-details.component.css"]
})
export class InvestmentDetailsComponent implements OnInit {
  investmentList: Investment[] = [];
  isListAvailable: boolean = true;

  constructor(
    private investmentService: InvestmentServiceService,
    private router: Router
  ) {
    this.investmentService = investmentService;
    this.router = router;
  }

  ngOnInit() {
    this.investmentService.getInvestmentsList().subscribe(
      data => {
        console.log(data);
        this.investmentList = data as Investment[];
        this.checkIncomeListAvailability();
      },
      error => {
        console.log(error);
        console.log("Investment List is empty. Error in fetching the list.");
        this.isListAvailable = false;
      }
    );
  }

  deleteInvestment(investment) {
    this.investmentService.deleteInvestment(investment.investmentId).subscribe(
      data => {
        0;
        this.investmentList.splice(this.investmentList.indexOf(investment), 1);
        this.checkIncomeListAvailability();
      },
      error => {
        console.log("Error in deleting the investment" + error);
      }
    );
  }

  checkIncomeListAvailability() {
    if (this.investmentList.length == 0) {
      console.log("Investment List is empty. Please add investment first.");
      this.isListAvailable = false;
    }
  }

  updateInvestment(investment) {
    this.investmentService.setter(investment);
    this.router.navigate(["/add-investment"]);
  }
}

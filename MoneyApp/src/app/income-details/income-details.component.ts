import { Component, OnInit } from "@angular/core";
import { Income } from "../classes/income";
import { IncomeService } from "../services/income.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-income-details",
  templateUrl: "./income-details.component.html",
  styleUrls: ["./income-details.component.css"]
})
export class IncomeDetailsComponent implements OnInit {
  incomeList: Income[] = [];
  isListAvailable: boolean = true;
  sumOfIncome: number = 0;

  constructor(private incomeService: IncomeService, private router: Router) {
    this.incomeService = incomeService;
    this.router = router;
  }

  ngOnInit() {
    this.incomeService.getIncomesList().subscribe(
      data => {
        console.log(data);
        this.incomeList = data as Income[];
        this.checkIncomeListAvailability();
      },
      error => {
        console.log(error);
        console.log("Income List is empty. Error in fetching the list.");
        this.isListAvailable = false;
      }
    );
  }

  deleteIncome(income) {
    this.incomeService.deleteIncome(income.incomeId).subscribe(
      data => {
        0;
        this.incomeList.splice(this.incomeList.indexOf(income), 1);
        this.checkIncomeListAvailability();
      },
      error => {
        console.log("Error in deleting the income" + error);
      }
    );
  }

  updateIncome(income) {
    this.incomeService.setter(income);
    this.router.navigate(["/add-income"]);
  }

  getSumOfIncome(): number {
    let sum = 0;
    for (let i = 0; i < this.incomeList.length; i++) {
      sum += Number(this.incomeList[i].incomeAmount);
    }
    return sum;
  }

  checkIncomeListAvailability() {
    if (this.incomeList.length == 0) {
      console.log("Income List is empty. Please add income first.");
      this.isListAvailable = false;
    }
    this.sumOfIncome = this.getSumOfIncome();
  }
}

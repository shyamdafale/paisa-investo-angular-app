import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Income } from "../classes/income";
import { IncomeService } from "../services/income.service";

@Component({
  selector: "app-add-income",
  templateUrl: "./add-income.component.html",
  styleUrls: ["./add-income.component.css"]
})
export class AddIncomeComponent implements OnInit {
  income: Income = new Income();
  submitted = true;

  constructor(private incomeService: IncomeService, private router: Router) {
    this.incomeService = incomeService;
  }

  ngOnInit() {}

  newIncomes(): void {
    this.submitted = false;
    this.income = new Income();
  }

  save() {
    this.incomeService
      .createIncomes(this.income)
      .subscribe(data => console.log(data), error => console.log(error));
    this.income = new Income();

    if (this.income != null) {
      this.router.navigate(["/income-details"]);
    }
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }
}

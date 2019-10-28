import { Component, OnInit } from '@angular/core';
import { InvestmentDetailsComponent } from '../investment-details/investment-details.component';
import { InvestmentClass } from '../classes/investment-class';
import { InvestmentServiceService } from '../services/investment-service.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-add-investment',
  templateUrl: './add-investment.component.html',
  styleUrls: ['./add-investment.component.css']
})
export class AddInvestmentComponent implements OnInit {

   investmentTypes = ['Fixed Deposite', 'RD','MF', 'LIC'];

  // investmentModel = new InvestmentClass(1, 'SBI Mutual Fund', this.investmentTypes[0], 5000.00);



  
  investment: InvestmentClass = new InvestmentClass();
  submitted = false;
  

  constructor(private investmentService :InvestmentServiceService, private router: Router) { 
    this.investmentService=investmentService;
   }

   ngOnInit() {

    
  }

  newInvestments(): void {
    this.submitted = false;
    this.investment = new InvestmentClass();
  }

  save() {
    this.investmentService.createInvestments(this.investment)
      .subscribe(data => console.log(data) 
      , error => console.log(error));  
    this.investment = new InvestmentClass();

    if (this.investment != null){
      this.router.navigate(['/investment-details']);
    }
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }
}

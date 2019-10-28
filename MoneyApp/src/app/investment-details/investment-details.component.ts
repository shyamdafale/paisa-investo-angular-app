import { Component, OnInit } from '@angular/core';
import { InvestmentServiceService } from '../services/investment-service.service';
import { InvestmentClass } from '../classes/investment-class';
import { Router } from '@angular/router';
import { Investment } from '../interfaces/investment';

@Component({
  selector: 'app-investment-details',
  templateUrl: './investment-details.component.html',
  styleUrls: ['./investment-details.component.css']
})
export class InvestmentDetailsComponent implements OnInit {

  investmentList: Investment[] = [];
  

  constructor(private investmentService: InvestmentServiceService, private router: Router) {

    this.investmentService = investmentService;
    this.router = router;

   }

  ngOnInit() {
    this.investmentService.getInvestmentsList()
    .subscribe(data  => { console.log(data);
    this.investmentList = data as Investment[];
    }
    , error => console.log(error));  
  //this.investment = new InvestmentClass();

  // if (this.investment != null){
  //   this.router.navigate(['/investment-details']);
  // }
  }

}

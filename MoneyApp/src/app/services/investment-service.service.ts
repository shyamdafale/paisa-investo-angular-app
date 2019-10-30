import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

import { AppSettings } from "../../../proxy.config";
import { InvestmentClass } from "../classes/investment-class";
@Injectable({
  providedIn: "root"
})
export class InvestmentServiceService {
  private baseUrl = "v1/add-investment";
  private deleteUrl = "v1/delete-investment";
  private updateUrl = "v1/update-investment";
  private baseUrlList = "v1/show-investments";

  private investment: InvestmentClass;

  constructor(private http: HttpClient) {}

  showInvestments(id: number): Observable<Object> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createInvestments(investment: Object): Observable<Object> {
    return this.http.post(
      `${AppSettings.FOLDER_ENDPOINT}/${this.baseUrl}`,
      investment
    );
  }

  updateInvestment(investmentId: number, investment: any): Observable<Object> {
    return this.http.put(
      `${AppSettings.FOLDER_ENDPOINT}/${this.updateUrl}`,
      investment
    );
  }

  deleteInvestment(investmentId: number): Observable<any> {
    return this.http.delete(
      `${AppSettings.FOLDER_ENDPOINT}/${this.deleteUrl}/${investmentId}`,
      {
        responseType: "text"
      }
    );
  }

  getInvestmentsList(): Observable<any> {
    return this.http.get(`${AppSettings.FOLDER_ENDPOINT}/${this.baseUrlList}`);
  }

  setter(investment: InvestmentClass) {
    this.investment = investment;
  }

  getter() {
    return this.investment;
  }
}

import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { AppSettings } from "proxy.config";
import { Income } from "../classes/income";

@Injectable({
  providedIn: "root"
})
export class IncomeService {
  private baseUrl = "v1/add-income";
  private deleteUrl = "v1/delete-income";
  private updateUrl = "v1/update-income";
  private baseUrlList = "v1/show-incomes";
  private income: Income;

  constructor(private http: HttpClient) {}

  showIncomes(id: number): Observable<Object> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createIncomes(income: Object): Observable<Object> {
    return this.http.post(
      `${AppSettings.FOLDER_ENDPOINT}/${this.baseUrl}`,
      income
    );
  }

  updateIncome(id: number, value: any): Observable<Object> {
    return this.http.put(
      `${AppSettings.FOLDER_ENDPOINT}/${this.updateUrl}`,
      value
    );
  }

  deleteIncome(incomeId: number): Observable<any> {
    return this.http.delete(
      `${AppSettings.FOLDER_ENDPOINT}/${this.deleteUrl}/${incomeId}`,
      { responseType: "text" }
    );
  }

  getIncomesList(): Observable<any> {
    return this.http.get(`${AppSettings.FOLDER_ENDPOINT}/${this.baseUrlList}`);
  }

  setter(income: Income) {
    this.income = income;
  }

  getter() {
    return this.income;
  }
}

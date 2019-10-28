import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { AppSettings } from "proxy.config";

@Injectable({
  providedIn: "root"
})
export class IncomeService {
  private baseUrl = "v1/add-income";
  private baseUrlList = "v1/show-incomes";

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

  updateIncomes(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteIncomes(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: "text" });
  }

  getIncomesList(): Observable<any> {
    return this.http.get(`${AppSettings.FOLDER_ENDPOINT}/${this.baseUrlList}`);
  }
}

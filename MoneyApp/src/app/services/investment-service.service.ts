import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

import { AppSettings } from "../../../proxy.config";
@Injectable({
  providedIn: "root"
})
export class InvestmentServiceService {
  private baseUrl = "v1/add-investment";
  private baseUrlList = "v1/show-investments";

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

  updateInvestments(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteInvestments(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: "text" });
  }

  getInvestmentsList(): Observable<any> {
    return this.http.get(`${AppSettings.FOLDER_ENDPOINT}/${this.baseUrlList}`);
  }
}

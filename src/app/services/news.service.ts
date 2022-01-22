import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { environment } from "../../environments/environment";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

const apiUrl = environment.API_URL;
const apiKey = environment.API_KEY;

@Injectable({
  providedIn: "root",
})
export class NewsService {
  currentArticle: any;

  constructor(private http: HttpClient) {}

  getData(url: string): Observable<any> {
    try {
      return this.http
        .get(`${apiUrl}/${url}&apiKey=${apiKey}`)
        .pipe(map((res) => res["articles"]));
    } catch (error) {
      console.log("An error occured while fetching data: ", error);
    }
  }
}

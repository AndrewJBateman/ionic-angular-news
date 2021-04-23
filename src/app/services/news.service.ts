import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { environment } from "../../environments/environment";
import { Observable, throwError } from "rxjs";
import { catchError, take } from "rxjs/operators";

const apiUrl = environment.API_URL;
const apiKey = environment.API_KEY;

@Injectable({
  providedIn: "root",
})
export class NewsService {
  currentArticle: any;

  constructor(private http: HttpClient) {}

  getData(url: string): Observable<any> {
    const articleData = this.http.get(`${apiUrl}/${url}&apiKey=${apiKey}`).pipe(
      take(1),
      catchError((err) => {
        return throwError(
          "There was a problem fetching data from the news API, error: ",
          err
        );
      })
    );
    console.log("article Data: ", articleData);
    return articleData;
  }
}

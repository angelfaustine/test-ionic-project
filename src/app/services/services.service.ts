import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { CardModel } from '../pages/card/card.model';
import { catchError, tap, map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  apiUrl = 'https://api.clashroyale.com/v1';
  token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6ImJjMjhhNmVjLWZjYWItNDJmYS1iNzI2LWYzNzY4ZTBhZDFhNCIsImlhdCI6MTYxNjA2OTc0Mywic3ViIjoiZGV2ZWxvcGVyLzM3ZmMzNzFlLTczYjctYTBjOC1hNDU3LWQ1ZDkyODg1Mzg2NCIsInNjb3BlcyI6WyJyb3lhbGUiXSwibGltaXRzIjpbeyJ0aWVyIjoiZGV2ZWxvcGVyL3NpbHZlciIsInR5cGUiOiJ0aHJvdHRsaW5nIn0seyJjaWRycyI6WyIxMzkuMTk1LjIxMS4xMiJdLCJ0eXBlIjoiY2xpZW50In1dfQ.3r69KdIr7me4c-N6b1-pht2eXNw9YK389GUDGbkFaVXAV9wmBz6YnQXgHPOldf6dawdtXy0DNaLafvhabVDl3A';
  authorization = 'Bearer ' + this.token;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      Authorization : this.authorization,
    })
  }
  constructor(private http: HttpClient) { }
  
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
      }
      return throwError('Something bad happened; please try again later.');
    }
    
    private extractData(res: Response) {
      let body = res;
      return body || { };
    }
    
    getCard():Observable<any>{
      const url =
        this.apiUrl + `/cards`;
        return this.http.get(url, this.httpOptions).pipe(
          map(this.extractData),
          catchError(this.handleError));
    }

}

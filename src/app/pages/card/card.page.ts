import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ServicesService } from '../../services/services.service';

import { CardModel } from './card.model';

const apiUrl = 'https://api.clashroyale.com/v1';
const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6ImJjMjhhNmVjLWZjYWItNDJmYS1iNzI2LWYzNzY4ZTBhZDFhNCIsImlhdCI6MTYxNjA2OTc0Mywic3ViIjoiZGV2ZWxvcGVyLzM3ZmMzNzFlLTczYjctYTBjOC1hNDU3LWQ1ZDkyODg1Mzg2NCIsInNjb3BlcyI6WyJyb3lhbGUiXSwibGltaXRzIjpbeyJ0aWVyIjoiZGV2ZWxvcGVyL3NpbHZlciIsInR5cGUiOiJ0aHJvdHRsaW5nIn0seyJjaWRycyI6WyIxMzkuMTk1LjIxMS4xMiJdLCJ0eXBlIjoiY2xpZW50In1dfQ.3r69KdIr7me4c-N6b1-pht2eXNw9YK389GUDGbkFaVXAV9wmBz6YnQXgHPOldf6dawdtXy0DNaLafvhabVDl3A';
const authorization = 'Bearer ' + token;
const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      Authorization : authorization
    })
  };

@Component({
  selector: 'app-card',
  templateUrl: './card.page.html',
  styleUrls: ['./card.page.scss'],
})
export class cardPage implements OnInit {
  cardModel: CardModel
  cards: any
  results: Observable<any>
  constructor(
    private service: ServicesService,
    private route: ActivatedRoute,
    private http: HttpClient
    ) { }

  ngOnInit() {
    console.log(this.service.httpOptions);
    this.fetchData();
    // this.getCard();
  }

  // getCard(){
  //   const url = apiUrl + `/cards`;
  //   console.log(url);
  //   console.log(httpOptions);
  //   this.http.get(url, {
  //     headers: {
  //       'Content-Type': 'application/json',
  //       'Accept': 'application/json',
  //       Authorization : authorization,
  //       'Access-Control-Allow-Origin': "*"
  //     }}).subscribe(data => {
  //     console.log(data);
  //   });
  // }


  async fetchData() {
    await this.service.getCard()
    .subscribe(res => {
      console.log(res);
      this.cards = res.results;
      console.log(this.cards);
    }, err => {
      console.log(err);
    });

}

}

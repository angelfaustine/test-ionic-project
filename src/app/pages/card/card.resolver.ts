import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
// import { DataStore } from '../../shell/data-store';
import { CardModel } from './card.model';
import { ServicesService } from '../../services/services.service';

@Injectable()
export class CardResolver implements Resolve<any> {
  constructor(private service: ServicesService) { 
  }

  resolve() {
   return this.service.getCard();
  }
}

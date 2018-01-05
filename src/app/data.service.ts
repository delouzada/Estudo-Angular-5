import { Injectable } from '@angular/core';

import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class DataService {

  private aspiracoes = new BehaviorSubject<any>(['comprar uma casa', 'comprar um carro', 'comprar um avião']);
  aspiracao = this.aspiracoes.asObservable();

  constructor() { }

  modificaAspiracao(aspiracao){
    this.aspiracoes.next(aspiracao);
  }

}

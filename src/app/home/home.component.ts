import { Component, OnInit } from '@angular/core';
import {trigger, style, transition, animate, keyframes,query, stagger} from '@angular/animations';

import { DataService } from '../data.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations:[
    trigger('aspiracoes',[
      transition('* => *',[
        query(':enter', style({ opacity: 0 }),{optional: true}),
        
        query(':enter', stagger( '300ms', [animate('.6s ease-in', keyframes([
          style({opacity:0, transform: 'translateY(-75%)', offset:0}),
          style({opacity:.5, transform: 'translateY(35px)', offset:.3}),
          style({opacity:1, transform: 'translateY(0)', offset:1}),
          ]))] ),{optional: true}),

          query(':leave', stagger( '300ms', [animate('.6s ease-in', keyframes([
            style({opacity:1, transform: 'translateY(0)', offset:0}),
            style({opacity:.5, transform: 'translateY(35px)', offset:.3}),
            style({opacity:0, transform: 'translateY(75%)', offset:1}),
            ]))] ),{optional: true})
        

        
        
      ])
    ])
  ]
})

export class HomeComponent implements OnInit {

  itemCount: number;
  

  btnText: string = 'Adicionar um item';
  minhaPrimeiraAspiracao: string = 'Minhas  aspiração'; 
  aspiracoes= [];

  constructor(private _data:DataService) { }

  ngOnInit() {
   this._data.aspiracao.subscribe( res => this.aspiracoes = res);
   
   this._data.modificaAspiracao(this.aspiracoes);
   this.itemCount = this.aspiracoes.length; //Corrigi a exibição de quantidades de itens ao serem carregados
   
  }


  

  adicionarItem(){

    this.aspiracoes.push(this.minhaPrimeiraAspiracao);
    this.minhaPrimeiraAspiracao = '';
   this.itemCount = this.aspiracoes.length;
   this._data.modificaAspiracao(this.aspiracoes);
   

  }
  removeItem(i){
    
    this.aspiracoes.splice(i, 1);
    this._data.modificaAspiracao(this.aspiracoes);
    this.itemCount = this.aspiracoes.length; //Corrigi  a exibição dos itens que foram removidos

  }

}

import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import {Router} from '@angular/router';

import { DataService } from '../data.service';

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.scss']
})
export class SobreComponent implements OnInit {

   aspiracoes: any;

  constructor(private route: ActivatedRoute, private router: Router, private _data:DataService) {

    this.route.params.subscribe(res => console.log(res.id));


   }

  ngOnInit() {
  
    this._data.aspiracao.subscribe( res => this.aspiracoes = res);
  
  }

  EnviarParaPaginaHome(){
    this.router.navigate([''])
  }

}

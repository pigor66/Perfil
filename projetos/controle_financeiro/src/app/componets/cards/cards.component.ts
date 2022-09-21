import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {
  higorReceitas: any = []
  higorDespesas: any = []
  fernandaReceitas: any = []
  fernandaDespesas: any = []
  somaRecetasHigor: any = []
  somaDespesasHigor: any = []

  constructor(
    public http: HttpClient
  ) {
    this.higorDes();
    this.higorRec();
    this.fernandaRec();
    this.fernandaDes();
    this.rendimentoHigor();
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }




  // HIGOR
  higorRec() {
    this.http.get("http://localhost:3000/data/higor/receita").subscribe((data: any) => {
      this.higorReceitas = data.items;
    },
      () => {

      })
  }
  higorDes() {
    this.http.get("http://localhost:3000/data/higor/despesa").subscribe((data: any) => {
      this.higorDespesas = data.items;
    },
      () => {

      })
  }

  rendimentoHigor() {
    
    this.http.get("http://localhost:3000/data/higor/receitas").subscribe((data: any) => {
      this.somaRecetasHigor = data.items[0].receitas;
      var r = this.somaRecetasHigor
      console.log("receitas", this.somaRecetasHigor)
    },
      () => {

      })


      this.http.get("http://localhost:3000/data/higor/despesas").subscribe((data: any) => {
      this.somaDespesasHigor = data.items[0].despesas;
      console.log("despesas", this.somaRecetasHigor)
    },
      () => {

      })


    console.log("Rendimento do mes",)
  }

  // FIM HIGOR

  // FERNANDA
  fernandaRec() {
    this.http.get("http://localhost:3000/data/fernanda/receita").subscribe((data: any) => {
      this.fernandaReceitas = data.items;
    },
      () => {

      })
  }
  fernandaDes() {
    this.http.get("http://localhost:3000/data/fernanda/despesa").subscribe((data: any) => {
      this.fernandaDespesas = data.items;
    },
      () => {

      })
  }
  // FIM FERNANDA

}
function rec() {
  throw new Error('Function not implemented.');
}


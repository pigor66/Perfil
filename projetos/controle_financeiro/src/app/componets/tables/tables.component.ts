import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss']
})
export class TablesComponent implements OnInit {
  dataInfo: any = []
  formData: any = {}

  constructor(
    public http: HttpClient
  ) {
    this.dataItens();
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  //pede a lista completa para o banco de dados
  dataItens() {
    this.http.get("http://localhost:3000/data").subscribe((data: any) => {
      this.dataInfo = data.items;
    },
      () => {

      })
  }

  //deleta as informações da linha no banco de dados
  delete(id: any) {
    this.http.delete("http://localhost:3000/data/delete/" + id).subscribe((data: any) => {
      this.dataItens()
    },
      () => {

      })
    console.log("Função para Deletar", id);

  }
  //salva/edita as informações que foram inseridas no formulario no banco de dados
  save() {
    if (!this.formData.id) {
      this.http.post("http://localhost:3000/data/new", this.formData).subscribe((data: any) => {
        this.dataItens();
        this.clear();
        alert("Informações salvas com sucesso")
      },
        () => {
          console.log("deu erro no post");

        })
    } else {

      this.http.put("http://localhost:3000/data/update/" + this.formData.id, this.formData).subscribe((data: any) => {
        this.dataItens();
        alert("Informações editadas com sucesso")
        },
        (error) => {
          console.log("deu erro no put", "http://localhost:3000/data/update/" + this.formData.id);
        })
    }
  }
  clear() {
    this.formData.usuario = ""
    this.formData.tipo = ""
    this.formData.valor = ""
    this.formData.destino = ""
    this.formData.origem = ""
    this.formData.mes = ""
    this.formData.ano = ""
  }
  editar(item: any) {
    this.formData = item;
    console.log(this.formData);
    
  }


};
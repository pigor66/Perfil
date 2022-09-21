import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {
  dataInfo: any = []
  formData: any = {}
  search: any = {}

  constructor(
    public http: HttpClient
  ) {
    this.dataItens();
    this.filter();  
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

  editar(item: any) {
    this.formData = item;
    console.log(this.formData);

  }
  filter() 
  {
    console.log(this.search);
    if (!this.search) {
      this.http.get("http://localhost:3000/data").subscribe((data: any) => {
        this.dataInfo = data.items;
      },
        () => {

        })
    }
    if (this.search.usuario) {
      this.http.get(`http://localhost:3000/filter/` + this.search.usuario).subscribe((data: any) => {
        this.dataInfo = data.items;
      },
        (e) => {
          console.log("Erro na requisição", e)

        })

    };
    if (this.search.tipo) {
      this.http.get(`http://localhost:3000/filters/` + this.search.tipo).subscribe((data: any) => {
        this.dataInfo = data.items;
      },
        (e) => {
          console.log("Erro na requisição", e)

        })
    };
    if (this.search.destino) {
      this.http.get(`http://localhost:3000/` + this.search.destino).subscribe((data: any) => {
        this.dataInfo = data.items;
        console.log(this.dataInfo);

      },
        (e) => {
          console.log("Erro na requisição", e)

        })
    };
    if (this.search.origem) {
      this.http.get(`http://localhost:3000/data/filters/` + this.search.origem).subscribe((data: any) => {
        this.dataInfo = data.items;
      },
        (e) => {
          console.log("Erro na requisição", e)

        })
    };
    if (this.search.mes && this.search.ano) {
      this.http.get(`http://localhost:3000/filter/` + this.search.mes + "/" + this.search.ano).subscribe((data: any) => {
        this.dataInfo = data.items;
      },
        (e) => {
          console.log("Erro na requisição", e)

        })

    };
  }
  clear() {
    this.search.usuario = ""
    this.search.tipo = ""
    this.search.valor = ""
    this.search.destino = ""
    this.search.origem = ""
    this.search.mes = ""
    this.search.ano = ""
  }
}
const mysql = require('promise-mysql')
var cors = require('cors');
const express = require('express')
const app = express()
const path = require('path')
const bodyParser = require('body-parser')


app.use(bodyParser.json())
app.use(cors())

function querydb(query) {
  return new Promise((resolve, reject) => {
    var connection;
    //colocar o nome do banco de dados nessa variavel
    var nomeBancoDeDados = "financial_controller";
    mysql.createConnection({
      host: "localhost",
      user: "node",
      password: "1234",
      database: nomeBancoDeDados
    }).then((conn) => {
      connection = conn;
      connection.query(query).then((res) => {
        resolve(res)
        connection.end();
      }).catch((error) => {
        console.error(error);
      });
    }).catch((error) => {
      console.error(error)
    });

  })
}

app.get('/data', function (req, res) {
  console.log();
  querydb(`SELECT * FROM infoTable`).then((data) => {
    let result = {
      items: data
    }
    res.send(result)
  })
    .catch(() => {

    })
})

app.post('/data/new', function (req, res) {
  querydb(`INSERT INTO financial_controller.infoTable (usuario, tipo, valor, mes, ano, destino, origem, obs) VALUES ('${req.body.usuario}', '${req.body.tipo}', '${req.body.valor}', '${req.body.mes}', '${req.body.ano}', '${req.body.destino}', '${req.body.origem}',${req.body.obs});
  `).then(() => { res.send(req.body) })
    .catch((e) => { console.log(e) })
})

app.put('/data/update/:id', function (req, res) {
  querydb(`UPDATE financial_controller.infoTable SET usuario = '${req.body.usuario}', tipo = '${req.body.tipo}', valor = '${req.body.valor}', mes = '${req.body.mes}', ano = '${req.body.ano}' , destino = '${req.body.destino}', origem = '${req.body.origem}', obs = '${req.body.obs}' WHERE (id = '${req.params.id}');
  `).then(() => { res.send(req.body) })
    .catch((e) => { console.log(e) })
})

app.delete('/data/delete/:id', function (req, res) {
  querydb(`DELETE FROM financial_controller.infoTable WHERE (id = '${req.params.id}');
  `).then(() => { res.send(req.body) })
    .catch((e) => { console.log(e) })
})

// HIGOR


app.get('/data/higor/despesas', function (req, res) {
  console.log();
  querydb(`select SUM(valor) As despesas FROM infoTable where (tipo = "Despesa" and usuario = "Higor");
  `).then((data) => {
    let result = {
      items: data
    }
    res.send(result)
  })
    .catch(() => {

    })
})
app.get('/data/higor/receitas', function (req, res) {
  console.log();
  querydb(`select SUM(valor) As receitas FROM infoTable where (tipo = "Receita" and usuario = "Higor");
  `).then((data) => {
    let result = {
      items: data
    }
    res.send(result)
  })
    .catch(() => {

    })
})




app.get('/data/higor/despesa', function (req, res) {
  console.log();
  querydb(`select SUM(valor) As valor from infoTable where (tipo = "Despesa" and usuario = "Higor");`).then((data) => {
    let result = {
      items: data
    }
    res.send(result)
  })
    .catch(() => {

    })
})

app.get('/data/higor/receita', function (req, res) {
  console.log();
  querydb(`select SUM(valor) AS valor from infoTable where (tipo = "Receita" and usuario = "Higor");`).then((data) => {
    let result = {
      items: data
    }
    res.send(result)
  })
    .catch(() => {

    })
})
// FIM HIGOR

// FERNANDA
app.get('/data/fernanda/despesa', function (req, res) {
  console.log();
  querydb(`select SUM(valor) As valor from infoTable where (tipo = "Despesa" and usuario = "Fernanda");`).then((data) => {
    let result = {
      items: data
    }
    res.send(result)
  })
    .catch(() => {

    })
})

app.get('/data/fernanda/receita', function (req, res) {
  console.log();
  querydb(`select SUM(valor) AS valor from infoTable where (tipo = "Receita" and usuario = "Fernanda");`).then((data) => {
    let result = {
      items: data
    }
    res.send(result)
  })
    .catch(() => {

    })
})
// FIM FERNANDA

// FILTROS

// usuario
app.get('/filter/:usuario', function (req, res) {
  console.log();
  querydb(`select * from infoTable where (usuario = '${req.params.usuario}');
  `).then((data) => {
    let result = {
      items: data
    }
    res.send(result)
  })
    .catch(() => {

    })
})

// tipo
app.get('/filters/:tipo', function (req, res) {
  console.log();
  querydb(`select * from infoTable where (tipo = '${req.params.tipo}');
  `).then((data) => {
    let result = {
      items: data
    }
    res.send(result)
  })
    .catch(() => {

    })
})

// destino
app.get('/:destino', function (req, res) {
  querydb(`select * from infoTable where (destino = '${req.params.destino}');
  `).then((data) => {
    let result = {
      items: data
    }
    res.send(result)
  })
    .catch(() => {

    })
})

// origem
app.get('/data/filters/:origem', function (req, res) {
  console.log();
  querydb(`select * from infoTable where (origem = '${req.params.origem}');
  `).then((data) => {
    let result = {
      items: data
    }
    res.send(result)
  })
    .catch(() => {

    })
})

// MES E ANO
app.get('/filter/:mes/:ano', function (req, res) {
  console.log();
  querydb(`select * from infoTable where (mes = '${req.params.mes}' and ano = '${req.params.ano}');
  `).then((data) => {
    let result = {
      items: data
    }
    res.send(result)
  })
    .catch(() => {

    })
})



// FIM FILTROS


// use it before all route definitions
app.use(cors({ origin: 'http://localhost:8888' }));

app.listen(3000)

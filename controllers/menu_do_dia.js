//const sf = require("./shared/functions.js")
// module.exports=function(app,pratos){

//     app.get('/',(req,res) => {
//     res.send(pratos);
//     })

//     devolver objeto na posição enviada pelo parâmetro
//     app.get('/devolve:id',(req,res) => {
//         if(req.params.id >= 0 && req.params.id <= pratos ){
//             res.send(pratos[req.params.id])
//         }else{
//             res.status(400).send('ERROR:')
//         }
//     })

//     adicionar um objeto ao array
//     app.post('/', (req,res) => {pratos.push(req.body.prato)
//         res.send(pratos)

//     })

//     atualiazar campos especifico dentro do array
//     app.patch('/update:id', (req,res) => {
//         if (req.params.id >=0 && req.params.id<=pratos.length ) {
//             pratos[req.params.id].update = req.body.update
//             res.send(pratos)
//         }
//         else {
//             res.status(400).send('Não consegiu dar update!')
//         }
//     })

//     atualizar todos os elementos
//     app.put('/dados:ip', (req,res) => {
//         if(req.params.id >= 0 && req.params.id<=pratos.length){
//             pratos[req.params.id] = req.body.dados
//             res.send(pratos)
//         }else{
//             res.status(400).send('Não existe este prato!')
//         }
//     })

//     Item no array dado pelo user
//     app.delete('/apagar:id', (req,res) => {
//         if(req.params.id >= 0 && req.params.id<=pratos.length){
//             pratos.length=req.params.id
//             res.send(pratos)
//             res.status(200)
//         }else{
//         res.status(400).send('Error: não foi apagado nenhum dado!')
//         }
//     })

//     apagar todos os itens do array
//     app.delete('/',(req,res) => {
//         pratos.length=[]
//         res.send(pratos)
//         res.status(200)
//     })
// }

var express = require("express");
var router = express.Router();
const pratos = require("../models/pratos")

router.get("/", (req, res) => {
  pratos.find({}).then((result) => {
      if(result != null){
        return res.status(200).send(result)
      }else{
        return res.status(400).send("Pedido sem sucesso!")
      }
    });
});

router.get("/:idprato", (req, res) => {
  const ID = parseInt(req.params.idprato);
  pratos.find({idprato: ID}).then((result) => {
      if(result != null){
        return res.status(200).send(result)
      }else{
        return res.status(400).send("Pedido sem sucesso!")
      }
    });
});


router.post('/', (req, res) => {
if (req.body != null) {
pratos.create(req.body).then((pratos) => {
return res.status(200).send(pratos);
}).catch((error) => {
return res.status(400).send(error.message);
})
}
return res.status(400);
})


router.patch('/:idprato', (req, res) => {
  const ID = parseInt(req.params.idprato);
if (req.body != null && req.params != null) {
pratos.updateOne({ idprato: ID}, req.body).then((pratos) => {
return res.status(200).send(pratos);
}).catch((error) => {
return res.status(400).send(error.message );
})
}
})


router.delete("/:idprato", (req, res) => {
  const id = parseInt(req.params.idprato);
  pratos.deleteOne({ idprato: id }).then((result) => {
    if(result !=null){
     return res.status(200).send(result);
    }else{
        return res.status(400).send(error.message);
    }
  });
});



module.exports = router;

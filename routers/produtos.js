const express = require('express')

const router = express.Router() //Pegando o router 

router.get('/', (req,res,next)=>{ //Criando rotas com os verbos  HTTP
    res.send({
        message:"Rota de produtos: Get"
    })
})



router.get('/:id_produto', (req, res, next) => {  
    // localhost:3003/produtos/id_produto é a url no qual estou direcionando o get | req.params.id_produto -> indica que, o parametro que passar
    //pela url  localhost:3003/produtos/parametrospassados será criado uma constante que será exibida no JSON junto a message. 
    //Params significa: todos os parametros passados como requisição. Já que tem: .id_produto, ele irá pegar todos os parametros passados na requisição após /produtos/
    //no caso, por exemplo: localhost:3003/produtos/iphone > o parametro id será iphone.
    const id = req.params.id_produto 
    res.send({
        message:"Rota de id: Ok!",
        id:id
        
    })
})


module.exports = router
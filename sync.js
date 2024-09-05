const conn = require('./db/conn')
const { Entrega, Fabricante, Produto } = require('./model/associacao')

async function syncDatabase(){
    try{
        await conn.sync({force: true})
        console.log('Tabelas criadas e Banco sincronizado!')
    }catch(err){
        console.error('Erro de conexão com o banco de dados',err)
    }finally{
        conn.close()
        console.log('Fechada a conexão com o banco de dados')
    }
}

syncDatabase()
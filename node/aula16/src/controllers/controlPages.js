function showFirstPage(req,res){
    req.session.usuario = {nome: 'Murilo', logado: true}
    res.render('index',{
        //titulo: 'Este Será o Titulo da Página',
        numeros: [1,2,3,4,5,6]
    });
}

module.exports = {showFirstPage};
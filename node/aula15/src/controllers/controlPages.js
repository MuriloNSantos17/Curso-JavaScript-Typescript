function showFirstPage(req,res){
    req.session.usuario = {nome: 'Murilo', logado: true}
    res.render('index');
}

module.exports = {showFirstPage};
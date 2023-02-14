

exports.checksCsrfError = (err,req,res,next)=>{
    if(err && 'EBADCSRFTOKEN' === err.code){
        return res.render('404')
    }
}
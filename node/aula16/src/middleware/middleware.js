module.exports = (req,res,next)=>{
    res.locals.umaVariavelLocal = 'Este é o valor da variável local'
    console.log();
    console.log('Middleware Global')   
    console.log()

    next();
}
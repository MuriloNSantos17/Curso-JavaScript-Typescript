module.exports = (req,res,next)=>{
    console.log();
    console.log('Middleware Global')   
    console.log()

    next();
}
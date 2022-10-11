const fs = require('fs').promises;


module.exports = (caminhoArquivo,dados) => {
    fs.writeFile(caminhoArquivo,dados,{
        flag: 'w',
        encoding: 'utf-8'
    });
}





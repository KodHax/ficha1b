var fs = require('fs')

//funcao para ler ficheiro
function lerMenu(caminho) {
    let caminho = './ficheiro_menu.txt'
    return new Promise(function (resolve, reject) {
    fs.readFile(caminho, 'utf8', function (err, data) {
    if (err) reject(err);
    if (data == "" || data == null) { resolve([]); return; }
    obj = JSON.parse(data);
    resolve(obj);
    });
    });
}  

// funcao para guardar dados no ficheiro 
function gravarMenu(caminho, data) {
    fs.writeFile(caminho, JSON.stringify(data), (err) => {
        caminho = " ficheiro_menu.txt"
        if (err != null) console.log(err);
        console.log("Successfully Written to File.");
    });
}

module.exports = 
{
    gravarMenu,
    lerMenu
}

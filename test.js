let fs = require('fs')
let filePath = __dirname + '/fortuna.txt'
let fileOut = __dirname + '/fortuna.json'
if ( !fs.existsSync(fileOut) ) {
    fs.writeFileSync(fileOut, '[]')
}
// leer el contenido del archivo txt 
let text = fs.readFileSync(filePath).toString('utf-8');

// crear array eliminando saltos

let textByLine = text.split("\n")

// volver a convertir a json (stringify)
content = JSON.stringify(textByLine)

// guardar la informacion actualizada en el archivo
fs.writeFileSync(fileOut, content)


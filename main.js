// Exercici 1
// Crea un array amb el teu nom on cada posició correspongui a una lletra.
// Fes un bucle que recorri aquest array i mostri per consola cadascuna de les lletres.

let array = ['E', 'D','U', 'A', 'R', 'D']
for(let i = 0; i < array.length; i++) {
    console.log(array[i]);
}

// Exercici 2
// Al bucle, si la lletra és una vocal imprimeix a la consola: ‘He trobat la VOCAL: __’. Sinó, imprimeix: ‘He trobat la CONSONTANT: __’.
// Si trobes un número, mostra per pantalla: ‘Els noms de persones no contenen el número: __’

let array2 = ['A', 'L', 'E', 'J', '3', 'A','N', '%', 'r', 'a', 'D', 'R', 'O']

array2 = array2.toString().toUpperCase().replace(/,/g, '')
let voc = 'AEIOU';
let cons = 'bcdfghjklmnñpqrstvwxyz';
cons = cons.toUpperCase()

for(let i = 0; i < array2.length; i++) {
    if(voc.indexOf(array2[i]) > -1) {
        console.log('He trobat la VOCAL: ' + array2[i]);
    } else if(!isNaN(array2[i])) {
        console.log('Els noms de persones no contenen el numero: ' + array2[i]);
    } else if(cons.indexOf(array2[i]) > -1) {
        console.log('He trobat la CONSONANT: ' + array2[i]);
    } else {
        console.log('No es una lletra ni un numero: ' + array2[i]);
    }
    }



// Exercici 3
// Emmagatzemar en un Map les lletres de l'array y el nombre de vegades que apareixen.

let array3 = ['A', 'L', 'E', 'J', 'A','N', 'D', 'R', 'O'];

let letras = {};
array3.map(function(i) { letras[i] = (letras[i]||0) + 1;});

console.log(letras);

// const cantidadLetras = array3.reduce((contadorLetras, letra) => {
//     contadorLetras[letra] = (contadorLetras[letra] || 0) + 1;
//     return contadorLetras;
// }, {});

// console.log(cantidadLetras);




// Exercici 4
// Crea una altra array amb el teu cognom on cada posició correspongui a una lletra.
// Fusiona els dos arrays en un. A més, afegeix una posició amb un espai buit entre la primera i la segona. És a dir, partim de 'array name i surname i al acabar l’execució només tindrem una que es dirà fullName.

let nom = ['A', 'L', 'E', 'J', 'A','N', 'D', 'R', 'O'];
let cognom = ['K', 'A', 'L', 'E']
nom.push(' ')
let fullName = nom.concat(cognom)
console.log(fullName);

// NIVELL 2

// Crea una funció que retorni un array amb tots els email (sense repetir) del següent text:

var str = 'Una dirección de correo electrónico es la dirección que utiliza para recibir y enviar correos electrónicos. Se muestra a los destinatarios de sus correos electrónicos para que sepan quién le envió un correo electrónico. Cada dirección de correo electrónico sólo se puede asignar una vez en todo el mundo y, por lo tanto, está disponible exclusivamente para usted. No puede cambiar las direcciones de correo electrónico, pero puede eliminarlas en cualquier momento. Una dirección de correo electrónico consiste en el signo @ (arroba), el nombre de usuario delante y el dominio detrás, por ejemplo, nombre-de-usuario@ionos.es: La parte del dominio depende del dominio bajo el cual se crea la dirección de correo electrónico: en nuestro ejemplo es ionos.es. Esta información varía de proveedor a proveedor, por lo que una parte del dominio también puede ser gmail.com o gmx.es si utiliza una dirección de correo electrónico de estos proveedores. Si ha registrado su propio dominio, por ejemplo, www.el-nombre-de-sus-sueños.es, las direcciones de correo electrónico que configura para el dominio lo tienen como parte del dominio (nombre-de-usuario@el-nombre-de-sus-sueños.es o nombre-de-usuario@el-nombre-de-sus-sueños.ES). El nombre de usuario es la parte de una dirección de correo electrónico que puede seleccionar libremente en la medida de lo posible. Puede, por ejemplo, utilizar su propio nombre o el nombre o departamento de una empresa. Si utiliza una dirección de correo electrónico con un proveedor de correo como gmail.com o gmx.es, es posible que la combinación con la parte del dominio deseada ya esté registrada. En este caso, deberá considerar alternativas para el nombre de usuario de su dirección de correo electrónico. Si utiliza su propio dominio, estas restricciones no se aplican porque sólo usted puede crear direcciones de correo electrónico que coincidan con su propio dominio. En resumen, nombre-de-usuario@ionos.es es un email'; 

function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
  }

let email = str.match(/([ña-zA-Z0-9._-]+@[ña-zA-Z0-9._-]+\.[ña-zA-Z0-9_-]+)/gi).filter(onlyUnique);
console.log(email);


// Nivell 3
// Crea una interfície gràfica amb botons que executi cadascun dels 5 exercicis anteriors.

document.getElementById('1').addEventListener('click', exercici1);

function exercici1() {
    let array = ['E', 'D','U', 'A', 'R', 'D']
for(let i = 0; i < array.length; i++) {
    console.log(array[i]);
}
}


document.getElementById('2').addEventListener('click', exercici2);
function exercici2() {
let array2 = ['A', 'L', 'E', 'J', '3', 'A','N', '%', 'r', 'a', 'D', 'R', 'O']
array2 = array2.toString().toUpperCase().replace(/,/g, '')
let voc = 'AEIOU';
let cons = 'bcdfghjklmnñpqrstvwxyz';
cons = cons.toUpperCase()

for(let i = 0; i < array2.length; i++) {
    if(voc.indexOf(array2[i]) > -1) {
        console.log('He trobat la VOCAL: ' + array2[i]);
    } else if(!isNaN(array2[i])) {
        console.log('Els noms de persones no contenen el numero: ' + array2[i]);
    } else if(cons.indexOf(array2[i]) > -1) {
        console.log('He trobat la CONSONANT: ' + array2[i]);
    } else {
        console.log('No es una lletra ni un numero: ' + array2[i]);
    }
    }
}


document.getElementById('3').addEventListener('click', exercici3);
function exercici3() {
let array3 = ['A', 'L', 'E', 'J', 'A','N', 'D', 'R', 'O'];
let letras = {};
array3.map(function(i) { letras[i] = (letras[i]||0) + 1;});

console.log(letras);
}

document.getElementById('4').addEventListener('click', exercici4);
function exercici4() {
let nom = ['A', 'L', 'E', 'J', 'A','N', 'D', 'R', 'O'];
let cognom = ['K', 'A', 'L', 'E']
nom.push(' ')
let fullName = nom.concat(cognom)
console.log(fullName);
}


document.getElementById('5').addEventListener('click', exercici5);
function exercici5() {
function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
  }

let email = str.match(/([ña-zA-Z0-9._-]+@[ña-zA-Z0-9._-]+\.[ña-zA-Z0-9_-]+)/gi).filter(onlyUnique);
console.log(email);
}

//Declara una variable cuyo nombre sea cadena y tenga el valor “Hola Mundo”.
let cadena = "Hola Mundo";

//Muestra por consola la longitud de la cadena.
console.log(cadena.length);

//Muestra por consola la cadena con todos sus caracteres en mayúsculas.
console.log(cadena.toUpperCase());

//Muestra por consola la cadena con todos sus caracteres en minúsculas.
console.log(cadena.toLowerCase());

//Muestra por consola la posición de la cadena en la que se encuentra la letra o.
console.log(cadena.indexOf("o"));

//Muestra por consola la posición de la cadena en la que se encuentra la cadena “Hola”.
console.log(cadena.indexOf("Hola"));

//Reemplaza la cadena “Mundo” por la cadena “Youtube” y muestra el resultado.
let nuevaCadena = cadena.replace("Mundo", "Youtube");
console.log(nuevaCadena);

//Extrae la segunda parte de la cadena y muéstrala por consola.
let cadena2 = cadena.substring(5);
console.log(cadena2);

//Comprueba si la cadena empieza por “h”.
console.log(cadena.startsWith("h"));

//Comprueba si la cadena empieza por “H”.
console.log(cadena.startsWith("H"));

//Muestra Utilizando por TEMPLATE consola la STRINGS letra JAVASCRIPT “r” declara 10 veces.
console.log(`Letra 'r' repetida 10 veces: ${"r".repeat(10)}`);

//3 variables con tu nombre, apellidos y edad y muéstralas por consola introduciéndolas dentro de una cadena.
let nombre = "Elias";
let apellidos = "Molina VAlido";
let edad = 20;
console.log(`Mi nombre es ${nombre} ${apellidos} y tengo ${edad} años.`);
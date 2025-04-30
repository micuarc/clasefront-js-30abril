document.writeln("<h1> Clase 2 Javascript </h1>");

// crear arreglo con 20 números pares

let arrayNum = [];
for(let i=1; i<=20; i++){

    arrayNum.push(i*2);
    console.log(i*2);
}
console.log(arrayNum);

// sumar items de un arreglo: edades de una familia
let edades = [21, 8, 5, 15, 44]
let suma = 0;
edades.forEach((edad) => {
    suma += edad
    console.log("Suma parcial: " + suma);
})
console.log("El total de las edades es: " + suma);

// Ejercicio: Mostrar el nombre y la nota del alumno con mayor nota

let alumno = ["Ana", "Carlos", "Javier", "Pablo", "Felipe"];
let notas = [6.7, 4.5, 5.5, 6.6, 7.0];

let notaMayor = 0;
notas.forEach((nota)=>{
    if (nota > notaMayor) {
        notaMayor = nota;
    }
})
console.log(notaMayor);

/*alumno.forEach((estudiante) => {
    if (notas.indexOf(notaMayor) == alumno.indexOf(estudiante)) {
        console.log(`El alumno ${estudiante} obtuvo la mejor calificación con un ${notaMayor}`);
    }
})

console.log("La posicion deberia ser 2 segun nosotros, la real es: " + notas.indexOf(5.5));*/



function corresponderEstudiante (estudiante) {
    if (notas.indexOf(notaMayor) == alumno.indexOf(estudiante)) {
        console.log(`El alumno ${estudiante} obtuvo la mejor calificación con un ${notaMayor}`);
    }
}

alumno.forEach(corresponderEstudiante);
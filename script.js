//Ingreso un numero y muestro a traves de consola todos los numeros pares e impares desde el 1 hasta el numero ingresado con el mensaje "es par" o "es impar"

let num = parseInt(prompt`Ingrese un numero entero`)

for (let i = 1; i <= num; i++){
    if (i%2 == 0) {
        console.log(`${i} - es par`)
    } else {
        console.log(`${i} - es impar`)
    }
}
// Convertidor de °C a °K

let gradoscelsius = Number(prompt("Introduce grados celsius, el valor a ingresar tiene que ser mayor que -273.15", 0))
let mensaje;
const ceroabs = -273.15

function verificar(numero) {

    gradoscelsius = numero

    if (!isNaN(gradoscelsius)) {
        if (gradoscelsius >=
            ceroabs) {
            mensaje = alert("El numero está dentro del rango");
        } else {
            while (gradoscelsius < ceroabs) {
                mensaje = alert("El numero está fuera de rango, el valor ingresado tiene que ser mayor que -273.15")
                gradoscelsius = Number(prompt("Introduce grados celsius, el valor a ingresar tiene que ser mayor que -273.15", 0))
            }
        }

    } else {
        mensaje = alert("Debes ingresar sólo números")
        gradoscelsius = Number(prompt("Introduce grados celsius , el valor a ingresar tiene que ser menor que -273.15", 0))
        verificar(gradoscelsius)
    }
}
verificar(gradoscelsius)

const kelvin = 273.15;
let gradoskelvin = gradoscelsius + kelvin
console.log("Grados Kelvin " + Number(gradoskelvin))

switch (true) {
    case gradoskelvin == 0:
        console.log("Llegaste al cero absoluto");
        break;
    case gradoskelvin > 1 && gradoskelvin < 273:
        console.log("El agua está congelada");
        break;
    case gradoskelvin > 273 && gradoskelvin < 373:
        console.log("El agua está líquida");
        break;
    default:
        console.log("El agua está en ebullición");

}
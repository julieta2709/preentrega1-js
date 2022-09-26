// Convertidor de °C a °K

let gradoscelsius = Number(prompt("Introduce grados celsius", 0))


function verificar(gradoscelsius) {

    if (!isNaN(gradoscelsius)) {
        gradoskelvin (gradoscelsius)

    } else {
        mensaje = alert("Debes ingresar sólo números")
        gradoscelsius = Number(prompt("Introduce grados celsius", 0))
        verificar (gradoscelsius)
    }
}


function gradoskelvin(gradoscelsius) {
    console.log("grados kelvin " + Number(gradoscelsius + 273.15))
}


verificar(gradoscelsius)

if (gradoscelsius < -273.15) {
    alert("el valor es menor al cero absoluto");
} else if (gradoscelsius > 100) {
    alert("el agua está en ebullición")
} else {
    alert("el agua está líquida")
}
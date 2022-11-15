// Alcancia Virtual

/**Funciones
 * Registra ingresos y egresos
 * Calcula el monto final
 */

let tarea = prompt("Bienvenido, ingresa el numero de la función que deseas realizar? \n 1.Ver tu saldo \n 2.Agregar ingresos \n 3.Retirar dinero \n 4.Salir")

let ahorro = 200
let ingreso
let egreso

while (tarea != "4") {

    switch (tarea) {
        case "1":
            alert("Tienes en tu alcancía " + ahorro)
            break

        case "2":
            ingreso = Number(prompt("¿Cuanto deseas ingresar?"))
            ahorro = Ingresos(ingreso, ahorro)

            alert("Ahora tiene: " + " " + ahorro)

            break

        case "3":
            egreso = Number(prompt("¿Cuanto dinero deseas retirar?"))
            ahorro = Egresos(egreso, ahorro)

            if (ahorro <= 0) {
                ahorro = ahorro * (-1)
                alert("No tienes suficiente dinero, te hace falta" + " " + ahorro)
            }

            else {
                alert(`Cuidadoo! Te quedan ${ahorro}`)
            }

            break
    }

    tarea = prompt("Deseas realizar otra tarea? \n 1.Ver tu saldo \n 2.Agregar ingresos \n 3.Retirar dinero \n 4.Salir")
}

alert("No te olvides ahorrar! Regresa pronto")


//funciones

function Ingresos(monto, ahorro) {
    return monto + ahorro;

}

function Egresos(monto, ahorro) {
    dif = ahorro - monto
    return dif
}
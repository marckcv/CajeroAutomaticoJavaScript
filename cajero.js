
let cuenta = [
{nombre:"Mali",saldo:200,password:"100" },
{nombre:"Gera", saldo:100,password:"200"},
{nombre:"Maui", saldo:900,password:"300"}
];

let cuentaSeleccionada;

function login() {
    let cuentaIndex = document.getElementById("cuenta").value;
    let password = document.getElementById("password").value;
    cuentaSeleccionada = cuenta[cuentaIndex];

    if (cuentaSeleccionada.password === password) {
        document.getElementById("login").style.display = "none";
        document.getElementById("menu").style.display = "block";
        document.getElementById("nombre").innerText = cuentaSeleccionada.nombre;
    } else {
        alert("Password incorrecto. Inténtalo nuevamente.");
    }
}
function consultarSaldo() {
    document.getElementById("resultado").innerText = "Saldo actual: $" + cuentaSeleccionada.saldo;
}

function ingresarMonto() {
    let monto = parseFloat(prompt("Ingresa el monto a depositar:"));
    if (cuentaSeleccionada.saldo + monto > 990) {
        alert("No puedes tener más de $990 en tu cuenta.");
    } else {
        cuentaSeleccionada.saldo += monto;
        document.getElementById("resultado").innerText = "Monto ingresado: $" + monto + ". Nuevo saldo: $" + cuentaSeleccionada.saldo;
    }
}

function retirarMonto() {
    let monto = parseFloat(prompt("Ingresa el monto a retirar:"));
    if (cuentaSeleccionada.saldo - monto < 10) {
        alert("No puedes tener menos de $10 en tu cuenta.");
    } else {
        cuentaSeleccionada.saldo -= monto;
        document.getElementById("resultado").innerText = "Monto retirado: $" + monto + ". Nuevo saldo: $" + cuentaSeleccionada.saldo;
    }
}

function logout() {
    document.getElementById("login").style.display = "block";
    document.getElementById("menu").style.display = "none";
    document.getElementById("password").value = "";
    document.getElementById("resultado").innerText = "";
}


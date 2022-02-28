// declaracion de variables
var cuentaCliente = true;
var bancoCliente = false;
var saldoCliente;
var cuentaDestino = true;
var bancoDestino = false;



var saldo = 1000000;
var saldoCliente = document.getElementById("moneyToSend");

var hora_transferencia = aleatorio(0,24);
var ownSection = document.getElementById("ownSection");
var sendButton = document.getElementById("sendButton");

var resetButton = document.getElementById("reload");
resetButton.addEventListener("click", reset);

function reset()
{
    location.reload()
}

sendButton.addEventListener("click", sendMoney);

// funcion para enviar el dinero 

function sendMoney()
{
    if(hora_transferencia >= 9 && hora_transferencia <= 12 || hora_transferencia >= 15 && hora_transferencia <= 20) 
    { 
         if(cuentaCliente && cuentaDestino)
         {
            if(bancoCliente && bancoDestino)
            {
                comision = 0;
                console.log(saldo);
            }
            else
            {
                comision = 100;
                saldo -= comision;
                console.log(saldo)
            }
            
            
           



         }
         else(console.log("Por favor verifique sus cuentas"))
    
    }
    else
    {
    console.log("Por favor venga a la hora!");
    }
}


// aqui se define el horario 

ownSection.innerHTML = "Son las " + hora_transferencia + " horas";


function aleatorio(min, maxi)
{
    var resultado;
    resultado = Math.floor(Math.random() * (maxi - min + 1)) + min
    return resultado;
}

dineroEntregado = []

class transaccion
{
    constructor(cantidad)
    {
        this.cantidad = cantidad;
        
    }
}
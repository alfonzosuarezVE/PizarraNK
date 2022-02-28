// declaracion de variables
var cuentaCliente = true;
var bancoCliente = false;
var saldoCliente;
var cuentaDestino = true;
var bancoDestino = true;

var saldo = 100000;

var hora_transferencia = aleatorio(0,24)
var ownSection = document.getElementById("ownSection");
var sendButton = document.getElementById("sendButton");

var resetButton = document.getElementById("reload");
resetButton.addEventListener("click", reset)

function reset()
{
    location.reload()
}

sendButton.addEventListener("click", sendMoney);

// funcion para enviar el dinero 

function sendMoney()
{
    console.log(hora_transferencia);
    if(hora_transferencia >= 9 && hora_transferencia <= 12 || hora_transferencia >= 15 && hora_transferencia <= 20) 
    {
        if(cuentaCliente == true && cuentaDestino == true)
        {
            if(bancoCliente == true && bancoDestino == true)
            {
                console.log("transaccion exitosa")
            }
            else if (bancoCliente || bancoDestino)
            {
                var comision = 100;
                if(saldo >= (saldo + comision))
                {
                    console.log("transaccion exitosa")
                }
                else
                {
                   alert("Saldo Insuficiente. Codigo 51")
                }
            }
            
            
        }
        else
        {
            console.log("alert");
        }
    
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
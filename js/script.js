function displayMessage(){
    compra = prompt("ingrese el monto a pagar: ")
    if (compra == 250){
        alert("compra exitosa")
    }
    else if(compra < 250){
        alert("te falta plata crack")
    }
    else if(compra > 250){
        alert("te pasaste de plata crack")
    }
}
function displayMessage2(){
    compra = prompt("ingrese el monto a pagar: ")
    if (compra == 150){
        alert("compra exitosa")
    }
    else if(compra < 150){
        alert("te falta plata crack")
    }
    else if(compra > 150){
        alert("te pasaste de plata crack")
    }
}

function displayMessage3(){
    compra = prompt("ingrese el monto a pagar: ")
    if (compra == 200){
        alert("compra exitosa")
    }
    else if(compra < 200){
        alert("te falta plata crack")
    }
    else if(compra > 200){
        alert("te pasaste de plata crack")
    }
}
function saludar(event) {
    // Evitamos que el enlace funcione inmediatamente para mostrar el saludo
    event.preventDefault();

    // Obtenemos el valor del input "Nombre"
    const nombre = document.getElementById('username').value;

    if (nombre) {
        // Mostramos el saludo
        alert('Hola, ' + nombre + '!');

        // Redirigimos a la otra página después del saludo
        window.location.href = document.getElementById('index.html').href;
    } else {
        alert('Por favor, ingresa tu nombre.');
    }
}

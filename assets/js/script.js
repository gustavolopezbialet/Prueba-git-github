// -----------------------------
// Muestra el reloj con la fecha  
// -----------------------------

function horaActual(){
    var objetivo = document.getElementById('fechayHoraActual');

    setInterval(function () {
        var fecha = new Date();

        var diasem1= fecha.getDay();
        var diasem = ["Domingo","Lunes","Martes","Miercoles","Jueves","Viernes","Sábado"]

        var dia = fecha.getDate();

        var mes1= fecha.getMonth();
        var mes = ["enero","febrero","marzo","abril","mayo","Junio","Julio","agosto","septiembre","octubre","noviembre","diciembre"]

        var ano = fecha.getFullYear();

        var hora = fecha.getHours();
        var min = fecha.getMinutes();
        var sec = fecha.getSeconds();

        var fechacompleta = "Hoy es "+diasem[diasem1]+" "+dia+" de "+mes[mes1]+" de "+ano+", y son las "+hora+" horas "+min+" minutos "+sec+" segundos";
        
        objetivo.innerHTML = fechacompleta;
    }, 1000);
}

horaActual()


// --------------------------------
// Cuenta Regresiva para fin de año  
// --------------------------------

var target_date = new Date("Jan 1, 2023").getTime();

var days, hours, minutes, seconds;

function cuentaRegresiva() {
    var countdown = document.getElementById("tiempoRestante");

    setInterval(function () {

        var current_date = new Date().getTime();

        var seconds_left = (target_date - current_date) / 1000;

        days = parseInt(seconds_left / 86400); 

        seconds_left = seconds_left % 86400;

        hours = parseInt(seconds_left / 3600);

        seconds_left = seconds_left % 3600;

        minutes = parseInt(seconds_left / 60);

        seconds = parseInt(seconds_left % 60);

        countdown.innerHTML = days+ ' días ' + hours + " horas " + minutes + " minutos " + seconds + " segundos";
    }, 1000);
}

cuentaRegresiva()

// ------------------------------------------------------------------------------------------------

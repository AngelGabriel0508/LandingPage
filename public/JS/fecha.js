const day = new Date();
const m = ["Enero", "Febrero", "Mayo", "Abril", "Mayo", "Junio",
    "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
const str_op = day.getDate() + ' ' + m[day.getMonth()] + ' ' + day.getFullYear();
document.getElementById("demo").innerHTML = str_op;

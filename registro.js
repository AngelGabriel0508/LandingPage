const MAIN_PATH = "http://localhost:3000/api/";

const date = new Date();
let currentDate = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
let currentDateFormatted = date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();

document.addEventListener("DOMContentLoaded", () => {
    fetch(MAIN_PATH + "dates/" + currentDate)
        .then(res => res.json())
        .then(data => {
            console.log("Mostrando data: " + data);
            if (data != null) {
                document.getElementById("showDate").innerHTML = `<h3>Bienvenido al Colegio Maryland Bilingual High School</h3>
                                                                <p>Hoy es ${currentDateFormatted} - ${data.NAMECAL} <br>${data.DESCCAL} </p>`;
            } else {
                document.getElementById("showDate").innerHTML = `<h3>Bienvenido al Colegio Maryland Bilingual High School</h3>
                                                                <p>Aquí encontrarás toda la información que necesitas sobre nuestra institución educativa.</p>
                                                                <p>Hoy es ${currentDateFormatted}</p>`;
            }
        });
});

const url = "http://localhost:3000/api/usuario";

const formArticulo = document.querySelector("form");
const nombres = document.getElementById("nombres");
const apellidos = document.getElementById("apellidos");
const email = document.getElementById("email");
const telefono = document.getElementById("telefono");
const mensaje = document.getElementById("mensaje");

let opcion = '';

const btnCrear = document.getElementById("btnCrear");

btnCrear.addEventListener('click', () => {
    console.log("Acción de listar activada");
    opcion = 'crear';
});

formArticulo.addEventListener('submit', (e) => {
    e.preventDefault();
    if (opcion == 'crear') {
        const letrasRegex = /^[A-Za-z\s]+$/;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (nombres.value == "" || apellidos.value == "" || email.value == "" || telefono.value == "" || mensaje.value == "") {
            alert("Asegúrese de que todos los campos estén completos");
            return false;
        } else if (!nombres.value.match(letrasRegex) || !apellidos.value.match(letrasRegex)) {
            alert("Los nombres y apellidos solo deben contener letras");
            return false;
        } else if (!email.value.match(emailRegex)) {
            alert("Por favor, ingrese un correo electrónico válido");
            return false;
        } else if (telefono.value.length !== 9) {
            alert("Por favor, ingrese un número de teléfono válido con 9 dígitos");
            return false;
        } else {
            console.log("Todos los campos están completos");
            fetch(url, {
                method: 'POST',
                headers: {
                    'content-Type': 'application/json'
                },
                body: JSON.stringify({
                    nombres: nombres.value,
                    apellidos: apellidos.value,
                    email: email.value,
                    telefono: telefono.value,
                    mensaje: mensaje.value
                })
            })
                .then(response => response.json())
                .then(() => {
                    alert("Formulario enviado correctamente");
                    location.reload();
                });
        }
    } else if (opcion == 'editar') {
        console.log("Activado el modo de edición");
    }
});

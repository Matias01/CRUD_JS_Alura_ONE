import { clientServices } from "../services/client-service.js";

const formulario = document.querySelector("[data-form]");

formulario.addEventListener("submit", (evento) => {
    try {
        evento.preventDefault();
        const nombre = document.querySelector("[data-nombre]").value;
        const email = document.querySelector("[data-email]").value;
    
        clientServices.crearCliente(nombre,email)
            .then(() => {
                window.location.href="http://127.0.0.1:5500/screens/registro_completado.html";
        });
    } catch (error) {
        console.log(error);
        window.location.href="/screens/error.html";   
    };
});
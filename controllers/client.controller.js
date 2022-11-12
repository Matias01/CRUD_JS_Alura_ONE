import { clientServices } from "../services/client-service.js";

// backticks ` `
const crearNuevaLinea = (nombre, email, id) => {
    const linea =document.createElement("tr");
    const contenido = `
    <td class="td" data-td>
        ${nombre}
    </td>
    <td>
        ${email}
    </td>
    <td>
    <ul class="table__button-control">
        <li>
        <a
            href="../screens/editar_cliente.html?id=${id}"
            class="simple-button simple-button--edit"
            >Editar</a
        >
        </li>
        <li>
        <button
            class="simple-button simple-button--delete"
            type="button"
            id="${id}"
        >
            Eliminar
        </button>
        </li>
    </ul>
    </td>
    `;
    linea.innerHTML = contenido;
    const btn = linea.querySelector("button");
    btn.addEventListener("click", () => {
        try {
            const id = btn.id;
            clientServices
            .eliminarCliente(id)
            .then( (respuesta) => {
                    console.log(respuesta)
            })
        } catch (error) {
            console.log(error);
            window.location.href="/screens/error.html";
        }
    });

    return linea;
}

const table = document.querySelector("[data-table]");

// Hace lo mismo que la función del final.

// clientServices
//     .listaClientes()
//     .then((data) => {
//         data.forEach( ({ nombre, email, id }) => {
//         const nuevaLinea = crearNuevaLinea(nombre, email, id);
//             table.appendChild(nuevaLinea);
//         });
// })
// .catch((error) => alert("Ocurrió un error"));

const render = async () =>  {
    try {
        const listaClientes = await clientServices.listaClientes();
        listaClientes.forEach(elemento => {
            table.appendChild(crearNuevaLinea(elemento.nombre,elemento.email, elemento.id));
        });
    }
    catch(error){
        console.log(error);
        window.location.href="/screens/error.html";
    }
}

render();
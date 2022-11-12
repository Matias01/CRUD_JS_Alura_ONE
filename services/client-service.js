// Fetch API
const listaClientes = () => 
    // el fetch toma GET si no le indicamos nungún método
    fetch("http://localhost:3000/perfil").then( respuesta => respuesta.json());


export const clientServices = {
    listaClientes,
};
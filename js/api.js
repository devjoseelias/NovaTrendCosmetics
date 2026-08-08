export async function cargarElementos(){
    try{
        const respuesta = await fetch('../JSON/productos.json');
        if(!respuesta.ok){
            throw new Error(`Error HTTP: ${respuesta.status}`);
        }
        let productos = await respuesta.json();
        console.log("Productos cargados con éxito!");
        return productos;
    } catch(error){
        console.error("No se han podido cargar los productos: ", error);
    }
}
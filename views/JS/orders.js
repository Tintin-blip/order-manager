
document.addEventListener('DOMContentLoaded', async function() {
    await getOrder();
});

const token = localStorage.getItem('token');
const userid = localStorage.getItem('userid');
async function getProducts() { 
try { 
    const response = await fetch(`http://localhost:7070/api/products/getProducts/${userid}`, { 
        method: 'GET',
        headers: { 
            
            'x-token':token,
            'content-type':'application/json'},
        
    })
    const responseData = await response.json()
    
}catch(err) { 
    console.log(err)


}
}


async function getOrder() {
    const response = await fetch(`http://localhost:7070/api/order/getOrder/${userid}`, {
        method: 'GET',
        headers: {
            'x-token': token,
            'content-type': 'application/json'
        },
    });

    const responseData = await response.json();
  //  console.log(responseData);
    const data = responseData.data;
   // console.log(data);

    // Llamar a la función para agregar filas solo si hay datos
    if (Array.isArray(data) && data.length > 0) {
        agregarFilas(data);
    }
}

function agregarFilas(data) {
    var tablaProductos = document.getElementById("table");
    var bodyProductos = document.getElementById("bodyProductos");

    // Verificar si los elementos existen antes de intentar manipularlos
    if (tablaProductos && bodyProductos) {
        // Limpiar contenido existente en la tabla
        bodyProductos.innerHTML = '';

        // Iterar sobre los productos y agregar filas
        data.forEach(function(producto) {
            var newRow = bodyProductos.insertRow(bodyProductos.rows.length);

            // Insertar celdas con los datos del producto
            var cell1 = newRow.insertCell(0);
            var cell2 = newRow.insertCell(1);
            var cell3 = newRow.insertCell(2);
            var cell4 = newRow.insertCell(3);
            var cell5 = newRow.insertCell(4);
            var cell6 = newRow.insertCell(5); // Nueva celda para el botón de lápiz
            var cell7 = newRow.insertCell(6); // Nueva celda para el botón de basura

            cell1.innerHTML = producto.id;
            cell2.innerHTML = producto.product_name; // Ajustar según la propiedad real en tu objeto
            cell3.innerHTML = producto.quantity;    // Ajustar según la propiedad real en tu objeto
            cell4.innerHTML = producto.product_id;
            cell5.innerHTML = producto.price.toFixed(2);

            // Agregar botones con iconos de lápiz y basura
            var lapizButton = document.createElement("button");
            lapizButton.innerHTML = '<i class="fas fa-pencil-alt"></i>';
            lapizButton.classList.add("lapiz-button");
            lapizButton.addEventListener("click", function() {
                // Lógica para editar el producto
                console.log("Editar orden con ID:", producto.id);
                lapizButton.addEventListener("click", function() {
                    
                    editarFila(producto.product_id,producto.quantity,producto.id);
                });
            });
            cell6.appendChild(lapizButton);

            var basuraButton = document.createElement("button");
            basuraButton.innerHTML = '<i class="fas fa-trash-alt"></i>';
            basuraButton.classList.add("basura-button");
            basuraButton.addEventListener("click", function() {
                // Lógica para eliminar el producto
                console.log("Eliminar orden con ID:", producto.id);
            });
            basuraButton.addEventListener("click", function() {
                borrarFila(producto.id);
            }); 
            cell7.appendChild(basuraButton);
        });

    } else {
        console.error("Los elementos HTML no fueron encontrados");
    }
}

async function addOrder() {
    try {
        const idProduct = document.getElementById("productoSelect").value;
        const quantity = document.getElementById('cantidad').value;

        const response = await fetch(`http://localhost:7070/api/order/addProduct/${userid}`, {
            method: 'POST',
            headers: {
                'x-token': token,
                'content-type': 'application/json'
            },
            body: JSON.stringify({ idProduct, quantity })
        });

        if (response.status !== 200 || response.error) {
            throw new Error('Server error');
        }

        const responseData = await response.json();
console.log(responseData);
await getOrder()
// Verificar
if (responseData.data && responseData.data.price !== undefined) {
    // datos producto
    const selectedProductName = document.getElementById("productoSelect").options[document.getElementById("productoSelect").selectedIndex].text;

    // valores form
    const nombre = selectedProductName;
    const cantidad = quantity;
    const precio = responseData.data.price.toFixed(2);

    // meter en fila
    var table = document.getElementById("table").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.rows.length);

    
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
    var cell4 = newRow.insertCell(3);

    cell1.innerHTML = responseData.data.insertId 
    cell2.innerHTML = nombre;
    cell3.innerHTML = cantidad;
    cell4.innerHTML = precio;
    
} else {
    console.error("El precio del producto no está definido en la respuesta.");
}

    } catch (err) {
        console.log('Error:', err);
    }
}



 async function borrarFila(idProducto) {
    try {
        const response = await fetch(`http://localhost:7070/api/order/deleteOrder/${userid}`, {
            method: 'DELETE',
            headers: {
                'x-token': token,
                'content-type': 'application/json'
            },
            body: JSON.stringify({ idOrder: idProducto })
        });

        if (response.status !== 200 || response.error) {
            throw new Error('Server error');
        }

        // Actualizar la tabla después de borrar la fila
        await getOrder();
    } catch (err) {
        console.log('Error:', err);
    }
}

function editarFila(idProducto, cantidadProducto,idOrder ) {
   console.log('dentro de editar')
    var nuevaCantidad = prompt("Nueva cantidad:", cantidadProducto);


    if (nuevaCantidad === null) {
        return;
    }

    
    nuevaCantidad = parseInt(nuevaCantidad);

    // Validar si la conversión fue exitosa
    if (isNaN(nuevaCantidad)) {
        alert("Por favor, ingrese una cantidad numérica válida.");
        return;
    }

    
    actualizarOrden(idProducto, nuevaCantidad,idOrder);
}
async function actualizarOrden(idProducto, nuevaCantidad,idOrder) {
    console.log(idProducto,nuevaCantidad,idOrder)
    try {
        const response = await fetch(`http://localhost:7070/api/order/updateOrder/${userid}`, {
            method: 'PATCH',
            headers: {
                'x-token': token,
                'content-type': 'application/json'
            },
            body: JSON.stringify({ idOrder: idOrder, idProduct:idProducto, quantity: nuevaCantidad })
        });

        if (response.status !== 200 || response.error) {
            throw new Error('Server error');
        }

        await getOrder();
    } catch (err) {
        console.log('Error:', err);
    }
}
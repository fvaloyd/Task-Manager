//class producto
class Product{
    constructor(tarea,descripcion){
        this.tarea = tarea;
        this.descripcion = descripcion;
    }
}
//class UI
class UI{
    //agregar nueva tarea
    addTask(Product){
        const contenedor = document.getElementById('task-save');
        const task = document.createElement('div');
        //plantilla de la tarea
        task.innerHTML = `
            <div class="contenedor-task">
                <h3>${Product.tarea}</h3>
                <p>${Product.descripcion}</p>
                <button class="delete" name="delete">Borrar</button>
            </div>  
        `;
        contenedor.appendChild(task);
        this.showMessage('green')
    }
    //eliminar tarea
    deleteTask(task){
        if(task.name === 'delete'){
            task.parentElement.parentElement.remove();
        }
    }
    //mostrar mensaje de satisfaccion al enviar formulario
    showMessage(color,numero){
        const contenedorMensajes = document.getElementById('message');
        const message = document.createElement('div');
    
        if(color == 'green'){
            
            contenedorMensajes.style.display = 'block';
            message.innerHTML = `
                <div class="mensaje" style="background: ${color};">
                    <p>La tarea se guardo correctamente</P>
                </div>
            `;
            contenedorMensajes.appendChild(message);
        }else{
            message.innerHTML = `
            <div style="background: red;">
                <p>ocurrio un error</P>
            </div>    
            `;
        };
        //temporizador para eliminar mensaje
        setTimeout(function(){
            message.remove();
        },3000)
    }
    //resetear los valores del formulario
    resetForm(form){
        form.reset();
    }
}
//var form
const form = document.getElementById('form');


//evento submit del formulario de tareas
form.addEventListener('submit', (e) => {
    //var valores 
    let tarea = document.getElementById('task').value;
    let description = document.getElementById('description').value;
    //exportar las clases
    let ui = new UI;
    let producto = new Product(tarea,description);

    //validacion de formulario
    if(producto.tarea == '' || producto.descripcion == ''){
        alert('Inserte todos los datos');
    }else{
        //quitar el recargado de la pagina con el submit
        e.preventDefault();
        ui.addTask(producto)

        //resetear formulario
        ui.resetForm(form);
    }
});

var contenedor = document.getElementById('task-save');

contenedor.addEventListener('click', (e) => {
    e.preventDefault;
    const ui = new UI;
    ui.deleteTask(e.target);
});


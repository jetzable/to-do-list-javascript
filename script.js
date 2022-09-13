// Lista de tareas, persistente en el localStorage
let tasks = JSON.parse(localStorage.getItem('taskList')) || [];
let checked = JSON.parse(localStorage.getItem('checkedTasks')) || [];

// Función para agregar una tarea
const addTask = (ev) => {
  ev.preventDefault(); // Evita que se recargue la página
  // Si la lista está vacía, elimina el mensaje de lista vacía
  if(document.getElementById('empty-list')) {
    document.getElementById('empty-list').remove();
  }
  // Obtiene el valor del input
  let newTask = document.getElementById("newTask").value;
  // Agrega la tarea a la lista
  tasks.push(newTask);
  // Resetea el valor del input a vacío
  document.getElementById("newTask").value = '';
  // Guarda la lista en el localStorage
  localStorage.setItem('taskList', JSON.stringify(tasks));
  // Muestra la lista actualizada
  showTasks();
}

// Evento para agregar una tarea cuando se hace click en el botón "Agregar"
document.getElementById('add-task-form')
  .addEventListener('submit', addTask);

// Función para mostrar las tareas
function showTasks() {
  // Si la lista está vacía, muestra un mensaje
  if(tasks.length === 0) {
    document.getElementById('task-list-container').innerHTML = '<div id="empty-list">No hay tareas pendientes</div>';
  } else {
    // Si la lista no está vacía, muestra la lista
    // Obtiene la lista del localStorage
    const previousTasks = localStorage.getItem('taskList');
    if(JSON.parse(previousTasks).length > 0) {
      // Si la lista no está vacía, genera el HTML para cada tarea
      const listHtml = JSON.parse(previousTasks).reduce((list, task, index) => {
      const isChecked = checked.includes(index) ? 'checked' : '';
        return list + `
        <li>
          <div class="task">
            <input type="checkbox" id="task-${index}" name="task-${index}" value="${task}" class="checkbox">
            <label>${task}</label>
          </div>
          <button onclick="deleteTask(${index})">Eliminar</button>
        </li>`
      }, '');
      // Añade el HTML al contenedor de la lista
      const container = document.getElementById('task-list-container');
      container.innerHTML = listHtml;
    }
  }
}

// Función para eliminar una tarea
function deleteTask(index) {
  // Elimina la tarea de la lista
  tasks.splice(index, 1);
  // Guarda la lista actualizada en el localStorage
  localStorage.setItem('taskList', JSON.stringify(tasks));
  // Muestra la lista actualizada
  showTasks();
}

// Muestra la lista de tareas al cargar la página
showTasks();

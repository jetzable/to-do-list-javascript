// Crea un botón de "cerrar" para cada elemento de la lista
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  // <span></span>
  var txt = document.createTextNode("\u00D7");
  // \u00D7 Simbolo 'x'
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
  // <li>Hit the gym <span class="close">x</span></li>
}

// Clic en 'x' para eliminar elementos de la lista
var close = document.getElementsByClassName("close");
// Selecciona los botones 'x'
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
    // Esconde elemento
  }
}

// Añade el checkmark y la clase "checked" cuando le das clic a un item de la lista
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

// Crea un nuevo item en la lista al dar clic en Add
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}
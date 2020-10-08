function recogerdatos(){
let apellidop_tecnico = document.getElementById("apellidop_tecnico").value;
let apellidom_tecnico = document.getElementById("apellidom_tecnico").value;
let nombre_tecnico = document.getElementById("nombre_tecnico").value;
let cedula_tecnico = document.getElementById("cedula_tecnico").value;
let extension_tecnico = document.getElementById("extension_tecnico").value;
let fnacimiento_tecnico = document.getElementById("fnacimiento_tecnico").value;
let direcion_tecnico = document.getElementById("direcion_tecnico").value;

let departamento_tecnico = document.getElementById("departamento_tecnico").value;
let ciudad_tecnico = document.getElementById("ciudad_tecnico").value;
let telefono_tecnico = document.getElementById("telefono_tecnico").value;
let correo_tecnico = document.getElementById("correo_tecnico").value;
let nombre_tecnicofactura = document.getElementById("nombre_tecnicofactura").value;

let v =[apellidop_tecnico, apellidom_tecnico, nombre_tecnico, cedula_tecnico, extension_tecnico, fnacimiento_tecnico,
direcion_tecnico, departamento_tecnico, ciudad_tecnico, telefono_tecnico, correo_tecnico,nombre_tecnicofactura]
console.log(v);

alert(v);

}
function recogerdatos(){
let nombre_unipersonal = document.getElementById("nombre_unipersonal").value;
let direccion_unipersonal = document.getElementById("direccion_unipersonal").value;
let departamento_unipersonal=document.getElementById("departamento_unipersonal").value;
let ciudad_unipersonal=document.getElementById("ciudad_unipersonal").value;
let telefono_unipersonal = document.getElementById("telefono_unipersonal").value;
let email_unipersonal = document.getElementById("email_unipersonal").value;
let pagina_unipersonal = document.getElementById("pagina_unipersonal").value;
let aplellidop_unipersonal = document.getElementById("aplellidop_unipersonal").value;
let apellidom_unipersonal = document.getElementById("apellidom_unipersonal").value;
let nombre_representante = document.getElementById("nombre_representante").value;
let cedula_representante = document.getElementById("cedula_representante").value;
let extension_representante = document.getElementById("extension_representante").value;
let fnacimiento_representante = document.getElementById("fnacimiento_representante").value;
let correo_representante = document.getElementById("correo_representante").value;
let departamento_representante = document.getElementById("departamento_representante").value;
let ciudad_representante = document.getElementById("ciudad_representante").value;
let telefono_representante = document.getElementById("telefono_representante").value;
let direcion_representante = document.getElementById("direcion_representante").value;


let v =[nombre_unipersonal, direccion_unipersonal, departamento_unipersonal, ciudad_unipersonal, telefono_unipersonal,
     email_unipersonal, pagina_unipersonal, aplellidop_unipersonal, apellidom_unipersonal, nombre_representante,
      cedula_representante, extension_representante, fnacimiento_representante, correo_representante, departamento_representante, ciudad_representante, telefono_representante,direcion_representante]
console.log(v);

alert(v);

}
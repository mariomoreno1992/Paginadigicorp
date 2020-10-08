function recogerdatos(){
let nombrecliente = document.getElementById("nombref").value;
let telefonocliente = document.getElementById("telefonof").value;
let correocliente=document.getElementById("emailf").value;
let empresacliente=document.getElementById("empresaf").value;
let comentario = document.getElementById("consultaf").value;

let v =[nombrecliente, telefonocliente, correocliente, empresacliente, comentario]
console.log(v);

alert(v);

}
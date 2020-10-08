//$( ".contenedor-marca" ).hide();
//$( "#A" ).show();


function selecionmarca(elegido) 
    {
     
        $( ".container" ).hide();

        $( elegido ).show();
      // alert(elegido);
     //alert("hola estas referenciando desde una clase js");
     }



function mostrartodos(todos){

    $(todos).show();
    //alert("estas mostrando todas las marcas");
} 
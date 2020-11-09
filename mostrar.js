function mostrarReceta(ingredientes,titulor,preparacion){
   var p = document.getElementById("ingredientesEnviados");
   var titulos = document.getElementById("tituloEnviado");
   var texto = document.getElementById("recetaEnviada");
    var i = 0;
    var j=0;
    var nuevaCadena="<li>";
    var titulo='<h1 class="nombre">';
    titulo = titulo.concat(titulor);
    titulo = titulo.concat("<\h1>");
    titulos.innerHTML=titulo;
  
    var parrafo="<p>";
    for(i=0;i<ingredientes.length;i++){
        nuevaCadena = nuevaCadena.concat(ingredientes.charAt(i));
        if(ingredientes.charAt(i)=='\n')
           nuevaCadena = nuevaCadena.concat("<\li>");   
        //
    }
    
    parrafo = parrafo.concat(preparacion);
    parrafo =parrafo.concat("<\p>");
    
    console.log(parrafo);
    p.innerHTML=nuevaCadena;
    texto.innerHTML=parrafo;
    
    var archivo = document.getElementById("file").files[0];
  var reader = new FileReader();
  if (file) {
    reader.readAsDataURL(archivo );
    reader.onloadend = function () {
      document.getElementById("img").src = reader.result;
    }
  }
    
}
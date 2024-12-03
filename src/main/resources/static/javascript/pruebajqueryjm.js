$(document).ready(function(){
    
    $("button").click(function(){
      $("label").hide();
    });

    $("#descripcion1").mouseenter(function(){
      alert("Has entrado con el ratón en la caja de texto 'descripción'");
    });

    $("#estado1").hover(function(){
      alert("Estás pasando por encima de 'estado1' con el ratón");
    },
    function(){
      alert("Ahora ya no, que lo sepas.");
    });

    $("#texto1").focus(function(){
      $(this).css("background-color", "red");
    });
  });
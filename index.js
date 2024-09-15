// Descreva esta função...
function abrir_tela() {
  clearInterval(timer);
  window.location.href = "menu.php";}


//feito com bootblocks.com.br
  $("#inicio").css("display", "flex");
  $("#inicio").css("justify-content", "center");
  var timer = setInterval(abrir_tela, 2000);

        $(document).ready(function(){
            $("#loading-page-bb").css("opacity", "1");
        });
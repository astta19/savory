<!DOCTYPE html>
        <html lang="pt-br">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta name="theme-color" content="#103ef2">
            <title>BootBlocks</title>
            <!-- bootstrap css -->
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
            <!-- bootstrap icons -->
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css">
            <!-- sweetalert -->
            <script src="//cdn.jsdelivr.net/npm/sweetalert2@11"></script>
            <!--material icons-->
            <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
            
            </head>
        <body>
        <div id="loading-page-bb" style="opacity: 0; height: 100%;">
              <div class="modal fade" id="modal_confirmar" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Confirmar Pedido:</h5>
          <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
    <div class="container" id="container_pedido">
      <span class="meu_texto" id="lbl_valor_itens" style="font-size: 16px; color: #000000;  font-style: italic;">Total Itens R$ 0,00</span>
      <span class="meu_texto" id="lbl_valor_entrega" style="font-size: 16px; color: #000000;  font-style: italic;">Entrega: R$ 0,00</span>
      <span class="meu_texto" id="lbl_valor_fim" style="font-size: 19px; color: #000000; font-weight: bold; ">Valor Total: R$ 0,00</span>
      <span class="meu_texto" id="lbl_forma_pagamento" style="font-size: 16px; color: #000000;  ">Forma de Pagamento:</span>
      <?php
      $i = 0;
      foreach((array('Dinheiro', 'Pix', 'Cartão de Crédito')) as $elemento){
      $i = $i + 1; ?>
      <div class="form-check">
      <input class="form-check-input" type="radio" name="forma_pagamento" id="forma_pagamento_<?php echo $i; ?>" value="<?php echo $elemento; ?>">
      <label class="form-check-label" for="forma_pagamento_<?php echo $i; ?>"><?php echo $elemento; ?></label>
      </div>
      <?php } ?>
    </div>
        </div>
        <div class="modal-footer">
    <button type="button" onclick="enviar_pedido()" id='btn_enviar' class="btn btn-success">Enviar Pedido</button>
        </div>
      </div>
    </div>
  </div>


<?php
?>


  <div class="modal fade" id="modal_endereco" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Confirme seus dados:</h5>
          <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
    <input type="text" class="form-control" id="nome_box" placeholder="Nome Completo">
    <div style="width:10px;height:5px;"></div>
    <div class="row " id="Linha">
      <div class="col-8">
        <input type="text" class="form-control" id="rua_box" placeholder="Rua">
      </div>
      <div class="col-4">
        <input type="text" class="form-control" id="numero_box" placeholder="Rua">
      </div>
    </div>
    <div style="width:10px;height:5px;"></div>
    <select class="form-select" id="bairros">
    <option value="0">Selecione</option>
    <?php foreach((array()) as $key => $elemento){ ?>
    <option value="<?php echo (array())[$key]; ?>"><?php echo $elemento; ?></option>
    <?php } ?>
    </select>
    <div style="width:10px;height:5px;"></div>
    <input type="text" class="form-control" id="referencia_box" placeholder="Referencia">
    <div style="width:10px;height:5px;"></div>
    <input type="text" class="form-control" id="telefone_box" placeholder="Telefone">
        </div>
        <div class="modal-footer">
    <button type="button" onclick="verificar_endereco()" id='btn_confirmar_endereco' class="btn btn-success">Confirmar</button>
        </div>
      </div>
    </div>
  </div>



  <div class="modal fade" id="modal_carrinho" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Carrinho</h5>
          <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
    <div class="container" id="container_carrinho">
    </div>
        </div>
        <div class="modal-footer">
    <button type="button" onclick="limpar_carrinho()" id='btn_limpar' class="btn btn-warning">Limpar Itens</button>
        </div>
      </div>
    </div>
  </div>



  <div class="modal fade" id="modal_qnt" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Selecione:</h5>
          <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
    <div id="tela_modal_titulo" class="classe_da_tela" style="background-color: #ffffff; height: auto; width: 100%;">
      <span class="meu_texto" id="lbl_modal_titulo" style="font-size: 22px; color: #000000; font-weight: bold; "></span>
    </div>
    <div style="width:10px;height:5px;"></div>
    <div id="tela_modal_valor" class="classe_da_tela" style="background-color: #ffffff; height: auto; width: 100%;">
      <span class="meu_texto" id="lbl_modal_valor" style="font-size: 22px; color: #006600; font-weight: bold; "></span>
    </div>
    <div style="width:10px;height:5px;"></div>
    <div id="tela_qnt" class="classe_da_tela" style="background-color: #ffffff; height: auto; width: 100%;">
      <span class="meu_texto" id="lbl_qnt_lbl" style="font-size: 22px; color: #000000; font-weight: bold; ">Quantidade: </span>
      <img src="assets/menos.png" height="25px" width="25px" id="menos_btn">
      <span class="meu_texto" id="lbl_quantidade" style="font-size: 22px; color: #000000; font-weight: bold; ">1</span>
      <img src="assets/mais.png" height="25px" width="25px" id="mais_btn">
    </div>
    <div class="meu_card" id="card_adicionar"  style="width:98%; margin:2px; padding: 5px; border-radius: 5px; box-shadow: 7px 7px 13px 0px rgba(50, 50, 50, 0.22);">
      <span class="meu_texto" id="continuar_lbl" style="font-size: 18px; color: #ffffff; font-weight: bold; ">ADICIONAR</span>
    </div>
        </div>
        <div class="modal-footer">
        </div>
      </div>
    </div>
  </div>



  <div class="meu_card" id="continuar"  style="width:98%; margin:2px; padding: 5px; border-radius: 5px; box-shadow: 7px 7px 13px 0px rgba(50, 50, 50, 0.22);">
    <span class="meu_texto" id="continuar_lbl" style="font-size: 20px; color: #ffffff; font-weight: bold; ">CONTINUAR</span>
  </div>



  <img src="assets/banner1.png" height="auto" width="100%" id="banner">
  <div id="barra" class="classe_da_tela" style="background-color: #ffcc00; height: auto; width: 100%;">
    <div class="container" id="id_do_container">
      <div class="row justify-content-around" id="Linha">
        <div class="col">
          <img src="assets/cart1.png" height="35px" width="35px" id="carrinho">
        </div>
        <div class="col">
          <div id="tala_lbl_produtos" class="classe_da_tela" style="background-color: #ffffff; height: 50px; width: auto;">
            <span class="meu_texto" id="lbl_produtos" style="font-size: 20px; color: #ffffff; font-weight: bold; ">PRODUTOS</span>
          </div>
        </div>
        <div class="col">
        </div>
      </div>
    </div>
  </div>
  <div class="container-xl" id="id_do_container">
    <div style="width:10px;height:15px;"></div>
    <div onclick="add_qnt('1')" class="produtos" id="1" style="width:98%; margin:2px; padding: 5px; border-radius: 5px; box-shadow: 7px 7px 13px 0px rgba(50, 50, 50, 0.22);">
    <div class="row">
    <div class="col-4">
    <img class="imagem_produtos" id="imagem_produtos_1" style="width:50px; height:50px;" src="assets/ra1.jpg">
    </div>
    <div class="col-8">
    <span class="titulo_produtos" style="font-weight: bold; font-size: 16px">Macarrão Rigatoni 400KG</span><br>
    <span class="subtitulo_produtos" style="font-size: 13px"><?php echo "<span style='color:#006600;'>".'R$ 21,00'."</span>" ; ?></span><br>
    <span class="texto_adicional_produtos" style="font-size: 13px">Clique para adicionar</span>
    </div>
    </div>
    </div>
    <div onclick="add_qnt('2')" class="produtos" id="2" style="width:98%; margin:2px; padding: 5px; border-radius: 5px; box-shadow: 7px 7px 13px 0px rgba(50, 50, 50, 0.22);">
    <div class="row">
    <div class="col-4">
    <img class="imagem_produtos" id="imagem_produtos_2" style="width:50px; height:50px;" src="assets/laf1.png">
    </div>
    <div class="col-8">
    <span class="titulo_produtos" style="font-weight: bold; font-size: 16px">Lasanha de Frango 500KG</span><br>
    <span class="subtitulo_produtos" style="font-size: 13px"><?php echo "<span style='color:#006600;'>".'R$ 30,00'."</span>" ; ?></span><br>
    <span class="texto_adicional_produtos" style="font-size: 13px">Clique para adicionar</span>
    </div>
    </div>
    </div>
    <div onclick="add_qnt('3')" class="produtos" id="3" style="width:98%; margin:2px; padding: 5px; border-radius: 5px; box-shadow: 7px 7px 13px 0px rgba(50, 50, 50, 0.22);">
    <div class="row">
    <div class="col-4">
    <img class="imagem_produtos" id="imagem_produtos_3" style="width:50px; height:50px;" src="assets/lac1.jpg">
    </div>
    <div class="col-8">
    <span class="titulo_produtos" style="font-weight: bold; font-size: 16px">Lasanha de Carne 500KG</span><br>
    <span class="subtitulo_produtos" style="font-size: 13px"><?php echo "<span style='color:#006600;'>".'R$ 33,00'."</span>" ; ?></span><br>
    <span class="texto_adicional_produtos" style="font-size: 13px">Clique para adicionar</span>
    </div>
    </div>
    </div>
    <div onclick="add_qnt('4')" class="produtos" id="4" style="width:98%; margin:2px; padding: 5px; border-radius: 5px; box-shadow: 7px 7px 13px 0px rgba(50, 50, 50, 0.22);">
    <div class="row">
    <div class="col-4">
    <img class="imagem_produtos" id="imagem_produtos_4" style="width:50px; height:50px;" src="assets/casal.jpg">
    </div>
    <div class="col-8">
    <span class="titulo_produtos" style="font-weight: bold; font-size: 16px">Combo Casal 1KG</span><br>
    <span class="subtitulo_produtos" style="font-size: 13px"><?php echo "<span style='color:#006600;'>".'R$ 50,00'."</span>" ; ?></span><br>
    <span class="texto_adicional_produtos" style="font-size: 13px">Clique para adicionar</span>
    </div>
    </div>
    </div>
    <div style="width:10px;height:50px;"></div>
  </div>

            <!-- bootstrap js -->
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
            <!-- jquery -->
            <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.1/jquery.js" integrity="sha512-CX7sDOp7UTAq+i1FYIlf9Uo27x4os+kGeoT7rgwvY+4dmjqV0IuE/Bl5hVsjnQPQiTOhAX1O2r2j5bjsFBvv/A==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
            <!-- firebase-app -->
            <script src="https://www.gstatic.com/firebasejs/7.21.0/firebase-app.js"></script>
            <!-- firebase-database -->
            <script src="https://www.gstatic.com/firebasejs/7.21.0/firebase-database.js"></script>
            <!-- firebase-auth -->
            <script src="https://www.gstatic.com/firebasejs/7.15.5/firebase-auth.js"></script>
            <!-- codigo javascript -->
            <script src= "menu.js?v=1.0"> </script>
        </div>
        </body>
        </html>
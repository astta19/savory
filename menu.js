var id_do_produto, numero_whatsapp, bairros, produtos, qnt_selecionada, pedido_em_texto, texto_card, valor_total_itens, carrinho, chave_pix, valor_total_iten_selecionado, valor_item_selecionado, Item, nome_recebedor_pix, titulo_produto_selecionado, texto_valor_fim, cidade_recebedor_pix, endererco_confirmado, texto_total_fim, texto_valor_entrega, forma_de_pagamento, valor_total_fim;

// Descreva esta função...
function preencher_endereco() {
  $("#nome_box").val(localStorage.getItem('nome_cliente') || '');
  $("#telefone_box").val(localStorage.getItem('telefone_cliente') || '');
  $("#numero_box").val(localStorage.getItem('numero_cliente') || '');
  $("#referencia_box").val(localStorage.getItem('referencia_cliente') || '');
  $("#rua_box").val(localStorage.getItem('rua_cliente') || '');
}

// Descreva esta função...
function salvar_valores() {
  localStorage.setItem('nome_cliente',$("#nome_box").val());
  localStorage.setItem('telefone_cliente',$("#telefone_box").val());
  localStorage.setItem('numero_cliente',$("#numero_box").val());
  localStorage.setItem('referencia_cliente',$("#referencia_box").val());
  localStorage.setItem('rua_cliente',$("#rua_box").val());
}

// Descreva esta função...
function verificar_endereco() {
  if (!$("#rua_box").val().length) {
    Swal.fire({
    icon: 'error',
    title: 'Atenção',
    text: 'Preencha todos os campos!'
    });
  } else {
    if (!$("#nome_box").val().length) {
      Swal.fire({
      icon: 'error',
      title: 'Atenção',
      text: 'Preencha todos os campos!'
      });
    } else {
      if (!$("#telefone_box").val().length) {
        Swal.fire({
        icon: 'error',
        title: 'Atenção',
        text: 'Preencha todos os campos!'
        });
      } else {
        if (!$("#numero_box").val().length) {
          Swal.fire({
          icon: 'error',
          title: 'Atenção',
          text: 'Preencha todos os campos!'
          });
        } else {
          $("#continuar_lbl").html('ENVIAR PEDIDO');
          $("#modal_endereco").modal("hide");
          Swal.fire('Dados Confirmados!');
          salvar_valores();
          endererco_confirmado = true;
        }
      }
    }
  }
}

// Descreva esta função...
function add_qnt(id_do_produto) {
  qnt_selecionada = 1;
  valor_item_selecionado = produtos[(id_do_produto - 1)][1];
  titulo_produto_selecionado = produtos[(id_do_produto - 1)][0];
  valor_total_iten_selecionado = produtos[(id_do_produto - 1)][1];
  $("#modal_qnt").modal("show");
  $("#lbl_modal_titulo").html(titulo_produto_selecionado);
  $("#lbl_quantidade").html(qnt_selecionada);
  $("#lbl_modal_valor").html(('R$: ' + String(format_decimal_number((produtos[(id_do_produto - 1)][1]), 2, true))));
}

// Descreva esta função...
function enviar_pedido() {
  if ($("input[name=forma_pagamento]:checked").val()) {
    let msg_uri_encoded = window.encodeURIComponent((['Olá, esse é meu pedido:',pedido_em_texto,String("\n") + String("\n"),texto_total_fim,"\n",texto_valor_entrega,"\n",texto_valor_fim,"\n",'Forma de Pagamento: ',$("input[name=forma_pagamento]:checked").val(),"\n","\n",'Entregar para: *',$("#nome_box").val(),'*',"\n",$("#rua_box").val(),', Nº ',$("#numero_box").val(),', ',$("#" + 'bairros').find("option:selected").text(),"\n",$("#referencia").val() ? 'Referência: ' + String($("#referencia").val()) : '',"\n",'Telefone: ',$("#telefone_box").val()].join('')));
    window.open("https://api.whatsapp.com/send?phone=" + numero_whatsapp + "&text=" + msg_uri_encoded, "_blank");
    $("#modal_confirmar").modal("hide");
    Swal.fire('Pedido Enviado!');
    if ($("input[name=forma_pagamento]:checked").val() == 'Pix') {
      if (chave_pix) {
        let valor_pix_qr = (format_decimal_number(valor_total_fim, 2, true));
        let nome_pix_qr = nome_recebedor_pix;
        let cidade_pix_qr = cidade_recebedor_pix;
        let chave_pix_qr = chave_pix;
        let telefone_pix_qr = numero_whatsapp;
        let url_pix_qr = "https://pagmp.com/pix/index.php?chave=" + chave_pix_qr + "&valor=" + valor_pix_qr + "&nome=" + nome_pix_qr + "&cidade=" + cidade_pix_qr + "&fone=" + telefone_pix_qr;
        window.open(url_pix_qr, "_self");
      }
    }
  } else {
    Swal.fire({
    icon: 'error',
    title: 'Forma de Pagamento',
    text: 'Selecione uma forma de pagamento'
    });
  }
}

// Descreva esta função...
function criar_lista_carrinho() {
  texto_card = [qnt_selecionada,' x ',titulo_produto_selecionado,'<br> R$ ',format_decimal_number(valor_total_iten_selecionado, 2, true)].join('');
  pedido_em_texto = [pedido_em_texto,"\n",qnt_selecionada,' x ',titulo_produto_selecionado,' - R$ ',format_decimal_number(valor_total_iten_selecionado, 2, true)].join('');
  document.getElementById('container_carrinho').innerHTML += '<div class='+'lista_carrinho'+' id='+'item_lista'+' onclick="limpar('+id_do_produto+')" style="width:98%; margin:2px; padding: 5px; border-radius: 5px; box-shadow: 7px 7px 13px 0px rgba(50, 50, 50, 0.22);">'+texto_card+'</div>';
}

// Descreva esta função...
function calcular_total() {
  valor_total_itens = 0;
  for (var Item_index2 in carrinho) {
    Item = carrinho[Item_index2];
    valor_total_itens = Item[2] + valor_total_itens;
  }
  texto_valor_fim = 'Valor Itens: R$ ' + String(format_decimal_number(valor_total_itens, 2, true));
  texto_valor_entrega = 'Taxa de Entrega: R$ ' + String(format_decimal_number($("#bairros").val(), 2, true));
  valor_total_fim = valor_total_itens + (txt_to_number($("#bairros").val()));
  texto_total_fim = 'Valor Total: R$ ' + String(format_decimal_number(valor_total_fim, 2, true));
  $("#lbl_valor_itens").html(texto_valor_fim);
  $("#lbl_valor_entrega").html(texto_valor_entrega);
  $("#lbl_valor_fim").html(texto_total_fim);
}

// Descreva esta função...
function reabrir_tela() {
  window.location.href = "menu.php";}

// Descreva esta função...
function limpar_carrinho() {
  carrinho = [];
  Swal.fire('Carrinho Limpo!');
  var limpar_cart = setInterval(reabrir_tela, 1500);
}


//feito com bootblocks.com.br
  numero_whatsapp = '5516992642651';
  chave_pix = '41527177858';
  nome_recebedor_pix = 'Matheus';
  cidade_recebedor_pix = 'Ribeirão Preto SP';

//feito com bootblocks.com.br
  bairros = [['Centro', 5], ['Campos Eliseos', 7], ['Jardim América', 8.5]];

//feito com bootblocks.com.br
  produtos = [['Macarrão Rigatoni 400KG', 21], ['Lasanha de Frango 500KG', 30], ['Lasanha de Carne 500KG', 33], ['Combo Casal 1KG', 50]];

$(document).on("click", "#carrinho", function(){
  if (!carrinho.length) {
    Swal.fire({
    icon: 'error',
    title: 'Carrinho Vazio',
    text: 'Adicione itens primeiro'
    });
  } else {
    $("#modal_carrinho").modal("show");
  }
});

$(document).on("click", "#mais_btn", function(){
  qnt_selecionada = qnt_selecionada + 1;
  valor_total_iten_selecionado = qnt_selecionada * valor_item_selecionado;
  $("#lbl_quantidade").html(qnt_selecionada);
  $("#lbl_modal_valor").html(('R$: ' + String(format_decimal_number(valor_total_iten_selecionado, 2, true))));
});

$(document).on("click", "#menos_btn", function(){
  if (qnt_selecionada == 1) {
    Swal.fire({
    icon: 'error',
    title: 'Mínimo 1',
    text: 'Quantidade mínima deve ser 1'
    });
  } else {
    qnt_selecionada = qnt_selecionada - 1;
    $("#lbl_quantidade").html(qnt_selecionada);
    valor_total_iten_selecionado = qnt_selecionada * valor_item_selecionado;
    $("#lbl_modal_valor").html(('R$: ' + String(format_decimal_number(valor_total_iten_selecionado, 2, true))));
  }
});

//feito com bootblocks.com.br
  pedido_em_texto = '';
  carrinho = [];
  preencher_endereco();
  endererco_confirmado = false;
  forma_de_pagamento = '';
  for (var Item_index in bairros) {
    Item = bairros[Item_index];
    $("#bairros").append("<option value="+(Item[1])+">"+(Item[0])+"</option>");
  }

//feito com bootblocks.com.br
  $("#barra").css("background-color", "#ea7f3c");
  $("#tala_lbl_produtos").css("background-color", "#ea7f3c");
  $("#"+'lbl_produtos').css("margin-left", 0+ "px");
  $("#"+'lbl_produtos').css("margin-right", 0+ "px");
  $("#"+'lbl_produtos').css("margin-top", 5+ "px");
  $("#"+'lbl_produtos').css("margin-bottom", 5+ "px");
  $("."+'imagem_produtos').css("padding-left", 10+"px");
  $("."+'imagem_produtos').css("padding-right", 0+"px");
  $("."+'imagem_produtos').css("padding-top", 5+"px");
  $("."+'imagem_produtos').css("padding-bottom", 0+"px");

//feito com bootblocks.com.br
  $("#"+'lbl_produtos').css("margin-left", 10+ "px");
  $("#"+'lbl_produtos').css("margin-right", 10+ "px");
  $("#"+'lbl_produtos').css("margin-top", 0+ "px");
  $("#"+'lbl_produtos').css("margin-bottom", 0+ "px");
  $("#"+'carrinho').css("margin-left", 10+ "px");
  $("#"+'carrinho').css("margin-right", 0+ "px");
  $("#"+'carrinho').css("margin-top", 5+ "px");
  $("#"+'carrinho').css("margin-bottom", 5+ "px");
  $("#tala_lbl_produtos").css("display", "flex");
  $("#tala_lbl_produtos").css("align-items", "center");

//feito com bootblocks.com.br
  $("#lbl_valor_itens").css("display", "block");
  $("#lbl_valor_entrega").css("display", "block");
  $("#lbl_valor_fim").css("display", "block");

$(document).on("click", "#continuar", function(){
  if (!carrinho.length) {
    Swal.fire({
    icon: 'error',
    title: 'Carrinho Vazio',
    text: 'Adicione itens primeiro!'
    });
  } else {
    if (!endererco_confirmado) {
      $("#modal_endereco").modal("show");
    } else {
      calcular_total();
      $("#modal_confirmar").modal("show");
    }
  }
});

$(document).on("click", "#card_adicionar", function(){
  carrinho.push([$("#lbl_modal_titulo").text(), qnt_selecionada, valor_total_iten_selecionado]);
  $("#modal_qnt").modal("hide");
  Swal.fire('Adicionado!');
  criar_lista_carrinho();
});

//feito com bootblocks.com.br
  $("#continuar").css("background-color", "#ea7f3c");
  document.getElementById('continuar').style.position = "fixed";
  document.getElementById('continuar').style.bottom = "0px";
  document.getElementById('continuar').style.left = "0";
  document.getElementById('continuar').style.right = "0";
  document.getElementById('continuar').style.zIndex = "20";
  $("#continuar").css("height", "50px");
  $("#continuar").css("width", "90%");
  $("#"+'continuar').css("margin-left", 15+ "px");
  $("#"+'continuar').css("margin-right", 5+ "px");
  $("#"+'continuar').css("margin-top", 0+ "px");
  $("#"+'continuar').css("margin-bottom", 5+ "px");
  $("#continuar").css("display", "flex");
  $("#continuar").css("align-items", "center");
  $("#continuar").css("display", "flex");
  $("#continuar").css("justify-content", "center");

//feito com bootblocks.com.br
  $("#card_adicionar").css("background-color", "#ea7f3c");
  $("#card_adicionar").css("height", "40px");
  $("#card_adicionar").css("width", "90%");
  $("#"+'card_adicionar').css("margin-left", 5+ "px");
  $("#"+'card_adicionar').css("margin-right", 5+ "px");
  $("#"+'card_adicionar').css("margin-top", 15+ "px");
  $("#"+'card_adicionar').css("margin-bottom", 5+ "px");
  $("#card_adicionar").css("display", "flex");
  $("#card_adicionar").css("align-items", "center");
  $("#card_adicionar").css("display", "flex");
  $("#card_adicionar").css("justify-content", "center");
function txt_to_number(txt){
            txt = txt+"";
            if(txt.includes(",")){
                txt = txt.replace(",", ".");
            }
            if(txt.includes(".")){
                txt = parseFloat(txt);
            }else{
                txt = parseInt(txt);
            }
            return txt;
        }function format_decimal_number(number, places, virgula = false){
                number = number + "";
                if(number.includes(",")){
                    number = number.replace(",", ".");
                    number = parseFloat(number);
                }else{
                    number = parseFloat(number);
                }
                number = number.toFixed(places);
                if(virgula){
                    number = number.replace(".", ",");
                }
                return number;
            }
        $(document).ready(function(){
            $("#loading-page-bb").css("opacity", "1");
        });
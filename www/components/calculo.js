// This is a JavaScript file

// Var do texto do Display
var textoDispaly = "";

//1° valor das operações
var valor1 = 0;

//identificar o operador do calculo
var operador = "";

function zerarDisplay(){
  textoDispaly = "";
  $(".display").val("");
}

$(document).on("click", "#ce", function(){
  zerarDisplay();
  valor1 = 0;
})

$(document).on("click", ".botao", function(){
  textoDispaly += $(this).val();
  $(".display").val(textoDispaly)
})

$(document).on("click", ".op", function(){
  operador = $(this).html();
  valor1 = textoDispaly;
  zerarDisplay();
})

$(document).on("click", "#igual", function(){
  var valor2 = textoDispaly;
  zerarDisplay();

  if(operador == "+")
  {
    textoDispaly = parseFloat(valor1) + parseFloat(valor2);
  }
  if(operador == "-")
  {
    textoDispaly = parseFloat(valor1) - parseFloat(valor2);
  }
  if(operador == "*")
  {
    textoDispaly = parseFloat(valor1) * parseFloat(valor2);
  }
  if(operador == "/")
  {
    textoDispaly = parseFloat(valor1) / parseFloat(valor2);
  }
  $(".display").val(textoDispaly)
})
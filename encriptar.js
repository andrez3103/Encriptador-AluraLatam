function encriptar() {
  var mayus = /[A-Z]/g;
  var caracteres = /[~!@#$%^&*()_+|}{[\]\\\/?><:"`;.,áéíóúàèìòùñÑ']/g;

  var texto = document.getElementById("inputTexto").value;

  if (texto == "") {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "NO INGRESO NINGUNA PALABRA VUELVA INTENTARLO!!!",
    });
  } else if (texto.match(mayus) != texto.match(mayus)) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "NO SE ACEPTAN MAYUSCULAS VUELVAN A INTENTARLO!!!",
    });
  } else if (texto.match(caracteres) != texto.match(caracteres)) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "NO SE ACEPTAN CARACTERES ESPECIALES NI ACENTOS VUELVA A INTENTARLO!!!",
    });
  } else {
    var txtCifrado = texto.replace(/e/gim, "enter");
    var txtCifrado = txtCifrado.replace(/o/gim, "ober");
    var txtCifrado = txtCifrado.replace(/i/gim, "imes");
    var txtCifrado = txtCifrado.replace(/a/gim, "ai");
    var txtCifrado = txtCifrado.replace(/u/gim, "ufat");

    document.getElementById("munieco").style.display = "none";
    document.getElementById("mensaje").style.display = "none";
    document.getElementById("texto-output").innerHTML = txtCifrado;
    document.getElementById("copiar").style.display = "show";
    document.getElementById("copiar").style.display = "inherit";
    document.getElementById("inputTexto").value = "";
  }
}

function desencriptar() {
  var mayus = /[A-Z]/g;
  var caracteres = /[~!@#$%^&*()_+|}{[\]\\\/?><:"`;.,áéíóúàèìòùñÑ']/g;
  var texto = document.getElementById("inputTexto").value;

  if (texto == "") {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "NO INGRESO NINGUNA PALABRA VUELVA INTENTARLO!!!",
    });
  } else if (texto.match(mayus) != texto.match(mayus)) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "NO SE ACEPTAN MAYUSCULAS VUELVAN A INTENTARLO!!!",
    });
  } else if (texto.match(caracteres) != texto.match(caracteres)) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "NO SE ACEPTAN CARACTERES ESPECIALES VUELVAN A INTENTARLO!!!",
    });

    /*alert("no puede contener acentos ni caracteres especiales");*/
  } else {
    var txtCifrado = texto.replace(/enter/gim, "e");
    var txtCifrado = txtCifrado.replace(/ober/gim, "o");
    var txtCifrado = txtCifrado.replace(/imes/gim, "i");
    var txtCifrado = txtCifrado.replace(/ai/gim, "a");
    var txtCifrado = txtCifrado.replace(/ufat/gim, "u");

    document.getElementById("munieco").style.display = "none";
    document.getElementById("mensaje").style.display = "none";
    document.getElementById("texto-output").innerHTML = txtCifrado;
    document.getElementById("copiar").style.display = "show";
    document.getElementById("copiar").style.display = "inherit";
    document.getElementById("inputTexto").value = "";
  }
}

function copiar() {
  var contenido = document.querySelector("#texto-output");
  contenido.select();
  document.execCommand("copy");
}

/*
function limpiar(){

    var contenido = document.querySelector("#inputTexto");
    contenido.select();
    document.execCommand("delete",null,false);
  
    
}
*/

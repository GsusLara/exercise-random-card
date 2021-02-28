/* eslint-disable */
import "bootstrap";

import "./style.css";

window.onload = function() {
  //write your code here
  let simbolo = selectorsimbolico();
  const pintura = simbolo === "♥" || simbolo === "♦" ? "red" : "black";
  this.document.querySelector(".numero").innerHTML = selectorNumeral();
  this.document.querySelector(".numero").style.color = pintura;
  this.document.querySelector(".icono1").innerHTML = simbolo;
  this.document.querySelector(".icono1").style.color = pintura;
  this.document.querySelector(".icono2").innerHTML = simbolo;
  this.document.querySelector(".icono2").style.color = pintura;
};
let selectorNumeral = () => {
  let numero = Math.floor(Math.random() * 14) + 1;
  let salida = "";
  if (numero > 10) {
    switch (numero) {
      case 11:
        salida = "J";
        break;
      case 12:
        salida = "Q";
        break;
      case 13:
        salida = "K";
        break;
      case 14:
        salida = "A";
        break;
      default:
        salida = numero;
    }
  } else {
    salida = numero;
  }
  return salida;
};
let selectorsimbolico = () => {
  let numero = Math.floor(Math.random() * 4);
  let salida = ["♥", "♦", "♠", "♣"];
  return salida[numero];
};

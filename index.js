var a = document.getElementsByClassName("butt");
var exp = "";
var screen = document.getElementById("screen");
function rend(p) {
  screen.innerHTML = p;
}
function p() {
  exp += "p";
  rend(exp);
}
function q() {
  exp += "q";
  rend(exp);
}
function and() {
  exp += "^";
  rend(exp);
}
function or() {
  exp += "v";
  rend(exp);
}
function implis() {
  exp += ">";
  rend(exp);
}
function not() {
  exp += "~";
  rend(exp);
}
function starta() {
  exp += "(";
  rend(exp);
}
function enda() {
  exp += ")";
  rend(exp);
}
function startb() {
  exp += "[";
  rend(exp);
}
function endb() {
  exp += "]";
  rend(exp);
}
function clean(){
  exp="";
  rend(exp);
  screen.innerHTML = "Enter expression";
}
function back(){
  console.log(exp);
  exp=exp.substring(0,exp.length-1)
  rend(exp);
  if(!exp){
    screen.innerHTML = "Enter expression";
  }
}
function evalvate(exp) {
  var arr = new Array[4][10]();
  arr[0][0] = 1;
  arr[1][0] = 1;
  arr[2][0] = 0;
  arr[3][0] = 0;
  console.log(arr);
}
function submition() {
  if (!exp) {
    alert("exprtession can not be empty");
  } else {
    
  }
}

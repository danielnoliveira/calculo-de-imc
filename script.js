
window.addEventListener('load',start);
var button = null;
var campoAltura = null;
var campoPeso = null;
var resultado = null;
function start(){
    handleSubmit();

    button = document.querySelector("button");
    button.addEventListener('click',calcularIMC);
    [campoAltura,campoPeso] = document.querySelectorAll("input");
    resultado = document.querySelector('#result');
}
function handleSubmit(){
    function handlePreventDefault(event){
        event.preventDefault();
    }
    var form = document.querySelector("form");
    form.addEventListener('submit',handlePreventDefault);
}
function calcularIMC(event){
    const altura = campoAltura.value;
    const peso = campoPeso.value;
    const imc = peso/(altura**2);
    resultado.innerHTML = `Resultado: ${imc}`;
}
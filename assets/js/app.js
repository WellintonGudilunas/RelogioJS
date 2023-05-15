const spanHoras = document.querySelector("#horas");
const spanMinutos = document.querySelector("#minutos");
const spanSegundos = document.querySelector("#segundos");

const relogio = setInterval(() => {
    let date = new Date();
    let horas = date.getHours();
    let minutos = date.getMinutes();
    let segundos = date.getSeconds();

    spanHoras.textContent = (horas < 10 ? horas = '0' + horas : horas);
    spanMinutos.textContent = (minutos < 10 ? minutos = '0' + minutos : minutos);
    spanSegundos.textContent = (segundos < 10 ? segundos = '0' + segundos : segundos);
});
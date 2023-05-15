const spanHoras = document.querySelector("#horas");
const spanMinutos = document.querySelector("#minutos");
const spanSegundos = document.querySelector("#segundos");
const spanData = document.querySelector("#data");
const diasDaSemana = ['Domingo', 'Segunda-Feira', 'Terça-Feira', 'Quarta-Feira', 'Quinta-Feira', 'Sexta-Feira', 'Sábado'];
const meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];

const relogio = setInterval(() => {
    let date = new Date();
    let diaDaSemana = diasDaSemana[date.getDay()];
    let dia = date.getDate();    
    let mes = meses[date.getMonth()];
    let ano = date.getFullYear();
    let horas = date.getHours();
    let minutos = date.getMinutes();
    let segundos = date.getSeconds();
    /*
        If's ternários para evitar quando o número for menor que 10, nao aparecer apenas ele, e sim ele com um 0 antes.
        Exemplo: dia 5. envés de aparecer apenas 5, aparece 05.
    */
    spanData.innerHTML = `${diaDaSemana},
                        ${dia < 10 ? dia = '0' + dia : dia} de
                        ${mes < 10 ? mes = '0' + mes : mes} de
                        ${ano}`
    spanHoras.innerHTML = (horas < 10 ? horas = '0' + horas : horas);
    spanMinutos.innerHTML = (minutos < 10 ? minutos = '0' + minutos : minutos);
    spanSegundos.innerHTML = (segundos < 10 ? segundos = '0' + segundos : segundos);
});
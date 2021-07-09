import colecao_signos from "../data/dataSignos.js";
import retorna_signo from "./funcao.js";

const res = document.querySelector("div#res");
const button = document.querySelector('button');
const data_usuario = document.querySelector('input#data');

function verificar() {
    console.log(data_usuario);
    const data = new Date(data_usuario);
    console.log(data);
    const nome_signo = retorna_signo(colecao_signos, data);

    return `O seu signo é ${nome_signo}`;
};

button.addEventListener('click', () =>{
    const signo = verificar();
    res.innerHTML = signo;

})

import colecao_signos from "./data/dataSignos.js";
import retorna_signo from "./funcoes/funcao.js";

const res = document.querySelector("div#res");
const button = document.querySelector('button');

function verificar() {
    const data_usuario = document.querySelector("#data").value;
    const data = new Date(data_usuario);
    const nome_signo = retorna_signo(colecao_signos, data);

    return `O seu signo é ${nome_signo}`;
};

button.addEventListener('click', () =>{
    const signo = verificar();
    res.innerHTML = signo;

})

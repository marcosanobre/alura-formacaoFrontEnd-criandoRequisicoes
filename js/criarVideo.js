import { conectaApi } from "./conectaApi.js";

const formulario = document.querySelector("[data-formulario]");

async function criarVideo( evento ) {
    evento.preventDefault();

    const imagem = document.querySelector('[data-imagem]').value;
    const url = document.querySelector('[data-url]').value;
    const titulo = document.querySelector('[data-titulo]').value;
    const descricao = Math.floor( Math.random() * 10 ).toString();

    try {
        await conectaApi.criaVideo( titulo, descricao, url, imagem);

        window.location.href = "../pages/envio-concluido.html";            
    } catch (e) {
        alert(e);
    };
};

formulario.addEventListener( "submit", evento => criarVideo( evento ) );

/* 
document.querySelector("[data-formulario]").addEventListener( "Submit", async function( event ) {
    event.preventDefault();

    const titulo = document.querySelector('#titulo').value;
    const descricao = document.querySelector('#descricao').value;
    const url = document.querySelector('#url').value;
    const imagem = document.querySelector('#imagem').value;

    await conectaApi.criaVideo(titulo, descricao, url, imagem);

    window.location.href = "/";

    }
);
*/


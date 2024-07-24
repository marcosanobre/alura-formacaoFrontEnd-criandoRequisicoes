import { conectaApi } from "./conectaApi.js";

const lista = document.querySelector("[data-lista]");

export default function constroiCard( indice, titulo, descricao, url, imagem ) {
    const video = document.createElement('li');
    video.className = 'videos__item';
    video.innerHTML = `
        <iframe width="100%" height="72%" src="${url}"
            title="${titulo}" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen></iframe>
        <div class="video-acoes__container">
        <a class="link-acoes" href="http://127.0.0.1:5500/pages/enviar-video.html?exc=${indice}" id="a-link-excluivideo">Exclui</a>
        <a class="link-acoes" href="http://127.0.0.1:5500/pages/enviar-video.html?alt=${indice}" id="a-link-alteravideo">Altera</a>
        </div>
        <div class="descricao-video">
            <img src="${imagem}" alt="logo canal alura">
            <h3>${titulo}</h3>
            <p>${descricao}</p>
        </div>
    `;
    return video;
};

async function listaVideos() {
    try {
        const listaApi = await conectaApi.listaVideos();
        listaApi.forEach( (elemento, index) => lista.appendChild( constroiCard( index, 
                                                                        elemento.titulo,
                                                                        elemento.descricao,
                                                                        elemento.url,
                                                                        elemento.imagem 
                                                                    ) ) );
    } catch {
        lista.innerHTML = `<h2 class="mensagem__titulo__erro">Não foi possível carregar a lista de vídeos.</h2>`;
    }
};

listaVideos();


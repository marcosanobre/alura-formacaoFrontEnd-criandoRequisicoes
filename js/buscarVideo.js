import { conectaApi } from "./conectaApi.js";
import constroiCard from "./mostrarVideos.js";

async function buscarVideo( evento ) {
    evento.preventDefault();
    const dadosDePesquisa = document.querySelector('[data-pesquisa]').value;
    const busca = await conectaApi.buscaVideo( dadosDePesquisa );

    const lista = document.querySelector("[data-lista]");

    while ( lista.firstChild ) {
        lista.removeChild( lista.firstChild );
    };

    if (busca.length == 0) {
        lista.innerHTML = `<h2 class="mensagem__titulo__erro">Não existem vídeos, para este termo de Pesquisa.</h2>`;
    } else {
        busca.forEach( elemento => 
            lista.appendChild( constroiCard( elemento.titulo,
                                             elemento.descricao,
                                             elemento.url,
                                             elemento.imagem
                                            )
                             )
                     );    

    };
};

const botaoDePesquisa = document.querySelector("[data-botao-pesquisa]");

botaoDePesquisa.addEventListener( "click", evento => buscarVideo( evento) );


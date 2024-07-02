async function listaVideos() {
    const conexao = await fetch("http://localhost:3000/videos");
    const conexaoJson = await conexao.json();
    return conexaoJson;
};

async function criaVideo(titulo,descricao,url,imagem) {
    const conexao = await fetch( "http://localhost:3000/videos", {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify( {
            titulo: titulo,
            descricao: `${descricao} mil visualizações`,
            url: url,
            imagem: imagem
        })
    });
    if ( ! conexao.ok ) {
        throw new Error("Não foi possível enviar o vídeo !!!");
    };
    const conexaoConvertida = conexao.json();
    return conexaoConvertida;
};

async function buscaVideo( termoDeBusca ) {
    const fetchURI = `http://localhost:3000/videos?q=${termoDeBusca}`;
//console.log(fetchURI);
    const conexao = await fetch( fetchURI );
    const conexaoJSON = await conexao.json();
    return conexaoJSON;
};

/* 
async function criaVideo(titulo, descricao, url, imagem) {
    const resposta = await fetch("http://localhost:3000/videos", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            titulo: titulo,
            descricao: `${descricao} visualizações`,
            url: url,
            imagem: imagem
        })
    });
    return resposta.json();
};
*/

export const conectaApi = {
    listaVideos,
    criaVideo,
    buscaVideo
}


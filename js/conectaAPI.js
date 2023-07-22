async function listaVideos() {
  const conexao = await fetch("http://localhost:3000/videos");
  const conexaoConvertida = await conexao.json();

  return conexaoConvertida;
}

// AULA 07 - JavaScript Criando Requisições\03.Criando_novos_elementos.02_Requisição_POST 
async function criaVideo(titulo, descricao, url, imagem) {
  const conexao = await fetch("http://localhost:3000/videos", {
    method: "POST",
    headers: {
      "Content-type": "application/json"
    },
    body: JSON.stringify({
      titulo: titulo,
      descricao: `${descricao} mil visualizações`,
      url: url,
      imagem: imagem
    })
  });

  if (!conexao.ok) {
    throw new Error("Não foi possível enviar o vídeo! Contacte o Adminstrador do Sistema!");
  }

  const conexaoConvertida = await conexao.json();
  return conexaoConvertida;
}

async function buscarVideos(termodeBusca) {
  const conexao = await fetch(`http://localhost:3000/videos?q=${termodeBusca}`);
  const conexaoConvertida = conexao.json();

  return conexaoConvertida;
}

export const conectaAPI = {
  listaVideos,
  criaVideo,
  buscarVideos
}
import { conectaAPI } from "./conectaAPI.js";

const formulario = document.querySelector("[data-formulario]");

async function criarVideo(evento) {
  evento.preventDefault();

  const imagem = document.querySelector("[data-imagem]").value;
  const url = document.querySelector("[data-url]").value;
  const titulo = document.querySelector("[data-titulo]").value;
  const descricao = Math.floor(Math.random() * 10).toString();

  try { // try significa tente
    await conectaAPI.criaVideo(titulo, descricao, url, imagem);
  
    // feedback que retorna um mensagem positiva de concluido no cso
    window.location.href = "../pages/envio-concluido.html"; 

  } catch (e) { // catch sinigifica pegue
    alert(e);
  }

}

formulario.addEventListener("submit", evento => criarVideo(evento));
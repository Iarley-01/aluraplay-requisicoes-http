import { conectaApi } from './conectaApi.js';


const formulario = document.querySelector('[data-formulario]');

async function criaVideo(evento) {
  evento.preventDefault();
  const url = document.querySelector('[data-url]').value;
  const titulo = document.querySelector('[data-titulo]').value;
  const imagem = document.querySelector('[data-imagem]').value;
  const descricao = Math.floor(Math.random()*10).toString();
  
  try{
    await conectaApi.criaVideo(titulo, descricao, url, imagem);
    window.location.href = '../pages/envio-concluido.html';
  } catch(e) {
    alert(e);
  }
}

formulario.addEventListener('submit', evento => criaVideo(evento));
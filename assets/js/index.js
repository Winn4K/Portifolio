import { MOCK_PROJETOS } from './MOCK.js';
import { MOCK_TECNOLOGIAS } from './MOCK.js';

function mapearProjetos() {

    const dados = MOCK_PROJETOS;
    const projetos = document.getElementById('projetos');

    for (let i = 0; i < dados.length; i++) {

        const novoProjeto = document.createElement('div');
        novoProjeto.className += 'projeto ';
        novoProjeto.className += 'change-color-primary ';
        novoProjeto.className += 'zoom';

        const popupProjeto = document.createElement('div');
        popupProjeto.className += 'linksProjetos'

        const linkGithub = document.createElement('a');
        linkGithub.href = dados[i].linkGithub;

        popupProjeto.appendChild(linkGithub);

        const iconeGithub = document.createElement('i');
        iconeGithub.className += 'fa-brands fa-github-alt iconesProjetos';

        linkGithub.appendChild(iconeGithub);

        const linkProjeto = document.createElement('a');
        linkProjeto.href = dados[i].linkProjeto;

        popupProjeto.appendChild(linkProjeto);

        const iconeSite = document.createElement('i');
        iconeSite.className += 'fa-solid fa-laptop-code iconesProjetos';

        linkProjeto.appendChild(iconeSite);

        novoProjeto.appendChild(popupProjeto);

        const imagem = document.createElement('img');
        imagem.src = dados[i].imagem;
        imagem.alt = dados[i].nome;
        novoProjeto.appendChild(imagem);

        const projetoText = document.createElement('div');
        projetoText.className += 'projeto-text';

        novoProjeto.appendChild(projetoText);

        const titulo = document.createElement('h5');
        titulo.innerText = dados[i].nome;
        const conteudo = document.createElement('p');
        conteudo.innerText = dados[i].descricao;
        const tecnologias = document.createElement('p');
        tecnologias.innerText = dados[i].tecnologias;

        projetoText.appendChild(titulo);
        projetoText.appendChild(conteudo);
        projetoText.appendChild(tecnologias);

        projetos.appendChild(novoProjeto);

        novoProjeto.addEventListener('mouseenter', () => {
            popupProjeto.style.display = 'flex';
        });

        novoProjeto.addEventListener('mouseleave', () => {
            popupProjeto.style.display = 'none';
        });
    };

};

function mapearTecnologias() {
    const dados = MOCK_TECNOLOGIAS;
    const tecnologias = document.getElementById('tecnologias');

    for (let i = 0; i < dados.length; i++) {

        const cardTecnologia = document.createElement('div');
        cardTecnologia.className += 'card-tecnologia ';
        cardTecnologia.className += 'change-color-secondary ';
        cardTecnologia.className += ' zoom';

        const icone = document.createElement('i');
        icone.className += dados[i].classeIcone;

        cardTecnologia.appendChild(icone);

        const titulo = document.createElement('h5');
        titulo.innerText += dados[i].nome;

        cardTecnologia.appendChild(titulo);

        const descricao = document.createElement('p');
        descricao.innerText += dados[i].descricao;

        cardTecnologia.appendChild(descricao);

        tecnologias.appendChild(cardTecnologia);

    }
};

document.addEventListener('DOMContentLoaded', () => {
    mapearProjetos();
    mapearTecnologias();
});

window.addEventListener('scroll', function () {
    const header = document.querySelector('header');
    if (window.scrollY > 1) {
        header.classList.add('fixed-header');
    } else {
        header.classList.remove('fixed-header');
    }
});

const logo = document.getElementById('logo');

logo.addEventListener('click', () => {
    window.scroll(0, 0);
});
function trocarConteudo(pagina) {
    const conteudo = document.getElementById('conteudo');
    switch (pagina) {
        case 'Sobre':
            conteudo.innerHTML = `
                <h1>Sobre Mim</h1>
                <p>Sou estudante de Relações Internacionais e Banco de Dados. Atualmente faço parte do programa de estágio de uma multinacional.</p>
                <img src="imagens/sobre.jpg" alt="Sobre Mim" style="max-width: 100%; height: auto; margin-top: 10px;">
            `;
            break;
        case 'Educação':
            conteudo.innerHTML = `
                <h1>Sobre Mim</h1>
                <p>Atualmente estou no último período da graduação em Relações Internacionais pela Universidade Federal Fluminense e no primeiro semestre da graduação em Banco de Dados pela Uninter.</p>
                <img src="imagens/educ.jpg" alt="Educação" style="max-width: 100%; height: auto; margin-top: 10px;">
            `;
            break;
        case 'Experiência':
            conteudo.innerHTML = `
                <h1>Experiência</h1>
                <p> Participei do programa de Job Rotation da Flash Global, uma multinacional do ramo de logística e comércio exterior.
                Atualmente faço parte do time de estagiários da Pacífica Continental, uma consultoria de RH especializada.</p>
                <img src="imagens/exp.jpg" alt="Experiência" style="max-width: 100%; height: auto; margin-top: 10px;">
            `;
            break;
        case 'Idiomas':
            conteudo.innerHTML = `
                <h1>Idiomas</h1>
                <p> Sou fluente em Inglês em todas as 4 valências da língua: compreensão, leitura, fala e escrita. Também tenho Espanhol intermediário. </p>
                <img src="imagens/idiomas.jpg" alt="Idiomas" style="max-width: 100%; height: auto; margin-top: 10px;">
            `;
            break;
        default:
            conteudo.innerHTML = `
                <h1>Erro</h1>
                <p>O conteúdo solicitado não existe.</p>
            `;
            break;
    }
}

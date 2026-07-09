document.addEventListener('DOMContentLoaded', () => {
    // 1. Rolagem suave ao clicar no botão do Banner Principal (Início)
    const btnConhecer = document.getElementById('btnConhecer');
    if (btnConhecer) {
        btnConhecer.addEventListener('click', () => {
            const secaoSolucoes = document.getElementById('solucoes');
            secaoSolucoes.scrollIntoView({ behavior: 'smooth' });
        });
    }

    // 2. Validação básica e feedback do formulário de Contato
    const formContato = document.getElementById('formContato');
    if (formContato) {
        formContato.addEventListener('submit', (e) => {
            e.preventDefault(); // Impede a página de recarregar
            
            const nome = document.getElementById('nome').value;
            
            // Exibe um feedback nativo ao usuário
            alert(`Obrigado pelo envio, ${nome}! Sua proposta para cidades sustentáveis foi simulada com sucesso.`);
            
            formContato.reset(); // Limpa os campos
        });
    }
});

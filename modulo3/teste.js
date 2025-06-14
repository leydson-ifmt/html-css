// script.js

/**
 * Verifica se a idade fornecida corresponde a uma pessoa maior ou menor de idade.
 *
 * @param {number} idade - A idade a ser verificada.
 * @returns {string} Uma mensagem indicando se a pessoa é maior ou menor de idade.
 */
function verificarMaioridade(idade) {
    if (idade >= 18) {
        return 'Você é maior de idade.';
    } else {
        return 'Você é menor de idade.';
    }
}

// --- Lógica para interagir com o usuário e exibir na página ---

// 1. Obtém a referência para o elemento HTML onde o resultado será exibido.
//    'resultado-idade' é o ID do parágrafo que criamos no HTML.
const elementoResultado = document.getElementById('resultado-idade');

// 2. Solicita a idade ao usuário através de um pop-up.
const entradaIdade = prompt('Por favor, digite sua idade:');

// 3. Converte a entrada para um número inteiro.
const idadeNumerica = parseInt(entradaIdade);

// 4. Verifica se a idade digitada é um número válido.
if (isNaN(idadeNumerica)) {
    // Se for inválido, atualiza o conteúdo do elemento na página com a mensagem de erro.
    elementoResultado.textContent = 'Entrada inválida. Por favor, digite um número válido para a idade.';
    elementoResultado.style.color = 'red'; // Opcional: muda a cor para vermelho para erros
} else {
    // 5. Se for um número válido, chama a função de verificação.
    const resultadoMensagem = verificarMaioridade(idadeNumerica);

    // 6. Atualiza o conteúdo do elemento na página com a mensagem de resultado.
    elementoResultado.textContent = `Você digitou: ${idadeNumerica} anos. ${resultadoMensagem}`;
    elementoResultado.style.color = 'green'; // Opcional: muda a cor para verde para sucesso
}

// O console.log ainda pode ser usado para depuração, mas o resultado principal agora vai para a página.
// console.log("Código JavaScript executado!");
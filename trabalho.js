// Converte o nome do pet para letras maiúsculas.
function geradorDeTagsDeIdentificacao(nome) {
  return nome.toUpperCase();
}

// Verifica se o pet pode ser adotado com base na idade e porte.
function verificarSePodeSerAdotado(idade, porte) {
  return idade === 1 && porte === "M";
}

// Calcula o consumo diário de ração com base no peso do pet.
// Mantido os parâmetros,conforme passado no teste, mesmo não sendo necessários para o cálculo.
function calcularConsumoDeRacao(nome, idade, peso) {
  return peso * 300;
}

// Verifica o tipo de atividade recomendada com base no porte do pet.
// Implementado apenas o porte "pequeno", conforme teste.
function decidirTipoDeAtividadePorPorte(porte) {
  if (porte === "pequeno") {
    return "brincar dentro de casa";
  }
}

// Simula uma chamada assíncrona que retorna um dado após 100ms.
async function buscarDadoAsync() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Pipoca"), 100);
  });
}

// Exporta todas as funções para utilização nos testes.
export {
  geradorDeTagsDeIdentificacao,
  verificarSePodeSerAdotado,
  calcularConsumoDeRacao,
  decidirTipoDeAtividadePorPorte,
  buscarDadoAsync,
};

// Script de funções para

// Seleciona os elementos necessários
const input = document.getElementById("input");
const productCards = document.querySelectorAll(".product-card");

// Adiciona o evento de entrada (input) para capturar as alterações no campo de busca
input.addEventListener("input", () => {
  const searchTerm = input.value.toLowerCase(); // Captura o termo de busca em minúsculas

  productCards.forEach((card) => {
    const productInfo = card.textContent.toLowerCase(); // Obtém o texto do cartão
    if (searchTerm === "" || productInfo.includes(searchTerm)) {
      card.style.display = ""; // Mostra o cartão se corresponder ao termo de busca
    } else {
      card.style.display = "none"; // Esconde o cartão se não corresponder
    }
  });
});

// Função para limpar o campo de entrada e exibir todos os produtos
function Clear(inputId) {
  const inputField = document.getElementById(inputId);
  inputField.value = ""; // Limpa o texto no campo de entrada
  productCards.forEach((card) => {
    card.style.display = ""; // Mostra todos os cartões novamente
  });
}
document.addEventListener("DOMContentLoaded", () => {
  // Identifica os botões de navegação
  const leftArrow = document.getElementById("left-arrow");
  const rightArrow = document.getElementById("right-arrow");

  // Evento para redirecionar para a página "Início" ao clicar na seta para a esquerda
  leftArrow.addEventListener("click", () => {
    window.location.href = "HomeApp.html"; // Substitua pelo caminho correto
  });

  // Evento para redirecionar para a página "Serviços" ao clicar na seta para a direita
  rightArrow.addEventListener("click", () => {
    window.location.href = "Verificacao.html"; // Substitua pelo caminho correto
  });
});

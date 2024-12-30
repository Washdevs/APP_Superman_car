console.log('Script carregado corretamente.');

// Script de funções para

// Seleciona os elementos necessários
const input = document.getElementById('input');
const productCards = document.querySelectorAll('.product-card');

// Adiciona o evento de entrada (input) para capturar as alterações no campo de busca
input.addEventListener('input', () => {
  const searchTerm = input.value.toLowerCase(); // Captura o termo de busca em minúsculas

  productCards.forEach((card) => {
    const productInfo = card.textContent.toLowerCase(); // Obtém o texto do cartão
    if (searchTerm === '' || productInfo.includes(searchTerm)) {
      card.style.display = ''; // Mostra o cartão se corresponder ao termo de busca
    } else {
      card.style.display = 'none'; // Esconde o cartão se não corresponder
    }
  });
});

// Função para limpar o campo de entrada e exibir todos os produtos
function Clear(inputId) {
  const inputField = document.getElementById(inputId);
  inputField.value = ''; // Limpa o texto no campo de entrada
  productCards.forEach((card) => {
    card.style.display = ''; // Mostra todos os cartões novamente
  });
}
document.addEventListener('DOMContentLoaded', () => {
  // Identifica os botões de navegação
  const leftArrow = document.getElementById('left-arrow');
  const rightArrow = document.getElementById('right-arrow');

  // Evento para redirecionar para a página "Início" ao clicar na seta para a esquerda
  leftArrow.addEventListener('click', () => {
    window.location.href = 'HomeApp.html'; // Substitua pelo caminho correto
  });

  // Evento para redirecionar para a página "Serviços" ao clicar na seta para a direita
  rightArrow.addEventListener('click', () => {
    window.location.href = 'Verificacao.html'; // Substitua pelo caminho correto
  });
});



// Seleciona todos os botões que abrem o modal
const openModalButtons = document.querySelectorAll('.openModal');
const closeModalButton = document.getElementById('closeModal');
const modal = document.getElementById('modal');
const modalBody = document.getElementById('modalBody');

// Função para carregar conteúdo externo
function loadExternalContent() {
  fetch('DescProduto.html') // Busca o arquivo externo
    .then(response => {
      if (!response.ok) {
        throw new Error('Erro ao carregar conteúdo do modal.');
      }
      return response.text(); // Converte a resposta para texto
    })
    .then(html => {
      modalBody.innerHTML = html; // Insere o conteúdo no modal
    })
    .catch(error => {
      modalBody.innerHTML = '<p>Erro ao carregar conteúdo.</p>'; // Mostra uma mensagem de erro
      console.error(error);
    });
    console.log('Deu Certo');
}

// Adiciona evento de clique a todos os botões que abrem o modal
openModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    loadExternalContent(); // Carrega o conteúdo do modal
    modal.style.display = 'flex'; // Exibe o modal
  });
});

// Fecha o modal
closeModalButton.addEventListener('click', () => {
  modal.style.display = 'none'; // Oculta o modal
});

// Fecha o modal ao clicar fora do conteúdo
window.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.style.display = 'none'; // Oculta o modal
  }
});


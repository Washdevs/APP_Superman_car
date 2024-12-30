console.log('Script carregado corretamente.');

// Certifica-se de que o script será executado após o DOM estar carregado
document.addEventListener('DOMContentLoaded', () => {
  console.log('Script carregado corretamente.');

  // Seleciona os elementos necessários
  const input = document.getElementById('input');
  const productCards = document.querySelectorAll('.product-card');
  const openModalButtons = document.querySelectorAll('.openModal');
  const closeModalButton = document.getElementById('closeModal');
  const modal = document.getElementById('modal');
  const modalBody = document.getElementById('modalBody');

  // Adiciona o evento de entrada (input) para capturar as alterações no campo de busca
  if (input && productCards.length) {
    input.addEventListener('input', () => {
      const searchTerm = input.value.toLowerCase(); // Captura o termo de busca em minúsculas

      productCards.forEach((card) => {
        const productInfo = card.textContent.toLowerCase(); // Obtém o texto do cartão
        card.style.display = productInfo.includes(searchTerm) ? '' : 'none'; // Mostra ou esconde os cartões
      });
    });
  } else {
    console.error('Elemento input ou productCards não encontrado no DOM.');
  }

  // Adiciona evento de clique a todos os botões que abrem o modal
  if (openModalButtons.length) {
    openModalButtons.forEach((button) => {
      button.addEventListener('click', () => {
        loadExternalContent(); // Carrega o conteúdo do modal
        if (modal) {
          modal.style.display = 'flex'; // Exibe o modal
        } else {
          console.error('Elemento modal não encontrado no DOM.');
        }
      });
    });
  } else {
    console.error('Nenhum botão encontrado para abrir o modal.');
  }

  // Função para carregar conteúdo externo
  function loadExternalContent() {
    if (modalBody) {
      fetch('DescProduto.html') // Busca o arquivo externo
        .then((response) => {
          if (!response.ok) {
            throw new Error('Erro ao carregar conteúdo do modal.');
          }
          return response.text(); // Converte a resposta para texto
        })
        .then((html) => {
          modalBody.innerHTML = html; // Insere o conteúdo no modal
        })
        .catch((error) => {
          modalBody.innerHTML = '<p>Erro ao carregar conteúdo.</p>'; // Mostra uma mensagem de erro
          console.error(error);
        });
      console.log('Conteúdo do modal carregado com sucesso.');
    } else {
      console.error('Elemento modalBody não encontrado no DOM.');
    }
  }

  // Adiciona evento para fechar o modal
  if (closeModalButton) {
    closeModalButton.addEventListener('click', () => {
      if (modal) {
        modal.style.display = 'none'; // Oculta o modal
      } else {
        console.error('Elemento modal não encontrado no DOM.');
      }
    });
  } else {
    console.error('Elemento closeModalButton não encontrado no DOM.');
  }

  // Fecha o modal ao clicar fora do conteúdo
  if (modal) {
    window.addEventListener('click', (event) => {
      if (event.target === modal) {
        modal.style.display = 'none'; // Oculta o modal
      }
    });
  } else {
    console.error('Elemento modal não encontrado no DOM.');
  }

  // Função para limpar o campo de entrada e exibir todos os produtos
  function Clear(inputId) {
    const inputField = document.getElementById(inputId);
    if (inputField) {
      inputField.value = ''; // Limpa o texto no campo de entrada
      productCards.forEach((card) => {
        card.style.display = ''; // Mostra todos os cartões novamente
      });
    } else {
      console.error(`Elemento com ID ${inputId} não encontrado no DOM.`);
    }
  }

  // Identifica os botões de navegação
  const leftArrow = document.getElementById('left-arrow');
  const rightArrow = document.getElementById('right-arrow');

  if (leftArrow) {
    leftArrow.addEventListener('click', () => {
      window.location.href = 'HomeApp.html'; // Substitua pelo caminho correto
    });
  } else {
    console.error('Elemento leftArrow não encontrado no DOM.');
  }

  if (rightArrow) {
    rightArrow.addEventListener('click', () => {
      window.location.href = 'Verificacao.html'; // Substitua pelo caminho correto
    });
  } else {
    console.error('Elemento rightArrow não encontrado no DOM.');
  }
});

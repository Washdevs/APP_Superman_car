console.log('Script carregado corretamente.');

// Certifica-se de que o script será executado após o DOM estar carregado
document.addEventListener('DOMContentLoaded', () => {
  console.log('Script carregado corretamente.');

  // Seleciona os elementos necessários
  const input = document.getElementById('input');
  const productCards = document.querySelectorAll(
    '.product-card, .product-item',
  );
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

function Clear() {
  const inputField = document.getElementById('input');
  const productCards = document.querySelectorAll(
    '.product-card, .product-item',
  );

  if (inputField) {
    inputField.value = ''; // Limpa o texto no campo de pesquisa
    productCards.forEach((card) => {
      card.style.display = ''; // Restaura a exibição padrão dos cartões
    });
  } else {
    console.error('Campo de entrada não encontrado.');
  }
}

let scrollAmount = 0; // Controle do deslocamento horizontal

function scrollLeft() {
  const container = document.getElementById('brand-icons');
  const imageWidth = container.children[0].offsetWidth + 20; // Inclui o espaçamento entre imagens (gap)
  const maxScrollLeft = 0; // Limite no início
  // Calcula o novo deslocamento
  if (scrollAmount - imageWidth <= maxScrollLeft) {
    // Se atingir o início, volta ao final
    scrollAmount = container.scrollWidth - container.clientWidth;
  } else {
    scrollAmount -= imageWidth; // Move para a esquerda
  }

  container.style.transform = `translateX(-${scrollAmount}px)`; // Aplica o deslocamento
}

function scrollRight() {
  const container = document.getElementById('brand-icons');
  const imageWidth = container.children[0].offsetWidth + 20; // Inclui o espaçamento entre imagens (gap)
  const maxScrollRight = container.scrollWidth - container.clientWidth; // Limite no final
  // Calcula o novo deslocamento
  if (scrollAmount + imageWidth >= maxScrollRight) {
    // Se atingir o final, volta ao início
    scrollAmount = 0;
  } else {
    scrollAmount += imageWidth; // Move para a direita
  }
  container.style.transform = `translateX(-${scrollAmount}px)`; // Aplica o deslocamento
}

//Função para chamar Dados do Banco
async function buscarDados() {
  try {
    const resposta = await fetch('http://localhost:3000/dados');
    const dados = await resposta.json();

    // Manipular os dados
    console.log(dados);
    exibirDados(dados);
  } catch (erro) {
    console.error('Erro ao buscar dados:', erro);
  }
}

function exibirDados(dados) {
  const container = document.getElementById('product-item');
  container.innerHTML = ''; // Limpar conteúdo existente antes de adicionar os novos itens
  dados.forEach((item) => {
    const elemento = document.createElement('div');
    elemento.classList.add('product-item');
    elemento.innerHTML = `
      <img src="imagens/${
        item.imagem
      }" class="openModal" alt="Imagem do produto ${item.nome}" />
      <div class="product-details">
        <span class="badge badge-red">${item.marca}</span>
        <h2>${item.nome}</h2>
        <span class="stock">Estoque ${item.estoque}</span>
        <div class="badge badge-blue">Valor Estoque R$ ${item.valorEstoque.toFixed(
          2,
        )}</div>
        <div class="price">R$ ${item.preco.toFixed(2)}</div>
        <div class="btn-detail openModal">Ver Detalhe</div>
      </div>
    `;
    container.appendChild(elemento);
  });
}

buscarDados();

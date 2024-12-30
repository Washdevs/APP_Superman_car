const openModalButton = document.getElementById('openModal');
const closeModalButton = document.getElementById('closeModal');
const modal = document.getElementById('modal');

// Abre o modal
openModalButton.addEventListener('click', () => {
  modal.style.display = 'flex'; // Exibe o modal
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

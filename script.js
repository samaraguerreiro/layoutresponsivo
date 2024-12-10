// Função para contar cliques em cada botão
function setupButtonClick(buttonId, counterId) {
    let clickCount = 0;
    const button = document.getElementById(buttonId);
    const counter = document.getElementById(counterId);
  
    button.addEventListener('click', () => {
      clickCount++;
      counter.textContent = clickCount;
    });
  }
  
  // Configurar os botões de clique
  setupButtonClick('click-button-1', 'click-count-1');
  setupButtonClick('click-button-2', 'click-count-2');
  setupButtonClick('click-button-3', 'click-count-3');
  
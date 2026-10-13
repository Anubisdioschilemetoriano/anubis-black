// ANUBIS BLACK — Core Interaction Script

document.addEventListener('DOMContentLoaded', () => {
  // Simulated loading progress animation
  const progress = document.getElementById('progress');
  const percentEl = document.getElementById('load-percent');
  
  if (progress && percentEl) {
    let current = 70;
    const target = 100;
    const interval = setInterval(() => {
      current += Math.random() * 3 + 1;
      if (current >= target) {
        current = target;
        clearInterval(interval);
        percentEl.textContent = '100%';
        progress.style.width = '100%';
      } else {
        percentEl.textContent = Math.floor(current) + '%';
        progress.style.width = current + '%';
      }
    }, 180);
  }

  // Enter / Continue button
  const enterBtn = document.getElementById('enter-btn');
  if (enterBtn) {
    enterBtn.addEventListener('click', () => {
      showModal();
    });
  }

  // Contact form (if present)
  const form = document.getElementById('private-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      showModal(
        'TRANSMISIÓN REGISTRADA',
        'Tu mensaje ha sido cifrado y enviado al núcleo de mando. Solo personal autorizado recibirá respuesta a través de canales seguros.'
      );
      form.reset();
    });
  }
});

function showModal(title = 'CANAL ENCRIPTADO', message = 'Solicitud registrada en el sistema central.<br>Respuesta exclusiva para personal autorizado bajo protocolo STORM.') {
  // Remove existing
  document.querySelector('.modal-overlay')?.remove();

  const overlay = document.createElement('div');
  overlay.className = 'modal-overlay';
  overlay.innerHTML = `
    <div class="modal-box">
      <div class="title">${title}</div>
      <p>${message}</p>
      <button onclick="this.closest('.modal-overlay').remove()">CERRAR</button>
    </div>
  `;
  document.body.appendChild(overlay);

  // Close on background click
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) overlay.remove();
  });
}

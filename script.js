function mostrarMensaje() {
  const alertContainer = document.createElement('div');
  alertContainer.classList.add('alert-container');

  const alertMessage = document.createElement('p');
  alertMessage.classList.add('alert-message');
  alertMessage.textContent = "Recuerda usar condon simpre tengas relaciones sexuales, si no quieres tener lo de las imagenes anteriores recuerda que sin globo no hay fiesta";
  
  const closeButton = document.createElement('span');
  closeButton.classList.add('close-button');
  closeButton.textContent = '×';
  closeButton.addEventListener('click', function() {
    alertContainer.remove();
  });

  alertContainer.appendChild(alertMessage);
  alertContainer.appendChild(closeButton);
  document.body.appendChild(alertContainer);
}

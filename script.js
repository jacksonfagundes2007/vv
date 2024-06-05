const button = document.getElementById('myButton');
button.classList.add('button');

button.classList.add('animate_confetti');

const message = document.createElement('div');
const rapunzel = document.createElement('img');
const chameleon = document.createElement('img');

rapunzel.src = 'archives/rap.gif'; // Replace with the actual image path

chameleon.src = 'archives/chamelo.gif'; // Replace with the actual image path'

rapunzel.style.width = '200px'; // Adjust image width as needed
button.addEventListener('click', () => {

  let params = {
    particleCount: 500, // Quantidade de confetes
    spread: 90, // O quanto eles se espalham
    startVelocity: 70, // Velocidade inicial
    origin: { x: 0, y: 0.5 }, // Posição inicial na tela
    angle: 45 // Ângulo em que os confetes serão lançados
  };

  // Joga confetes da esquerda pra direita
  confetti(params);

  // Joga confetes da direita para a esquerda
  params.origin.x = 1;
  params.angle = 135;
  confetti(params);
  
  message.innerHTML = `
    <div class="container">
    <h1 class="neonText">
          te amo <br> Viviane
    </h1>

 </div>
  `;
  
  document.body.appendChild(message);
  button.style.display = 'none';

  // Adding slide-in class to rapunzel and chameleon
  rapunzel.textContent = "Rapunzel";
  rapunzel.style.position = 'absolute';
  rapunzel.style.top = '90vh';
  rapunzel.style.left = '0';
  rapunzel.style.transform = 'translateY(-50%)';
  rapunzel.classList.add('slide-in');
  document.body.appendChild(rapunzel);

  chameleon.textContent = "O camaleão dela";
  chameleon.style.position = 'absolute';
  chameleon.style.top = '50%';
  chameleon.style.right = '0';
  chameleon.style.transform = 'translateY(-50%)';
  chameleon.classList.add('slide-in');
  document.body.appendChild(chameleon);

  // Add a small delay to make the animation smoother
  setTimeout(() => {
    rapunzel.classList.add('show');
    chameleon.classList.add('show');
  }, 100); // Adjust delay as needed
});
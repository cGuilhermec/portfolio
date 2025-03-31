// Função que exibe o nome com efeito de digitação
const name = "Guilherme Carvalho";
const splash = document.getElementById("splash");
const navbar = document.getElementById("navbar");
const sections = document.querySelectorAll(".hidden"); // Seleciona todas as seções escondidas
// Bloquear rolagem ao exibir o splash
document.body.classList.add('no-scroll');
document.documentElement.classList.add('no-scroll');

// Cria o efeito de digitação no Splash
name.split("").forEach((char, index) => {
  const span = document.createElement("span");
  span.textContent = char;
  span.classList.add("letter");
  span.style.animationDelay = `${index * 0.2}s`;
  splash.appendChild(span);
});

// Remover bloqueio após 3 segundos (exemplo)
setTimeout(() => {
  document.body.classList.remove('no-scroll');
  document.documentElement.classList.remove('no-scroll');
  // document.querySelector('.splash-screen')?.classList.add('hidden');
}, 8000);

// Após a animação, mostra o conteúdo principal
setTimeout(() => {
  splash.classList.add("hidden"); // Esconde o splash
  navbar.classList.add("show"); // Mostra o header

  // Mostra todas as seções escondidas
  sections.forEach((section) => {
    section.classList.remove("hidden");
  });

  // Remove o splash do DOM
  setTimeout(() => {
    splash.style.display = "none";
  }, 1000);
}, 2000 + name.length * 200);

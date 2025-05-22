
function updateTimer() {
  const startDate = new Date("2022-05-22T00:00:00");
  const now = new Date();
  const diff = now - startDate;

  const years = now.getFullYear() - startDate.getFullYear();
  const months = now.getMonth() - startDate.getMonth() + (years * 12);
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  document.getElementById("timer").innerText = 
    `${Math.floor(days/365)} anos, ${months % 12} meses, ${days % 30} dias, ${hours} horas, ${minutes} minutos e ${seconds} segundos`;
}

setInterval(updateTimer, 1000);
updateTimer();

function createHeart() {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.style.left = Math.random() * 100 + "vw";
  document.getElementById("hearts-container").appendChild(heart);
  setTimeout(() => heart.remove(), 5000);
}

setInterval(createHeart, 300);



// Gerar corações roxos caindo
setInterval(() => {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = 3 + Math.random() * 3 + "s";
  document.querySelector('.hearts-container').appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 6000);
}, 300);



// Mostrar conteúdo principal após clique
document.getElementById('enter-button').addEventListener('click', () => {
  document.getElementById('intro-screen').style.display = 'none';
  document.getElementById('main-content').style.display = 'block';
});

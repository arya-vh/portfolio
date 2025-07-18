document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('next-btn');
  if (btn) {
    btn.addEventListener('click', () => {
      document.body.classList.add('fade-out');
      setTimeout(() => window.location.href = 'language.html', 600);
    });
  }

  if (window.location.pathname.includes('portfolio')) {
    const title = document.getElementById('portfolio-title');
    const projects = document.getElementById('projects');

    if (window.location.pathname.endsWith('portfolio-jap.html')) {
      title.textContent = "私のポートフォリオ";
      projects.textContent = "こちらは私の日本語のプロジェクトです。";
    } else {
      title.textContent = "My Portfolio";
      projects.textContent = "Here are my projects in English.";
    }
  }

  function createSakura() {
    const sakura = document.createElement("div");
    sakura.classList.add("sakura");
    sakura.style.left = Math.random() * 100 + "vw";
    sakura.style.animationDuration = 3 + Math.random() * 2 + "s";
    document.body.appendChild(sakura);

    setTimeout(() => {
      sakura.remove();
    }, 5000);
  }

  setInterval(createSakura, 300);
});

document.addEventListener('DOMContentLoaded', function () {
  document.getElementById("btnNo").addEventListener("click", function () {
    let btn = this;
    let btnYes = document.getElementById("btnYes");
    let maxX = window.innerWidth - btn.clientWidth;
    let maxY = window.innerHeight - btn.clientHeight;

    let randomX = Math.floor(Math.random() * maxX);
    let randomY = Math.floor(Math.random() * maxY);

    let col = document.getElementById("colYes");
    btn.style.left = randomX + "px";
    btn.style.top = randomY + "px";

    let currentWidth = btn.offsetWidth;
    let currentHeight = btn.offsetHeight;
    let currentW = btnYes.offsetWidth;
    let currentH = btnYes.offsetHeight;

    if (currentWidth > 30 && currentHeight > 15) {
      btn.style.width = (currentWidth * 0.95) + "px";
      btnYes.style.width = (currentW * 1.2) + "px";

      col.classList.remove("col-6");
      col.classList.toggle("col-12");
      btn.style.fontSize = (parseFloat(window.getComputedStyle(btn).fontSize) * 0.95) + "px"; // 5% menos
      btn.style.padding = (parseFloat(window.getComputedStyle(btn).padding) * 0.95) + "px"; // 5% menos
    }
  });
  let audio = new Audio("assets/image/yes.mp3");
  document.getElementById("btnYes").addEventListener("click", function () {
    if (!audio.paused) {
      audio.pause();
    } else {
      audio.play();
    }

    let row = document.getElementById("firstRow");
    let row2 = document.getElementById("secondRow");
    row.classList.toggle("d-none");
    row2.classList.toggle("d-none");

  });
  window.addEventListener("load", function () {
    const numStarts = 150;
    for (let i = 0; i < numStarts; i++) {
      let star = document.createElement("div");
      star.classList.add("star");

      let size = Math.random() * 3 + 1;
      let x = Math.random() * window.innerWidth;
      let y = Math.random() * window.innerHeight;
      let delay = Math.random() * 3;

      star.style.width = `${size}px`;
      star.style.height = `${size}px`;
      star.style.left = `${x}px`;
      star.style.top = `${y}px`;
      star.style.animationDelay = `${delay}s`;
      document.body.appendChild(star);
    }
  });

});
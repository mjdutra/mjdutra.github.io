let countClicks = 0;
let bigCookie = document.getElementById("bigCookie");
bigCookie.addEventListener("click", () => {
  countClicks++;
  if (countClicks % 3 === 0 && countClicks <= 18) {
    bigCookie.style.backgroundImage = `url('assets/img/crackCookie${
      countClicks / 3
    }.png')`;
  }
  if (countClicks === 19) {
    bigCookie.classList.add("glow");
    bigCookie.style.width = 0;
    bigCookie.style.height = 0;
  }
  bigCookie.addEventListener("animationend", () => {
    const params = new URLSearchParams(window.location.search);
    // link.href = `reacipe.html?${params.toString()}`;
    window.location.href = `reacipe.html?${params.toString()}`;
  });
});

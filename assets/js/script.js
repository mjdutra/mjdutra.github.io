function changeImage() {
  let currentScroll = 0;

  let welcomeSection = document.getElementById("welcome");
  let welcomeEnd = welcomeSection.offsetTop + welcomeSection.offsetHeight - 320;
  if (window.innerWidth > 768) {
    welcomeEnd = welcomeSection.offsetTop + welcomeSection.offsetHeight - 420;
  }
  window.addEventListener("scroll", () => {
    currentScroll = window.scrollY;
    let pageHeight = document.documentElement.scrollHeight - window.innerHeight;
    // var x = ((elem_width * scale) - elem_width) / 2;
    // var y = ((elem_height * scale) - elem_height) / 2;

    if (currentScroll < pageHeight * 0.1) {
      document.getElementById("cirle1").style.display = "none";
      document.getElementById("cirle2").style.display = "none";
      document.getElementById("cirle3").style.display = "none";
      document.querySelector(".circulo").style.display = "block";
    } else if (currentScroll < pageHeight * 0.15) {
      document.getElementById("cirle1").style.display = "block";
      document.getElementById("cirle2").style.display = "none";
      document.getElementById("cirle3").style.display = "none";
      document.querySelector(".circulo").style.display = "none";
    } else if (currentScroll < pageHeight * 0.2) {
      document.getElementById("cirle1").style.display = "none";
      document.getElementById("cirle2").style.display = "block";
      document.getElementById("cirle3").style.display = "none";
      document.querySelector(".circulo").style.display = "none";
    } else if (currentScroll < welcomeEnd) {
      document.getElementById("cirle1").style.display = "none";
      document.getElementById("cirle2").style.display = "none";
      document.getElementById("cirle3").style.display = "block";
      document.getElementById(
        "cirle3"
      ).style.transform = `scale(0.8) translate(-62%,-62%)`;
      document.querySelector(".circulo").style.display = "none";
    } else {
      document.getElementById("cirle1").style.display = "none";
      document.getElementById("cirle2").style.display = "none";
      document.getElementById("cirle3").style.display = "none";
      document.querySelector(".circulo").style.display = "none";
    }
  });
  if (window.scrollY > welcomeEnd) {
    document.getElementById("cirle1").style.display = "none";
    document.getElementById("cirle2").style.display = "none";
    document.getElementById("cirle3").style.display = "none";
    document.querySelector(".circulo").style.display = "none";
  }
}
changeImage();

document.addEventListener("DOMContentLoaded", () => {
  let switch1 = document.getElementsByClassName("switch")[0];
  let slider1 = document.getElementsByClassName("slider")[0];
  let checkbox = switch1.querySelector('input[type="checkbox"]');

  switch1.addEventListener("click", (event) => {
    event.preventDefault();

    checkbox.checked = !checkbox.checked;

    if (slider1.classList.contains("light")) {
      slider1.classList.remove("light");
      switch1.classList.remove("light");
      document.getElementById("hero").classList.remove("light");
      document.getElementById("welcome").classList.remove("light");
      document.getElementById("history").classList.remove("light");
      document.getElementById("typesSushi").classList.remove("light");
      document.getElementById("gallery").classList.remove("light");
      document.querySelectorAll(".line").forEach((element) => {
        element.classList.remove("light");
      });
    } else {
      slider1.classList.add("light");
      switch1.classList.add("light");
      document.getElementById("hero").classList.add("light");
      document.getElementById("welcome").classList.add("light");
      document.getElementById("history").classList.add("light");
      document.getElementById("typesSushi").classList.add("light");
      document.getElementById("gallery").classList.add("light");
      document.querySelectorAll(".line").forEach((element) => {
        element.classList.add("light");
      });
    }
  });
});

document.querySelectorAll(".plate").forEach((button) => {
  button.addEventListener("click", () => {
    const sushiType = button.getAttribute("data-type");
    window.location.href = `infoSushi.html?sushiType=${sushiType}`;
  });
});

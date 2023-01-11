let a = document.querySelectorAll(".nav-item");
let divContent = document.querySelectorAll(".div-content");
for (let i = 0; i < a.length; i++) {
  a[i].addEventListener("click", (e) => {
    e.preventDefault();
  });
}

window.addEventListener("load", () => {
  for (j = 0; j < divContent.length; j++) {
    divContent[j].classList.add("hidden");
    document.querySelector(".welcome-msg").classList.remove("hidden");
    document.querySelector(".intro-div").classList.add("hidden");
  }
});

a[0].addEventListener("click", function () {
  for (j = 0; j < divContent.length; j++) {
      divContent[j].classList.add("hidden");
    document.querySelector(".welcome-msg").classList.add("hidden");
    document.querySelector(".intro-div").classList.remove("hidden");
    }
    
    for (let g = 0; g < a.length; g++){
        a[g].classList.remove("active");
        a[0].classList.add("active")
    }
});

a[1].addEventListener("click", function () {
  for (let j = 0; j < divContent.length; j++) {
    divContent[j].classList.add("hidden");
    document.querySelector(".welcome-msg").classList.add("hidden");
      document.querySelector(".skill-div").classList.remove("hidden");
      
        for (let g = 0; g < a.length; g++) {
          a[g].classList.remove("active");
          a[1].classList.add("active");
        }
  }
});

a[2].addEventListener("click", function () {
  for (let j = 0; j < divContent.length; j++) {
    divContent[j].classList.add("hidden");
    document.querySelector(".welcome-msg").classList.add("hidden");
      document.querySelector(".project-div").classList.remove("hidden");
      
        for (let g = 0; g < a.length; g++) {
          a[g].classList.remove("active");
          a[2].classList.add("active");
        }
  }
});

a[3].addEventListener("click", function () {
  for (let j = 0; j < divContent.length; j++) {
    divContent[j].classList.add("hidden");
    document.querySelector(".welcome-msg").classList.add("hidden");
    document.querySelector(".triumph-div").classList.remove("hidden");

    for (let g = 0; g < a.length; g++) {
      a[g].classList.remove("active");
      a[3].classList.add("active");
    }
  }
});

a[4].addEventListener("click", function () {
  for (let j = 0; j < divContent.length; j++) {
    divContent[j].classList.add("hidden");
    document.querySelector(".welcome-msg").classList.add("hidden");
      document.querySelector(".cont-div").classList.remove("hidden");
      
        for (let g = 0; g < a.length; g++) {
          a[g].classList.remove("active");
          a[4].classList.add("active");
        }
  }
});

// hamburger

let hamburger = document.querySelector(".hamburger");
hamburger.addEventListener("click", () => {
  let navbar = document.querySelector(".navbar");
  navbar.classList.toggle("active");
    hamburger.classList.toggle("active");
    
    let navitem  = document.querySelectorAll("nav-")
});

let links = document.querySelector(".a");

for (let i = 0; i < links.length; i++) {
  links[i].addEventListener("click", (e) => {
    e.preventDefault();
  });
}
let randDiv = Math.floor(Math.random() * divContent.length);
let currentDiv = divContent[randDiv];
for (let u = 0; u < divContent.length; u++) {
  if (divContent[u].classList.contains("welcome-msg")) {
    let contBtn = document.querySelector(".continue-btn");
    contBtn.addEventListener("click", () => {
      document.querySelector(".intro-div").classList.remove("hidden");
        document.querySelector(".welcome-msg").classList.add("hidden");
        a[0].classList.add("active");
    });
  }
}


let killModalBtn = document.querySelector("#kill");
killModalBtn.addEventListener("click", () => {
    document.querySelector(".modal").style.display = 'none';
})
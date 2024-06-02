// humberger-menu

document.getElementById("hamburger").addEventListener("click", function () {
  this.classList.toggle("actives");
  document.getElementById("sideMenu").classList.toggle("actives");
});

// onscroll-background-color

window.addEventListener("scroll", function () {
  const navbar = document.querySelector("header");
  if (window.scrollY > 0) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// menu-hover-active

document.querySelectorAll(".nav-bar li a").forEach((link) => {
  link.addEventListener("mouseover", () => {
    document.querySelector(".nav-bar .active").style.borderBottom = "none";
  });
  link.addEventListener("mouseout", () => {
    document.querySelector(".nav-bar .active").style.borderBottom =
      "1px solid #fff";
  });
});

// First Swiper initialization slider

var swiperone = new Swiper("#swiperone", {
  cssMode: true,
  navigation: {
    nextEl: "#swiperone .swiper-button-next",
    prevEl: "#swiperone .swiper-button-prev",
  },
  pagination: {
    el: "#swiperone .swiper-pagination",
  },
  mousewheel: true,
  keyboard: true,
});

// Second Swiper initialization testimonial

var swipertwo = new Swiper("#swipertwo", {
  pagination: {
    el: "#swipertwo .swiper-pagination",
  },
});

// chat model

document.querySelector(".my-btn").addEventListener("click", function () {
  document.getElementById("chatModal").style.display = "flex";
});

document.querySelector(".close-btn").addEventListener("click", function () {
  document.getElementById("chatModal").style.display = "none";
});

window.addEventListener("click", function (event) {
  if (event.target == document.getElementById("chatModal")) {
    document.getElementById("chatModal").style.display = "none";
  }
});

document.getElementById("sendBtn").addEventListener("click", function () {
  let message = document.getElementById("chatInput").value;
  if (message.trim() !== "") {
    let messagesDiv = document.querySelector(".messages");
    let newMessage = document.createElement("div");
    newMessage.textContent = message;
    messagesDiv.appendChild(newMessage);
    document.getElementById("chatInput").value = "";
  }
});

// call-model

document
  .getElementById("callbackForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    document.getElementById("callbackModal").style.display = "flex";
  });

document.querySelector(".close-btns").addEventListener("click", function () {
  document.getElementById("callbackModal").style.display = "none";
});

window.addEventListener("click", function (event) {
  if (event.target == document.getElementById("callbackModal")) {
    document.getElementById("callbackModal").style.display = "none";
  }
});

//   cta section

document.querySelectorAll(".cta-btn").forEach(function (button) {
  button.addEventListener("click", function () {
    document.getElementById("myModal").style.display = "flex";
    console.log("click");
  });
});

document.getElementById("closeModalBtn").addEventListener("click", function () {
  document.getElementById("myModal").style.display = "none";
});

window.addEventListener("click", function (event) {
  if (event.target == document.getElementById("myModal")) {
    document.getElementById("myModal").style.display = "none";
  }
});

// tab-section

function openTab(evt, tabName) {
  let i, tabcontent, tablinks, indicator;

  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";

  indicator = document.getElementById("tab-indicator");
  indicator.style.width = evt.currentTarget.offsetWidth + "px";
  indicator.style.left = evt.currentTarget.offsetLeft + "px";
}

document.addEventListener("DOMContentLoaded", function () {
  document.querySelector(".tablinks").click();
});

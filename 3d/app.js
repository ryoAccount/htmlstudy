const container = document.querySelector(".container");
const effect_area = document.querySelector(".effect_area");
const talk_man = document.querySelector(".talk_man img");
const message = document.querySelector(".message");
const h2 = document.querySelector(".message h2");
const h3 = document.querySelector(".message h3");

container.addEventListener("mousemove", (e) => {
    let x = (window.innerWidth / 2 - e.pageX) / 20;
    let y = (window.innerHeight / 2 - e.pageY) / 20;
    let z = x + y;
    let translate = Math.abs(z) > 10 ? 100 : Math.abs(z) * 10;
    effect_area.style.transform = `rotateX(${y}deg) rotateY(${x}deg)`;
    talk_man.style.transform = `translateZ(${translate}px) rotateZ(${z}deg)`;
    document.getElementById("rotateX").value = `${y}deg`;
    document.getElementById("rotateY").value = `${x}deg`;
    document.getElementById("rotateZ").value = `${z}deg`;
    document.getElementById("translateZ").value = `${translate}px`;
})

container.addEventListener("mouseenter", (e) => {
    effect_area.style.transition = "none";
    h2.style.transform = "translateZ(120px)";
    h3.style.transform = "translateZ(120px)";
})

container.addEventListener("mouseleave", (e) => {
    effect_area.style.transition = "all 1s ease";

    container.style.transform = "rotateX(0deg) rotateY(0deg)";
    effect_area.style.transform = "rotateX(0deg) rotateY(0deg)";
    talk_man.style.transform = "translateZ(0px) rotateZ(0deg)";
    h2.style.transform = "translateZ(0px)";
    h3.style.transform = "translateZ(0px)";
    document.getElementById("rotateX").value = 0;
    document.getElementById("rotateY").value = 0;
    document.getElementById("rotateZ").value = 0;
    document.getElementById("translateZ").value = 0;
});

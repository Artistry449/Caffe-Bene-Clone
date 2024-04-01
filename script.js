
const navBtns = document.querySelectorAll(".nav-link");

navBtns.forEach((nodeEl) => {
    nodeEl.addEventListener("mouseover", (event) => {
        document.getElementById("external-nav").classList.remove("hidden");
    });

})

const external_nav = document.getElementById("external-nav");

external_nav.addEventListener("mouseleave", (event) => {
    document.getElementById("external-nav").classList.add("hidden");
});

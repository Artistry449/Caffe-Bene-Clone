
const navBtns = document.querySelectorAll(".nav-link");

navBtns.forEach((nodeEl) => {
    nodeEl.addEventListener("mouseover", (event) => {
        document.getElementById("external-nav").classList.remove("hidden");
    })

    nodeEl.addEventListener("mouseout", (event) => {
        document.getElementById("external-nav").classList.add("hidden");
    })
})

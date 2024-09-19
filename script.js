function togglenav() {
    const outerGrid=document.querySelector(".outer-grid");
    outerGrid.classList.toggle("outer-grid-with");

    const nav=document.querySelector("nav");
    nav.classList.toggle("hide-nav");
}
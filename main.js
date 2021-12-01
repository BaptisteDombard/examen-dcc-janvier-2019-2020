// Nom : Dombard
// Prénom : Baptiste
// Groupe : 2285
document.documentElement.classList.add("js-enabled");

for (let i = 1; i<200; i = i+2){
    document.querySelector("#app").insertAdjacentHTML("beforeend",`<li class=\"grid__item\">${i}</li>`);
    if (i%3 === 0 && i%9 === 0){

    }
}

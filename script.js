const palabras = ["Caboria", "Fatxenda", "Mudat", "Famolenc", "Captaire", "Ventall"];
let palabra = palabras[Math.floor(Math.random() * palabras.length)];
let palabraOculta = "";
for (let i = 0; i < palabra.length; i++) {
  palabraOculta += "_ ";
}

document.querySelector(".word").textContent = palabraOculta;

document.querySelectorAll(".letter").forEach((letter) => {
  letter.addEventListener("click", () => {
    let letra = letter.textContent;
    if (palabra.includes(letra)) {
    } else {
    }
  });
});

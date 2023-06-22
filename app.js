//* selectors
const gelirInput = document.getElementById("gelir-input");
const ekleBtn = document.getElementById("ekle-btn");
const ekleFormu = document.getElementById("ekle-formu");

//? Sonuç tablosu

const gelirinizTd = document.getElementById("geliriniz")

//* variables
let gelirler = "";

ekleFormu.addEventListener("submit", (e) => {
  e.preventDefault();
  gelirler = Number(gelirler) + Number(gelirInput.value);

  ekleFormu.reset();
  //   console.log(gelirler);

  hesaplaVeGuncelle();
});

//* functions

const hesaplaVeGuncelle = () => {

gelirinizTd.innerText=gelirler
};

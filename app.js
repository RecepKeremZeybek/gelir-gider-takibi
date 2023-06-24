//* selectors
const gelirInput = document.getElementById("gelir-input");
const ekleBtn = document.getElementById("ekle-btn");
const ekleFormu = document.getElementById("ekle-formu");

//? Sonuç tablosu

const gelirinizTd = document.getElementById("geliriniz");

//* variables
let gelirler = "";

ekleFormu.addEventListener("submit", (e) => {
  e.preventDefault();
  gelirler = Number(gelirler) + Number(gelirInput.value);

  //*verilerin kaliciligini saglamak için verileri localstorageye attık

  localStorage.setItem("gelirler", gelirler);

  ekleFormu.reset();
  //   console.log(gelirler);

  hesaplaVeGuncelle();
});

window.addEventListener("load",()=>{
    gelirler=Number(localStorage.getItem("gelirler"))
    hesaplaVeGuncelle()
    // console.log(gelirler)
})

//* functions

const hesaplaVeGuncelle = () => {
  gelirinizTd.innerText = gelirler;
};

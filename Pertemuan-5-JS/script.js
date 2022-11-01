
let number = prompt("masukkan angka ?");


if (!isNaN(number) && number >= 0) {
  
    if (number % 2 === 0) {
    alert("Bilangan Genap"); 
    } else {
    alert("Bilangan Ganjil"); 
    }
} else { 
    alert("Input salah");
}


function angka() {
    let bilangan = document.getElementById("input").value
    let notif
    if (bilangan%2==0) {
        notif = "Angka "+bilangan+" Adalah Bilangan Genap"
    } else {
        notif = "Angka "+bilangan+" Adalah Bilangan Ganjil"
    }
    alert(notif)
}

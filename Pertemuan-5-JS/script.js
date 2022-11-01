function angka() {
    let tampil = prompt("Masukkan Angka")
        tampil = false ? "" : cek()
}


function cek() {
    let bilangan = document.getElementById("input").value
    let notif
    if (bilangan%2==0) {
        notif = "Angka "+bilangan+" Adalah Bilangan Genap"
    } else {
        notif = "Angka "+bilangan+" Adalah Bilangan Ganjil"
    }
    alert(notif)
}

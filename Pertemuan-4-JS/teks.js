let tugas1 = document.getElementById("tugas1")
let tugas2 = document.getElementById("tugas2")
let tugas3 = document.getElementById("tugas3")
let tugas4 = document.getElementById("tugas4")
let tugas5 = document.getElementById("tugas5")

let kalimat = "Merah Putih"
tugas1.innerText = "Sebelum diubah = " + kalimat

// mengubah huruf Merah Putih menjadi huruf besar
let teks1 = kalimat.toUpperCase()
tugas2.innerText = "Mengubah Teks Menjadi UpperCase = " + teks1
// mengubah huruf Merah Putih menjadi huruf kecil 
let teks2 = kalimat.toLowerCase()
tugas3.innerText = "Mengubah Teks Menjadi LowerCase = " + teks2

// mengubah teks Merah Putih menjadi Merah Muda
let kalimatBendera = "Merah Putih"

let teks3 = kalimatBendera.replace("Putih", "Muda")
tugas4.innerText = "Mengubah Teks Merah Putih Menjadi Merah Muda = " + teks3

// mengukur panjang teks Merah Muda
let ukuranHuruf = teks3.length;
tugas5.innerText = "Menentukan Ukuran Panjang Pada Teks 3 = " + ukuranHuruf


// alert("Selamat Datang diAplikasi Operation")

function angka () {
    let tampil = confirm("Apakah Sudah Yakin?"); 
        tampil == false ? "" : jumlah();
    }

function jumlah () {
    let angka = document.getElementById("input").value;
    angka == 2 ? text = "True, Kamu Berhasil ( ͡° ͜ʖ ͡°)" : text = "False, Jangan Menyerah Kamu Pasti Bisa ◕‿◕"
    document.getElementById("text").innerHTML = text
}


function cekkhodam() {
    const name = document.getElementById('inputan').value.trim();
    if (name === "") {
        Alert({
            title: 'Error',
            message: 'Nama tidak boleh kosong',
            icon: 'error',
            hideCancelButton: true
        })
        return;
    }

     const khodams = [
        "T1t1t Bercabang",
        "Vevek L0ber",
        "Konbrut",
        "Pemburu Vevek",
        "Pecinta Jemvut",
        "Selangkangan",
        "Ketek Lebat",
        "Vevek Hunter",
        "Muka Temvek",
        "Palkon",
        "Vantat Korengan",
        "Tobrut Jahat",
        "Susu 2 Bola",
        "Titid Terbang",
        "Tobrut Baik",
        "Tuyul Emas",
        "Nasi goreng",
        "Hamster kombat",
        "Seblak",
        "Singa putih",
        "Bihun",
        "Kabel data vivan",
        "Rx king",
        "Serigala Putih"
        // Tambahin aja khodam lainnya disini bang.
    ];

    const acak = Math.floor(Math.random() * khodams.length);
    const khodam = khodams[acak];
    const hasil = `Nama: ${name}\nKhodam: ${khodam}`;

    document.getElementById('result').innerText = hasil;
}
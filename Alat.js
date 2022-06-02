class Alat {
    // Define constructor
    constructor(nama, gambar, desc, dim, berat, harga, fungsi, kondisi) {
        this.nama = nama;
        this.gambar = gambar;
        this.desc = desc;
        this.dim = dim;
        this.berat = berat;
        this.harga = harga;
        this.fungsi = fungsi;
        this.kondisi = kondisi;
    }

    // Getter and setter for nama
    getNama() {
        return this.nama;
    }
    setNama(nama) {
        this.nama = nama;
    }
    // Getter and setter for desc
    getDesc() {
        return this.desc;
    }
    setDesc(desc) {
        this.desc = desc;
    }
    // Getter and setter for gambar
    getGambar() {
        return this.gambar;
    }
    setGambar(gambar) {
        this.gambar = gambar;
    }
    // Getter and setter for dim
    getDim() {
        return this.dim;
    }
    setDim(dim) {
        this.dim = dim;
    }
    // Getter and setter for berat
    getBerat() {
        return this.berat;
    }
    setBerat(berat) {
        this.berat = berat;
    }
    // Getter and setter for harga
    getHarga() {
        return this.harga;
    }
    setHarga(harga) {
        this.harga = harga;
    }
    // Getter and setter for fungsi
    getFungsi() {
        return this.fungsi;
    }
    setFungsi(fungsi) {
        this.fungsi = fungsi;
    }
    // Getter and setter for kondisi
    getKondisi() {
        return this.kondisi;
    }
    setKondisi() {
        this.kondisi = kondisi;
    }
}
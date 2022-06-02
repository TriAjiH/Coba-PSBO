import Alat from './Alat.js';

class AlatNonMesin extends Alat {
    constructor(nama, gambar, desc, dim, berat, harga, fungsi, kondisi) {
        super(nama, gambar, desc, dim, berat, harga, fungsi, kondisi);
    }
}
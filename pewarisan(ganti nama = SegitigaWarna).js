class SegitigaWarna extends Segitiga{
    constructor(a,t,w){
        super(a,t);//memanggil konstruktor kelas segitiga
        //mendefinisikan properti baru
        this.warna=w;
    }
    cetakPropert(){
        //memanggil segitiga.cetakPropert
        super.cetakPropert();
        console.log(`warna\t :${this .warna}`);
    }
}
//membaca data alas dan tinggi
let a=parseFloat(readline.question("Masukkan Nilai alas: "));
let t=parseFloat(readline.question("Masukkan Nilai tinggi: "));
//membuat objek dari kelas SegitigawWarna
let obj=new SegitigaWarna(a,t,'merah');
obj.cetakPropert;

//memanggil metode luas
console.log(`luas\t :${obj.luas()}`);
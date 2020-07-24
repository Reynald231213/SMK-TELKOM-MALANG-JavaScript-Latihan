let readline=require('readline-sync');
class Aritmetika{
    static tambah(a,b){
        return a+b;
    }
}
//membaca data a dan b
let a=parseFloat(readline.question("Masukkan Nilai a: "));
let b=parseFloat(readline.question("Masukkan Nilai b: "));
//memanggil metode statis
console.log(`${a}+${b}=${Aritmetika.tambah(a,b)}`);
let readline=require('readline-sync');

function hipotenusa(a,b){
    //fungsi lokal
    function kuadrat(x){
    return x*x;
    }

    //memanggil fungsi lokal
    return c =Math.sqrt(kuadrat(a)+tkuadrat(b));
}

console.log("Menghitung Sisi Miring Segitiga Siku-siku");
let a=parseFloat(readline.question("Masukkan Nilai alas: "));
let b=parseFloat(readline.question("Masukkan Nilai tinggi: "));

var c=hipotenusa(a,b);

console.log(`Sisi Miring = ${c}`);
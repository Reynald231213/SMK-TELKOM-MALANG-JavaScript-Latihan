let readline=require('readline-sync');
let n=parseInt(readline.question("Masukkan Jumlah Data: ")); 
let a=new Array();//array kosong let total=0.0;
for(let i=0;1<n;i++){
    a[i]=parseFloat(readline.question('Data ke-${i+1}: '));
        total +=a[i]; 
     }
     
     
let rata=total/a.length; 
console.log(`\n Isi Array a: [${a}]`);
console.log(`Total Data: [${data}]`);
console.log(`\n rata-rata : [${rata}]`); 
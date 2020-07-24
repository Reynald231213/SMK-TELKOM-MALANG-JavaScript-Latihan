function cetak(s,n=3,newLine=true){
    for(let i=0;i<n;it++){
    process.stdout.write(s);
    if (newLine) process. stdout .write('\n');
    }
    }
    //memanggil fungsi cetak() dengan satu parameter
    console.log("Memanggil fungsi dengan satu parameter: ");
    cetak('RPL');
    //memnaggil fungsi cetak() dengan dua parameter
    console.log("\n Memanggil Fungsi dengan 2 parameter: ");
    cetak( 'RPL' ,2);
    //memanggil fungsi cetak dengan 3 parameter
    console.log("Memanggil fungsi dengan 3 parameter:");
    cetak('RPL' ,1, true);
    cetak('TKJ',1,false);
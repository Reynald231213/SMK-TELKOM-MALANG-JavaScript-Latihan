function increment(a){

    a.X +=1;
    }
    //membuat objek
    let obj = new Object();
    //mendefiniskan properti x pada objek yang telah dibuat
    obj. x=10;
   
    //menampilkan nilai obj.x sebelum dinaikkan
    console.log('Sebelum dinaikkan nilainya: ');
    console.log(`obj.x: ${obj.x}`);
    
    //memanggil fungsi increment
    increment (obj);
    
    //menampilka nilai obj.x setelah dinaikkan
    console.log("\n Setelah dinaikkkan nilainya");
    console.log(`obj.x: ${obj.x})`);
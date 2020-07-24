let readline=require( 'readline-sync');
class Segitiga{

    constructor(a,t){
        this.alas=a;
        this.tinggi=t;
    }
    luas(){
        return this.alas*this.tinggi/2;
    }

cetakPropert(){
    console.log(`alas\t:${this.alas}`);
    console.log(`tinggi\t:${this.tinggi}`);
    }
}
class Dinero{
    constructor(mxn1, mxn2, mxn5, mxn10, mxn20, mxn50, mxn100, mxn200, mxn500, mxn1000){
        this.moneda1 = mxn1;
        this.moneda2 = mxn2;
        this.moneda5 = mxn5;
        this.moneda10 = mxn10;
        this.bill20 = mxn20;
        this.bill50 = mxn50;
        this.bill100 = mxn100;
        this.bill200 = mxn200;
        this.bill500 = mxn500;
        this.bill1000 = mxn1000;
    }
}

function mostrarDinero(){
    //aqui va el codigo que cuenta el dinero
    if(localStorage.getItem('dineroAhorrado')){
        let money = JSON.parse(localStorage.getItem('dineroAhorrado'));

        let totalAhorro = money['Coin1']+(money['Coin2']*2)+(money['Coin5']*5)+(money['Coin10']*10)+(money['Bill20']*20)+
            (money['Bill50']*50)+(money['Bill100']*100)+(money['Bill200']*200)+(money['Bill500']*500)+(money['Bill1000']*1000);

        document.getElementById('mostrarDinero').innerHTML="Tienes: "+totalAhorro+" pesos.\n"
            +"\n\nEn "+money['Coin1']+" monedas de 1."
            +"\nEn "+money['Coin2']+" monedas de 2."
            +"\nEn "+money['Coin5']+" monedas de 5."
            +"\nEn "+money['Coin10']+" monedas de 10."
            +"\nEn "+money['Bill20']+" billetes de 20."
            +"\nEn "+money['Bill50']+" monedas de 50."
            +"\nEn "+money['Bill100']+" monedas de 100."
            +"\nEn "+money['Bill200']+" monedas de 200."
            +"\nEn "+money['Bill500']+" monedas de 500."
            +"\nEn "+money['Bill1000']+" monedas de 1000.";
        setTimeout(function(){ 
            document.getElementById('mostrarDinero').innerHTML="";
            },5000);
    }else{
        document.getElementById('mostrarDinero').innerHTML="Ta flaco tu cochinito:(";
        setTimeout(function(){ 
            document.getElementById('mostrarDinero').innerHTML="";
            },5000);
    }
}

function meterDinero(){
    let dinero = '', totalmoney = '', money = '';
    let mxn1 = parseInt(document.getElementById('mxn1').value);
    let mxn2 = parseInt(document.getElementById('mxn2').value);
    let mxn5 = parseInt(document.getElementById('mxn5').value);
    let mxn10 = parseInt(document.getElementById('mxn10').value);
    let mxn20 = parseInt(document.getElementById('mxn20').value);
    let mxn50 = parseInt(document.getElementById('mxn50').value);
    let mxn100 = parseInt(document.getElementById('mxn100').value);
    let mxn200 = parseInt(document.getElementById('mxn200').value);
    let mxn500 = parseInt(document.getElementById('mxn500').value);
    let mxn1000 = parseInt(document.getElementById('mxn1000').value);
    
    if(localStorage.getItem("dineroAhorrado")){
        money = JSON.parse(localStorage.getItem('dineroAhorrado'));

        mxn1 = money['Coin1'] + mxn1;
        mxn2 = money['Coin2'] + mxn2;
        mxn5 = money['Coin5'] + mxn5;
        mxn10 = money['Coin10'] + mxn10;
        mxn20 = money['Bill20'] + mxn20;
        mxn50 = money['Bill50'] + mxn50;
        mxn100 = money['Bill100'] + mxn100;
        mxn200 = money['Bill200'] + mxn200;
        mxn500 = money['Bill500'] + mxn500;
        mxn1000 = money['Bill1000'] + mxn1000;
        localStorage.removeItem('dineroAhorrado');

        dinero = new Dinero(mxn1, mxn2, mxn5, mxn10, mxn20, mxn50, mxn100, mxn200, mxn500, mxn1000);
        totalmoney = {
            Coin1: dinero.moneda1,
            Coin2: dinero.moneda2,
            Coin5: dinero.moneda5,
            Coin10: dinero.moneda10,
            Bill20: dinero.bill20,
            Bill50: dinero.bill50,
            Bill100: dinero.bill100,
            Bill200: dinero.bill200,
            Bill500: dinero.bill500,
            Bill1000: dinero.bill1000
        };
        localStorage.setItem("dineroAhorrado", JSON.stringify(totalmoney));

    }else{
        dinero = new Dinero(mxn1, mxn2, mxn5, mxn10, mxn20, mxn50, mxn100, mxn200, mxn500, mxn1000);
        totalmoney = {
            Coin1: dinero.moneda1,
            Coin2: dinero.moneda2,
            Coin5: dinero.moneda5,
            Coin10: dinero.moneda10,
            Bill20: dinero.bill20,
            Bill50: dinero.bill50,
            Bill100: dinero.bill100,
            Bill200: dinero.bill200,
            Bill500: dinero.bill500,
            Bill1000: dinero.bill1000
        };
        localStorage.setItem("dineroAhorrado", JSON.stringify(totalmoney));

    }
    document.getElementById('moneyForm').setAttribute("action","alcanciaMain.html");
}

function romperAlcancia(){
    if(localStorage.getItem("dineroAhorrado")){
        localStorage.removeItem('dineroAhorrado');
        document.getElementById('cochinito').setAttribute('src','cochinitoRoto.png');

        setTimeout(function(){
            document.getElementById('cochinito').setAttribute('src','cochinitoBien.png');
            },5000);
    }
    mostrarDinero();
}
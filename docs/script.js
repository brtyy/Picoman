console.log(`ahoj ty buzíku, co tu chceš?`);


//alerty
let jmenoFetaka = window.prompt('Wassup feťáku, jak se jmenuješ?')
console.log('Tvé jméno je ' + jmenoFetaka + '.')

let mnozstviFetu = 1;
window.alert(`Tvé množství fetu je ${mnozstviFetu}.`)

const MINIMUM = 15;

let vekUzivatele = window.prompt('jak jsi starý ' + jmenoFetaka+ '?')

if (Number(vekUzivatele) >= MINIMUM){
    window.alert('jsi připraven fetovat')
}

else {
    if(!isNaN(vekUzivatele)) {
        window.alert('jsi moc mladý na to fetovt, vymysli si větší věk a dej si piko s námi')
    }
}

// function moneyBox(coins){
//     let saveCoins = 0;
//     saveCoins += coins;
//     console.log(`Tienes: ${saveCoins}`);
// }

// moneyBox(5);
// moneyBox(5);

function moneyBox(nombre) {
    let saveCoins = 0;
    console.log(`Monedero de ${nombre}`)
    
    function countCoins(coins){
        saveCoins += coins;
        console.log(`Tienes: $${saveCoins}`);
    }
    return countCoins;
}

const myMoneyBox = moneyBox("Sebastian");

myMoneyBox(5);
myMoneyBox(5);
myMoneyBox(15);

const moneyBoxAna = moneyBox("Ana");
moneyBoxAna(10);
moneyBoxAna(20);
moneyBoxAna(5);
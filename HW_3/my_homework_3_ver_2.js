const people = [{
    id: 1,
    name: 'a',
    age: 19,
    moneyAmount: 100,
    desiredAlcoholName: 'whisky',
    desiredAlcoholAmount: 2,
}, {
    id: 2,
    name: 'b',
    age: 17,
    moneyAmount: 30,
    desiredAlcoholName: 'vodka',
    desiredAlcoholAmount: 3,
}, {
    id: 3,
    name: 'c',
    age: 29,
    moneyAmount: 50,
    desiredAlcoholName: 'beer',
    desiredAlcoholAmount: 4,
}, {
    id: 4,
    name: 'd',
    age: 999,
    moneyAmount: 1000,
    desiredAlcoholName: 'lsd',
    desiredAlcoholAmount: 3,
}, {
    id: 5,
    name: 'e',
    age: 39,
    moneyAmount: 0,
    desiredAlcoholName: 'water',
    desiredAlcoholAmount: 1,
}], 
      
alcoholPriceForOneItem = {
    whisky: 23,
    vodka: 15,
    beer: 12,
    water: 0,
    lsd: 500,
},
      
LEGAL_AGE = 18,

checkAge = (a, b) => a[b] >= LEGAL_AGE,

checkMoney = (a) => a.moneyAmount >= a.desiredAlcoholAmount *  alcoholPriceForOneItem[a.desiredAlcoholName];

function getLegalAgePeople(arr, ageParamName) {
   const legalAgePeople = arr.filter((x) => checkAge(x,ageParamName)) 
        return legalAgePeople;
}

function getPeopleWhoHaveMoneyForAlcohol(arr) {
    const peopleWhoHaveMoney = arr.filter((x) => checkMoney(x)) 
        return peopleWhoHaveMoney; 
}

function buyAlcohol(arr) {
    const checkResult = arr.map(function (x) { 
      return x.name + ' bought ' + x.desiredAlcoholAmount + ' bottles of ' + x.desiredAlcoholName + ' for ' + x.desiredAlcoholAmount*alcoholPriceForOneItem[x.desiredAlcoholName] + ' rubles'; 
    }) 
        return checkResult; 
}

alert(buyAlcohol(getPeopleWhoHaveMoneyForAlcohol(getLegalAgePeople(people, 'age'))));


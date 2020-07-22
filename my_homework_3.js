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
// pls make at least 5 alcohol
alcoholPriceForOneItem = {
    whisky: 23,
    vodka: 15,
    beer: 12,
    water: 0,
    lsd: 500,
},

LEGAL_AGE = 18;   // don't change this


/**
 * Function is used to filter array of objects by age param, name of param is passed as second argument
 * If object has age above LEGAL_AGE -> it's returned in new array 
 * @param {Array} arr
 * @param {String} ageParamName
 * Returns filtered array
 * f.e function is called getLegalAgePeople(people, 'age');
 * 
 * tip: use .filter method
 */


function getLegalAgePeople(arr, ageParamName) {
    const legalAgePeople = arr.filter(function (x) { return x[ageParamName] >= LEGAL_AGE;}) 
        return legalAgePeople;
}


/**
 * Function is used to filter array of objects
 * If object has money amount more than alcohol price multiplied by alcohol amount -> it's returned to new array
 * @param {Array} arr 
 * Returns filtered array
 * f.e function is called getPeopleWhoHaveMoneyForAlcohol(legalAgePeople);
 * 
 * tip: use .filter method
 */

function getPeopleWhoHaveMoneyForAlcohol(arr) {
    const peopleWhoHaveMoney = arr.filter(function (x) { return x.moneyAmount >= x.desiredAlcoholAmount * alcoholPriceForOneItem[x.desiredAlcoholName];}) 
        return peopleWhoHaveMoney; 
} 


/**
 * Function is used to get array of strings
 * @param {Array} arr 
 * Returns filtered array of strings like:
 * ["NAME bought COUNT bottles of ALCOHOL_NAME for SUM rubles"]
 * where NAME is name of person, COUNT is bottles count, ALCOHOL_NAME is name of alcohol, SUM is bottles count multipled by price for a bottle
 * f.e function is called buyAlcohole(legalAgePeople);
 * 
 * tip: use .map method
 */


function buyAlcohol(arr) {
    const checkResult = arr.map(function (x) { 
      return [x.name + ' got ' + x.desiredAlcoholAmount + ' of ' + x.desiredAlcoholName + ' for ' + x.desiredAlcoholAmount*alcoholPriceForOneItem[x.desiredAlcoholName] + ' BYN']; 
    }) 
        return checkResult; 
}

alert(buyAlcohol(getPeopleWhoHaveMoneyForAlcohol(getLegalAgePeople(people, 'age'))));

//x.name + ' bought ' + x.desiredAlcoholAmount + ' bottles of ' + x.desiredAlcoholName + ' for ' + x.desiredAlcoholAmount*alcoholPriceForOneItem[x.desiredAlcoholName] + ' rubles'



// TEST FUNCTION. PLS DON'T TOUCH
function check() {
    try {
        const people = [{
            id: 1,
            name: 'a',
            age: 19,
            moneyAmount: 100,
            desiredAlcoholName: 'whisky',
            desiredAlcoholAmount: 2,
        }];
    
        const legalAgePeople = getLegalAgePeople(people, 'age');
        if (!legalAgePeople || legalAgePeople[0].id !== 1) {
            throw new Error('check getLegalAgePeople function');
        }

        const peopleWhoHaveMoney = getPeopleWhoHaveMoneyForAlcohol(legalAgePeople);
        if (!peopleWhoHaveMoney || peopleWhoHaveMoney[0].id !== 1) {
            throw new Error('check getPeopleWhoHaveMoneyForAlcohol function');
        }

        const checkResult = buyAlcohol(peopleWhoHaveMoney);
        
        if (!checkResult || checkResult[0] !== "a bought 2 bottles of whisky for 46 rubles") {
            throw new Error('check buyAlcohol function');
        }

        alert('Correct! You\'re awesome');
    } catch (err) {
        alert(err);
    }
}

const customers = [{
    name: 'Agent Smith 1',
    balance: 46,
    fruitsToBuy: [{
        name: 'banana',
        count: 4,
    }]
}, {
    name: 'Agent Smith 2',
    balance: 86,
    fruitsToBuy: [{
        name: 'apple',
        count: 3,
    }]
}, {
    name: 'Agent Smith 3',
    balance: 26,
    fruitsToBuy: [{
        name: 'pear',
        count: 7,
    }]
}, {
    name: 'Agent Smith 4',
    balance: 46,
    fruitsToBuy: [{
        name: 'watermelon',
        count: 1,
    }]
}, {
    name: 'Agent Smith 5',
    balance: 106,
    fruitsToBuy: [{
        name: 'kiwi',
        count: 8,
    }]
}, {
    name: 'Agent Smith 6',
    balance: 16,
    fruitsToBuy: [{
        name: 'melon',
        count: 2,
    }]
}];

const fruits = ['banana', 'banana', 'banana', 'apple', 'banana', 'banana', 'orange', 'orange', 'orange', 'orange', 'orange', 'apple', 'pear', 'kiwi', 
                'watermelon', 'kiwi', 'melon', 'melon', 'apple', 'pear', 'apple', 'apple', 'apple', 'kiwi',  'orange', 'apple', 
                'pear', 'kiwi', 'watermelon', 'kiwi', 'kiwi', 'melon',];

const logs = [];

let getFruitsMap = (fruitsArr) => {
    return fruitsArr.reduce((acc, fruitName) => {
        acc[fruitName] = (acc[fruitName] || 0) + 1;
        return acc;
    }, {});
 }

const fruitsBought = []; //push fruit here after buying

let sortedFruits = getFruitsMap(fruits);

let buyFruits = customersArr => {
for (let customer of customersArr) {
   let customerName = customer.name;
    for (let fruit of customer.fruitsToBuy) {
      let fruitName = fruit.name;
      if (fruit.count <= sortedFruits[fruit.name]) { 
         let success = 'good shoping';
         for (let i = 0; i != fruit.count; i++){
                let fruitIndex = fruits.findIndex(item => item == fruit.name);
                fruits.splice(fruitIndex, 1);
                fruitsBought.push(fruit.name);
            }
         logs.push([customerName, fruitName, success]);
      } 
      else { let success = 'not enough fruits';
             for (let j = 0; j != sortedFruits[fruit.name]; j++){
                let fruitIndex = fruits.findIndex(item => item == fruit.name);
                fruits.splice(fruitIndex, 1);
                fruitsBought.push(fruit.name); }
            logs.push([customerName, fruitName, success]);
      }
    }  
} 
}


// DONT'T EDIT FOLLOWING CODE
buyFruits(customers);
const fruitsLeftMap = getFruitsMap(fruits);
const fruitsBoughtMap = getFruitsMap(fruitsBought);


function log (customerName, fruitName, success) {
    const action = success ? 'bought' : 'failed to buy';
    const className = success ? 'green' : 'red'
    logs.push(`${customerName} <span class=${className}>${action}</span> ${fruitName}`);
}

function render () {
    renderLog();
    renderFruits('fruits-left', fruitsLeftMap);
    renderFruits('fruits-bought', fruitsBoughtMap);

    function renderLog() {
        let existingLogsContainer = document.getElementById('messages');
        let mainLogsContainer =  document.getElementById('log');
        
        if (existingLogsContainer) {
            mainLogsContainer.removeChild(existingLogsContainer);
        }
        
        const logsContainer = document.createElement('ul');
        logsContainer.id = 'messages';
        
        logs.forEach(log => {
            const logEl = document.createElement('li');
            logEl.innerHTML = log;
            logsContainer.appendChild(logEl);
        });
        
        mainLogsContainer.appendChild(logsContainer);    
    }
    
    function renderFruits (id, mappedData) {
        const mainFruitsContainer = document.getElementsByClassName(id)[0];
        const existingFruitsBoughtContainer = (mainFruitsContainer.getElementsByClassName('fruits-list') || [])[0];
        
        if (existingFruitsBoughtContainer) {
            mainFruitsContainer.removeChild(existingFruitsBoughtContainer);
        }
        
        const fruitsContainer = document.createElement('ul');
        fruitsContainer.classList.add('fruits-list');
        
        for (let key in mappedData) {
            const fruitEl = document.createElement('li');
            const nameEl = document.createElement('span');
            const countEl = document.createElement('span');
            nameEl.innerText = `${key}:`;
            countEl.innerText = mappedData[key];
        
            fruitEl.appendChild(nameEl);
            fruitEl.appendChild(countEl);
            fruitsContainer.appendChild(fruitEl);
        }
        
        mainFruitsContainer.appendChild(fruitsContainer);
    }
}

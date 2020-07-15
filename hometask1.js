let person1 = {
	name: 'Дарт Вэйдер',
	age: 39,
	gender: 'male',
	citizenship: 'sith',
	health: 'bad',
};
let person2 = {
	name: 'Аникей Скайвокер',
	age: 19,
	gender: 'male',
	citizenship: 'белорус',
	health: 'good',
};
let person3 = {
	name: 'Иван Джугашвили',
	age: 24,
	gender: 'male',
    citizenship: 'космополит',
	health: 'good',
};
let person4 = {
	name: 'Булат Окуджава',
	age: 23,
	gender: 'male',
	citizenship: 'белорус',
	health: 'good',
};
let person5 = {
	name: 'Светлана Иванова',
	age: 26,
	gender: 'female',
	citizenship: 'белоруска',
	health: 'good',
};
let personsNamesForArmy = [];

if (person1.age >= 18 && person1.age <= 27 && 
	person1.gender === 'male' &&
	person1.citizenship === 'белорус' &&
	person1.health === 'good') {
	personsNamesForArmy.push( person1.name );
}
if ( person2.age >= 18 && person2.age <= 27 && person2.gender == 'male' && person2.citizenship == 'белорус' && person2.health == 'good' ) {
	personsNamesForArmy.push(person2.name);
}
if (person3.age >= 18 && person3.age <= 27 && 
	person3.gender === 'male' &&
	person3.citizenship === 'белорус' &&
	person3.health === 'good') {
	personsNamesForArmy.push(person3.name);
}
if (person4.age >= 18 && person4.age <= 27 && 
	person4.gender === 'male' &&
	person4.citizenship === 'белорус' &&
	person4.health === 'good') {
	personsNamesForArmy.push(person4.name);
}
if (person5.age >= 18 && person5.age <= 27 && 
	person5.gender === 'male' &&
	person5.citizenship === 'белорус' &&
	person5.health === 'good') {
	personsNamesForArmy.push(person5.name);
}
console.log(personsNamesForArmy);
alert('You in the army now: ' + personsNamesForArmy);

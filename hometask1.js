let prizivnikInfo1 = {
	name: 'Дарт Вэйдер',
	age: 39,
	gender: 'male',
	citizenship: 'sith',
	health: 'bad',
};
let prizivnikInfo2 = {
	name: 'Аникей Скайвокер',
	age: 19,
	gender: 'male',
	citizenship: 'белорус',
	health: 'good',
};
let prizivnikInfo3 = {
	name: 'Иван Джугашвили',
	age: 24,
	gender: 'male',
    citizenship: 'космополит',
	health: 'good',
};
let prizivnikInfo4 = {
	name: 'Булат Окуджава',
	age: 23,
	gender: 'male',
	citizenship: 'белорус',
	health: 'good',
};
let prizivnikInfo5 = {
	name: 'Светлана Иванова',
	age: 26,
	gender: 'female',
	citizenship: 'белоруска',
	health: 'good',
};
let personsNamesForArmy = [];

if (prizivnikInfo1.age >= 18 && prizivnikInfo1.age <= 27 && 
	prizivnikInfo1.gender === 'male' &&
	prizivnikInfo1.citizenship === 'белорус' &&
	prizivnikInfo1.health === 'good') {
	personsNamesForArmy.push( prizivnikInfo1.name );
}
if ( prizivnikInfo2.age >= 18 && prizivnikInfo2.age <= 27 && prizivnikInfo2.gender == 'male' && prizivnikInfo2.citizenship == 'белорус' && prizivnikInfo2.health == 'good' ) {
	personsNamesForArmy.push(prizivnikInfo2.name);
}
if (prizivnikInfo3.age >= 18 && prizivnikInfo3.age <= 27 && 
	prizivnikInfo3.gender === 'male' &&
	prizivnikInfo3.citizenship === 'белорус' &&
	prizivnikInfo3.health === 'good') {
	personsNamesForArmy.push(prizivnikInfo3.name);
}
if (prizivnikInfo4.age >= 18 && prizivnikInfo4.age <= 27 && 
	prizivnikInfo4.gender === 'male' &&
	prizivnikInfo4.citizenship === 'белорус' &&
	prizivnikInfo4.health === 'good') {
	personsNamesForArmy.push(prizivnikInfo4.name);
}
if (prizivnikInfo5.age >= 18 && prizivnikInfo5.age <= 27 && 
	prizivnikInfo5.gender === 'male' &&
	prizivnikInfo5.citizenship === 'белорус' &&
	prizivnikInfo5.health === 'good') {
	personsNamesForArmy.push(prizivnikInfo5.name);
}
console.log(personsNamesForArmy);
alert(personsNamesForArmy);
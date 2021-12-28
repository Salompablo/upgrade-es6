const game = {title: 'The last us 2', gender: ['action', 'zombie', 'survival'], year: 2020}

let {title, gender, year} = game

console.log(game.title);
console.log(game.gender);
console.log(game.year);

const fruits = ['Banana', 'Strawberry', 'Orange'];

let [fruit1, fruit2, fruit3] = fruits

console.log(fruit1);
console.log(fruit2);
console.log(fruit3);

const animalFunction = () => {
    return {name: 'Bengal Tiger', race: 'Tiger'}
};

let {name, race} = animalFunction();

console.log(name);
console.log(race);

const car = {name: 'Mazda 6', itv: [2015, 2011, 2020] }

let {name, itv} = car

let [year1, year2, year3] = itv

console.log(name);
console.log(itv);
const numbers = [32, 21, 63, 95, 100, 67, 43];
let resultado = numbers.find(value => value === 100)
console.log(resultado)

const movies = [
	{title: 'Madagascar', stars: 4.5, date: 2015},
	{title: 'Origen', stars: 5, date: 2010},
	{title: 'Your Name', stars: 5, date: 2016}
];

let result = movies.find(item => item.date === 2010)
console.log(result)

const aliens = [
	{name: 'Zalamero', planet: 'Eden', age: 4029},
	{name: 'Paktu', planet: 'Andromeda', age: 32},
	{name: 'Cucushumushu', planet: 'Marte', age: 503021}
];
const mutations = [
	{name: 'Porompompero', description: 'Hace que el alien pueda adquirir la habilidad de tocar el tambor'},
	{name: 'Fly me to the moon', description: 'Permite volar, solo y exclusivamente a la luna'},
	{name: 'Andando que es gerundio', description: 'Invoca a un señor mayor como Personal Trainer'}
];

let alienFound = aliens.find(item => item.name === "Cucushumushu")
let mutationFound = mutations.find(item => item.name === "Porompompero")

let fusion = {...alienFound, mutation: {...mutationFound}}
console.log(fusion)
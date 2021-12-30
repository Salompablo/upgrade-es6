const pointsList = [32, 54, 21, 64, 75, 43]

let pointCopy = [...pointsList]


const toy = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'};

const toyCopy = {...toy};


const pointsList = [32, 54, 21, 64, 75, 43];
const pointsLis2 = [54,87,99,65,32];

let newPointlist = [...pointsList, ...pointsLis2];


const toy = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'};
const toyUpdate = {lights: 'rgb', power: ['Volar like a dragon', 'MoonWalk']}

const newToy = { ...toy, ...toyUpdate}


const colors = ['rojo', 'azul', 'amarillo', 'verde', 'naranja'];

let colorsCopy = [ ...colors];

colorsCopy.splice(2,1);

console.log(colorsCopy);








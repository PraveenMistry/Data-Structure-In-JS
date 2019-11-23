// Finding Array Duplicates

const cars = [
    'Mazda', 
    'Ford', 
    'Renault', 
    'Opel', 
    'Mazda'
]


const unique = cars.filter((car, idx) => cars.indexOf(car) === idx);
console.log(unique); // outputs ['Mazda', 'Ford', 'Renault', 'Opel']
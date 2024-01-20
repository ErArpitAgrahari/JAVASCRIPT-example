const marvel_heroes = ["superman","ironman","spiderman"]
const dc_heros =  ["thor","miloni","batman"]

// node

// console.log(marvel_heroes);

// const allheros = marvel_heroes.concat(dc_heros)
// console.log(allheros);
const allheros = [...marvel_heroes, ...dc_heros]
console.log(allheros);
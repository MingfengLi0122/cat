// asyncBreeds.js
const fs = require('fs');

const breedDetailsFromFile = function(breed, printOutBreedDes) {
  console.log('breedDetailsFromFile: Calling readFile...');
  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
    console.log("In readFile's Callback: it has the data.");
    if (!error) printOutBreedDes(data);
  });
};

const printOutBreedDes = (des) => {
  console.log(`Breed Description: \n${des}`);
}

breedDetailsFromFile('Bombay', printOutBreedDes)
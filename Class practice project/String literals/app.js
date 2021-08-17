`use strict`

const country = {
  country: `Bangladesh`,
  population: 163,
  neighbour: [`India`, `China`, `Mayanmar`],
  checkIsland: function(){
    return this.isIsland = this.neighbour.length ? false: true;
  } 
}

console.log(country.checkIsland())
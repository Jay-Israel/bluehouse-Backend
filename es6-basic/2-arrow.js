// 2-arrow.js
// Q: Rewrite to use arrow function
export default function getNeighborhoodsList() {
  this.sanFranciscoNeighborhoods = ["SOMA", "Union Square"];
  this.addNeighborhood = (newNeighborhood) => {
    this.sanFranciscoNeighborhoods.push(newNeighborhood);
    return this.sanFranciscoNeighborhoods;
  };
}

const neighborhoodsList = new getNeighborhoodsList();
console.log(neighborhoodsList.addNeighborhood("Noe Valley"));

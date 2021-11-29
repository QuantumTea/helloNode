function singTheBottlesOfBeerSong(bottles) {
  let song = "";

  for (loop = bottles; loop >= 0; loop--) {
    song = song + bottlesofbeeronthewall(loop) + "\n";
  }

  //console.log(song);
  return song;
}

function singTheFourBottlesOfBeerSong() {
  return singTheBottlesOfBeerSong(4);
}

function bottlesofbeeronthewall(bottles) {
  switch (bottles) {
    // multiple cases go to the same line of code
    case 0:
    case "no":
    case "No":
    case "zero":
    case "Zero":
      return "no bottles of beer on the wall, go to the store and buy some more.";
      break;
    case 1:
    case "one":
    case "One":
      return "one bottle of beer on the wall,";
      break;
    default:
      return bottles + " bottles of beer on the wall,";
  }
}

module.exports = {
  singTheBottlesOfBeerSong,
  singTheFourBottlesOfBeerSong,
  bottlesofbeeronthewall,
};

function singTheBottlesOfBeerSong(bottles) {
  let song = "";

  for (loop = bottles; loop >= 0; loop --)
  {
    song = song + bottlesofbeeronthewall(loop) + "\n"
  }
  
  return song;
}

function singTheFourBottlesOfBeerSong() {
  return singTheBottlesOfBeerSong(4);
}

function bottlesofbeeronthewall(bottles) {
    switch(bottles) {
        case 0:
        case 'no':
        case 'zero':
            return "no bottles of beer on the wall, go to the store and buy some more"
          break;
        case 1:
        case 'one':
            return "one bottle of beer on the wall"
          break;
        default:
          return bottles + " bottles of beer on the wall"
      }
}

module.exports = {
  singTheBottlesOfBeerSong,
  singTheFourBottlesOfBeerSong,
  bottlesofbeeronthewall
};

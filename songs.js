function bottlesofbeeronthewall(bottles) {
    switch(bottles) {
        case 0:
            return "no bottles of beer on the wall, go to the store and buy some more"
          break;
        case 1:
            return "one bottle of beer on the wall"
          break;
        default:
          return bottles + " bottles of beer on the wall"
      }
}

module.exports = {
    bottlesofbeeronthewall
};

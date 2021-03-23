import { singTheFourBottlesOfBeerSong, singTheBottlesOfBeerSong, bottlesofbeeronthewall } from '../songs.js';

describe('bottles of beer on the wall', () => {

    it('can loop through the song starting at four bottles', () => {
        var shortSong = singTheFourBottlesOfBeerSong()
        expect(shortSong).toContain('4 bottles of beer on the wall')
        expect(shortSong).not.toContain('5 bottles of beer on the wall')
        expect(shortSong).toContain('no bottles of beer on the wall')
        expect(shortSong).toContain('go to the store and buy some more')
    });

    it('only gets four bottles', () => {
        var shortSong = singTheFourBottlesOfBeerSong(10)
        expect(shortSong).not.toContain('10 bottles of beer on the wall')
        expect(shortSong).toContain('4 bottles of beer on the wall')
    });
        
    it('can loop through the song entirely, starting from ten bottles', () => {
        let wholeSong = singTheBottlesOfBeerSong(10);
        expect(wholeSong).toContain('10 bottles of beer on the wall')
        expect(wholeSong).not.toContain('11 bottles of beer on the wall')
        expect(wholeSong).toContain('5 bottles of beer on the wall')
        expect(wholeSong).toContain('no bottles of beer on the wall')
        expect(wholeSong).toContain('go to the store and buy some more')
    });

    it('should know the song can continue', () => {
        expect(bottlesofbeeronthewall(2)).toContain('2 bottles of beer on the wall');
    });

    it('should recognise the penultimate bottle', () => {
        expect(bottlesofbeeronthewall(1)).toContain('one bottle');
    });

    it('should know to buy more beer when it runs out', () => {
        expect(bottlesofbeeronthewall(0)).toContain('go to the store and buy some more');
    });

    it('should handle one bottle as a string', () => {
        expect(bottlesofbeeronthewall('one')).toContain('one bottle of beer on the wall');
    });

    it('should handle zero bottles as a string', () => {
        expect(bottlesofbeeronthewall('zero')).toContain('go to the store and buy some more');
    });

    it('should handle no bottles as input', () => {
        expect(bottlesofbeeronthewall('no')).toContain('go to the store and buy some more');
    });

    it('should handle all the bottles', () => {
        expect(bottlesofbeeronthewall(9)).toContain('9 bottles of beer on the wall');
        expect(bottlesofbeeronthewall(81)).toContain('81 bottles of beer on the wall');
        expect(bottlesofbeeronthewall(169)).toContain('169 bottles of beer on the wall');
        expect(bottlesofbeeronthewall('one million')).toContain('one million bottles of beer on the wall');
    });

});

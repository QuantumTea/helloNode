import { joinTwoStrings, joinThreeStringsWithoutSpaces, getThe13thLetter, getTheNthLetter } from '../stringy.js';

describe('String operations', () => {

    test('Can make a greeting', () => {
        result = joinTwoStrings('hello', ' world');
        expect(result).toEqual('hello world');        
    });

    test('Can make a longer greeting', () => {
        result = joinTwoStrings('Greetings and salutations', ' to you, good Person!');
        expect(result).toEqual('Greetings and salutations to you, good Person!');
    });

    test('Can join three strings without spaces', () => {
        result = joinThreeStringsWithoutSpaces("Once upon a time,", "it was a dark and stormy night", "when two testers walked into a bar." );
        expect(result).toEqual('Once upon a time, it was a dark and stormy night when two testers walked into a bar.');
    })

    test('Can get the thirteenth letter of the alphabet', () => {
        result = getThe13thLetter('abcdefghijklmnopqrstuvwxyz');
        expect(result).toEqual('m');
    });
    
    test('Can get the Nth letter of the alphabet', () => {
        result = getTheNthLetter('abcdefghijklmnopqrstuvwxyz', 5);
        expect(result).toEqual('e');
        expect(getTheNthLetter('abcdefghijklmnopqrstuvwxyz', 8)).toEqual('h');
        expect(getTheNthLetter('abcdefghijklmnopqrstuvwxyz', 25)).toEqual('y');
    });
});

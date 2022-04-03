const myWordList = ["Hello", "World", "in", "a", "frame"];

/**
 * Return length of the longest string in the list.
 *
 * @param {array} wordList
 *
 * @returns {number}
 */
function getMaxWordLength(wordList) {
    const longestString = wordList.reduce((r, s) => r.length > s.length ? r : s)

    return longestString.length
}

/**
 * Print word in console.
 *
 * @param {string} word
 * @param {boolean} rightToLeft
 * @param {number} lengthDiff
 */
function printWord(word, rightToLeft, lengthDiff) {
    if (rightToLeft)
        console.log('* ' + word + ' '.repeat(lengthDiff) + ' *');
    else
        console.log('* ' + ' '.repeat(lengthDiff) + word + ' *')
}

/**
 * Print the list in the frame.
 *
 * @param {array} wordList
 * @param {boolean} rightToLeft
 */
function printInFrame(wordList, rightToLeft = true) {
    const frameLength = getMaxWordLength(wordList);

    // start frame
    console.log('*'.repeat(frameLength + 7));

    for (let i = 0; i <= wordList.length - 1; i++) {
        printWord(wordList[i], rightToLeft, frameLength - wordList[i].length);
    }

    // end frame
    console.log('*'.repeat(frameLength + 7));
    console.log(' ')
}


printInFrame(myWordList);
printInFrame(myWordList, false);
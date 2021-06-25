`usr strict`

// Given a list of words and two words word1 and word2, return the shortest distance between these two words in the list.
const words = ["practice", "help", "makes", "perfect", "coding", "makes"];
const shortestWordDistance = (words, word1, word2) => {
    let index = -1;
    let min = words.length;

    for (let i = 0; i < words.length; i++) {
        if (words[i] === word1 || words[i] === word2) {
            if (index !== -1 && (word1 === word2 || words[index] !== words[i])) {
                min = Math.min(i - index, min);
            }
            index = i;
        }
    }

    return min;
};
console.log(shortestWordDistance(words, "practice", "coding"));
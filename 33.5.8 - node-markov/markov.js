/** Textual markov chain generator */


class MarkovMachine {

  /** build markov machine; read in text.*/

  constructor(text) {
    // given some input text, it splits it on spaces and linebreak characters to make a list of words. 
    // It then calls the (unimplemented) function which builds a map of chains of word → possible-next-words.
    let words = text.split(/[ \r\n]+/);
    this.words = words.filter(c => c !== "");
    this.makeChains();
  }

  /** set markov chains:
   *
   *  for text of "the cat in the hat", chains will be
   *  {"the": ["cat", "hat"], "cat": ["in"], "in": ["the"], "hat": [null]} */

  makeChains() {
    let chains = new Map();
    for (let i = 0; i< this.words.length; i+=1 ) {
      let word = this.words[i + 1] || null;

      if (chains.has(word)) {
        chains.get(word).push(nextWord);
      }
      else {
        chains.set(word, [nextWord]);
      }
    }
    this.chains = chains;
  }

  static choice(arg) {
    // picking random choice from the array 
    return arg[Math.floor(Math.random() * arg.length)];
  }

  
  /** return random text from chains */
  makeText(numWords = 100) {
    //picking randomn key
    let keys = Array.from(this.chains.keys());
    let key = MarkovMachine.choice(keys);
    let output = [];

    //making chain
    while(output.length < numWords && key !== null) {
      output.push(key);
      key = MarkovMachine.choice(this.chains.get(key)); 
    }
    return output.join(" ");
  }
}



module.exports = {MarkovMachine,};

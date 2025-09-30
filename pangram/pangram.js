//
// This is only a SKELETON file for the 'Pangram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isPangram = (input) => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  const sentence = input.toLowerCase();
  for (let i = 0; i < 26; i++) {
    if(!sentence.includes(alphabet[i])){
      return false;
    }
  }
  return true;
};

const opn = require('opn');

export const searchNpm = (query: string) => {
  opn(`https://www.npmjs.com/search?q=${query}`);
};

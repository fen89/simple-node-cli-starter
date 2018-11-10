const opn = require('opn');

export const searchGithub = (query: string) => {
  opn(`https://github.com/search?q=${query}`);
};

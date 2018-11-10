#!/usr/bin/env node

import './polyfills';
const app = require('commander');
const inquirer = require('inquirer');
const colors = require('colors');
const figlet = require('figlet');

const { version, description } = require('../package.json');

import { searchGithub } from './commands/github.commands';
import { searchNpm } from './commands/npm.commands';

console.clear();
console.log(colors.rainbow(figlet.textSync('cli', { horizontalLayout: 'full' })));

app.version(version).description(description);

app
  .command('github <query>')
  .description('Query github')
  .action((query: string) => searchGithub(query));

app
  .command('npm <query>')
  .description('Query npm')
  .action((query: string) => searchNpm(query));

app.command('*').action(() => {
  inquirer.prompt([{ type: 'list', name: 'action', message: 'What do you want to do?', choices: ['A', 'B'] }]);
});

app.parse(process.argv);

if (!app.args.length) {
  app.help();
}

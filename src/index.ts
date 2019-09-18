#!/usr/bin/env node

import chalk from "chalk";
import clear from 'clear';
import figlet from 'figlet';
import path from 'path';
import commander from "commander";

const program = new commander.Command

clear();
console.log(
	chalk.red(
		figlet.textSync('glab', '3D Diagonal')
	)
)

program
	.version('0.0.1')
	.description('An interactive gitlab-cli')
	.option('-i, --issues', 'Show issues')
	.parse(process.argv);

if (!process.argv.slice(2).length) {
	program.outputHelp();
}

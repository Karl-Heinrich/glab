#!/usr/bin/env node

import clear from 'clear';
import path from 'path';
import commander from "commander";

import { about } from './about';
import { displayIssues } from './issues';

const program = new commander.Command

program
	.version('0.0.1')
	.description('An interactive gitlab-cli')
	.option('-i, --issues', 'Show issues', displayIssues)
	.option('-a, --about', 'About glab', about)
	.parse(process.argv);

if (!process.argv.slice(2).length) {
	program.outputHelp();
}

#!/usr/bin/env node

import clear from 'clear';
import path from 'path';
import commander from "commander";

import { about } from './about';
import { displayIssues, printDescription } from './issues';

const program = new commander.Command

program
	.version('0.0.1')
	.description('An interactive gitlab-cli')
	.option('-i, --issues', 'Show issues assigned to you including labels and their iid', displayIssues)
	.option('-d, --description-iid <iid>', 'iid of the issue to show the description for')
	.option('-a, --about', 'About glab', about)
	.parse(process.argv);

if (!process.argv.slice(2).length) {
	program.outputHelp();
}
if (program.descriptionIid !== undefined) printDescription(program.descriptionIid);

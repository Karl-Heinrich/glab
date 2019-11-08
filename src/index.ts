#!/usr/bin/env node

import commander from 'commander';

import { displayAboutInformation } from './options/about';
import { displayOpenIssuesAssignedToMe, displayIssueDescription, displayOpenIssues } from './options/issues';

const glab = new commander.Command();

glab.version('0.0.1').description('An interactive gitlab-cli to help with issues');

glab
  .option('-i, --issues', 'Show all issues with state "open"', displayOpenIssues)
  .option('-a, --assigned-to-me', 'Show issues assigned to you including labels and their iid', displayOpenIssuesAssignedToMe)
  .option('-d, --description-iid <iid>', 'iid of the issue to show the description for')
  .parse(process.argv);

if (glab.descriptionIid !== undefined) {
  displayIssueDescription(glab.descriptionIid);
}

glab
  .command('about')
  .alias('a')
  .description('About this cli')
  .action(displayAboutInformation);

if (!process.argv.slice(2).length) {
  glab.outputHelp();
  process.exit();
}


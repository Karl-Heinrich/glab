import chalk from 'chalk';
import figlet from 'figlet';

import * as gitlabExampleIssueResponse from '../api-responses/gitlabExampleIssueResponse.json';
import {emptyLine, printSorroundedWithDashes} from './formatSnippets';
import { Issues } from '../models/issues.js';

const gitlabIssueExample = gitlabExampleIssueResponse as unknown as Issues;

export function about() {
  console.log(chalk.red(figlet.textSync('glab', '3D Diagonal')));
  displayContributersWanted();
	emptyLine();

	console.log("Glab helps you manage your gitlab issues.")
	emptyLine();
	console.log('Issue example response from gitlab:')
	console.log(gitlabIssueExample);

};

const displayContributersWanted = () => {
    emptyLine();
    printSorroundedWithDashes('Contributers wanted! See https://github.com/Karl-Heinrich/glab#contributing');
    emptyLine();
}

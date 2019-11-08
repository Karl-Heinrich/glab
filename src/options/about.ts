import chalk from 'chalk';
import figlet from 'figlet';

import {emptyLine, printSorroundedWithDashes} from '../../util/formatSnippets';

export function displayAboutInformation() {
  console.log(chalk.red(figlet.textSync('glab', '3D Diagonal')));
  displayContributersWanted();
	emptyLine();

	console.log("Glab helps you manage your gitlab issues.")
	emptyLine();
};

const displayContributersWanted = () => {
  emptyLine();
  printSorroundedWithDashes('Contributers wanted! See https://github.com/Karl-Heinrich/glab#contributing');
  emptyLine();
};

import chalk from 'chalk';
import figlet from 'figlet';
import { emptyLine, printSorroundedWithDashes } from './formatSnippets';

export const about = () => {
	console.log(
		chalk.red(
			figlet.textSync('glab', '3D Diagonal')
		)
    )

    displayContributersWanted();
}

const displayContributersWanted = () => {
    emptyLine();
    printSorroundedWithDashes('Contributers wanted! See https://github.com/Karl-Heinrich/glab#contributing');
    emptyLine();
}

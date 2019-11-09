import chalk from 'chalk';
import figlet from 'figlet';

import { emptyLine, printSorroundedWithDashes, log, errorMessage } from '../../util/formatSnippets';
import markdownRenderer from '../renderer/markdown';
import { readFile } from 'fs';

const PATH_TO_ABOUT_MD = './ABOUT.md';

export function displayAboutInformation() {
  log(chalk.red(figlet.textSync('glab', '3D Diagonal')));
  displayContributersWanted();
  emptyLine();

  emptyLine();
  markdownRenderer('**test**');

  readFile(PATH_TO_ABOUT_MD, 'utf8', (err, md) => {
    if (err) {
      log(errorMessage('Unable to read about file :('));
      return;
    }

    log(markdownRenderer(md));
  });
}

const displayContributersWanted = () => {
  emptyLine();
  printSorroundedWithDashes('Contributers wanted! See https://github.com/Karl-Heinrich/glab#contributing');
  emptyLine();
};

import marked from 'marked';
import TerminalRenderer from 'marked-terminal';
import chalk from 'chalk';

const markdownRenderer = marked;

markdownRenderer.setOptions({
  renderer: new TerminalRenderer({ reflowText: true, width: 80, code: chalk.yellowBright })
});

export default markdownRenderer;

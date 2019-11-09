import chalk from 'chalk';
import marked from 'marked';
import TerminalRenderer from 'marked-terminal';

import { emptyLine, log, getLengthOfLongestIssueTitle, underline } from '../../util/formatSnippets';
import { getOpenIssues, getIssueDetails, PROJECT_PATH, USERNAME } from '../http/requests';
import { Issues } from '../../models/issues';

marked.setOptions({
  renderer: new TerminalRenderer({ reflowText: true, width: 80, code: chalk.yellowBright })
});

export async function displayOpenIssues() {
  let issues = await getOpenIssues();

  if (issues.length === 0 || issues === undefined) {
    log(`There are no open issues for ${PROJECT_PATH}`);
  }

  emptyLine();
  log(underline(`Open issues for project ${PROJECT_PATH}:`));
  emptyLine();
  printIssuesAsList(issues);
}

export async function displayOpenIssuesAssignedToMe() {
  let assignedToMe = true;
  let issues = await getOpenIssues(assignedToMe);

  if (issues.length === 0 || issues === undefined) {
    log(`There are no open issues for ${PROJECT_PATH} assigned to ${USERNAME}`);
  }

  emptyLine();
  log(underline(`Current issues assigned to ${USERNAME}:`));
  emptyLine();
  printIssuesAsList(issues);
}

export async function displayIssueDescription(iid: number) {
  let issueDetail = await getIssueDetails(iid);

  emptyLine();
  log(underline(issueDetail.title));
  emptyLine();
  log(marked(issueDetail.description));
}

function printIssuesAsList(issues: Issues[]) {
  if (issues === undefined) {
    log('No issues to print');
  }

  const lengthOfLongestIssueTitle = getLengthOfLongestIssueTitle(issues);

  for (const issue of issues) {
    let intentionalSpacesForAlignment = ' '.repeat(lengthOfLongestIssueTitle - issue.title.length);
    log(chalk.yellowBright(String(issue.iid)) + ' ' + issue.title + intentionalSpacesForAlignment + printIssueLabels(issue.labels));
  }
}

function printIssueLabels(labels: any) {
  let intentionalWhitespace = ' ';
  if (labels === undefined || labels === null) {
    return 'No labels';
  }
  let formattedLabels: string[] = [];

  for (const label of labels) {
    formattedLabels.push(chalk.hex(label.color)(`${intentionalWhitespace}[ ${label.name} ]`));
  }

  return formattedLabels;
}

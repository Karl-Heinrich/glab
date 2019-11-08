import { Issues } from "../models/issues";
import chalk from "chalk";

export const log = (...oneOrManyThings: any) => console.log(...oneOrManyThings);
export const emptyLine = () => log('');
export const dashedLine = () => log('----------------------');
export const errorMessage = chalk.bold.red;
export const underline = chalk.underline;

export const printSorroundedWithDashes = (text: string) => {
  if (text.length < 0) {
    return;
  }

  let dashes = '';

  for (let i = 0; i < text.length; i++) {
    dashes += '-';
  }

  log(dashes);
  log(text);
  log(dashes);
};

export function getLengthOfLongestIssueTitle(issues: Issues[]) {
    let lengthOfLongestTitle = 0;
    for (const issue of issues) {
        if (issue.title.length > lengthOfLongestTitle) {
            lengthOfLongestTitle = issue.title.length;
        }
    }

    return lengthOfLongestTitle;
}
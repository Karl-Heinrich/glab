import axios, { AxiosRequestConfig } from 'axios';
import dotenv from 'dotenv';
import { emptyLine } from './formatSnippets';
import chalk from 'chalk';

dotenv.config();
const HOST = process.env.GLAB_HOST;
const PRIVATE_TOKEN = process.env.GLAB_PRIVATE_TOKEN;
const USERNAME = process.env.GLAB_USERNAME
const NAMESPACE = process.env.GLAB_NAMESPACE
const PROJECT_PATH = process.env.PROJECT_PATH
const URL_ENCODED_PATH = `${NAMESPACE}%2F${PROJECT_PATH}`
const BASE_PATH = `https://${HOST}/api/v4`

const config: AxiosRequestConfig = {
    headers: {
        'Private-Token': PRIVATE_TOKEN
    }
};

export async function displayIssues() {
    emptyLine();
    console.log('Current issues assigned to you:');
    emptyLine();
    let issues = await getOpenIssues();
    printIssues(issues);
}

export async function printDescription(iid: number) {
    let data: any = await getIssueDetails(iid);
    let [issue] = data;

    console.log(chalk.dim.green(issue.title));
    emptyLine();
    console.log(issue.description);
    emptyLine();
    console.log('' + printLabels(issue.labels));
}

function printIssues(issues: any) {
    for (const issue of issues) {
       console.log(
           issue.iid + ' ' + chalk.dim.green(issue.title) + ' ' + printLabels(issue.labels)
       );
    }
}

function printLabels(labels: any) {
    let formattedLabels: string[] = [];

    for (const label of labels) {
        formattedLabels.push(chalk.red( '[ ' + label + ' ]'));
    }

    return formattedLabels;
}

async function getIssueDetails(iid: number) {
    try {
        const res = await axios.get(`${BASE_PATH}/issues?iids=${iid}&scope=all`, config );
        let issues: any = res.data;
    return issues;
    } catch (error) {
        console.log('Something went wrong :/', error);
    }
}

async function getOpenIssues() {
    try {
        const res = await axios.get(`${BASE_PATH}/issues?state=opened&scope=assigned-to-me&with_labels_details=true`, config );
        let issues: any = res.data;
    return issues;
    } catch (error) {
        console.log('Something went wrong :/', error);
    }
}

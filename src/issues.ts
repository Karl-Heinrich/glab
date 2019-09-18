import axios, { AxiosRequestConfig } from 'axios';
import dotenv from 'dotenv';
import { emptyLine } from './formatSnippets';

dotenv.config();
const HOST = process.env.HOST;
const TOKEN = process.env.TOKEN;
const BASE_PATH = `https://${HOST}/api/v4`

const config: AxiosRequestConfig = {
    headers: {
        'Private-Token': TOKEN
    }
};

export const displayIssues = () => {
    console.log('Current issues assigned to you:');
    emptyLine();
    getIssues();
}

async function getIssues() {
    try {
        const res = await axios.get(`${BASE_PATH}/issues`, config );

        let n = 1;
        let issues: any = res.data;

        for (const issue of issues) {
           console.log(n + '. ' + issue.title);
           n++
        }

    } catch (error) {
        console.log('Something went wrong :/', error);
    }
}
import axios, { AxiosRequestConfig } from 'axios';
import dotenv from 'dotenv';

import { log, errorMessage } from '../../util/formatSnippets';

dotenv.config();
const HOST = process.env.GLAB_HOST;
const PRIVATE_TOKEN = process.env.GLAB_PRIVATE_TOKEN;
const NAMESPACE = process.env.GLAB_NAMESPACE;

export const PROJECT_PATH = process.env.GLAB_PROJECT_PATH;
export const USERNAME = process.env.GLAB_USERNAME;

const URL_ENCODED_PROJECT_PATH = `/projects/${NAMESPACE}%2F${PROJECT_PATH}`;
const BASE_PATH = `https://${HOST}/api/v4`;

const config: AxiosRequestConfig = {
  headers: {
    'Private-Token': PRIVATE_TOKEN
  }
};

export async function getIssueDetails(iid: number) {
  let issueDetails;

  try {
    const { data } = await axios.get(`${BASE_PATH}/issues?iids=${iid}&scope=all`, config);
    [issueDetails] = data;
  } catch (error) {
    log(errorMessage('HTTP', error));
  }

  return issueDetails;
}

export async function getOpenIssues(assignedToMe = false) {
  let scope = assignedToMe ? 'scope=assigned_to_me' : 'scope=all'
  let issues;

  try {
    const { data } = await axios.get(`${BASE_PATH}${URL_ENCODED_PROJECT_PATH}/issues?state=opened&with_labels_details=true&${scope}`, config);
    issues = data;
  } catch (error) {
    log(errorMessage('HTTP', error));
  }

  return issues;
}

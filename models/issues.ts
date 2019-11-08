export interface Issues {
  id: number;
  iid: number;
  project_id: number;
  title: string;
  description: string;
  state: string;
  created_at: string;
  updated_at: string;
  closed_at: string;
  closed_by: string;
  labels: string[];
  milestone: string;
  assignees: Assignee[];
  author: Assignee;
  assignee: Assignee;
  user_notes_count: number;
  merge_requests_count: number;
  upvotes: number;
  downvotes: number;
  due_date: string;
  confidential: boolean;
  discussion_locked: boolean;
  web_url: string;
  time_stats: TimeStats;
}

export interface Assignee {
  id: number;
  name: string;
  username: string;
  state: string;
  avatar_url: string;
  web_url: string;
}

interface TimeStats {
  time_estimate: number;
  total_time_spent: number;
  human_time_estimate: number;
  human_total_time_spent: number;
}

import type { Request } from './request.ts';

export interface User {
  id: string;
  email: string;
  name: string;
  setor: string;
  password: string;
  created_at: Date;
  updated_at: Date;
  request_assignee: Request[];
  request_author: Request[];
}

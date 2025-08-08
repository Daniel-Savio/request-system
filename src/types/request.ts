import type { IED } from './ied.js';
import type { User } from './user.js';

export enum SmartDevice {
  SDp = 'SDp',
  SDG = 'SDG',
  SDV = 'SDV',
  SDM = 'SDM',
}

export enum Status {
  Ongoing = 'Ongoing',
  Done = 'Done',
  NotStarted = 'NotStarted',
}

export interface Request {
  id: string;
  sigma: boolean;
  project?: string;
  createdAt: Date;
  updatedAt: Date;
  assignee?: User;
  assigneeId: string;
  author: User;
  authorId: string;
  status: Status;
  device: SmartDevice;
  comment?: string;
  client?: string;
  thirdPart?: string;
  input?: any;
  output: any[];
  docs: string[];
}

import AdminBro, { ResourceOptions } from 'admin-bro';
import { IssueModel } from './issue.entity';

const options: ResourceOptions = {
  properties: {

  },
};

export const IssueAdmin = {
  resource: IssueModel,
  options,
};

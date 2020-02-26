import AdminBro, { ResourceOptions } from 'admin-bro';
import { JiraProjectResource } from './jira-project.resource';

const options: ResourceOptions = {
  filterProperties: ['name'],
  properties: {
    status: {
      components: {
        list: AdminBro.bundle('./admin/status.component.tsx'),
      },
    },
    image: {
      components: {
        list: AdminBro.bundle('./admin/image.component.tsx'),
      },
    },
  },
};

export const JiraProjectAdmin = {
  resource: new JiraProjectResource({
    host: 'kmpgroup.atlassian.net',
    email: process.env.JIRA_USER,
    token: process.env.JIRA_TOKEN,
  }),
  options,
};

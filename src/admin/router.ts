import AdminBro from 'admin-bro';
import AdminBroMongoose from 'admin-bro-mongoose';
import { buildRouter } from 'admin-bro-expressjs';

import { WorklogAdmin } from '../worklogs/worklog.admin';
import { JiraProjectAdmin } from '../jira-projects/jira-project.admin';
import { IssueAdmin } from '../issues/issue.admin';
import locale from './locale';
import { ProjectAdmin } from '../projects/project.admin';

import '../projects/admin/project.admin.controller';

AdminBro.registerAdapter(AdminBroMongoose);

const admin = new AdminBro({
  version: {
    admin: true,
    app: '1.2.3',
  },
  resources: [WorklogAdmin, JiraProjectAdmin, ProjectAdmin, IssueAdmin],
  locale,
});

admin.watch();

const router = buildRouter(admin);

export default router;

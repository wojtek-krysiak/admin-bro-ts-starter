import { ResourceOptions } from 'admin-bro';
import { jiraWorklogSynchronizer } from '../jira-worklog-synchronizer.service';

export const actions: ResourceOptions['actions'] = {
  synchronize: {
    actionType: 'record',
    icon: 'ZoomReset',
    component: false,
    guard: 'guardSynchronize',
    handler: async (request, response, context) => {
      const {
        resource, record, currentAdmin, translateMessage,
      } = context;

      const count = await jiraWorklogSynchronizer(record?.id() as string, record?.param('jiraKey'));

      return {
        record: record?.toJSON(currentAdmin),
        notice: {
          type: 'success',
          message: translateMessage('successSynchronize', { count }),
        },
      };
    },
  },
};

import AdminBro, { ResourceOptions, RecordJSON } from 'admin-bro';
import { ProjectModel } from './project.entity';
import { actions } from './admin/project.admin.actions';

const options: ResourceOptions = {
  actions,
  properties: {
    issues: {
      components: {
        show: AdminBro.bundle('./admin/issues.show.component.tsx'),
      },
    },
  },
};

// eslint-disable-next-line import/prefer-default-export
export const ProjectAdmin = {
  resource: ProjectModel,
  options,
};

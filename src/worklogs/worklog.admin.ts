import AdminBro, {
  ResourceOptions, After, ListActionResponse, RecordJSON,
} from 'admin-bro';
import { WorklogModel } from './worklog.entity';

const after: After<ListActionResponse> = async (response, request, context) => {
  const a = 1;
  const { records } = response;
  const ids = records.map((r) => r.params.tempoWorklogId);
  // const brands = await Brand.find({ _id: ids });

  return {
    ...response,
    records: [
      ...response.records.map((record) => ({
        ...record,
        populated: {
          ...record.populated,
          dupa: { d: 1 } as unknown as RecordJSON,
        },
      })),
    ],
  };
};

const options: ResourceOptions = {
  properties: {
    timeSpentSeconds: {
      components: {
        list: AdminBro.bundle('./admin/time-spent-seconds.list.tsx'),
        edit: AdminBro.bundle('./admin/time-spent-seconds.edit.tsx'),
        show: AdminBro.bundle('./admin/time-spent-seconds.edit.tsx'),
      },
    },
  },
  actions: {
    show: {
      showInDrawer: false,
      component: AdminBro.bundle('./admin/show.component.tsx'),
    },
    list: {
      after,
    },
  },
};

export const WorklogAdmin = {
  resource: WorklogModel,
  options,
};

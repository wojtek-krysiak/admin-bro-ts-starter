/* eslint-disable @typescript-eslint/camelcase */
import { Locale } from 'admin-bro';

const locale: Locale = {
  language: 'pl',
  translations: {
    labels: {
      Worklog: 'Worklogi',
    },
    messages: {
      successSynchronize: 'Successfully synced {{count}} record',
      successSynchronize_plural: 'Successfully synced {{count}} records',
      guardSynchronize: 'Do you really want to do this?',
    },
    actions: {
      new: 'Stworz nowy',
    },
    resources: {
      Worklog: {
        actions: {
          new: 'Nowy worklog',
        },
        labels: {

        },
        messages: {},
        properties: {},
        buttons: {},
      },
    },
  },
};

export default locale;

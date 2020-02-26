/* eslint-disable class-methods-use-this */
import {
  BaseRecord, BaseResource, BaseProperty, Filter,
} from 'admin-bro';
import axios, { AxiosInstance } from 'axios';

// ID of IN PROGRESS project catogory
const IN_PROGRESS = 10_000;

export class JiraProjectResource extends BaseResource {
  private rawProperties: Array<BaseProperty>

  private jira: AxiosInstance

  private version = 3

  constructor(options) {
    super(options);
    const { email, token, host } = options;

    this.jira = axios.create({
      baseURL: `https://${host}/rest/api/${this.version}`,
      auth: {
        username: email,
        password: token,
      },
    });

    this.rawProperties = [
      new BaseProperty({
        path: 'name',
        isId: false,
        isSortable: true,
        type: 'string',
      }),
      new BaseProperty({
        path: 'key',
        isId: true,
        isSortable: true,
        type: 'string',
      }),
      new BaseProperty({
        path: 'image',
        isId: false,
        isSortable: false,
        type: 'string',
      }),
    ];
  }

  id(): string {
    return 'JiraProject';
  }

  databaseName(): string {
    return 'Jira';
  }

  properties(): Array<BaseProperty> {
    return this.rawProperties;
  }

  property(path: string): BaseProperty | null {
    return this.rawProperties.find((p) => p.path() === path) ?? null;
  }

  async find(filter: Filter, options) {
    const orderBy = options.sort.sortBy
      ? `${options.sort.direction === 'asc' ? '' : '-'}${options.sort.sortBy}`
      : undefined;

    // eslint-disable-next-line dot-notation
    const query = filter.filters['name'] && filter.filters['name'].value;
    const response = await this.jira.get('project/search', {
      params: {
        categoryId: IN_PROGRESS,
        maxResults: options.limit,
        startAt: options.offset,
        orderBy,
        query,
      },
    });

    return response.data.values.map(this.toBaseRecord.bind(this));
  }

  async count(filter): Promise<number> {
    const query = filter.filters.name;
    const response = await this.jira.get('project/search', {
      params: { categoryId: IN_PROGRESS, maxResults: 1, query },
    });
    return response.data.total;
  }

  async findMany() {
    return [];
  }

  private toBaseRecord(project) {
    return new BaseRecord({
      name: project.name,
      key: project.key,
      image: project.avatarUrls['24x24'],
    }, this);
  }

  async findOne(id) {
    const project = await this.jira.get(`project/${id}`);
    return this.toBaseRecord(project.data);
  }
}

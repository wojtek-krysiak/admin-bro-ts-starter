import AdminBro, { CurrentAdmin } from 'admin-bro';

class ProjectAdminController {
  private _admin: AdminBro

  private currentAdmin: CurrentAdmin

  /**
   * @param {Object} options
   * @param {AdminBroOptions} options.admin
   * @param {CurrentAdmin} [currentAdmin]
   */
  constructor({ admin }, currentAdmin) {
    this._admin = admin;
    this.currentAdmin = currentAdmin;
  }

  async myCustomAction(request, response) {
    return {
      message: 'I am awesome',
    };
  }
}


AdminBro.Router.routes.push({
  Controller: ProjectAdminController,
  path: '/my-action',
  method: 'GET',
  action: 'myCustomAction',
});

interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Undercover Agent'],
  customerRoles: [],
  tenantRoles: ['Department Officer', 'Undercover Agent'],
  tenantName: 'Organization',
  applicationName: 'application',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
};

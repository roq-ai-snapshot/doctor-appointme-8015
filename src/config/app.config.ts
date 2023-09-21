interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['System Administrator'],
  customerRoles: ['Guest'],
  tenantRoles: ['System Administrator', 'Healthcare Provider', 'Medical Staff', 'Patient', 'Insurance Provider'],
  tenantName: 'Clinic',
  applicationName: 'Doctor Appointment System v1',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'Read user information',
    'Read clinic information',
    'Read appointment information',
    'Read insurance information',
  ],
  ownerAbilities: [
    'Manage users',
    'Manage clinics',
    'Manage appointments',
    'Manage insurances',
    'Manage healthcare providers',
    'Manage medical records',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/1928ffe4-1485-47e6-9a8f-f61d1b367609',
};

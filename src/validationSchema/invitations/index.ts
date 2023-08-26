import * as yup from 'yup';

export const invitationValidationSchema = yup.object().shape({
  date_created: yup.date().required(),
  last_updated: yup.date().required(),
  status: yup.string().required(),
  organization_id: yup.string().nullable().required(),
  officer_id: yup.string().nullable().required(),
});

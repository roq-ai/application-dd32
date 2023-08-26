import * as yup from 'yup';

export const operationValidationSchema = yup.object().shape({
  name: yup.string().required(),
  description: yup.string().nullable(),
  date_created: yup.date().required(),
  last_updated: yup.date().required(),
  status: yup.string().required(),
  organization_id: yup.string().nullable().required(),
});

import * as yup from 'yup';

export const agentValidationSchema = yup.object().shape({
  name: yup.string().required(),
  rank: yup.string().required(),
  date_created: yup.date().required(),
  last_updated: yup.date().required(),
  status: yup.string().required(),
  user_id: yup.string().nullable().required(),
});

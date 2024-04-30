import * as yup from 'yup';

yup.setLocale({
  mixed: {
    required: () => 'errors.invalid',
    notOneOf: () => 'errors.duplicate',
  },
  string: {
    url: () => 'errors.invalid',
  },
});

export default (fields, duplicateUrl) => {
  const shema = yup.object({
    url: yup.string()
      .url()
      .notOneOf(duplicateUrl),
  });

  return shema.validate(fields, { abortEarly: false })
    .then(() => ({}))
    .catch((err) => {
      throw err;
    });
};

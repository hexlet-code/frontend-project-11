import * as yup from 'yup';

yup.setLocale({
    mixed: {
      required: () => 'errors.invalid',
      notOneOf: () => 'errors.duplicate',
    },
    string: {
        url: () => 'errors.invalid',
    }
});

export default (fields, duplicateUrl, i18n) => {

    const shema = yup.object({
        url: yup.string()
        .url()
        .notOneOf(duplicateUrl)
    });

    return shema.validate(fields, {abortEarly: false})
    .then(() => ({}))
    .catch((err) => {
        throw err;
    })
    // .catch((err) => err.inner.reduce((acc, {path, errors}) => {//errors массив ошибок
    //     const [message] = errors;
    //     acc[path] = i18n.t(message.key);
    //     return acc;
    // }, {}));
};
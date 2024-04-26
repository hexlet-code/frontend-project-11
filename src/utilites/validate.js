import * as yup from 'yup';

yup.setLocale({
    mixed: {
      required: () => ({key: 'errors.invalid'}),
      notOneOf: () => ({key: 'errors.duplicate'}),
    },
    string: {
        url: () => ({key: 'errors.invalid'}),
    }
});

export default (fields, duplicateUrl, i18n) => {

    const shema = yup.object({
        url: yup.string()
        .url()//ТУТ БАГ ЧТО ЛОКАЛИЗАЦИЯ СРАБАТЫВАЕТ ПРИ 2ом нажатии
        .notOneOf(duplicateUrl)
    });

    return shema.validate(fields, {abortEarly: false})
    .then(() => ({}))
    .catch((err) => err.inner.reduce((acc, {path, errors}) => {//errors массив ошибок
        const [message] = errors;
        acc[path] = i18n.t(message.key);
        return acc;
    }, {}));
};
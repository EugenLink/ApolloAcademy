
import * as Yup from 'yup';


export const SignupSchema = Yup.object().shape({
    firstName: Yup.string()
        .min(2, 'Слишком короткое!')
        .max(50, 'Слишком длинное!')
        .required('Обязательное поле!'),
    lastName: Yup.string()
        .min(2, 'Слишком короткое!')
        .max(50, 'Слишком длинное!')
        .required('Обязательное поле!'),
    age: Yup.string('Введите число')
        .required('Введите возраст')
        .matches(/^[0-9]+$/, "Введите число")
        .min(2, 'Некорректный возраст')
        .max(2, 'Некорректный возраст'),
    role: Yup.string(),
    secretKey: Yup.string().required('Обязательное поле!'),
    email: Yup.string().email('Некорректный email').required('Обязательное поле!'),
    password: Yup.string().min(6, 'Слишком короткий пароль').max(20, 'Слишком длинный пароль').required('Обязательное поле!')
});

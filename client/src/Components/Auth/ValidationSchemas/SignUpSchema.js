
import * as Yup from 'yup';


export const SignupSchema1 = Yup.object().shape({
    firstName: Yup.string()
        .min(2, 'Слишком короткое!')
        .max(50, 'Слишком длинное!')
        .required('Обязательное поле!'),
    lastName: Yup.string()
        .min(2, 'Слишком короткое!')
        .max(50, 'Слишком длинное!')
        .required('Обязательное поле!'),
    age: Yup.number('Введите число').required('Введите возраст').positive().integer().typeError('Введите число')
});

export const SignupSchema2 = Yup.object().shape({
    role: Yup.string(),
    secretKey: Yup.string().required('Обязательное поле!')
});

export const SignupSchema3 = Yup.object().shape({
    email: Yup.string().email('Некорректный email').required('Обязательное поле!'),
    password: Yup.string().min(6, 'Слишком короткий пароль').max(20, 'Слишком длинный пароль').required('Обязательное поле!')
});


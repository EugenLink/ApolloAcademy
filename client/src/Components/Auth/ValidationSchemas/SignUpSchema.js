
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
    firstName: Yup.string()
        .min(2, 'Слишком короткое!')
        .max(50, 'Слишком длинное!')
        .required('Обязательное поле!'),
    lastName: Yup.string()
        .min(2, 'Слишком короткое!')
        .max(50, 'Слишком длинное!')
        .required('Обязательное поле!'),
    age: Yup.number().required('Тут должна быть цифра').positive().integer(),
    email: Yup.string().email('Неверный email').required('Обязательное поле!'),
    picked: Yup.string().required('Что-то должно быть выбрано'),
    role: Yup.string().required('Тут что-то должно быть'),
    secretKey: Yup.string().required('Тут что-то должно быть'),
    password: Yup.string().min(6, 'Слишком короткий пароль').max(20, 'Слишком длинный пароль').required('Обязательное поле!')
});

export default SignupSchema
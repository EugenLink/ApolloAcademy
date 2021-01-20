
import * as Yup from 'yup';

const SignInSchema = Yup.object().shape({
    email: Yup.string().email('Неверный email').required('Обязательное поле!'),
    password: Yup.string().min(6, 'Слишком короткий пароль').max(20, 'Слишком длинный пароль').required('Обязательное поле!')
});

export default SignInSchema
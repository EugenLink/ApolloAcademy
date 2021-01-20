import React from 'react';
import './RegisterPage.css';
import { Formik, Form, Field} from 'formik';
import SignupSchema from '../ValidationSchemas/SignUpSchema'
import AuthInput from "../AuthInput/AuthInput";


const RegisterPage = () => {
    const inputs = [
        {
            name: 'firstName',
            holder: 'Имя',
            type: 'text'
        },
        {
            name: 'lastName',
            holder: 'Фамилия',
            type: 'text'
        },
        {
            name: 'age',
            holder: 'Возраст',
            type: 'text'
        },
        {
            name: 'email',
            holder: 'Email',
            type: 'email'
        },
        {
            name: 'password',
            holder: 'Пароль',
            type: 'password'
        }
    ]

    return (
        <div className="auth_page">
            <div className="container container-auth">
            {/* Создание базы для формы */}
                <Formik
                    initialValues={{
                        picked: '',
                        firstName: '',
                        lastName: '',
                        age: '',
                        email: '',
                        password: '',
                        role: '',
                        secretKey: ''
                    }}
                    validationSchema={SignupSchema}
                    onSubmit={async (values) => {
                        await new Promise((r) => setTimeout(r, 500));
                        alert(JSON.stringify(values, null, 2));
                    }}
                >
                {/* Обработка формы */}
                    {({ errors, touched, values}) => (
                        <Form className='d-flex form-register align-items-center'>
                            <h2 className="register-title">Регистрация</h2>
                            {inputs.map(el => {
                                const {name, holder, type} = el
                                return <AuthInput key={name} name = {name} holder = {holder} type = {type} errors = {errors} touched = {touched}/>
                            })}
                            <div role="group" aria-labelledby="my-radio-group" className="radio-group d-flex">
                                <div className="form_radio">
                                    <Field id='radio-1' type="radio" name="picked" value="teacher" className='radio-point'/>
                                    <label htmlFor="radio-1">Учитель</label>
                                </div>
                                <div className="form_radio">
                                    <Field id='radio-2' type="radio" name="picked" value="student" className='radio-point'/>
                                    <label htmlFor="radio-2">Студент</label>
                                </div>
                            </div>
                            <div>
                                {values.picked === 'teacher' ? <AuthInput name='role' holder='Должность'  type='text' errors = {errors} touched = {touched}/> : null}
                            </div>
                            <div>
                                <AuthInput name='secretKey' holder='Секретный ключ' type='text' errors = {errors} touched = {touched}/>
                            </div>
                            <button type="submit">Submit</button>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    );
}



export default RegisterPage;

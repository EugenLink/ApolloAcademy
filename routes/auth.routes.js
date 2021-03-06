const { Router } = require('express')
const {check, validationResult } = require('express-validator')
const mongoose = require('mongoose')
const router = Router();
const bcrypt = require('bcrypt');
const User = require('../models/User')

router.post('/register',
            async (req, res) => {

                try {
                    const {email, password} = req.body;


                    const checkValid = await User.findOne({email})


                    if (checkValid) {
                        return res.status(400).json({message: 'Такой пользователь уже существует'})
                    }

                    const hashPassword = await bcrypt.hash(password, 10)
                    const user = new User({...req.body, password: hashPassword, _id: new mongoose.Types.ObjectId()})

                    if (user) {
                        user.save().then(result => res.status(200).json({message: result}))
                    }

                    return res

                } catch (e) {
                    res.status(500).json({message: 'Что-то пошло не так!'})
                }
})




router.post('/login',
            [
                check('email', 'Введите корректный email').normalizeEmail().isEmail(),
                check('password', 'Введите пароль').exists()
            ],
            async (req, res) => {
                try {
                    const errors = validationResult(req)

                    if (!errors.isEmpty()) {
                        res.status(400).json({
                            errors: errors.array()
                        })
                    }

                    const {email, password} = req.body

                    const user = await User.findOne({email})

                    if (!user) {
                        return res.status(400).json({message: 'Такого пользователя не существует'})
                    }

                    const matchedPassword = await bcrypt.compare(password, user.password);

                    if (!matchedPassword) {
                        return res.status(400).json({message: 'Неверные данные'})
                    } else {
                        req.session.userID = user._id
                        res.status(200).json({message: 'Вы успешно вошли', id : user._id})
                    }
                } catch (e) {
                    res.status(500).json({message: 'Что-то пошло не так!'})
                }
})

module.exports = router
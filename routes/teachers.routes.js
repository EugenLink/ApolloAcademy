const { Router } = require('express')
const { check, validationResult } = require('express-validator')
const Teacher = require('../models/Teacher')
const router = Router();

router.post(
   '/teacher',
    [
            check('name', 'Некорректное имя').isString(),
            check('position', 'Некорректное имя').isString(),
            check('photo', 'Некорректная ссылка').isURL(),
    ],
    async (req, res) => {
        try {
            const errors = validationResult(req)

            if (!errors.isEmpty()) {
                return res.status(400).json({
                    errors: errors.array(),
                    message: 'Некорректные данные'
                })
            }

            const {name, position, age, photo} = req.body

            const teacher_check = await Teacher.findOne({name})

            if (teacher_check) {
                return res.status.json({message: 'Такой учитель уже есть в базе!!!'})
            }

            const teacher = new Teacher({name, position, age, photo})

            await user.save()

            res.status(201).json({message: 'Учитель добавлен'})
        } catch (e) {
            res.status(500).json({message : 'Что-то пошло не так, попробуйте позже'})
        }
})

module.exports = router
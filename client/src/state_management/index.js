import {createEvent, createStore} from 'effector'

export const changeStage = createEvent('change register stage');

export const $stage = createStore(1).on(changeStage, (stage, payload) => payload);

export const toogleSelect = createEvent('open close select window');

export const toogleValueSelect = createEvent()

export const $select = createStore(false).on(toogleSelect, (stage) => !stage).on(toogleValueSelect, (stage) => false)

export const $selectValue = createStore('student').on(toogleValueSelect, (_, value) => value)

export const changeRegisterValue = createEvent()

export const $registerValues = createStore({}).on(changeRegisterValue, (value, data) => {
    return {...value, ...data}
})


//loading, errors from useHttp hook

export const setLoading = createEvent('change Loading')

export const $loading = createStore(false).on(setLoading, (_, payload) => payload)

export const setError = createEvent('set error')

export const $error = createStore(null).on(setError, (_, payload) => payload)
import {createEvent, createStore} from 'effector'

export const changeStage = createEvent('change register stage');

export const $stage = createStore(1).on(changeStage, (stage) => stage + 1);

export const toogleSelect = createEvent('open close select window');

export const toogleValueSelect = createEvent()

export const $select = createStore(false).on(toogleSelect, (stage) => !stage).on(toogleValueSelect, (stage) => false)

export const $selectValue = createStore('student').on(toogleValueSelect, (_, value) => value)

import React from 'react'
import {Field} from 'formik'
import {$select, toogleSelect, $selectValue, toogleValueSelect} from "../../../../state_management";
import {useStore} from "effector-react";
import OutsideClick from "../../../OutsideClick";


const SelectInput = ({name, values}) => {
    const select = useStore($select)
    const selectValue = useStore($selectValue)

    const holderValue = selectValue === 'student' ? 'Студент' : 'Преподаватель'

    const changeValueSelect = selectValue === 'student' ? 'teacher' : 'student'

    return (
        <div className="select_block">
            <Field name={name} type={'text'} value={holderValue} className='text-input select-input' disabled={true} />
            <div className="select_block_click" onClick={() => toogleSelect()}>
            </div>
            {
                select ? (
                    <OutsideClick>
                        <ul className="select_options">
                            {values.map(el => {
                                return <li className="select_option" onClick={() => toogleValueSelect(changeValueSelect)}>{el.holder}</li>
                            })}
                        </ul>
                    </OutsideClick>
                ) : null
            }
        </div>


    )
}

export default SelectInput
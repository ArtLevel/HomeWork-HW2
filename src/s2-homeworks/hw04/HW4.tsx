import React from 'react'
import s2 from '../../s1-main/App.module.css'
import Stand from './Stand'

/*
* 4 - сделать стили в соответствии с дизайном
* */

const HW4 = () => {
    return (
        <div id={'hw4'}>
            <div className={s2.hwTitle}>Homework #4</div>
            {/*демонстрация возможностей компонент:*/}
            <div className={s2.hw}>
                <Stand />
            </div>
        </div>
    )
}

export default HW4

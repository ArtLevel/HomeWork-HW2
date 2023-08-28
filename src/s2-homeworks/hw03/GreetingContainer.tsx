import React, { ChangeEvent, KeyboardEvent, useState } from 'react'
import Greeting from './Greeting'
import { UserType } from './HW3'

type GreetingContainerPropsType = {
    users: UserType[]
    addUserCallback: (name: string) => void
}

export const pureAddUser = (name: any, setError: any, setName: any, addUserCallback: any) => {
    // если имя пустое - показать ошибку, иначе - добавить юзера и очистить инпут
}

export const pureOnBlur = (name: any, setError: any) => { // если имя пустое - показать ошибку
}

export const pureOnEnter = (e: any, addUser: any) => { // если нажата кнопка Enter - добавить
}

// более современный и удобный для про :)
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({
    users,
    addUserCallback,
}) => {
    const [name, setName] = useState('') // need to fix any
    const [error, setError] = useState('') // need to fix any

    const setNameCallback = (e: any) => { // need to fix any
        setName('some name') // need to fix

        error && setError('')
    }
    const addUser = () => pureAddUser(name, setError, setName, addUserCallback)

    const onBlur = () => pureOnBlur(name, setError)

    const onEnter = (e: any) => pureOnEnter(e, addUser)

    const totalUsers = 0 // need to fix
    const lastUserName = 'some name' // need to fix

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            onBlur={onBlur}
            onEnter={onEnter}
            error={error}
            totalUsers={totalUsers}
            lastUserName={lastUserName}
        />
    )
}

export default GreetingContainer

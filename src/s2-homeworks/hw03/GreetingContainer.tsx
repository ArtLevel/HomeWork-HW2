import React, {ChangeEvent, KeyboardEvent, useState} from 'react'
import Greeting from './Greeting'
import {UserType} from './HW3'

type GreetingContainerPropsType = {
	users: UserType[]
	addUserCallback: (name: string) => void
}

export const pureAddUser = (name: string, setError: (error: string) => void, setName: (name: string) => void, addUserCallback: (name: string) => void) => {
	if(name.trim()) {
		addUserCallback(name)
		setError('')
		setName('')
		return
	}
	setError('Ошибка! Введите имя!')
}

export const pureOnBlur = (name: string, setError: (error: string) => void) => {
	if (!name.trim()) setError('Ошибка! Введите имя!')
}

export const pureOnEnter = (e: KeyboardEvent<HTMLInputElement>, addUser: () => void) => {
	if (e.key === 'Enter') addUser()
}

// более современный и удобный для про :)
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({
	                                                                 users,
	                                                                 addUserCallback,
                                                                 }) => {
	const [name, setName] = useState('') // need to fix any
	const [error, setError] = useState('')

	const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => { // need to fix any
		setName(e.currentTarget.value)

		error && setError('')
	}
	const addUser = () => pureAddUser(name, setError, setName, addUserCallback)

	const onBlur = () => pureOnBlur(name, setError)

	const onEnter = (e: KeyboardEvent<HTMLInputElement>) => pureOnEnter(e, addUser)

	const totalUsers = users.length
	const lastUserName = users.length !== 0 ? users[users.length - 1].name : ''

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

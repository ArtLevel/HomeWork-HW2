import React from 'react'
import Message from './message/Message'
import MessageSender from './message-sender/MessageSender'
import s2 from '../../s1-main/App.module.css'
import FriendMessage from './friend-message/FriendMessage'
import avatar from './avatar.png'

/*
* 5 - сделать стили в соответствии с дизайном
* */

export type MessageType = {
	id: number,
	user: {
		avatar: string,
		name: string,
	},
	message: {
		text: string,
		time: string,
	},
}
export const message0: MessageType = {
	id: 0,
	user: {
		avatar: avatar,
		name: 'Nikita',
	},
	message: {
		text: 'some textsome textsome textsome textsome textsome textsome text',
		time: '22:00',
	},
}
export const friendMessage0: MessageType = {
	id: 100,
	user: {
		avatar: avatar,
		name: 'Vasya',
	},
	message: {
		text: 'зеркальное сообщение для тренировки css',
		time: '22:00',
	},
}

const HW1 = () => {
	return (
		<div id={'hw1'}>
			<div className={s2.hwTitle}>Homework #1</div>
			<div className={s2.hw}>
				{/*проверка отображения (не менять)*/}
				<div>
					<Message message={message0}/>
					<FriendMessage message={friendMessage0}/>
				</div>

				{/*для автоматической проверки дз (не менять)*/}
				<MessageSender M={Message}/>
			</div>
		</div>
	)
}

export default HW1

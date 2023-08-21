import React from 'react'
import Affair from './affair/Affair'
import {AffairType, FilterType} from '../HW2'
import s from './Affairs.module.css'

type AffairsPropsType = {
	data: AffairType[]
	setFilter: (filter: FilterType) => void
	deleteAffairCallback: (_id: AffairType['_id']) => void
	filter: FilterType
}

function Affairs(props: AffairsPropsType) {
	const {data, setFilter, deleteAffairCallback, filter, ...restProps} = props

	const setAll = () => setFilter('all')
	const setHigh = () => setFilter('high')
	const setMiddle = () => setFilter('middle')
	const setLow = () => setFilter('low')

	const cnAll = s.button + ' ' + s.all + (filter === 'all' ? ' ' + s.active : '')
	const cnHigh = s.button + ' ' + s.high + (filter === 'high' ? ' ' + s.active : '')
	const cnMiddle = s.button + ' ' + s.middle + (filter === 'middle' ? ' ' + s.active : '')
	const cnLow = s.button + ' ' + s.low + (filter === 'low' ? ' ' + s.active : '')

	const mappedAffairs = data.map((a: AffairType) => (
		<Affair
			key={a._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
			affair={a}
			deleteAffairCallback={deleteAffairCallback}
		/>
	))

	return (
		<div>
			<div className={s.buttonContainer}>
				<button
					id={'hw2-button-all'}
					onClick={setAll}
					className={cnAll}
				>
					All
				</button>
				<button
					id={'hw2-button-high'}
					onClick={setHigh}
					className={cnHigh}
				>
					High
				</button>
				<button
					id={'hw2-button-middle'}
					onClick={setMiddle}
					className={cnMiddle}
				>
					Middle
				</button>
				<button
					id={'hw2-button-low'}
					onClick={setLow}
					className={cnLow}
				>
					Low
				</button>
			</div>
			<div className={s.affairs}>{mappedAffairs}</div>
		</div>
	)
}

export default Affairs

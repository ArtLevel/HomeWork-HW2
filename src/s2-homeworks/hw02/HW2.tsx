import React, { useState } from 'react'
import Affairs from './affairs/Affairs'
import s2 from '../../s1-main/App.module.css'

export type AffairPriorityType = 'high' | 'low' | 'middle'
export type AffairType = {
	_id: number
	name: string
	priority: AffairPriorityType
}
export type FilterType = 'all' | AffairPriorityType

const defaultAffairs: AffairType[] = [
	// need to fix any
	{ _id: 1, name: 'React', priority: 'high' }, // студенты могут изменить содержимое name и количество элементов в массиве, ...priority не менять!
	{ _id: 2, name: 'anime', priority: 'low' },
	{ _id: 3, name: 'games', priority: 'low' },
	{ _id: 4, name: 'work', priority: 'high' },
	{ _id: 5, name: 'html & css', priority: 'middle' },
]

export const filterAffairs = (
	affairs: AffairType[],
	filter: FilterType
): AffairType[] => {
	if (filter !== 'all') {
		return affairs.filter((aff) => aff.priority === filter)
	}
	return affairs
}

export const deleteAffair = (
	affairs: AffairType[],
	_id: AffairType['_id']
): AffairType[] => affairs.filter((aff) => aff._id !== _id)

function HW2() {
	const [affairs, setAffairs] = useState<AffairType[]>(defaultAffairs) // need to fix any
	const [filter, setFilter] = useState<FilterType>('all')

	const filteredAffairs = filterAffairs(affairs, filter)
	const deleteAffairCallback = (_id: AffairType['_id']) => {
		const filteredAff = deleteAffair(affairs, _id)

		setAffairs(filteredAff)
	}

	return (
		<div
			id={'hw2'}
			style={{
				width: '100%',
				display: 'flex',
				marginTop: '100px',
				flexDirection: 'column',
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			<div className={s2.hwTitle}>Homework #2</div>
			<div className={s2.hw}>
				<Affairs
					data={filteredAffairs}
					setFilter={setFilter}
					deleteAffairCallback={deleteAffairCallback}
					filter={filter}
				/>
			</div>
		</div>
	)
}

export default HW2

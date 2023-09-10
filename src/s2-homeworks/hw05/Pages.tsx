import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Error404 from './pages/Error404'
import PreJunior from './pages/PreJunior'
import Junior from './pages/Junior'
import JuniorPlus from './pages/JuniorPlus'

export const PATH = {
	PRE_JUNIOR: '/pre-junior',
	JUNIOR: '/junior',
	JUNIOR_PLUS: '/junior-plus'
}

function Pages() {
	return (
		<div>
			<Routes>
				<Route path='/' element={<PreJunior />} />

				<Route path='/pre-junior' element={<PreJunior />} />
				<Route path='/junior' element={<Junior />} />
				<Route path='/junior-plus' element={<JuniorPlus />} />

				<Route path='*' element={<Error404 />} />
			</Routes>
		</div>
	)
}

export default Pages

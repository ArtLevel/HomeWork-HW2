type InitialStateT = {
	themeId: number
}

type ActionsT = ReturnType<typeof changeThemeId>

const initState: InitialStateT = {
	themeId: 1
}

export const themeReducer = (state: InitialStateT = initState, action: ActionsT): InitialStateT => {
	switch (action.type) {
		case 'SET_THEME_ID':
			return { ...state, themeId: action.id }
		default:
			return state
	}
}

export const changeThemeId = (id: number) => ({ type: 'SET_THEME_ID', id })

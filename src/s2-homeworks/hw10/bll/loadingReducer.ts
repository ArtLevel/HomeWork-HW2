export type LoadingStateT = {
	isLoading: boolean
}

const initState: LoadingStateT = {
	isLoading: false
}

export const loadingReducer = (state = initState, action: LoadingActionType): LoadingStateT => { // fix any
	switch (action.type) {
		case 'CHANGE_LOADING':
			return { ...state, isLoading: action.isLoading }
		default:
			return state
	}
}

type LoadingActionType = {
	type: 'CHANGE_LOADING'
	isLoading: boolean
}

export const loadingAC = (isLoading: boolean): LoadingActionType => ({
	type: 'CHANGE_LOADING',
	isLoading
})

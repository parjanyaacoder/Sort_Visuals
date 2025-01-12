import { sortingActionTypes } from "../actions/sorting"
import sortingAlgos from "../constants/sortingAlgos"

const initialState = {
    arraySize: 7,
    speed: 1,
    array: [7 ,9, 5, 5, 8, 10, 6],
    sortedIds: new Set(),
    idMap: {},
    algoType: sortingAlgos.SELECTION_SORT,
    isSorting: false
}

const sortReducer = (state = initialState, action) => {
    switch(action.type) {
        case sortingActionTypes.SET_SIZE: 
            return {
                ...state,
                arraySize: action.payload
            }
        case sortingActionTypes.SET_SPEED:
            const { min_index, array } = action.payload 
            return {
                ...state,
                speed: action.payload,
                array: [...array],
                sortedIds: state.sortedIds.add(min_index)
            }
        case sortingActionTypes.GENERATE_ARRAY: 
            return {
                ...state,
                array: action.payload
            }
        case sortingActionTypes.START_SORTING: 
            return {
                ...state,
                isSorting: true
            }
        case sortingActionTypes.STOP_SORTING: 
            return {
                ...state,
                isSorting: false
            }
        default: 
            return state
    }
}

export default sortReducer;
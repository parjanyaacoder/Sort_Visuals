const SORTING_PREFIX = "SORT/"

export const sortingActionTypes = {
    START_SORTING: `${SORTING_PREFIX}START_SORTING`,
    STOP_SORTING: `${SORTING_PREFIX}STOP_SORTING`,
    GENERATE_ARRAY: `${SORTING_PREFIX}GENERATE_ARRAY`,
    SET_SIZE: `${SORTING_PREFIX}SET_SIZE`,
    SET_SPEED: `${SORTING_PREFIX}SET_SPEED`,
}

const startSorting = (payload) => {
    type: sortingActionTypes.START_SORTING, 
    payload
}

const stopSorting = (payload) => {
    type: sortingActionTypes.STOP_SORTING,
    payload
}

const generateArr = (payload) => {
    type: sortingActionTypes.GENERATE_ARRAY,
    payload
}

const setSize = (payload) => {
    type: sortingActionTypes.SET_SIZE,
    payload
}

const setSpeed = (payload) => ({
    type: sortingActionTypes.SET_SPEED,
    payload
})

export default {
    startSorting,
    stopSorting,
    generateArr,
    setSize,
    setSpeed

}
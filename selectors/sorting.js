const getArray = state => state?.sortReducer?.array

const getArraySize = state => state?.sortReducer?.arraySize

const getAlgoType = state => state?.sortReducer?.algoType

const getSortedIds = state => state?.sortReducer?.sortedIds

const sortingSelectors = {
    getArray,
    getArraySize,
    getAlgoType,
    getSortedIds
}

export default sortingSelectors
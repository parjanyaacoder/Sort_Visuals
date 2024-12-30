const getArray = state => state?.sortReducer?.array

const getArraySize = state => state?.sortReducer?.arraySize

const getAlgoType = state => state?.sortReducer?.algoType

const sortingSelectors = {
    getArray,
    getArraySize,
    getAlgoType
}

export default sortingSelectors
const getArray = state => state?.sortReducer?.array

const getArraySize = state => state?.sortReducer?.arraySize

const sortingSelectors = {
    getArray,
    getArraySize
}

export default sortingSelectors
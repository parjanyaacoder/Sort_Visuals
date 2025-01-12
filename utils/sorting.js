import sorting from "../actions/sorting";

export const selectionSort = async (array, arraySize, dispatch) => {
    for(var i = 0;i<= arraySize - 1;i++) {
        var min_index = i;
        for(var j=i+1;j<arraySize;j++) {
            if(array[j]  < array[min_index])
                min_index = j;
        }
        var temp = array[min_index];
        array[min_index] = array[i];
        array[i] = temp;
        dispatch(sorting.setSpeed({array, min_index:i}))
        await new Promise((resolve) => setTimeout(resolve, 4000))
    }
} 

export const bubbleSort = async (array, arraySize, dispatch) => {
    for(var i = 0; i < arraySize; i++ ) {
        for(var j = 0; j < arraySize - i - 1; j++) {
            if(array[j] > array[j+1] ) {
                var temp = array[j];
                array[j] = array[j+1];
                array[j+1] = temp;
                dispatch(sorting.setSpeed({array, min_index: arraySize}))
            }
        }
        dispatch(sorting.setSpeed({array, min_index: arraySize - 1 - i}))
        await new Promise((resolve) => setTimeout(resolve, 4000))
    }
}

const swap = (array, i , j) => {
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}

const partition = async (array, low, high, dispatch) => {
    var pivot = array[high];
    var i = low - 1;
    for (var j = low; j <= high -1; j++) {
        if(array[j] < pivot) {
            i++;
            swap(array, i, j)
            if(i != j) {
                dispatch(sorting.setSpeed({array, min_index: -1}))
                await new Promise((resolve) => setTimeout(() => resolve(), 1000))
            }
        }
    }
    swap(array, i+1, high)
    if (i+1 != high) { 
        await new Promise((resolve) => setTimeout(() => {
            resolve()}, 1000))
            dispatch(sorting.setSpeed({array, min_index: i+1}))
    }
    return i+1;
}

const qs = async (array, low, high, dispatch) => {
    if (low < high) {
        var pi = await partition(array, low, high, dispatch);
        if(low < pi - 1)
        await qs(array, low, pi - 1, dispatch);
        if (pi + 1 < high)
        await qs(array, pi+1, high, dispatch);
    }
}

export const quickSort = (array, arraySize, dispatch) => {
    qs(array, 0, arraySize - 1, dispatch);
}

export const insertionSort = async (array, arraySize, dispatch) => {
    for(var i = 1; i < arraySize; i++) {
        var key = array[i];
        var j = i-1;
        while(j>=0 && array[j] > key) {
            swap(array, j, j+1)
            j = j - 1;
            dispatch(sorting.setSpeed({array, min_index: -1}))
            await new Promise((resolve) => setTimeout(() => {
                resolve()}, 1000))
        }
        array[j+1] = key;
        if(j+1 == i) {
            dispatch(sorting.setSpeed({array, min_index: j}))
        }
        if(j==0) {
            dispatch(sorting.setSpeed({array, min_index: i}));
        }
        dispatch(sorting.setSpeed({array, min_index: j+1}))
        await new Promise((resolve) => setTimeout(() => {
            resolve()}, 1000))
    }
}
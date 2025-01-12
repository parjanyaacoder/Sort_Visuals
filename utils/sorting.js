import sorting from "../actions/sorting";

export const selectionSort = async (array, arraySize, dispatch) => {
    for(var i = 0;i<= arraySize - 1;i++) {
        var min_index = i;
        for(var j=i+1;j<arraySize;j++) {
            if(array[j]  < array[min_index])
                min_index = j;
        }
        console.log(min_index, array, array[min_index], array[i])
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
            console.log("sdd", array, array[j], array[j+1]);
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

const partition = (array, low, high, dispatch) => {
    var pivot = array[high];
    var i = low - 1;
    console.log("A", i, low, high, array)
    for (var j = low; j <= high -1; j++) {
        if(array[j] < pivot) {
            i++;
            swap(array, i, j)
            dispatch(sorting.setSpeed({array, min_index: -1}))
        }
    }
    console.log("B", i, low, high)
    swap(array, i+1, high)
    console.log("C", i, low, high, array)
    dispatch(sorting.setSpeed({array, min_index: i+1}))
    console.log("I", i+1, high)
    return i+1;
}

const qs = async (array, low, high, dispatch) => {
    console.log("Aaa", low, high)
    if (low < high) {
        var pi = partition(array, low, high, dispatch);
        console.log("Aaa2", pi)
        qs(array, low, pi - 1);
        qs(array, pi+1, high);
        await new Promise((resolve) => setTimeout(resolve, 20))
    } else 
    await new Promise((resolve) => setTimeout(resolve, 0))
}

export const quickSort = async (array, arraySize, dispatch) => {
    await qs(array, 0, arraySize - 1, dispatch);
}

export const insertionSort = async (array, arraySize, dispatch) => {
    for(var i = 1; i < n; i++) {
        var key = array[i];
        var j = i-1;
        while(j>=0 && array[j] > key) {
            array[j+1] = array[j];
            j = j - 1;
            dispatch(sorting.setSpeed({array, min_index: -1}))
            await new Promise((resolve) => setTimeout(resolve, 1000))
        }
        array[j+1] = key;
        dispatch(sorting.setSpeed({array, min_index: arraySize - 1 - i}))
        await new Promise((resolve) => setTimeout(resolve, 4000))
    }
}
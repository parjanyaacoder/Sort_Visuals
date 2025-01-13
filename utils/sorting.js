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

const merge = async (array, l, m, r, dispatch) => {
    n1 = m - l + 1;
    n2 = r - m;
    const left = new Array(n1);
    const right = new Array(n2);

    console.log(l, m , r, n1, n2)
    for(i = 0; i < n1; i++) {
        left[i] = array[l+i];
    } 

    for(i = 0; i < n2; i++) {
        right[i] = array[m+i+1];
    } 

    k = l; i = 0; j = 0;
    while(i < n1 && j<n2) {
        console.log(left[i], right[j])
        if(left[i] <= right[j]) {
            array[k++] = left[i++];
            dispatch(sorting.setSpeed({array, min_index: r - l + 1 == array.length ? k-1 : -1}))
            await new Promise((resolve) => setTimeout(() => {
                resolve()}, 1000))
        } else {
            array[k++] =right[j++];
            dispatch(sorting.setSpeed({array, min_index: r - l + 1 == array.length ? k-1 :-1}))
            await new Promise((resolve) => setTimeout(() => {
                resolve()}, 1000))
        }
    }

    while(i<n1) {
        array[k++] = left[i++];
        dispatch(sorting.setSpeed({array, min_index: r - l + 1 == array.length ? k-1 :-1}))
        await new Promise((resolve) => setTimeout(() => {
            resolve()}, 1000))
    }

    while(j<n2) {
        array[k++] = right[j++];
        dispatch(sorting.setSpeed({array, min_index: r - l + 1 == array.length ? k-1 :-1}))
        await new Promise((resolve) => setTimeout(() => {
            resolve()}, 1000))
    }
}

const sort = async (array, l, r, dispatch) => {
    if (l < r) {
        const m = Math.floor(l + (r-l)/2);
        await sort(array, l, m, dispatch);
        await sort(array, m+1, r, dispatch);
        await merge(array, l , m , r, dispatch);
    }
}

export const mergeSort = async (array, arraySize, dispatch) => {
    await sort(array, 0, arraySize - 1, dispatch)
}

const heapify = async (array, arraySize, index, dispatch) => {
    let largest = index
    let left = 2 * index + 1;
    let right = 2 * index + 2;

    if (left < arraySize && array[left] > array[largest])
    {
        largest = left;
    }

    if(right < arraySize && array[right] > array[largest]) {
        largest = right;
    }

    if(largest !== index ) {
        swap(array, index, largest)
        dispatch(sorting.setSpeed({array, min_index: -1}))
        await new Promise((resolve) => setTimeout(() => {
            resolve()}, 1000))
        await heapify(array, arraySize, largest, dispatch)
    }
}

export const heapSort = async (array, arraySize, dispatch) => {
    for (i = Math.floor(arraySize / 2) -1 ;i>=0 ; i--)
        await heapify(array, arraySize, i, dispatch)

    for (i = arraySize - 1; i > 0 ; i--) {
        swap(array, 0 , i);
        dispatch(sorting.setSpeed({array, min_index: i}))
        await new Promise((resolve) => setTimeout(() => {
            resolve()}, 1000))
        await heapify(array, i, 0, dispatch)
    }
    dispatch(sorting.setSpeed({array, min_index: 0}))
    await new Promise((resolve) => setTimeout(() => {
        resolve()}, 1000))
    
}
import React from "react";
import { Image, Pressable, Text, View } from "react-native";
import sortingAlgos from "../constants/sortingAlgos";
import styles from "../styles/chip";
import images from "../constants/images";
import { useDispatch, useSelector } from "react-redux";
import sortingSelectors from "../selectors/sorting";
import { bubbleSort, selectionSort, quickSort, mergeSort, heapSort } from "../utils/sorting";

const SelectionChip = (props) => {

    const { isSelected, type } = props

    const getStyles = (type) => {
        switch (type) {
            case sortingAlgos.BUBBLE_SORT: 
                return styles.bs
            case sortingAlgos.INSERTION_SORT:
                return styles.is
            case sortingAlgos.QUICK_SORT:
                return styles.qs
            case sortingAlgos.MERGE_SORT:
                return styles.ms
            case sortingAlgos.SELECTION_SORT:
                return styles.ss
        }
    } 

    const array = useSelector(sortingSelectors.getArray)
    const arraySize = useSelector(sortingSelectors.getArraySize)
    const dispatch = useDispatch()

    return (
        <Pressable style={getStyles(type)} onPress={() => {
            heapSort(array, arraySize, dispatch)
        }} >
            {isSelected ? <Image source={images.tick} style={styles.mark}></Image> : (
                <View style={styles.unmark}>
                </View>
            )}
            <Text style={styles.algoText} numberOfLines={2} >{type}</Text>
        </Pressable>
    )
}

export default SelectionChip
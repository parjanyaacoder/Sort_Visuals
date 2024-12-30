import React from "react";
import { Image, Pressable, Text, View } from "react-native";
import sortingAlgos from "../constants/sortingAlgos";
import styles from "../styles/chip";
import images from "../constants/images";

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

    console.log(getStyles(type), type)

    return (
        <Pressable style={getStyles(type)} >
            {isSelected ? <Image source={images.tick} style={styles.mark}></Image> : (
                <View style={styles.unmark}>
                </View>
            )}
            <Text style={styles.algoText} numberOfLines={2} >{type}</Text>
        </Pressable>
    )
}

export default SelectionChip
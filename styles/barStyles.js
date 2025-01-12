import { StyleSheet } from "react-native";
import colors from "../constants/colors";

const styles = StyleSheet.create({
    bar: (height, width, isSelected, onFinalPosition) => {
        // console.log("HWIO", height, width, isSelected, onFinalPosition)
        return ({
        height: `${height}%`,
        width: `${width}`,
        backgroundColor: onFinalPosition ? colors.brightGreen : isSelected ? '#f8ff00' : colors.dullYellow,
        marginHorizontal: 0,
        borderColor: 'black',
        borderWidth: 1,
        })
    }
    })

export default styles
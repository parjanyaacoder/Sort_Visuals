import { useSelector } from "react-redux"
import { Dimensions, View } from "react-native"

import styles from "../styles/barStyles"
import sortingSelectors from "../selectors/sorting"
import BarDimensions from "../utils/barDimensions"

const Bar = (props) => {

    const { item, index } = props
    const arrayCount = useSelector(sortingSelectors.getArraySize)
    const barHeight = BarDimensions.getBarHeight(item)
    const barWidth = BarDimensions.getBarWidth(arrayCount)

    return (
    <View style={styles.bar(barHeight, barWidth, false, false)}>
    </View>
    )
}

export default Bar
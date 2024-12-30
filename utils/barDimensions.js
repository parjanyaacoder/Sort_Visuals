import Screen from "../constants/screen"

const getBarHeight = (value) => Screen.WINDOW_HEIGHT * value / 200

const getBarWidth = (count) => (Screen.WINDOW_WIDTH - 48) / count

export default BarDimensions = {
    getBarHeight,
    getBarWidth
}
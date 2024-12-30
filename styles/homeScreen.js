import { StyleSheet } from "react-native";
import colors from "../constants/colors";

const styles = StyleSheet.create({
    heading: {
        color: 'blue',
        fontSize: 32,
        fontWeight: 400,
    },
    top: {
        backgroundColor: 'pink',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12
    },
    selection1: {
        padding: 16,
        borderRadius: 24,
        backgroundColor: 'green',
        alignItems: 'center',
        justifyContent: 'center',
    },
    selection2: {
        padding: 16,
        borderRadius: 24,
        backgroundColor: 'green',
        alignItems: 'center',
        justifyContent: 'center',
    },
    generateCta: {
        padding: 16,
        borderRadius: 24,
        backgroundColor: 'green',
        alignItems: 'center',
        justifyContent: 'center',
    },
    startCta: {
        borderRadius: 48,
        width: 96,
        height: 96,
        backgroundColor: 'green',
        color: 'purple',
        alignItems: 'center',
        justifyContent: 'center',
    },
    stopCta: {
        width: 64,
        height: 64,
        backgroundColor: 'green',
        alignItems: 'center',
        justifyContent: 'center',
    },
    algoType: {
        padding: 16,
        borderRadius: 24,
        backgroundColor: 'green',
        alignItems: 'center',
        justifyContent: 'center',
    },
    screen: {
        height: '100%',
        width: '100%',
        backgroundColor: colors.whiteF7
    },
    ctaContainer: {
        margin: 12,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    actionCta: {
       marginVertical: 20,
       alignItems: 'center',
       justifyContent: 'center'
    },
    arrayArea: {
        paddingBottom: 12,
        paddingHorizontal: 20,
        backgroundColor: colors.whiteE8,
        flexDirection: 'row',
        alignItems: 'flex-end',
        flex: 1
    },
    algos: {
        flexDirection: 'row',
        marginVertical: 12,
        alignContent: 'center',
        alignItems: 'center',
        // height: '50%',
        height: 130,
        // backgroundColor: 'red',
        justifyContent: 'space-evenly',
    },
    padHz12: {
        paddingHorizontal: 12
    }
})

export default styles
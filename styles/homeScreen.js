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
        width: 64,
        height: 64,
        backgroundColor: 'green',
        alignItems: 'center',
        justifyContent: 'center',
    },
    selection2: {
        width: 64,
        height: 64,
        backgroundColor: 'green',
        alignItems: 'center',
        justifyContent: 'center',
    },
    generateCta: {
        width: 64,
        height: 64,
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
        width: 64,
        height: 64,
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
        margin: 24,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    actionCta: {
       flex: 1,
       alignItems: 'center',
       justifyContent: 'center'
    },
    arrayArea: {
        flex: 1,
        marginVertical: 32,
        paddingHorizontal: 20,
        backgroundColor: colors.whiteE8,
        flexDirection: 'row',
        alignItems: 'flex-end',
    }
})

export default styles
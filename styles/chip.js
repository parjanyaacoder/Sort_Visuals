import { StyleSheet } from "react-native";
import colors from "../constants/colors";

const chipCta = {
    borderRadius: 12,
    alignItems: 'space-evenly',
    justifyContent: 'center',
    backgroundColor: 'pink',
    width: '18%',
    height: '100%',
    borderWidth: 2,
    borderColor: 'green'
    
}

const styles = StyleSheet.create({
    qs: {
        ...chipCta,
        backgroundColor: 'pink'
    },
    ms: {
        ...chipCta,
        backgroundColor: colors.whiteE3
    },
    is: {
        ...chipCta,
        backgroundColor: colors.brightGreen
    },
    ss: {
        ...chipCta,
        backgroundColor: colors.whiteE3
    },
    bs: {
        ...chipCta,
        backgroundColor: colors.whiteE3
    },
    unmark: {
        height: 16,
        width: 16, 
        borderRadius: 32,
        borderWidth: 2,
        position: 'absolute',
        top: 8,
        left: 8
    },
    mark: {
        height: 16,
        width: 16,
        position: 'absolute',
        top: 8,
        left: 8
    },
    algoText: {
        color: colors.whiteF7,
        width: '100%',
        // flex: 1,
        // paddingTop: 8,
        paddingHorizontal: 6,
        textAlignVertical: 'center',
        textAlign: 'center'
    }
})

export default styles
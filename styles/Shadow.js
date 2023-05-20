import { isAndroid } from '../utils/PlatformChecker';
import { StyleSheet } from 'react-native';

const getShadowStyle = (elevation, shadowColor, shadowOpacity, shadowRadius) => {
    if (isAndroid) {
        return {
            elevation,
        };
    } else {
        return {
            shadowColor,
            shadowOpacity,
            shadowRadius,
            shadowOffset: {
                width: 0,
                height: elevation,
            },
        };
    }
};

Shadow = StyleSheet.create({
    shadow: {
        ...getShadowStyle(10, 'black', 0.5, 5),
    },
});

export default Shadow;

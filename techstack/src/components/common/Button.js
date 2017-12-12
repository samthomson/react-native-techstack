import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = (props) => {
    const { onPressEvent, children } = props;
    const { buttonStyle, textStyle } = styles;

    return (
        <TouchableOpacity
            style={buttonStyle}
            onPress={onPressEvent}
        >
            <Text style={textStyle}>
                {children}
            </Text>
        </TouchableOpacity>
    );
};
        

const styles = {
    buttonStyle: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#007aff',
        marginLeft: 5,
        marginRight: 5
    },
    textStyle: {
        alignSelf: 'center',
        color: '#007aff',
        fontSize: 16,
        fontWeight: '600'
    }
};

export { Button };

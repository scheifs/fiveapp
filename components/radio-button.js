import React, { Component } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
export default class RadioButton extends Component {
    state = {
        value: null,
    };

    selectedButton(value, res) {
        if (value === res.key || !value && res.default) {
            return <View style={styles.selectedRb} />
        }
    }

    render() {
        const { PROP } = this.props;
        const { value } = this.state;
        return (
            <View style={styles.outerContainer}>
                {PROP.map(res => {
                    return (
                        <View key={res.key} style={styles.container}>
                            <Text style={styles.radioText}>{res.text}</Text>
                            <TouchableOpacity
                                style={styles.radioCircle}
                                onPress={() => {
                                    this.props.selectedRadio(res.key);
                                    this.setState({
                                        value: res.key,
                                    });
                                }}>
                                {this.selectedButton(value, res)}
                            </TouchableOpacity>
                        </View>
                    );
                })}
            </View>
        );
    }
}
const styles = StyleSheet.create({
    outerContainer: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    container: {
        marginBottom: 35,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    radioText: {
        paddingHorizontal: 10,
        color: '#000',
    },
    radioCircle: {
        height: 20,
        width: 20,
        borderRadius: 100,
        borderWidth: 2,
        borderColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
    },
    selectedRb: {
        width: 15,
        height: 15,
        borderRadius: 50,
        backgroundColor: 'black',
    },
    result: {
        marginTop: 20,
        color: 'white',
        fontWeight: '600',
        backgroundColor: '#F3FBFE',
    },
});
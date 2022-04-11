import { View, StyleSheet, TextInput, Button, Image } from 'react-native';
import { useState } from 'react';
import RadioButton from '../components/radio-button';
import { LinearGradient } from 'expo-linear-gradient';

function LoginScreen({ updateScreen }) {

    const radioButtons = [
        {
            key: 'New User',
            text: 'New User',
            default: true
        },
        {
            key: 'Existing User',
            text: 'Existing User',
        }
    ];


    const [enterButtonText, setEnterButtonText] = useState('Register');
    const [emailAddress, setEmailAddress] = useState(`${Date.now()}@test.com`);
    const [password, setPassword] = useState('');

    function onEmailInputChanage(text) {
        setEmailAddress(text);
    }

    function onPasswordInputChanage(text) {
        setPassword(text);
    }

    function onSubmitHandler() {
        console.log(`onSubmitHandler ${emailAddress} ${password}`);
        updateScreen('Loading', { emailAddress, password});
    }

    function onClearHandler() {
        setPassword('');
        setEmailAddress('');
    }

    function selectedRadio(text) {
        console.log('login screen', text);
        if (text === 'Existing User') {
            setEnterButtonText('Login');
        } else {
            setEnterButtonText('Register');
        }
    }

    return (
        <LinearGradient
            colors={['#4c669f', 'purple']}
            style={styles.linearGradient}>

            <View style={styles.imageContainer}>
                <Image style={styles.image} source={require('../assets/icon.png')} />
            </View>
            <View style={styles.radioButtonContainer}>
                <RadioButton selectedRadio={selectedRadio} PROP={radioButtons} />
            </View>
            <View style={styles.textInputContainer}>
                <TextInput
                    style={styles.textInput}
                    placeholder='Enter your email address'
                    keyboardType="email-address"
                    maxLength={100}
                    value={emailAddress}
                    onChangeText={onEmailInputChanage} />
                <TextInput
                    style={styles.textInput}
                    autoComplete='password'
                    placeholder='Enter your password'
                    maxLength={16}
                    secureTextEntry={true}
                    value={password}
                    onChangeText={onPasswordInputChanage} />
            </View>
            <View style={styles.buttonsContainer}>
                <View style={styles.button}>
                    <Button onPress={onClearHandler} title='Clear' />
                </View>
                <View style={styles.button}>
                    <Button onPress={onSubmitHandler} title={enterButtonText} />
                </View>
            </View>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    radioButtonContainer: {
        marginTop: 25
    },
    imageContainer: {
        alignItems: 'center',
        marginTop: 25
    },
    image: {
        width: 400,
        height: 300,
    },
    outerContainer: {
        marginVertical: 50
    },
    linearGradient: {
        flex: 1,
        width: '100%'
    },
    textInput: {
        width: '50%',
        paddingBottom: 3,
        marginBottom: 16,
        borderBottomWidth: 2
    },
    textInputContainer: {
        alignItems: 'center',
    },
    buttonsContainer: {
        marginTop: 8,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    button: {
        marginHorizontal: 10,
    },
})

export default LoginScreen;
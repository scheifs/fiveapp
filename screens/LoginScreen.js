import { View, StyleSheet, TextInput, Button, Image, ActivityIndicator, Alert } from 'react-native';
import { useState, useEffect } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import * as loginService from '../services/login-service';
import * as storageService from '../services/storage-service';
import AwesomeAlert from 'react-native-awesome-alerts';

function LoginScreen({ setIsLoggedIn }) {

    const [emailAddress, setEmailAddress] = useState(`${Date.now()}@test.com`);
    const [password, setPassword] = useState(`${Date.now()}`);
    const [loading, setLoading] = useState(false);

    // useEffect(() => {
    // }, [loading])

    function onEmailInputChanage(text) {
        setEmailAddress(text);
    }

    function onPasswordInputChanage(text) {
        setPassword(text);
    }

    function showContent() {

        return (<>
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
                    <Button color='blue' onPress={onClearHandler} title='Clear' />
                </View>
                <View style={styles.button}>
                    <Button color='blue' onPress={onSubmitHandler} title='Submit' />
                </View>
            </View></>)

    }

    async function onSubmitHandler() {

        console.log(`onSubmitHandler ${emailAddress} ${password}`);
        setLoading(true);

        try {
            const data = await loginService.login(emailAddress, password);
            await storageService.set('user', JSON.stringify(data));
            setIsLoggedIn(true);
        } catch (err) {
            console.log(err);
            setLoading(false);
        }

    }

    function onClearHandler() {
        setPassword('');
        setEmailAddress('');
    }

    return (
        <LinearGradient
            colors={['#4c669f', 'purple']}
            style={styles.linearGradient}>

            <View style={styles.imageContainer}>
                <Image style={styles.image} source={require('../assets/icon.png')} />
            </View>
            {loading? <ActivityIndicator size="large" color="black"/> : showContent()}
            
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    imageContainer: {
        alignItems: 'center',
        marginTop: 75,
        marginBottom: 50
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
        justifyContent: 'center',
    },
    button: {
        marginHorizontal: 10,
    },
    activityIndicatorContainer: {
        marginTop: 32
    }
})

export default LoginScreen;
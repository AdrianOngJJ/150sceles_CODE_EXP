import React, { useState } from 'react';
import { Alert } from 'react-native';
import auth from '@react-native-firebase/auth';

export default function Login({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [showLoading, setShowLoading] = useState(false);


    const login = async () => {
        setShowLoading(true);
        try {
            const logging = await auth().signInWithEmailAndPassword(email, password);
            setShowLoading(false);
            //if user exists
            if (logging.user) {
                navigation.push('/wherever we want to go after login');
            }

        } catch (err) {
            setShowLoading(false);
            Alert.alert(err.message)
        }
    }

    return (
        <p>Login</p>
    )
}
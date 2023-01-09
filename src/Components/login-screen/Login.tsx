import React from 'react';
import { Text, View } from 'react-native';
import { width } from '../../utils/scale';
import BpLogo from "./bp-logo/bp-logo";
import InputForm from "./input-fields/user-credentials";
import { StyleSheet } from 'react-native';
import {LoginPage} from './Login.styles'

const Login = () => {
    return (
        <LoginPage>
            <BpLogo />
            <InputForm />
        </LoginPage>
    );
};

export default Login;

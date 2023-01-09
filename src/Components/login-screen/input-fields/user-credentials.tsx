import React, { useState, type PropsWithChildren } from 'react';
import {
  ImageStyle,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextStyle,
  useColorScheme,
  View,
  ViewStyle,
} from 'react-native';
import Username from './Username_Password/Username'
import Password from './Username_Password/Password'
import Submit from './Submit button/submit-button';
import {UserCredentialContainer, UserCredentialLabel, UserCredentialInput} from './user-credentials.styles'
import {InputFormContainer} from './user-credentials.styles'

const areAllEmpty = (...theFields: string[]) => {
  let conclusion = true
  for (const field of theFields) {
    if (Boolean(field)){
    conclusion = false; break}
    
  }
  return conclusion;
}

interface LoginFieldProps {
  handleChange: any;
  label: string;
  textInputSize?: number;
}

const InputField = (props: LoginFieldProps) => { //not sure correct type for this parameter
  
  const label = props.label
  console.log(label)
  
  return (<UserCredentialContainer>
    <UserCredentialLabel content={label}>
      {`${label}`}
    </UserCredentialLabel>
    <UserCredentialInput textInputSize={props.textInputSize}/>
    </UserCredentialContainer>
  );
};



const InputForm = () => {
  const [CurrentUsernameInput, SetUsername] = useState('')
  const [CurrentPasswordInput, SetPassword] = useState('')
  
  
  
  return (
    <InputFormContainer>
      <InputField handleChange = {SetUsername} label = {'username and password and more and more and more and more'}/>
      <InputField handleChange = {SetPassword} label = {'password'}/>
      <Submit credentials = {[CurrentUsernameInput, CurrentPasswordInput]}/>
    </InputFormContainer>
  );
};



export default InputForm
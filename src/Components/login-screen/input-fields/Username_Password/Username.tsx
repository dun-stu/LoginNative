import React, { type PropsWithChildren } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
} from 'react-native';

import {UserCredentialContainer, UserCredentialLabel, UserCredentialInput} from '../user-credentials.styles'

interface LoginFieldProps {
  handleChange: any;
  label: string;
}

const Username = (props: LoginFieldProps) => { //not sure correct type for this parameter
  
  const label = props.label
  console.log(label)
  
  return (<UserCredentialContainer>
    <UserCredentialLabel content={label}>
      {`${label}`}
    </UserCredentialLabel>
    <UserCredentialInput/>
    </UserCredentialContainer>
  );
};

export default Username
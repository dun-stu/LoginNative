import React, { type PropsWithChildren } from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
} from 'react-native';
import {UserCredentialContainer, UserCredentialLabel, UserCredentialInput} from '../user-credentials.styles'

const Password = (handleChange: any, label: string) => { //not sure correct type for this parameter
  
  return (<UserCredentialContainer>
    <UserCredentialLabel content={label}>
      label
    </UserCredentialLabel>
    <UserCredentialInput/>
    </UserCredentialContainer>
  );
}

export default Password
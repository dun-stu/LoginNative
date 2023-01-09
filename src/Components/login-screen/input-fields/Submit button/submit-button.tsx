import React, { type PropsWithChildren } from 'react';
import {
    Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {SubmitButton, PlaceholderforSubmitButtonFormatting, SubmitButtonFormatting} from './submit-button.styles'

const Submit = ({credentials: []}) => {
  return (
    <SubmitButtonFormatting>
    <PlaceholderforSubmitButtonFormatting />
    <SubmitButton
    />
    </SubmitButtonFormatting>
  );
};

export default Submit
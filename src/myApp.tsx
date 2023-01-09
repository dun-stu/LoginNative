/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import {Dimensions, Text, View} from 'react-native';
import {Sc, vSc, hSc} from './utils/scale';

import Login from './Components/login-screen/Login';
import WelcomeScreen from './Components/welcome-screen/WelcomeScreen';

const myApp = () => {

  const [IsLoggedIn, ChangeLoginStatus] = useState(false)

  return (

    IsLoggedIn? <WelcomeScreen />: <Login />
  );
};

export default myApp;

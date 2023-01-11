/**
 * This is an example project for Detox library
 * When you open an issue, please add a screen which reproduce the problem
 */

import React, { useState } from 'react';
import { Text, TouchableOpacity, View, Button } from 'react-native';
import {plusIcon} from './icon-plus';
import * as Screens from './Screens/index';

export default function App() {
  const [state, setState] = useState({
    screen: undefined,
    screenProps: {}
  })

  const renderScreenButton = (title, component) => {
    return renderButton(title, () => {
      setState({screen: component});
    });
  };

  const renderButton = (title, onPressCallback) => {
    return (
      <TouchableOpacity onPress={() => {
        onPressCallback();
      }}>
        <Text style={{color: 'blue', marginBottom: 8, fontSize: 20}}>{title}</Text>
      </TouchableOpacity>
    );
  };

  const renderScreen = (screen) => {
    const Screen = state.screen;
    return <Screen setScreen={screen}/>;
  };

  if (state.screen) {
    const screen = state.screen;
    return renderScreen(screen);
  }

  return (
    <View style={{flex: 1, marginTop: 80, marginHorizontal:50}}>
        <Text style={{textAlign: 'center', fontSize: 30, marginBottom: 10}}>
          Detox Template
        </Text>
        <Text style={{fontSize: 20, marginBottom: 20, color: 'grey'}}>
          Welcome to the Detox Template. Please add a screen with your example/issue below.
        </Text>
      {renderScreenButton('Example screen', Screens.ExampleScreen)}
      <Button
          title='Press Me'
          testID={'plus-icon'}
          height={500}
          width={500}
          // shadowStyle={{...buttonShadow, radius: 5, border: scale(25), y: scale(10)}}
          colors={'rgb(0,173,238)'}
          style={{borderRadius: 5}}>
          <View>
            {/* <SVG svg={plusIcon} height={500} width={500} /> */}
          </View>
        </Button>
    </View>
  );
}

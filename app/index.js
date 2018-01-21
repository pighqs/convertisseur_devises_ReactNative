import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';

import Home from './screens/Home';

EStyleSheet.build({
  $primaryCorail: '#d6004A',
  $white: '#fff',
  $border:'#E2E2E2',
  $inputText: '#797979',
  $lightGray: '#F0F0F0',
  
  //$outline:1,
});

export default () => <Home />;

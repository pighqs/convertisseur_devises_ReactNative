import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';

import Navigator from './config/routes';


EStyleSheet.build({
  $primaryCorail: '#d6004A',
  $primaryOrange: '#ff7316',
  $primaryGreen: '#00BD9D',
  $primaryBlue:'#4F5D7B',



  $white: '#fff',
  $border:'#E2E2E2',
  $inputText: '#797979',
  $lightGray: '#F0F0F0',
  $darkText: '#595959',
  
  //$outline:1,
});

export default () => <Navigator />;

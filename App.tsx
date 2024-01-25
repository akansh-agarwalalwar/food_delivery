import {View} from 'react-native';
import React from 'react';
import Main_page from './components/landing_page/Main_page';
import SliderPage from './components/landing_page/SliderPage';

export default function App(): React.JSX.Element {
  return (
    <>
      {/* <Main_page /> */}
      <SliderPage />
    </>
  );
}

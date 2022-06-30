import 'react-native-gesture-handler';
import '@react-navigation/bottom-tabs';
import React from 'react';
import Routes from './routes';
import { AutenticacaoProvider } from './context/AutenticacaoContext';
import CategoriaProvider from './context/CategoriaContext';


export default () => {

  return (
    <AutenticacaoProvider>
      <CategoriaProvider>
        <Routes />
      </CategoriaProvider>
    </AutenticacaoProvider>
  );
}
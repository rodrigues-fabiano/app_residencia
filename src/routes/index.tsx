import React from 'react';

// Navegação
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';

// Páginas
import Login from '../pages/Login'
import Home from '../pages/Home'
import Categorias from '../pages/Categorias'
import Favoritos from '../pages/Favoritos'
import Carrinho from '../pages/Carrinho'
import { Icon } from 'react-native-elements'
import CategoriaDetalhes from '../pages/CategoriaDetalhes';

const TabNavigation = createBottomTabNavigator();
const BottomTabNavigator = () => (

  <TabNavigation.Navigator screenOptions={{
    headerShown: false,
    tabBarHideOnKeyboard: true,
    tabBarStyle: { backgroundColor: '#156e5c', borderBottomWidth: 0, borderTopWidth: 0, }
  }}>
    <TabNavigation.Screen
      name='HomeTabScreen'
      component={Home}
      options={{
        tabBarLabel: 'Home',
        tabBarShowLabel: false,
        tabBarIcon: ({ color, size }) => (
          <Icon name='home' color='#7cccbc' type='foundation' size={24} />
        )
      }} />
    <TabNavigation.Screen
      name='CategoriasTabScreen'
      component={Categorias}
      options={{
        tabBarLabel: 'Categorias',
        tabBarShowLabel: false,
        tabBarIcon: ({ color, size }) => (
          <Icon name='magnifying-glass' color='#7cccbc' type='foundation' size={24} />
        )
      }} />
    <TabNavigation.Screen
      name='FavoritosTabScreen'
      component={Favoritos}
      options={{
        tabBarLabel: 'Favoritos',
        tabBarShowLabel: false,
        tabBarIcon: ({ color, size }) => (
          <Icon name='heart' color='#7cccbc' type='foundation' size={24} />
        )
      }} />
    <TabNavigation.Screen
      name='CarrinhoTabScreen'
      component={Carrinho}
      options={{
        tabBarLabel: 'Carrinho',
        tabBarShowLabel: false,
        tabBarIcon: ({ color, size }) => (
          <Icon name='shopping-cart' color='#7cccbc' type='foundation' size={24} />
        )
      }} />

  </TabNavigation.Navigator>
)

const DrawerNavigation = createDrawerNavigator();
const NavigationDrawer = () => {
  return (
    <DrawerNavigation.Navigator
      screenOptions={{
        drawerStyle: {
          backgroundColor: '#7cccbc',
        },
        drawerActiveTintColor: '#156e5c',
      }}
    >
      <DrawerNavigation.Screen
        name="TabNavigationScreen"
        options={{
          title: 'Home',
          headerStyle: {
            backgroundColor: '#156e5c',
          },
          headerTitleStyle: {
            color: '#7cccbc',
          },
        }}
        component={BottomTabNavigator}
      />
      <DrawerNavigation.Screen
        name="CategoriasDrawerScreen"
        options={{
          title: 'Categorias',
          headerStyle: {
            backgroundColor: '#156e5c',
          },
          headerTitleStyle: {
            color: '#7cccbc',
          },
        }}
        component={Categorias}
      />
      <DrawerNavigation.Screen
        name="CarrinhoDrawerScreen"
        options={{
          title: 'Carrinho',
          headerStyle: {
            backgroundColor: '#156e5c',
          },
          headerTitleStyle: {
            color: '#7cccbc',
          },
        }}
        component={Carrinho}
      />
      <DrawerNavigation.Screen
        name="FavoritosDrawerScreen"
        options={{
          title: 'Favoritos',
          headerStyle: {
            backgroundColor: '#156e5c',
          },
          headerTitleStyle: {
            color: '#7cccbc',
          },
        }}
        component={Favoritos}
      />
    </DrawerNavigation.Navigator>
  );
}

const StackNavigation = createNativeStackNavigator();
const Routes = () => {

  return (
    <NavigationContainer>
      <StackNavigation.Navigator screenOptions={{ headerShown: false }}>
        <StackNavigation.Screen
          name='Login'
          component={Login}
        />
        <StackNavigation.Screen
          name='Home'
          component={NavigationDrawer}
        />
        <StackNavigation.Screen
          name='CategoriaDetalhes'
          component={CategoriaDetalhes}
        />
      </StackNavigation.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
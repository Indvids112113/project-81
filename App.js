import React,{Component}from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import CreatePost from "./Screen/CreatePost";
import Feed from "./Screen/Feed";
import Profile from "./Screen/Profile";
import DrawerNavigator from './Navigation/DrawerNavigator'
import {NavigationContainer}from '@react-navigation/native';

export default class App extends Component{
render(){
  return(
    <NavigationContainer>
    <DrawerNavigator/>
    </NavigationContainer>
  )
}
}
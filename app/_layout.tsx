import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Home from '../screens/Home'
import { BlogProvider } from '../Context/BlogContext';
import TabStack from '../Navigation/Tabstack'
import { NavigationContainer } from '@react-navigation/native';
const _layout = () => {
  return (
    <BlogProvider>
      <NavigationContainer independent={true} >
      <TabStack/>
      </NavigationContainer>
    </BlogProvider>
  )
}

export default _layout

const styles = StyleSheet.create({})
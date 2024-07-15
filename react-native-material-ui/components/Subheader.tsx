import { View, StyleSheet, Text, ScrollView, UIManager, Platform, ToastAndroid } from 'react-native';
import React, { Component, useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { Subheader  } from 'react-native-material-ui';
import { Tester, TestSuite, TestCase } from "@rnoh/testerino"

const SubheaderDemo =()=>{
  return (
    <Tester>
      <TestSuite name='Subheader'>
        <TestCase itShould='Props:text,inset,lines'>
           <View style={{height:200}}>
              <Subheader text='Subheader text,Subheader text,Subheader text,Subheader text,Subheader text' inset lines={2}></Subheader>
           </View>
        </TestCase>
      </TestSuite>

      <TestSuite name='Subheader'>
        <TestCase itShould='Props:text,inset(false),lines(1),style(color:red)'>
           <View style={{height:200}}>
              <Subheader text='Subheader text,Subheader text,Subheader text,Subheader text,Subheader text' inset={false} lines={1} style={{text:{color:'red'}}}></Subheader>
           </View>
        </TestCase>
      </TestSuite>
    </Tester>
  )
}

export default SubheaderDemo
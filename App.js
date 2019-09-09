/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment, Component} from 'react';
import {AppRegistry, StyleSheet} from 'react-native';

import {
  Container,
  Header,
  Button,
  Text,
  Body,
  Form,
  Item as FormItem,
  Input,
  Label,
  Title,
} from 'native-base';

import {StackNavigator, createAppContainer} from 'react-navigation';

import {createStackNavigator} from 'react-navigation-stack';
import {Colors} from 'react-native/Libraries/NewAppScreen';

class LoginActivity extends Component {
  static navigationOptions = {
    title: 'Login',
  };

  OpenRegisterActivityFunction = () => {
    this.props.navigation.navigate('Second');
  };

  render() {
    return (
      <Container style={{alignItems: 'center', justifyContent: 'center'}}>
        <Form>
          <FormItem floatingLabel>
            <Label>Email</Label>
            <Input />
          </FormItem>
          <FormItem floatingLabel last>
            <Label>Password</Label>
            <Input secureTextEntry={true} />
          </FormItem>
          <Button
            title="Login"
            full light primary style={{
              paddingBottom: 4,
              paddingTop: 4,
              marginBottom: 4,
              marginStart: 6,
              marginEnd: 6,
              width:300,
              backgroundColor:'#0091ff',
              borderRadius: 25,
              marginVertical: 10,
              paddingVertical: 13
            }}>
            <Text style={{color: '#ffffff'}}>Login</Text>
          </Button>
          <Button
            onPress={this.OpenRegisterActivityFunction}
            title="Register"
            full light primary style={{marginStart: 6, marginEnd: 6, width:300,
              backgroundColor:'#0091ff',
              borderRadius: 25,
              marginVertical: 10,
              paddingVertical: 13}}>
            <Text style={{color: '#ffffff'}}>Register</Text>
          </Button>
        </Form>
      </Container>
    );
  }
}

class RegisterActivity extends Component {
  static navigateOptions = {
    title: 'RegisterActivity',
  };

  render() {
    return (
      <Container>
        <Form>
          <FormItem floatingLabel>
            <Label>Email</Label>
            <Input />
          </FormItem>
          <FormItem floatingLabel>
            <Label>Name</Label>
            <Input />
          </FormItem>
          <FormItem floatingLabel>
            <Label>Password</Label>
            <Input secureTextEntry={true} />
          </FormItem>
        </Form>
        <Button
          title="Register"
          full light primary style={{
            paddingBottom: 4,
            paddingTop: 4,
            marginStart: 6,
            marginEnd: 6,
            width:300,
            backgroundColor:'#0091ff',
            borderRadius: 25,
            marginVertical: 10,
            paddingVertical: 13,
            alignSelf:'center',
          }}>
          <Text style={{color: '#ffffff'}}>Register</Text>
        </Button>
      </Container>
    );
  }
}
// const App = () => {
//   return (
//   );
// };

const AppNavigator = createStackNavigator({
  First: {screen: LoginActivity},
  Second: {screen: RegisterActivity},
});
export default createAppContainer(AppNavigator);

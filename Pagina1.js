import React from 'react';
import { StyleSheet, Text, View,Button } from 'react-native';

class Pagina1 extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  };
  render() {

    return (

      <View style={{ flex: 1, justifyContent: "space-around", alignItems: "center" }}>
      <Text>Bienvenidos</Text>
        <Button title="Ir a Pagina 2" onPress={() => this.props.navigation.navigate('Pagina2')}/>

        <Button title="Ir a Pagina 3" onPress={() => this.props.navigation.navigate('Pagina3')}/>
      </View>



    );
  }
}


export default Pagina1;

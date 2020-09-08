import React, {PureComponent} from 'react';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Alert,
  Button,
} from 'react-native';

class HomeComponent extends PureComponent {
  constructor() {
    super();
    // write your constructor level code.
    // eg : state initilization
  }

  // Navigation back button call
  goBack = () => {
    Alert.alert(
      'Navigation Alert !',
      'Are you sure want to go back?',
      [
        {
          text: 'CANCEL',
          onPress: () => {
            console.log('CANCEL ');
          },
        },
        {
          text: 'OK',
          onPress: () => {
            this.props.navigation.navigate('Welcome');
            console.log('OK ');
          },
        },
      ],
      {cancelable: false},
    );
  };

  render() {
    const {getName} = this.props;

    return (
        <React.Fragment>
            <Text style={styles.greeting}>
                <Text style={styles.greetHi}>{`Hi! `}</Text>
                <Text style={styles.greetName}>{getName && getName.response ?getName.response:'Guest'}</Text>
            </Text>

      <View style={styles.container}>
        <Text>This is the 3rd screen</Text>
        <Button
          style={styles.button2}
          title="Submit"
          // color="#f194ff"
          onPress={() => this.goBack()}
        />
      </View>
      </React.Fragment>
    );
  }
}

const styles = {
  container: {
    flex: 4,
    marginHorizontal: 16,
    // alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },

  greeting:{textAlign:'right', margin:15, fontSize:16},
  greetHi:{color:'red'},
  greetName:{fontWeight:'bold'}
};

export default HomeComponent;

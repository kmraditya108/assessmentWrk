import React, { PureComponent } from 'react';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Slider,
  TouchableHighlight,
  TouchableOpacity,
  Alert,
  Button,
  FlatList,
  Image
} from 'react-native';
import SwipeButton from 'rn-swipe-button';
import { DeckSwiperHook } from '../../common/DeckSwiper';
import { ListHook } from '../../common/ListHook';
//  import Slider from '@react-native-community/slider';

class DashboardComponent extends PureComponent {
  constructor() {
    super();

    // write your constructor level code.
    // eg : state initilization

    this.state = {
      //Initial Value of slider
      sliderValue: 0,
      disp_array: [],
      loading:false
    };
  }


  getListViewItem = (item) => {
    Alert.alert(item.key);
  }

  // Mathod to have 10 data of https://picsum.photos/list at all the call
  renderListData = () => {
    const { getName } = this.props;
    const { disp_array } = this.props;
    let data = [];

    if (getName.api_res) {
      let randomNo = getName && getName.api_res ? Math.floor(Math.random() * getName.api_res.length) : 0
      for (let i = randomNo; i < randomNo + 9; i++) {
        data.push(getName.api_res[i])
      }
      this.setState({
        loading:false
      });
    }
   
    return data;
  }

  submitNext = () =>{
    this.setState({
      loading:true
    }, ()=>{
      this.renderListData();
    })
    
  }

  render() {
    const { getName, setNameResponse } = this.props
    const {loading} = this.state;
    let forceResetLastButton = null;
    console.log("Dashboard : ", this.props);
    return (
      <View style={styles.container}>
        <View >
        <Text style={styles.greeting}>
          <Text style={styles.greetHi}>{`Hi! `}</Text>
          <Text style={styles.greetName}>{getName && getName.response ? getName.response : 'Guest'}</Text>
        </Text>

        {!loading && this.props.getName && this.props.getName.api_res ? 
          <DeckSwiperHook cards={this.renderListData()} />
          :<Text>Loading...</Text>}
        </View>

<View style={styles.nextStyle}>
        <Text style={styles.info}>For performence I'm calling only 10 data at the first screen load, To get another data, click on next button</Text>
        <Button
          // disabled={!value}
          title="Next"
          // color="#f194ff"
          onPress={() => this.submitNext()}
        />
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{flex:1, flexDirection:'column'},
  nextStyle:{flex:4, position:'absolute', bottom:0},
  info:{fontSize:12, color:'gray', letterSpacing:0.54, margin:10},
  topView: { flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' },
  leftLine: { flex: 0.8, height: 2, backgroundColor: 'gray' },
  rightLine: { flex: 0.8, height: 2, backgroundColor: 'gray' },
  topTitle: { flex: 2, textAlign: 'center', fontWeight: 'bold' },
  greeting: { textAlign: 'right', margin: 15, fontSize: 16 },
  greetHi: { color: 'red' },
  greetName: { fontWeight: 'bold' }
});

export default DashboardComponent;

import React from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  Alert
} from "react-native";

const UselessTextInput = (props) => {
  return (
    <TextInput
      {...props} // Inherit any props passed to it; e.g., multiline, numberOfLines below
      editable
      maxLength={40}
    />
  );
}

export function CommonInputField({label,placeholder, ...props}) {
  const [value, onChangeText] = React.useState('');

  // Function to handle the input field value
  const handleInputField = (e) => {
    onChangeText(e);
  }

  // Sumbit call function
  const submit =async()=>{
    if(value){
      await props.setName(value);
      onChangeText('');
    }else{
      Alert.alert('Kindly input your name to submit')
    }
  }

  return (
    <View style={styles.containerView}>
      <View>
        <Text style={styles.label}>{label}
        {!value && <Text style={styles.info}>({`Kindly fill the input field to enable the button * `})</Text>}
        </Text>
        </View>
      
        <TextInput
          editable
          placeholder={placeholder}
          style={styles.inputField}
          onChangeText={(e)=>handleInputField(e)}
          value={value}
        />
        <Button
          disabled={!value}
          title="Submit"
          // color="#f194ff"
          onPress={() => submit()}
        />
    </View>
  );
}

const styles={
  containerView:{
    // flex:1,
    justifyContent: 'center',
    textAlign:'center'
  },
  label:{
    borderColor: 'gray', fontWeight:"bold", color:"gray" 
  },
  inputField:{
    borderColor: 'gray', borderBottomWidth: 1, marginBottom:8 
  },
  submitBtn:{
    marginTop:'10px'
  },
  info:{color:'red', fontSize:8, textAlign:"center"}
}
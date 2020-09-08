import React, { PureComponent } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Alert
} from "react-native";
import {connect} from 'react-redux';
import {setNameAction} from '../action/WelcomeAction'
import WelcomeComponent from '../component/WelcomeComponent'

class WelcomeContainer extends PureComponent {
    constructor(){
        super();
        // write your constructor level code.
        // eg : state initilization
    }

    componentDidUpdate(prevProps){
        const {setNameResponse} = this.props;
        if(prevProps !== this.props){
            if(prevProps.setNameResponse !== this.props.setNameResponse && this.props.setNameResponse){
                console.log("setNameResponse :: ", setNameResponse);
                this.props.navigation.navigate('Dashboard',{...this.porps});
                // Alert.alert('Success!','You have submitted successfully.', [
                //     { text: 'OK', 
                //     onPress: () => {
                //       console.log("OK ", this.props.navigation.navigate('Dashboard'));
                      
                //     }
                //   }
                //   ],{ cancelable: false });
            }
        }
    }


    render() {
        return (
            <WelcomeComponent {...this.props}/>
        )
    }
}

// To map the redux state to this component
const mapStateToProps = (state) => ({
    setNameResponse:state.WelcomeReducer.response
})

// To call the action, so that redux state will change
const mapDispatchToProps = (dispatch) =>({
    setName:(data) => dispatch(setNameAction(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(WelcomeContainer);//connect(mapStateToProps,mapDispatchToProps)(WelcomeContainer);